import type { DocsConceptPageContent, DocsThemingOverviewSectionKey } from '~/types/docs'

export const themingOverviewEditorialContent: DocsConceptPageContent<DocsThemingOverviewSectionKey> = {
  kind: 'concept',
  seo: {
    title: 'Theming Overview | Nuvex UI Docs',
    description:
      'Identify which theming layer you need to touch in Nuvex UI before moving into a specific implementation guide.',
  },
  hero: {
    title: 'Theming Overview',
    description:
      'Use this page to identify which theming layer you need to touch in Nuvex UI: base themes, runtime, tokens, CSS variables, or custom themes.',
    actions: [
      {
        key: 'open-light-and-dark-themes',
        label: 'Open Light and Dark Themes',
      },
      {
        key: 'open-runtime-theme-api',
        label: 'Open Runtime Theme API',
      },
    ],
  },
  sections: {
    'what-theming-covers': {
      type: 'card-grid',
      key: 'what-theming-covers',
      title: 'What Theming covers',
      description:
        'Theming starts once the library is already installed and rendering correctly, and now you need to adapt the appearance, control the active theme, or extend the system with new variants.',
      items: [
        {
          title: 'Base themes',
          description: 'Explains what already exists in light and dark before you try to redefine the system.',
        },
        {
          title: 'Runtime control',
          description: 'Lets you read, change, or persist the active theme from application code.',
        },
        {
          title: 'Design tokens',
          description: 'Help you decide which semantic value should change when you adjust color, surface, or brand intent.',
        },
        {
          title: 'CSS variables',
          description: 'Handle cascade overrides when the adjustment does not require a new theme.',
        },
        {
          title: 'Custom themes',
          description: 'Apply when the product needs an additional named variant beyond light and dark.',
        },
      ],
    },
    'theme-model-overview': {
      type: 'card-grid',
      key: 'theme-model-overview',
      title: 'How to think about the theme system',
      description:
        'The right way to understand Theming is not as isolated features, but as layers: first the baseline, then active-theme selection, then customization.',
      items: [
        {
          title: '1. Start from the baseline',
          description: 'Nuvex UI already includes light and dark. That is the initial contract of the system.',
        },
        {
          title: '2. Resolve the active theme',
          description: 'The initial theme can come from a stored preference, the system, or a configured default.',
        },
        {
          title: '3. Decide whether the change is operational or visual',
          description: 'If you need to switch or persist the theme, you are in runtime. If you need to change how it looks, you are probably in tokens or CSS variables.',
        },
        {
          title: '4. Adjust the right layer',
          description: 'Not every visual change needs a new theme. Sometimes tokens are enough; sometimes CSS variables are enough.',
        },
        {
          title: '5. Create a new theme only when needed',
          description: 'A custom theme makes sense when the product needs another variant with its own identity, not when you are only refining the baseline.',
        },
      ],
    },
    'default-behavior': {
      type: 'list',
      key: 'default-behavior',
      title: 'Default behavior',
      description:
        'Before you customize anything, it helps to know which behavior already exists without additional configuration.',
      items: [
        'Nuvex UI already includes `light` and `dark` themes out of the box.',
        'The initial theme can resolve from storage, system preference, or a configured default theme depending on what is available.',
        'Runtime theming is optional. A project can stay on the built-in baseline and still be fully valid.',
      ],
      itemsHtml: {
        'Nuvex UI already includes `light` and `dark` themes out of the box.': 'Nuvex UI already includes <code class="docs-inline-code">light</code> and <code class="docs-inline-code">dark</code> themes out of the box.',
      },
    },
    'choose-your-path': {
      type: 'nav-card-grid',
      key: 'choose-your-path',
      title: 'Choose the next guide',
      description:
        'Continue according to the kind of change you need to make.',
      items: [
        {
          title: 'I want to understand light and dark',
          description: 'Go to Light and Dark Themes if you first need to adopt the built-in baseline correctly.',
        },
        {
          title: 'I want to change the theme from code',
          description: 'Go to Runtime Theme API if you need a toggle, a selector, or runtime persistence.',
        },
        {
          title: 'I want to choose the right semantic layer',
          description: 'Go to Design Tokens if the change involves color, surfaces, or brand intent.',
        },
        {
          title: 'I want to override in CSS',
          description: 'Go to CSS Variables if the change belongs in the cascade rather than in theme registration.',
        },
        {
          title: 'I want to add a new variant',
          description: 'Go to Custom Themes if the product needs an additional named theme.',
        },
      ],
    },
    'build-time-vs-runtime': {
      type: 'card-grid',
      key: 'build-time-vs-runtime',
      title: 'Build-time vs runtime',
      description:
        'Most theming mistakes happen when you solve a real problem in the wrong layer. If the change modifies the default visual identity, think build-time. If it changes which theme is active during use, think runtime.',
      items: [
        {
          title: 'Build-time customization',
          description: 'Use this layer when you want to define the visual baseline before the app runs: Sass variables, token seeds, and stylesheet ordering.',
        },
        {
          title: 'Runtime customization',
          description: 'Use this layer when the app needs to select, change, or persist the active theme while users interact with the interface.',
        },
      ],
    },
    'common-mistakes': {
      type: 'list',
      key: 'common-mistakes',
      title: 'Mistakes worth avoiding',
      description:
        'These mistakes usually come from mixing layers or using the wrong page to solve the problem.',
      items: [
        'Changing CSS variables first when the real decision should have been made at the token level.',
        'Creating a brand-new theme when the product only needed to adjust light and dark.',
        'Treating runtime and build-time as if they solved the same kind of problem.',
      ],
    },
  },
}

export const themingOverviewPages = {
  overview: themingOverviewEditorialContent,
} as const

export default themingOverviewPages