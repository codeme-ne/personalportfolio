# Portfolio Website MVP - Implementation Plan

**Date:** 2025-12-12
**Status:** In Progress

## Overview

Personal portfolio website for Lukas Zangerl targeting coaches, trainers, and self-employed professionals in DACH region. German-only, clean & minimal design, with a Job Radar CLI for job hunting automation.

## Key Decisions (from Brainstorming)

- **Target:** Coaches, Trainers, Selbständige (non-technical SMB owners)
- **Positioning:** "The Translator" - KI-Automatisierung, die den Alltag leichter macht
- **Approach:** MVP portfolio + basic automation (single-page + CLI)
- **Visual:** Clean & minimal, cool neutrals + blue accent (HSL-based)
- **Language:** German only

---

## Session Log

### 2025-12-12 Session 1
**Completed:** Phase 1 + Phase 2 + Phase 3 (partial)

**What was built:**
- Next.js 15 project with App Router, TypeScript (strict), Tailwind v4, shadcn/ui, ESLint + Prettier
- Design system in `globals.css` with HSL colors, typography utilities, spacing, shadows
- Content layer: `profile.ts`, `projects.ts`, `claims.json` with verified data
- MDX setup with `next-mdx-remote` and `gray-matter`
- Homepage components: Hero, ProofStrip, Projects section with ProjectCard

**Key files created:**
- `src/app/globals.css` - Design system tokens
- `src/app/layout.tsx` - Root layout with Inter font, German lang
- `src/app/page.tsx` - Homepage with Hero, ProofStrip, Projects
- `src/content/profile.ts` - Verified personal data
- `src/content/projects.ts` - 4 featured projects
- `src/content/claims.json` - Verified metrics
- `src/lib/mdx.ts` - MDX content loader
- `src/lib/claims.ts` - Claims utilities
- `src/components/hero.tsx`
- `src/components/proof-strip.tsx`
- `src/components/project-card.tsx`
- `src/components/projects.tsx`
- `src/components/mdx-components.tsx`

**Build status:** ✅ Passing

### 2025-12-12 Session 2
**Completed:** Phase 3 (remaining sections)

**What was built:**
- Services section with 3 service offerings (System-Check, Automations-Sprint, Komplett-System)
- About section with story text + vertical timeline
- Contact section with email/LinkedIn links + availability badge
- Footer with legal links + copyright

**Key files created:**
- `src/content/services.ts` - 3 service definitions
- `src/components/service-card.tsx` - Service card with blue accent, checkmarks
- `src/components/services.tsx` - Services section wrapper
- `src/components/timeline.tsx` - Vertical timeline component
- `src/components/about.tsx` - About section (60/40 layout)
- `src/components/contact.tsx` - Contact section with availability badge
- `src/components/footer.tsx` - Footer with legal links

**Build status:** ✅ Passing

---

## Phase 1: Project Setup ✅ COMPLETE

### 1.1 Initialize Next.js Project
- [x] Create Next.js 15 app with App Router
- [x] Configure TypeScript strict mode
- [x] Set up Tailwind CSS
- [x] Install and configure shadcn/ui
- [x] Set up ESLint + Prettier

### 1.2 Configure Design System
- [x] Create `tailwind.config.ts` with HSL color scale
- [x] Define typography scale (Inter font)
- [x] Set up spacing scale (4px base)
- [x] Configure shadow elevation system
- [x] Define border radius tokens

### 1.3 Project Structure
- [x] Create folder structure:
  ```
  app/
  components/
  content/
  lib/
  automation/
  ```
- [x] Set up path aliases in tsconfig

---

## Phase 2: Content Layer ✅ COMPLETE

### 2.1 Profile & Projects Data
- [x] Create `content/profile.ts` with verified personal data
- [x] Create `content/projects.ts` with 4-6 featured projects
- [x] Add project metadata (title, description, tech tags, links)

### 2.2 MDX Setup
- [x] Install next-mdx-remote or @next/mdx
- [x] Create MDX components for case studies
- [x] Set up MDX content loader for /projekte/[slug]

### 2.3 Claims System (Credibility)
- [x] Create `content/claims.json` with verified metrics
- [x] Define claim structure: { id, claim, source, safe }
- [ ] Optional: Create verify-claims script for build

