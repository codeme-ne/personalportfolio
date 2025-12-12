import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Datenschutzerklärung | Lukas Zangerl',
  description: 'Datenschutzerklärung gemäß DSGVO',
}

export default function DatenschutzPage() {
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

        <h1 className="text-section mb-8">Datenschutzerklärung</h1>

        <div className="space-y-8 text-body text-[var(--gray-700)]">
          <section>
            <h2 className="text-subheading mb-4 text-[var(--gray-900)]">
              1. Datenschutz auf einen Blick
            </h2>

            <h3 className="mb-2 font-semibold text-[var(--gray-800)]">Allgemeine Hinweise</h3>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="mb-2 font-semibold text-[var(--gray-800)]">
              Datenerfassung auf dieser Website
            </h3>
            <p className="mb-4">
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong>
              <br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
              Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
            <p className="mb-4">
              <strong>Wie erfassen wir Ihre Daten?</strong>
              <br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei
              kann es sich z.B. um Daten handeln, die Sie per E-Mail an uns senden.
            </p>
            <p>
              <strong>Wofür nutzen wir Ihre Daten?</strong>
              <br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
              gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet
              werden.
            </p>
          </section>

          <section>
            <h2 className="text-subheading mb-4 text-[var(--gray-900)]">
              2. Hosting
            </h2>
            <p>
              Diese Website wird bei Vercel Inc. gehostet. Der Anbieter ist Vercel Inc., 340 S Lemon
              Ave #4133, Walnut, CA 91789, USA. Wenn Sie diese Website besuchen, werden
              personenbezogene Daten (z.B. IP-Adresse) an die Server von Vercel übermittelt. Details
              entnehmen Sie der Datenschutzerklärung von Vercel:{' '}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--blue-600)] hover:underline"
              >
                vercel.com/legal/privacy-policy
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-subheading mb-4 text-[var(--gray-900)]">
              3. Allgemeine Hinweise und Pflichtinformationen
            </h2>

            <h3 className="mb-2 font-semibold text-[var(--gray-800)]">Datenschutz</h3>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der
              gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>

            <h3 className="mb-2 font-semibold text-[var(--gray-800)]">
              Hinweis zur verantwortlichen Stelle
            </h3>
            <p className="mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              <br />
              <br />
              Lukas Zangerl
              <br />
              Mönchengladbach, Deutschland
              <br />
              E-Mail:{' '}
              <a
                href="mailto:zangerl.luk@gmail.com"
                className="text-[var(--blue-600)] hover:underline"
              >
                zangerl.luk@gmail.com
              </a>
            </p>

            <h3 className="mb-2 font-semibold text-[var(--gray-800)]">Widerruf Ihrer Einwilligung</h3>
            <p className="mb-4">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung
              möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu
              reicht eine formlose Mitteilung per E-Mail an uns.
            </p>

            <h3 className="mb-2 font-semibold text-[var(--gray-800)]">
              Beschwerderecht bei der zuständigen Aufsichtsbehörde
            </h3>
            <p>
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei
              einer Aufsichtsbehörde zu. Die zuständige Aufsichtsbehörde ist der
              Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen.
            </p>
          </section>

          <section>
            <h2 className="text-subheading mb-4 text-[var(--gray-900)]">
              4. Datenerfassung auf dieser Website
            </h2>

            <h3 className="mb-2 font-semibold text-[var(--gray-800)]">Server-Log-Dateien</h3>
            <p className="mb-4">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so
              genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies
              sind:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p>
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-subheading mb-4 text-[var(--gray-900)]">
              5. Kontaktaufnahme
            </h2>
            <p>
              Wenn Sie mich per E-Mail oder LinkedIn kontaktieren, werden Ihre Angaben inklusive
              der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei mir gespeichert. Diese Daten gebe ich nicht ohne
              Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von
              Art. 6 Abs. 1 lit. b DSGVO.
            </p>
          </section>

          {/* TODO: Nach rechtlicher Prüfung erweitern um: Analytics, Cookies, Social Media Plugins falls verwendet */}
        </div>
      </div>
    </main>
  )
}
