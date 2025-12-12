import { services } from '@/content/services'
import { ServiceCard } from './service-card'

export function Services() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-section mb-4">Wie ich Dir helfen kann</h2>
          <p className="text-body text-gray-600 max-w-2xl mx-auto">
            Ob Du erst herausfinden willst, wo Automatisierung Sinn macht, oder
            schon ein konkretes Projekt hast – ich habe das passende Angebot.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
