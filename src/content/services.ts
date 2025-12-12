export interface Service {
  id: string
  title: string
  tagline: string
  description: string
  deliverables: string[]
  cta: {
    label: string
    href: string
  }
}

export const services: Service[] = [
  {
    id: 'system-check',
    title: 'System-Check',
    tagline: 'Klarheit in 60 Minuten',
    description:
      'Gemeinsam analysieren wir Deine aktuellen Prozesse und identifizieren, wo KI & Automatisierung den größten Hebel bringen.',
    deliverables: [
      '60-Minuten Video-Call',
      'Prozess-Mapping Deiner Workflows',
      'Konkrete Automatisierungs-Ideen',
      'Priorisierte Empfehlungen',
    ],
    cta: {
      label: 'System-Check buchen',
      href: 'mailto:zangerl.luk@gmail.com?subject=System-Check%20anfragen',
    },
  },
  {
    id: 'automations-sprint',
    title: 'Automations-Sprint',
    tagline: 'Eine Lösung in 2 Wochen',
    description:
      'Ich baue Dir eine funktionierende Automatisierung – von der Idee bis zur Übergabe. Du sparst Zeit, ich liefere Ergebnisse.',
    deliverables: [
      'Fertige Automatisierung',
      'Dokumentation & Einweisung',
      '2 Wochen Support nach Übergabe',
      'Anpassungen inklusive',
    ],
    cta: {
      label: 'Sprint anfragen',
      href: 'mailto:zangerl.luk@gmail.com?subject=Automations-Sprint%20anfragen',
    },
  },
  {
    id: 'komplett-system',
    title: 'Komplett-System',
    tagline: 'Dein individuelles KI-System',
    description:
      'Für komplexere Anforderungen: Ich entwickle ein maßgeschneidertes System, das mehrere Prozesse verbindet und skaliert.',
    deliverables: [
      'Individuelle Architektur',
      'Mehrere integrierte Workflows',
      'Training für Dein Team',
      'Laufender Support (optional)',
    ],
    cta: {
      label: 'Projekt besprechen',
      href: 'mailto:zangerl.luk@gmail.com?subject=Komplett-System%20anfragen',
    },
  },
]
