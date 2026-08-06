import type { DocsDirectivesSectionKey, DocsWorkflowPageContent } from '~/types/docs'

export const directivesEditorialContentEs: DocsWorkflowPageContent<DocsDirectivesSectionKey> = {
  kind: 'workflow',
  seo: {
    title: 'Directives',
    description:
      'Aplica directivas de NuvexUI para feedback ripple, deteccion de click fuera y deteccion de foco fuera en UI interactiva.',
  },
  hero: {
    title: 'Directives',
    description:
      'Usa directivas cuando necesitas comportamiento de interaccion a nivel elemento sin crear logica custom para cada componente.',
    prerequisitesTitle: 'Antes de empezar',
    actions: [
      {
        key: 'open-menu-docs',
        label: 'Abrir docs de Menu',
      },
      {
        key: 'open-dialog-docs',
        label: 'Abrir docs de Dialog',
      },
    ],
    prerequisites: [
      'El plugin de NuvexUI ya esta instalado en tu app.',
      'Necesitas comportamiento de interaccion a nivel elemento, no una nueva abstraccion de componente.',
      'Quieres que click, foco y ripple se comporten de forma consistente en toda la UI.',
    ],
  },
  sections: {
    overview: {
      title: 'Overview',
      description:
        'NuvexUI exporta tres directivas. Elige cada una segun el disparador de interaccion y el comportamiento UX que necesitas.',
      items: [
        {
          title: 'v-ripple',
          description: 'Agrega feedback visual por puntero y teclado en elementos interactivos.',
        },
        {
          title: 'v-click-outside',
          description: 'Ejecuta un handler cuando el usuario hace click fuera del limite objetivo.',
        },
        {
          title: 'v-focus-outside',
          description: 'Ejecuta un handler cuando el foco sale del limite actual.',
        },
      ],
    },
    ripple: {
      title: 'Ripple',
      description:
        'Usa ripple para mostrar feedback visual inmediato en botones, filas de lista y otras superficies accionables.',
      calloutDescription:
        'Configura keyboard: true cuando el elemento sea accionable por teclado para mantener la misma respuesta visual que con puntero.',
    },
    'click-outside': {
      title: 'Click Outside',
      description:
        'Usa click outside para cerrar UI transitoria como menus, popovers o quick actions cuando el usuario interactua en otro lugar.',
    },
    'focus-outside': {
      title: 'Focus Outside',
      description:
        'Usa focus outside cuando el comportamiento debe reaccionar a transiciones de foco, especialmente en flujos de teclado y validacion diferida.',
    },
    'next-steps': {
      title: 'Siguientes pasos recomendados',
      description:
        'Continua con la pagina que mejor encaje con lo que necesitas despues de aplicar directivas.',
      items: [
        {
          title: 'Composables',
          description: 'Usa useTheme, useOverlayService y useBreakpoint para comportamiento guiado por estado.',
        },
        {
          title: 'Menu',
          description: 'Aplica patrones de click fuera en un componente real de navegacion.',
        },
        {
          title: 'Dialog',
          description: 'Aplica comportamiento de focus outside en contexto de overlay.',
        },
        {
          title: 'Nuxt Integration',
          description: 'Continua si tu siguiente necesidad es comportamiento SSR-safe de integracion.',
        },
      ],
    },
  },
}

export const directivesPages = {
  directives: directivesEditorialContentEs,
} as const

export default directivesPages
