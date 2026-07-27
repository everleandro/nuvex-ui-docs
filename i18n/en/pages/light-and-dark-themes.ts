import type { DocsLightAndDarkThemesSectionKey, DocsWorkflowPageContent } from '~/types/docs'

export const lightAndDarkThemesEditorialContent: DocsWorkflowPageContent<DocsLightAndDarkThemesSectionKey> = {
  kind: 'workflow',
  seo: {
    title: 'Light and Dark Themes',
    description:
      'Understand the built-in light and dark themes in Nuvex UI, how the initial theme is resolved, and how to customize the baseline without creating a new theme variant.',
  },
  hero: {
    title: 'Light and Dark Themes',
    description:
      'This page explains the baseline theming behavior that Nuvex UI already brings into your app. Use it to adopt the built-in light and dark themes correctly before you move to runtime controls or custom themes.',
    prerequisitesTitle: 'What the framework already gives you',
    actions: [
      {
        key: 'back-to-theming-overview',
        label: 'Back to Theming Overview',
      },
      {
        key: 'open-runtime-theme-api',
        label: 'Open Runtime Theme API',
      },
    ],
    prerequisites: [
      'Nuvex UI always registers <code class="docs-inline-code">light</code> and <code class="docs-inline-code">dark</code> as built-in themes.',
      'The theme plugin is optional. A project can stay on the built-in baseline and still have a complete theming setup.',
      'If you only need to refine how light or dark look, the normal path is <code class="docs-inline-code">Design Tokens</code> or <code class="docs-inline-code">CSS Variables</code>, not a new named theme.',
    ],
  },
  sections: {
    'built-in-theme-baseline': {
      title: 'Built-in theme baseline',
      description:
        'The framework starts with a real baseline, not an empty hook. Light and dark are always present, carry the official surface hierarchy, and are the default starting point for almost every product integration.',
      items: [
        'Light and dark are already registered before you add any custom theme.',
        'The built-in surface hierarchy is shared across both themes and acts as the framework default visual baseline.',
        'You can ship a complete app without registering another named theme if the product only needs the built-in model.',
      ],
    },
    'initial-theme-resolution': {
      title: 'Initial theme resolution',
      description:
        'The initial theme is resolved in a strict order: persisted value first, then system preference, then configured defaultTheme, and finally the built-in fallback. This matters when the app seems to start in a different theme than the one you expected.',
      calloutDescription:
        'If your startup behavior is wrong, check the resolution order before adding more runtime logic. Most mismatches come from storage or system preference winning earlier than defaultTheme.',
      items: [
        {
          title: '1. Persisted theme wins first',
          description: 'If storage is enabled and it returns a registered theme, Nuvex UI starts there before checking anything else.',
        },
        {
          title: '2. System preference wins next',
          description: 'If there is no stored theme and system detection is enabled, prefers-color-scheme resolves to light or dark when those themes exist.',
        },
        {
          title: '3. defaultTheme is only the next fallback',
          description: 'defaultTheme is used after storage and system preference, not before them.',
        },
        {
          title: '4. Built-in light is the final safety net',
          description: 'If nothing else resolves and light exists, the framework falls back to light as the last baseline.',
        },
      ],
    },
    'dom-theme-contract': {
      title: 'DOM theme contract',
      description:
        'When a theme becomes active, Nuvex UI writes the theme attribute to documentElement and, when isDark is known, also applies the corresponding color-scheme. This is the contract your app CSS and theme-specific selectors consume.',
    },
    'adopt-in-vue-and-nuxt': {
      title: 'Adopt light and dark in Vue and Nuxt',
      description:
        'The normal setup is small: keep the built-in themes, choose whether storage and system preference are enabled, and define defaultTheme only when the product needs a different startup baseline.',
      calloutDescription:
        'This page is about consuming the built-in baseline. If the next task is toggling, persisting, or reacting to theme changes from components, continue with Runtime Theme API.',
    },
    'customize-light-and-dark': {
      title: 'Customize light and dark without creating a new theme',
      description:
        'Use Sass tokens to change the framework baseline at build time, or CSS variables when the override belongs in the cascade. Do not try to re-register light or dark through theme options just to restyle them.',
      calloutDescription:
        'Built-in themes are not replaced through the plugin themes registry. Their visual customization belongs to Design Tokens and CSS Variables.',
      items: [
        {
          title: 'Design Tokens',
          description: 'Change the framework baseline at build time when light and dark should start from different Sass token values.',
        },
        {
          title: 'CSS Variables',
          description: 'Stay in the cascade when the override belongs to app scope, theme selectors, or a local surface adjustment.',
        },
      ],
    },
    'stay-on-base-themes': {
      title: 'When to stay on the base themes',
      description:
        'Stay on light and dark when the product still fits the built-in theme model and only needs visual refinement. Move to custom themes only when you need an additional named variant with its own identity and runtime selection path.',
      note:
        'Move to custom themes only when the product needs another named runtime option. If the need is only visual refinement, keep light and dark and customize the baseline instead.',
    },
    'next-steps': {
      title: 'Recommended next steps',
      description:
        'Continue with the page that matches the next real theming change after the built-in baseline is stable.',
      items: [
        {
          title: 'Runtime Theme API',
          description: 'Go there if the next problem is toggling, persisting, or reacting to the active theme from code.',
        },
        {
          title: 'Design Tokens',
          description: 'Continue there if the framework baseline itself needs a build-time Sass adjustment.',
        },
        {
          title: 'CSS Variables',
          description: 'Continue there if the change belongs in the cascade or inside a theme-specific selector.',
        },
        {
          title: 'Custom Themes',
          description: 'Move there only when the product really needs another named theme beyond light and dark.',
        },
      ],
    },
  },
}

export const lightAndDarkThemesPages = {
  lightAndDarkThemes: lightAndDarkThemesEditorialContent,
} as const

export default lightAndDarkThemesPages