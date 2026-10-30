# pID Studio — M1 Foundation

M1 establishes the Next.js application shell, navigation, shared card types, validation schema, and a small Zustand store. It deliberately does **not** add a backend, database, authentication, or persistence yet.

## Requirements

- Node.js 20.9+
- npm 10+ (or a compatible package manager)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## M1 routes

- `/` — app dashboard shell
- `/studio` — Card Studio placeholder for M2
- `/cards` — My Cards placeholder for M3
- `/view` — public read-only viewer placeholder for M4

## Project structure

```text
src/
  app/
    cards/page.tsx
    studio/page.tsx
    view/page.tsx
    globals.css
    layout.tsx
    page.tsx
  components/
    app-shell.tsx
    page-heading.tsx
    stat-card.tsx
  data/
    navigation.ts
  lib/
    card-schema.ts
  stores/
    card-store.ts
  types/
    card.ts
```

## Foundation decisions

- **Next.js App Router + TypeScript** for the application shell and routes.
- **Tailwind CSS v4** for styling.
- **Zustand** for lightweight client state. The store is intentionally in-memory in M1; IndexedDB is introduced with the My Cards milestone.
- **Zod** for validating card data at boundaries.
- Card content and design are separate types so the editor UI does not become the data model.
- No server actions, API routes, database, auth, or cloud dependencies in this milestone.

## Next milestone

M2 replaces the Studio placeholder with the working card editor and live preview, reusing the shared card model in `src/types/card.ts`.
