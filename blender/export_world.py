"""Architectural kits with photoscanned albedo. No Cycles bake, no unique courtyard mesh."""
from __future__ import annotations

import math
import os
from pathlib import Path

import bpy
from mathutils import Euler, Vector

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "models"
SCAN = ROOT / "public" / "textures" / "scan"
OUT.mkdir(parents=True, exist_ok=True)


def t2b(x, y, z):
    return (float(x), float(-z), float(y))


def clear_scene():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)
    for block in (bpy.data.meshes, bpy.data.materials, bpy.data.armatures):
        for item in list(block):
            block.remove(item)


def load_img(name):
    path = SCAN / name
    if not path.exists():
        return None
    img = bpy.data.images.load(str(path))
    img.pack()
    return img


def mat(name, color, diff=None, rough=None, emit=0.0, metal=0.0, roughness=0.86):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    nt = m.node_tree
    bsdf = nt.nodes.get("Principled BSDF")
    col = color if len(color) == 4 else (*color, 1.0)
    bsdf.inputs["Base Color"].default_value = col
    bsdf.inputs["Roughness"].default_value = roughness
    bsdf.inputs["Metallic"].default_value = metal
    if "Specular" in bsdf.inputs:
        bsdf.inputs["Specular"].default_value = 0.18
    if emit > 0:
        if "Emission" in bsdf.inputs:
            bsdf.inputs["Emission"].default_value = col
        if "Emission Strength" in bsdf.inputs:
            bsdf.inputs["Emission Strength"].default_value = emit
    if diff:
        tex = nt.nodes.new("ShaderNodeTexImage")
        tex.image = diff
        tex.interpolation = "Linear"
        nt.links.new(tex.outputs["Color"], bsdf.inputs["Base Color"])
    if rough:
        rtex = nt.nodes.new("ShaderNodeTexImage")
        rtex.image = rough
        rtex.interpolation = "Linear"
        rtex.image.colorspace_settings.name = "Non-Color"
        nt.links.new(rtex.outputs["Color"], bsdf.inputs["Roughness"])
    m.diffuse_color = col
    return m


def smooth(ob, angle=50):
    for p in ob.data.polygons:
        p.use_smooth = True
    ob.data.use_auto_smooth = True
    ob.data.auto_smooth_angle = math.radians(angle)


def apply_bevel(ob, width=0.016, segments=2):
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


def link_mesh(name, ob, material, parent=None, bevel=0.0, x=0, y=0, z=0, rx=0, ry=0, rz=0):
    ob.name = name
    ob.data.name = name
    if material:
        ob.data.materials.append(material)
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


def export_glb(name):
    path = str(OUT / f"{name}.glb")
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


def scans():
    return {
        "conc": load_img("concrete_diff.jpg"),
        "conc_r": load_img("concrete_rough.jpg"),
        "metal": load_img("metal_diff.jpg"),
        "metal_r": load_img("metal_rough.jpg"),
        "wood": load_img("wood_diff.jpg"),
        "wood_r": load_img("wood_rough.jpg"),
    }


def build_panel(S):
    clear_scene()
    slab = mat("panel", (0.78, 0.77, 0.73), S["conc"], S["conc_r"], roughness=0.9)
    frame = mat("frame", (0.42, 0.43, 0.45), S["metal"], S["metal_r"], metal=0.15, roughness=0.7)
    dark = mat("pane", (0.07, 0.075, 0.08), roughness=0.35)
    room = mat("room", (0.12, 0.10, 0.09), roughness=0.95)
    root = empty("panel_wall", (0, 0, 0))
    add_box("slab", 3.0, 3.0, 0.22, 0, 1.5, -0.11, slab, root, 0.018)
    add_box("jointN", 3.04, 0.04, 0.26, 0, 0.02, -0.11, frame, root)
    add_box("jointS", 3.04, 0.04, 0.26, 0, 2.98, -0.11, frame, root)
    add_box("jointW", 0.04, 3.0, 0.26, -1.48, 1.5, -0.11, frame, root)
    add_box("jointE", 0.04, 3.0, 0.26, 1.48, 1.5, -0.11, frame, root)
    add_box("room", 1.28, 1.42, 0.28, 0, 1.55, -0.22, room, root)
    add_box("glass", 1.22, 1.36, 0.03, 0, 1.55, -0.02, dark, root)
    add_box("sill", 1.58, 0.07, 0.28, 0, 0.78, 0.08, frame, root, 0.01)
    add_box("lintel", 1.58, 0.07, 0.16, 0, 2.32, 0.03, frame, root, 0.008)
    add_box("jambL", 0.07, 1.48, 0.16, -0.71, 1.55, 0.03, frame, root)
    add_box("jambR", 0.07, 1.48, 0.16, 0.71, 1.55, 0.03, frame, root)
    add_box("mullV", 0.04, 1.36, 0.04, 0, 1.55, 0.01, frame, root)
    add_box("mullH", 1.22, 0.04, 0.04, 0, 1.55, 0.01, frame, root)
    return "panel_wall"


