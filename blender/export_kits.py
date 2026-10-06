"""Build obamka GLB kits in Blender 3.5 and export to public/models.

Models live in Three.js Y-up space, converted to Blender Z-up via t2b().
Named empties match the game: legL, armR, body, eyeL, stepA, etc.
"""
from __future__ import annotations

import math
import os
import random
import sys
from pathlib import Path

import bpy
from mathutils import Euler, Vector

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "models"
OUT.mkdir(parents=True, exist_ok=True)

BLENDER = True


def t2b(x, y, z):
    """Three.js (x, y, z) Y-up → Blender (x, -z, y) Z-up."""
    return (float(x), float(-z), float(y))


def clear_scene():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)
    for block in (bpy.data.meshes, bpy.data.materials, bpy.data.images, bpy.data.armatures):
        for item in list(block):
            block.remove(item)


def hex_color(h):
    r = ((h >> 16) & 255) / 255.0
    g = ((h >> 8) & 255) / 255.0
    b = (h & 255) / 255.0
    return (r, g, b, 1.0)


def make_noise_image(name, size, base, amp, seed=1, tint=(1, 1, 1), streaks=0, window=None, grout=False):
    img = bpy.data.images.new(name, width=size, height=size, alpha=False)
    pixels = [0.0] * (size * size * 4)
    rng = random.Random(seed)
    for y in range(size):
        for x in range(size):
            n = rng.random()
            v = max(0.0, min(1.0, (base + (n - 0.5) * amp) / 255.0))
            i = (y * size + x) * 4
            pixels[i] = v * tint[0]
            pixels[i + 1] = v * tint[1]
            pixels[i + 2] = v * tint[2]
            pixels[i + 3] = 1.0
    if streaks:
        rng2 = random.Random(seed + 9)
        for _ in range(streaks):
            x = rng2.randint(2, size - 3)
            length = rng2.randint(size // 4, size - 4)
            y0 = rng2.randint(0, size // 3)
            w = 1 if rng2.random() < 0.6 else 2
            dark = 0.55 + rng2.random() * 0.2
            for y in range(y0, min(size, y0 + length)):
                for dx in range(w):
                    i = (y * size + min(size - 1, x + dx)) * 4
                    pixels[i] *= dark
                    pixels[i + 1] *= dark
                    pixels[i + 2] *= dark
    if grout:
        for y in range(size):
            for x in range(size):
                if x < 3 or y < 3:
                    i = (y * size + x) * 4
                    pixels[i] *= 0.45
                    pixels[i + 1] *= 0.45
                    pixels[i + 2] *= 0.48
    if window:
        x0, y0, w, h, lit = window
        for y in range(y0, min(size, y0 + h)):
            for x in range(x0, min(size, x0 + w)):
                i = (y * size + x) * 4
                if lit:
                    pixels[i:i + 3] = [0.95, 0.72, 0.28]
                else:
                    pixels[i:i + 3] = [0.12, 0.13, 0.15]
        mx, my = x0 + w // 2, y0 + h // 2
        for y in range(y0, min(size, y0 + h)):
            i = (y * size + mx) * 4
            pixels[i:i + 3] = [0.25, 0.26, 0.28]
        for x in range(x0, min(size, x0 + w)):
            i = (my * size + x) * 4
            pixels[i:i + 3] = [0.25, 0.26, 0.28]
    img.pixels = pixels
    img.pack()
    return img


def mat(name, color, img=None, emit=0.0):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    nt = m.node_tree
    bsdf = nt.nodes.get("Principled BSDF")
    col = color if len(color) == 4 else (*color, 1)
    bsdf.inputs["Base Color"].default_value = col
    bsdf.inputs["Roughness"].default_value = 0.92
    bsdf.inputs["Metallic"].default_value = 0.0
    if "Specular" in bsdf.inputs:
        bsdf.inputs["Specular"].default_value = 0.15
    if "Emission" in bsdf.inputs:
        bsdf.inputs["Emission"].default_value = (0.0, 0.0, 0.0, 1.0)
    if "Emission Strength" in bsdf.inputs:
        bsdf.inputs["Emission Strength"].default_value = 0.0
    if emit > 0:
        if "Emission" in bsdf.inputs:
            bsdf.inputs["Emission"].default_value = col
        if "Emission Strength" in bsdf.inputs:
            bsdf.inputs["Emission Strength"].default_value = emit
    if img:
        tex = nt.nodes.new("ShaderNodeTexImage")
        tex.image = img
        tex.interpolation = "Closest"
        nt.links.new(tex.outputs["Color"], bsdf.inputs["Base Color"])
    m.diffuse_color = col
    return m


def smooth(ob, angle=50):
    for p in ob.data.polygons:
        p.use_smooth = True
    ob.data.use_auto_smooth = True
    ob.data.auto_smooth_angle = math.radians(angle)


def apply_bevel(ob, width=0.018, segments=2):
    if width <= 0:
        return
    bev = ob.modifiers.new("Bevel", "BEVEL")
    bev.width = width
    bev.segments = segments
    bev.limit_method = "ANGLE"
    bev.angle_limit = math.radians(40)
    bpy.context.view_layer.objects.active = ob
    ob.select_set(True)
    bpy.ops.object.modifier_apply(modifier="Bevel")
    ob.select_set(False)


def attach_local(ob, parent, x, y, z, rx=0, ry=0, rz=0):
    """Parent then set local pos from Three.js coords so pivots stay correct."""
    if parent:
        ob.parent = parent
    ob.location = Vector(t2b(x, y, z))
    if rx or ry or rz:
        ob.rotation_euler = Euler((rx, -rz, ry), "XYZ")


def empty(name, loc=(0, 0, 0), parent=None):
    ob = bpy.data.objects.new(name, None)
    ob.empty_display_size = 0.12
    bpy.context.scene.collection.objects.link(ob)
    attach_local(ob, parent, *loc)
    return ob


def link_mesh(name, ob, mat, parent=None, bevel=0.0, x=0, y=0, z=0, rx=0, ry=0, rz=0):
    ob.name = name
    ob.data.name = name
    if mat:
        ob.data.materials.append(mat)
    smooth(ob)
    if bevel > 0:
        apply_bevel(ob, bevel)
    attach_local(ob, parent, x, y, z, rx, ry, rz)
    return ob


def add_box(name, w, h, d, x, y, z, material, parent=None, bevel=0.0):
    bpy.ops.mesh.primitive_cube_add(size=1, location=(0, 0, 0))
    ob = bpy.context.object
    ob.scale = (w, d, h)
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    return link_mesh(name, ob, material, parent, bevel, x, y, z)


def add_cyl(name, r_top, r_bot, h, x, y, z, material, parent=None, segs=16, rx=0, ry=0, rz=0):
    bpy.ops.mesh.primitive_cone_add(
        radius1=r_bot, radius2=r_top, depth=h, vertices=segs, location=(0, 0, 0)
    )
    ob = bpy.context.object
    return link_mesh(name, ob, material, parent, 0, x, y, z, rx, ry, rz)


def add_sph(name, r, x, y, z, material, parent=None, segs=16, rings=10):
    bpy.ops.mesh.primitive_uv_sphere_add(
        radius=r, segments=segs, ring_count=rings, location=(0, 0, 0)
    )
    ob = bpy.context.object
    return link_mesh(name, ob, material, parent, 0, x, y, z)


def add_torus(name, major, minor, x, y, z, material, parent=None, rx=0):
    bpy.ops.mesh.primitive_torus_add(
        major_radius=major, minor_radius=minor, major_segments=20, minor_segments=8, location=(0, 0, 0)
    )
    ob = bpy.context.object
    return link_mesh(name, ob, material, parent, 0, x, y, z, rx=rx)


def join_all_meshes():
    meshes = [o for o in bpy.context.scene.objects if o.type == "MESH"]
    if len(meshes) < 2:
        return
    bpy.ops.object.select_all(action="DESELECT")
    for o in meshes:
        o.select_set(True)
    bpy.context.view_layer.objects.active = meshes[0]
    bpy.ops.object.join()


def export_glb(name, join=False):
    if join:
        join_all_meshes()
    path = str(OUT / f"{name}.glb")
    # drop leftover cameras/lights
    for ob in list(bpy.data.objects):
        if ob.type in {"CAMERA", "LIGHT"}:
            bpy.data.objects.remove(ob, do_unlink=True)
    bpy.ops.export_scene.gltf(
        filepath=path,
        export_format="GLB",
        export_apply=True,
        export_cameras=False,
        export_lights=False,
        export_extras=False,
        export_yup=True,
        export_texcoords=True,
        export_normals=True,
        export_materials="EXPORT",
        export_colors=False,
        export_skins=False,
        export_animations=False,
    )
    size = os.path.getsize(path)
    print(f"  {name}.glb  {size} bytes")
    return size


BAKE_KITS = {
    "panel_wall", "window_lit", "window_dark", "entrance",
    "shop_magma", "shop_kik", "courtyard",
}


def setup_cycles(samples=20):
    scn = bpy.context.scene
    scn.render.engine = "CYCLES"
    scn.cycles.device = "GPU"
    scn.cycles.samples = samples
    scn.cycles.use_denoising = False
    scn.render.bake.use_pass_direct = True
    scn.render.bake.use_pass_indirect = True
    scn.render.bake.use_pass_color = True
    scn.render.bake.use_pass_emit = True
    scn.render.bake.margin = 6
    try:
        prefs = bpy.context.preferences.addons["cycles"].preferences
        prefs.compute_device_type = "METAL"
        prefs.get_devices()
        for d in prefs.devices:
            d.use = True
        print("  cycles GPU", [d.name for d in prefs.devices if d.use])
    except Exception as err:
        print("  cycles CPU fallback", err)
        scn.cycles.device = "CPU"


def set_overcast_world():
    world = bpy.context.scene.world
    if not world:
        world = bpy.data.worlds.new("World")
        bpy.context.scene.world = world
    world.use_nodes = True
    nt = world.node_tree
    bg = nt.nodes.get("Background")
    if bg:
        bg.inputs[0].default_value = (0.42, 0.46, 0.54, 1.0)
        bg.inputs[1].default_value = 0.85


def add_bake_lights():
    def lamp(kind, loc, energy, rot=(0, 0, 0), size=8.0):
        bpy.ops.object.light_add(type=kind, location=loc)
        ob = bpy.context.object
        ob.data.energy = energy
        ob.rotation_euler = rot
        if kind == "AREA":
            ob.data.size = size
        return ob

    # Three.js sun (40, 80, 30) → Blender (40, -30, 80)
    lamp("SUN", (40, -30, 80), 3.4, (math.radians(48), math.radians(15), math.radians(25)))
    lamp("AREA", (24, -24, 18), 220, (math.radians(70), 0, 0), 22)
    lamp("AREA", (8, 6, 12), 90, (math.radians(40), math.radians(-20), 0), 10)


def unwrap_mesh(ob):
    if ob.type != "MESH":
        return
    bpy.ops.object.select_all(action="DESELECT")
    ob.select_set(True)
    bpy.context.view_layer.objects.active = ob
    if not ob.data.uv_layers:
        ob.data.uv_layers.new(name="UVMap")
    bpy.ops.object.mode_set(mode="EDIT")
    bpy.ops.mesh.select_all(action="SELECT")
    bpy.ops.uv.smart_project(angle_limit=66.0, island_margin=0.04)
    bpy.ops.object.mode_set(mode="OBJECT")
    ob.select_set(False)


def bake_size_for(ob):
    dim = max(ob.dimensions) if ob.dimensions else 1.0
    if dim > 10:
        return 1024
    if dim > 2.5:
        return 512
    return 256


def bake_all_meshes():
    set_overcast_world()
    add_bake_lights()
    meshes = [o for o in bpy.context.scene.objects if o.type == "MESH" and o.data.materials]
    for ob in meshes:
        unwrap_mesh(ob)
    bpy.context.view_layer.update()
    n = len(meshes)
    for i, ob in enumerate(meshes):
        mat = ob.data.materials[0]
        if not mat or not mat.use_nodes:
            continue
        size = bake_size_for(ob)
        img = bpy.data.images.new(f"{ob.name}_bake", width=size, height=size, alpha=False)
        img.generated_color = (0.45, 0.45, 0.46, 1.0)
        nt = mat.node_tree
        tex = nt.nodes.new("ShaderNodeTexImage")
        tex.image = img
        tex.interpolation = "Linear"
        tex.location = (-400, 200)
        for node in nt.nodes:
            node.select = False
        tex.select = True
        nt.nodes.active = tex
        bpy.ops.object.select_all(action="DESELECT")
        ob.select_set(True)
        bpy.context.view_layer.objects.active = ob
        try:
            bpy.ops.object.bake(type="COMBINED")
        except Exception as err:
            print("  bake fail", ob.name, err)
            continue
        img.pack()
        bsdf = nt.nodes.get("Principled BSDF")
        if not bsdf:
            continue
        for link in list(nt.links):
            if link.to_socket == bsdf.inputs["Base Color"]:
                nt.links.remove(link)
        nt.links.new(tex.outputs["Color"], bsdf.inputs["Base Color"])
        if "Emission Strength" in bsdf.inputs:
            bsdf.inputs["Emission Strength"].default_value = 0.0
        if "Emission" in bsdf.inputs:
            bsdf.inputs["Emission"].default_value = (0, 0, 0, 1)
        print(f"    bake {i + 1}/{n} {ob.name} {size}")


def block(name, x0, y0, z0, x1, y1, z1, material, parent=None, bevel=0.0):
    w, h, d = abs(x1 - x0), abs(y1 - y0), abs(z1 - z0)
    cx, cy, cz = (x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2
    return add_box(name, w, h, d, cx, cy, cz, material, parent, bevel)


# ---------- kits ----------

def build_player():
    clear_scene()
    skin_img = make_noise_image("skin", 64, 130, 18, 2, tint=(0.85, 0.62, 0.42))
    shirt_img = make_noise_image("shirt", 64, 230, 12, 3, tint=(0.96, 0.94, 0.90))
    pants_img = make_noise_image("pants", 64, 55, 14, 4, tint=(0.35, 0.42, 0.58))
    skin = mat("skin", (0.48, 0.31, 0.20), skin_img)
    shirt = mat("shirt", (0.95, 0.94, 0.91), shirt_img)
    pants = mat("pants", (0.17, 0.24, 0.36), pants_img)
    shoe = mat("shoe", (0.91, 0.91, 0.88))
    hair = mat("hair", (0.05, 0.05, 0.05))
    gold = mat("gold", (0.79, 0.64, 0.15))
    gun_m = mat("gun", (0.13, 0.13, 0.15))
    dark = mat("gunDark", (0.20, 0.20, 0.22))
    barrel = mat("barrel", (0.33, 0.33, 0.36))

    root = empty("player", (0, 0, 0))

    legL = empty("legL", (-0.14, 0.9, 0), root)
    add_cyl("thighL", 0.11, 0.095, 0.50, 0, -0.20, 0, pants, legL, 18)
    add_cyl("shinL", 0.095, 0.08, 0.40, 0, -0.64, 0.02, pants, legL, 18)
    add_box("shoeL", 0.17, 0.09, 0.30, 0, -0.90, 0.07, shoe, legL, 0.012)
    add_box("soleL", 0.175, 0.03, 0.31, 0, -0.95, 0.07, mat("sole", (0.12, 0.12, 0.12)), legL)

    legR = empty("legR", (0.14, 0.9, 0), root)
    add_cyl("thighR", 0.11, 0.095, 0.50, 0, -0.20, 0, pants, legR, 18)
    add_cyl("shinR", 0.095, 0.08, 0.40, 0, -0.64, 0.02, pants, legR, 18)
    add_box("shoeR", 0.17, 0.09, 0.30, 0, -0.90, 0.07, shoe, legR, 0.012)
    add_box("soleR", 0.175, 0.03, 0.31, 0, -0.95, 0.07, mat("sole2", (0.12, 0.12, 0.12)), legR)

    torso = empty("torso", (0, 1.22, 0), root)
    add_cyl("body", 0.24, 0.28, 0.64, 0, 0, 0, shirt, torso, 20)
    add_box("placket", 0.10, 0.50, 0.08, 0, 0.04, 0.20, shirt, torso, 0.01)
    add_box("collar", 0.30, 0.08, 0.16, 0, 0.30, 0.10, shirt, torso, 0.01)
    add_sph("button", 0.025, 0, 0.08, 0.24, gold, torso, 10, 8)

    chain = add_torus("chain", 0.16, 0.018, 0, 1.42, 0.08, gold, root, rx=0.9)
    chain.name = "chain"

    armL = empty("armL", (-0.34, 1.50, 0), root)
    add_cyl("sleeveL", 0.08, 0.07, 0.36, 0, -0.10, 0, shirt, armL, 16)
    add_cyl("foreL", 0.065, 0.055, 0.38, 0, -0.46, 0, skin, armL, 16)
    add_sph("handL", 0.058, 0, -0.68, 0.02, skin, armL, 12, 8)

    armR = empty("armR", (0.34, 1.50, 0), root)
    add_cyl("sleeveR", 0.08, 0.07, 0.36, 0, -0.10, 0, shirt, armR, 16)
    add_cyl("foreR", 0.065, 0.055, 0.38, 0, -0.46, 0, skin, armR, 16)
    add_sph("handR", 0.058, 0, -0.68, 0.02, skin, armR, 12, 8)

    head = empty("head", (0, 1.76, 0), root)
    add_sph("skull", 0.20, 0, 0, 0, skin, head, 20, 14)
    add_sph("nose", 0.032, 0, -0.02, 0.19, skin, head, 10, 8)
    add_sph("earL", 0.038, -0.185, 0.02, 0, skin, head, 10, 8)
    add_sph("earR", 0.038, 0.185, 0.02, 0, skin, head, 10, 8)
    add_sph("brow", 0.04, 0, 0.06, 0.16, skin, head, 8, 6)
    eye = mat("eyeDark", (0.05, 0.04, 0.04))
    add_sph("eyeLmesh", 0.028, -0.06, 0.03, 0.175, eye, head, 10, 8)
    add_sph("eyeRmesh", 0.028, 0.06, 0.03, 0.175, eye, head, 10, 8)

    cap = add_sph("cap", 0.215, 0, 1.84, 0, hair, root, 20, 12)
    cap.name = "cap"
    visor = add_box("visor", 0.38, 0.03, 0.16, 0, 1.90, 0.16, hair, root, 0.006)
    visor.name = "visor"

    gun = empty("gun", (0, -0.58, 0.12), armR)
    pistol = empty("pistol", (0, 0, 0), gun)
    add_box("slide", 0.07, 0.10, 0.28, 0, 0.02, 0.12, gun_m, pistol, 0.006)
    add_box("grip", 0.055, 0.16, 0.08, 0, -0.08, 0.0, gun_m, pistol, 0.006)
    minigun = empty("minigun", (0, 0, 0), gun)
    body = add_cyl("mgBody", 0.14, 0.16, 0.36, -0.18, 0.04, 0.08, dark, minigun, 12, rx=math.pi / 2)
    for i in range(6):
        a = i / 6 * math.pi * 2
        add_cyl(
            f"barrel{i}",
            0.025,
            0.025,
            0.85,
            -0.18 + math.cos(a) * 0.09,
            0.04 + math.sin(a) * 0.09,
            0.58,
            barrel,
            minigun,
            8,
            rx=math.pi / 2,
        )
    return "player"


def build_stalker():
    clear_scene()
    hide = make_noise_image("hide", 128, 18, 10, 11, tint=(0.08, 0.07, 0.09), streaks=18)
    body_m = mat("body", (0.04, 0.04, 0.05), hide)
    claw = mat("claw", (0.10, 0.07, 0.06))
    eye = mat("eye", (0.55, 0.0, 0.0), emit=6.0)
    root = empty("stalker", (0, 0, 0))
    body = empty("body", (0, 0, 0), root)
    add_cyl("legs", 0.20, 0.30, 1.90, 0, 0.95, 0, body_m, body, 18)
    add_cyl("chest", 0.24, 0.40, 1.25, 0, 2.40, 0, body_m, body, 18)
    add_sph("skull", 0.32, 0, 3.28, 0.04, body_m, body, 18, 12)
    add_box("jaw", 0.22, 0.07, 0.20, 0, 3.02, 0.20, claw, body, 0.01)
    for i in range(5):
        add_torus(f"rib{i}", 0.30 + i * 0.02, 0.025, 0, 1.90 + i * 0.22, 0.04, body_m, body)
    for sx, side in ((-1, "L"), (1, "R")):
        add_cyl(f"arm{side}", 0.07, 0.04, 2.45, sx * 0.50, 1.72, 0.05, body_m, body, 12)
        add_sph(f"hand{side}", 0.08, sx * 0.50, 0.50, 0.10, claw, body, 10, 8)
        for k in range(3):
            add_box(f"claw{side}{k}", 0.03, 0.24, 0.03, sx * (0.44 + k * 0.045), 0.34, 0.18, claw, body, 0.004)
        e = add_sph(f"eye{side}", 0.10, sx * 0.11, 3.30, 0.28, eye, body, 14, 10)
        e.name = f"eye{side}"
        e.data.materials.clear()
        e.data.materials.append(eye)
    return "stalker"


def build_panel():
    clear_scene()
    conc = make_noise_image(
        "panel", 256, 200, 18, 21, tint=(0.92, 0.91, 0.86), streaks=14, grout=True,
    )
    m = mat("panel", (0.82, 0.81, 0.76), conc)
    frame = mat("frame", (0.52, 0.53, 0.54))
    dark = mat("pane", (0.16, 0.17, 0.19))
    root = empty("panel_wall", (0, 0, 0))
    # origin = bottom-center of outer face; thickness goes -Z into the building
    add_box("slab", 3.0, 3.0, 0.28, 0, 1.5, -0.14, m, root, 0.02)
    add_box("jointN", 3.02, 0.05, 0.32, 0, 0.025, -0.14, frame, root)
    add_box("jointS", 3.02, 0.05, 0.32, 0, 2.975, -0.14, frame, root)
    add_box("jointW", 0.05, 3.0, 0.32, -1.475, 1.5, -0.14, frame, root)
    add_box("jointE", 0.05, 3.0, 0.32, 1.475, 1.5, -0.14, frame, root)
    add_box("recess", 1.38, 1.52, 0.12, 0, 1.55, -0.04, dark, root)
    add_box("sill", 1.52, 0.08, 0.22, 0, 0.76, 0.06, frame, root, 0.01)
    add_box("lintel", 1.52, 0.07, 0.16, 0, 2.34, 0.04, frame, root, 0.008)
    add_box("jambL", 0.07, 1.52, 0.16, -0.72, 1.55, 0.04, frame, root)
    add_box("jambR", 0.07, 1.52, 0.16, 0.72, 1.55, 0.04, frame, root)
    return "panel_wall"


def build_window(lit):
    clear_scene()
    frame = mat("frame", (0.32, 0.33, 0.35))
    pane = mat("lamp" if lit else "dark", (0.95, 0.72, 0.28) if lit else (0.08, 0.09, 0.10), emit=3.5 if lit else 0)
    root = empty("window_lit" if lit else "window_dark", (0, 0, 0))
    add_box("outer", 1.58, 1.68, 0.07, 0, 0, 0, frame, root, 0.008)
    add_box("glass", 1.30, 1.40, 0.04, 0, 0, 0.04, pane, root)
    add_box("mullionV", 0.05, 1.40, 0.05, 0, 0, 0.05, frame, root)
    add_box("mullionH", 1.30, 0.05, 0.05, 0, 0, 0.05, frame, root)
    return "window_lit" if lit else "window_dark"


def build_entrance():
    clear_scene()
    conc_img = make_noise_image("ent", 128, 150, 18, 31, tint=(0.72, 0.72, 0.70), streaks=8)
    conc = mat("concrete", (0.60, 0.60, 0.58), conc_img)
    dark = mat("dark", (0.04, 0.04, 0.05))
    door_img = make_noise_image("door", 64, 70, 16, 41, tint=(0.45, 0.28, 0.20))
    door = mat("door", (0.29, 0.16, 0.13), door_img)
    lamp = mat("lamp", (1.0, 0.82, 0.45), emit=4.0)
    plate = mat("plate", (0.16, 0.23, 0.42))
    metal = mat("metal", (0.60, 0.54, 0.35))
    root = empty("entrance", (0, 0, 0))
    add_box("recess", 1.75, 2.50, 0.10, 0, 1.25, 0.02, dark, root)
    add_box("door", 1.12, 2.18, 0.08, 0, 1.12, 0.09, door, root, 0.01)
    add_box("handle", 0.08, 0.18, 0.05, 0.42, 1.15, 0.15, metal, root)
    add_box("canopy", 3.3, 0.16, 1.85, 0, 2.68, 0.88, conc, root, 0.02)
    add_box("step", 2.7, 0.16, 1.55, 0, 0.08, 0.78, conc, root, 0.015)
    add_box("postL", 0.28, 2.58, 0.28, -1.48, 1.29, 1.58, conc, root, 0.02)
    add_box("postR", 0.28, 2.58, 0.28, 1.48, 1.29, 1.58, conc, root, 0.02)
    add_box("lamp", 0.28, 0.14, 0.28, 0, 2.50, 0.88, lamp, root)
    add_box("plate", 0.34, 0.24, 0.05, 0.92, 2.02, 0.14, plate, root)
    return "entrance"


def build_shop_magma():
    clear_scene()
    wall = mat("wall", (0.78, 0.77, 0.74), make_noise_image("mw", 128, 200, 14, 51, tint=(0.80, 0.78, 0.74)))
    red = mat("red", (0.77, 0.06, 0.09))
    roof = mat("roof", (0.54, 0.54, 0.54))
    conc = mat("concrete", (0.60, 0.60, 0.58))
    glow = mat("lamp", (1.0, 0.42, 0.10), emit=4.0)
    dark = mat("dark", (0.08, 0.09, 0.12))
    white = mat("white", (0.95, 0.93, 0.91))
    root = empty("shop_magma", (0, 0, 0))
    add_box("body", 1, 2.55, 1, 0, 1.275, 0, wall, root, 0.012)
    add_box("band", 1.05, 1.15, 1.05, 0, 3.125, 0, red, root, 0.01)
    add_box("roof", 1.10, 0.08, 1.10, 0, 3.74, 0, roof, root)
    add_box("parapet", 1.08, 0.20, 1.08, 0, 3.86, 0, conc, root, 0.01)
    add_box("door", 0.12, 2.15, 0.04, 0, 1.15, 0.52, dark, root)
    add_box("winL", 0.16, 1.70, 0.04, -0.28, 1.35, 0.52, glow, root)
    add_box("winR", 0.16, 1.70, 0.04, 0.28, 1.35, 0.52, glow, root)
    add_box("canopy", 0.92, 0.12, 0.20, 0, 2.52, 0.60, red, root, 0.01)
    add_box("pylon", 0.05, 4.1, 0.08, 0.54, 2.05, 0.58, red, root, 0.008)
    add_box("badge", 0.07, 1.0, 0.10, 0.54, 3.05, 0.58, white, root)
    add_box("ac", 0.12, 0.48, 0.12, 0.12, 4.10, 0.05, conc, root, 0.01)
    return "shop_magma"


def build_shop_kik():
    clear_scene()
    brown = mat("brown", (0.35, 0.20, 0.09), make_noise_image("kb", 64, 90, 16, 61, tint=(0.45, 0.26, 0.12)))
    red = mat("red", (0.72, 0.08, 0.08))
    brown_lt = mat("brownLt", (0.43, 0.26, 0.14))
    roof = mat("roof", (0.29, 0.16, 0.09))
    glow = mat("lamp", (0.82, 0.28, 0.10), emit=3.5)
    dark = mat("dark", (0.10, 0.06, 0.06))
    root = empty("shop_kik", (0, 0, 0))
    bands = [(0.00, 0.58, brown), (0.58, 1.16, red), (1.16, 1.74, brown_lt), (1.74, 2.32, red), (2.32, 3.2, brown)]
    for i, (y0, y1, m) in enumerate(bands):
        add_box(f"band{i}", 1, y1 - y0, 1, 0, (y0 + y1) / 2, 0, m, root, 0.006)
    add_box("roof", 1.08, 0.08, 1.08, 0, 3.27, 0, roof, root)
    add_box("door", 0.10, 2.05, 0.04, 0, 1.10, 0.52, dark, root)
    add_box("winL", 0.14, 1.35, 0.04, -0.30, 1.45, 0.52, glow, root)
    add_box("winR", 0.14, 1.35, 0.04, 0.30, 1.45, 0.52, glow, root)
    return "shop_kik"


def build_apt():
    clear_scene()
    wood = mat("wood", (0.29, 0.23, 0.16), make_noise_image("wood", 64, 90, 20, 71, tint=(0.42, 0.32, 0.20)))
    cloth = mat("cloth", (0.23, 0.29, 0.42), make_noise_image("cloth", 64, 80, 18, 72, tint=(0.28, 0.34, 0.48)))
    fridge = mat("fridge", (0.78, 0.78, 0.77))
    stove = mat("stove", (0.23, 0.23, 0.23))
    table = mat("table", (0.54, 0.42, 0.29), make_noise_image("tab", 64, 120, 16, 73, tint=(0.55, 0.42, 0.28)))
    leg = mat("leg", (0.35, 0.23, 0.13))
    carpet = mat("carpet", (0.48, 0.16, 0.16), make_noise_image("car", 64, 90, 22, 74, tint=(0.55, 0.18, 0.18)))
    tv = mat("tv", (0.12, 0.12, 0.12))
    lamp = mat("lamp", (0.85, 0.72, 0.45), emit=3.0)
    door = mat("door", (0.35, 0.23, 0.16))
    root = empty("apt_kit", (0, 0, 0))
    add_box("sofaBase", 2.9, 0.42, 1.2, 1.65, 0.21, 4.2, wood, root, 0.02)
    add_box("seat", 2.8, 0.48, 0.85, 1.65, 0.66, 4.12, cloth, root, 0.02)
    add_box("back", 2.9, 0.73, 0.20, 1.65, 0.78, 4.65, cloth, root, 0.02)
    add_box("armL", 0.18, 0.55, 0.90, 0.32, 0.70, 4.15, cloth, root, 0.015)
    add_box("armR", 0.18, 0.55, 0.90, 2.98, 0.70, 4.15, cloth, root, 0.015)
    add_box("carpet", 2.25, 1.45, 0.05, 1.275, 1.625, 7.35, carpet, root)
    add_box("fridge", 0.90, 1.70, 0.80, 6.85, 0.85, 0.70, fridge, root, 0.015)
    add_box("handle", 0.08, 0.28, 0.04, 7.28, 0.90, 1.12, mat("chrome", (0.53, 0.53, 0.53)), root)
    add_box("stove", 1.40, 0.85, 1.20, 8.20, 0.425, 0.90, stove, root, 0.012)
    add_cyl("burner1", 0.12, 0.12, 0.04, 7.85, 0.88, 0.70, mat("b1", (0.13, 0.13, 0.13)), root, 12)
    add_cyl("burner2", 0.12, 0.12, 0.04, 8.45, 0.88, 0.70, mat("b2", (0.13, 0.13, 0.13)), root, 12)
    add_box("table", 2.6, 0.09, 1.7, 7.6, 0.90, 2.55, table, root, 0.015)
    for i, (x, z) in enumerate(((6.48, 1.95), (8.68, 3.05), (6.48, 3.05), (8.68, 1.95))):
        add_box(f"tleg{i}", 0.12, 0.85, 0.12, x, 0.42, z, leg, root, 0.008)
    add_box("tv", 0.08, 1.10, 1.80, 9.10, 0.95, 5.30, tv, root, 0.008)
    add_box("door", 0.06, 2.10, 1.10, 9.18, 1.05, 2.95, door, root, 0.01)
    add_box("ceilLamp", 0.62, 0.08, 0.62, 4.4, 2.68, 3.70, lamp, root)
    return "apt_kit"


def _humanoid(p, pose, colors, name):
    segs = 16
    parts_parent = empty(name, (0, 0, 0))
    skin = mat(f"{name}_skin", colors["skin"])
    shirt = mat(f"{name}_shirt", colors["shirt"])
    pants = mat(f"{name}_pants", colors["pants"])
    eye = mat(f"{name}_eye", colors["eye"])
    hair_m = mat(f"{name}_hair", colors["hair"]) if colors.get("hair") else None
    leg_h, torso_h, hunch = 0.85, 0.62, p.get("hunch", 0)
    lL = leg_h * p.get("legL", 1)
    lR = leg_h * p.get("legR", 1)
    base_y = max(lL, lR)
    swing = pose.get("swing", 0)
    tw = 0.5 * p.get("torsoW", 1)
    aL = 0.75 * p.get("armL", 1)
    aR = 0.75 * p.get("armR", 1)
    shoulder_y = base_y + torso_h - 0.05
    hs = p.get("headScale", 1)
    neck = p.get("neck", 0)
    head_y = shoulder_y + 0.1 + neck + 0.17 * hs
    add_cyl(f"{name}_legL", 0.115, 0.09, lL, -0.15, base_y - lL / 2, 0, pants, parts_parent, segs, rx=swing)
    add_cyl(f"{name}_legR", 0.115, 0.09, lR, 0.15, base_y - lR / 2, 0, pants, parts_parent, segs, rx=-swing)
    add_sph(f"{name}_footL", 0.09, -0.15, 0.08, 0.04, pants, parts_parent, 12, 8)
    add_sph(f"{name}_footR", 0.09, 0.15, 0.08, 0.04, pants, parts_parent, 12, 8)
    add_box(f"{name}_torso", tw, torso_h, 0.30, 0, base_y + torso_h / 2, -hunch * 0.3, shirt, parts_parent, 0.02)
    add_cyl(f"{name}_armL", 0.075, 0.06, aL, -tw / 2 - 0.08, shoulder_y, -hunch * 0.3, skin, parts_parent, segs, rx=-swing * 0.8 + pose.get("armsUp", 0), rz=0.08)
    add_cyl(f"{name}_armR", 0.075, 0.06, aR, tw / 2 + 0.08, shoulder_y, -hunch * 0.3, skin, parts_parent, segs, rx=swing * 0.8 + pose.get("armsUp", 0), rz=-0.08)
    if p.get("extraArm"):
        add_cyl(f"{name}_armX", 0.055, 0.045, aR * 0.8, 0.05, shoulder_y - 0.1, 0.18, skin, parts_parent, segs, rx=0.9 + swing, rz=0.3)
    add_sph(f"{name}_head", 0.175 * hs, p.get("headOff", 0), head_y, -hunch * 0.5 + p.get("headZ", 0), skin, parts_parent, 16, 12)
    if neck > 0:
        add_cyl(f"{name}_neck", 0.055, 0.05, neck + 0.1, 0, shoulder_y + 0.1 + neck / 2, -hunch * 0.4, skin, parts_parent, 12)
    add_sph(f"{name}_eL", 0.036 * hs, p.get("headOff", 0) - 0.07 * hs, head_y + 0.03, 0.16 * hs + p.get("headZ", 0) - hunch * 0.5, eye, parts_parent, 10, 8)
    add_sph(f"{name}_eR", 0.036 * hs, p.get("headOff", 0) + 0.07 * hs * p.get("eyeAsym", 1), head_y + 0.03 + p.get("eyeDrop", 0), 0.16 * hs + p.get("headZ", 0) - hunch * 0.5, eye, parts_parent, 10, 8)
    if hair_m:
        add_sph(f"{name}_hair", 0.185 * hs, p.get("headOff", 0), head_y + 0.12 * hs, p.get("headZ", 0) - hunch * 0.5, hair_m, parts_parent, 14, 10)
    return parts_parent


NPC_DEFS = [
    {"headScale": 1.45, "neck": 0.05, "armL": 1, "armR": 1, "hunch": 0.1},
    {"headScale": 0.8, "armL": 1.6, "armR": 1.55, "hunch": 0.35, "legL": 0.9, "legR": 0.9},
    {"headScale": 1, "armL": 1, "armR": 0.5, "legL": 1, "legR": 0.7, "headTilt": 0.4},
    {"headScale": 1.1, "neck": 0.35, "torsoW": 0.75, "armL": 1.1, "armR": 1.1},
    {"headScale": 1, "extraArm": True, "torsoW": 1.2, "hunch": 0.15, "eyeAsym": 1.6, "eyeDrop": -0.06},
    {"headScale": 1.2, "headOff": 0.12, "headZ": 0.05, "armL": 1.25, "armR": 0.9, "legL": 1.15, "legR": 1.15, "hunch": 0.25},
]
NPC_SKINS = [(0.54, 0.48, 0.42), (0.60, 0.54, 0.48), (0.48, 0.42, 0.38), (0.63, 0.54, 0.47), (0.44, 0.42, 0.40), (0.56, 0.51, 0.46)]
NPC_SHIRTS = [(0.23, 0.23, 0.27), (0.29, 0.23, 0.23), (0.18, 0.23, 0.23), (0.33, 0.31, 0.29), (0.23, 0.18, 0.23), (0.27, 0.27, 0.23)]
NPC_PANTS = [(0.16, 0.16, 0.19), (0.23, 0.19, 0.19), (0.15, 0.15, 0.16), (0.25, 0.23, 0.19), (0.16, 0.16, 0.19), (0.19, 0.19, 0.16)]


def build_npc(i):
    clear_scene()
    p = NPC_DEFS[i]
    colors = {
        "skin": NPC_SKINS[i],
        "shirt": NPC_SHIRTS[i],
        "pants": NPC_PANTS[i],
        "eye": (0.04, 0.04, 0.04),
        "hair": (0.10, 0.10, 0.10) if i % 2 else None,
    }
    root = empty(f"npc_{i}", (0, 0, 0))
    a = _humanoid(p, {"swing": 0.5}, colors, "stepA")
    attach_local(a, root, 0, 0, 0)
    a.name = "stepA"
    b = _humanoid(p, {"swing": -0.5}, colors, "stepB")
    attach_local(b, root, 0, 0, 0)
    b.name = "stepB"
    c = _humanoid(p, {"swing": 0}, colors, "idle")
    attach_local(c, root, 0, 0, 0)
    c.name = "idle"
    return f"npc_{i}"


def build_courtyard():
    """Unique start courtyard in chunk-local Three.js metres (0..48)."""
    clear_scene()
    root = empty("courtyard", (0, 0, 0))
    conc_img = make_noise_image("cy_conc", 256, 165, 22, 91, tint=(0.82, 0.81, 0.76), streaks=18, grout=True)
    brick_img = make_noise_image("cy_brick", 128, 150, 20, 92, tint=(0.78, 0.52, 0.42), streaks=8)
    panel_img = make_noise_image("cy_panel", 256, 188, 16, 93, tint=(0.90, 0.89, 0.84), streaks=20, grout=True)
    rust_img = make_noise_image("cy_rust", 64, 90, 24, 94, tint=(0.45, 0.28, 0.16), streaks=10)
    conc = mat("cyConc", (0.62, 0.61, 0.58), conc_img)
    brick = mat("cyBrick", (0.62, 0.38, 0.30), brick_img)
    panel = mat("cyPanel", (0.80, 0.79, 0.74), panel_img)
    frame = mat("cyFrame", (0.48, 0.49, 0.50))
    dark = mat("cyDark", (0.10, 0.11, 0.12))
    lamp = mat("cyLamp", (1.0, 0.78, 0.38), emit=5.0)
    magma_w = mat("cyMagmaW", (0.82, 0.80, 0.75), conc_img)
    magma_r = mat("cyMagmaR", (0.78, 0.07, 0.09))
    roof = mat("cyRoof", (0.50, 0.50, 0.50))
    metal = mat("cyMetal", (0.55, 0.54, 0.50), rust_img)
    kik_br = mat("cyKikBr", (0.35, 0.20, 0.09))
    kik_rd = mat("cyKikRd", (0.72, 0.08, 0.08))
    kik_lt = mat("cyKikLt", (0.43, 0.26, 0.14))
    glow_m = mat("cyGlowM", (1.0, 0.42, 0.10), emit=4.5)
    glow_k = mat("cyGlowK", (0.82, 0.28, 0.10), emit=3.8)
    cable = mat("cyCable", (0.12, 0.12, 0.12))
    trash = mat("cyTrash", (0.22, 0.24, 0.18))

    # Housing slab behind the shops (north in world = -Z from playground)
    block("house", 2.2, 0, 0.35, 45.8, 18.0, 6.55, panel, root, 0.02)
    block("houseRoof", 2.0, 18.0, 0.2, 46.0, 18.45, 6.7, roof, root)
    block("houseParapet", 2.05, 18.45, 0.25, 45.95, 18.95, 6.65, conc, root, 0.01)
    # Window grid on the face toward the shops (z ≈ 6.55)
    n = 0
    for col in range(8):
        wx = 5.5 + col * 4.8
        for fl in range(4):
            wy = 2.0 + fl * 3.6
            lit = (col * 2 + fl) % 4 != 2
            block(f"hw{n}", wx - 0.7, wy - 0.8, 6.40, wx + 0.7, wy + 0.8, 6.78, lamp if lit else dark, root)
            n += 1
        if col % 2 == 0:
            by = 5.4
            block(f"bal{col}", wx - 1.2, by, 6.55, wx + 1.2, by + 0.14, 7.4, conc, root, 0.008)
            block(f"balr{col}", wx - 1.22, by + 0.14, 7.28, wx + 1.22, by + 1.1, 7.44, conc, root)
        if col % 3 == 1:
            block(f"ac{col}", wx - 0.5, 10.2, 6.7, wx + 0.5, 10.9, 7.3, metal, root, 0.01)

    # «Магма»
    block("magmaBody", 5.0, 0, 8.0, 20.5, 2.55, 18.2, magma_w, root, 0.012)
    block("magmaBand", 4.92, 2.55, 7.92, 20.58, 3.7, 18.28, magma_r, root, 0.01)
    block("magmaRoof", 4.8, 3.7, 7.8, 20.7, 3.82, 18.4, roof, root)
    block("magmaPara", 4.85, 3.82, 7.85, 20.65, 4.05, 18.35, conc, root, 0.008)
    block("magmaDoor", 11.95, 0.05, 18.12, 13.55, 2.2, 18.32, dark, root)
    block("magmaWinL", 7.1, 0.55, 18.14, 9.6, 2.25, 18.34, glow_m, root)
    block("magmaWinR", 16.0, 0.55, 18.14, 18.5, 2.25, 18.34, glow_m, root)
    block("magmaCanopy", 5.5, 2.45, 18.05, 20.0, 2.62, 19.35, magma_r, root, 0.01)
    block("magmaPylon", 20.35, 0, 18.3, 21.05, 4.15, 19.0, magma_r, root, 0.008)
    block("magmaBadge", 20.28, 2.55, 18.22, 21.12, 3.55, 19.08, mat("cyWhite", (0.95, 0.93, 0.90)), root)
    block("magmaAC", 13.6, 4.05, 12.4, 14.9, 4.55, 13.3, metal, root, 0.01)
    block("magmaAC2", 8.2, 4.05, 14.8, 9.4, 4.5, 15.7, metal, root, 0.01)

    # «Красное и Коричневое»
    bands = [(0.00, 0.58, kik_br), (0.58, 1.16, kik_rd), (1.16, 1.74, kik_lt), (1.74, 2.32, kik_rd), (2.32, 3.2, kik_br)]
    for i, (y0, y1, m) in enumerate(bands):
        block(f"kikBand{i}", 26.5, y0, 8.2, 43.0, y1, 17.6, m, root, 0.005)
    block("kikRoof", 26.35, 3.2, 8.05, 43.15, 3.32, 17.75, mat("cyKikRoof", (0.29, 0.16, 0.09)), root)
    block("kikDoor", 34.05, 0.05, 17.52, 35.45, 2.1, 17.72, dark, root)
    block("kikWinL", 28.6, 0.75, 17.54, 31.0, 2.15, 17.74, glow_k, root)
    block("kikWinR", 38.5, 0.75, 17.54, 40.9, 2.15, 17.74, glow_k, root)
    block("kikAC", 32.2, 3.32, 12.4, 33.5, 3.85, 13.3, metal, root, 0.01)

    # Wires between pavilions and to the house
    block("wireA", 20.5, 4.35, 16.4, 26.5, 4.48, 16.55, cable, root)
    block("wireAsag", 22.6, 3.95, 16.42, 24.4, 4.12, 16.53, cable, root)
    block("wireB", 12.2, 4.1, 8.05, 12.35, 8.6, 6.7, cable, root)
    block("wireC", 34.6, 3.4, 8.15, 34.8, 9.2, 6.7, cable, root)
    block("wireD", 8.4, 9.1, 6.7, 21.0, 9.25, 6.85, cable, root)

    # Yard dressing
    block("kiosk", 1.4, 0, 22.0, 3.6, 2.4, 24.4, brick, root, 0.015)
    block("kioskRoof", 1.2, 2.4, 21.8, 3.8, 2.55, 24.6, roof, root)
    block("dumpster", 43.2, 0, 20.4, 45.6, 1.15, 22.5, metal, root, 0.012)
    block("dumpLid", 43.15, 1.15, 20.35, 45.65, 1.28, 22.55, dark, root)
    block("bag1", 22.1, 0, 21.2, 22.7, 0.38, 21.7, trash, root, 0.02)
    block("bag2", 22.8, 0, 21.05, 23.45, 0.32, 21.55, trash, root, 0.02)
    block("crate", 6.2, 0, 19.6, 7.3, 0.55, 20.5, metal, root, 0.01)
    block("lampPost", 23.7, 0, 20.1, 23.95, 4.6, 20.35, metal, root)
    block("lampHead", 23.55, 4.5, 19.7, 24.1, 4.72, 20.5, lamp, root)
    block("lampPost2", 10.1, 0, 21.8, 10.32, 4.4, 22.02, metal, root)
    block("lampHead2", 9.95, 4.3, 21.4, 10.48, 4.52, 22.2, lamp, root)
    return "courtyard"


JOBS = [
    build_player,
    build_stalker,
    build_panel,
    lambda: build_window(True),
    lambda: build_window(False),
    build_entrance,
    build_shop_magma,
    build_shop_kik,
    build_apt,
    build_courtyard,
] + [lambda i=i: build_npc(i) for i in range(6)]


def main():
    print("obamka blender kits →", OUT)
    setup_cycles(20)
    total = 0
    for job in JOBS:
        name = job()
        if name in BAKE_KITS:
            print("  baking", name)
            bake_all_meshes()
        total += export_glb(name, join=False)
    print("done", len(JOBS), "kits,", total, "bytes")


if __name__ == "__main__":
    main()
