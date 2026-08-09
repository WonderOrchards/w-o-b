---
title: Steward v0.1.0 — Initial Semantic Baseline
steward_version: steward-v0.1.0
artifact_type: steward-version
version_status: active
change_class: bootstrap
previous_version: none
date_implemented: 2026-08-08
date_activated: 2026-08-08
origin: initial-steward-agent-and-audit-workflow
origin_intakes: []
authorization_status: undocumented
decision_record: none
decided_by: unknown
decision_date: unknown
later_ratification_status: ratified-as-provisional-baseline
later_ratification_decision: decisions/2026-08-09-ratify-steward-v0.1.0.md
later_ratification_date: 2026-08-09
implementation_commits: [761741a75a524995acc758fa313de5a0d012b515, aed720e0c91a4641fe9fedb71b4dd3326c798a08]
activation_commit: aed720e0c91a4641fe9fedb71b4dd3326c798a08
known_good_status: provisional
known_good_commit: aed720e0c91a4641fe9fedb71b4dd3326c798a08
rollback_target: pre-steward-baseline
rollback_target_commit: e53b78caef5185c94e1812891fef28bf23bfa6c5
component_scope: [.github/agents/wonder-orchards-steward.agent.md, .github/workflows/steward-audit.md, .github/workflows/steward-audit.lock.yml, .github/aw/actions-lock.json, .gitattributes]
status: active
category: versions
tags: [steward, bootstrap, baseline]
last_updated: 2026-08-09
---

# Steward v0.1.0 — Initial Semantic Baseline

## Summary

`steward-v0.1.0` retrospectively establishes the first semantic baseline for the Wonder Orchards Steward.

It identifies the initial governing Steward agent and the first Steward audit workflow. It does not claim that a prior semantic Steward version existed, nor does it classify the baseline as capability growth.

## Classification

- **Change class:** `bootstrap`
- **Previous version:** None
- **Reason:** This record establishes the initial semantic Steward version rather than adding a capability to an earlier version.

## Origin and Provenance

The baseline originates in two existing repository changes:

1. Creation of the Wonder Orchards Steward agent.
2. Creation of the read-only Steward audit workflow.

Associated implementation commits:

- `761741a75a524995acc758fa313de5a0d012b515` — Add Wonder Orchards Steward agent.
- `aed720e0c91a4641fe9fedb71b4dd3326c798a08` — Add Wonder Orchards Steward audit workflow.

No preserved intake, proposal, or decision record has been found for the original baseline.

The later gardener seed at `inbox/drop/steward-gardener-seed.md` is provenance for a possible future Steward evolution. It did not originate this baseline and is not authorization for `steward-v0.2.0` or any other version.

## Authorization

Original authorization is undocumented.

- **Authorization status:** `undocumented`
- **Decision record:** None found
- **Decision-maker:** Unknown
- **Decision date:** Unknown

This retrospective record must not be interpreted as inventing or supplying the missing authorization. Human ratification would be a later decision and should be recorded as such without rewriting the original history.

## Later Human Ratification

On 2026-08-09, a human [ratified this version as the current provisional starting point](decisions/2026-08-09-ratify-steward-v0.1.0.md) for future Steward evolution within the documented authority boundaries.

The ratification establishes present authority over the baseline but does not alter these historical facts:

- original authorization for the two implementation commits remains undocumented;
- `steward-v0.1.0` remains the same bootstrap version;
- its known-good status remains `provisional`; and
- no future capability, permission, operating-model change, or Steward version was authorized.

## What Changed

The baseline introduced:

- a governing Steward agent description;
- a connected-system approach to institutional memory;
- source hierarchy and change-propagation expectations;
- mechanical and human-review authority boundaries;
- institutional-history and repository-integrity principles; and
- a read-only audit workflow capable of proposing one Steward Report issue.

## Explicit Non-Changes

This semantic record does not:

- modify the Steward agent or audit workflow;
- grant new permissions;
- authorize inbox digestion or autonomous integration;
- assign frontend cultivation to the Steward;
- modify DNA, Vision, Workflows, or other organizational authorities;
- create automation beyond the already existing audit workflow; or
- treat later source material as retroactive authorization.

## Why This Record Exists

Git preserves the exact commits, but the repository previously lacked a semantic answer to which Steward version those commits represented, why that state existed, whether it was known-good, and how it could be reversed.

This record supplies that semantic baseline while preserving uncertainty about its original authorization.

## Validation

Retrospective validation is limited to repository evidence:

- The two full implementation commit SHAs exist in Git history.
- The first commit introduces the governing Steward agent.
- The second commit introduces the audit source workflow and its generated support files.
- The current agent describes bounded mechanical authority and required human review for consequential changes.
- The audit workflow is defined as read-only with constrained safe output.

No original acceptance test, human approval record, live-run result, or rollback rehearsal has been located. Therefore the baseline is `provisional`, not `verified`.

## Known-Good Assessment

- **Status:** `provisional`
- **Known-good commit:** `aed720e0c91a4641fe9fedb71b4dd3326c798a08`
- **Reason:** The baseline is structurally identifiable and bounded, but original authorization and complete operational validation are undocumented.

## Rollback Target

Because this is the initial Steward version, there is no earlier Steward version.

The historical pre-Steward repository state is:

```text
e53b78caef5185c94e1812891fef28bf23bfa6c5
```

This is a historical reference, not an instruction to reset the repository to that commit.

## Rollback Procedure

To remove or suspend this baseline safely:

1. Obtain human authorization for the rollback or removal.
2. Disable the Steward audit trigger first if urgent suspension is required.
3. Start from current `main`; do not reset or rewrite shared history.
4. Remove or restore only the Steward components introduced by the two implementation commits, preserving unrelated later work.
5. Review any Steward reports or issues separately; do not delete institutional evidence automatically.
6. Create a new semantic rollback version describing the change.
7. Validate that remaining workflows, repository navigation, and generated artifacts are coherent.
8. Merge through new Git commits and record their full SHAs.

The pre-Steward commit may guide file comparison, but a safe rollback must account for all repository changes made after it.

## Limitations and Open Questions

- Who originally authorized the Steward and audit workflow?
- Has the audit workflow completed a successful live run?
- What validation is required before this baseline can become `verified`?
- What accountable organizational role should be named for future Steward authorization decisions?
