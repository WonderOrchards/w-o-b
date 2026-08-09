---
title: Steward vX.Y.Z — [Short Name]
steward_version: steward-vX.Y.Z
artifact_type: steward-version
version_status: proposed
change_class: capability-growth
previous_version: steward-vX.Y.Z
date_proposed: YYYY-MM-DD
date_authorized: null
date_implemented: null
date_activated: null
origin: unknown
origin_intakes: []
authorization_status: pending
decision_record: null
decided_by: TBD
decision_date: null
implementation_commits: []
activation_commit: null
known_good_status: unverified
known_good_commit: null
rollback_target: null
rollback_target_commit: null
component_scope: []
status: draft
category: versions
tags: [steward, evolution]
last_updated: YYYY-MM-DD
---

# Steward vX.Y.Z — [Short Name]

## Summary

Describe the semantic Steward state represented by this version.

## Classification

State the change class and why it applies. Use `bootstrap` only for `steward-v0.1.0`.

## Previous Version

Identify the direct semantic predecessor and its known-good status.

## Origin and Provenance

Link source material, inbox records, interpretations, proposals, issues, or other origins. Provenance is not authorization.

## Human Authorization

Identify the exact decision, decision-maker or accountable role, date, approved scope, excluded scope, and conditions. Do not invent missing authorization.

## What Changed

Describe capability, authority, trigger, output, safety, and component changes in semantic terms.

## Explicit Non-Changes

Identify related behavior and authority that remain unchanged.

## Why It Changed

Explain the institutional need and connect it to provenance and the human decision.

## Component and Git Record

List affected components, full implementation commit SHAs, activation commit, and any deployment reference. Link to Git rather than reproducing full diffs.

## Validation

Record checks performed, results, reviewer, date, failures, and unresolved limitations.

## Known-Good Assessment

Record `unverified`, `provisional`, `verified`, `failed`, or `revoked`, with supporting evidence.

## Rollback Target

Identify the prior eligible semantic version and exact known-good commit.

## Rollback Procedure

Describe how to restore affected components from current `main` without rewriting history or deleting later institutional evidence.

## Activation

Record when and how this version became active. A commit alone is not semantic activation.

## Limitations and Open Questions

Preserve unresolved authority, compatibility, validation, and operational questions.
