# Enduria Documentation

Public product, administration, API, and self-hosting documentation for Enduria, built with Docusaurus.

## Local development

Requires Node.js 20 or newer.

```bash
npm install
npm start
```

The development server reloads as Markdown, MDX, configuration, and theme files change.

## Validation

```bash
npm run check
```

This runs TypeScript checking and a production Docusaurus build. Broken internal links fail the build.

## Content structure

- `docs/getting-started` — orientation and first-use guidance
- `docs/product` — task-oriented product guides
- `docs/admin` — tenant administration
- `docs/api` — integration concepts and access to the generated API reference
- `docs/self-hosting` — production operations
- `sidebars.ts` — intentional navigation order
- `src` — landing page and Enduria theme

Read `AGENTS.md` before authoring. Product and API claims must be verified against the Enduria application repository.

## Deployment

The site builds to `build/` and can be hosted by any static site provider. The production Docker image uses unprivileged nginx and exposes port `8080`.

```bash
docker build --build-arg DOCS_URL=https://docs.enduria.io -t enduria-docs:local .
docker run --rm -p 9003:8080 enduria-docs:local
```

`GET /healthz` returns `200 OK` when nginx is ready. The image publishing workflow produces `latest`, semantic-version, and commit-SHA tags in GitHub Container Registry for AMD64 and ARM64.

The default production URL is `https://docs.enduria.io`. Set `DOCS_URL` at build time if another origin is used. Configure the custom domain in the selected host before enabling automatic publishing.
