# microtool-template

A site-factory starter for free-tool micro-sites.
Stack: **Astro 6 + Tailwind CSS 4** — same stack as the reference project `../quickmeasuretool`.

---

## Quick start

```bash
# 1. Copy the template
cp -r microtool-template my-new-site
cd my-new-site

# 2. Edit the ONE config file (see below)
# src/site.config.ts

# 3. Install & run
npm install
npm run dev      # http://localhost:4321
```

---

## The one file you must edit: `src/site.config.ts`

Everything — SiteNav, Footer, SEO meta tags, JSON-LD, and the home-page tool grid —
reads from this single file. Start here before touching anything else.

| Field | What it controls |
|---|---|
| `siteName` | `<title>` tags, nav brand, footer, JSON-LD name |
| `domain` | Canonical URLs, OG image URLs, JSON-LD `@id` |
| `tagline` | Default meta description, hero subtitle |
| `primaryColor` | `public/favicon.svg` fill colour, web manifest theme colour |
| `gaId` | Google Analytics 4 — leave `''` to disable (no script injected) |
| `adsenseId` | AdSense publisher ID — leave `''` to disable all `<AdSlot>` renders |
| `navLinks` | Links in SiteNav and Footer |
| `tools` | Cards on the home-page grid |

After editing `site.config.ts`, also update:
- `public/sitemap.xml` — change `example.com` to your real domain
- `public/robots.txt` — update the Sitemap URL
- `public/site.webmanifest` — update `name` and `short_name`
- `public/favicon.svg` — swap in your own icon

---

## How to add a new tool page

### 1 — Create the page file

Duplicate `src/pages/example-tool.astro` and rename it, e.g. `src/pages/word-counter.astro`.

Every tool page follows this pattern:

```
word-counter.astro
├── Frontmatter (---)
│   ├── imports: Layout, SiteNav, Footer, AdSlot, siteConfig
│   ├── faqs array         ← Q&A pairs; drives both the accordion and JSON-LD FAQPage
│   └── jsonLd object      ← WebApplication + FAQPage Schema.org graph
├── <Layout title description canonical keywords jsonLd>
│   ├── <SiteNav currentPath="/word-counter" />
│   ├── <main>
│   │   ├── back link + <h1> + description paragraph
│   │   ├── .tool-area     ← your interactive widget
│   │   ├── <AdSlot slot="..." />
│   │   ├── content section (h2, h3, paragraphs)
│   │   ├── <AdSlot slot="..." />
│   │   └── FAQ accordion section
│   └── <Footer />
```

### 2 — Add to the tool grid

In `src/site.config.ts`, add to the `tools` array:

```ts
tools: [
  // …existing…
  {
    name: 'Word Counter',
    href: '/word-counter',
    description: 'Count words, characters, sentences, and reading time.',
    badge: 'Free',
  },
],
```

### 3 — Update the sitemap

Add a `<url>` block in `public/sitemap.xml`:

```xml
<url>
  <loc>https://yourdomain.com/word-counter</loc>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

No router config is needed — Astro's file-based routing handles the URL automatically.

---

## AdSense

`src/components/AdSlot.astro` renders **nothing** when `siteConfig.adsenseId` is `''`.
Once you have an AdSense publisher ID, just fill it in `site.config.ts` and all `<AdSlot>`
components will activate automatically.

Pass each slot's unique ad-slot ID:

```astro
<AdSlot slot="1234567890" />
```

Place slots between logical sections — after the tool area and before the FAQ —
never inside the tool widget itself.

---

## Dark mode

Dark mode is driven by CSS variable overrides in `[data-theme="dark"]` inside
`src/styles/global.css`. The toggle in `SiteNav.astro` writes `data-theme="dark"`
to `<html>` and persists the preference in `localStorage`.

The dark-mode init script in `Layout.astro` sets the attribute before first paint,
preventing any flash of the wrong theme.

To customise dark colours, edit the `[data-theme="dark"]` block in `global.css`.

---

## Deploy steps

### Static (default) — Netlify / Vercel / Cloudflare Pages

```bash
npm run build   # outputs to dist/
```

Push to a Git repo and connect it in your hosting dashboard.
Build command: `npm run build` | Output directory: `dist`

Because Astro generates individual HTML files per route, no `_redirects` file or
rewrite rule is needed.

### Cloudflare Pages with SSR (matching `../quickmeasuretool`)

1. `npm install @astrojs/cloudflare wrangler --save-dev`
2. In `astro.config.mjs`, uncomment the adapter lines.
3. Add `wrangler.toml` with your Cloudflare project name and compatibility date.
4. `npx wrangler deploy`

---

## Project structure

```
microtool-template/
├── astro.config.mjs          ← Astro config (Tailwind via Vite plugin)
├── tsconfig.json             ← Extends astro/tsconfigs/strict
├── public/
│   ├── favicon.svg           ← Replace with your icon
│   ├── robots.txt            ← Update Sitemap URL
│   ├── sitemap.xml           ← Update domain; add tool URLs
│   ├── site.webmanifest      ← Update name / icons
│   └── ads.txt               ← AdSense ads.txt line
└── src/
    ├── site.config.ts        ← ★ EDIT THIS FIRST
    ├── styles/
    │   └── global.css        ← Tailwind 4 + CSS variable tokens (light/dark)
    ├── layouts/
    │   └── Layout.astro      ← HTML shell: head meta, OG, scripts, dark-mode init
    ├── components/
    │   ├── SiteNav.astro     ← Sticky nav; reads siteConfig.navLinks; dark toggle
    │   ├── Footer.astro      ← Reads siteConfig.navLinks + siteName
    │   └── AdSlot.astro      ← Conditional AdSense <ins>; no-op if adsenseId empty
    └── pages/
        ├── index.astro       ← Home page: hero + tool grid + SEO content
        ├── example-tool.astro← Reference tool page (copy this for every new tool)
        ├── about.astro
        ├── contact.astro
        ├── privacy-policy.astro
        └── 404.astro
```

---

## Tailwind 4 notes

- Import with `@import "tailwindcss"` — no `@tailwind` directives
- No `tailwind.config.js` or `postcss.config.js` needed
- Custom design tokens go in `@theme {}` in `global.css` (generates Tailwind utilities)
- Scoped `<style>` blocks in each `.astro` file use `var(--site-*)` CSS variables
- See `.claude/skills/tailwind-4-docs/references/gotchas.md` for gotchas
