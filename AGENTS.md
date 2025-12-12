# Repository Guidelines

## Project Structure & Module Organization

- `src/app/`: Next.js App Router routes (`page.tsx`, `layout.tsx`, `robots.ts`, `sitemap.ts`)
- `src/components/`: UI components (shadcn/ui style)
- `src/content/`: typed content + MDX case studies (`projects/*.mdx`, `claims.json`)
- `src/lib/`: helpers (`cn()` in `utils.ts`, MDX loader)
- `public/`: static assets
- `docs/plans/`: implementation plans and notes
- `automation/`: reserved for future CLI tooling

## Build, Test, and Development Commands

```bash
npm install
npm run dev          # local dev (Turbopack)
npm run build        # production build
npm run start        # serve build locally
npm run lint         # ESLint (Next core-web-vitals + TS)
npm run lint:fix     # auto-fix lint issues
npm run format       # Prettier write
npm run format:check # Prettier check (CI-friendly)
```

## Coding Style & Naming Conventions

- TypeScript strict mode; prefer `@/*` imports (see `tsconfig.json`).
- Formatting is enforced by Prettier (`.prettierrc`: 2 spaces, single quotes, no semicolons, `printWidth: 100`).
- Use `cn()` from `src/lib/utils.ts` to compose Tailwind class strings.
- React components: `PascalCase.tsx`; hooks: `useThing.ts`; routes follow Next.js conventions (e.g., `src/app/projekte/[slug]/page.tsx`).

## Testing Guidelines

- No first-party test suite is configured yet (no `npm test` script / no `*.test.*` under `src/`).
- Before opening a PR, run: `npm run lint && npm run format:check && npm run build`.

## Commit & Pull Request Guidelines

- Commit messages follow Conventional Commits: `feat:`, `fix:`, `docs:` (see `git log`).
- PRs should include a short summary, screenshots for UI changes, and any config/env updates (update `.env.example` when adding env vars).

## Security & Configuration

- Copy `.env.example` → `.env.local`; never commit secrets.
- Keep “verified” copy/metrics in `src/content/profile.ts` and `src/content/claims.json`—don’t invent numbers or URLs.

## Agent Notes

- If using Codex skills, run `~/.codex/superpowers/.codex/superpowers-codex bootstrap` before starting work.
