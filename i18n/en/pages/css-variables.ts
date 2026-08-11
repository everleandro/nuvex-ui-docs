import type { DocsCssVariablesSectionKey, DocsWorkflowPageContent } from '~/types/docs'

export const cssVariablesEditorialContent: DocsWorkflowPageContent<DocsCssVariablesSectionKey> = {
  kind: 'workflow',
  seo: {
    title: 'CSS Variables | Nuvex UI Docs',
    description:
      'Use the CSS custom properties emitted by Nuvex UI when framework.scss is compiled, and keep Sass token overrides for changes that belong to the framework baseline.',
  },
  hero: {
    title: 'CSS Variables',
    description:
      'This page documents the CSS custom properties that Nuvex UI emits from its Sass tokens. Use them when the change belongs in the cascade, in theme scope, or in a local surface override.',
    prerequisitesTitle: 'Generated from Sass tokens',
    actions: [
      {
        key: 'back-to-theming-overview',
        label: 'Back to Theming Overview',
      },
      {
        key: 'open-design-tokens',
        label: 'Open Design Tokens',
      },
    ],
    prerequisites: [
      'The variables emitted by <code class="docs-inline-code">framework.scss</code> are generated from the public Sass tokens exposed by <code class="docs-inline-code">setting.scss</code> and from the semantic maps of the active theme.',
      'If the framework baseline should change for the whole app, go back to <code class="docs-inline-code">Design Tokens</code> and override the source Sass token. If the change only needs cascade or scope, stay at the CSS variable layer.',
      'Declare overrides after loading <code class="docs-inline-code">nuvex-ui/framework.scss</code>, either in <code class="docs-inline-code">:root</code>, in a theme selector such as <code class="docs-inline-code">[data-theme="dark"]</code>, or inside a local container.',
    ],
  },
  sections: {
    'use-in-vue-and-nuxt': {
      title: 'Consume CSS variables in Vue and Nuxt',
      description:
        'Keep CSS variable overrides in your app styles after framework.scss is present. Use root-level overrides for app-wide adjustments, theme selectors for light or dark variations, and local selectors when only one surface needs the change.',
      calloutDescription:
        'If the variable you need does not exist, or the value should become the new framework default everywhere, the correct change usually belongs in Design Tokens rather than in another local CSS override.',
    },
    'next-steps': {
      title: 'Recommended next steps',
      description:
        'Continue with the page that matches the next decision after you validate the cascade override.',
      items: [
        {
          title: 'Design Tokens',
          description: 'Go back there if the override should move to the Sass source of truth instead of staying in app-level CSS.',
        },
        {
          title: 'Light and Dark Themes',
          description: 'Continue there if you need to confirm which variables change with the built-in theme switch.',
        },
        {
          title: 'Runtime Theme API',
          description: 'Move there if the next task is selecting, persisting, or reacting to the active theme at runtime.',
        },
      ],
    },
  },
}

export const cssVariablesPages = {
  cssVariables: cssVariablesEditorialContent,
} as const

export default cssVariablesPages