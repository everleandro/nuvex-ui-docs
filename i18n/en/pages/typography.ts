import type { DocsConceptPageContent, DocsTypographySectionKey } from '~/types/docs'

export const typographyEditorialContent: DocsConceptPageContent<DocsTypographySectionKey> = {
  kind: 'concept',
  seo: {
    title: 'Typography',
    description:
      'Reference the public typography classes exposed by Nuvex UI, compare their hierarchy, and copy the exact class usage shown in each example.',
  },
  hero: {
    title: 'Typography',
    description:
      'Typography in Nuvex UI is exposed through public utility classes for hierarchy, interface roles, and specialized text contexts. Use this page to compare each class visually, understand when to apply it, and copy the same markup pattern shown in the snippets.',
    actions: [
      {
        key: 'open-colors',
        label: 'Open Colors',
      },
      {
        key: 'open-surfaces',
        label: 'Open Surfaces',
      },
    ],
  },
  sections: {
    usage: {
      type: 'card-grid',
      key: 'usage',
      title: 'Usage',
      description:
        'These are the core text roles used across product UI. Each card applies a public class directly to a short text sample so you can copy the same pattern into labels, cards, and supporting interface copy.',
    },
    hierarchy: {
      type: 'card-grid',
      key: 'hierarchy',
      title: 'Hierarchy scale',
      description:
        'The heading scale is exposed through .type-h1 to .type-h6. Use it when the semantic HTML tag is not enough or when UI composition requires a heading style on a different element.',
      descriptionHtml:
        'The heading scale is exposed through <code class="docs-inline-code">.type-h1</code> to <code class="docs-inline-code">.type-h6</code>. Use it when the semantic HTML tag is not enough or when UI composition requires a heading style on a different element.',
    },
    'specialized-roles': {
      type: 'card-grid',
      key: 'specialized-roles',
      title: 'Specialized roles',
      descriptionHtml:
        'Some typography roles are meant for narrower contexts such as <code class="docs-inline-code">.type-dialog-title</code> and <code class="docs-inline-code">.type-dialog-lead</code>. Keep them scoped to those UI moments so the broader hierarchy stays predictable.',
      description:
        'Some typography roles are meant for narrower contexts such as dialog titles and supporting dialog copy. Keep them scoped to those UI moments so the broader hierarchy stays predictable.',
    },
  },
}

export const typographyPages = {
  typography: typographyEditorialContent,
} as const

export default typographyPages