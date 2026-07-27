import type { DocsRuntimeThemeApiSectionKey, DocsWorkflowPageContent } from '~/types/docs'

export const runtimeThemeApiEditorialContent: DocsWorkflowPageContent<DocsRuntimeThemeApiSectionKey> = {
  kind: 'workflow',
  seo: {
    title: 'Runtime Theme API',
    description:
      'Use the runtime theming contract from Nuvex UI to inspect, change, persist, and extend the active theme without rebuilding the system yourself.',
  },
  hero: {
    title: 'Runtime Theme API',
    description:
      'Use the runtime theming contract from Nuvex UI to inspect, change, persist, and extend the active theme without rebuilding the base theme flow yourself.',
    prerequisitesTitle: 'Before you start',
    actions: [
      {
        key: 'back-to-theming-overview',
        label: 'Back to Theming Overview',
      },
      {
        key: 'open-custom-themes',
        label: 'Open Custom Themes',
      },
    ],
    prerequisites: [
      'You already understand that light and dark are the built-in baseline themes.',
      'You want to operate the active theme from app code instead of redefining the whole visual system.',
      'Nuvex UI is already installed and rendering correctly in your project.',
    ],
  },
  sections: {
    'resolve-initial-theme': {
      title: 'How the initial theme resolves',
      description:
        'The library first tries to restore a valid stored theme, then checks system preference, and finally falls back to the configured default or the built-in baseline.',
      calloutDescription:
        'If a stored value does not exist in the real theme registry, the library skips it and continues with the next resolution step.',
    },
    'inspect-theme-state': {
      title: 'Inspect theme state',
      description:
        'Use the runtime state that Nuvex UI already exposes instead of reading DOM attributes or keeping a parallel theme registry in your app.',
    },
    'change-active-theme': {
      title: 'Change the active theme',
      description:
        'Use these operations when the app needs to set a known theme, toggle between options, or return to the library fallback.',
      calloutDescription:
        'setTheme ignores unknown names and preserves the current valid state, but that case should still be treated as an integration mistake in app code.',
    },
    'persist-theme-choice': {
      title: 'Persist the user choice',
      description:
        'Nuvex UI already supports storage by key or a custom adapter, so this step is about connecting the contract rather than reinventing persistence.',
      calloutDescription:
        'If your app needs SSR-aware theme persistence, connect a custom storage adapter here and leave the framework-specific flow to the integration guide.',
    },
    'control-dom-output': {
      title: 'Control the DOM output',
      description:
        'The runtime API does not only track state. It also writes the active theme to the DOM through a configurable attribute and updates color-scheme when possible.',
    },
    'emit-css-variables': {
      title: 'Emit theme tokens as CSS variables',
      description:
        'Enable this output when the active runtime theme also needs to publish token values to CSS without adding another bridge layer in your app.',
      calloutDescription:
        'This option publishes theme tokens from the active runtime theme. It does not replace the decision of when a change belongs in tokens versus CSS overrides.',
    },
    'register-runtime-themes': {
      title: 'Register themes at runtime',
      description:
        'Use runtime registration when the app needs to add or remove named variants during execution without altering the built-in baseline contract.',
      calloutDescription:
        'light and dark are built into the library baseline. They cannot be re-registered or removed through this runtime contract.',
    },
    'app-integration-patterns': {
      title: 'App integration patterns',
      description:
        'Close the page with a few real usage patterns that show how the runtime contract fits into application UI without extra infrastructure.',
    },
    'runtime-mistakes': {
      title: 'Runtime mistakes to avoid',
      description:
        'These are not generic programming mistakes. They come from using the theming contract in the wrong layer or with the wrong assumptions.',
      items: [
        {
          title: 'Solving a token problem with runtime state',
          description: 'If the real change is visual and stable, the next page is probably Design Tokens or CSS Variables, not another runtime branch.',
        },
        {
          title: 'Assuming any string works',
          description: 'setTheme only applies names that are already registered in the library runtime.',
        },
        {
          title: 'Trying to redefine built-ins in runtime',
          description: 'light and dark are part of the baseline contract and are not treated as disposable user-defined themes.',
        },
        {
          title: 'Duplicating the registry in app state',
          description: 'If availableThemes and getThemes() already expose the source of truth, avoid mirroring that list in another store without a real reason.',
        },
      ],
    },
    'next-steps': {
      title: 'Recommended next steps',
      description:
        'Continue with the page that matches your next decision about baseline behavior, visual customization, or adding a new theme variant.',
      items: [
        {
          title: 'Theming Overview',
          description: 'Go back to the decision page if you need to relocate the problem in the correct theming layer.',
        },
        {
          title: 'Light and Dark Themes',
          description: 'Review the official baseline before changing how runtime theme selection behaves in the app.',
        },
        {
          title: 'Custom Themes',
          description: 'Continue here if you need a new named variant with its own identity.',
        },
        {
          title: 'Design Tokens',
          description: 'Move there if the real problem is semantic and visual rather than runtime theme selection.',
        },
      ],
    },
  },
}

export const runtimeThemeApiPages = {
  runtimeThemeApi: runtimeThemeApiEditorialContent,
} as const

export default runtimeThemeApiPages