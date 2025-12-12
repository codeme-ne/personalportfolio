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
      'RAG-powered Learning Assistant: Dokumente hochladen, semantisch durchsuchen und KI-gestützte Erklärungen erhalten.',
    tags: ['Next.js', 'OpenAI', 'Pinecone', 'TypeScript'],
    liveUrl: 'https://checkst-bot.vercel.app',
    githubUrl: 'https://github.com/codeme-ne/checkstBot',
    featured: true,
  },
  {
    slug: 'gemini-image',
    title: 'Gemini Image & Prompt',
    description:
      'Verwandle jede URL in ein beeindruckendes KI-generiertes Bild. Mit Stil-Presets wie Ghibli, LEGO oder Claymation.',
    tags: ['Next.js', 'Gemini', 'Imagen 4', 'Stripe'],
    githubUrl: 'https://github.com/codeme-ne/Gemini-Image-und-Prompt',
    featured: true,
  },
  {
    slug: 'social-transformer',
    title: 'Social Transformer',
    description:
      'Verwandelt Newsletter und Artikel in plattform-optimierte Social-Media-Posts für LinkedIn, Twitter und Instagram.',
    tags: ['React', 'TypeScript', 'Claude AI', 'Supabase'],
    githubUrl: 'https://github.com/codeme-ne/Blogpost-zu-Socialmedia-Beitrag',
    featured: true,
  },
  {
    slug: 'telegram-transcriber',
    title: 'Telegram Voice Transcriber',
    description:
      'Exportiere und transkribiere Telegram-Sprachnachrichten lokal mit Whisper AI. Kein Telegram Premium nötig.',
    tags: ['Python', 'Whisper', 'Streamlit', 'Telethon'],
    githubUrl: 'https://github.com/codeme-ne/Telegram-Voice-Transcriber',
    featured: true,
  },
  {
    slug: 'ki-tricks',
    title: 'KI-Tricks',
    description:
      'Plattform mit praktischen Tipps und Tricks für KI-Tools wie Claude und ChatGPT. Für deutschsprachige Nutzer.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Framer Motion'],
    githubUrl: 'https://github.com/codeme-ne/ki-tricks',
    featured: true,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}
