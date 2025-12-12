import { describe, expect, it } from 'vitest'
import { generateSessionSummary } from './session-summary'

describe('generateSessionSummary', () => {
  it('generates a summary, action steps, and a next-session agenda', () => {
    const output = generateSessionSummary(
      'Ziel: weniger Admin.\nNächster Schritt: Intake-Formular erstellen.\nReminder: Datenschutz prüfen.'
    )

    expect(output.summary.length).toBeGreaterThan(0)
    expect(output.actionSteps.length).toBe(3)
    expect(output.nextAgenda.length).toBe(3)
  })

  it('includes the summary in the follow-up email', () => {
    const output = generateSessionSummary('Wir haben über Onboarding und Follow-ups gesprochen.')
    expect(output.followUpEmail).toContain(output.summary)
  })
})
