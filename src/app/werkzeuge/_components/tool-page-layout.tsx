import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowLeft } from 'lucide-react'

interface ToolPageLayoutProps {
  title: string
  description?: string
  children: ReactNode
}

export function ToolPageLayout({ title, description, children }: ToolPageLayoutProps) {
  return (
    <main className="min-h-screen bg-[var(--gray-50)]">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link
          href="/werkzeuge"
          className="mb-8 inline-flex items-center gap-2 text-sm text-[var(--gray-500)] transition-colors hover:text-[var(--gray-700)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Alle Werkzeuge
        </Link>

        <header className="mb-10">
          <h1 className="text-section mb-3">{title}</h1>
          {description && <p className="text-body text-[var(--gray-600)]">{description}</p>}
        </header>

        {children}

        <footer className="mt-12 border-t border-[var(--gray-200)] pt-6">
          <p className="text-caption text-[var(--gray-500)]">
            Demo: Bitte keine sensiblen Klientendaten einfügen.
          </p>
          <div className="mt-4">
            <Link
              href="/#kontakt"
              className="text-caption font-medium text-[var(--blue-600)] hover:text-[var(--blue-700)]"
            >
              Projekt anfragen →
            </Link>
          </div>
        </footer>
      </div>
    </main>
  )
}
