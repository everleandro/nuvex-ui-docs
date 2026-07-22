import type { DocsConceptPageContent, DocsIntroductionSectionKey } from '~/types/docs'

export const introductionEditorialContent: DocsConceptPageContent<DocsIntroductionSectionKey> = {
  kind: 'concept',
  seo: {
    title: 'Introduction',
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
    'docs-organization': {
      type: 'card-grid',
      key: 'docs-organization',
      title: 'How to navigate the documentation',
      description: 'The documentation is designed to take you from broad orientation to concrete implementation.',
      descriptionHtml:
        'The documentation is designed to take you from broad orientation to concrete implementation. Use this structure to find what you need faster and move through each page without losing context. If you want to see the Type B pattern in action, review <a href="/docs/component/forms/button" class="docs-page__inline-link">Button</a> or <a href="/docs/component/forms/text-field" class="docs-page__inline-link">Text Field</a>, where the flow moves from overview to playground, examples, validation, and API.',
      items: [
        {
          title: 'Start with the right area',
          description: 'Use the main hubs to locate the capability you need: onboarding, visual system, theming, layout, forms, or advanced integration.',
        },
        {
          title: 'Move from overview to playground',
          description: 'On component pages, begin with the hero and usage section to understand scope, try the primary case, and adjust the most important props before comparing variants.',
        },
        {
          title: 'Go deeper with real examples',
          description: 'After the main playground, use the component-specific sections to compare states, composition, icons, integration patterns, and production-facing examples.',
        },
        {
          title: 'Close with validation and API',
          description: 'For input components, review validation before props. Use the API reference at the end to confirm contracts, types, and behavior once you have already chosen the right pattern.',
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
      itemsHtml: [
        'Install Nuvex UI and verify your base dependencies in <a href="/docs/getting-started/installation" class="docs-page__inline-link">Installation</a>.',
        'Build a first screen using core components and global styles, using a Type B page such as <a href="/docs/component/forms/button" class="docs-page__inline-link">Button</a> as a reference.',
        'Configure themes, layout primitives, and navigation structure with help from <a href="/docs/theming/overview" class="docs-page__inline-link">Theming</a> and <a href="/docs/component/layout/app-shell" class="docs-page__inline-link">Layout</a>.',
        'Expand into component-specific docs as features are implemented, for example <a href="/docs/component/forms/text-field" class="docs-page__inline-link">Text Field</a> or <a href="/docs/component/forms/select" class="docs-page__inline-link">Select</a>.',
      ],
    },
    'system-principles': {
      type: 'list',
      key: 'system-principles',
      title: 'What to expect from component pages',
      description:
        'Use these criteria to read and evaluate Type B pages more clearly before making implementation decisions.',
      items: [
        'Playground first: each page should help you try the primary case before moving into variants and API details.',
        'Examples before theory: mid-page sections should show states, composition, and usage patterns that stay close to real implementation.',
        'Validation when it applies: for input components, validation should appear before the API so the flow closes with functional context.',
        'API at the end: use the technical reference to confirm contracts, types, and behavior once you have already chosen the right pattern.',
      ],
    },
  },
}

export const introductionPages = {
  introduction: introductionEditorialContent,
} as const

export default introductionPages