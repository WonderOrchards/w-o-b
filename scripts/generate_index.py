
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / "_index.json"

EXCLUDED_DIRS = {
    ".git",
    ".github",
    "__pycache__",
    "scripts",
    "templates",
}

files = []

for path in ROOT.rglob("*.md"):
    relative = path.relative_to(ROOT)

    if any(part in EXCLUDED_DIRS for part in relative.parts):
        continue

    files.append({
        "path": relative.as_posix(),
        "name": path.name,
        "section": relative.parts[0] if len(relative.parts) > 1 else "root"
    })

files.sort(key=lambda item: item["path"])

index = {
    "database": "Wonder Orchards",
    "description": "Machine-readable map of Wonder Orchards knowledge documents.",
    "knowledge": files
}

OUTPUT.write_text(
    json.dumps(index, indent=2),
    encoding="utf-8"
)

print(f"Generated {OUTPUT.name} with {len(files)} knowledge documents.")