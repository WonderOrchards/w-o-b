---
title: Version History
version: alpha-v2.3
status: active
category: versions
tags: [history, changelog]
last_updated: 2026-08-08
---

# Version History (alpha-v2.3)

## Changelog

- **v1.0** - Initial setup. (2025-09-02)
- **v1.1** - Refinements. (2025-09-03)
- **v2.1** - Streamlining pass. (2025-09-04)
- **v2.2** - Reorganization and standardization pass. (2025-09-07)
- **alpha-v2.3** - GitHub-native living database architecture. (2026-08-08)

---

## alpha-v2.3 - Highlights

- Migrated the public frontend from Vercel to GitHub Pages.
- Added direct GitHub Pages access to repository knowledge documents.
- Added automatic machine-readable knowledge indexing.
- Added `scripts/generate_index.py` for index generation.
- Added GitHub Actions automation for knowledge-index generation and Pages deployment.
- Changed `_index.json` from tracked source content to generated deployment output.
- Established Markdown as the knowledge source of truth.
- Established YAML frontmatter as extensible document metadata.
- Updated the README as the primary human navigation point.
- Modernized the AI collaboration and development workflow.
- Updated core knowledge documents including Vision, DNA, Workflows, Accounts, and Database Growth.
- Modernized document and task templates.
- Began establishing alpha-v2.3 as the current living architecture.

---

## Architectural Direction

Wonder Orchards is evolving from a collection of planning documents into a living, GitHub-native knowledge system.

The underlying principle is:

**Markdown contains the knowledge.  
YAML describes the knowledge.  
Git preserves its evolution.  
The generated index maps the knowledge.  
GitHub Pages exposes it.**

The architecture should remain flexible enough to evolve as new relationships, categories, tools, and forms of knowledge emerge.

---

## How to Read This File

- Use this as the authoritative changelog for the repository.
- Each entry should include a version, short summary, and date.
- Detailed release notes belong in the corresponding file under `/versions/`.
- Historical entries should not be rewritten merely to match later architecture.
- New versions should be added as the system meaningfully evolves.