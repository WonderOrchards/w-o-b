---
title: Workflows
version: alpha-v2.3
status: draft
category: docs
tags: [workflow, process, operations]
last_updated: 2026-08-08
---

# Workflows - Wonder Orchards (alpha-v2.3)

## Overview

Our workflows are modeled after the life of a tree, reflecting patience, steady growth, adaptation, and abundance.

The workflow itself may evolve as Wonder Orchards grows.

## Tree Roadmap Stages

- **Seeds:** Vision, planting, and cuttings
- **Roots:** Foundation and values
- **Trunk:** Structure and stability
- **Branches:** Programs and projects
- **Leaves:** People and daily work
- **Flowers:** Ideas and initiatives
- **Fruit:** Results and impact
- **Cycles & Seasons:** Pacing, reflection, renewal, and patience

## Active Task Workflow

- Tasks are tracked in `tasks/in-progress.md`.
- Upcoming work is tracked in `tasks/backlog.md`.
- Completed work is preserved in `tasks/completed.md`.
- Priority may be expressed as **P0 / P1 / P2** when useful.
- Work is currently staff-led.

## Knowledge Workflow

Wonder Orchards uses the repository as its evolving source of truth.

Knowledge is generally captured as Markdown documents with YAML frontmatter.

The basic flow is:

1. An idea, observation, experiment, decision, or need appears.
2. It is added to the appropriate knowledge or task document.
3. Git records the change and preserves its history.
4. Changes pushed to `main` trigger the GitHub Pages workflow.
5. `scripts/generate_index.py` discovers the current knowledge documents and generates `_index.json`.
6. GitHub Pages publishes the human frontend and generated machine-readable index.

## Human Access

The browser frontend is published through GitHub Pages:

https://wonderorchards.github.io/w-o-b/

The frontend provides a human-readable view into the Markdown knowledge base.

## Machine / GPT Access

The generated knowledge index is published at:

https://wonderorchards.github.io/w-o-b/_index.json

The index provides a structured map of the repository so machines can discover relevant documents and retrieve their underlying Markdown.

## Development Principle

The repository is the source of truth.

The frontend and machine index are views into that source rather than separate databases.

Automation should reduce maintenance rather than create additional sources of truth.

New structure should emerge when useful instead of being imposed before it is needed.