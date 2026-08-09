---
title: Wonder Orchards Database
version: alpha-v2.3
status: active
created: 2025-09-02
last_updated: 2026-08-08
category: docs
---

# Wonder Orchards Database (alpha-v2.3)

This repository is the evolving knowledge base and organizational memory of **Wonder Orchards**, a nonprofit dedicated to planting fruit trees and orchards for everyone to enjoy and benefit from.

## Purpose

Wonder Orchards uses simple, open, version-controlled files to preserve its ideas, decisions, experiments, workflows, and evolution.

Markdown contains the knowledge.
YAML describes the knowledge.
Git preserves its history.
GitHub Pages provides human access.
A generated JSON index provides machine access.

## Human Access

The public frontend is available at:

https://wonderorchards.github.io/w-o-b/

The frontend reads and renders the Markdown knowledge contained in this repository.

## Machine / GPT Access

The generated machine-readable index is available at:

https://wonderorchards.github.io/w-o-b/_index.json

The index is generated automatically during every GitHub Pages deployment from the metadata contained in the Markdown documents.

## Knowledge

- data/now.md - Current attention, learning, experiments, and recent change
- data/observations.md - Append-friendly real-world observation log
- data/decisions.md - Append-friendly record of consequential human decisions
- data/vision.md - Vision and guiding direction
- data/dna.md - Core essence and identity
- data/workflows.md - Tree-inspired workflows and processes
- data/database-growth.md - Missing knowledge, questions, and future growth
- data/nursery/experiments/ - Nursery research and propagation experiments

## Tasks

- tasks/backlog.md - Upcoming ideas and work
- tasks/in-progress.md - Active work
- tasks/completed.md - Finished work

## Development

- dev/thread-header.md - Development workflow and operating instructions

## Automation

- scripts/generate_index.py - Generates the machine-readable knowledge index
- scripts/dump_repo.sh - Utility for producing a repository text dump
- scripts/README.md - Automation and scripting notes
- .github/workflows/generate-index.yml - Builds the knowledge index and deploys GitHub Pages

## Templates

- templates/document.md - Template for new knowledge documents
- templates/task.md - Template for new tasks

## Versions

- versions/alpha-v2.3.md - Current version notes
- versions/history.md - Evolution and version history

## Frontend

- index.html - Human-facing browser for the Wonder Orchards knowledge base

## Evolution

Wonder Orchards is intentionally designed as a living system.

Its structure may change as new needs, relationships, patterns, and conceptual fruit appear. New capability should be added without unnecessarily restricting future forms of organization.

The repository remains the source of truth.
