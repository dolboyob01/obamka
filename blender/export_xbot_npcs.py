"""Normalize Mixamo Xbot into npc_3 / npc_4 so they are not Soldier copies."""
from __future__ import annotations

import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from import_mixamo import export_glb, import_src

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "models" / "chars"


def main():
    src = OUT / "xbot_src.glb"
    if not src.exists():
        raise SystemExit("missing xbot_src.glb")
    import_src("xbot_src.glb")
    export_glb(OUT / "npc_3.glb")
    import_src("xbot_src.glb")
    export_glb(OUT / "npc_4.glb")
    print("xbot npcs done")


if __name__ == "__main__":
    main()
