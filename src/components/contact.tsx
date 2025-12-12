import { Mail, Linkedin } from 'lucide-react'
import { profile } from '@/content/profile'

export function Contact() {
  return (
    <section id="kontakt" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-section mb-4">Lass uns sprechen</h2>
          <p className="text-body text-gray-600 mb-2">
            Du hast eine Idee, ein Problem oder einfach Fragen? Schreib mir – ich
            antworte in der Regel{' '}
            <span className="font-semibold text-gray-900">
              innerhalb von 24 Stunden
            </span>
            .
          </p>

          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full shadow-sm text-caption mb-8">
            <span className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-gray-600">
              Aktuell verfügbar für neue Projekte
            </span>
          </div>

          {/* Contact links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              <Mail className="h-5 w-5" />
              E-Mail schreiben
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors font-medium"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
