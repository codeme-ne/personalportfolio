# Portfolio Website - Lukas Zangerl

## Project Overview

Personal portfolio website for Lukas Zangerl targeting coaches, trainers, and self-employed professionals in DACH region. German-only, clean & minimal design.

**Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS v4, shadcn/ui

## Quick Start

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Production build
npm run lint     # ESLint
npm run format   # Prettier
```

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
├── content/          # Static content (profile, projects, claims)
└── lib/              # Utilities (mdx loader, claims)
automation/           # Job Radar CLI (Phase 7)
docs/plans/           # Implementation plans
```

## Current Status

**Phase:** 3 of 8 (Homepage Sections - in progress)
**Plan:** `docs/plans/2025-12-12-portfolio-mvp-plan.md`

**Completed:**
- Phase 1: Project Setup (Next.js, Tailwind, shadcn/ui, ESLint/Prettier)
- Phase 2: Content Layer (profile.ts, projects.ts, claims.json, MDX setup)
- Phase 3.1-3.3: Hero, ProofStrip, Projects sections

**Next:** Phase 3.4 - Services Section

## Design System

Located in `src/app/globals.css`:
- **Colors:** HSL-based gray scale (50-900) + blue accent
- **Typography:** Inter font, utility classes (text-hero, text-section, text-body, etc.)
- **Spacing:** 4px base scale
- **Shadows:** sm, md, lg, xl elevations

## Verified Data (Do Not Hallucinate)

Contact and metrics are defined in:
- `src/content/profile.ts` - Personal info, experience timeline
- `src/content/projects.ts` - 4 featured projects with URLs
- `src/content/claims.json` - Verified metrics only

**Never invent claims or URLs not in these files.**

## Continue Development

```bash
/superpowers:execute-plan docs/plans/2025-12-12-portfolio-mvp-plan.md
```

This resumes from Phase 3.4 (Services Section).
