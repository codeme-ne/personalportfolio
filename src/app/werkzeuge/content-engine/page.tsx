import { ToolPageLayout } from '../_components/tool-page-layout'
import { ContentEngineDemo } from './content-engine-demo'

export default function ContentEnginePage() {
  return (
    <ToolPageLayout
      title="Content Engine"
      description="1 Input → LinkedIn Draft, Newsletter Draft, Website-FAQ und 4‑Wochen Plan (ohne erfundene Claims)."
    >
      <ContentEngineDemo />
    </ToolPageLayout>
  )
}
