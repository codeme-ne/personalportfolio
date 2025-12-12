import { Check } from 'lucide-react'
import type { Service } from '@/content/services'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-sm border-t-4 border-t-blue-500 p-6 flex flex-col h-full">
      <div className="mb-4">
        <h3 className="text-subheading mb-1">{service.title}</h3>
        <p className="text-caption text-blue-600 font-medium">
          {service.tagline}
        </p>
      </div>

      <p className="text-body text-gray-600 mb-6">{service.description}</p>

      <div className="mb-6 flex-grow">
        <p className="text-caption font-semibold text-gray-700 mb-3">
          Du bekommst:
        </p>
        <ul className="space-y-2">
          {service.deliverables.map((item) => (
            <li key={item} className="flex items-start gap-2 text-caption">
              <Check className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={service.cta.href}
        className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white text-caption font-medium rounded-md hover:bg-blue-700 transition-colors"
      >
        {service.cta.label}
      </a>
    </article>
  )
}
