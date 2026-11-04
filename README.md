# Reva Associates website

Static site built with [Astro](https://astro.build). Requires Node 22.23 or newer.

```bash
npm install
```

```bash
npm run dev
```

The dev server runs at http://localhost:4321.

| Command | What it does |
|---|---|
| `npm run dev` | Local preview that updates as you edit |
| `npm run build` | Builds the site into `dist/` |
| `npm run todos` | Lists every placeholder still to fill in |
| `npm run preview-file` | Creates `Reva-Website-Preview.html`, a single file you can double-click to view the site |

## Where things are

- `src/data/site.ts`: all firm details, services and team members. Most edits happen here.
- `src/pages/`: one file per page.
- `src/styles/global.css`: colours and fonts are at the top in `:root`.
- `PUBLISHING.md`: how to deploy and connect the domain.

To publish a change, commit and push to `main`. Cloudflare rebuilds the site automatically.
