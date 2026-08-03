export const cardCodeSnippets = {
  visualVariantsTemplateCode: `<ERow class="full-width">
  <ECol md="4">
    <ECard
      title="Default surface"
      description="A neutral contained card for standard content."
      elevation="sm"
    />
  </ECol>
  <ECol md="4">
    <ECard
      title="Outlined surface"
      description="A visible boundary without added elevation."
      outlined
      depressed
    />
  </ECol>
  <ECol md="4">
    <ECard
      title="Tonal surface"
      description="A subtle semantic tint that remains flat."
      color="primary"
      tonal
    />
  </ECol>
</ERow>`,

  contentAnatomyTemplateCode: `<ECard
  title="Quarterly summary"
  subtitle="April to June"
  elevation="md"
  description="Revenue and engagement moved above the previous period."
>
  <p>
    The default slot supports structured content beyond the built-in text regions.
  </p>
</ECard>`,

  mediaPlacementTemplateCode: `<ERow class="full-width">
  <ECol md="6">
    <ECard
      :prepend-header-icon="$icon.calendar"
      title="Design review"
      elevation="sm"
      subtitle="Today at 14:30"
      description="Header media stays connected to the title and subtitle."
    />
  </ECol>
  <ECol md="6">
    <ECard
      :prepend-icon="$icon.account"
      prepend-vertical-align="center"
      title="Saved report"
      elevation="sm"
      subtitle="Analytics workspace"
      description="Body media can align across the complete content area."
    />
  </ECol>
</ERow>`,

  slotsTemplateCode: `<ECard
  title="Publish changes?"
  outlined
  description="Your update will become visible to everyone in the workspace."
>
  <template #footer>
    <div class="d-flex justify-end gap-2 full-width">
      <EButton text>Cancel</EButton>
      <EButton color="primary">Publish</EButton>
    </div>
  </template>
</ECard>`,

  compositionTemplateCode: `<ERow class="full-width">
  <ECol md="4">
    <ECard
      :prepend-header-icon="$icon.account"
      title="Morgan Lee"
      elevation="md"
      subtitle="Product designer"
      description="Owns the component documentation and interaction guidelines."
    />
  </ECol>
  <ECol md="4">
    <ECard title="Completion rate" subtitle="This month" tonal color="success">
      <strong class="type-h4">84%</strong>
    </ECard>
  </ECol>
  <ECol md="4">
    <ECard title="Documentation review" subtitle="3 comments remaining" outlined>
      <template #footer>
        <div class="d-flex justify-end full-width">
          <EButton text color="primary">Open review</EButton>
        </div>
      </template>
    </ECard>
  </ECol>
</ERow>`,

  accessibilityTemplateCode: `<ECard
  role="region"
  aria-label="Account security settings"
  title="Account security"
  description="Review active sessions and update your sign-in preferences."
>
  <template #footer>
    <div class="d-flex justify-end full-width">
      <EButton color="primary">Review security</EButton>
    </div>
  </template>
</ECard>`,
} as const;
