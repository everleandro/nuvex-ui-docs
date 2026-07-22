import type { DocsNuxtIntegrationSectionKey, DocsWorkflowPageContent } from '~/types/docs'

export const nuxtIntegrationEditorialContent: DocsWorkflowPageContent<DocsNuxtIntegrationSectionKey> = {
  kind: 'workflow',
  seo: {
    title: 'Nuxt Integration',
    description:
      'Integrate Nuvex UI into Nuxt with SSR-safe theme persistence, correct style loading, and a plugin setup ready for deeper theming.',
  },
  hero: {
    title: 'Nuxt Integration',
    description:
      'Integrate Nuvex UI into Nuxt with an SSR-safe base, correct style loading, and theme persistence before moving into deeper theming or layout patterns.',
    prerequisitesTitle: 'Before you start',
    actions: [
      {
        key: 'back-to-installation',
        label: 'Back to Installation',
      },
      {
        key: 'open-theming-overview',
        label: 'Open Theming Overview',
      },
    ],
    prerequisites: [
      'You already completed Installation or already have the minimum Nuxt setup working.',
      'Your Nuxt app already compiles with Nuvex UI and the base styles.',
      'You want to resolve real Nuxt integration before going deeper into theming or App Shell.',
    ],
  },
  sections: {
    'what-this-guide-adds': {
      title: 'What this guide adds',
      description:
        'Installation gets the minimum setup working. This guide adds the Nuxt-specific layer so theme, SSR, and initial render behavior stay aligned.',
      items: [
        {
          title: 'Nuxt plugin',
          description: 'Registers Nuvex UI through Nuxt\'s plugin lifecycle instead of treating the setup like a generic Vue entry file.',
        },
        {
          title: 'Style loading order',
          description: 'Confirms the order of styles.css, framework.scss, and app-level overrides inside nuxt.config.ts.',
        },
        {
          title: 'SSR theme persistence',
          description: 'Uses a cookie as the source of truth so the server can resolve the initial theme before hydration.',
        },
        {
          title: 'Client fallback',
          description: 'Keeps localStorage as a client-side fallback without depending on it as the only source of the theme.',
        },
      ],
    },
    'register-nuxt-plugin': {
      title: 'Register the Nuxt plugin',
      description:
        'Start from the Nuxt plugin file where the app mounts Nuvex UI. This is the integration point that later holds theme or storage-specific behavior.',
    },
    'load-styles': {
      title: 'Load styles in nuxt.config.ts',
      description:
        'In Nuxt, style order determines whether framework styles and your own overrides land in the correct cascade from the first render.',
      calloutDescription:
        'Load nuvex-ui/styles.css first, then nuvex-ui/framework.scss, and keep your app styles after both.',
    },
    'persist-theme': {
      title: 'Persist the theme across SSR and client',
      description:
        'If the initial theme only lives in localStorage, the server cannot know it before rendering. Use a cookie as the SSR source and keep the client fallback only for compatibility.',
      calloutDescription:
        'In this guide, the cookie is the source of truth for SSR. localStorage stays as a client-side fallback and legacy compatibility layer.',
    },
    'assemble-nuxt-integration': {
      title: 'Assemble the Nuxt integration',
      description:
        'Now combine the plugin, cookie, and client-side reads in one place so the app starts with a coherent initial theme on both the server and the client.',
      calloutDescription:
        'With this base, the server can already resolve the initial theme and the client can preserve it without depending only on post-hydration updates.',
    },
    'verify-integration': {
      title: 'Verify the integration',
      description:
        'Use this checklist to confirm the Nuxt integration is ready before moving into deeper theming guidance.',
      items: [
        'The app compiles and mounts Nuvex UI from the Nuxt plugin.',
        'Base styles and framework styles apply from nuxt.config.ts in the correct order.',
        'The initial theme no longer depends only on localStorage.',
        'After a page reload, the theme persists without drifting between server and client.',
        'There is no obvious theme flash right after hydration.',
      ],
    },
    'common-pitfalls': {
      title: 'Common pitfalls',
      description:
        'These issues usually appear once a Nuxt setup moves beyond the minimum installation and are worth resolving before continuing with theming.',
      items: [
        {
          title: 'The theme changes after hydration',
          description: 'Verify that the server reads the theme from a cookie and that the client does not depend only on localStorage for the initial value.',
        },
        {
          title: 'Styles do not load in the expected order',
          description: 'Confirm that styles.css loads before framework.scss and that your app overrides load after both.',
        },
        {
          title: 'The theme does not persist between reloads',
          description: 'Check that the client updates the cookie and not only localStorage when the theme changes.',
        },
        {
          title: 'I need deeper theme customization',
          description: 'Move next into Theming Overview, Runtime Theme API, or a dedicated custom themes guide instead of stretching this integration page.',
        },
      ],
    },
    'next-steps': {
      title: 'Recommended next steps',
      description:
        'Once the Nuxt integration is stable, continue with the page that best matches your next decision about theme behavior, runtime control, or layout.',
      items: [
        {
          title: 'Theming Overview',
          description: 'Continue with tokens, CSS variables, and the overall theme model after the Nuxt base is stable.',
        },
        {
          title: 'Runtime Theme API',
          description: 'Go deeper into programmatic theme changes once the SSR-safe storage strategy is already in place.',
        },
        {
          title: 'Light and Dark Themes',
          description: 'Apply the integration to real light and dark theme behavior after the initial theme already resolves correctly.',
        },
        {
          title: 'App Shell',
          description: 'Move into layout structure once the Nuxt setup and theme persistence are already stable.',
        },
      ],
    },
  },
}

export const nuxtIntegrationPages = {
  nuxtIntegration: nuxtIntegrationEditorialContent,
} as const

export default nuxtIntegrationPages