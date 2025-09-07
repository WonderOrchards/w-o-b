#!/usr/bin/env bash
set -euo pipefail
OUT="${1:-wonder_orchards_pristine.zip}"
DIR="${2:-.}"
# Exclude index.html files
zip -r "$OUT" "$DIR" -x "*/index.html"
echo "Wrote $OUT"
