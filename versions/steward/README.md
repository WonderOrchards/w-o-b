---
title: Steward Evolution and Rollback
version: alpha-v2.3
status: active
category: versions
tags: [steward, evolution, versioning, rollback]
last_updated: 2026-08-09
---

# Steward Evolution and Rollback

## Purpose

This directory records meaningful evolution of the Wonder Orchards Steward. It adds semantic history to Git without duplicating Git's record of exact file contents.

A Steward version explains what the Steward had become, why it changed, who authorized the change, how it was validated, which commits implemented it, whether it is known-good, and how it could be safely reverted.

## Semantic Steward Versions

Steward versions use their own namespace:

```text
steward-vMAJOR.MINOR.PATCH
```

- `MAJOR` changes the Steward operating model, authority boundary, trigger model, or fundamental behavioral contract.
- `MINOR` adds a compatible capability within the existing operating model.
- `PATCH` corrects effective behavior without expanding capability or authority.

Version numbers are monotonic and are never reused. A rollback creates a new version that identifies the behavior it restores; it does not make history move backward.

Purely mechanical maintenance does not receive a Steward version unless it changes effective Steward behavior.

## Change Classes

### `maintenance`

Ordinary repository cultivation that does not change Steward behavior or authority. Examples include non-semantic formatting, link repair, and regeneration of unchanged generated output. This normally remains in Git history without a Steward release.

### `bootstrap`

Establishment of the initial semantic Steward baseline. This class is used once for `steward-v0.1.0`; it does not imply that a new capability was added to a previous Steward version.

### `capability-growth`

Addition or material improvement of a Steward capability within the existing authority model. This normally increments `MINOR`.

### `operating-model-change`

A change to when, how, where, or with what authority the Steward acts. This normally increments `MAJOR` and requires explicit human approval of permissions, approval gates, failure behavior, and rollback.

### `fundamental-organizational-mutation`

A change to Wonder Orchards identity, governance, commitments, or relationship to human authority. This is not merely a Steward release. It requires an independent organizational decision and organizational version checkpoint; a related Steward change also receives a major version.

### `rollback`

A new semantic release that restores all or part of a previous known-good behavior while preserving later history.

## Known-Good States

Known-good state is separate from lifecycle state:

- `unverified` — implementation exists, but required validation is incomplete.
- `provisional` — available checks passed or the baseline is usable, but evidence or live observation is limited.
- `verified` — approved validation passed and no unresolved critical issue remains.
- `failed` — required validation failed; the version should not be activated.
- `revoked` — later evidence makes a previously accepted version unsuitable as a rollback target.

A retired version may remain `verified` and therefore remain an eligible rollback target.

## Lifecycle States

- `proposed` — described but not authorized.
- `authorized` — approved within a recorded scope.
- `implemented` — associated changes exist but are not yet active.
- `active` — currently governs Steward behavior.
- `retired` — no longer active.
- `rolled-back` — replaced because its behavior was reverted.
- `suspended` — temporarily disabled for safety pending a decision.

Only one Steward version may be active at a time. The active version and known-good state are recorded in `history.md`.

## What Requires a Version

A version is required when effective Steward capability, authority, inputs, outputs, triggers, safety behavior, or operating model changes meaningfully.

A version record must identify:

- its unique version and previous version;
- change class;
- origin and provenance;
- human decision or authorization;
- what changed and why;
- explicit non-changes;
- validation performed;
- associated full Git commit SHAs;
- activation state and commit;
- known-good state;
- rollback target and procedure; and
- affected component scope.

The governing agent, workflows, protocols, templates, and other components may be within a version's scope. Generated files are implementation artifacts rather than semantic authority.

## Activation

A future Steward version becomes active only when:

1. Its origin is documented.
2. Required human authorization exists.
3. The approved scope is explicit.
4. Implementation commits are recorded.
5. Required validation passes.
6. A safe rollback target and procedure are documented.
7. `history.md` records activation.
8. The governing Steward configuration identifies the same active version when that mechanism is adopted.

A commit alone does not prove semantic activation. Retrospective baselines must label incomplete authorization or activation evidence rather than invent it.

## Rollback

Rollback preserves Git history. Do not reset or rewrite the shared branch.

The preferred procedure is:

1. Suspend unsafe behavior if necessary.
2. Select a `verified` rollback target, or obtain explicit human approval for a provisional emergency target.
3. Start from current `main`.
4. Restore only affected Steward components from the target known-good commit, preserving unrelated later work.
5. Review knowledge and artifacts produced by the version being rolled back; do not delete them automatically.
6. Create a new semantic version with `change_class: rollback`.
7. Validate restored behavior and authority boundaries.
8. Merge through new commits and record them in the rollback version.

`git revert` may be used when problematic commits are isolated and reverting them will not remove unrelated changes. Otherwise, restore and review only the affected files.

Rollback of Steward behavior does not automatically retract organizational knowledge, inbox provenance, decisions, reports, or integration records. Those require a separate impact review and, when consequential, human decisions.

## Emergency Suspension

If active behavior is unsafe, use the smallest reversible action that stops it, such as disabling its trigger or write path.

Emergency suspension must:

- preserve evidence and Git history;
- record the suspension commit and reason;
- avoid claiming that an older version is active before restoration and validation;
- mark the affected version `failed` or `revoked` when evidence warrants it; and
- be followed by an authorized repair or rollback decision.

Automatic emergency suspension is permitted only if an earlier human-approved operating model explicitly grants it.

## Authority Boundaries

The Steward may mechanically:

- detect that a change may require a version;
- draft version and rollback records;
- collect provenance and Git references;
- compare versions;
- run validation;
- identify eligible rollback targets; and
- report inconsistencies.

The Steward may not authorize its own evolution, expand its permissions, declare an interpretive action mechanical, or approve a fundamental organizational mutation.

Human approval is required for capability growth, operating-model changes, activation, rollback of an active version, and consequential correction of knowledge produced by a faulty version.

Fundamental organizational mutations require authority independent of the Steward and must also be recorded in the organizational version history.

## Relationship to Git

Git remains the authoritative record of exact content and sequence. Steward version files link full commit SHAs and explain semantic meaning. They should not reproduce entire diffs or rewrite historical records merely to match later architecture.
