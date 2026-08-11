import type { DocsConceptPageContent, DocsIntroductionSectionKey } from '~/types/docs'

export const introductionEditorialContent: DocsConceptPageContent<DocsIntroductionSectionKey> = {
  kind: 'concept',
  seo: {
    title: 'Introduction | Nuvex UI Docs',
    description:
      'Introduction to Nuvex UI. Learn what the library provides, how the docs are organized, and the best path to start building.',
  },
  hero: {
    title: 'Introduction',
    description:
      'Nuvex UI is a Vue 3 component system focused on shipping consistent interfaces faster. Use this guide to understand the library, the documentation flow, and the recommended path to production.',
    actions: [
      {
        key: 'start-with-installation',
        label: 'Start with Installation',
      },
      {
        key: 'open-quick-start',
        label: 'Open Quick Start',
      },
    ],
  },
  sections: {
    'what-is-nuvex-ui': {
      type: 'nav-card-grid',
      key: 'what-is-nuvex-ui',
      title: 'Explore Nuvex UI by capability',
      description:
        'Nuvex UI is organized around capabilities that cover initial integration, theming, screen structure, and input-heavy product flows. Use these areas as entry points based on what your team needs next.',
      items: [
        {
          title: 'Getting Started',
          description: 'Installation, quick start, and first integration steps to bring Nuvex UI into a new project with minimal setup friction.',
        },
        {
          title: 'Design System',
          description: 'Colors, typography, iconography, spacing, and surfaces that define the base visual language and support consistent decisions early on.',
        },
        {
          title: 'Theming',
          description: 'Tokens, CSS variables, and theme APIs for adapting the library to your product identity without losing consistency across components.',
        },
        {
          title: 'Layout',
          description: 'App shell, bar, drawer, container, and responsive patterns for structuring real screens on a predictable foundation.',
        },
        {
          title: 'Forms and Data Entry',
          description: 'Fields, validation, actions, and input patterns for building clear, production-ready business flows.',
        },
        {
          title: 'Advanced Capabilities',
          description: 'Overlays, scheduling, utilities, extensibility, and integration guidance for teams working beyond the base case.',
        },
      ],
    },
    'recommended-path': {
      type: 'list',
      key: 'recommended-path',
      title: 'Recommended path to start',
      description:
        'Follow this sequence to go from first install to a production-ready integration with fewer decisions and less rework.',
      ordered: true,
      items: [
        'Install Nuvex UI and verify your base dependencies.',
        'Build a first screen using core components and global styles.',
        'Configure themes, layout primitives, and navigation structure.',
        'Expand into component-specific docs as features are implemented.',
      ],
      itemsHtml: {
        'Install Nuvex UI and verify your base dependencies.': 'Install Nuvex UI and verify your base dependencies in <a href="/docs/getting-started/installation" class="docs-page__inline-link">Installation</a>.',
        'Build a first screen using core components and global styles.': 'Build a first screen using core components and global styles, using a Type B page such as <a href="/docs/component/core-actions/button" class="docs-page__inline-link">Button</a> as a reference.',
        'Configure themes, layout primitives, and navigation structure.': 'Configure themes, layout primitives, and navigation structure with help from <a href="/docs/theming/overview" class="docs-page__inline-link">Theming</a> and <a href="/docs/component/layout/app-shell" class="docs-page__inline-link">Layout</a>.',
        'Expand into component-specific docs as features are implemented.': 'Expand into component-specific docs as features are implemented, for example <a href="/docs/component/form-inputs/text-field" class="docs-page__inline-link">Text Field</a> or <a href="/docs/component/form-inputs/select" class="docs-page__inline-link">Select</a>.',
      },
    },
    'system-principles': {
      type: 'list',
      key: 'system-principles',
      title: 'How component pages help you',
      description:
        'Component pages are structured to help you move from orientation to implementation without guessing what to look at next.',
      items: [
        'Start with the primary example to understand the component in its most common use case before comparing variants.',
        'Use the middle sections to review states, composition, icons, and integration patterns that stay close to real product work.',
        'For input components, check validation and interaction guidance before relying on the API table alone.',
        'Use the API reference last to confirm props, events, slots, and behavior once you already know the pattern you want.',
      ],
    },
  },
}

export const introductionPages = {
  introduction: introductionEditorialContent,
} as const

export default introductionPages