import type { DocsIconConfigurationSectionKey, DocsWorkflowPageContent } from '~/types/docs'

export const iconConfigurationEditorialContent: DocsWorkflowPageContent<DocsIconConfigurationSectionKey> = {
  kind: 'workflow',
  seo: {
    title: 'Icon Configuration',
    description:
      'Configure a consistent icon strategy in Nuvex UI for application UI, internal component defaults, and external icon libraries.',
  },
  hero: {
    title: 'Icon Configuration',
    description:
      'Configure a consistent icon strategy in Nuvex UI for application UI, internal component defaults, and external icon libraries.',
  },
  sections: {
    overview: {
      title: 'Overview',
      description:
        'This page distinguishes between the application icon system and the internal icon defaults required by framework components. These layers can be aligned through configuration, but they should remain separate concerns so application iconography does not depend on framework internals.',
      items: [
        {
          title: 'Application icon system',
          description: 'Define a single icon strategy for product UI and custom components through iconFont or an application-owned SVG registry.',
        },
        {
          title: 'Framework icon defaults',
          description: 'Use the built-in defaults for component behavior, and override them only when those controls must align with the application icon system.',
        },
      ],
    },
    'application-icon-strategy': {
      title: 'Application Icon Strategy',
      description:
        'For application icons, define a single global strategy through iconFont. This keeps EIcon and any component that accepts string icons consistent across pages, custom components, and SSR rendering.',
      calloutDescription:
        'Use baseClass when the library needs a shared root class, prefix when the naming is linear, and resolveClass when one logical icon expands into multiple final classes.',
      items: [
        {
          title: 'baseClass',
          description: 'Adds a shared root class for every class-based icon resolved by the framework.',
        },
        {
          title: 'prefix',
          description: 'Works for libraries with a simple naming convention such as prefix + icon name.',
        },
        {
          title: 'resolveClass',
          description: 'Lets one logical icon name expand into multiple final classes when a library requires it.',
        },
      ],
    },
    'mdi-integration': {
      title: 'MDI Integration',
      description:
        'Material Design Icons is a prefix-based integration. Configure a shared base class and a stable prefix when icon names resolve as prefix + logical name.',
      calloutDescription:
        'MDI is a straightforward integration because class resolution usually follows a stable prefix-based convention.',
      items: [
        {
          title: 'Resolved classes',
          description: 'A logical icon name such as home resolves to the shared base class plus the prefixed icon class.',
        },
        {
          title: 'When to use it',
          description: 'Use this strategy when the application owns a single MDI-based icon vocabulary for product UI and custom components.',
        },
      ],
    },
    'font-awesome-integration': {
      title: 'Font Awesome Integration',
      description:
        'Font Awesome is a composed-class integration. Use resolveClass when one logical icon name must expand into style modifiers and the final icon class.',
      calloutDescription:
        'Font Awesome is a typical resolveClass case because the final output usually combines a style class with the icon-specific class.',
      items: [
        {
          title: 'Resolved classes',
          description: 'One logical icon name expands into a style class plus the final icon class.',
        },
        {
          title: 'When to use it',
          description: 'Use this strategy when the library requires style modifiers or multiple final classes for a single logical icon name.',
        },
      ],
    },
    'internal-framework-icons': {
      title: 'Internal Framework Icons',
      description:
        'The framework includes internal icon defaults so built-in controls can render consistently. These icons support framework behavior and should not define the application icon system.',
      calloutDescription:
        'Internal framework icons and application icons should remain separate layers. If they need to share the same visual language, align them through explicit overrides.',
      items: [
        'Nuvex UI includes internal icons for framework-owned controls such as clear actions, picker triggers, and navigation arrows.',
        'Treat this set as implementation support for built-in components, not as the primary icon source for product screens or custom application UI.',
      ],
    },
    'overriding-framework-icons': {
      title: 'Overriding Framework Icons',
      description:
        'If your application already has its own icon system, use the icons installation option to align internal framework controls with the same visual language.',
      calloutDescription:
        'Override framework defaults when built-in controls should align with the same visual system used by your application icons.',
      items: [
        {
          title: 'Keep one visual language',
          description: 'Override framework defaults when built-in controls should match the same icon vocabulary used by your application.',
        },
        {
          title: 'Do not duplicate sources of truth',
          description: 'Treat the internal framework set as an override target, not as a second icon catalog for product screens.',
        },
      ],
    },
    'per-instance-overrides': {
      title: 'Per-Instance Overrides',
      description:
        'Use the prefix prop on EIcon as a component-local override for class-based string icons. It takes precedence over the global iconFont strategy for that instance only.',
      calloutDescription:
        'Use per-instance prefix overrides for isolated exceptions. If the same mapping appears across multiple screens, move it into iconFont so class resolution stays centralized.',
    },
    'ssr-considerations': {
      title: 'SSR Considerations',
      description:
        'For class-based string icons, configuration is resolved through framework configuration rather than DOM inspection. That keeps server-rendered output aligned with client rendering.',
      calloutDescription:
        'For class-based string icons, the iconFont strategy is configured at framework level, so class resolution no longer depends on reading CSS variables from the DOM during render.',
      items: [
        'Class-based string icon resolution does not require getComputedStyle or document access.',
        'Server-rendered output can resolve icon classes deterministically from framework configuration.',
        'Hydration stays stable because icon class generation no longer depends on runtime CSS inspection.',
      ],
    },
    recommendations: {
      title: 'Recommendations',
      description:
        'These rules help keep application iconography, framework defaults, and SSR behavior coherent over time.',
      items: [
        {
          title: 'Use one application strategy',
          description: 'Choose a single icon strategy for the app and define it globally through iconFont.',
        },
        {
          title: 'Prefer prefix for linear libraries',
          description: 'Libraries such as MDI are usually best expressed as baseClass plus prefix.',
        },
        {
          title: 'Prefer resolveClass for composed libraries',
          description: 'Libraries such as Font Awesome often need multiple classes per icon and should use resolveClass.',
        },
        {
          title: 'Override framework icons deliberately',
          description: 'Only replace internal defaults when you want framework components to align with your application icon system.',
        },
      ],
    },
  },
}

export const iconConfigurationPages = {
  iconConfiguration: iconConfigurationEditorialContent,
} as const

export default iconConfigurationPages
