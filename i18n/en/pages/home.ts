import type { DocsConceptPageContent, DocsHomeSectionKey } from '~/types/docs'

export const homeEditorialContent: DocsConceptPageContent<DocsHomeSectionKey> = {
  kind: 'concept',
  seo: {
    title: 'Nuvex UI Docs',
    description:
      'Landing page for Nuvex UI documentation. Start with installation, jump into components, and preview the kind of product surfaces the framework can support.',
  },
  hero: {
    eyebrow: 'Nuvex UI',
    title: 'Product UI with Nuvex',
    description:
      'Nuvex UI combines layout, forms, overlays, navigation, and theming for Vue 3 and Nuxt. Start fast, scale consistently, and ship production-ready screens.',
    pills: ['Vue 3', 'Nuxt', 'Design System', 'Production docs'],
    actions: [
      {
        key: 'open-quick-start',
        label: 'Quick Start',
      },
      {
        key: 'review-installation',
        label: 'Installation',
      },
      {
        key: 'browse-components',
        label: 'Components',
      },
    ],
  },
  sections: {
    'entry-points': {
      type: 'nav-card-grid',
      key: 'entry-points',
      title: 'Choose the right doorway into the docs',
      description:
        'The landing should get people into action fast. These entry points cover setup, first render, component discovery, and the system-level decisions that usually follow.',
      items: [
        {
          title: 'Quick Start',
          description: 'Move from package install to a first composed screen with the shortest path through the docs.',
        },
        {
          title: 'Installation',
          description: 'Verify package setup, plugin registration, styles, and the first render contract before going deeper.',
        },
        {
          title: 'Components',
          description: 'Browse production-facing building blocks for actions, forms, layout, navigation, overlays, and scheduling.',
        },
        {
          title: 'Theming and Layout',
          description: 'Shape tokens, surfaces, and app structure early so the rest of the implementation scales cleanly.',
        },
      ],
    },
    'quick-start-showcase': {
      type: 'callout',
      key: 'quick-start-showcase',
      title: 'Quick Start',
      description:
        'Start with a simple install and move quickly to first render. This block acts as a bridge from the landing page into the full integration guide.',
      body: 'Install Nuvex UI from npm and integrate the components you need in your Vue app without heavy setup for the first screen.',
      labels: {
        panelTitle: 'So simple to use',
        commandLabel: 'Install package',
      },
    },
    'theming-showcase': {
      type: 'callout',
      key: 'theming-showcase',
      title: 'Theming',
      description:
        'Customize your visual system without breaking consistency across components. Adjust tokens and colors from a stable base as your brand evolves.',
      body: 'Nuvex UI lets you define themes, switch styles, and keep a coherent visual identity across the application.',
      labels: {
        panelTitle: 'Your design system',
        cardTitle: 'Edit profile',
        cardSubtitle: 'Update your account details',
        fieldName: 'Name',
        fieldNamePlaceholder: 'Enter theme name',
        fieldLastName: 'Last name',
        fieldLastNamePlaceholder: 'Enter last name',
        switchLabel: 'Enable dark mode',
        cancel: 'Cancel',
        save: 'Save',
      },
    },
    'preview-canvas': {
      type: 'callout',
      key: 'preview-canvas',
      title: 'Product preview area',
      description:
        'This section reserves space for an embedded dashboard preview. In the first iteration, the layout establishes hierarchy, aspect ratio, and surrounding copy without wiring the live iframe yet.',
      body: 'Use this area later for an iframe that showcases a simple dashboard built with cards, bars, navigation, filters, and scheduling widgets.',
      labels: {
        badge: 'Preview surface',
        status: 'Iframe slot reserved',
        frameTitle: 'Dashboard demo placeholder',
        frameDescription: 'The live embed will sit inside this card once the supporting example is ready.',
        shellLabel: 'Embedded app area',
        noteTitle: 'Why reserve it now',
        noteBody: 'The placeholder lets the landing absorb the future demo without having to redesign spacing, proportions, or the information flow around it.',
      },
    },
    'recommended-flow': {
      type: 'list',
      key: 'recommended-flow',
      title: 'Suggested documentation path',
      description:
        'A landing page like this should not only attract attention; it should also reduce navigation friction. This order keeps teams moving from setup into real implementation decisions.',
      ordered: true,
      items: [
        'Confirm package setup and first render in Installation.',
        'Use Quick Start to assemble the first screen and verify base layout primitives.',
        'Browse Components to pick the pieces needed for the immediate feature surface.',
        'Return to Theming and Layout once the screen exists and needs system-level polish.',
      ],
      labels: {
        asideTitle: 'Good landing targets',
        asideBody: 'If the design needs one more support area later, this section can expand into release highlights, migration notes, or a compact roadmap card without changing the home structure.',
      },
    },
  },
}

export const homePages = {
  home: homeEditorialContent,
} as const

export default homePages