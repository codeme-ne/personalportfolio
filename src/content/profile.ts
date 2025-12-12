export const profile = {
  name: 'Lukas Zangerl',
  location: 'Mönchengladbach, DE',
  email: 'zangerl.luk@gmail.com',
  linkedin: 'https://linkedin.com/in/lukzan',
  github: 'https://github.com/codeme-ne',

  headline: 'KI-Automatisierung für Coaches, Trainer & Selbständige',
  tagline: 'Ich baue KI-Systeme, die Deinen Alltag leichter machen.',

  experience: [
    { year: '2024', role: 'Selbständig: KI & Automation' },
    { year: '2023', role: 'First Officer, Swiss (A220)' },
    { year: '2020-22', role: 'Agile Coach, UBS Card Center' },
    { year: '2020-24', role: 'NLP Trainer, Landsiedel' },
  ],

  // Verified metrics only - do not add unverified claims
  metrics: {
    agile: 'Team-Velocity +15%',
    seoPipeline: '-10h/Woche, +25% Traffic (3 Monate)',
    ecommerceChatbot: '-60% Standardanfragen',
    produktiv: '17 Teilnehmer, ausverkauft',
  },
} as const

export type Profile = typeof profile
