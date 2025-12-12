'use client'

import { useMemo, useState } from 'react'
import {
  generateContentEngineOutput,
  type ContentPersona,
  type ContentTone,
} from '@/lib/tools/content-engine'

const personaOptions: Array<{ id: ContentPersona; label: string }> = [
  { id: 'business_coach', label: 'Business Coach' },
  { id: 'stress_health', label: 'Stress/Health Coach' },
  { id: 'sales_marketing', label: 'Sales/Marketing Beratung' },
]

const toneOptions: Array<{ id: ContentTone; label: string }> = [
  { id: 'seriös', label: 'Seriös' },
  { id: 'direkt', label: 'Direkt' },
  { id: 'warm', label: 'Warm' },
]

const exampleInput =
  'Ich will aus Workshop-Notizen Content machen: 1 LinkedIn-Post, 1 Newsletter, 3 FAQ für die Website und einen 4‑Wochen Plan.'

export function ContentEngineDemo() {
  const [persona, setPersona] = useState<ContentPersona>('business_coach')
  const [tone, setTone] = useState<ContentTone>('seriös')
  const [input, setInput] = useState(exampleInput)

  const output = useMemo(
    () => generateContentEngineOutput({ persona, tone, input }),
    [persona, tone, input]
  )

  return (
    <div className="space-y-8">
      <section className="rounded-lg border border-[var(--gray-200)] bg-white p-6 shadow-sm">
        <h2 className="text-subheading mb-4">Input</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-1">
            <span className="text-caption font-semibold text-[var(--gray-700)]">Persona</span>
            <select
              className="w-full rounded-md border border-[var(--gray-300)] bg-white px-3 py-2 text-sm"
              value={persona}
              onChange={(e) => setPersona(e.target.value as ContentPersona)}
            >
              {personaOptions.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-1">
            <span className="text-caption font-semibold text-[var(--gray-700)]">Ton</span>
            <select
              className="w-full rounded-md border border-[var(--gray-300)] bg-white px-3 py-2 text-sm"
              value={tone}
              onChange={(e) => setTone(e.target.value as ContentTone)}
            >
              {toneOptions.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="mt-6 block space-y-1">
          <span className="text-caption font-semibold text-[var(--gray-700)]">
            Input (Notizen/Ideen)
          </span>
          <textarea
            className="w-full rounded-md border border-[var(--gray-300)] bg-white px-3 py-2 text-sm"
            rows={6}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </label>
      </section>

      <section className="rounded-lg border border-[var(--gray-200)] bg-white p-6 shadow-sm">
        <h2 className="text-subheading mb-4">Output</h2>

        <div className="space-y-6">
          <div>
            <p className="text-caption font-semibold text-[var(--gray-700)] mb-2">LinkedIn Draft</p>
            <pre className="whitespace-pre-wrap rounded-md border border-[var(--gray-200)] bg-[var(--gray-50)] p-4 text-xs text-[var(--gray-700)]">
              {output.linkedinPost}
            </pre>
          </div>

          <div>
            <p className="text-caption font-semibold text-[var(--gray-700)] mb-2">
              Newsletter Draft
            </p>
            <pre className="whitespace-pre-wrap rounded-md border border-[var(--gray-200)] bg-[var(--gray-50)] p-4 text-xs text-[var(--gray-700)]">
              {output.newsletter}
            </pre>
          </div>

          <div>
            <p className="text-caption font-semibold text-[var(--gray-700)] mb-2">Website-FAQ</p>
            <ul className="list-inside list-disc space-y-1 text-caption text-[var(--gray-700)]">
              {output.websiteFaq.map((q) => (
                <li key={q}>{q}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-caption font-semibold text-[var(--gray-700)] mb-2">4‑Wochen Plan</p>
            <ul className="list-inside list-disc space-y-1 text-caption text-[var(--gray-700)]">
              {output.plan4Weeks.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
