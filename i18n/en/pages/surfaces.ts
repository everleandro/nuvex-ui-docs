import type { DocsConceptPageContent, DocsSurfacesSectionKey } from '~/types/docs'

export const surfacesEditorialContent: DocsConceptPageContent<DocsSurfacesSectionKey> = {
  kind: 'concept',
  seo: {
    title: 'Surfaces',
    description:
      'Learn how Nuvex UI uses surface tokens to build structural hierarchy, preserve contrast, and keep layout decisions consistent across themes.',
  },
  hero: {
    title: 'Surfaces',
    description:
      'Surfaces define the structural hierarchy of the interface. Use surface-canvas, surface-base, surface-raised, and surface-subtle to separate backgrounds, content containers, and elevated layers without relying on semantic colors. Each surface also establishes its corresponding contrast context so text and icons remain legible across light and dark themes.',
    descriptionHtml:
      'Surfaces define the structural hierarchy of the interface. Use <code class="docs-inline-code">surface-canvas</code>, <code class="docs-inline-code">surface-base</code>, <code class="docs-inline-code">surface-raised</code>, and <code class="docs-inline-code">surface-subtle</code> to separate backgrounds, content containers, and elevated layers without relying on semantic colors. Each surface also establishes its corresponding contrast context so text and icons remain legible across light and dark themes.',
    actions: [
      {
        key: 'open-colors',
        label: 'Open Colors',
      },
      {
        key: 'open-theming-overview',
        label: 'Open Theming Overview',
      },
    ],
  },
  sections: {
    'surface-roles': {
      type: 'card-grid',
      key: 'surface-roles',
      title: 'Surface roles',
      description:
        'Each surface token represents a different level of structural emphasis. Choose the token that matches the role of the layer, not the decoration you want to add.',
      items: [
        {
          title: 'surface-canvas',
          description: 'Use for the application background and the main viewport layer.',
        },
        {
          title: 'surface-base',
          description: 'Use for default content containers such as cards, panels, and primary sections.',
        },
        {
          title: 'surface-raised',
          description: 'Use for persistent or elevated UI layers that need clearer separation from the base surface.',
        },
        {
          title: 'surface-subtle',
          description: 'Use for light emphasis and supporting areas. Avoid using it as the dominant structural background of a page.',
        },
      ],
    },
    'contrast-pairing': {
      type: 'callout',
      key: 'contrast-pairing',
      title: 'Contrast pairing',
      description:
        'Surfaces are not background-only tokens. Each one is paired with a corresponding contrast color so foreground content remains readable in every theme.',
      body: 'When a layout uses surface-canvas, surface-base, surface-raised, or surface-subtle, text and icons inside that layer should follow the matching contrast context instead of assuming a fixed foreground color. Examples include surface-base with contrast-surface-base and surface-raised with contrast-surface-raised.',
      bodyHtml:
        'When a layout uses <code class="docs-inline-code">surface-canvas</code>, <code class="docs-inline-code">surface-base</code>, <code class="docs-inline-code">surface-raised</code>, or <code class="docs-inline-code">surface-subtle</code>, text and icons inside that layer should follow the matching contrast context instead of assuming a fixed foreground color. Examples include <code class="docs-inline-code">surface-base</code> with <code class="docs-inline-code">contrast-surface-base</code> and <code class="docs-inline-code">surface-raised</code> with <code class="docs-inline-code">contrast-surface-raised</code>.',
    },
    'layering-rule': {
      type: 'callout',
      key: 'layering-rule',
      title: 'How to layer surfaces',
      description: 'Build layouts with a stable visual progression.',
      bodyHtml:
        'Use <code class="docs-inline-code">surface-canvas -&gt; surface-base -&gt; surface-raised -&gt; surface-subtle</code> as the default layering path. Start with the most structural layer and only move upward when the interface needs more separation or emphasis. Avoid jumping from <code class="docs-inline-code">surface-canvas</code> directly to <code class="docs-inline-code">surface-subtle</code> for the main hierarchy of a screen.',
    },
    'recommended-mappings': {
      type: 'list',
      key: 'recommended-mappings',
      title: 'Recommended mappings',
      description:
        'These mappings help keep the system predictable across layouts and components. A dashboard might use surface-canvas for the page background, surface-base for main content, surface-raised for persistent chrome, and surface-subtle only for supporting emphasis.',
      items: [
        'Application background: surface-canvas',
        'Default panels and cards: surface-base',
        'Bars and persistent elevated chrome: surface-raised',
        'Floating drawers or elevated contextual layers: surface-raised',
        'Supporting neutral emphasis blocks: surface-subtle',
      ],
      itemsHtml: {
        'Application background: surface-canvas': 'Application background: <code class="docs-inline-code">surface-canvas</code>',
        'Default panels and cards: surface-base': 'Default panels and cards: <code class="docs-inline-code">surface-base</code>',
        'Bars and persistent elevated chrome: surface-raised': 'Bars and persistent elevated chrome: <code class="docs-inline-code">surface-raised</code>',
        'Floating drawers or elevated contextual layers: surface-raised': 'Floating drawers or elevated contextual layers: <code class="docs-inline-code">surface-raised</code>',
        'Supporting neutral emphasis blocks: surface-subtle': 'Supporting neutral emphasis blocks: <code class="docs-inline-code">surface-subtle</code>',
      },
    },
  },
}

export const surfacesPages = {
  surfaces: surfacesEditorialContent,
} as const

export default surfacesPages