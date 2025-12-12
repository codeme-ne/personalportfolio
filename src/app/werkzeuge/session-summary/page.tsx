import { ToolPageLayout } from '../_components/tool-page-layout'
import { SessionSummaryDemo } from './session-summary-demo'

export default function SessionSummaryPage() {
  return (
    <ToolPageLayout
      title="Session Summary"
      description="Aus Notizen entsteht ein Recap, konkrete Aufgaben und ein Follow-up Draft — optional mit „Sensitive Mode“."
    >
      <SessionSummaryDemo />
    </ToolPageLayout>
  )
}
