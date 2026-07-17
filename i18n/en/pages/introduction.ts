import type { DocsPageContent, DocsWorkflowPageContent } from '~/types/docs'

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
      type: 'nav-card-grid',
      key: 'what-is-nuvex-ui',
      title: 'Explore Nuvex UI by capability',
      description:
        'Nuvex UI is organized around capabilities that cover initial integration, theming, screen structure, and input-heavy product flows. Use these areas as entry points based on what your team needs next.',
      items: [
        {
          title: 'Getting Started',
          description: 'Installation, quick start, and first integration steps to bring Nuvex UI into a new project with minimal setup friction.',
          to: '/docs/getting-started/installation',
          icon: 'gettingStarted',
        },
        {
          title: 'Design System',
          description: 'Colors, typography, iconography, spacing, and surfaces that define the base visual language and support consistent decisions early on.',
          to: '/docs/design-system/colors',
          icon: 'designSystem',
        },
        {
          title: 'Theming',
          description: 'Tokens, CSS variables, and theme APIs for adapting the library to your product identity without losing consistency across components.',
          to: '/docs/theming/overview',
          icon: 'theming',
        },
        {
          title: 'Layout',
          description: 'App shell, bar, drawer, container, and responsive patterns for structuring real screens on a predictable foundation.',
          to: '/docs/component/layout/app-shell',
          icon: 'layout',
        },
        {
          title: 'Forms and Data Entry',
          description: 'Fields, validation, actions, and input patterns for building clear, production-ready business flows.',
          to: '/docs/component/forms/overview',
          icon: 'forms',
        },
        {
          title: 'Advanced Capabilities',
          description: 'Overlays, scheduling, utilities, extensibility, and integration guidance for teams working beyond the base case.',
          to: '/docs/advanced/plugin-api',
          icon: 'advanced',
        },
      ],
      cols: {
        md: 6,
        lg: 4,
      },
    },
    {
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
      itemsHtml: [
        'Install Nuvex UI and verify your base dependencies in <a href="/docs/getting-started/installation" class="docs-page__inline-link">Installation</a>.',
        'Build a first screen using core components and global styles, using a Type B page such as <a href="/docs/component/forms/button" class="docs-page__inline-link">Button</a> as a reference.',
        'Configure themes, layout primitives, and navigation structure with help from <a href="/docs/theming/overview" class="docs-page__inline-link">Theming</a> and <a href="/docs/component/layout/app-shell" class="docs-page__inline-link">Layout</a>.',
        'Expand into component-specific docs as features are implemented, for example <a href="/docs/component/forms/text-field" class="docs-page__inline-link">Text Field</a> or <a href="/docs/component/forms/select" class="docs-page__inline-link">Select</a>.',
      ],
    },
    {
      type: 'list',
      key: 'system-principles',
      title: 'What to expect from component pages',
      description:
        'Use these criteria to read and evaluate Type B pages more clearly before making implementation decisions.',
      ordered: false,
      items: [
        'Playground first: each page should help you try the primary case before moving into variants and API details.',
        'Examples before theory: mid-page sections should show states, composition, and usage patterns that stay close to real implementation.',
        'Validation when it applies: for input components, validation should appear before the API so the flow closes with functional context.',
        'API at the end: use the technical reference to confirm contracts, types, and behavior once you have already chosen the right pattern.',
      ],
    },
  ],
}

