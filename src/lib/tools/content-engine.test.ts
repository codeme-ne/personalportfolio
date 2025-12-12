import { describe, expect, it } from 'vitest'
import { generateContentEngineOutput } from './content-engine'

describe('generateContentEngineOutput', () => {
  it('returns 4-week plan and FAQ items', () => {
    const output = generateContentEngineOutput({
      persona: 'business_coach',
      tone: 'seriös',
      input: 'Ziel: Weniger Admin. Fokus: Leads qualifizieren. Ergebnis: mehr Zeit für Sessions.',
    })

    expect(output.websiteFaq.length).toBe(3)
    expect(output.plan4Weeks.length).toBe(4)
  })

  it('includes the input theme in the LinkedIn draft', () => {
    const output = generateContentEngineOutput({
      persona: 'sales_marketing',
      tone: 'direkt',
      input: 'Ich will aus Workshop-Notizen 10 Posts machen.',
    })

    expect(output.linkedinPost).toContain('Workshop')
  })
})
