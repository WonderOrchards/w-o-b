#!/usr/bin/env bash
set -euo pipefail

# Generate timestamped filename
TIMESTAMP=$(date -u +"%Y%m%d_%H%M%S")
OUT="${1:-repo_full_text_dump_${TIMESTAMP}.txt}"

{
echo "=== FULL REPO TEXT DUMP ==="
echo "Timestamp (UTC): $(date -u)"
echo "Repository path: $(pwd)"
echo
echo "=== Git Remotes ==="
git remote -v
echo
echo "=== Git Branches ==="
git branch -a
echo
echo "=== Git Tags ==="
git tag
echo
echo "=== Git Config ==="
git config --list
echo
echo "=== Git Status ==="
git status
echo
echo "=== Full Commit History ==="
git log --all --pretty=format:"%H%n%an%n%ae%n%ad%n%s%n%b%n---"
echo
echo "=== Working Directory Files (including hidden) ==="
ls -RA
echo
echo "=== .git Folder Structure ==="
ls -RA .git
} > "$OUT"

echo "Full repo text dump completed: $OUT"
