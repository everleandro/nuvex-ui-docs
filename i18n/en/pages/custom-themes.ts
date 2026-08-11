import type { DocsCustomThemesSectionKey, DocsWorkflowPageContent } from '~/types/docs'

export const customThemesEditorialContent: DocsWorkflowPageContent<DocsCustomThemesSectionKey> = {
  kind: 'workflow',
  seo: {
    title: 'Custom Themes | Nuvex UI Docs',
    description:
      'Create and register additional named themes in Nuvex UI without replacing the built-in light and dark baseline.',
  },
  hero: {
    title: 'Custom Themes',
    description:
      'Use this page when the product needs another named theme such as ocean, brand-x, or campaign-dark. The goal is to add a new runtime option without breaking the built-in baseline that Nuvex UI already provides.',
    prerequisitesTitle: 'What the framework already supports',
    actions: [
      {
        key: 'back-to-light-and-dark-themes',
        label: 'Back to Light and Dark Themes',
      },
      {
        key: 'open-runtime-theme-api',
        label: 'Open Runtime Theme API',
      },
    ],
    prerequisites: [
      'Nuvex UI already includes <code class="docs-inline-code">light</code> and <code class="docs-inline-code">dark</code>. A custom theme adds another named option; it does not replace the built-in baseline.',
      'Custom themes are registered through <code class="docs-inline-code">theme.themes</code> at startup or through <code class="docs-inline-code">registerTheme</code> at runtime.',
      'If the product only needs to refine the existing light or dark appearance, stay in <code class="docs-inline-code">Design Tokens</code> or <code class="docs-inline-code">CSS Variables</code> instead of creating another theme name.',
    ],
  },
  sections: {
    'define-theme-object': {
      title: 'Define the theme object',
      description:
        'A custom theme definition stays small: give it a stable name, an optional label, decide whether it behaves as dark, and provide only the runtime token overrides that make that theme distinct.',
    },
    'register-at-startup': {
      title: 'Register custom themes at startup',
      description:
        'Startup registration is the normal path when the extra theme is part of the product shell from the beginning. Add it under theme.themes so it appears immediately in the registry and can participate in initial resolution.',
      calloutDescription:
        'Use startup registration for product-level themes you know in advance. Reach for runtime registration only when themes appear conditionally or are loaded later.',
    },
    'operate-at-runtime': {
      title: 'Operate custom themes at runtime',
      description:
        'Once a custom theme is registered, it behaves like any other theme in the runtime API. You can query it, activate it, list it, or remove it again when the product flow requires that.',
      calloutDescription:
        'This page focuses on the custom-theme lifecycle. If the next problem is toggles, persistence, or active-theme state from components, continue in Runtime Theme API.',
    },
    'built-in-theme-limits': {
      title: 'Respect the built-in theme limits',
      description:
        'The plugin registry is for additional themes, not for redefining light or dark. Built-in themes cannot be re-registered or unregistered through the custom theme path.',
      note:
        'If you need to change how light or dark look, customize the baseline. If you need another named runtime branch, create a custom theme.',
    },
    'next-steps': {
      title: 'Recommended next steps',
      description:
        'Continue with the page that matches the next real task after the custom theme exists in the registry.',
      items: [
        {
          title: 'Runtime Theme API',
          description: 'Go there if the next task is selecting, persisting, or reacting to the active custom theme from code.',
        },
        {
          title: 'Light and Dark Themes',
          description: 'Go back there if the product still fits the built-in model and this custom theme may be unnecessary.',
        },
        {
          title: 'Design Tokens',
          description: 'Continue there if the real change is still a build-time visual baseline decision.',
        },
        {
          title: 'CSS Variables',
          description: 'Continue there if the new theme needs scoped cascade adjustments after registration.',
        },
      ],
    },
  },
}

export const customThemesPages = {
  customThemes: customThemesEditorialContent,
} as const

export default customThemesPages