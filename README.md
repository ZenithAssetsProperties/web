# Zenith Asset Group — Web

Production-grade frontend for Zenith Asset Group. Next.js (App Router) + TypeScript +
Tailwind CSS v4. Frontend only — no backend/API is part of this repo.

This is a shared, multi-developer codebase — see [CONTRIBUTING.md](./CONTRIBUTING.md) for how to
add a new section or page and what the git hooks enforce before anything reaches `main`.

## Brand

Every color and typeface in this codebase is sourced from the official brand guideline, not
guessed — see `src/app/globals.css` for how these map to design tokens:

| Token                     | Hex       | Use                                                        |
| -------------------------- | --------- | ------------------------------------------------------------ |
| Seaworld (`brand-600`)    | `#14505B` | Primary brand teal — buttons, links, focus rings            |
| Laser Red (`accent-600`)  | `#F03030` | Action/urgency accent only — errors, destructive actions     |
| Pale Sage (`sage` / `--background`) | `#E0E2DA` | Supporting color — light-mode page background      |

Typography: **League Spartan** for all headings (`font-heading`), **Inter** for body text
(`font-sans`) — both loaded in `src/lib/fonts.ts`.

Logo assets were extracted directly from the brand guideline PDF's vector artwork (not
hand-recreated) and live in `public/brand/`:

- `public/brand/icon.png` — the mark alone (used in the header/footer)
- `public/brand/lockup-horizontal.png` — icon + wordmark, for contexts needing a single combined
  image (the live header uses the icon image next to a real text element instead, so the wordmark
  stays theme-aware in dark mode)

`src/app/icon.png` / `src/app/apple-icon.png` are Next.js's file-convention favicon/apple-touch-icon
— no manual `<link>` tags needed.

Tone, per the guideline: simple, plain, direct — no filler or generic real-estate clichés, concrete
numbers and steps over vague promises.

## Stack

- [Next.js 15](https://nextjs.org) (App Router, Turbopack dev server)
- [TypeScript](https://www.typescriptlang.org) in strict mode
- [Tailwind CSS v4](https://tailwindcss.com) with a semantic design-token layer (light/dark)
- [class-variance-authority](https://cva.style) for variant-driven components + Radix `Slot` for `asChild`
- [next-themes](https://github.com/pacocoursey/next-themes) for light/dark/system theming
- [lucide-react](https://lucide.dev) icons
- League Spartan (headings) + Inter (body) via `next/font/google` — see [Brand](#brand)
- ESLint 9 (flat config) + Prettier (with `prettier-plugin-tailwindcss`)
- Dependency-free git hooks (tracked `.githooks/`, no Husky) — `pre-commit` lint/format, `pre-push` full build gate
- GitHub Actions CI (lint, typecheck, format check, build)

## Component system

`src/components/ui/` is the primitive layer everything else — including every future section — is
built from:

| Component                               | Purpose                                                                                                                            |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `Heading`, `Text`, `Code`, `Blockquote` | Typography scale (`display`/`h1`-`h4` in League Spartan bold, `lead`/`base`/`sm`/`muted` body text) — `typography.tsx`            |
| `Container`, `Section`, `Stack`, `Grid` | Layout primitives with variant props (size, spacing, gap, direction, cols)                                                        |
| `Button`                                | `primary` / `secondary` / `ghost` / `destructive` / `link` variants, `sm`/`md`/`lg`/`icon` sizes, `asChild` to render as a `Link` |
| `Card`, `Badge`, `Separator`, `Skeleton` | Supporting content, status, and loading primitives (`Badge` supports a pulsing `dot`)                                            |
| `Alert`, `EmptyState`                   | Inline and full-block error/warning/success/info states (destructive uses the brand's Laser Red)                                 |

Page/landing content is composed from `src/components/sections/` — one file per section (see
`hero.tsx` for the current homepage). This is the pattern other developers extend; details in
[CONTRIBUTING.md](./CONTRIBUTING.md).

Error handling is layered:

- `src/components/error-boundary.tsx` — a reusable class-based `ErrorBoundary` for isolating one risky subtree inside an otherwise-healthy page.
- `src/app/error.tsx` — route-segment error boundary (Next.js convention), built on `EmptyState`.
- `src/app/global-error.tsx` — catches errors in the root layout itself; renders its own minimal `<html>/<body>` since it replaces the layout entirely.
- `src/app/not-found.tsx` / `src/app/loading.tsx` — 404 and route-level loading skeleton.

All color, spacing-radius, and font tokens are defined once in `src/app/globals.css` via Tailwind v4's `@theme`, backed by CSS variables that flip under `.dark` (toggled by the header's theme switch) — no component hardcodes a raw color.

## Getting started

Requires Node.js 20.9+ and [pnpm](https://pnpm.io).

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

The app runs at http://localhost:3000.

## Scripts

| Script                         | Description                                               |
| ------------------------------- | ----------------------------------------------------------- |
| `pnpm dev`                     | Start the dev server (Turbopack)                            |
| `pnpm build`                   | Production build                                             |
| `pnpm start`                   | Serve the production build                                   |
| `pnpm lint` / `lint:fix`       | Run ESLint                                                    |
| `pnpm typecheck`               | Run `tsc --noEmit`                                            |
| `pnpm format` / `format:check` | Run/check Prettier                                            |
| `pnpm verify`                  | Full gate: lint + typecheck + format check + build (same as `pre-push`/CI) |
| `pnpm analyze`                 | Production build with bundle analyzer enabled                |

## Project structure

```
src/
  app/                 App Router routes, layout, error/loading states, metadata, favicon files
  components/
    layout/            Header, footer
    theme/             Theme provider + light/dark toggle
    sections/           Page-section building blocks (Hero, ...) — one file per section
    ui/                 Design-system primitives (Button, Typography, Layout, Card, Alert...)
    error-boundary.tsx  Reusable subtree-level error boundary
  lib/                 Site config, fonts, cn() utility
public/
  brand/               Logo assets extracted from the official brand guideline PDF
```

## Conventions

- Path alias `@/*` maps to `src/*`.
- Global site metadata (name, nav, URL) lives in `src/lib/site-config.ts`.
- All design tokens (color, radius, font) live in `src/app/globals.css` and are sourced from the
  brand guideline (see [Brand](#brand)) — components consume semantic classes (`bg-background`,
  `text-muted-foreground`, `border-border`, `bg-brand-600`, `bg-accent-600`) rather than raw hex
  values or Tailwind's generic palettes, so theming — and staying on-brand — is a one-file change.
- New UI should extend an existing primitive (`Button`, `Heading`/`Text`, `Stack`/`Grid`/`Section`) before reaching for raw Tailwind classes.
- New homepage/landing content is a new file in `src/components/sections/`, composed into a page — see [CONTRIBUTING.md](./CONTRIBUTING.md).
- `pnpm build` fails on type errors and lint errors by design — see `next.config.ts`.
- Git hooks live in `.githooks/` (wired up via `pnpm install`'s `prepare` script, no extra package): `pre-commit` lints/formats staged files, `pre-push` runs the full `pnpm verify` gate — nothing that fails to build reaches the remote.
