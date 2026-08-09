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

EXCLUDED_PATH_PREFIXES = {
    ("inbox", "drop"),
    ("inbox", "records"),
    ("inbox", "archive"),
}


def parse_value(value):
    value = value.strip()

    # Inline list: [vision, direction, future]
    if value.startswith("[") and value.endswith("]"):
        contents = value[1:-1].strip()

        if not contents:
            return []

        return [
            item.strip().strip('"').strip("'")
            for item in contents.split(",")
        ]

    # Quoted string
    if (
        len(value) >= 2
        and value[0] == value[-1]
        and value[0] in ('"', "'")
    ):
        return value[1:-1]

    if value == "true":
        return True

    if value == "false":
        return False

    return value


assert parse_value("false") is False
assert parse_value("true") is True
assert parse_value('"false"') == "false"


def parse_frontmatter(text):
    if not text.startswith("---"):
        return {}

    lines = text.splitlines()

    if len(lines) < 3:
        return {}

    metadata = {}

    for line in lines[1:]:
        if line.strip() == "---":
            break

        if ":" not in line:
            continue

        key, value = line.split(":", 1)
        metadata[key.strip()] = parse_value(value)

    return metadata


documents = []

for path in ROOT.rglob("*.md"):
    relative = path.relative_to(ROOT)

    if any(part in EXCLUDED_DIRS for part in relative.parts):
        continue

    if any(
        relative.parts[:len(prefix)] == prefix
        for prefix in EXCLUDED_PATH_PREFIXES
    ):
        continue

    text = path.read_text(encoding="utf-8")
    metadata = parse_frontmatter(text)

    document = {
        "path": relative.as_posix(),
        "name": path.name,
        "section": relative.parts[0] if len(relative.parts) > 1 else "root",
    }

    document.update(metadata)
    documents.append(document)

documents.sort(key=lambda item: item["path"])

index = {
    "database": "Wonder Orchards",
    "description": "Machine-readable map of Wonder Orchards knowledge documents.",
    "documents": documents,
}

OUTPUT.write_text(
    json.dumps(index, indent=2),
    encoding="utf-8",
)

print(f"Generated {OUTPUT.name} with {len(documents)} knowledge documents.")
