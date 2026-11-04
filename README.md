# Abdelrahman Ashour, portfolio

React 18 + TypeScript + Vite. Light and dark themes, live project previews.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # type-checks, then writes the site to dist/
npm run preview    # serve dist/ locally
```

## Deploy to GitHub Pages

1. Push this folder to your `portfolio` repository (branch `main`).
2. In the repository: Settings, Pages, Source: **GitHub Actions**.
3. Every push to `main` builds and publishes the site (see `.github/workflows/deploy.yml`).

## Where things are

| File | What it holds |
| --- | --- |
| `src/data.ts` | Skills, experience, projects, links. Edit your content here. |
| `src/App.tsx` | Page sections and components. |
| `src/index.css` | All styling, including the light and dark color tokens. |
| `src/assets/` | Your photo and the project screenshots. |

To add a project, add an entry to `own` in `src/data.ts` and put its screenshot in `src/assets/`
(then add it to the `shots` list in `src/assets/index.ts`).
