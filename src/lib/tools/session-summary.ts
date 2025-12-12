export interface SessionSummaryOutput {
  summary: string
  actionSteps: string[]
  followUpEmail: string
  nextAgenda: string[]
}

function buildActionSteps(notes: string): string[] {
  const steps: string[] = []

  if (/\b(intake|formular)\b/i.test(notes)) {
    steps.push('Intake-Formular definieren (Felder, Routing, Erwartungsmanagement).')
  }

  if (/\b(datenschutz|dsgvo|avv|dpa)\b/i.test(notes)) {
    steps.push('Datenschutz klären (Datenfluss, Speicherfrist, Löschung, AVV/DPA).')
  }

  if (/\b(follow[- ]?up|nachbereitung|reminder)\b/i.test(notes)) {
    steps.push('Follow-up Workflow festlegen (Summary, Aufgaben, Reminder).')
  }

  const fallbacks = [
    'Zielbild und Erfolgskriterium (KPI) sauber formulieren.',
    'Tool-Stack/Integrationen festlegen und Risiken prüfen.',
    'Nächste Schritte terminieren (Owner + Deadline).',
  ]

  for (const fallback of fallbacks) {
    if (steps.length >= 3) break
    steps.push(fallback)
  }

  return steps.slice(0, 3)
}

export function generateSessionSummary(notes: string): SessionSummaryOutput {
  const cleaned = notes.trim().replace(/\s+/g, ' ')
  const summary = cleaned
    ? `Kurzfassung: ${cleaned.slice(0, 180)}${cleaned.length > 180 ? '…' : ''}`
    : 'Kurzfassung: (keine Notizen übergeben)'

  const actionSteps = buildActionSteps(notes)
  const nextAgenda = [
    'Check-in: Was ist seit dem letzten Termin passiert?',
    'Entscheidungen: Scope, Tools, Daten-Sensitivität, nächste Deliverables.',
    'Plan: Nächste Schritte, Verantwortlichkeiten, Timing.',
  ]

  const followUpEmail = [
    'Hi,',
    '',
    'danke für den Termin. Hier ist der kurze Recap:',
    summary,
    '',
    'Nächste Schritte:',
    ...actionSteps.map((s) => `- ${s}`),
    '',
    'Wenn du mir noch 1–2 Beispiele (ohne sensible Daten) schickst, kann ich den nächsten Schritt präziser planen.',
    '',
    'Viele Grüße',
  ].join('\n')

  return {
    summary,
    actionSteps,
    followUpEmail,
    nextAgenda,
  }
}
