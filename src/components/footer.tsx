import Link from 'next/link'
import { profile } from '@/content/profile'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-caption text-gray-500">
            © {currentYear} {profile.name}. Alle Rechte vorbehalten.
          </p>

          {/* Legal links */}
          <nav className="flex items-center gap-6">
            <Link
              href="/impressum"
              className="text-caption text-gray-500 hover:text-gray-700 transition-colors"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-caption text-gray-500 hover:text-gray-700 transition-colors"
            >
              Datenschutz
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
