# Image Tools — Competitor Analysis
> **Local reference only. Do not commit or publish.**
> Source: user research + manual audits of competitor sites
> Domain: snapimagetools.com
> Last updated: 2026-07-17

---

## 1. Competitive Landscape

### Tier 1 — Giants (study their UX, don't compete head-on)

#### iloveimg.com — Category king
- Homepage: tool-grid layout with clear categories (compress, resize, crop, convert, etc.)
- Every tool gets its own dedicated landing page with full upload → process → download flow
- Key study points: how they structure the "choose a tool" grid, how each tool page is self-contained, CTA copy above the upload zone
- Revenue model: freemium — free with limits, paid removes limits and ads
- **Takeaway:** Replicate the per-tool landing-page pattern. Don't replicate the freemium gate — stay 100% free, use AdSense instead.

#### tinypng.com — Single-tool focus done perfectly
- One tool (PNG/JPEG compression), dead-simple UX — drag-and-drop, nothing else
- Before/after file size shown prominently in the result (e.g. "1.2 MB → 132 KB — 89% smaller")
- Built an entire brand from one tool done extremely well
- **Takeaway:** Steal their before/after size display pattern. Our CompressTool shows the same stat.

#### squoosh.app (Google) — Technical benchmark
- Best-in-class client-side compression quality: uses WebAssembly codecs (MozJPEG, OxiPNG, WebP encoder, AVIF)
- Side-by-side before/after image preview with interactive split slider
- Canvas API alone can't match their WASM codec quality, but for "compress to 50 KB" use-cases, Canvas + quality binary-search is accurate enough
- **Takeaway:** Use as quality bar. If we ever add AVIF or better WebP support, Squoosh's source (open source) is the reference.

#### photopea.com — Proof that client-side + AdSense works at scale
- Full Photoshop-in-browser, completely free, runs on AdSense revenue
- Ad placements: one unit above the main canvas, one in the left panel, one below — all integrated so they don't overlap the tool interaction area
- **Takeaway:** Proof the model works. Study ad placement: ads sit in "dead zones" around the tool, never blocking the upload or download interaction.

---

### Tier 2 — Direct model competitors (your real benchmark)

#### image.pi7.org — Closest feature-count match (audited 2026-07-17)
- 50+ tools across compress, resize, crop, convert, effects, metadata, DPI categories
- URL pattern: one page per micro-task and per KB target (e.g. `/compress-to-5kb`, `/resize-image-to-100x100`)
- 16 individual compress-to-XKB pages covering 5 KB → 2 MB — every size is a separate SEO page
- 10+ passport/ID photo pages targeting India, US, Asian country specs
- Server-side processing — uploads images to their server, deletes after 30 min (privacy liability vs our client-side approach)
- Cluttered UI with heavy ads and 50+ nav items — design is a weakness we can exploit
- No dark mode
- **Gap we can exploit:** We are 100% client-side (no upload), have dark mode, cleaner UI, and instant results. Match their page count, outrank with better content and schema.

#### imageresizer.com
- Multi-tool site, revenue via ads
- Strong on preset-based resize pages: "resize for Facebook", "resize for Instagram", "resize for LinkedIn"
- URL pattern: `/resize-image-to-X-by-Y` — one page per common dimension
- Lacks India/govt-form presets (no SSC, no passport-size landing pages)
- Content below the tool: 3–4 paragraphs + basic FAQ, ~400–600 words total
- **Gap:** No Indian government exam presets. No target-KB compression (only quality slider).

#### compressjpeg.com / compresspng.com
- One site per format — interlinked network strategy
- Bulk upload feature (up to 20 images at once) — differentiator vs single-file tools
- Server-side processing — privacy concern vs our client-side approach
- **Gap:** No target-KB mode. No WebP support. Server upload = privacy liability we can market against.

#### imgonline.com.ua
- Ugly design, yet ranks top-5 for hundreds of image tool long-tails
- Proves: dedicated pages per micro-task beat pretty design in search rankings
- Has hundreds of specific tools (resize, add noise, add watermark, change DPI, etc.)
- Server-side (all images uploaded to their server)
- **Takeaway:** Dedicated URL per micro-task is more important than design. Our long-tail page strategy is correct.

