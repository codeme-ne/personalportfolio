import Link from 'next/link'

const tools = [
  {
    href: '/werkzeuge/anfrage-router',
    title: 'Anfrage-Router',
    description: 'Formular → Empfehlung + Briefing fürs Erstgespräch.',
  },
  {
    href: '/werkzeuge/session-summary',
    title: 'Session Summary',
    description: 'Notizen → Summary, Aufgaben und Follow-up Draft.',
  },
  {
    href: '/werkzeuge/content-engine',
    title: 'Content Engine',
    description: '1 Input → LinkedIn, Newsletter, FAQ, 4‑Wochen Plan.',
  },
]

export function Tools() {
  return (
    <section id="werkzeuge" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-section mb-4">Werkzeuge (Demos)</h2>
            <p className="text-body text-gray-600">
              Kurze Demos, die typische Painpoints lösen — ideal, um im Gespräch sofort Mehrwert zu
              zeigen.
            </p>
          </div>
          <Link
            href="/werkzeuge"
            className="text-caption font-medium text-blue-600 hover:text-blue-700"
          >
            Alle Werkzeuge ansehen →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="block bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-subheading mb-2">{tool.title}</h3>
              <p className="text-body text-gray-600">{tool.description}</p>
              <p className="mt-4 text-caption font-medium text-blue-600">Demo öffnen →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
