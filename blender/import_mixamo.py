"""Normalize Mixamo/three.js Soldier GLBs: clips idle/walk/run, height 1.75m, feet on ground."""
from __future__ import annotations

import os
from pathlib import Path

import bpy
from mathutils import Vector

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "public" / "models" / "chars"
OUT = SRC


def clear_scene():
    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.object.delete(use_global=False)
    for coll in (bpy.data.meshes, bpy.data.materials, bpy.data.images, bpy.data.armatures, bpy.data.actions):
        for item in list(coll):
            coll.remove(item)


def rename_actions():
    for act in bpy.data.actions:
        n = act.name.lower()
        if "idle" in n:
            act.name = "idle"
        elif "run" in n:
            act.name = "run"
        elif "walk" in n:
            act.name = "walk"


def fit_height(target=1.75):
    meshes = [o for o in bpy.context.scene.objects if o.type == "MESH"]
    if not meshes:
        return
    deps = bpy.context.evaluated_depsgraph_get()
    mins = Vector((1e9, 1e9, 1e9))
    maxs = Vector((-1e9, -1e9, -1e9))
    for ob in meshes:
        ev = ob.evaluated_get(deps)
        for v in ev.data.vertices:
            p = ev.matrix_world @ v.co
            mins.x, mins.y, mins.z = min(mins.x, p.x), min(mins.y, p.y), min(mins.z, p.z)
            maxs.x, maxs.y, maxs.z = max(maxs.x, p.x), max(maxs.y, p.y), max(maxs.z, p.z)
    height = maxs.z - mins.z
    if height < 0.2:
        return
    s = target / height
    root = None
    for ob in bpy.context.scene.objects:
        if ob.parent is None and ob.type in {"ARMATURE", "EMPTY", "MESH"}:
            root = ob
            break
    if root is None:
        return
    root.scale *= s
    bpy.context.view_layer.update()
    # feet to z=0
    deps = bpy.context.evaluated_depsgraph_get()
    zmin = 1e9
    for ob in meshes:
        ev = ob.evaluated_get(deps)
        for v in ev.data.vertices:
            p = ev.matrix_world @ v.co
            zmin = min(zmin, p.z)
    root.location.z -= zmin
    bpy.context.view_layer.update()


def paint_horror():
    for m in bpy.data.materials:
        m.use_nodes = True
        bsdf = m.node_tree.nodes.get("Principled BSDF")
        if not bsdf:
            continue
        bsdf.inputs["Base Color"].default_value = (0.03, 0.03, 0.035, 1)
        bsdf.inputs["Roughness"].default_value = 0.92
        bsdf.inputs["Metallic"].default_value = 0.0
        for node in list(m.node_tree.nodes):
            if node.type == "TEX_IMAGE":
                m.node_tree.nodes.remove(node)


def export_glb(path, skins=True):
    bpy.ops.export_scene.gltf(
        filepath=str(path),
        export_format="GLB",
        export_apply=False,
        export_cameras=False,
        export_lights=False,
        export_yup=True,
        export_texcoords=True,
        export_normals=True,
        export_materials="EXPORT",
        export_colors=False,
        export_skins=skins,
        export_animations=True,
        export_nla_strips=True,
        export_force_sampling=True,
    )
    print("  wrote", path, os.path.getsize(path), "bytes")


def import_src(name):
    clear_scene()
    src = SRC / name
    bpy.ops.import_scene.gltf(filepath=str(src))
    rename_actions()
    fit_height(1.75)


def main():
    soldier = SRC / "soldier_src.glb"
    xbot = SRC / "xbot_src.glb"
    if not soldier.exists():
        raise SystemExit("missing soldier_src.glb")
    import_src("soldier_src.glb")
    export_glb(OUT / "player.glb")
    for i in range(3):
        import_src("soldier_src.glb")
        export_glb(OUT / f"npc_{i}.glb")
    if xbot.exists():
        import_src("xbot_src.glb")
        export_glb(OUT / "npc_3.glb")
        import_src("xbot_src.glb")
        export_glb(OUT / "npc_4.glb")
    else:
        import_src("soldier_src.glb")
        export_glb(OUT / "npc_3.glb")
        import_src("soldier_src.glb")
        export_glb(OUT / "npc_4.glb")
    import_src("soldier_src.glb")
    paint_horror()
    # stretch the armature object for a taller thinner silhouette
    for ob in bpy.context.scene.objects:
        if ob.type == "ARMATURE":
            ob.scale.x *= 0.78
            ob.scale.y *= 0.78
            ob.scale.z *= 1.22
    export_glb(OUT / "stalker.glb")
    print("chars done")


if __name__ == "__main__":
    main()
