import type { DocsConceptPageContent, DocsSpacingSectionKey } from '~/types/docs'

export const spacingEditorialContent: DocsConceptPageContent<DocsSpacingSectionKey> = {
  kind: 'concept',
  seo: {
    title: 'Spacing',
    description:
      'Learn the public spacing helpers exposed by Nuvex UI, inspect their syntax, and preview margin and padding classes with the framework spacing scale.',
  },
  hero: {
    title: 'Spacing',
    description:
      'Spacing in Nuvex UI is exposed through public utility classes for margin, padding, and gap. Use this page to inspect the helper syntax, preview the supported direction modifiers, and copy framework-ready examples built on the documented scale.',
    actions: [
      {
        key: 'open-colors',
        label: 'Open Colors',
      },
      {
        key: 'open-typography',
        label: 'Open Typography',
      },
    ],
  },
  sections: {
    usage: {
      type: 'card-grid',
      key: 'usage',
      title: 'Usage',
      description:
        'Preview margin and padding helpers against the framework spacing scale. Adjust direction and size to generate the exact classes used by the rendered example.',
      labels: {
        paddingDirection: 'Padding direction',
        paddingSize: 'Padding size',
        marginDirection: 'Margin direction',
        marginSize: 'Margin size',
        all: 'All',
        horizontal: 'Horizontal',
        vertical: 'Vertical',
        top: 'Top',
        right: 'Right',
        bottom: 'Bottom',
        left: 'Left',
        marginClass: 'Margin class',
        paddingClass: 'Padding class',
        previewTitle: 'Rendered helper preview',
        previewBody: 'Change the selectors to inspect how each helper maps to the generated class name.',
      },
    },
    'class-syntax': {
      type: 'card-grid',
      key: 'class-syntax',
      title: 'Class syntax',
      descriptionHtml:
        'Spacing helpers combine a property prefix, an optional direction modifier, and a scale value. Use <code class="docs-inline-code">m-*</code> for margin, <code class="docs-inline-code">p-*</code> for padding, and directional variants when you want to scope the rule to a subset of sides.',
      description:
        'Spacing helpers combine a property prefix, an optional direction modifier, and a scale value. Use margin and padding prefixes directly, then add a direction only when needed.',
      items: [
        {
          title: 'All sides',
          description: 'Use m-{n} and p-{n} to apply spacing on all sides of an element.',
        },
        {
          title: 'Axis modifiers',
          description: 'Use mx-{n}, my-{n}, px-{n}, and py-{n} for horizontal or vertical spacing.',
        },
        {
          title: 'Side modifiers',
          description: 'Use mt-{n}, mr-{n}, mb-{n}, ml-{n} and the equivalent padding helpers for a single side.',
        },
        {
          title: 'Negative margin',
          description: 'Negative helpers are available only for margin, such as m-n2 and ml-n4.',
        },
      ],
      itemsHtml: {
        'All sides': 'Use <code class="docs-inline-code">m-{n}</code> and <code class="docs-inline-code">p-{n}</code> to apply spacing on all sides of an element.',
        'Axis modifiers': 'Use <code class="docs-inline-code">mx-{n}</code>, <code class="docs-inline-code">my-{n}</code>, <code class="docs-inline-code">px-{n}</code>, and <code class="docs-inline-code">py-{n}</code> for horizontal or vertical spacing.',
        'Side modifiers': 'Use <code class="docs-inline-code">mt-{n}</code>, <code class="docs-inline-code">mr-{n}</code>, <code class="docs-inline-code">mb-{n}</code>, <code class="docs-inline-code">ml-{n}</code> and the equivalent padding helpers for a single side.',
        'Negative margin': 'Negative helpers are available only for margin, such as <code class="docs-inline-code">m-n2</code> and <code class="docs-inline-code">ml-n4</code>.',
      },
    },
    'direction-modifiers': {
      type: 'card-grid',
      key: 'direction-modifiers',
      title: 'Direction modifiers',
      description:
        'Direction modifiers are shared across spacing helpers. When no modifier is present, the helper applies to all sides.',
      items: [
        {
          title: 'No suffix',
          description: 'Applies spacing to all sides, for example p-4 or m-2.',
        },
        {
          title: 'x',
          description: 'Applies to the horizontal axis: left and right.',
        },
        {
          title: 'y',
          description: 'Applies to the vertical axis: top and bottom.',
        },
        {
          title: 't, r, b, l',
          description: 'Target a single side: top, right, bottom, or left.',
        },
      ],
      itemsHtml: {
        'No suffix': 'Applies spacing to all sides, for example <code class="docs-inline-code">p-4</code> or <code class="docs-inline-code">m-2</code>.',
        't, r, b, l': 'Target a single side with <code class="docs-inline-code">t</code>, <code class="docs-inline-code">r</code>, <code class="docs-inline-code">b</code>, or <code class="docs-inline-code">l</code>.',
      },
    },
    'scale-reference': {
      type: 'card-grid',
      key: 'scale-reference',
      title: 'Scale reference',
      description:
        'The documented spacing helpers use framework scale values from 0 to 12. Each step maps to the configured spacing base used by the utility generator.',
    },
    'implementation-examples': {
      type: 'card-grid',
      key: 'implementation-examples',
      title: 'Implementation examples',
      description:
        'These examples show spacing helpers written directly in framework markup so the pattern can be copied into views and component templates.',
      items: [
        {
          title: 'Surface padding',
          description: 'Apply padding helpers directly to a content surface or card wrapper.',
        },
        {
          title: 'Section spacing',
          description: 'Use directional margin helpers to separate consecutive blocks of content.',
        },
        {
          title: 'Item gaps',
          description: 'Gap helpers belong to the same utility layer and work well for repeated inline or stacked children.',
        },
      ],
    },
    'framework-notes': {
      type: 'list',
      key: 'framework-notes',
      title: 'Framework notes',
      description:
        'These notes document framework behavior that is useful when reading or generating spacing helpers in a Nuvex UI project.',
      items: [
        'Spacing helpers are generated by the shared utility stylesheet rather than by individual components.',
        'The documented public scale for this page runs from 0 through 12.',
        'Margin helpers support negative values through the n suffix, such as m-n2 and mx-n4.',
        'Gap helpers follow the same numeric scale through gap-{n}, gap-x-{n}, and gap-y-{n}.',
      ],
      itemsHtml: {
        'Margin helpers support negative values through the n suffix, such as m-n2 and mx-n4.': 'Margin helpers support negative values through the <code class="docs-inline-code">n</code> suffix, such as <code class="docs-inline-code">m-n2</code> and <code class="docs-inline-code">mx-n4</code>.',
        'Gap helpers follow the same numeric scale through gap-{n}, gap-x-{n}, and gap-y-{n}.': 'Gap helpers follow the same numeric scale through <code class="docs-inline-code">gap-{n}</code>, <code class="docs-inline-code">gap-x-{n}</code>, and <code class="docs-inline-code">gap-y-{n}</code>.',
      },
    },
  },
}

export const spacingPages = {
  spacing: spacingEditorialContent,
} as const

export default spacingPages