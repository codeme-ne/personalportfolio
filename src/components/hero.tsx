import Link from 'next/link'

export function Hero() {
  return (
    <section className="px-4 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-caption text-gray-500">
          KI-Automatisierung für Coaches, Trainer & Selbständige
        </p>

        <h1 className="text-hero mb-6">
          Ich baue KI-Systeme, die Deinen Alltag leichter machen.
        </h1>

        <p className="text-body text-gray-600 mb-8 max-w-2xl mx-auto">
          Du verbringst zu viel Zeit mit repetitiven Aufgaben? Ich automatisiere sie – mit
          maßgeschneiderten KI-Lösungen, die wirklich funktionieren.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#kontakt"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Projekt anfragen
          </Link>
          <Link
            href="#projekte"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-900 font-medium rounded-lg hover:bg-gray-200 transition-colors"
          >
            Beispiele ansehen
          </Link>
        </div>
      </div>
    </section>
  )
}
