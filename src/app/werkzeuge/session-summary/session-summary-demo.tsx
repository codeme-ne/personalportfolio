'use client'

import { useMemo, useState } from 'react'
import { redactSensitiveText } from '@/lib/tools/redact'
import { generateSessionSummary } from '@/lib/tools/session-summary'

const exampleNotes =
  'Ziel: weniger Admin.\nHeute: Lead-Qualifizierung + Follow-ups.\nNächster Schritt: Intake-Formular definieren.\nReminder: Datenschutz prüfen.'

export function SessionSummaryDemo() {
  const [notes, setNotes] = useState(exampleNotes)
  const [sensitiveMode, setSensitiveMode] = useState(true)
  const [copied, setCopied] = useState(false)

  const processedNotes = useMemo(() => {
    return sensitiveMode ? redactSensitiveText(notes) : notes
  }, [notes, sensitiveMode])

  const output = useMemo(() => generateSessionSummary(processedNotes), [processedNotes])

  async function copyFollowUp() {
    try {
      await navigator.clipboard.writeText(output.followUpEmail)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1200)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="space-y-8">
      <section className="rounded-lg border border-[var(--gray-200)] bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <h2 className="text-subheading">Input</h2>
          <label className="inline-flex items-center gap-2 text-sm text-[var(--gray-700)]">
            <input
              type="checkbox"
              checked={sensitiveMode}
              onChange={(e) => setSensitiveMode(e.target.checked)}
            />
            <span>Sensitive Mode (Redaction)</span>
          </label>
        </div>

        <p className="mt-2 text-caption text-[var(--gray-600)]">
          Hinweis: Im Sensitive Mode werden E‑Mails/Telefonnummern maskiert.
        </p>

        <textarea
          className="mt-4 w-full rounded-md border border-[var(--gray-300)] bg-white px-3 py-2 text-sm"
          rows={6}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        {sensitiveMode && processedNotes !== notes && (
          <div className="mt-4">
            <p className="text-caption font-semibold text-[var(--gray-700)] mb-2">
              Redacted Preview
            </p>
            <pre className="whitespace-pre-wrap rounded-md border border-[var(--gray-200)] bg-[var(--gray-50)] p-4 text-xs text-[var(--gray-700)]">
              {processedNotes}
            </pre>
          </div>
        )}
      </section>

      <section className="rounded-lg border border-[var(--gray-200)] bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <h2 className="text-subheading">Output</h2>
          <button
            type="button"
            onClick={copyFollowUp}
            className="inline-flex items-center justify-center rounded-md border border-[var(--gray-300)] bg-white px-4 py-2 text-caption font-medium text-[var(--gray-700)] transition-colors hover:bg-[var(--gray-100)]"
          >
            {copied ? 'Kopiert' : 'Follow-up kopieren'}
          </button>
        </div>

        <div className="mt-6 space-y-6">
          <div>
            <p className="text-caption font-semibold text-[var(--gray-700)] mb-2">
              Zusammenfassung
            </p>
            <p className="text-body text-[var(--gray-700)]">{output.summary}</p>
          </div>

          <div>
            <p className="text-caption font-semibold text-[var(--gray-700)] mb-2">
              Nächste Schritte
            </p>
            <ul className="list-inside list-disc space-y-1 text-caption text-[var(--gray-700)]">
              {output.actionSteps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-caption font-semibold text-[var(--gray-700)] mb-2">
              Follow-up E-Mail (Draft)
            </p>
            <textarea
              className="w-full rounded-md border border-[var(--gray-300)] bg-white px-3 py-2 text-xs"
              rows={10}
              value={output.followUpEmail}
              readOnly
            />
          </div>

          <div>
            <p className="text-caption font-semibold text-[var(--gray-700)] mb-2">
              Agenda (nächster Termin)
            </p>
            <ul className="list-inside list-disc space-y-1 text-caption text-[var(--gray-700)]">
              {output.nextAgenda.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
