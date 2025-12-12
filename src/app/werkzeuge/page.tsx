import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const tools = [
  {
    href: '/werkzeuge/anfrage-router',
    title: 'Anfrage-Router',
    tagline: 'Leads qualifizieren, bevor du Zeit investierst',
    bullets: ['Formular → Empfehlung (Check/Sprint/System)', 'Copy-paste Briefing für Erstgespräch'],
  },
  {
    href: '/werkzeuge/session-summary',
    title: 'Session Summary',
    tagline: 'Nachbereitung in Minuten statt Stunden',
    bullets: ['Notizen → Summary + Aufgaben', 'Follow-up E-Mail Draft', '„Sensitive Mode“ mit Redaction'],
  },
  {
    href: '/werkzeuge/content-engine',
    title: 'Content Engine',
    tagline: '1 Input → mehrere Content-Formate',
    bullets: ['LinkedIn Draft', 'Newsletter Draft', 'FAQ + 4‑Wochen Plan'],
  },
]

export default function ToolsIndexPage() {
  return (
    <main className="min-h-screen bg-[var(--gray-50)]">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--gray-500)] transition-colors hover:text-[var(--gray-700)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Startseite
        </Link>

        <header className="mb-10">
          <h1 className="text-section mb-3">Werkzeuge (Demos)</h1>
          <p className="text-body text-[var(--gray-600)] max-w-2xl">
            Kleine, schnelle Demos, die typische Painpoints von Coaches/Trainern/Selbständigen adressieren.
            Perfekt, um im Gespräch zu zeigen: „Genau das kann ich dir bauen.“
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <article
              key={tool.href}
              className="rounded-lg border border-[var(--gray-200)] bg-white p-6 shadow-sm"
            >
              <h2 className="text-subheading mb-1">{tool.title}</h2>
              <p className="text-caption text-[var(--blue-600)] font-medium mb-4">{tool.tagline}</p>
              <ul className="mb-6 list-inside list-disc space-y-1 text-caption text-[var(--gray-600)]">
                {tool.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <Link
                href={tool.href}
                className="inline-flex items-center justify-center rounded-md bg-[var(--blue-600)] px-4 py-2 text-caption font-medium text-white transition-colors hover:bg-[var(--blue-700)]"
              >
                Demo öffnen
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}

