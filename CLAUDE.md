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

**Status:** MVP Complete & Deployed
**Production URL:** https://portfoliowebsite-olive-nine.vercel.app
**Plan:** `docs/plans/2025-12-12-portfolio-mvp-plan.md`

**Completed:**
- Phase 1: Project Setup (Next.js, Tailwind, shadcn/ui, ESLint/Prettier)
- Phase 2: Content Layer (profile.ts, projects.ts, claims.json, MDX setup)
- Phase 3: Homepage Sections (Hero, ProofStrip, Projects, Services, About, Contact, Footer)
- Phase 4: Case Study Pages (5 projects with MDX)
- Phase 5: Legal Pages (Impressum, Datenschutz)
- Phase 6: SEO & Performance (metadata, robots.txt, sitemap.xml, JSON-LD)
- Phase 8: Deployment (Vercel, README, env documentation)

**Optional:** Phase 7 (Job Radar CLI) - can be added later

## Design System

Located in `src/app/globals.css`:
- **Colors:** HSL-based gray scale (50-900) + blue accent
- **Typography:** Inter font, utility classes (text-hero, text-section, text-body, etc.)
- **Spacing:** 4px base scale
- **Shadows:** sm, md, lg, xl elevations

## Verified Data (Do Not Hallucinate)

Contact and metrics are defined in:
- `src/content/profile.ts` - Personal info, experience timeline
- `src/content/projects.ts` - 5 featured projects with GitHub URLs
- `src/content/claims.json` - Verified metrics only

**Never invent claims or URLs not in these files.**

## Continue Development

The portfolio MVP is complete and deployed. Optional next steps:

1. **Add custom domain:** Configure `lukaszangerl.de` in Vercel Dashboard
2. **Job Radar CLI:** Run `/superpowers:execute-plan docs/plans/2025-12-12-portfolio-mvp-plan.md` to implement Phase 7
