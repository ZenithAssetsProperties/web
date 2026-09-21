# Zenith Assets Properties — Web

Production-grade frontend for Zenith Assets Properties. Next.js (App Router) + TypeScript +
Tailwind CSS v4. Frontend only — no backend/API is part of this repo.

## Stack

- [Next.js 15](https://nextjs.org) (App Router, Turbopack dev server)
- [TypeScript](https://www.typescriptlang.org) in strict mode
- [Tailwind CSS v4](https://tailwindcss.com) with a semantic design-token layer (light/dark)
- [class-variance-authority](https://cva.style) for variant-driven components + Radix `Slot` for `asChild`
- [next-themes](https://github.com/pacocoursey/next-themes) for light/dark/system theming
- [lucide-react](https://lucide.dev) icons
- ESLint 9 (flat config) + Prettier (with `prettier-plugin-tailwindcss`)
- Husky + lint-staged pre-commit checks
- GitHub Actions CI (lint, typecheck, format check, build)

## Component system

`src/components/ui/` is the primitive layer everything else is built from:

| Component                               | Purpose                                                                                                                           |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `Heading`, `Text`, `Code`, `Blockquote` | Typography scale (`display`/`h1`-`h4`, `lead`/`base`/`sm`/`muted`) — `typography.tsx`                                             |
| `Container`, `Section`, `Stack`, `Grid` | Layout primitives with variant props (size, spacing, gap, direction, cols)                                                        |
| `Button`                                | `primary` / `secondary` / `ghost` / `destructive` / `link` variants, `sm`/`md`/`lg`/`icon` sizes, `asChild` to render as a `Link` |
| `Card`, `Badge`, `Separator`            | Supporting content primitives                                                                                                     |
| `Alert`, `EmptyState`                   | Inline and full-block error/warning/success/info states                                                                           |

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

| Script                         | Description                                   |
| ------------------------------ | --------------------------------------------- |
| `pnpm dev`                     | Start the dev server (Turbopack)              |
| `pnpm build`                   | Production build                              |
| `pnpm start`                   | Serve the production build                    |
| `pnpm lint` / `lint:fix`       | Run ESLint                                    |
| `pnpm typecheck`               | Run `tsc --noEmit`                            |
| `pnpm format` / `format:check` | Run/check Prettier                            |
| `pnpm analyze`                 | Production build with bundle analyzer enabled |

## Project structure

```
src/
  app/                 App Router routes, layout, error/loading states, metadata
  components/
    layout/            Header, footer
    theme/             Theme provider + light/dark toggle
    ui/                 Design-system primitives (Button, Typography, Layout, Card, Alert...)
    error-boundary.tsx  Reusable subtree-level error boundary
  lib/                 Site config, cn() utility
```

## Conventions

- Path alias `@/*` maps to `src/*`.
- Global site metadata (name, nav, URL) lives in `src/lib/site-config.ts`.
- All design tokens (color, radius, font) live in `src/app/globals.css` — components consume semantic classes (`bg-background`, `text-muted-foreground`, `border-border`) rather than raw palette values, so theming is a one-file change.
- New UI should extend an existing primitive (`Button`, `Heading`/`Text`, `Stack`/`Grid`/`Section`) before reaching for raw Tailwind classes.
- `pnpm build` fails on type errors and lint errors by design — see `next.config.ts`.
- Pre-commit hooks (Husky) run ESLint + Prettier on staged files automatically.
