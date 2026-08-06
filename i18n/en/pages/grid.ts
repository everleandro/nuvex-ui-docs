import type { DocsComponentPageContent } from '~/types/docs'

export const gridComponentContent: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Grid',
    description: 'Grid component documentation for Nuvex UI with interactive usage, responsive breakpoints, row modes, nested layouts, and API reference for ERow and ECol.',
  },
  hero: {
    title: 'Grid',
    descriptionHtml:
      "Use <code class='docs-inline-code'>ERow</code> and <code class='docs-inline-code'>ECol</code> to compose responsive structure before applying component-level styling. The grid controls spacing, breakpoint behavior, and column distribution while your content components keep ownership of visuals and semantics.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Usage',
      descriptionHtml:
        "Adjust <code class='docs-inline-code'>gap</code>, row modifiers, and base <code class='docs-inline-code'>cols</code> span to preview how the same content adapts across layout densities.",
    },
    {
      key: 'responsive-breakpoints',
      title: 'Responsive breakpoints',
      descriptionHtml:
        "Combine <code class='docs-inline-code'>cols</code> with breakpoint props such as <code class='docs-inline-code'>md</code> and <code class='docs-inline-code'>lg</code> to define mobile-first spans that expand progressively.",
    },
    {
      key: 'row-modes',
      title: 'Row modes',
      descriptionHtml:
        "Row modifiers control structural rhythm. Use <code class='docs-inline-code'>dense</code> for compact spacing, <code class='docs-inline-code'>equal</code> for uniform sibling widths, and <code class='docs-inline-code'>noGutters</code> when surfaces must align edge-to-edge.",
    },
    {
      key: 'nested-layouts',
      title: 'Nested layouts',
      descriptionHtml:
        "Nest rows inside columns when a content region needs an internal sub-grid. Keep nesting shallow and scoped to the part of the page that truly needs local structure.",
    },
    {
      key: 'props',
      title: 'API reference',
      description: 'Reference the verified public props for ERow and ECol.',
    },
  ],
  labels: {
    controls: [
      { key: 'gap', label: 'gap' },
      { key: 'dense', label: 'dense' },
      { key: 'auto', label: 'auto' },
      { key: 'equal', label: 'equal' },
      { key: 'noGutters', label: 'noGutters' },
      { key: 'cols', label: 'cols' },
    ],
    gridText: {
      previewTitle: 'Grid preview',
      previewDescription: 'Interactive layout sample using three responsive columns.',
      columnA: 'Column A',
      columnB: 'Column B',
      columnC: 'Column C',
      columnDescription: 'Replace these cards with your page sections, stats, or forms.',
      responsiveMainTitle: 'Main content',
      responsiveMainDescription: 'Spans most of the row on medium and large screens.',
      responsiveAsideTitle: 'Sidebar',
      responsiveAsideDescription: 'Stacks below content on mobile and aligns beside it from md.',
      rowModesDenseTitle: 'dense',
      rowModesDenseDescription: 'Tighter gutters for compact interfaces.',
      rowModesEqualTitle: 'equal',
      rowModesEqualDescription: 'Forces sibling columns to share available width.',
      rowModesNoGuttersTitle: 'no-gutters',
      rowModesNoGuttersDescription: 'Removes gutters when cards must touch edges.',
      nestedPrimaryTitle: 'Primary column',
      nestedA: 'Nested A',
      nestedB: 'Nested B',
      nestedRailTitle: 'Support rail',
      nestedRailDescription: 'Use for filters, context, or quick actions.',
      apiRowTitle: 'ERow props',
      apiColTitle: 'ECol props',
      apiSlotsTitle: 'Slots and events',
      apiSlotsBody: 'ERow and ECol expose only the default slot and do not emit public events.',
    },
  },
}

export const gridPages = { grid: gridComponentContent } as const

export default gridPages
