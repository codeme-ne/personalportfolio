export type ContentPersona = 'business_coach' | 'stress_health' | 'sales_marketing'
export type ContentTone = 'seriös' | 'direkt' | 'warm'

export interface ContentEngineInput {
  persona: ContentPersona
  tone: ContentTone
  input: string
}

export interface ContentEngineOutput {
  linkedinPost: string
  newsletter: string
  websiteFaq: string[]
  plan4Weeks: string[]
}

const personaHeadline: Record<ContentPersona, string> = {
  business_coach: '3 Dinge, die in Business-Coaching oft Zeit kosten',
  stress_health: 'Weniger Stress beginnt bei weniger Reibung',
  sales_marketing: 'Mehr Wirkung aus dem Content, den du schon hast',
}

const toneCta: Record<ContentTone, string> = {
  seriös: 'Wenn du willst, skizziere ich dir einen sauberen Workflow dafür.',
  direkt: 'Wenn du das willst: Lass es uns in 2 Wochen bauen.',
  warm: 'Wenn du magst, helfe ich dir dabei Schritt für Schritt.',
}

export function generateContentEngineOutput(data: ContentEngineInput): ContentEngineOutput {
  const input = data.input.trim()
  const headline = personaHeadline[data.persona]
  const cta = toneCta[data.tone]

  return {
    linkedinPost: `${headline}\n\n${input}\n\n${cta}`,
    newsletter: `Betreff: ${headline}\n\nHi,\n\nkurzer Gedanke aus der Praxis:\n${input}\n\n${cta}\n`,
    websiteFaq: [
      'Für wen ist das sinnvoll?',
      'Welche Tools lassen sich integrieren?',
      'Wie läuft die Umsetzung in der Praxis ab?',
    ],
    plan4Weeks: [
      'Woche 1: Kern-Problem + Story + CTA',
      'Woche 2: 3 häufige Fehler + konkrete Beispiele',
      'Woche 3: Mini-Framework + Übung',
      'Woche 4: Case-Study/Ergebnis + klarer Next Step',
    ],
  }
}
