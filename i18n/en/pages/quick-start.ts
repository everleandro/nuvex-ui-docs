import type { DocsQuickStartEditorialContent } from '~/types/docs'

export const quickStartEditorialContent: DocsQuickStartEditorialContent = {
  seo: {
    title: 'Quick Start',
    description:
      'Build the recommended initial application structure with Nuvex UI after installation using an app bar, a drawer, and a main content area.',
  },
  hero: {
    title: 'Quick Start',
    description:
      'Build the recommended initial structure for starting an application with Nuvex UI after installation.',
    descriptionHtml:
      'Build the recommended initial structure for starting an application with Nuvex UI after installation. This guide sets up a minimal foundation with an <a href="/docs/component/layout/bar" class="no-underline primary--text">app bar</a>, a <a href="/docs/component/layout/drawer" class="no-underline primary--text">drawer</a>, and a main content area before moving into deeper layout patterns.',
    prerequisitesTitle: 'Before you start',
    actions: {
      backToInstallation: 'Back to Installation',
      openAppShell: 'Open App Shell docs',
    },
    prerequisites: [
      'Nuvex UI is already installed and registered.',
      'Base styles are already loading correctly.',
      'Your app already compiles without setup errors.',
      'You want the recommended starting structure before going deeper into layout patterns.',
    ],
  },
  sections: {
    'recommended-structure': {
      title: 'Recommended initial structure',
      description:
        'By the end of this guide, you will have a simple, usable application base: a top bar, side navigation, and a main content area ready for real screens before you move into deeper layout patterns.',
      items: [
        {
          title: 'App bar',
          description: 'Defines the top band of the application and keeps the main entry point for actions and navigation visible.',
          icon: 'layout',
        },
        {
          title: 'Navigation drawer',
          description: 'Groups the main app destinations into a simple side navigation from the first setup onward.',
          icon: 'layout',
        },
        {
          title: 'Main content area',
          description: 'Reserves a stable content region so screens stay aligned, readable, and ready to grow.',
          icon: 'layout',
        },
        {
          title: 'Menu button',
          description: 'Adds a basic interaction so users can open and close the side navigation from the top bar.',
          icon: 'forms',
        },
      ],
    },
    'create-layout-base': {
      title: 'Create the layout base',
      description:
        'Start with the minimum structural hierarchy: EApp, a top bar, the main region, and a content container. This gives the page a clear application frame before adding navigation behavior.',
    },
    'add-drawer': {
      title: 'Add the navigation drawer',
      description:
        'Add a basic drawer with a few placeholder navigation items. At this stage the goal is structural placement, not production navigation design.',
    },
    'connect-drawer-state': {
      title: 'Connect the drawer state',
      description:
        'Introduce a small local state to control whether the drawer is open. This makes the structure reactive instead of fixed and prepares it for the interaction in the next step.',
    },
    'add-bar-toggle': {
      title: 'Add the menu button to the app bar',
      description:
        'Place a menu button inside EBar and connect it to the drawer state so the top bar can open and close the navigation drawer.',
    },
    'assemble-initial-structure': {
      title: 'Assemble the recommended starting structure',
      description:
        'Now combine the layout pieces into a complete initial setup. This is the baseline structure the framework recommends before you expand into richer navigation, theming, or screen-specific content.',
      calloutDescription:
        'If your app needs navigation variants, persistent regions, or a more complete shell, continue with App Shell after finishing this initial base.',
    },
    'verify-structure': {
      title: 'Verify the structure',
      description:
        'Use this checklist to confirm the initial structure is working before moving into deeper layout or component guides.',
      items: [
        'The app bar renders as part of the application layout.',
        'The drawer opens and closes from the menu button.',
        'The main content sits inside EMain and EContainer.',
        'The main area already shows real content inside the initial structure.',
      ],
    },
    'next-steps': {
      title: 'Recommended next steps',
      description:
        'Once the initial structure is in place, choose the next guide based on whether you want to go deeper into layout, add actions, introduce inputs, or continue with theming.',
      items: [
        {
          title: 'App Shell',
          description: 'Go deeper into layout patterns, structure decisions, and shell variations.',
        },
        {
          title: 'Button',
          description: 'Add the first action to the structure using a simple production-facing component page.',
        },
        {
          title: 'Text Field',
          description: 'Introduce input and start turning the layout into a working flow.',
        },
        {
          title: 'Theming Overview',
          description: 'Continue with tokens, CSS variables, and theme customization once the structure is stable.',
        },
      ],
    },
  },
}

export const quickStartPages = {
  quickStart: quickStartEditorialContent,
} as const

export default quickStartPages