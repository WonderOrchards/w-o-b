---
title: Development & AI Collaboration Manual
version: alpha-v2.3
status: active
category: dev
tags: [development, ai, instructions, workflow, collaboration]
last_updated: 2026-08-08
---

# Development & AI Collaboration Manual (alpha-v2.3)

## Purpose

This document explains how humans, AI systems, and development tools should work with the Wonder Orchards knowledge repository.

The repository itself is the source of truth.

A complete database dump should not normally be required. The public repository, generated machine index, and individual Markdown documents provide direct access to the current state.

## Entry Points

Human frontend:

https://wonderorchards.github.io/w-o-b/

Machine-readable knowledge index:

https://wonderorchards.github.io/w-o-b/_index.json

GitHub repository:

https://github.com/WonderOrchards/w-o-b

## Core Principles

- **Living system:** The database evolves as Wonder Orchards evolves.
- **Structured but flexible:** Use structure where it helps without prematurely restricting future forms.
- **Human-readable:** Knowledge should remain understandable directly from Markdown.
- **Machine-readable:** YAML frontmatter and generated indexes provide structured discovery.
- **Repository as source of truth:** Frontends and indexes are views into the repository, not separate databases.
- **Preserve evolution:** Git history and version documents record meaningful changes.
- **Modular growth:** New documents, categories, relationships, and tools may emerge when useful.
- **Low friction:** Automation should reduce repetitive maintenance.

## Recommended AI Entry Process

When an AI system begins working with Wonder Orchards:

1. Read `_index.json` to discover the current knowledge landscape.
2. Identify the documents relevant to the current task.
3. Read those Markdown documents directly.
4. Consult `data/dna.md` and `data/vision.md` when decisions involve identity or direction.
5. Consult `data/database-growth.md` when exploring missing knowledge or future development.
6. Consult task documents when work status or priorities matter.
7. Avoid assuming that the current structure is exhaustive or permanent.

## Knowledge Documents

Knowledge is generally stored as Markdown with YAML frontmatter.

Typical frontmatter:

    ---
    title: Descriptive Title
    version: alpha-v2.3
    status: draft
    category: docs
    tags: [example, tags]
    last_updated: YYYY-MM-DD
    ---

Metadata may evolve. New fields may be introduced when they provide useful information.

The generated index should preserve declared metadata rather than require every document to conform to a rigid universal schema.

## Development Workflow

### Understand

- Determine what the user or project is trying to accomplish.
- Read the relevant existing documents before changing structure.
- Look for existing concepts before creating duplicates.

### Plan

- Prefer the smallest useful change.
- Preserve working architecture unless there is a reason to change it.
- Consider whether new information belongs in an existing document or deserves a new modular document.
- Maintain alignment with the vision and DNA when relevant.

### Execute

- Edit the appropriate source documents.
- Preserve valid YAML frontmatter.
- Use logical paths and descriptive filenames.
- Update `last_updated` when a document materially changes.

### Verify

Before committing:

- Confirm files contain valid intended content.
- Confirm frontmatter begins at the first character when present.
- Check internal paths and references.
- Avoid committing secrets or private credentials.
- Review `git status` before committing.

### Publish

Changes pushed to `main` trigger the GitHub Pages workflow.

During deployment:

1. The repository is checked out.
2. `scripts/generate_index.py` generates a fresh `_index.json`.
3. The repository and generated index are packaged for GitHub Pages.
4. GitHub Pages publishes the result.

The deployment-generated `_index.json` does not need to create an automated commit back into `main`.

## Human and Machine Navigation

`README.md` serves as a curated human doorway into the repository.

`_index.json` serves as a generated machine map of the knowledge repository.

These roles are complementary.

The README does not need to enumerate every future knowledge object, while the generated index should discover the knowledge documents automatically.

## Versioning

Version documents preserve meaningful architectural and developmental checkpoints.

Current version:

`alpha-v2.3`

Version history lives in:

`versions/`

Not every content edit requires a new project version. Create a new version when a meaningful structural, architectural, or conceptual checkpoint is reached.

## Security

This repository is public.

Never store:

- passwords
- API keys
- private keys
- recovery codes
- authentication tokens
- private personal information
- confidential organizational information

Public service names and organizational account identifiers may be documented when useful, but secrets belong in the appropriate private credential system.

## Evolution Principle

Wonder Orchards should be allowed to discover what it needs to become.

The current directory structure, metadata fields, frontend, workflows, and machine interfaces are tools rather than permanent constraints.

When new conceptual fruit appears, the system should be able to incorporate it without requiring unnecessary reconstruction of what already works.