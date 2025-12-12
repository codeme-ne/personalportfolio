import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Impressum | Lukas Zangerl',
  description: 'Impressum und Angaben gemäß § 5 TMG',
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[var(--gray-50)]">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--gray-500)] transition-colors hover:text-[var(--gray-700)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Startseite
        </Link>

        <h1 className="text-section mb-8">Impressum</h1>

        <div className="space-y-8 text-body text-[var(--gray-700)]">
          <section>
            <h2 className="text-subheading mb-4 text-[var(--gray-900)]">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              Lukas Zangerl
              <br />
              {/* TODO: Vollständige Adresse nach rechtlicher Prüfung einfügen */}
              Mönchengladbach
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-subheading mb-4 text-[var(--gray-900)]">Kontakt</h2>
            <p>
              E-Mail:{' '}
              <a
                href="mailto:zangerl.luk@gmail.com"
                className="text-[var(--blue-600)] hover:underline"
              >
                zangerl.luk@gmail.com
              </a>
            </p>
            {/* TODO: Telefonnummer nach rechtlicher Prüfung einfügen falls gewünscht */}
          </section>

          <section>
            <h2 className="text-subheading mb-4 text-[var(--gray-900)]">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              Lukas Zangerl
              <br />
              Mönchengladbach
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-subheading mb-4 text-[var(--gray-900)]">Haftungsausschluss</h2>

            <h3 className="mb-2 font-semibold text-[var(--gray-800)]">Haftung für Inhalte</h3>
            <p className="mb-4">
              Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen.
              Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich.
            </p>

            <h3 className="mb-2 font-semibold text-[var(--gray-800)]">Haftung für Links</h3>
            <p className="mb-4">
              Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen
              Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen.
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
              der Seiten verantwortlich.
            </p>

            <h3 className="mb-2 font-semibold text-[var(--gray-800)]">Urheberrecht</h3>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung
              und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
