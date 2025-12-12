import { Github, Linkedin, ExternalLink } from 'lucide-react'

const links = [
  {
    label: 'GitHub',
    href: 'https://github.com/codeme-ne',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/lukzan',
    icon: Linkedin,
  },
  {
    label: 'checkstBot',
    href: 'https://checkst-bot.vercel.app',
    icon: ExternalLink,
  },
  {
    label: 'Social Transformer',
    href: 'https://linkedin-posts-one.vercel.app',
    icon: ExternalLink,
  },
  {
    label: 'PageTopic',
    href: 'https://www.pagetopic.org',
    icon: ExternalLink,
  },
]

export function ProofStrip() {
  return (
    <section className="border-y border-gray-200 bg-gray-50 py-4">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-caption text-gray-500 hover:text-gray-700 transition-colors"
            >
              <link.icon className="h-4 w-4" />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
