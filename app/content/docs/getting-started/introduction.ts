import type { DocsPageContent } from '../types'

export const introductionContent: DocsPageContent = {
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
        label: 'Start with Installation',
        to: '/docs/getting-started/installation',
        outlined: true,
      },
      {
        label: 'Open Quick Start',
        to: '/docs/getting-started/quick-start',
        variant: 'text',
        outlined: false,
      },
    ],
  },
  sections: [
    {
      type: 'card-grid',
      key: 'what-is-nuvex-ui',
      title: 'What is Nuvex UI',
      description:
        'Nuvex UI combines reusable components, layout primitives, and theming tools so teams can build product UI with a shared visual and interaction language.',
      items: [
        {
          title: 'UI Components',
          description: 'Production-ready components for forms, overlays, navigation, and data-focused interfaces.',
        },
        {
          title: 'Theme System',
          description: 'Token-driven customization using CSS variables, color scales, and light or dark theme control.',
        },
        {
          title: 'Layout Primitives',
          description:
            'App shell building blocks such as bars, drawers, containers, and grid utilities for responsive screens.',
        },
        {
          title: 'Developer Experience',
          description: 'Composable APIs and predictable patterns that reduce glue code and support long-term maintenance.',
        },
      ],
      cols: {
        md: 6,
        lg: 3,
      },
    },
    {
      type: 'card-grid',
      key: 'docs-organization',
      title: 'How the documentation is organized',
      description:
        'The docs are organized by capability, from onboarding to advanced integration, so you can move from concepts to implementation without context switching.',
      items: [
        {
          title: 'Getting Started',
          description: 'Installation, quick setup, and first integration steps for new projects.',
        },
        {
          title: 'Design System + Theming',
          description: 'Visual foundations, token strategy, and runtime customization guidelines.',
        },
        {
          title: 'Components + Patterns',
          description: 'Component-level docs with APIs, usage patterns, and integration recommendations.',
        },
        {
          title: 'Advanced + Community',
          description: 'Plugin APIs, SSR guidance, extension points, roadmap, and contribution workflow.',
        },
      ],
      cols: {
        md: 6,
        lg: 3,
      },
    },
    {
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
    },
    {
      type: 'list',
      key: 'system-principles',
      title: 'System principles',
      description:
        'These principles define how to evaluate components, compose layouts, and keep implementation decisions aligned across teams.',
      ordered: false,
      items: [
        'Consistency first: component behavior should remain predictable across contexts.',
        'Extensibility by design: teams should adapt the system without forking core patterns.',
        'Accessibility by default: semantic markup and keyboard support are baseline requirements.',
        'Pragmatic DX: APIs should optimize implementation speed without hiding critical decisions.',
      ],
    },
    {
      type: 'card-grid',
      key: 'page-structure',
      title: 'What each page will usually contain',
      description:
        'Most documentation pages follow this structure so readers can quickly locate the information they need.',
      items: [
        {
          title: 'Problem and scope',
          description: 'What this capability solves, when to use it, and where it fits in product flows.',
        },
        {
          title: 'API and setup',
          description: 'Props, events, and minimum setup needed for a reliable first implementation.',
        },
        {
          title: 'Usage examples',
          description: 'From minimal samples to production-oriented scenarios with realistic composition.',
        },
        {
          title: 'Best practices and caveats',
          description: 'Accessibility notes, theming guidance, and implementation pitfalls to avoid.',
        },
      ],
      cols: {
        md: 6,
        lg: 3,
      },
    },
  ],
}
