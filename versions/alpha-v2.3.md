\---

title: Alpha v2.3

version: alpha-v2.3

date: 2026-08-08

last\_updated: 2026-08-08

status: active

category: versions

tags: \[github-pages, knowledge-index, automation, accessibility]

\---



\# Alpha v2.3 — GitHub-Native Living Index



\## Overview



Alpha v2.3 advances the Wonder Orchards database toward a frictionless, evolving knowledge system accessible to both humans and machines.



The existing Markdown and YAML architecture remains the source of truth. This version adds infrastructure around that architecture rather than replacing it.



\## Changes



\### GitHub Pages



\- Migrated the frontend from Vercel to GitHub Pages.

\- Added `.nojekyll` so repository files can be served directly.

\- Markdown knowledge documents are now directly accessible through the published site.



\### Machine-Readable Knowledge Index



\- Added `\_index.json` as a machine-readable map of Wonder Orchards knowledge.

\- Added `scripts/generate\_index.py`.

\- The generator discovers Markdown knowledge documents automatically.

\- Existing YAML frontmatter is carried into the index.

\- Metadata remains extensible rather than being restricted to a fixed schema.

\- YAML-style tag lists are represented as structured JSON arrays.



\### Automatic Evolution



\- Added a GitHub Actions workflow that regenerates `\_index.json` when Markdown knowledge or the index generator changes.

\- The updated index is committed automatically when necessary.

\- GitHub Pages republishes the resulting repository state.



\## Architectural Principle



Wonder Orchards remains human-readable at its foundation.



Markdown contains the knowledge.

YAML describes the knowledge.

The generated index maps the knowledge.

Git preserves its evolution.

GitHub Pages exposes it.



The system should add capability without unnecessarily restricting future forms of organization, metadata, relationships, or knowledge.



\## Direction



Continue developing Wonder Orchards as a living database whose structure can evolve as new conceptual fruit appears.



Human interfaces and machine interfaces should remain different views into the same underlying knowledge.

