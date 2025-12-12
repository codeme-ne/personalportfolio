# Portfolio Website - Lukas Zangerl

Personal portfolio website targeting coaches, trainers, and self-employed professionals in the DACH region.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcodeme-ne%2Fpersonalportfolio&env=NEXT_PUBLIC_SITE_URL&envDescription=Your%20production%20domain%20URL&envLink=https%3A%2F%2Fgithub.com%2Fcodeme-ne%2Fpersonalportfolio%23environment-variables&project-name=portfolio&repository-name=portfolio)

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Content:** MDX for case studies
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/codeme-ne/personalportfolio.git
cd personalportfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

## Environment Variables

Create a `.env.local` file (see `.env.example`):

```bash
# Site URL (used for sitemap, robots.txt, and metadata)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

**Note:** This variable defaults to `https://lukaszangerl.de` if not set.

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── projekte/     # Case study pages (dynamic routes)
│   ├── impressum/    # Legal: Impressum
│   ├── datenschutz/  # Legal: Datenschutz
│   ├── sitemap.ts    # Dynamic sitemap
│   └── robots.ts     # Dynamic robots.txt
├── components/       # React components
├── content/          # Static content
│   ├── profile.ts    # Personal info
│   ├── projects.ts   # Project data
│   ├── services.ts   # Service offerings
│   ├── claims.json   # Verified metrics
│   └── projects/     # MDX case studies
└── lib/              # Utilities
```

## Deployment

### Deploy to Vercel (Recommended)

1. Click the "Deploy with Vercel" button above
2. Set `NEXT_PUBLIC_SITE_URL` to your production domain
3. Deploy

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

### Custom Domain Configuration

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project → Settings → Domains
3. Add your custom domain (e.g., `lukaszangerl.de`)
4. Configure DNS at your registrar:
   - **Option A (Recommended):** Add an `A` record pointing to `76.76.21.21`
   - **Option B:** Add a `CNAME` record pointing to `cname.vercel-dns.com`
5. Wait for DNS propagation (usually 1-48 hours)
6. Vercel automatically provisions SSL certificate

**After adding custom domain:**
- Update `NEXT_PUBLIC_SITE_URL` in Vercel Environment Variables
- Redeploy to update sitemap and metadata

## License

All rights reserved. This is a personal portfolio website.