#### simpleimageresizer.com
- Small site, survives against giants purely via long-tail landing pages
- Clean UX, client-side processing
- Thin content (100–200 words per page, no FAQ schema)
- **Gap:** No Indian government form presets. Thin content means we can outrank with richer pages.

---

### Tier 3 — Your exact long-tail battlefield (India/document use-case)

#### imresizer.com — Closest blueprint
- Ranks for "resize image to 20kb", "passport photo size", "compress image for govt form"
- Has preset pages for common Indian exam sizes
- Client-side processing (advertises privacy angle)
- Ad placement: one unit above the tool, one below the download button
- Content: ~300 words below the tool, FAQ section, basic schema
- **Takeaway:** This is the site to beat. Study every URL they rank for. Match their page count, then add richer content and better schema to outrank.

#### Key SERP queries to monitor

| Query | Intent | Priority |
|---|---|---|
| compress image to 50kb | Indian exam/portal upload limit | 🔴 High |
| compress image to 20kb | SSC exam photo limit | 🔴 High |
| resize signature for ssc | SSC CGL/CHSL specific | 🔴 High |
| resize image to passport size | Visa / govt forms | 🔴 High |
| jpg to 20kb converter | Format + size combo | 🟡 Medium |
| compress image to 100kb | General portal limit | 🟡 Medium |
| png to jpg converter online | High volume, competitive | 🟡 Medium |
| jpg to webp converter | Developer audience | 🟢 Low (low CPC) |
| resize image to 600x600 | Social / e-commerce | 🟡 Medium |

---

## 2. What Competitors Are Missing (Our Differentiators)

| Gap in competitor sites | Our response |
|---|---|
| Server-side upload (privacy concern) | "Your image never leaves your device" — Canvas API, zero upload |
| No target-KB compression (only quality slider) | Binary-search compression to exact KB target |
| No Indian govt-form presets | SSC signature, passport size, 20 KB / 50 KB landing pages |
| Forced account creation or watermarks | 100% free, no account, no watermark |
| Slow processing (server round-trip) | Instant — runs in browser |
| Poor mobile UX on drag-drop | Mobile-responsive drop zone with tap-to-browse fallback |
| Thin content, no FAQ schema | 400+ words per page + FAQPage JSON-LD + WebApplication schema |
| No dark mode (pi7, imgonline) | Dark mode built-in from day one |
| No bulk mode | Future feature — batch process multiple images |

---

## 3. Our SEO Advantages

**Topical depth on India-specific long-tails**
Most competitors are US/EU-focused. Queries like "compress image for SSC CGL", "passport photo 20kb", "signature size for NTA" are heavily searched in India and underserved. We target these with dedicated landing pages and India-specific content.

**Client-side privacy as a content angle**
"Your image never leaves your browser" is a genuinely true statement and a searchable concern. Users searching for "image compress without upload" or "offline image tool" are a real segment.

**Content depth per page beats thin competitors**
imgonline.com.ua ranks despite bad design because of page count. We compete on page count AND content depth — each page has 400–600 words, FAQ accordion, and full JSON-LD schema.

**Long-tail page volume from presets**
One component (CompressTool) with different `targetKB` props generates 5 unique ranking pages from a single build. Same pattern for resize presets. This scales: 20 tools today → 40 landing pages.

**Zero runtime cost**
100% client-side means no server, no bandwidth cost, no infra to maintain. AdSense revenue goes to profit, not server bills.

---

## 4. Build Priority & Status

### Tier 1 — Live Now

