export function redactSensitiveText(text: string): string {
  const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi
  const phoneRegex = /(\+\d{1,3}[\s-]?\d{2,4}[\s-]?\d{3,}(?:[\s-]?\d{2,})?)/g

  return text.replace(emailRegex, '[email]').replace(phoneRegex, '[phone]')
}