export const quickStartContent: DocsWorkflowPageContent = {
  kind: 'workflow',
  seo: {
    title: 'Quick Start',
    description:
      'Build a first useful screen with Nuvex UI after installation using a minimal layout, a primary action, and a first input.',
  },
  hero: {
    title: 'Quick Start',
    description:
      'Build a first useful screen with Nuvex UI after installation. This guide helps you move from a connected library to a small real interface with layout, action hierarchy, and a first input.',
    actions: [
      {
        label: 'Back to Installation',
        to: '/docs/getting-started/installation',
        outlined: true,
      },
      {
        label: 'Open Button docs',
        to: '/docs/component/forms/button',
        variant: 'text',
      },
    ],
  },
  sections: [
    {
      type: 'decision-grid',
      key: 'what-you-will-build',
      title: 'What you will build',
      description:
        'Instead of exploring isolated components first, this page assembles a minimal but realistic screen so you can understand how Nuvex UI starts to feel in a real page.',
      items: [
        {
          title: 'Base layout',
          description: 'A simple screen shell with spacing, a title, and a surface for the main content.',
          icon: 'layout',
        },
        {
          title: 'Primary action',
          description: 'A clear call to action using Button with the right visual hierarchy.',
          icon: 'forms',
        },
        {
          title: 'First input',
          description: 'A basic field that turns the screen into a minimal working flow.',
          icon: 'forms',
        },
      ],
      cols: {
        md: 6,
        lg: 4,
      },
    },
    {
      type: 'checklist',
      key: 'before-you-start',
      title: 'Before you start',
      description:
        'This page assumes that Nuvex UI is already installed and registered in your project. If styles are missing or the app still does not compile, go back to Installation first.',
      callout: {
        color: 'info',
        icon: 'installation',
        description: 'Quick Start builds on top of Installation. It does not replace the setup guide or cover advanced theming and integration decisions yet.',
      },
      items: [
        'Nuvex UI is already installed and registered.',
        'Base styles are already loading correctly.',
        'You want to assemble a first screen, not configure theming or advanced integration yet.',
      ],
    },
    {
      type: 'code-block',
      key: 'create-the-shell',
      title: 'Create the page shell',
      description:
        'Start with a real screen shell instead of isolated widgets. A simple title, a short supporting sentence, and a content surface are enough to establish the structure of the page.',
      snippets: [
        {
          code: `<template>\n  <EContainer class="py-8">\n    <div class="d-flex flex-column gap-6">\n      <div class="d-flex flex-column gap-2">\n        <h1 class="type-h3 text-heading">Create project</h1>\n        <p class="type-body">\n          Set up a small workspace using Nuvex UI building blocks.\n        </p>\n      </div>\n\n      <ECard class="pa-6 d-flex flex-column gap-4">\n        <p class="type-body">Your first screen starts here.</p>\n      </ECard>\n    </div>\n  </EContainer>\n</template>`,
          language: 'vue',
        },
      ],
    },
    {
      type: 'code-block',
      key: 'add-primary-action',
      title: 'Add a primary action',
      description:
        'Once the shell is in place, add a single high-intent action. Starting with one clear button makes hierarchy easier to read than dropping multiple variants too early.',
      snippets: [
        {
          code: `<template>\n  <ECard class="pa-6 d-flex flex-column gap-4">\n    <div class="d-flex justify-end">\n      <EButton color="primary">Create project</EButton>\n    </div>\n  </ECard>\n</template>`,
          language: 'vue',
        },
      ],
    },
    {
      type: 'code-block',
      key: 'add-first-input',
      title: 'Add the first input',
      description:
        'To turn the page into a real starting flow, add one input with a clear purpose. A single field is enough to move from a visual shell into a meaningful interface.',
      snippets: [
        {
          code: `<template>\n  <ECard class="pa-6 d-flex flex-column gap-4">\n    <ETextField\n      label="Project name"\n      placeholder="Operations dashboard"\n    />\n\n    <div class="d-flex justify-end">\n      <EButton color="primary">Create project</EButton>\n    </div>\n  </ECard>\n</template>`,
          language: 'vue',
        },
      ],
    },
    {
      type: 'code-block',
      key: 'assemble-the-screen',
      title: 'Assemble the first screen',
      description:
        'Now put the pieces together in a single, coherent screen. This is the moment where Nuvex UI stops feeling like a library import and starts feeling like a working interface.',
      callout: {
        color: 'success',
        description: 'This is enough for a first real screen: structure, one field, and one action with clear hierarchy.',
      },
      snippets: [
        {
          code: `<template>\n  <EContainer class="py-8">\n    <div class="d-flex flex-column gap-6">\n      <div class="d-flex flex-column gap-2">\n        <h1 class="type-h3 text-heading">Create project</h1>\n        <p class="type-body">\n          Set up a project workspace with a clear starting structure.\n        </p>\n      </div>\n\n      <ECard class="pa-6 d-flex flex-column gap-4">\n        <ETextField\n          label="Project name"\n          placeholder="Operations dashboard"\n        />\n\n        <div class="d-flex justify-end">\n          <EButton color="primary">Create project</EButton>\n        </div>\n      </ECard>\n    </div>\n  </EContainer>\n</template>`,
          language: 'vue',
        },
      ],
    },
    {
      type: 'checklist',
      key: 'verify',
      title: 'Verify the result',
      description:
        'Use this checklist to confirm that the library is not only installed, but already behaving correctly in a real page.',
      items: [
        'The layout renders with spacing and structure instead of raw stacked elements.',
        'The card surface looks correct and follows the base visual system.',
        'The text field renders without registration warnings.',
        'The button appears with primary styling and clear emphasis.',
        'You can now move to component-specific pages with a real mental model of how they fit together.',
      ],
    },
    {
      type: 'next-steps',
      key: 'next-steps',
      title: 'Continue from here',
      description:
        'Once the first screen is working, move into the layer that matches your next decision: component behavior, layout structure, or visual customization.',
      items: [
        {
          title: 'Button',
          description: 'Learn action hierarchy, variants, icons, and common button patterns.',
          to: '/docs/component/forms/button',
          icon: 'forms',
        },
        {
          title: 'Text Field',
          description: 'Go deeper into form input behavior, validation, and slot composition.',
          to: '/docs/component/forms/text-field',
          icon: 'forms',
        },
        {
          title: 'App Shell',
          description: 'Expand from a single screen into a larger page structure with layout primitives.',
          to: '/docs/component/layout/app-shell',
          icon: 'layout',
        },
        {
          title: 'Theming Overview',
          description: 'Customize tokens, colors, and theme behavior after the first screen is stable.',
          to: '/docs/theming/overview',
          icon: 'theming',
        },
      ],
    },
  ],
}

export const introductionPages = {
  introduction: introductionContent,
  quickStart: quickStartContent,
} as const

export default introductionPages