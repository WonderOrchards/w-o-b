title: Scripts README
version: alpha-v2.2
status: draft
category: scripts
tags: [automation, scripts, tooling]
last_updated: 2025-09-07

Scripts / Automation Notes

This folder contains small utilities and notes for packaging and exports.

Current Scripts

dump_repo.sh — produce a plain-text dump of tracked files.
Planned scripts:

generate_index.py — (future) regenerate _index.json for frontend navigation. Should parse YAML frontmatter to auto-generate the README.md index.
package_repo.py — (future) create a sanitized zip for distribution.
Guidelines:

Keep scripts idempotent and avoid including secrets.
Document all automation steps here before implementing.
Use consistent lowercase naming with hyphens for any new scripts.
