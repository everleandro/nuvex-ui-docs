import type { DocsColorsSectionKey, DocsConceptPageContent } from '~/types/docs'

export const colorsEditorialContent: DocsConceptPageContent<DocsColorsSectionKey> = {
  kind: 'concept',
  seo: {
    title: 'Colors',
    description:
      'Reference semantic tokens, surface tokens, primitive palettes, and helper classes used to build consistent interfaces in Nuvex UI.',
  },
  hero: {
    title: 'Colors',
    description:
      'Nuvex UI organizes color into semantic tokens for product meaning, surface tokens for structural context, and primitive palettes for tonal range. Use this page to choose the right layer, apply helper classes correctly, and reference the CSS variables behind each token family.',
    actions: [
      {
        key: 'open-theming-overview',
        label: 'Open Theming Overview',
      },
      {
        key: 'open-surfaces',
        label: 'Open Surfaces',
      },
    ],
  },
  sections: {
    'background-helpers': {
      type: 'callout',
      key: 'background-helpers',
      title: 'Background helpers',
      description:
        'Background helpers such as .primary or .success apply background color with matching contrast treatment from the token system. Use them for fast prototyping, status emphasis, and simple UI states without custom CSS.',
      descriptionHtml:
        'Background helpers such as <code class="docs-inline-code">.primary</code> or <code class="docs-inline-code">.success</code> apply background color with matching contrast treatment from the token system. Use them for fast prototyping, status emphasis, and simple UI states without custom CSS.',
    },
    'text-helpers': {
      type: 'callout',
      key: 'text-helpers',
      title: 'Text helpers',
      description:
        'Use --text helpers when the surrounding surface should remain neutral but the content still needs semantic or tonal emphasis. These helpers affect text color, caret color, and SVG fill inheritance.',
      descriptionHtml:
        'Use <code class="docs-inline-code">--text</code> helpers when the surrounding surface should remain neutral but the content still needs semantic or tonal emphasis. These helpers affect text color, caret color, and SVG fill inheritance.',
      labels: {
        previewHtml:
          'Use text color helpers to add emphasis without changing the surrounding surface. Apply <code class="docs-inline-code primary--text">.primary--text</code> for primary actions, <code class="docs-inline-code secondary--text">.secondary--text</code> for supporting information, <code class="docs-inline-code success--text">.success--text</code> for success feedback, <code class="docs-inline-code warning--text">.warning--text</code> for warnings, <code class="docs-inline-code error--text">.error--text</code> for errors, and <code class="docs-inline-code info--text">.info--text</code> for informational states. When a design needs more tonal range, use primitive helpers such as <code class="docs-inline-code blue-500--text">.blue-500--text</code>, <code class="docs-inline-code teal-600--text">.teal-600--text</code>, <code class="docs-inline-code purple-400--text">.purple-400--text</code>, and <code class="docs-inline-code neutral-700--text">.neutral-700--text</code>.',
      },
    },
    'palette-reference': {
      type: 'card-grid',
      key: 'palette-reference',
      title: 'Palette reference',
      description:
        'Nuvex UI exposes semantic tokens for product meaning, surface tokens for foundational UI layers, and primitive palettes for broader tonal control. Start with semantic and surface layers for consistency, then use primitive scales when custom visual nuance is required.',
      labels: {
        semantic: 'Semantic colors',
        semanticDescription: 'Use these tokens for actions, feedback, and status meanings that should remain consistent across the product.',
        surfaces: 'Surface and utility tokens',
        surfacesDescription: 'Use these tokens for canvas, panels, fields, labels, borders, and disabled states so structural surfaces stay predictable across themes.',
        primitive: 'Primitive palettes',
        primitiveDescription: 'Use primitive palettes when a design needs additional tonal range beyond the semantic layer, whether through helper classes or direct CSS variable references.',
      },
    },
  },
}

export const colorsPages = {
  colors: colorsEditorialContent,
} as const

export default colorsPages