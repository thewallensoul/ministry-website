# Agent Instructions

## General

- Read the files directly related to a task and search for similar implementations before changing code. Follow the existing architecture, naming, folder structure, and coding patterns.
- Keep changes small, localized, and maintainable. Modify only files required for the request and preserve unrelated worktree changes.
- Preserve existing behavior unless the request requires a change. Reuse existing utilities, components, services, hooks, styles, and helpers.
- Do not refactor unrelated code or add unnecessary wrappers, hooks, abstractions, configuration, or layers.
- Do not rename, delete, or move files; change database schemas or API contracts; add dependencies; or introduce a new architecture without asking first.
- Remove unused imports when appropriate, but keep commented code, placeholders, and empty references.
- If requirements are ambiguous or require an important product or architectural choice, explain the options and ask before implementing the dependent change. Continue independent work where possible.
- Do not build a test suite unless explicitly requested. You may perform a reasonable functionality check, and should state what was and was not verified.
- Follow OWASP Top 10 principles. Report any security concern found.

## Scope and communication

- Do not change the layout, width, alignment, spacing, or other styling of existing content unless the user asked for that specific change. Treat CSS-only changes to existing content as scope changes too.
- Keep new selectors scoped to the requested page or component. Do not add broad selectors that alter other content as a side effect.
- In the final summary, explicitly disclose every CSS/layout change and identify which pages or components it affects. A `.chatgpt` marker does not replace reporting the change.

## Material
- Never rewrite or reword the material unless explicitly instructed to do so. You can help me reorder and design and initially write, but when refactoring or doing css or building etc. do not rewrite material that's already finished.

## Frontend

- Before editing files under `public/assets`, inspect `scripts/prepare-public-files.mjs`. It copies the source `assets/` directory into `public/assets/` and overwrites generated copies, so make asset changes in `assets/` and verify the preparation/build step regenerates `public/`.
- Preserve the site's visual style, spacing, and component patterns.
- Reuse existing CSS variables, components, and layouts. Do not introduce a new design system or styling approach for a localized change.
- Preserve the existing custom CSS, color palette, and `.html` URLs unless the user approves a broader change.
- Preserve supplied wording; make only small presentation edits unless broader editorial changes are requested.
- If I ask you to add things (written or other), use the .chatgpt css class, even in mdx files, that way i can identify what you've added and only remove the class after I've proofread your work.

## Repository Boundaries

- This repository contains the Website project. The adjacent `Supabase` backend is a separate repository; inspect and modify it only when the task requires backend work.
- Confirm the actual Git root before using Git or making repository-wide assumptions.

## Completion Summary

After completing a task, report:

- Every file changed and why.
- What changed in each file.
- Assumptions made.
- Follow-up work, edge cases, or potential improvements to consider.
- Verification performed and its limits.
