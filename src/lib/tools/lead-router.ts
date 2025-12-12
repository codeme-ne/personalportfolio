export type LeadRole = 'coach' | 'trainer' | 'berater' | 'selbstaendig' | 'other'

export type LeadNeed =
  | 'leads_booking'
  | 'onboarding'
  | 'followups'
  | 'content_marketing'
  | 'crm_notes'
  | 'invoicing'
  | 'unsure'

export type LeadUrgency = 'asap' | '2_6_weeks' | 'flexible'
export type LeadBudget = 'under_1k' | '1_3k' | '3_8k' | '8k_plus' | 'unsure'
export type DataSensitivity = 'low' | 'medium' | 'high'

export interface LeadIntake {
  role: LeadRole
  needs: LeadNeed[]
  urgency: LeadUrgency
  budget: LeadBudget
  dataSensitivity: DataSensitivity
}

export type RecommendedOffer = 'system-check' | 'automations-sprint' | 'komplett-system'

export interface OfferRecommendation {
  offer: RecommendedOffer
  reasoning: string[]
}

export function recommendOffer(lead: LeadIntake): OfferRecommendation {
  const normalizedNeeds = lead.needs.filter((n) => n !== 'unsure')
  const isUnclear = lead.needs.includes('unsure') || lead.budget === 'unsure'
  const isLargeScope = normalizedNeeds.length >= 4 || lead.budget === '8k_plus'

  if (isLargeScope) {
    return {
      offer: 'komplett-system',
      reasoning: [
        'Mehrere Workflows und/oder hoher Integrationsbedarf.',
        'Sinnvoll, wenn Daten-Sensitivität oder Skalierung hoch ist.',
      ],
    }
  }

  const isFocusedSprint =
    !isUnclear && normalizedNeeds.length >= 2 && (lead.urgency === 'asap' || lead.budget === '3_8k')

  if (isFocusedSprint) {
    return {
      offer: 'automations-sprint',
      reasoning: [
        'Klares Ziel mit hohem Zeitdruck.',
        'Lieferung als fertiger Workflow inkl. Übergabe.',
      ],
    }
  }

  return {
    offer: 'system-check',
    reasoning: [
      'Guter Start, wenn Scope/Budget/Tool-Stack noch unklar ist.',
      'In 60 Minuten definieren wir den Hebel.',
    ],
  }
}
