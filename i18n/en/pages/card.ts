import type { DocsComponentPageContent } from '~/types/docs'

export const cardComponentContent: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Card | Nuvex UI Docs',
    description: 'Card component documentation for Nuvex UI with surface variants, content anatomy, media placement, slots, composition patterns, accessibility, and API reference.',
  },
  hero: {
    title: 'Card',
    descriptionHtml:
      "The <code class='docs-inline-code'>ECard</code> component groups related content on a contained surface. Use it to establish visual hierarchy for summaries, entities, and focused tasks; use plain layout when content does not need a distinct boundary.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Usage',
      descriptionHtml:
        "Configure the common surface props and inspect the generated markup. <code class='docs-inline-code'>color</code> resolves the background and readable contrast, while <code class='docs-inline-code'>outlined</code>, <code class='docs-inline-code'>tonal</code>, and <code class='docs-inline-code'>elevation</code> define its visual emphasis.",
    },
    {
      key: 'visual-variants',
      title: 'Visual variants',
      descriptionHtml:
        "Choose one surface treatment that matches the card's hierarchy. Tonal cards use color as a subtle tint and remain flat even when <code class='docs-inline-code'>elevation</code> is provided; combine tonal and outlined only when the boundary needs additional definition.",
    },
    {
      key: 'content-anatomy',
      title: 'Content anatomy',
      descriptionHtml:
        "Use <code class='docs-inline-code'>title</code>, <code class='docs-inline-code'>subtitle</code>, and <code class='docs-inline-code'>description</code> for predictable card regions. The default slot holds richer body content and is rendered only when content is supplied.",
    },
    {
      key: 'media-placement',
      title: 'Media placement',
      descriptionHtml:
        "Body media uses <code class='docs-inline-code'>prepend*</code> and <code class='docs-inline-code'>append*</code> props and can span the card content. Header media uses the corresponding <code class='docs-inline-code'>*Header*</code> props and stays aligned with the title block.",
    },
    {
      key: 'slots',
      title: 'Slots and actions',
      descriptionHtml:
        "Place rich content in the default slot and related actions in <code class='docs-inline-code'>#footer</code>. Keep actions as real buttons or links instead of turning the entire visual surface into an implicit control.",
    },
    {
      key: 'composition-patterns',
      title: 'Composition patterns',
      descriptionHtml:
        "Cards work best when each surface represents one clear subject. Keep action hierarchy restrained, allow content-driven height, and prefer a responsive row and column layout over fixed card widths or nested cards.",
    },
    {
      key: 'accessibility',
      title: 'Accessibility',
      descriptionHtml:
        "<code class='docs-inline-code'>ECard</code> is a visual container and renders no interactive semantics by itself. Add a meaningful region or article label when the card needs standalone structure, preserve heading order, and keep every action keyboard accessible.",
    },
    {
      key: 'props',
      title: 'API reference',
      description: 'Reference the verified public props for ECard. The component exposes default and footer slots and does not emit public events.',
    },
  ],
  labels: {
    controls: [
      { key: 'color', label: 'color' },
      { key: 'elevation', label: 'elevation' },
      { key: 'outlined', label: 'outlined' },
      { key: 'tonal', label: 'tonal' },
      { key: 'depressed', label: 'depressed' },
    ],
    cardText: {
      previewTitle: 'Workspace activity',
      previewSubtitle: 'Updated a few minutes ago',
      previewDescription: 'Review recent changes and continue where your team left off.',
      defaultVariant: 'Default surface',
      defaultVariantDescription: 'A neutral contained card for standard content.',
      outlinedVariant: 'Outlined surface',
      outlinedVariantDescription: 'A visible boundary without added elevation.',
      tonalVariant: 'Tonal surface',
      tonalVariantDescription: 'A subtle semantic tint that remains flat.',
      fullAnatomyTitle: 'Quarterly summary',
      fullAnatomySubtitle: 'April to June',
      fullAnatomyDescription: 'Revenue and engagement moved above the previous period.',
      bodyCopy: 'The default slot supports structured content beyond the built-in text regions.',
      headerMediaTitle: 'Design review',
      headerMediaSubtitle: 'Today at 14:30',
      headerMediaDescription: 'Header media stays connected to the title and subtitle.',
      bodyMediaTitle: 'Saved report',
      bodyMediaSubtitle: 'Analytics workspace',
      bodyMediaDescription: 'Body media can align across the complete content area.',
      actionsTitle: 'Publish changes?',
      actionsDescription: 'Your update will become visible to everyone in the workspace.',
      cancel: 'Cancel',
      publish: 'Publish',
      profileTitle: 'Morgan Lee',
      profileSubtitle: 'Product designer',
      profileDescription: 'Owns the component documentation and interaction guidelines.',
      metricTitle: 'Completion rate',
      metricSubtitle: 'This month',
      metricValue: '84%',
      taskTitle: 'Documentation review',
      taskSubtitle: '3 comments remaining',
      taskAction: 'Open review',
      accessibleTitle: 'Account security',
      accessibleDescription: 'Review active sessions and update your sign-in preferences.',
      accessibleAction: 'Review security',
      accessibleLabel: 'Account security settings',
      apiTitle: 'ECard props',
      apiSlotsTitle: 'Slots and events',
      apiSlotsBody: 'ECard exposes the default slot for body content and the footer slot for related actions or supporting content. It does not emit public events.',
    },
  },
}

export const cardPages = {
  card: cardComponentContent,
} as const

export default cardPages
