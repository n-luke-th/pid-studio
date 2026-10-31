# pID Studio

A customizable digital identity card creation platform where anyone can design, generate, manage, export, and share digital ID cards using reusable templates and self-contained card data.

## Development roadmap

Five short development milestones as follows:

| Milestone             | Deliverable                                    |
| --------------------- | ---------------------------------------------- |
| M1 — Foundation       | Next.js setup, layout, navigation, data schema |
| M2 — Card Studio      | Rebuild existing editor and card preview       |
| M3 — Card Management  | Presets, IndexedDB, My Cards                   |
| M4 — Sharing          | JSON serialization, QR, public viewer          |
| M5 — Polish & Release | Responsive design, backup, testing, deployment |

We should finish and test each milestone before expanding into the next.

No speculative feature development.

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

# pID Studio — M2 Card Studio

M2 builds on the M1 foundation with a working card editor, live preview, theme controls, avatar upload, custom fields, and PNG export.

## Requirements

- Node.js 20.9+
- npm 10+ (or a compatible package manager)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Routes

- `/` — overview
- `/studio` — working Card Studio
- `/cards` — My Cards placeholder (local library arrives in M3)
- `/view` — public read-only viewer placeholder (QR sharing arrives in M4)

## M2 features

- Identity fields: name, organization, role, badge number, expiry, emergency contact
- Optional avatar upload (stored as a data URL in the current in-memory card state)
- Add/remove custom fields
- Four card visual themes: Mint, Lavender, Midnight, and Peach
- Live front/back card preview and flip interaction
- PNG export via `html-to-image`
- App appearance: System (default), Light, Dark; manual preference is stored in localStorage
- Language selector UI: English selected; other options marked as coming soon
- Noto Serif Thai and Noto Serif SC as the primary font stack

## Notes

- App theme and card design theme are separate settings.
- Card state is in-memory in M2. Saving cards across reloads is deliberately scheduled for M3 with IndexedDB.
- Google Fonts are loaded through CSS. If network access to Google Fonts is unavailable, the declared local/system fallback stack is used.
- QR sharing and the public viewer are not implemented in M2; they remain M4.

## Next milestone

M3 adds local card library features: IndexedDB storage, save, edit, duplicate, delete, and preset application.
