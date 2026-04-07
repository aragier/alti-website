# ApProf Owl Logo Design Spec

## Summary

Design and implement a flat owl logo for the ApProf app (ganeshaTeach project). The logo follows the "Coruja Contorno Azul" approach: a light blue background with a white owl body drawn in blue outlines, amber beak, and small feet. It uses the app's existing brand colors.

## Target Project

- **App project**: `C:\Projects\testes\ganeshaTeach`
- **Website project**: `C:\Projects\testes\alti-website` (for promotional use)

## Design Decision

**Chosen approach**: Option D — "Azul claro + contorno"

- Light blue (#dbeafe) rounded rectangle background
- White owl body with blue (#2563eb) outlines
- Rounded square eyes with blue fill and white pupils
- Amber (#f59e0b) triangular beak with blue outline
- Pointed ear tufts extending above the background
- Small three-pronged feet at the bottom
- Subtle wing curve marks on the sides

**Personality**: Minimalista but divertido (minimalist with a fun touch). The feet and expressive eyes add character without clutter.

## Color Palette

All colors map directly to existing app brand variables:

| Element | Hex | App Variable | Tailwind |
|---------|-----|-------------|----------|
| Background | #dbeafe | --brand-light | blue-100 |
| Outlines/Eyes | #2563eb | --brand | blue-600 |
| Hover/Dark variant | #1d4ed8 | --brand-dark | blue-700 |
| Owl body | #ffffff | — | white |
| Beak | #f59e0b | — | amber-500 |
| Pupils (dark) | #0f172a | — | slate-900 |

## Asset Deliverables

### 1. SVG Logo Component

A reusable React SVG component (`OwlLogo`) that accepts `width`, `height`, and optional `className` props. This is the single source of truth for the logo.

### 2. PWA Icons

| File | Size | Notes |
|------|------|-------|
| `public/icons/icon-512.png` | 512×512 | Full logo on blue-100 background, fills square |
| `public/icons/icon-192.png` | 192×192 | Same, scaled down. Stroke weights increased for clarity |

Current state: Both files are 1×1 pixel placeholders (70 bytes each).

### 3. Favicon

| File | Size | Notes |
|------|------|-------|
| `src/app/favicon.ico` | 32×32 | Simplified: eyes filled solid for legibility at small size |

### 4. Top Bar Integration

**File**: `src/components/layout/top-bar.tsx`

Replace the current `BookOpen` lucide-react icon (line ~45, `bg-blue-600` badge) with the `OwlLogo` component inside a `bg-brand-light` rounded container.

## SVG Structure

```svg
<svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
  <!-- Background rounded rect -->
  <rect x="18" y="16" width="104" height="114" rx="26" fill="#dbeafe"/>
  <!-- Ear tufts -->
  <path d="M38,18 L46,-2 L56,18" fill="#dbeafe"/>
  <path d="M84,18 L94,-2 L102,18" fill="#dbeafe"/>
  <!-- White body -->
  <rect x="32" y="32" width="76" height="76" rx="18" fill="white" stroke="#2563eb" stroke-width="2.5"/>
  <!-- Left eye -->
  <rect x="40" y="42" rx="8" width="24" height="24" fill="white" stroke="#2563eb" stroke-width="2.5"/>
  <circle cx="52" cy="54" r="6" fill="#2563eb"/>
  <circle cx="54" cy="52" r="2" fill="white"/>
  <!-- Right eye -->
  <rect x="76" y="42" rx="8" width="24" height="24" fill="white" stroke="#2563eb" stroke-width="2.5"/>
  <circle cx="88" cy="54" r="6" fill="#2563eb"/>
  <circle cx="90" cy="52" r="2" fill="white"/>
  <!-- Beak -->
  <path d="M70,70 L65,78 L75,78 Z" fill="#f59e0b" stroke="#2563eb" stroke-width="1"/>
  <!-- Wing hints -->
  <path d="M38,72 Q44,80 38,88" fill="none" stroke="#2563eb" stroke-width="1.5" opacity="0.3" stroke-linecap="round"/>
  <path d="M102,72 Q96,80 102,88" fill="none" stroke="#2563eb" stroke-width="1.5" opacity="0.3" stroke-linecap="round"/>
  <!-- Feet -->
  <path d="M52,108 L46,118 M52,108 L52,118 M52,108 L58,118" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M88,108 L82,118 M88,108 L88,118 M88,108 L94,118" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/>
</svg>
```

## Size Adaptations

The logo needs to adapt across sizes:

- **Large (splash, promotional)**: Full detail — ear tufts, wing marks, feet, pupil highlights
- **Medium (top bar, 32px)**: Drop wing marks and pupil highlights. Keep ears, eyes, beak, feet
- **Small (favicon, 16px)**: Fill eyes solid (no outline), drop feet, ears, and wing marks. Increase stroke weights

## Splash Screen Variant

For the PWA splash screen, use an inverted variant:
- Background: gradient `#2563eb` → `#3b82f6`
- Owl body: white
- Eyes: blue (#2563eb) fill
- Beak: amber (#f59e0b)
- Feet: white with 0.8 opacity
- "ApProf" text below in white, weight 800

## Files to Create/Modify

### ganeshaTeach project (`C:\Projects\testes\ganeshaTeach`)

| Action | File | Description |
|--------|------|-------------|
| Create | `src/components/ui/owl-logo.tsx` | Reusable React SVG component |
| Create | `public/logo.svg` | Static SVG for external use |
| Replace | `public/icons/icon-512.png` | PWA icon 512×512 |
| Replace | `public/icons/icon-192.png` | PWA icon 192×192 |
| Replace | `src/app/favicon.ico` | Browser favicon |
| Modify | `src/components/layout/top-bar.tsx` | Replace BookOpen with OwlLogo |

### alti-website project (`C:\Projects\testes\alti-website`)

| Action | File | Description |
|--------|------|-------------|
| Create | `src/components/ui/owl-logo.tsx` | Same component for promotional use |
| Modify | `src/components/sections/hero.tsx` | Add owl logo to hero section |
| Modify | `src/components/sections/navbar.tsx` | Replace 📚 emoji with owl logo |

## Out of Scope

- Dark mode variant of the logo (can be added later)
- Animated logo (loading states, transitions)
- Print-ready vector files (AI, EPS)
- Brand guidelines document
