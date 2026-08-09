---
title: Steward Version History
version: alpha-v2.3
status: active
category: versions
active_steward_version: steward-v0.1.0
active_version_status: active
active_known_good_status: provisional
active_since_commit: aed720e0c91a4641fe9fedb71b4dd3326c798a08
baseline_ratification: decisions/2026-08-09-ratify-steward-v0.1.0.md
tags: [steward, history, evolution]
last_updated: 2026-08-09
---

# Steward Version History

## Current Baseline

`steward-v0.1.0` is the current provisional semantic baseline.

It retrospectively identifies the initial Steward agent and audit workflow. Its original authorization remains undocumented. A later [human ratification](decisions/2026-08-09-ratify-steward-v0.1.0.md) accepts it as the present provisional starting point without retroactively authorizing the original commits or approving any future capability.

## History

| Steward version | Date | Change class | Lifecycle | Known-good | Previous | Record |
|---|---|---|---|---|---|---|
| `steward-v0.1.0` | 2026-08-08 | `bootstrap` | `active` | `provisional` | None | [Steward v0.1.0](steward-v0.1.0.md) |

## Later Decisions

- **2026-08-09 — Baseline ratification:** `steward-v0.1.0` was ratified as the current provisional starting point. Original authorization remains undocumented, and no future capability was authorized. See [decision record](decisions/2026-08-09-ratify-steward-v0.1.0.md).

## Reading This History

- Git records the exact implementation history.
- Each Steward version record explains the semantic evolution represented by its commits.
- Later discoveries may revoke a known-good assessment without rewriting the original evolution.
- The gardener seed remains provenance for a possible future evolution. It is not authorization for `steward-v0.2.0` or any other release.