| # | Tool | URL | Status |
|---|---|---|---|
| 1 | Compress Image (quality slider) | `/compress-image` | ✅ Live |
| 2 | Compress to 20 KB | `/compress-image-to-20kb` | ✅ Live |
| 3 | Compress to 50 KB | `/compress-image-to-50kb` | ✅ Live |
| 4 | Compress to 100 KB | `/compress-image-to-100kb` | ✅ Live |
| 5 | Compress to 200 KB | `/compress-image-to-200kb` | ✅ Live |
| 6 | Resize Image (custom W×H) | `/resize-image` | ✅ Live |
| 7 | Passport Size Photo | `/resize-image-to-passport-size` | ✅ Live |
| 8 | SSC Signature Resizer | `/signature-resizer-for-ssc` | ✅ Live |
| 9 | Resize to 600×600 | `/resize-image-to-600x600` | ✅ Live |
| 10 | Resize to 200×200 | `/resize-image-to-200x200` | ✅ Live |
| 11 | JPG → WebP | `/jpg-to-webp` | ✅ Live |
| 12 | PNG → WebP | `/png-to-webp` | ✅ Live |
| 13 | WebP → JPG | `/webp-to-jpg` | ✅ Live |
| 14 | WebP → PNG | `/webp-to-png` | ✅ Live |
| 15 | JPG → PNG | `/jpg-to-png` | ✅ Live |
| 16 | PNG → JPG | `/png-to-jpg` | ✅ Live |

---

### Tier 2 — Next Sprint (quick wins — copy existing patterns)

| # | Tool | URL | Why | Status |
|---|---|---|---|---|
| 17 | Custom KB input on compress page | `/compress-image` (update) | Let users type any target size | — |
| 18 | Compress to 5 KB | `/compress-image-to-5kb` | NTA signature / very strict portals | — |
| 19 | Compress to 10 KB | `/compress-image-to-10kb` | NTA/NEET signature limit | — |
| 20 | Compress to 15 KB | `/compress-image-to-15kb` | State PSC portals | — |
| 21 | Compress to 25 KB | `/compress-image-to-25kb` | Various exam portals | — |
| 22 | Compress to 30 KB | `/compress-image-to-30kb` | State PSC portal limit | — |
| 23 | Compress to 40 KB | `/compress-image-to-40kb` | UPSC / NDA signature | — |
| 24 | Compress to 75 KB | `/compress-image-to-75kb` | College admission forms | — |
| 25 | Compress to 150 KB | `/compress-image-to-150kb` | Job portals | — |
| 26 | Compress to 300 KB | `/compress-image-to-300kb` | E-commerce listings | — |
| 27 | Compress to 400 KB | `/compress-image-to-400kb` | Job portals | — |
| 28 | Compress to 500 KB | `/compress-image-to-500kb` | College admission forms | — |
| 29 | Compress to 1 MB | `/compress-image-to-1mb` | General web upload | — |
| 30 | Compress to 2 MB | `/compress-image-to-2mb` | General web upload | — |
| 31 | Rotate & Flip Image | `/rotate-image` | Basic editing everyone expects | — |
| 32 | Resize to 100×100 | `/resize-image-to-100x100` | Profile icons, favicons | — |
| 33 | Resize to 300×300 | `/resize-image-to-300x300` | E-commerce thumbnails | — |
| 34 | Resize to 400×400 | `/resize-image-to-400x400` | WhatsApp DP | — |
| 35 | Resize to 1080×1080 | `/resize-image-to-1080x1080` | Instagram square | — |
| 36 | Resize to 1280×720 | `/resize-image-to-1280x720` | HD / YouTube thumbnail | — |
| 37 | Resize to 1920×1080 | `/resize-image-to-1920x1080` | Wallpaper / presentation | — |
| 38 | Grayscale converter | `/grayscale-image` | Canvas filter, near-zero effort | — |
| 39 | Black & White converter | `/convert-image-to-black-and-white` | Different keyword, same component | — |
| 40 | Compress PNG (dedicated) | `/compress-png` | High search volume | — |
| 41 | Compress JPG (dedicated) | `/compress-jpg` | High search volume | — |

---

### Tier 3 — Medium Effort, High Value

