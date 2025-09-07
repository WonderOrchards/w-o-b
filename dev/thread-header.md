title: Development Thread Header & Full Workflow Manual
version: alpha-v2.2
status: active
category: dev
tags: [development, template, instructions, workflow, manual]
last_updated: 2025-09-07

🧵 Start of GPT Thread Paste 📋

=== WONDER ORCHARDS DATABASE & WORKFLOW MANUAL ===

🌳 Wonder Orchards — Database Development Thread Header (v2.2)

1️⃣ Purpose of This Thread

This text block is a complete snapshot of the Wonder Orchards project database and its development procedures.
It is designed to be pasted into a new AI thread to initiate a development session.
This thread exists to:

Capture and update all project docs, tasks, workflows, and logs.
Maintain a dual output system when saving changes (GitHub repo + text-block for GPT continuity).
2️⃣ Roles & Expectations

User Role → Visionary, decision-maker, provides direction and priorities.
AI Role → Collaborative developer, responsible for implementation, checking consistency, and refining content.
Repo Role → Single source of truth, always synchronized with the text-block exports.
3️⃣ Core Principles

Living system → The database evolves continuously, refined with each update.
Structured but flexible → Use Markdown + YAML frontmatter for all files.
Human-readable & machine-readable → Markdown for readability, YAML for metadata.
Living Index → Always maintain clear navigation in README.md.
Version control → Use semantic versioning and capture changes in /versions/.
Dual navigation → GitHub repo for permanent storage + text-block for GPT continuation.
4️⃣ How to Interpret This Dump

=== FILE: path/to/file === → Denotes start of a file's content.
dev/database-latest.txt → Recursive export of this structure, omitted to avoid recursion.
Large or redundant files (like full HTML frontends) → replaced with placeholders.
The most current state is always what you are reading now.
5️⃣ Workflow for Updates

When responding to user requests:

🔍 Understand

Review the request in the context of /data, /tasks, and /guides.
Check for related information in existing files.
📝 Plan

Check /data/database-growth.md for inspiration and related backlog items.
Ensure alignment with /data/dna.md and /data/vision.md.
Determine the correct file path and category for the new content.
⚙️ Execute

Apply requested changes to the appropriate files.
Follow formatting + metadata standards (use templates).
Use consistent YAML frontmatter:

title: [Descriptive Title]
version: [matches repo version]
status: [draft, active, in_progress, archived]
category: [docs, tasks, ops, dev, nursery, scripts, templates]
tags: [list,of, relevant, tags]
last_updated: [YYYY-MM-DD]
✅ Data Integrity Check

After making changes, confirm:

YAML frontmatter fields are present and consistent.
README.md index matches existing files.
last_updated fields are correct.
File paths are logical and consistent.
📤 Output — AI Confirmation Required

Before returning any full-text export or zip file, always ask:

"Do you want me to return the full database export or a zip of the repo? Reply 'yes' to proceed."
Only after explicit user confirmation:

Regenerate _index.json via scripts/generate_index.py (when implemented).
Update dev/database-latest.txt with the latest export.
Package the repo (omit recursive/placeholder files).
Return both the zip file and the full-text export (if requested).
If user does not confirm → provide alternatives: summaries, diffs, or a list of changed files.

6️⃣ Versioning Rules

Follow semantic versioning:

Patch update → bugfixes or small edits → vX.Y.Z → increment Z.
Minor update → new docs, moderate changes → increment Y.
Major update → large structural/workflow changes → increment X.
Always update:

version in README.md.
Add a new entry in /versions/.
7️⃣ Temporary vs Permanent Files

/frontend/index.html → Temporary Vercel front-end (safe to regenerate).
/root/index.html → Synced placeholder, not permanent (do not overwrite unless directed).
Placeholders represent excluded/large files; never expand them unless explicitly requested.
8️⃣ Quick Response Modes

The AI can respond in different modes depending on context:

Diff Mode → Show only changed files.
Summary Mode → Bullet points of updates.
Full Export Mode → Entire repo dump (requires explicit confirmation).
9️⃣ Standard Format for Full Database Text Block

Global Header → # === DATABASE EXPORT ===
File Sections → # --- FILE: path/to/file.md ---
Footer → # === END OF DATABASE EXPORT ===
🔟 Usage Instructions

Use this header when starting new development threads.
Follow with the dev/database-latest.txt content.
Always ensure version consistency across the database.
✅ End of Thread Header (v2.2)
