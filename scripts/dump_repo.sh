#!/usr/bin/env bash
set -euo pipefail

# Generate timestamped filename
TIMESTAMP=$(date -u +"%Y%m%d_%H%M%S")
OUT="${1:-repo_full_dump_${TIMESTAMP}.txt}"

echo "=== FULL REPO DUMP ===" > "$OUT"
echo "Timestamp (UTC): $(date -u)" >> "$OUT"
echo "Repository path: $(pwd)" >> "$OUT"
echo "Current branch: $(git branch --show-current)" >> "$OUT"
echo "Git remotes:" >> "$OUT"
git remote -v >> "$OUT"

echo -e "\n=== Git Status ===" >> "$OUT"
git status >> "$OUT"

echo -e "\n=== Commit History ===" >> "$OUT"
git log --all --pretty=format:"%H%n%an%n%ae%n%ad%n%s%n%b%n---" >> "$OUT"

echo -e "\n=== Tags ===" >> "$OUT"
git tag >> "$OUT"

echo -e "\n=== Branches ===" >> "$OUT"
git branch -a >> "$OUT"

echo -e "\n=== File Tree ===" >> "$OUT"
ls -R >> "$OUT"

echo -e "\n=== Git Config ===" >> "$OUT"
git config --list >> "$OUT"

echo "Full repo dump completed: $OUT"
