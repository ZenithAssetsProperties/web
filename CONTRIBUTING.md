# Contributing

This is a shared frontend — the conventions below exist so several people can build different
sections of the site at the same time without stepping on each other or on the design system.

## Setup

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Git hooks are wired up automatically the first time you `pnpm install` — the `prepare` script runs
`git config core.hooksPath .githooks`, pointing git at the tracked hook scripts in
[`.githooks/`](./.githooks). No extra tooling (no Husky, no lint-staged) — just plain shell scripts
and the linters already in `devDependencies`, so there's nothing that can fail to install. If hooks
ever seem to not be firing, run `pnpm run prepare` once to re-point git at them.

## Adding a new section to a page

Every homepage/landing section lives in its own file under `src/components/sections/`, and a
page file just composes them:

```
src/components/sections/hero.tsx        // done — the "in development" hero
src/components/sections/listings.tsx    // example of what to add next
src/components/sections/about.tsx
```

```tsx
// src/app/page.tsx
import { Hero } from "@/components/sections/hero";
import { Listings } from "@/components/sections/listings";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Listings />
    </>
  );
}
```

Rules for a new section:

1. Build it from the primitives in `src/components/ui/` (`Section`, `Container`, `Stack`, `Grid`,
   `Heading`, `Text`, `Card`, `Button`, …) — don't reach for a raw `<div className="...">` if a
   primitive already does the job. If the primitive is missing a variant you need, extend the
   primitive itself rather than overriding it with one-off classes.
2. Use semantic color classes only (`bg-background`, `text-muted-foreground`, `border-border`,
   `bg-brand-600` for the primary teal, `bg-accent-600` for the red action/urgency accent), never a
   raw hex value or an arbitrary `dark:` override. These map to the official brand guideline (see
   the README's Brand section) — don't introduce a new ad hoc color, even a close one.
3. Server Component by default. Only add `"use client"` when the section actually needs
   interactivity, state, or an effect — `hero.tsx` doesn't need it even though it's animated,
   because its entrance animation is pure CSS (`animate-fade-up` in `globals.css`).
4. One section = one file = one PR-sized unit of work. This is what lets multiple people build
   different parts of the site in parallel.

Adding a new route (e.g. `/listings`) follows normal Next.js App Router conventions: create
`src/app/listings/page.tsx`.

## Git hooks

Hooks live in [`.githooks/`](./.githooks), are tracked in the repo, and run automatically — no
package to install, nothing that can fail during `pnpm install`:

| Hook         | Runs                                                                    | Why                                                               |
| ------------ | ----------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `pre-commit` | ESLint + Prettier on staged files only (via `git diff --cached`)        | Fast — keeps every commit clean without slowing you down.         |
| `pre-push`   | `pnpm verify` (lint + typecheck + format check + full production build) | The full gate — nothing that fails to build can reach the remote. |

If `pre-push` fails, fix the reported error — don't bypass it with `--no-verify`. CI runs the same
checks again on the PR regardless, so skipping the hook only delays the failure.

## Scripts

| Script          | Description                                            |
| --------------- | ------------------------------------------------------ |
| `pnpm dev`      | Start the dev server                                   |
| `pnpm verify`   | Run the full local gate (same checks as `pre-push`/CI) |
| `pnpm lint:fix` | Auto-fix lint issues                                   |
| `pnpm format`   | Auto-format with Prettier                              |
