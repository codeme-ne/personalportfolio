'use client'

import { useMemo, useState } from 'react'
import {
  recommendOffer,
  type DataSensitivity,
  type LeadBudget,
  type LeadIntake,
  type LeadNeed,
  type LeadRole,
  type LeadUrgency,
} from '@/lib/tools/lead-router'

const offerLabel = {
  'system-check': 'System-Check (60 Minuten)',
  'automations-sprint': 'Automations-Sprint (2 Wochen)',
  'komplett-system': 'Komplett-System (maßgeschneidert)',
} as const

const needsOptions: Array<{ id: LeadNeed; label: string }> = [
  { id: 'leads_booking', label: 'Leads & Terminbuchung' },
  { id: 'onboarding', label: 'Onboarding & E-Mails' },
  { id: 'followups', label: 'Follow-ups & Reminder' },
  { id: 'content_marketing', label: 'Content & Marketing' },
  { id: 'crm_notes', label: 'CRM/Notizen & Dokumentation' },
  { id: 'invoicing', label: 'Rechnungen & Admin (E‑Rechnung)' },
  { id: 'unsure', label: 'Weiß ich noch nicht' },
]

export function LeadRouterDemo() {
  const [role, setRole] = useState<LeadRole>('coach')
  const [needs, setNeeds] = useState<LeadNeed[]>(['leads_booking'])
  const [urgency, setUrgency] = useState<LeadUrgency>('2_6_weeks')
  const [budget, setBudget] = useState<LeadBudget>('unsure')
  const [dataSensitivity, setDataSensitivity] = useState<DataSensitivity>('medium')
  const [goal, setGoal] = useState('Mehr Zeit für Sessions, weniger Admin.')
  const [toolStack, setToolStack] = useState('Google Kalender, Notion, Gmail')
  const [copied, setCopied] = useState(false)

  const lead: LeadIntake = useMemo(
    () => ({
      role,
      needs,
      urgency,
      budget,
      dataSensitivity,
    }),
    [role, needs, urgency, budget, dataSensitivity]
  )

  const recommendation = useMemo(() => recommendOffer(lead), [lead])

  const briefing = useMemo(() => {
    const needsText = needs.length ? needs.join(', ') : '(keine Auswahl)'
    return [
      'Lead-Briefing (Demo)',
      `- Rolle: ${role}`,
      `- Fokus: ${needsText}`,
      `- Dringlichkeit: ${urgency}`,
      `- Budget: ${budget}`,
      `- Daten-Sensitivität: ${dataSensitivity}`,
      `- Tool-Stack: ${toolStack || '(unbekannt)'}`,
      `- Ziel: ${goal || '(unbekannt)'}`,
      '',
      'Fragen fürs Erstgespräch:',
      '- Was kostet dich das Problem pro Woche (Zeit/Geld/Nerven)?',
      '- Wo genau beginnt der Prozess (Trigger) und wo endet er (Output)?',
      '- Welche Daten sind sensibel (Klientendaten) und was darf nie raus?',
      '- Welche Tools sind „gesetzt“ (Kalender, CRM, Buchhaltung)?',
    ].join('\n')
  }, [role, needs, urgency, budget, dataSensitivity, toolStack, goal])

  async function copyBriefing() {
    try {
      await navigator.clipboard.writeText(briefing)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1200)
    } catch {
      setCopied(false)
    }
  }

  function toggleNeed(need: LeadNeed) {
    setNeeds((prev) => {
      const has = prev.includes(need)
      const next = has ? prev.filter((n) => n !== need) : [...prev, need]
      return next.length ? next : prev
    })
  }

  return (
    <div className="space-y-8">
      <section className="rounded-lg border border-[var(--gray-200)] bg-white p-6 shadow-sm">
        <h2 className="text-subheading mb-4">Input</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-1">
            <span className="text-caption font-semibold text-[var(--gray-700)]">Rolle</span>
            <select
              className="w-full rounded-md border border-[var(--gray-300)] bg-white px-3 py-2 text-sm"
              value={role}
              onChange={(e) => setRole(e.target.value as LeadRole)}
            >
              <option value="coach">Coach</option>
              <option value="trainer">Trainer</option>
              <option value="berater">Berater</option>
              <option value="selbstaendig">Selbständig</option>
              <option value="other">Sonstiges</option>
            </select>
          </label>

          <label className="space-y-1">
            <span className="text-caption font-semibold text-[var(--gray-700)]">
              Daten-Sensitivität
            </span>
            <select
              className="w-full rounded-md border border-[var(--gray-300)] bg-white px-3 py-2 text-sm"
              value={dataSensitivity}
              onChange={(e) => setDataSensitivity(e.target.value as DataSensitivity)}
            >
              <option value="low">Low (keine Klientendaten)</option>
              <option value="medium">Medium</option>
              <option value="high">High (Klientendaten / sensibel)</option>
            </select>
          </label>

          <label className="space-y-1">
            <span className="text-caption font-semibold text-[var(--gray-700)]">Dringlichkeit</span>
            <select
              className="w-full rounded-md border border-[var(--gray-300)] bg-white px-3 py-2 text-sm"
              value={urgency}
              onChange={(e) => setUrgency(e.target.value as LeadUrgency)}
            >
              <option value="asap">ASAP</option>
              <option value="2_6_weeks">2–6 Wochen</option>
              <option value="flexible">Flexibel</option>
            </select>
          </label>

          <label className="space-y-1">
            <span className="text-caption font-semibold text-[var(--gray-700)]">Budget</span>
            <select
              className="w-full rounded-md border border-[var(--gray-300)] bg-white px-3 py-2 text-sm"
              value={budget}
              onChange={(e) => setBudget(e.target.value as LeadBudget)}
            >
              <option value="unsure">Unklar</option>
              <option value="under_1k">&lt; 1k</option>
              <option value="1_3k">1–3k</option>
              <option value="3_8k">3–8k</option>
              <option value="8k_plus">8k+</option>
            </select>
          </label>
        </div>

        <fieldset className="mt-6">
          <legend className="text-caption font-semibold text-[var(--gray-700)] mb-2">
            Was willst du automatisieren?
          </legend>
          <div className="grid gap-2 md:grid-cols-2">
            {needsOptions.map((opt) => (
              <label
                key={opt.id}
                className="flex items-center gap-2 text-sm text-[var(--gray-700)]"
              >
                <input
                  type="checkbox"
                  checked={needs.includes(opt.id)}
                  onChange={() => toggleNeed(opt.id)}
                />
                <span>{opt.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-6 grid gap-4">
          <label className="space-y-1">
            <span className="text-caption font-semibold text-[var(--gray-700)]">
              Tool-Stack (optional)
            </span>
            <input
              className="w-full rounded-md border border-[var(--gray-300)] bg-white px-3 py-2 text-sm"
              value={toolStack}
              onChange={(e) => setToolStack(e.target.value)}
              placeholder="z.B. Google, Notion, HubSpot, Calendly, Lexoffice"
            />
          </label>
          <label className="space-y-1">
            <span className="text-caption font-semibold text-[var(--gray-700)]">
              Ziel (1–2 Sätze)
            </span>
            <textarea
              className="w-full rounded-md border border-[var(--gray-300)] bg-white px-3 py-2 text-sm"
              rows={3}
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Woran merkst du, dass es sich gelohnt hat?"
            />
          </label>
        </div>
      </section>

      <section className="rounded-lg border border-[var(--gray-200)] bg-white p-6 shadow-sm">
        <h2 className="text-subheading mb-4">Empfehlung</h2>
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-body text-[var(--gray-900)] font-semibold">
              {offerLabel[recommendation.offer]}
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-caption text-[var(--gray-600)]">
              {recommendation.reasoning.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
          <button
            type="button"
            onClick={copyBriefing}
            className="inline-flex items-center justify-center rounded-md border border-[var(--gray-300)] bg-white px-4 py-2 text-caption font-medium text-[var(--gray-700)] transition-colors hover:bg-[var(--gray-100)]"
          >
            {copied ? 'Kopiert' : 'Briefing kopieren'}
          </button>
        </div>

        <div className="mt-6">
          <p className="text-caption font-semibold text-[var(--gray-700)] mb-2">Lead-Briefing</p>
          <pre className="whitespace-pre-wrap rounded-md border border-[var(--gray-200)] bg-[var(--gray-50)] p-4 text-xs text-[var(--gray-700)]">
            {briefing}
          </pre>
        </div>
      </section>
    </div>
  )
}
