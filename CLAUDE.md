# microtool-template — Claude Code Instructions

## What this project is

This is a **site factory starter template** for building free-tool micro-sites.
Stack: **Astro 6 + Tailwind CSS 4** — same stack as `../quickmeasuretool`.

When working on microtool-template, do not modify files inside `../quickmeasuretool`.

---

## The single source of truth: `src/site.config.ts`

**Every new site starts by editing this one file.**

`src/site.config.ts` controls:
- `siteName` → Nav brand, `<title>` tags, footer, JSON-LD
- `domain` → Canonical URLs, OG image URLs, JSON-LD `@id` values
- `tagline` → Default meta description and hero subtitle
- `primaryColor` → Used in `public/favicon.svg` and `public/site.webmanifest`
- `gaId` → Google Analytics 4 Measurement ID (empty string = disabled, no script injected)
- `adsenseId` → AdSense publisher ID (empty string = all `<AdSlot>` components render nothing)
- `navLinks` → Links in SiteNav and Footer
- `tools` → Home-page tool grid cards (one entry per tool page)

When Claude edits branding, nav links, or meta copy, edit `src/site.config.ts` only.
Do not hardcode site-specific strings in individual components.

---

## Standard pattern for adding a new tool page

Every tool page follows this structure (see `src/pages/example-tool.astro`):

```
src/pages/my-tool.astro
├── Frontmatter (---)
│   ├── imports: Layout, SiteNav, Footer, AdSlot, siteConfig
│   ├── faqs array — Q&A pairs; also feeds JSON-LD FAQPage schema
│   └── jsonLd object — WebApplication + FAQPage Schema.org graph
├── <Layout title description canonical keywords jsonLd>
│   ├── <SiteNav currentPath="/my-tool" />
│   ├── <main>
│   │   ├── tool header: back link, <h1>, description <p>
│   │   ├── tool area: the interactive widget (keep state local via <script is:inline>)
│   │   ├── <AdSlot slot="..." /> ← between tool and content
│   │   ├── content section: about h2, how-to h3 + steps
│   │   ├── <AdSlot slot="..." /> ← between content and FAQ
│   │   └── FAQ section: .faq-list with accordion via <script is:inline>
│   └── <Footer />
```

After creating the file:
1. Add a `<url>` block in `public/sitemap.xml`
2. Add a card in `src/site.config.ts` → `tools` array
3. No router config needed — Astro file-based routing handles it automatically

---

## Component responsibilities

| File | What it does |
|---|---|
| `src/site.config.ts` | **Single branding/config source** |
| `src/layouts/Layout.astro` | HTML shell: `<head>` meta, OG, Twitter card, GA script, AdSense script, JSON-LD, dark-mode init |
| `src/components/SiteNav.astro` | Sticky navbar; reads `siteConfig.navLinks`; dark-mode toggle |
| `src/components/Footer.astro` | Footer; reads `siteConfig.navLinks` and `siteConfig.siteName` |
| `src/components/AdSlot.astro` | Renders `<ins>` AdSense block; renders nothing when `siteConfig.adsenseId` is `''` |
| `src/styles/global.css` | Tailwind 4 import + `--site-*` CSS variable tokens for light/dark mode |

---

## Routing

Astro uses **file-based routing** — each `.astro` file in `src/pages/` automatically
becomes a URL route. No router config is needed.

| File | Route |
|---|---|
| `src/pages/index.astro` | `/` |
| `src/pages/example-tool.astro` | `/example-tool` |
| `src/pages/about.astro` | `/about` |
| `src/pages/404.astro` | 404 error page |

---

## Styling conventions

- **Tailwind CSS 4** via `@tailwindcss/vite` — import with `@import "tailwindcss"`, no config file.
- **Theme tokens** go in `@theme {}` blocks inside CSS (generates Tailwind utilities).
- **Site tokens** (colors, surfaces) are plain CSS variables in `:root` / `[data-theme="dark"]` in `src/styles/global.css`. Components use `var(--site-*)` in scoped `<style>` blocks.
- **Dark mode** is driven by `[data-theme="dark"]` on `<html>`. `SiteNav.astro` writes the attribute and persists to `localStorage`. The init script in `Layout.astro` sets the attribute before paint (prevents flash).
- Use **scoped `<style>` blocks** in each `.astro` component. Avoid global selectors for component-specific styles.

---

## SEO rules

- Every page passes `title`, `description`, and `canonical` to `<Layout>`.
- Tool pages also pass `jsonLd` containing at minimum a `WebApplication` node and a `FAQPage` node.
- Never hardcode the domain; always use `${siteConfig.domain}` in canonical URLs and JSON-LD.
- `public/sitemap.xml` is static — update it when adding or removing routes.

---

## AdSense

`<AdSlot>` renders nothing when `siteConfig.adsenseId` is `''`. The guard is inside
the component. Never wrap `<AdSlot>` in an extra conditional at call sites.

---

## Build & deploy

```bash
npm install
npm run dev      # Astro dev server on http://localhost:4321
npm run build    # Static build → dist/
npm run preview  # Preview the production build locally
```

### Deploying to Cloudflare Pages (SSR)

To add Cloudflare SSR (matching `../quickmeasuretool`):

1. `npm install @astrojs/cloudflare wrangler --save-dev`
2. In `astro.config.mjs` uncomment the adapter lines:
   ```js
   import cloudflare from '@astrojs/cloudflare';
   // output: 'server', adapter: cloudflare()
   ```
3. Add `wrangler.toml` with your Cloudflare project name and compatibility date.
4. `npx wrangler deploy` or push to a Cloudflare Pages–linked repo.

### Deploying statically (Netlify / Vercel / GitHub Pages)

The default `output: 'static'` build in `dist/` can be deployed directly.
No redirects file is needed — Astro generates per-page HTML files.

---

## Tailwind 4 key differences from v3

- Import: `@import "tailwindcss"` (no `@tailwind base/components/utilities`)
- Config: `@theme {}` in CSS replaces `tailwind.config.js`
- Custom utilities: `@utility` replaces `@layer utilities`
- No `postcss.config.js` needed — Vite plugin handles everything
- Arbitrary CSS vars: `bg-(--brand-color)` not `bg-[--brand-color]`
- See `.claude/skills/tailwind-4-docs/references/gotchas.md` for more
