---
title: Steward Checkpoint History
version: alpha-v2.3
status: active
category: versions
active_checkpoint: none
active_checkpoint_commit: none
active_checkpoint_status: none
tags: [steward, checkpoints, history, rollback]
last_updated: 2026-08-09
---

# Steward Checkpoint History

## Purpose

This file is the registry for repository-wide Steward checkpoints.

A checkpoint links a Steward semantic version to one exact Git commit representing the tracked repository and frontend state. Git remains the mechanical source of truth. Steward version records explain semantic evolution, and human decision records supply authorization.

Checkpoint records do not replace Git commits, Steward versions, or human decisions. They connect those layers so a repository state can be understood, compared, recommended for restoration, and restored through later authorized Git history.

## Current State

`STEWARD-CHECKPOINT-0001` is the first formal checkpoint record. It is a proposed, unverified anchor for repository commit `bf69e0617da13d2b13a2c9d715249b4fa130f58a`.

No checkpoint is authorized, sealed, active, known-good, or rollback-eligible. `steward-v0.1.0` remains the same current provisional Steward baseline.

## Registry

| Checkpoint | Steward version | Git commit | Parent checkpoint | Lifecycle | Known-good | Record |
|---|---|---|---|---|---|---|
| `STEWARD-CHECKPOINT-0001` | `steward-v0.1.0` | `bf69e0617da13d2b13a2c9d715249b4fa130f58a` | None | `proposed` | `unverified` | [Checkpoint 0001](steward-checkpoint-0001.md) |

## Canonical Checkpoint Lifecycle

Use exactly this lifecycle sequence:

```text
proposed → authorized → sealed → active → retired | suspended | rolled-back
```

- `proposed` — the checkpoint record may be drafted; the checkpoint is not authorized, sealed, or active.
- `authorized` — a durable human authorization record exists; the checkpoint is not yet sealed.
- `sealed` — the exact Git checkpoint commit SHA and required validation are recorded.
- `active` — separate human authority has designated the checkpoint as the active Steward checkpoint.
- `retired` — the checkpoint is no longer active but remains a valid historical state.
- `suspended` — the checkpoint is temporarily ineligible for ordinary rollback or activation.
- `rolled-back` — the checkpoint state was superseded through a later authorized rollback.

Checkpoint lifecycle status is distinct from `known_good_status`. Lifecycle describes institutional use and progression. Known-good status records the evidence supporting whether a checkpoint is safe and suitable.

## Canonical Known-Good Status

Known-good means:

> A human has determined that this exact repository state is sufficiently trustworthy and useful for its intended purpose, with all material known defects and limitations explicitly documented.

Use these canonical values:

- `unverified` — no human known-good assessment has been made.
- `provisional` — a human has accepted the checkpoint as a usable baseline with its documented limitations and known defects.
- `verified` — a human has accepted the checkpoint after the repository's defined verification requirements have been satisfied.

Known-good does not mean perfect or defect-free. Documented known defects may fall within a human acceptance boundary and therefore do not automatically prevent a `provisional` or `verified` designation.

Validation evidence must distinguish:

- **Known defect** — a condition that has been observed and documented.
- **Unknown condition** — a condition for which evidence is unavailable.
- **Not applicable** — a validation that does not apply to that checkpoint.
- **Not performed** — a validation that could have been performed but was not.

Validation evidence informs a human known-good assessment but does not make one. Checkpoint lifecycle and `known_good_status` remain independent fields.

## Record Creation and Gates

A checkpoint record may be created in draft form while its lifecycle status is `proposed`. At that stage, `authorization_status: pending`, `validation_status: pending`, and a null checkpoint commit are valid.

Creating a proposed record does not create a Git checkpoint, authorize it, seal it, or activate it.

The following gates apply:

1. A checkpoint cannot become `authorized` without a durable human authorization record.
2. A checkpoint cannot become `sealed` until required validation is complete and its exact full Git checkpoint commit SHA is recorded.
3. A sealed checkpoint cannot become `active` without separate human authority designating it as the active Steward checkpoint.

## Registry Rules

- Checkpoint IDs use the form `STEWARD-CHECKPOINT-NNNN` and are never reused.
- Every checkpoint identifies one full Git commit SHA.
- Every checkpoint links one Steward semantic version and its version record.
- Every checkpoint identifies its semantic parent checkpoint, when one exists.
- Human authorization and validation must be linked rather than inferred.
- Known-good status is separate from checkpoint lifecycle status.
- Rollback creates new Git history and a new Steward version; it does not delete or rewrite prior checkpoints.
- Generated deployment artifacts are regenerated unless repository policy explicitly tracks them.
- The Steward may draft, validate, compare, and recommend checkpoints, but it may not authorize activation or rollback itself.

Detailed checkpoint records belong in this directory and should be created from `templates/steward-checkpoint.md`. They may begin as proposed drafts before authorization and validation, but they must satisfy the lifecycle gates above before becoming authorized, sealed, or active.
