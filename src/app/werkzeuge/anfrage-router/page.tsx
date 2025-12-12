import { ToolPageLayout } from '../_components/tool-page-layout'
import { LeadRouterDemo } from './router-demo'

export default function AnfrageRouterPage() {
  return (
    <ToolPageLayout
      title="Anfrage-Router"
      description="Qualifiziere Leads in 60–90 Sekunden und erhalte eine klare Empfehlung + Briefing für dein Erstgespräch."
    >
      <LeadRouterDemo />
    </ToolPageLayout>
  )
}