| # | Tool | URL | Why | Status |
|---|---|---|---|---|
| 42 | Crop Image | `/crop-image` | Top-10 image tool search globally | — |
| 43 | Crop to Circle | `/crop-image-to-circle` | Profile photos, social media | — |
| 44 | Indian Passport Photo | `/resize-image-to-35x45mm` | Most searched Indian photo spec | — |
| 45 | US Visa Photo (2×2 inch) | `/resize-image-to-2x2-inch` | High volume, low competition | — |
| 46 | PAN Card Photo Size | `/pan-card-photo-size` | 3.5cm × 2.5cm, common Indian query | — |
| 47 | UPSC Photo Size | `/upsc-photo-size` | 40×50mm, ≤50 KB | — |
| 48 | NEET Photo Size | `/neet-photo-size` | 3.5×4.5cm, 10–200 KB | — |
| 49 | SSC CGL Photo Size | `/ssc-cgl-photo-size` | 100×120 px, 4–12 KB | — |
| 50 | UPSC Signature Resizer | `/signature-resizer-for-upsc` | 3.5cm × 1.5cm, ≤40 KB | — |
| 51 | IBPS Signature Resizer | `/signature-resizer-for-ibps` | 140×60 px, ≤35 KB | — |
| 52 | SBI PO Signature Resizer | `/signature-resizer-for-sbi` | 140×60 px, ≤35 KB | — |
| 53 | NEET Signature Resizer | `/signature-resizer-for-neet` | 3.5cm × 1.5cm, 10–30 KB | — |
| 54 | NDA Signature Resizer | `/signature-resizer-for-nda` | 3.5cm × 1.5cm, ≤50 KB | — |
| 55 | Increase Image Size in KB | `/increase-image-size-in-kb` | Portals with minimum size requirement | — |
| 56 | HEIC to JPG | `/heic-to-jpg` | iPhone users, top conversion query | — |
| 57 | HEIC to PNG | `/heic-to-png` | iPhone users | — |

---

### Tier 4 — Bigger Builds (requires new component or library)

| # | Tool | URL | Notes | Status |
|---|---|---|---|---|
| 58 | Image to PDF | `/image-to-pdf` | pdf-lib client-side, multi-image | — |
| 59 | JPG to PDF under 100 KB | `/jpg-to-pdf-under-100kb` | Compress + convert in one step | — |
| 60 | JPG to PDF under 200 KB | `/jpg-to-pdf-under-200kb` | Exam portal variant | — |
| 61 | Add Watermark | `/add-watermark` | Text or logo overlay, opacity, position | — |
| 62 | Add Text to Image | `/add-text-to-image` | Same component, text-only mode | — |
| 63 | Change Image DPI | `/change-image-dpi` | Embed DPI in PNG pHYs / JPEG EXIF | — |
| 64 | Convert to 300 DPI | `/convert-image-to-300dpi` | Fixed 300 DPI page, print/exam use | — |
| 65 | Convert to 200 DPI | `/convert-image-to-200dpi` | Fixed 200 DPI page | — |
| 66 | Bulk Image Compressor | `/bulk-compress-image` | Multiple files at once, differentiator | — |

---

### Tier 5 — Nice to Have (low effort, add when time permits)

| # | Tool | URL | Notes | Status |
|---|---|---|---|---|
| 67 | Blur Image | `/blur-image` | Canvas filter blur slider | — |
| 68 | Add Border to Image | `/add-border-to-image` | Canvas border, color + width picker | — |
| 69 | Round Image Corners | `/round-image-corners` | Canvas clip with radius slider | — |
| 70 | View Image Metadata | `/view-image-metadata` | `exifr` library, show EXIF table | — |
| 71 | Remove Image Metadata | `/remove-image-metadata` | Re-draw to canvas → strip EXIF | — |
| 72 | Color Picker from Image | `/color-picker-from-image` | Canvas getImageData at click | — |
| 73 | Merge Images | `/merge-images` | Side-by-side or top-bottom, canvas | — |
| 74 | Favicon Generator | `/favicon-generator` | Resize to 16/32/48px, export ZIP | — |

---

### Skip for Now (requires AI API / paid infrastructure)