---

## Phase 3: Homepage Sections ✅ COMPLETE

### 3.1 Hero Section ✅
- [x] Create Hero component
- [x] Pre-headline: "KI-Automatisierung für Coaches, Trainer & Selbständige"
- [x] Headline: "Ich baue KI-Systeme, die Deinen Alltag leichter machen..."
- [x] Two CTAs: Primary (Projekt anfragen) + Secondary (Beispiele ansehen)
- [x] Responsive layout (mobile-first)

### 3.2 Proof Strip ✅
- [x] Create ProofStrip component
- [x] GitHub, LinkedIn links with icons
- [x] Live demo links (checkst-bot, linkedin-posts-one, pagetopic)
- [x] De-emphasized styling (--gray-500, small text)

### 3.3 Projects Section ✅
- [x] Create ProjectCard component
- [x] Grid layout (responsive: 1 → 2 → 3 columns)
- [x] Card styling: --gray-100 bg, --shadow-sm, hover elevation
- [x] Tech tags as pills
- [x] "Mehr erfahren →" links

### 3.4 Services Section ✅
- [x] Create ServiceCard component
- [x] Three cards: System-Check, Automations-Sprint, Komplett-System
- [x] Blue top border accent
- [x] "Du bekommst:" highlighted with checkmark icons
- [x] Individual CTAs per card

### 3.5 About Section ✅
- [x] Create About component with 60/40 layout
- [x] Story text (max-width: 32em)
- [x] Vertical timeline component
- [x] Timeline dots in --blue-500, years de-emphasized

### 3.6 Contact Section ✅
- [x] Create Contact component
- [x] Headline + copy with emphasized response time
- [x] Email + LinkedIn links with icons
- [x] Availability badge (--shadow-sm, compact)

### 3.7 Footer ✅
- [x] Create Footer component
- [x] Links: Impressum, Datenschutz
- [x] Copyright + availability info

---

## Phase 4: Case Study Pages

### 4.1 Dynamic Route Setup
- [ ] Create `app/projekte/[slug]/page.tsx`
- [ ] Set up generateStaticParams for SSG
- [ ] Create getProjectBySlug helper

### 4.2 Case Study Template
- [ ] Header: Title (36px), tagline, tech tags, links
- [ ] Content sections: Problem, Lösung, Ergebnis, Tech Stack
- [ ] "Was ich verbessern würde" section
- [ ] "Quelle / Beleg" section with external link
- [ ] Back navigation: "← Alle Projekte"

### 4.3 MDX Content
- [ ] Write case study for checkstBot
- [ ] Write case study for PageTopic
- [ ] Write case study for Social Transformer
- [ ] Write case study for Loom Summary

---

## Phase 5: Legal Pages

### 5.1 Impressum
- [ ] Create `app/impressum/page.tsx`
- [ ] Template content with TODO markers for legal review

### 5.2 Datenschutz
- [ ] Create `app/datenschutz/page.tsx`
- [ ] Template content with TODO markers for legal review

---

## Phase 6: SEO & Performance

### 6.1 Metadata
- [ ] Configure root layout metadata
- [ ] Add page-specific metadata for each route
- [ ] Create generateMetadata for dynamic routes

### 6.2 SEO Assets
- [ ] Create robots.txt
- [ ] Create sitemap.xml (or dynamic generation)
- [ ] Add JSON-LD structured data (Person, Organization)

### 6.3 OG Images
- [ ] Set up @vercel/og for dynamic OG images
- [ ] Create OG image template
- [ ] Add OG images to all pages

### 6.4 Performance
- [ ] Optimize images (next/image)
- [ ] Verify Lighthouse score >90
- [ ] Test mobile responsiveness

---

## Phase 7: Job Radar CLI

### 7.1 CLI Setup
- [ ] Create `automation/job-radar/` directory
- [ ] Initialize package.json with bin entry
- [ ] Install commander, rss-parser
- [ ] Create TypeScript config

### 7.2 Core Commands
- [ ] Implement `fetch` command (RSS/JSON sources)
- [ ] Implement `export` command (md, csv, json outputs)
- [ ] Optional: `score` command (LLM scoring)

