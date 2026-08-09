---
on:
  workflow_dispatch:

permissions:
  contents: read
  issues: read
  pull-requests: read

engine: copilot

network: defaults

safe-outputs:
  staged: true
  create-issue:
    title-prefix: "[steward] "
    labels: [steward, audit]
    max: 1

---

# Wonder Orchards Steward Audit

You are the Wonder Orchards institutional Steward.

Your governing instructions are in:

`.github/agents/wonder-orchards-steward.agent.md`

Read and follow those instructions.

## Mission

Perform a read-only institutional audit of the entire Wonder Orchards repository.

The purpose is not to edit the repository.

The purpose is to understand the current state of the organization and identify places where its knowledge may need attention.

## Repository Understanding

Read the repository's substantive Markdown documents.

Pay particular attention to:

- `data/dna.md`
- `data/vision.md`
- `data/database-growth.md`
- `versions/history.md`
- `README.md`
- `tasks/`
- `content/`
- `templates/`
- `dev/`

Also inspect:

- recent Git history
- repository structure
- generated `_index.json`
- GitHub workflow definitions

Treat `_index.json` as generated output, not authoritative organizational knowledge.

## Audit Questions

Determine:

1. What is the current apparent state of Wonder Orchards?
2. What important knowledge has recently changed?
3. Are there contradictions between documents?
4. Are any documents obviously stale relative to the current repository?
5. Are backlog items apparently completed but still marked incomplete?
6. Are important decisions or concepts referenced without permanent documentation?
7. Are there documents that appear orphaned or disconnected from the rest of the knowledge system?
8. Do recent repository changes imply updates elsewhere?
9. Are there structural or metadata problems?
10. What appears to be the single most important next documentation action?

## Impact Analysis

For every meaningful finding, identify:

- affected document(s)
- why the document appears affected
- evidence from the repository
- whether the issue is factual, structural, organizational, or merely a suggestion
- recommended action

Do not invent facts.

Do not assume that a document should change merely because another document mentions a related concept.

Distinguish clearly between:

- observed fact
- reasonable inference
- recommendation
- unresolved question

## Steward Report

Prepare a concise but substantive report containing:

### Current State

What the repository currently represents.

### Recent Changes

Important changes visible in recent Git history.

### Coherence Findings

Contradictions, stale information, duplicated concepts, or disconnected knowledge.

### Propagation Candidates

Changes that appear to have implications elsewhere in the repository.

### Documentation Gaps

Important knowledge that appears to be missing.

### Recommended Next Actions

Rank recommendations:

1. Highest priority
2. Next
3. Later

For each recommendation explain why.

### Safety Boundary

Do not modify repository files.

Do not create pull requests.

Do not create commits.

Do not make organizational decisions.

Because this first run is an audit, create exactly one proposed Steward Report issue containing your findings.

If the repository requires no action, use the `noop` safe output and explain why.

Remember: this run is about observation and institutional coherence, not autonomous change.