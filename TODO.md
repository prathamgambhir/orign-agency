# ORIGN “do everything” — Implementation Checklist

## Completed
- [x] Repo read: `src/app/page.tsx`, `src/app/layout.tsx`, `src/components/service-page.tsx`, `src/app/contact/page.tsx`, `src/components/contact-form.tsx`, `src/components/site-nav.tsx`, `src/components/media-card.tsx`, `public/sitemap.xml`, `public/robots.txt`, `src/lib/agency-data.ts`, `src/actions/mail.ts`.

## In Progress
### A) Homepage copy + ORIGN spelling
- [x] Fix “Orign” → “ORIGN” in `src/app/page.tsx`.
- [x] Rewrite hero subcopy to be more minimalist/execution-first and align with ORIGN tone.

### B) Global SEO / metadata alignment
- [x] Fix OpenGraph `siteName` in `src/app/layout.tsx` to `ORIGN`.
- [x] Tighten `openGraph.description` + `twitter.description`.
- [ ] Reduce `keywords` list noise while keeping high-intent terms.

### C) Contact page copy + metadata
- [ ] Shorten and sharpen `src/app/contact/page.tsx` copy.
- [ ] Ensure ORIGN capitalization consistency.

### D) Service pages SEO metadata
- [ ] Update each service route page (`src/app/webdev/page.tsx`, etc.) with `metadata` title/description.

### E) Robots/sitemap cleanup
- [ ] Remove duplicate sitemap lines in `public/robots.txt`.
- [ ] Update `lastmod` values in `public/sitemap.xml` to today.

### F) Email copy micro-polish
- [x] Update `src/actions/mail.ts` subject/body footer for ORIGN capitalization + tone.


## Followup
- [ ] Run `pnpm lint`.
- [ ] Run `pnpm build`.
- [ ] Sanity-check rendered pages for ORIGN capitalization and headings.

