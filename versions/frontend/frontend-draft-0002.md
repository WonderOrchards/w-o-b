---
title: Frontend Draft 2
version: alpha-v2.3
artifact_type: frontend-draft
frontend_draft_id: FRONTEND-DRAFT-0002
status: preserved
source_path: index.html
repository_commit: 5e0b82264bb56d4a2045112a4e6cc0f10a3d5573
git_blob: da3e16ba912da62ba5699d5b194fcaa3e4d3dc8c
source_sha256: 9D794EA42A6536FC3BFD417186088A3F9DFEFAE68AE6BF1ADBD2DC9C5D0BB800
previous_frontend_draft: FRONTEND-DRAFT-0001
preserved_at: 2026-08-09
category: versions
tags: [frontend, draft, preservation, experimentation, navigation]
last_updated: 2026-08-09
---

# Frontend Draft 2

## Purpose

`FRONTEND-DRAFT-0002` preserves the frontend after the documentation sidebar was reorganized around intuitive human encounter.

Git preserves the exact `index.html`; this record names that state and documents how to inspect, compare, or restore it safely without duplicating the HTML.

## What Changed From Draft 1

- The sidebar begins with Now rather than README.
- Documents follow a human encounter order instead of alphabetical filename order.
- Frontmatter titles replace ambiguous filenames such as repeated `README` and `history` labels.
- Documents are nested under collapsible, uppercase sections.
- Primary human-facing sections begin open; supporting repository sections begin collapsed.
- Future or unrecognized documents remain visible through stable fallback groups.

## Exact Frontend State

- **Repository commit:** `5e0b82264bb56d4a2045112a4e6cc0f10a3d5573`
- **Commit subject:** `Create Frontend Draft 2`
- **Source path:** `index.html`
- **Git blob:** `da3e16ba912da62ba5699d5b194fcaa3e4d3dc8c`
- **SHA-256:** `9D794EA42A6536FC3BFD417186088A3F9DFEFAE68AE6BF1ADBD2DC9C5D0BB800`
- **Working tree when the frontend was committed:** Clean after commit

The Git blob is the mechanical source of truth for Frontend Draft 2. The repository commit supplies its surrounding repository context.

## Inspect or Compare

Inspect Frontend Draft 2 without changing the working tree:

```powershell
git show 5e0b82264bb56d4a2045112a4e6cc0f10a3d5573:index.html
```

Compare a future frontend with Draft 2:

```powershell
git diff 5e0b82264bb56d4a2045112a4e6cc0f10a3d5573 -- index.html
```

Compare Draft 2 with [Frontend Draft 1](frontend-draft-0001.md):

```powershell
git diff beabf3d74714b0518bf9fee25981a7810d3b9488 5e0b82264bb56d4a2045112a4e6cc0f10a3d5573 -- index.html
```

## Restore

Restoration is a separate human-authorized action. First inspect and preserve experimental work that should not be lost, then confirm that the intended scope is only `index.html`.

Restore Draft 2 into the working tree for review:

```powershell
git restore --source=5e0b82264bb56d4a2045112a4e6cc0f10a3d5573 -- index.html
```

Review the resulting diff and create new Git history if the restoration is accepted. Do not reset or rewrite shared history.

This record does not authorize the Steward to restore the frontend automatically.

## Scope

Frontend Draft 2 preserves only `index.html`. It is not a repository-wide checkpoint, deployment snapshot, or claim about external runtime state.

The repository-wide preferred return point remains governed separately by the Steward checkpoint registry.
