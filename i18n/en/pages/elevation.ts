import type { DocsConceptPageContent, DocsElevationSectionKey } from '~/types/docs'

export const elevationEditorialContent: DocsConceptPageContent<DocsElevationSectionKey> = {
  kind: 'concept',
  seo: {
    title: 'Elevation | Nuvex UI Docs',
    description:
      'Learn the public elevation helpers exposed by Nuvex UI, inspect the available depth scale, and copy the class names used to layer surfaces consistently.',
  },
  hero: {
    title: 'Elevation',
    description:
      'Elevation in Nuvex UI is exposed through utility classes that define depth for surfaces, toolbars, and layered panels. Use this page to preview each level, understand the scale, and copy the exact class names used by the framework.',
    actions: [
      {
        key: 'open-spacing-helpers',
        label: 'Open Spacing Helpers',
      },
      {
        key: 'open-flexbox',
        label: 'Open Flexbox',
      },
    ],
  },
  sections: {
    usage: {
      type: 'card-grid',
      key: 'usage',
      title: 'Usage',
      description:
        'Pick an elevation level and inspect the generated class on a neutral surface. Use the result as a copyable token for layered UI.',
      labels: {
        level: 'Elevation level',
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
        xl: 'xl',
        classList: 'Generated classes',
      },
    },
    'class-syntax': {
      type: 'card-grid',
      key: 'class-syntax',
      title: 'Class syntax',
      descriptionHtml:
        'Elevation helpers are expressed as <code class="docs-inline-code">e-elevation--{level}</code>. Apply them on the root surface of the element that should receive depth.',
      description:
        'Elevation helpers are expressed with a simple level suffix and should be applied to the root surface that needs depth.',
      items: [
        {
          title: 'Level suffix',
          description: 'Use xs, sm, md, lg, or xl to express the strength of the shadow.',
        },
        {
          title: 'Root surface',
          description: 'Apply elevation to the outermost container, not to inner content blocks.',
        },
        {
          title: 'Spacing and radius',
          description: 'Combine elevation with rounded corners and internal spacing for a complete surface.',
        },
      ],
      itemsHtml: {
        'Level suffix': 'Use <code class="docs-inline-code">xs</code>, <code class="docs-inline-code">sm</code>, <code class="docs-inline-code">md</code>, <code class="docs-inline-code">lg</code>, or <code class="docs-inline-code">xl</code> to express the strength of the shadow.',
        'Root surface': 'Apply elevation to the outermost container, not to inner content blocks.',
        'Spacing and radius': 'Combine elevation with rounded corners and internal spacing for a complete surface.',
      },
    },
    'scale-reference': {
      type: 'card-grid',
      key: 'scale-reference',
      title: 'Scale reference',
      description:
        'The documented elevation scale moves from the lightest surface lift to the strongest surface depth.',
      items: [
        {
          title: 'xs',
          description: 'Very subtle depth for the lightest layered treatment.',
        },
        {
          title: 'sm',
          description: 'Default subtle elevation for most low-emphasis surfaces.',
        },
        {
          title: 'md',
          description: 'Balanced depth for standard raised surfaces and toolbars.',
        },
        {
          title: 'lg',
          description: 'Clear separation for more prominent floating surfaces.',
        },
        {
          title: 'xl',
          description: 'Strongest documented depth for highly elevated surfaces.',
        },
      ],
    },
    'implementation-examples': {
      type: 'card-grid',
      key: 'implementation-examples',
      title: 'Implementation examples',
      description:
        'Use elevation directly on surfaces that need visual separation from the page background.',
      items: [
        {
          title: 'Compact panel',
          description: 'A small surface with padding and a subtle shadow token.',
        },
        {
          title: 'Toolbar surface',
          description: 'A raised horizontal bar with balanced spacing and stronger separation.',
        },
        {
          title: 'Floating sheet',
          description: 'A layered panel that stands apart from the rest of the interface.',
        },
      ],
    },
    'framework-notes': {
      type: 'list',
      key: 'framework-notes',
      title: 'Framework notes',
      description:
        'These notes summarize how elevation is expected to be used across the utility system.',
      items: [
        'Use the lowest level that still separates the surface from its background.',
        'Pair elevation with rounded corners and spacing instead of overriding box-shadow manually.',
        'Keep elevation consistent with hierarchy so surfaces read predictably across the app.',
      ],
    },
  },
}

export const elevationPages = {
  elevation: elevationEditorialContent,
} as const

export default elevationPages
