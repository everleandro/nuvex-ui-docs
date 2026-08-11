import type { DocsDesignTokensSectionKey, DocsWorkflowPageContent } from '~/types/docs'

export const designTokensEditorialContent: DocsWorkflowPageContent<DocsDesignTokensSectionKey> = {
  kind: 'workflow',
  seo: {
    title: 'Design Tokens | Nuvex UI Docs',
    description:
      'Reference the Sass token modules exposed by Nuvex UI and override them through assets/styles/variables.scss before framework.scss is compiled.',
  },
  hero: {
    title: 'Design Tokens',
    description:
      'This page documents the public Sass token surface exposed by Nuvex UI through setting.scss and how to override those tokens from assets/styles/variables.scss.',
    prerequisitesTitle: 'From Sass tokens to CSS variables',
    actions: [
      {
        key: 'back-to-theming-overview',
        label: 'Back to Theming Overview',
      },
      {
        key: 'open-css-variables',
        label: 'Open CSS Variables',
      },
    ],
    prerequisites: [
      'Simple Sass tokens exposed by <code class="docs-inline-code">setting.scss</code> are exported as CSS variables using the <code class="docs-inline-code">--e-{token}</code> pattern. For example, <code class="docs-inline-code">$border-radius-root</code> becomes <code class="docs-inline-code">--e-border-radius-root</code>.',
      'Semantic theme maps become variables such as <code class="docs-inline-code">--e-color-{key}</code>, <code class="docs-inline-code">--e-contrast-{key}</code>, and <code class="docs-inline-code">--e-text-{key}</code>, according to the group emitted by <code class="docs-inline-code">framework.scss</code> for <code class="docs-inline-code">light</code> and <code class="docs-inline-code">dark</code> themes.',
      'Primitive palette maps generate variables such as <code class="docs-inline-code">--e-palette-{family}</code>, <code class="docs-inline-code">--e-palette-{family}-{tone}</code>, and their contrast pairs. This page focuses on the Sass tokens that produce those variables; the CSS Variables page covers final cascade usage.',
    ],
  },
  sections: {
    'override-in-vue-and-nuxt': {
      title: 'Override tokens in Vue and Nuxt',
      description:
        'Build-time overrides belong in assets/styles/variables.scss. Configure nuvex-ui/setting.scss there with @use ... with (...), then inject that file before framework.scss is processed in Vue or Nuxt.',
      calloutDescription:
        'This section is about Sass tokens only. The CSS custom properties generated from those tokens are documented separately in the CSS Variables page.',
    },
    'framework-token-reference': {
      title: 'Framework token reference',
      description:
        'Use this grouped reference as the public Sass inventory exposed by nuvex-ui/setting.scss. Each group maps to the tokens you can override from assets/styles/variables.scss before framework.scss is compiled.',
    },
    'next-steps': {
      title: 'Recommended next steps',
      description:
        'Continue with the page that best matches the next action after you choose the correct token family.',
      items: [
        {
          title: 'CSS Variables',
          description: 'Continue here if the next step is a controlled cascade override with variables already exposed by the framework.',
        },
        {
          title: 'Light and Dark Themes',
          description: 'Continue here if you need to understand how the baseline applies across the built-in themes.',
        },
        {
          title: 'Custom Themes',
          description: 'Move there if you already confirmed that the product needs an additional named theme variant.',
        },
        {
          title: 'Runtime Theme API',
          description: 'Go there only if the real problem now is active-theme selection or persistence.',
        },
      ],
    },
  },
}

export const designTokensPages = {
  designTokens: designTokensEditorialContent,
} as const

export default designTokensPages