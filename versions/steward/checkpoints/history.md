---
title: Steward Checkpoint History
version: alpha-v2.3
status: active
category: versions
preferred_return_checkpoint: CHECKPOINT-0005
tags: [steward, checkpoints, history, rollback]
last_updated: 2026-08-09
---

# Steward Checkpoint History

## Purpose

This file is the registry for repository-wide Steward checkpoints.

A checkpoint links a Steward semantic version to one exact Git commit representing the tracked repository and frontend state. Git remains the mechanical source of truth. Steward version records explain semantic evolution, and human decision records supply authorization.

Checkpoint records do not replace Git commits, Steward versions, or human decisions. They connect those layers so a repository state can be understood, compared, recommended for restoration, and restored through later authorized Git history.

## Current State

`CHECKPOINT-0005` is the available, provisional checkpoint for repository commit `81f90b6e7c07cd1116ea750991b7f3ca8e322a58` and is the preferred return point before future experimentation.

This designation does not identify the current repository state or Steward version and does not authorize automatic restoration. `steward-v0.1.0` remains the same current provisional Steward baseline.

## Registry

| Checkpoint | Steward version | Git commit | Parent checkpoint | Lifecycle | Known-good | Record |
|---|---|---|---|---|---|---|
| `STEWARD-CHECKPOINT-0001` | `steward-v0.1.0` | `bf69e0617da13d2b13a2c9d715249b4fa130f58a` | None | `draft` | `unverified` | [Checkpoint 0001](steward-checkpoint-0001.md) |
| `CHECKPOINT-0002` | None | `8d28e0d2a55204bd771cc203e281315db0bd402f` | `STEWARD-CHECKPOINT-0001` | `draft` | `unverified` | [Checkpoint 0002](steward-checkpoint-0002.md) |
| `CHECKPOINT-0003` | None | `ad6cd07be7fc6a9da36336987a20134a3bab6968` | `CHECKPOINT-0002` | `available` | `provisional` | [Checkpoint 0003](steward-checkpoint-0003.md) |
| `CHECKPOINT-0004` | None | `616fb0ab2f1c4321447af5f3ec04786a31127418` | `CHECKPOINT-0003` | `available` | `provisional` | [Checkpoint 0004](steward-checkpoint-0004.md) |
| `CHECKPOINT-0005` | None | `81f90b6e7c07cd1116ea750991b7f3ca8e322a58` | `CHECKPOINT-0004` | `available` | `provisional` | [Checkpoint 0005](steward-checkpoint-0005.md) |

## Canonical Checkpoint Lifecycle

Use exactly this lifecycle sequence:

```text
draft → available → retired
```

- `draft` — a candidate checkpoint record; it is not yet accepted as a return point.
- `available` — a human has explicitly accepted the exact Git commit as a usable return point.
- `retired` — preserved historically but no longer recommended for ordinary restoration.

Checkpoint lifecycle status is distinct from `known_good_status`. A draft checkpoint remains `unverified`. An available checkpoint must be `provisional` or `verified`.

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

## Record Creation and Acceptance

A checkpoint record may be created as a `draft`. A prospective draft may have a null commit until the intended repository commit exists. A retrospective draft must identify the exact full commit SHA it proposes as a return point.

Creating a draft does not make the checkpoint available and does not authorize restoration.

To become `available`, a checkpoint must:

1. identify an exact full Git commit SHA that resolves to the intended repository state;
2. document material known defects, limitations, unknown conditions, and relevant validation;
3. link an explicit human acceptance of that exact state as a usable return point; and
4. have `known_good_status: provisional` or `known_good_status: verified`.

## Preferred Return Checkpoint

`preferred_return_checkpoint: CHECKPOINT-NNNN` identifies the available checkpoint a human would ordinarily choose before experimentation. `none` means no preferred return point has been designated.

This field does not identify the current repository state or current Steward version. It does not authorize the Steward to restore anything automatically.

## Registry Rules

- Checkpoint IDs use the form `CHECKPOINT-NNNN` and are never reused. The first formal record retains its historical `STEWARD-CHECKPOINT-0001` identifier rather than being renamed retrospectively.
- Every checkpoint identifies one full Git commit SHA.
- A checkpoint links a Steward semantic version only when the repository state corresponds to meaningful Steward evolution.
- Every checkpoint identifies its semantic parent checkpoint, when one exists.
- Human acceptance and validation must be linked rather than inferred.
- Known-good status is separate from checkpoint lifecycle status.
- Restoration normally creates new Git history; it does not delete or rewrite prior checkpoints or shared history.
- Generated deployment artifacts are regenerated unless repository policy explicitly tracks them.
- The Steward may draft, validate, compare, and recommend checkpoints and restoration impact, but it may not accept a checkpoint or authorize or execute restoration automatically.

When a restoration occurs, record the reason, checkpoint used, affected scope, human authorizer, resulting commit, and validation. Detailed checkpoint records belong in this directory and should be created from `templates/steward-checkpoint.md`.
