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
