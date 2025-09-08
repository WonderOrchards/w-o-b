---
title: Scripts README
version: alpha-v2.2
status: draft
category: scripts
tags: [automation, scripts, tooling]
last_updated: 2025-09-07
---

# Scripts README (alpha-v2.2)

## Overview
This folder contains small utilities and notes for packaging and exports.  
Use this document as the canonical place to describe script purpose, usage, and implementation guidelines before adding or modifying scripts.

---

## 📁 Current Scripts
- `/scripts/dump_repo.sh` — Produce a plain-text dump of tracked files.

---

## Planned Scripts
- `/scripts/generate_index.py` — (future) Regenerate `_index.json` for frontend navigation. Should parse YAML frontmatter to auto-generate the `README.md` index.
- `/scripts/package_repo.py` — (future) Create a sanitized zip for distribution.

---

## Guidelines
- Keep scripts **idempotent** and avoid including secrets or credentials.  
- Document all automation steps in this file before implementing.  
- Use consistent lowercase naming with hyphens for any new scripts (e.g., `generate-index.py` or `package-repo.py`).  
- Prefer simple, well-documented scripts that can be audited and run in CI.  

---

## Next Steps
1. Add usage examples and flags for `dump_repo.sh`.  
2. Prototype `generate_index.py` to parse YAML frontmatter from markdown files.  
3. Create a packaging checklist for `package_repo.py` (exclude placeholders, large binaries, and secrets).  
