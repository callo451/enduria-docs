# Documentation authoring instructions

This repository contains the public Enduria documentation site.

- Write for users, administrators, integrators, and self-hosters—not Enduria maintainers.
- Lead with the reader's outcome. Use short sections, concrete steps, and descriptive links.
- Never invent product behavior, configuration variables, endpoints, fields, limits, or permissions. Verify technical claims against the Enduria application repository.
- The live `/api/v1/openapi.json` output is authoritative for REST operations and schemas. Hand-written API pages explain concepts and workflows rather than duplicating the entire schema.
- Never include secrets, private customer information, internal-only URLs, or unsafe sample values.
- Organisation vocabulary is configurable. Do not present statuses, priorities, categories, lifecycle stages, or SLA targets as universal values.
- Place docs under the matching `docs/` section and add intentional navigation entries to `sidebars.ts`.
- Use sentence case for page titles and headings.
- Run `npm run check` before handing off changes.

## Feature documentation workflow

- Treat public guidance as part of each user-visible application increment. Link the matching application PR and the affected guides in the documentation PR.
- For SaaS administrator how-to guides, include the outcome, required permissions/scope, real navigation and action labels, numbered steps, expected result, and recovery from common problems.
- Verify staff screens, CSV imports and public API contracts separately. Do not copy fields or capabilities between them by inference.
- Translate delivered implementation-plan changes into user tasks. Never publish internal finding IDs, private security reviews, SQL details or test fixtures as end-user guidance.
- Distinguish delivered, awaiting rollout and planned capabilities. Keep an explicit availability note for unmerged/unreleased features; coordinate removal with the application rollout.
- Run `npm run check` and inspect the rendered pages and navigation at desktop and mobile widths. Record validation and any remaining limitations in the PR.
