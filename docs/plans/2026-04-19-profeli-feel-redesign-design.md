# Profeli feel redesign — website

Date: 2026-04-19

## Goal

Adapt the marketing website to share visual identity with the Profeli app: warm paper palette, Fraunces serif for headings, Manrope sans for body, amber as primary CTA color.

## Palette (mirrored from Profeli)

- `paper #FAF6EF`, `paper2 #F3ECDF`
- `ink #1F2A2E`, `ink2 #4A5559`, `ink3 #828A8E`
- `line #E7DFD0`, `line2 #D8CEB9`
- `primary #2F6E6A` (teal, used sparingly for secondary highlights)
- `accent #C97B3B` (amber — **primary CTA color**)
- Feature pills: `sage`, `amber`, `terra`, `plum` (bg/ink/dot trio)

## Fonts

- Sans: Manrope (`--font-sans`, weights 400/500/600/700)
- Serif: Fraunces (`--font-serif`, weights 400/500/600, italic) — for `h1`/`h2`

## Changes

1. `tailwind.config.ts` — add colors and font families
2. `src/app/globals.css` — body bg → paper, text → ink
3. `src/app/layout.tsx` — swap Inter for Manrope + Fraunces
4. `src/components/sections/{navbar,hero,feature-section,cta-section,footer}.tsx` — repaint (blue → amber, gray → ink, rounded gradients → solid paper/paper2)
5. `src/app/page.tsx` — replace gradient transitions with paper/paper2 alternation; swap per-section badge colors to pill trios (sage/amber/terra/plum)
6. `src/components/interactive/*.tsx` — align card surfaces, borders, and chip colors with the new palette

## Out of scope

- i18n copy
- demo interaction logic
- new sections
