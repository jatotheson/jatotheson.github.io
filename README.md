# Portfolio Workspace

This repository now acts as a small workspace that holds:

- `apps/personal-site` – the main portfolio that powers `jatotheson.github.io`
- `apps/showcase-project` – an independent page for the LaunchPad concept

## Getting Started

```bash
npm install
```

Start either app:

```bash
npm run dev           # personal site (default)
npm run dev:personal-site
npm run dev:showcase-project
```

## Build & Deploy

```bash
npm run build   # builds each app and composes dist/
npm run deploy  # builds + pushes dist/ with gh-pages
```

The combined `dist/` folder will contain the personal site at the root and any independent projects under
`dist/projects/<project-name>/`. Update `scripts/build-all.mjs` if you add more apps.