| Tool | Why skipped |
|---|---|
| Remove Background | Requires MediaPipe or Replicate API — add only if budget allows |
| AI Image Upscaler | Real-ESRGAN via Replicate — paid per call |
| Convert to AVIF | Needs WASM encoder (see Squoosh source) |

---

## 5. Step-by-Step Build Tracker

Mark each item `[x]` when done. Work through phases in order.

Legend: `[ ]` not started · `[~]` in progress · `[x]` done

---

### Phase 1 — Quick Wins (copy existing patterns, ship fast)

#### Compress Page — Custom KB Input
- [ ] Add free-input KB field to `/compress-image` alongside the quality slider
- [ ] Wire the KB input into the existing binary-search logic in `CompressTool.astro`
- [ ] Update FAQ copy on `/compress-image` to mention custom size support

#### New Compress-to-XKB Pages (#18–30)
- [ ] `/compress-image-to-5kb`
- [ ] `/compress-image-to-10kb`
- [ ] `/compress-image-to-15kb`
- [ ] `/compress-image-to-25kb`
- [ ] `/compress-image-to-30kb`
- [ ] `/compress-image-to-40kb`
- [ ] `/compress-image-to-75kb`
- [ ] `/compress-image-to-150kb`
- [ ] `/compress-image-to-300kb`
- [ ] `/compress-image-to-400kb`
- [ ] `/compress-image-to-500kb`
- [ ] `/compress-image-to-1mb`
- [ ] `/compress-image-to-2mb`
- [ ] Add all 13 pages to `public/sitemap.xml`
- [ ] Add all 13 pages to `src/site.config.ts` tools array

#### Rotate & Flip Tool (#31)
- [ ] Build `RotateTool.astro` component
- [ ] Buttons: rotate 90° left, 90° right, 180°, flip horizontal, flip vertical
- [ ] Free-angle slider (–180° to +180°)
- [ ] Canvas-only processing, download result
- [ ] Build `/rotate-image` page
- [ ] Add to sitemap + site.config.ts

#### More Pixel-Dimension Resize Pages (#32–37)
- [ ] `/resize-image-to-100x100`
- [ ] `/resize-image-to-300x300`
- [ ] `/resize-image-to-400x400`
- [ ] `/resize-image-to-1080x1080`
- [ ] `/resize-image-to-1280x720`
- [ ] `/resize-image-to-1920x1080`
- [ ] Add all 6 pages to sitemap + site.config.ts

#### Grayscale / B&W Converter (#38–39)
- [ ] Add `mode` prop to `ConvertTool.astro` (or build `FilterTool.astro`)
- [ ] Build `/grayscale-image` (canvas `filter: grayscale(1)` pre-download)
- [ ] Build `/convert-image-to-black-and-white` (same component, higher contrast desaturation)
- [ ] Add both pages to sitemap + site.config.ts

#### Format-Specific Compress Pages (#40–41)
- [ ] Build `/compress-png` (output format locked to PNG)
- [ ] Build `/compress-jpg` (output format locked to JPEG)
- [ ] Add both pages to sitemap + site.config.ts

---

### Phase 2 — Medium Effort, High Value

#### Crop Image Tool (#42–43)
- [ ] Build `CropTool.astro` component
  - [ ] Drag-handle crop overlay on canvas
  - [ ] Aspect ratio presets: Free, 1:1, 4:3, 3:4, 16:9
  - [ ] Numeric W×H pixel input for exact crop dimensions
  - [ ] Circular clip mask mode for `/crop-image-to-circle`
- [ ] Build `/crop-image` page
- [ ] Build `/crop-image-to-circle` page
- [ ] Add both pages to sitemap + site.config.ts

#### Passport & ID Photo Pages (#44–49)
- [ ] `/resize-image-to-35x45mm` — Indian passport (413×531 px at 300 DPI)
- [ ] `/resize-image-to-2x2-inch` — US visa photo (600×600 px at 300 DPI)
- [ ] `/pan-card-photo-size` — PAN card: 3.5cm × 2.5cm
- [ ] `/upsc-photo-size` — 40×50mm, ≤50 KB
- [ ] `/neet-photo-size` — 3.5×4.5cm, 10–200 KB JPEG
- [ ] `/ssc-cgl-photo-size` — 100×120 px, 4–12 KB
- [ ] Add all 6 pages to sitemap + site.config.ts

