import { describe, expect, it } from 'vitest'
import { recommendOffer, type LeadIntake } from './lead-router'

describe('recommendOffer', () => {
  it('recommends System-Check when scope is unclear', () => {
    const lead: LeadIntake = {
      role: 'coach',
      needs: ['unsure'],
      urgency: 'flexible',
      budget: 'unsure',
      dataSensitivity: 'medium',
    }

    expect(recommendOffer(lead).offer).toBe('system-check')
  })

  it('recommends Automations-Sprint for a focused, urgent automation', () => {
    const lead: LeadIntake = {
      role: 'trainer',
      needs: ['leads_booking', 'followups'],
      urgency: 'asap',
      budget: '3_8k',
      dataSensitivity: 'low',
    }

    expect(recommendOffer(lead).offer).toBe('automations-sprint')
  })

  it('recommends Komplett-System for larger, multi-workflow scopes', () => {
    const lead: LeadIntake = {
      role: 'berater',
      needs: ['leads_booking', 'onboarding', 'followups', 'crm_notes', 'content_marketing'],
      urgency: '2_6_weeks',
      budget: '8k_plus',
      dataSensitivity: 'high',
    }

    expect(recommendOffer(lead).offer).toBe('komplett-system')
  })
})