### 7.3 Configuration
- [ ] Create config.yaml schema
- [ ] Implement config loader
- [ ] Add example config file

### 7.4 Documentation
- [ ] Create automation/README.md
- [ ] Document setup, usage, ethics
- [ ] Add ToS compliance notes

---

## Phase 8: Deployment

### 8.1 Vercel Setup
- [ ] Create vercel.json (if needed)
- [ ] Configure environment variables
- [ ] Test preview deployment

### 8.2 Domain
- [ ] Configure custom domain (TBD)
- [ ] Set up SSL
- [ ] Verify deployment

### 8.3 Documentation
- [ ] Update README.md with setup instructions
- [ ] Document env vars
- [ ] Add "Deploy to Vercel" button

---

## Verified Data (Do Not Hallucinate)

### Contact
- Name: Lukas Zangerl
- Location: Mönchengladbach, DE
- Email: zangerl.luk@gmail.com
- LinkedIn: linkedin.com/in/lukzan
- GitHub: github.com/codeme-ne

### Metrics (Only Use These)
- Agile: Team-Velocity +15%
- SEO Pipeline: -10h/Woche, +25% Traffic (3 Monate)
- E-Commerce Chatbot: -60% Standardanfragen
- ProduKItv: 17 Teilnehmer, ausverkauft

### Projects (with URLs)
1. checkstBot: https://checkst-bot.vercel.app / github.com/codeme-ne/checkstBot
2. PageTopic: https://www.pagetopic.org
3. Social Transformer: https://linkedin-posts-one.vercel.app / github.com/codeme-ne/linkedin-posts
4. Loom Summary: github.com/codeme-ne/loom-summary-timestamps

### Experience
- 2024: Selbständig: KI & Automation
- 2023: First Officer, Swiss (A220)
- 2020-22: Agile Coach, UBS Card Center
- 2020-24: NLP Trainer, Landsiedel

---

## Visual Design System Reference

### Colors (HSL)
```css
/* Neutrals */
--gray-50: hsl(210, 40%, 98%);
--gray-100: hsl(210, 40%, 96%);
--gray-200: hsl(214, 32%, 91%);
--gray-300: hsl(213, 27%, 84%);
--gray-400: hsl(215, 20%, 65%);
--gray-500: hsl(215, 16%, 47%);
--gray-600: hsl(215, 19%, 35%);
--gray-700: hsl(215, 25%, 27%);
--gray-800: hsl(217, 33%, 17%);
--gray-900: hsl(222, 47%, 11%);

/* Blue Accent */
--blue-50: hsl(214, 100%, 97%);
--blue-500: hsl(217, 91%, 60%);
--blue-600: hsl(221, 83%, 53%);
--blue-700: hsl(224, 76%, 48%);
```

### Typography
| Element | Size | Weight | Line-height | Letter-spacing |
|---------|------|--------|-------------|----------------|
| Hero | 48-56px | 700 | 1.1 | -0.02em |
| Section | 32-36px | 600 | 1.2 | -0.01em |
| Subheading | 20-24px | 600 | 1.3 | normal |
| Body | 16-18px | 400 | 1.6 | normal |
| Caption | 14px | 400 | 1.5 | normal |

### Spacing (4px base)
```css
--space-1: 4px;
--space-2: 8px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
--space-24: 96px;
```

### Shadows
```css
--shadow-sm: 0 1px 2px hsl(0 0% 0% / 0.05);
--shadow-md: 0 4px 6px hsl(0 0% 0% / 0.07);
--shadow-lg: 0 10px 15px hsl(0 0% 0% / 0.1);
```

### Border Radius
```css
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 8px;
--radius-xl: 12px;
```

---

## Next Steps (Continue Here)

**Resume at:** Phase 4 - Case Study Pages

**Next batch should include:**
1. Dynamic route setup (`app/projekte/[slug]/page.tsx`)
2. Case study template with Problem/Lösung/Ergebnis sections
3. MDX content for each project

**To continue:** Run `/superpowers:execute-plan docs/plans/2025-12-12-portfolio-mvp-plan.md`
