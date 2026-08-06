export const gridCodeSnippets = {
  responsiveBreakpointsTemplateCode: `<ERow class="full-width" gap="md">
  <ECol cols="12" md="8" lg="9">
    <ECard title="Main content" description="Spans most of the row on medium and large screens." elevation="sm" />
  </ECol>
  <ECol cols="12" md="4" lg="3">
    <ECard title="Sidebar" description="Stacks below content on mobile and aligns beside it from md." outlined />
  </ECol>
</ERow>`,

  rowModesTemplateCode: `<ERow class="full-width" gap="sm">
  <ECol cols="12" md="4">
    <ECard title="dense" description="Tighter gutters for compact interfaces." outlined />
  </ECol>
  <ECol cols="12" md="4">
    <ECard title="equal" description="Forces sibling columns to share available width." outlined />
  </ECol>
  <ECol cols="12" md="4">
    <ECard title="no-gutters" description="Removes gutters when cards must touch edges." outlined />
  </ECol>
</ERow>`,

  nestedLayoutTemplateCode: `<ERow class="full-width" gap="md">
  <ECol cols="12" lg="8">
    <ECard title="Primary column" class="mb-3" elevation="sm" />

    <ERow gap="sm">
      <ECol cols="12" md="6">
        <ECard title="Nested A" outlined />
      </ECol>
      <ECol cols="12" md="6">
        <ECard title="Nested B" outlined />
      </ECol>
    </ERow>
  </ECol>

  <ECol cols="12" lg="4">
    <ECard title="Support rail" description="Use for filters, context, or quick actions." outlined />
  </ECol>
</ERow>`,
} as const
