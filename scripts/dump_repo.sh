#!/usr/bin/env bash
set -euo pipefail

# Generate timestamp for filename (UTC)
TIMESTAMP=$(date -u +"%Y%m%d_%H%M%S")
OUT="${1:-repo_dump_${TIMESTAMP}.txt}"  # Default filename includes timestamp

# Header
{
  echo "=== REPO DUMP ==="
  echo "remote: $(git config --get remote.origin.url 2>/dev/null || echo 'n/a')"
  echo "commit: $(git rev-parse HEAD 2>/dev/null || echo 'n/a')"
  echo "generated_utc: $(date -u +"%Y-%m-%dT%H:%M:%SZ")"
  echo
} > "$OUT"

# List only tracked files (ignores .git/ and untracked stuff)
git ls-files -z | while IFS= read -r -d '' f; do
  printf "=== %s ===\n" "$f" >> "$OUT"

  if [ -f "$f" ]; then
    # Detect binary: grep -Iq returns 0 for text, 1 for binary
    if grep -Iq . "$f"; then
      cat "$f" >> "$OUT"
    else
      echo "[binary file omitted]" >> "$OUT"
    fi
  else
    echo "[skipped: not a regular file]" >> "$OUT"
  fi

  printf "\n\n" >> "$OUT"
done

echo "Wrote $(pwd)/$OUT"