#### Exam Signature Pages (#50–54)
- [ ] `/signature-resizer-for-upsc` — 3.5cm × 1.5cm, ≤40 KB
- [ ] `/signature-resizer-for-ibps` — 140×60 px, ≤35 KB
- [ ] `/signature-resizer-for-sbi` — 140×60 px, ≤35 KB
- [ ] `/signature-resizer-for-neet` — 3.5cm × 1.5cm, 10–30 KB
- [ ] `/signature-resizer-for-nda` — 3.5cm × 1.5cm, ≤50 KB
- [ ] Add all 5 pages to sitemap + site.config.ts

#### Increase Image Size in KB (#55)
- [ ] Build `/increase-image-size-in-kb` page
- [ ] Reuse binary-search logic in reverse (start high quality, scale up canvas until target KB met)
- [ ] Input: target KB; output: file ≥ target size
- [ ] Add to sitemap + site.config.ts

#### HEIC to JPG / PNG (#56–57)
- [ ] Install `heic2any` npm package (client-side HEIC decoder)
- [ ] Update `ConvertTool` `accept` attribute to include `image/heic,image/heif`
- [ ] Build `/heic-to-jpg` page
- [ ] Build `/heic-to-png` page
- [ ] Add both pages to sitemap + site.config.ts

---

### Phase 3 — Bigger Builds

#### Image to PDF (#58–60)
- [ ] Install `pdf-lib` npm package (client-side PDF generation)
- [ ] Build `ImageToPdfTool.astro` component
  - [ ] Multi-file upload (up to 10 images)
  - [ ] Preview thumbnails with reorder
  - [ ] Page size options: A4, Letter, fit-to-image
  - [ ] Download as single PDF
- [ ] Build `/image-to-pdf` page
- [ ] Build `/jpg-to-pdf-under-100kb` (compress each image first, then convert)
- [ ] Build `/jpg-to-pdf-under-200kb`
- [ ] Add all 3 pages to sitemap + site.config.ts

#### Watermark & Text Overlay (#61–62)
- [ ] Build `WatermarkTool.astro` component
  - [ ] Text watermark: font, size, color, opacity, 9-point position grid
  - [ ] Logo watermark: upload PNG, set opacity, position, scale
  - [ ] Live canvas preview before download
- [ ] Build `/add-watermark` page
- [ ] Build `/add-text-to-image` page (text-only mode of same component)
- [ ] Add both pages to sitemap + site.config.ts

#### DPI Converter (#63–65)
- [ ] Research: embed DPI into PNG `pHYs` chunk (no library needed)
- [ ] Research: embed DPI into JPEG `JFIF`/`EXIF` header
- [ ] Build `DpiTool.astro` component — select DPI (72, 96, 150, 200, 300, 600) or free input
- [ ] Build `/change-image-dpi` generic page
- [ ] Build `/convert-image-to-300dpi` fixed page
- [ ] Build `/convert-image-to-200dpi` fixed page
- [ ] Add all 3 pages to sitemap + site.config.ts

#### Bulk Image Compressor (#66)
- [ ] Extend `CompressTool.astro` to accept multiple files
- [ ] Show per-file progress and result stats in a list
- [ ] Download all as ZIP using `JSZip`
- [ ] Build `/bulk-compress-image` page
- [ ] Add to sitemap + site.config.ts

---

### Phase 4 — Nice to Have

#### Quick Canvas-Filter Tools (#67–69)
- [ ] `/blur-image` — slider controls `filter: blur(Xpx)` on canvas pre-download
- [ ] `/add-border-to-image` — color picker + width slider, canvas border
- [ ] `/round-image-corners` — border-radius slider, canvas clip

