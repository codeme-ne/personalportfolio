import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lukaszangerl.de'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Lukas Zangerl | KI-Automatisierung',
    template: '%s | Lukas Zangerl',
  },
  description:
    'KI-Automatisierung für Coaches, Trainer & Selbständige. Ich baue KI-Systeme, die Deinen Alltag leichter machen.',
  keywords: [
    'KI-Automatisierung',
    'AI Automation',
    'Coaches',
    'Trainer',
    'Selbständige',
    'ChatGPT',
    'Claude',
    'Mönchengladbach',
  ],
  authors: [{ name: 'Lukas Zangerl' }],
  creator: 'Lukas Zangerl',
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: siteUrl,
    siteName: 'Lukas Zangerl',
    title: 'Lukas Zangerl | KI-Automatisierung',
    description:
      'KI-Automatisierung für Coaches, Trainer & Selbständige. Ich baue KI-Systeme, die Deinen Alltag leichter machen.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lukas Zangerl | KI-Automatisierung',
    description:
      'KI-Automatisierung für Coaches, Trainer & Selbständige. Ich baue KI-Systeme, die Deinen Alltag leichter machen.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Lukas Zangerl',
  url: siteUrl,
  email: 'zangerl.luk@gmail.com',
  jobTitle: 'KI & Automation Spezialist',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mönchengladbach',
    addressCountry: 'DE',
  },
  sameAs: ['https://linkedin.com/in/lukzan', 'https://github.com/codeme-ne'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${geistMono.variable} font-sans`}>{children}</body>
    </html>
  )
}
