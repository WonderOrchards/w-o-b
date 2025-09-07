title: Alpha v2.2
date: 2025-09-07
status: active
category: versions
tags: [reorganization, metadata, standardization]

Alpha v2.2 — Reorganization & Standardization Pass

Summary

This version focuses on organizational improvements, metadata standardization, and integrating stray content.

Changes Made

Reorganized File Structure:

Moved nursery experiments from data/The Wonder Nursery/explorations/ to data/nursery/experiments/
Updated all relevant file paths and README.md index
Standardized YAML Frontmatter:

Applied consistent metadata fields across all files:

title
version: alpha-v2.2
status
category (docs, tasks, ops, dev, nursery, scripts, templates)
tags
last_updated: 2025-09-07
Ensured consistent tagging conventions
Transformed database-growth.md:

Changed from simple Q&A to actionable backlog format
Added status, effort estimates, and notes for each item
Categorized items by area (Identity, Vision, Workflows, etc.)
Enhanced Development Workflow:

Merged dev/usage-instructions.md into dev/thread-header.md
Created comprehensive development manual in the thread header
Archived the original usage instructions file
Version Updates:

Updated version field in all core files to alpha-v2.2
Added this version note
Updated last_updated dates throughout
Files Added/Modified

README.md (updated index and version)
data/accounts.md (metadata update)
data/database-growth.md (complete transformation)
data/dna.md (metadata update)
data/nursery/experiments/propagation-experiments-overview.md (moved and updated)
data/vision.md (metadata update)
data/workflows.md (metadata update)
dev/thread-header.md (major expansion)
dev/usage-instructions.md (archived)
scripts/README.md (metadata update)
tasks/backlog.md (metadata update)
tasks/completed.md (metadata update, added new completed items)
tasks/in-progress.md (metadata update, added nursery experiments)
templates/document.md (metadata update)
templates/task.md (metadata update)
versions/alpha-v2.2.md (new file)
Benefits

Improved consistency across the database
Better machine-readability for future automation
Clearer content prioritization with the transformed backlog
More comprehensive development guidelines
Fully integrated content (no more stray nursery files)