#### Metadata Tools (#70–71)
- [ ] Install `exifr` npm package
- [ ] `/view-image-metadata` — display EXIF table (camera model, GPS, date, dimensions)
- [ ] `/remove-image-metadata` — re-draw to canvas on download (strips all EXIF)

#### Utility Tools (#72–74)
- [ ] `/color-picker-from-image` — click pixel on canvas, show HEX / RGB / HSL
- [ ] `/merge-images` — upload 2 images, pick layout (side-by-side / top-bottom), download
- [ ] `/favicon-generator` — resize to 16/32/48px, export ZIP of PNGs + .ico

---

### Cross-Cutting (apply to every new page)

- [ ] JSON-LD: WebApplication + FAQPage structured data on every page
- [ ] Minimum 4 FAQs with substantive answers (not placeholder text)
- [ ] 400–600 words of content below the tool (h2 + h3 + paragraphs + steps)
- [ ] Two `<AdSlot>` placements (between tool & content, between content & FAQ)
- [ ] Add URL to `public/sitemap.xml` with correct `<lastmod>` date
- [ ] Add card to `src/site.config.ts` tools array
- [ ] "Related tools" section at bottom of every tool page (3–4 internal links)
- [ ] Dark mode tested
- [ ] Mobile tested at 375px (drop zone tap, result stats visible, download button accessible)
- [ ] `canonical` URL set correctly (no trailing slash issues)
- [ ] `keywords` meta set with 3–5 relevant phrases
- [ ] Page title format: `[Tool Name] Online Free | SnapImageTools`
- [ ] Privacy note visible on tool widget
- [ ] Verify file-input double-dialog bug is not re-introduced on any new tool component

---

## 6. Ad Placement Strategy (from photopea + imresizer study)

```
[Nav]
[H1 + description]            ← NO ad above fold — let user reach tool fast
[Tool widget]                 ← INTERACTION ZONE — never place ads here
[Ad unit #1]                  ← After tool, before content — user is idle while result loads
[Content section]
[Ad unit #2]                  ← Between content and FAQ
[FAQ section]
[Footer]
```

- **Above fold**: no ad — don't slow first impression or trigger bounce
- **Ad #1 (best performer)**: immediately below the tool, before content — user just clicked "compress" and is waiting 1–2 seconds. Peak dwell, peak attention.
- **Ad #2**: between content and FAQ — natural scroll break
- **Never**: inside the tool widget, above the download button, or overlapping mobile upload zone

---

## 7. Research Task Checklist (do before Tier 3 build)

For each competitor, fill in the table:

| Site | Preset URLs found | Words below tool | FAQ schema? | Ad positions | Missing/annoying |
|---|---|---|---|---|---|
| imresizer.com | — | — | — | — | — |
| imageresizer.com | — | — | — | — | — |
| simpleimageresizer.com | — | — | — | — | — |
| image.pi7.org | 50+ tools, 16 KB-target pages | ~200 words | No | Heavy ads everywhere | Server upload, no dark mode |
| compressjpeg.com | — | — | — | — | — |

**SERP audit — check top 5 for each query:**
- "compress image to 50kb" → top 5: ?, ?, ?, ?, ?
- "resize signature for ssc" → top 5:
- "resize image to passport size" → top 5:
- "jpg to 20kb converter" → top 5:
- "compress image to 20kb for ssc" → top 5:

---

## 8. Notes on Ranking for Indian Exam Queries

**Why these long-tails are winnable:**
- SSC/UPSC/IBPS queries have significant search volume but most top results are generic image tools that don't mention SSC at all
- Content mentioning the specific exam (SSC CGL, CHSL, CPO) and the exact requirement (dimensions, file size, JPEG format) outranks generic tools even with fewer backlinks
- Regional language queries ("image compress kare SSC ke liye") are largely uncontested

**Content rules for India-specific pages:**
1. State the exact specification in the H1 and first paragraph (e.g. 276×118 px, max 12 KB, JPEG format)
2. Name the exams that require this spec
3. Mention what happens if the spec is wrong (form rejection, re-upload prompt)
4. Link compress → resize in a natural flow (resize first, then compress to size)
