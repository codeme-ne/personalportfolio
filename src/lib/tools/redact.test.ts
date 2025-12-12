import { describe, expect, it } from 'vitest'
import { redactSensitiveText } from './redact'

describe('redactSensitiveText', () => {
  it('redacts email addresses', () => {
    const input = 'Schreib an test@example.com für Details.'
    const redacted = redactSensitiveText(input)

    expect(redacted).not.toContain('test@example.com')
    expect(redacted).toContain('[email]')
  })

  it('redacts phone numbers', () => {
    const input = 'Ruf mich an: +49 170 1234567'
    const redacted = redactSensitiveText(input)

    expect(redacted).not.toContain('+49 170 1234567')
    expect(redacted).toContain('[phone]')
  })
})
