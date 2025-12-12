import { profile } from '@/content/profile'
import { Timeline } from './timeline'

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-section mb-12">Über mich</h2>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Story text - 60% width on desktop */}
          <div className="lg:col-span-3">
            <div className="max-w-[32em] space-y-4 text-body text-gray-600">
              <p>
                Ich bin Lukas – und ich baue Dinge, die mir auf die Nerven gehen,
                einfach weg.
              </p>
              <p>
                Angefangen habe ich als Pilot bei Swiss. Dann Agile Coach bei
                UBS. Heute entwickle ich KI-Automatisierungen für Selbständige,
                Coaches und Trainer.
              </p>
              <p>
                Was alle Stationen verbindet: Systeme, die unter Druck
                funktionieren müssen. Im Cockpit. In der Bank. Und jetzt in
                Deinem Business.
              </p>
              <p>
                Nebenbei studiere ich AI & Data Science (M.Sc., laufend) und
                leite die Produktivitäts-Werkstatt bei Landsiedel – durch die
                über 80 Teilnehmende gegangen sind.
              </p>
            </div>
          </div>

          {/* Timeline - 40% width on desktop */}
          <div className="lg:col-span-2">
            <h3 className="text-subheading mb-6 text-gray-700">
              Mein Weg hierher
            </h3>
            <Timeline items={profile.experience} />
          </div>
        </div>
      </div>
    </section>
  )
}
