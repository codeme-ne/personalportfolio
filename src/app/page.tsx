import { Hero } from '@/components/hero'
import { ProofStrip } from '@/components/proof-strip'
import { Projects } from '@/components/projects'
import { Services } from '@/components/services'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <ProofStrip />
        <Projects />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