def build_window(S, lit):
    clear_scene()
    frame = mat("frame", (0.28, 0.29, 0.31), S["metal"], S["metal_r"], metal=0.2, roughness=0.6)
    if lit:
        pane = mat("lamp", (1.0, 0.78, 0.42), emit=6.0, roughness=1.0)
        curtain = mat("curtain", (0.62, 0.42, 0.22), roughness=0.9)
    else:
        pane = mat("dark", (0.05, 0.055, 0.06), roughness=0.25)
        curtain = mat("curtain", (0.18, 0.16, 0.14), roughness=0.9)
    root = empty("window_lit" if lit else "window_dark", (0, 0, 0))
    add_box("outer", 1.62, 1.72, 0.08, 0, 0, 0, frame, root, 0.008)
    add_box("inner", 1.38, 1.48, 0.05, 0, 0, 0.02, frame, root)
    add_box("room", 1.28, 1.38, 0.38, 0, 0, -0.22, curtain, root)
    add_box("glass", 1.24, 1.34, 0.03, 0, 0, 0.06, pane, root)
    add_box("mullV", 0.045, 1.34, 0.05, 0, 0, 0.07, frame, root)
    add_box("mullH", 1.24, 0.045, 0.05, 0, 0, 0.07, frame, root)
    add_box("sill", 1.7, 0.06, 0.22, 0, -0.86, 0.1, frame, root, 0.008)
    return "window_lit" if lit else "window_dark"


def build_dumpster(S):
    clear_scene()
    metal = mat("dump", (0.28, 0.32, 0.22), S["metal"], S["metal_r"], metal=0.35, roughness=0.55)
    dark = mat("lid", (0.12, 0.13, 0.12), S["metal"], S["metal_r"], metal=0.4, roughness=0.5)
    root = empty("dumpster", (0, 0, 0))
    add_box("body", 1.15, 1.05, 1.05, 0, 0.525, 0, metal, root, 0.02)
    add_box("lid", 1.18, 0.08, 1.08, 0, 1.1, 0.02, dark, root, 0.012)
    add_box("lip", 1.18, 0.05, 0.08, 0, 1.08, 0.54, dark, root)
    add_box("wheelL", 0.12, 0.12, 0.12, -0.42, 0.06, 0.42, dark, root)
    add_box("wheelR", 0.12, 0.12, 0.12, 0.42, 0.06, 0.42, dark, root)
    return "dumpster"


def build_ac(S):
    clear_scene()
    metal = mat("ac", (0.62, 0.63, 0.64), S["metal"], S["metal_r"], metal=0.25, roughness=0.55)
    dark = mat("grille", (0.15, 0.16, 0.17), roughness=0.7)
    root = empty("ac_unit", (0, 0, 0))
    add_box("body", 0.92, 0.55, 0.42, 0, 0.28, 0, metal, root, 0.012)
    add_box("grille", 0.78, 0.38, 0.04, 0, 0.28, 0.22, dark, root)
    add_box("bracketL", 0.06, 0.08, 0.5, -0.4, 0.04, -0.02, metal, root)
    add_box("bracketR", 0.06, 0.08, 0.5, 0.4, 0.04, -0.02, metal, root)
    return "ac_unit"


def build_bench(S):
    clear_scene()
    wood = mat("wood", (0.42, 0.32, 0.2), S["wood"], S["wood_r"], roughness=0.82)
    steel = mat("steel", (0.35, 0.36, 0.38), S["metal"], S["metal_r"], metal=0.45, roughness=0.5)
    root = empty("bench", (0, 0, 0))
    add_box("seat", 1.85, 0.07, 0.42, 0, 0.44, 0, wood, root, 0.008)
    add_box("back", 1.85, 0.42, 0.07, 0, 0.68, -0.18, wood, root, 0.008)
    add_box("legL", 0.08, 0.44, 0.38, -0.78, 0.22, 0, steel, root)
    add_box("legR", 0.08, 0.44, 0.38, 0.78, 0.22, 0, steel, root)
    return "bench"


def build_lamp(S):
    clear_scene()
    steel = mat("pole", (0.22, 0.22, 0.23), S["metal"], S["metal_r"], metal=0.3, roughness=0.6)
    lamp = mat("lamp", (1.0, 0.82, 0.5), emit=5.5, roughness=1.0)
    root = empty("yard_lamp", (0, 0, 0))
    add_box("pole", 0.1, 5.6, 0.1, 0, 2.8, 0, steel, root)
    add_box("arm", 0.08, 0.08, 0.7, 0, 5.55, 0.28, steel, root)
    add_box("head", 0.28, 0.12, 0.38, 0, 5.48, 0.55, lamp, root, 0.01)
    return "yard_lamp"


def main():
    print("obamka world kits →", OUT)
    S = scans()
    jobs = [
        lambda: build_panel(S),
        lambda: build_window(S, True),
        lambda: build_window(S, False),
        lambda: build_dumpster(S),
        lambda: build_ac(S),
        lambda: build_bench(S),
        lambda: build_lamp(S),
    ]
    total = 0
    for job in jobs:
        name = job()
        total += export_glb(name)
    print("done", len(jobs), "kits,", total, "bytes")


if __name__ == "__main__":
    main()
