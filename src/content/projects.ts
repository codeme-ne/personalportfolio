export interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: 'checkst-bot',
    title: 'checkstBot',
    description:
      'KI-gestützter Chatbot für Faktencheck und Quellenverifikation. Nutzt LLMs zur Analyse von Aussagen und liefert strukturierte Bewertungen.',
    tags: ['Next.js', 'OpenAI', 'Vercel'],
    liveUrl: 'https://checkst-bot.vercel.app',
    githubUrl: 'https://github.com/codeme-ne/checkstBot',
    featured: true,
  },
  {
    slug: 'pagetopic',
    title: 'PageTopic',
    description:
      'SEO-Tool zur automatischen Themenextraktion und Content-Analyse. Hilft bei der Keyword-Recherche und Content-Strategie.',
    tags: ['Web App', 'SEO', 'Automation'],
    liveUrl: 'https://www.pagetopic.org',
    featured: true,
  },
  {
    slug: 'social-transformer',
    title: 'Social Transformer',
    description:
      'Transformiert lange Texte in LinkedIn-optimierte Posts. KI-gestützte Aufbereitung für maximale Reichweite.',
    tags: ['Next.js', 'OpenAI', 'Social Media'],
    liveUrl: 'https://linkedin-posts-one.vercel.app',
    githubUrl: 'https://github.com/codeme-ne/linkedin-posts',
    featured: true,
  },
  {
    slug: 'loom-summary',
    title: 'Loom Summary',
    description:
      'Automatische Zusammenfassungen und Zeitstempel für Loom-Videos. Spart Zeit bei der Video-Dokumentation.',
    tags: ['Python', 'Whisper', 'Automation'],
    githubUrl: 'https://github.com/codeme-ne/loom-summary-timestamps',
    featured: true,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}
