import type { DocsWorkflowPageContent } from '~/types/docs'

type AppShellSectionKey = 'structure' | 'base-template' | 'verify-structure' | 'next-steps'

export const appShellWorkflowContent: DocsWorkflowPageContent<AppShellSectionKey> = {
  kind: 'workflow',
  seo: {
    title: 'App Shell | Nuvex UI Docs',
    description:
      'Set up the base structure of a Nuvex UI application with an app bar, navigation drawer, and main content.',
  },
  hero: {
    title: 'App Shell',
    descriptionHtml:
      "Set up the base application structure with <code class='docs-inline-code'>EApp</code>, <code class='docs-inline-code'>EBar</code>, <code class='docs-inline-code'>EDrawer</code>, and <code class='docs-inline-code'>EMain</code>. These components share one layout context to coordinate the bar, navigation, and content.",
  },
  sections: {
    structure: {
      title: 'Structure',
      description: 'The shell separates the application into regions with clear responsibilities.',
      items: [
        { title: 'EApp', description: 'Creates the layout context shared by every region.' },
        { title: 'EBar', description: 'Contains the application identity, title, and top-level actions.' },
        { title: 'EDrawer', description: 'Contains primary navigation links and menus.' },
        { title: 'EMain and EContainer', description: 'Host the active page and keep its content aligned.' },
      ],
    },
    'base-template': {
      title: 'Base template',
      descriptionHtml:
        "Use this playground as the recommended base template for <code class='docs-inline-code'>EApp</code>, <code class='docs-inline-code'>EBar</code>, <code class='docs-inline-code'>EDrawer</code>, and <code class='docs-inline-code'>EMain</code>. Toggle layout-related props such as <code class='docs-inline-code'>clipped</code> and <code class='docs-inline-code'>fixed</code>, then copy the generated snippet with <code class='docs-inline-code'>NuxtPage</code> inside <code class='docs-inline-code'>EContainer</code>.",
    },
    'verify-structure': {
      title: 'Verify the structure',
      description: 'Before customizing each component, confirm that the base composition works.',
      items: [
        'The bar renders inside the EApp layout context.',
        'The drawer opens and closes through drawerModel.',
        'The active page renders inside EMain and EContainer.',
        'The content needs no manual offsets or padding to compensate for the bar and drawer.',
      ],
    },
    'next-steps': {
      title: 'Next steps',
      description: 'Continue with each region guide when you need to configure its behavior or appearance.',
      items: [
        { title: 'Bar', description: 'Configure the top bar content and behavior.' },
        { title: 'Drawer', description: 'Configure side navigation, state, and variants.' },
        { title: 'Container', description: 'Define the width and alignment of the main content.' },
      ],
    },
  },
}

export const appShellPages = {
  appShell: appShellWorkflowContent,
} as const

export default appShellPages
