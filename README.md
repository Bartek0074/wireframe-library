# wireframe-libary

A reusable template for building website wireframes and interactive prototypes for clients.

## Tech Stack

- **[Next.js](https://nextjs.org/)** (App Router) — React framework
- **[TypeScript](https://www.typescriptlang.org/)** — Type safety
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Utility-first styling
- **[Storybook](https://storybook.js.org/)** — Component development & documentation
- **[ESLint](https://eslint.org/)** + **[Prettier](https://prettier.io/)** — Code quality & formatting

## Getting Started

```bash
npm install
npm run dev        # Start Next.js dev server (http://localhost:3000)
npm run storybook  # Start Storybook (http://localhost:6006)
```

## Project Structure

```
src/
├── app/           # Next.js App Router pages and layouts
├── components/    # Reusable UI components
├── sections/      # Page sections (hero, features, etc.)
├── layouts/       # Page layout wrappers
├── stories/       # Storybook stories
├── lib/           # Utility functions and helpers
└── types/         # Shared TypeScript types
```

## Path Aliases

Import from `@/` to reference the `src/` directory:

```ts
import { Placeholder } from "@/components/Placeholder";
```

## Scripts

| Command                   | Description                      |
| ------------------------- | -------------------------------- |
| `npm run dev`             | Start Next.js development server |
| `npm run build`           | Build for production             |
| `npm run start`           | Start production server          |
| `npm run storybook`       | Start Storybook dev server       |
| `npm run build-storybook` | Build Storybook static site      |
| `npm run lint`            | Run ESLint                       |
| `npm run format`          | Format all files with Prettier   |
| `npm run format:check`    | Check formatting without writing |
