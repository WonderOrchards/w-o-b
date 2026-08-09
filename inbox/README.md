---
title: Wonder Orchards Inbox
version: alpha-v2.3
status: draft
category: inbox
tags: [inbox, intake, stewardship, provenance]
last_updated: 2026-08-09
---

# Wonder Orchards Inbox

The inbox is the receiving area for material that may matter to Wonder Orchards but has not yet been accepted as institutional knowledge.

Material in `inbox/` is evidence for review. Its presence does not make its claims authoritative, approved, or integrated.

## Structure

- `drop/` is the temporary landing area for newly received material.
- `records/` contains active intake records and, when warranted, their preserved sources, interpretations, proposals, decisions, and integration records.
- `archive/` contains closed intake records whose disposition has been documented.

## Start Small

A small idea or simple note may begin with one intake record. It does not need five separate documents immediately.

Create additional records when the material warrants them:

1. Steward interpretation
2. Proposed changes
3. Human decision
4. Actual integration

The five layers must remain distinguishable even when several are recorded in one lightweight intake document.

## Suggested Case Shape

For a substantial intake, use a case directory such as:

```text
inbox/records/2026-08-09-short-slug/
├── record.md
├── source/
├── interpretation.md
├── proposal.md
├── decision.md
└── integration.md
```

Use the templates under `templates/` as needed. Follow the full protocol in `data/inbox-digestion-protocol.md`.

## Important Boundary

Wonder Orchards is a public repository. Do not commit secrets, private personal information, confidential material, or source material that Wonder Orchards does not have permission to publish.
