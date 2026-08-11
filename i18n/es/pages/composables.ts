import type { DocsComposablesSectionKey, DocsWorkflowPageContent } from '~/types/docs'

export const composablesEditorialContentEs: DocsWorkflowPageContent<DocsComposablesSectionKey> = {
  kind: 'workflow',
  seo: {
    title: 'Composables | Nuvex UI Docs',
    description:
      'Usa composables de NuvexUI para controlar tema en runtime, comportamiento de overlays y estado responsive desde codigo de app.',
  },
  hero: {
    title: 'Composables',
    description:
      'Usa esta pagina para consumo diario de composables en codigo de app cuando el setup de plugin ya esta estable.',
    prerequisitesTitle: 'Antes de empezar',
    actions: [
      {
        key: 'open-plugin-api',
        label: 'Abrir Plugin API',
      },
      {
        key: 'open-runtime-theme-api',
        label: 'Abrir Runtime Theme API',
      },
    ],
    prerequisites: [
      'El setup del plugin ya esta completo y la app ya renderiza con NuvexUI.',
      'Necesitas comportamiento guiado por estado desde codigo de app, no una nueva abstraccion de componente.',
      'Quieres uso practico de useTheme, useOverlayService y useBreakpoint sin duplicar internals de theming.',
    ],
  },
  sections: {
    overview: {
      title: 'Overview',
      description:
        'Estos composables exponen comportamiento runtime que los componentes ya consumen internamente para que tu app coordine estado con los mismos contratos.',
      items: [
        {
          title: 'useTheme',
          description: 'Lee y cambia el estado del tema activo desde controles y flujos de UI en la app.',
        },
        {
          title: 'useOverlayService',
          description: 'Abre, cierra y apila overlays con comportamiento compartido de click fuera, escape, foco y bloqueo de scroll.',
        },
        {
          title: 'useBreakpoint',
          description: 'Ramifica comportamiento de UI con rangos reactivos de viewport alineados al sistema de breakpoints.',
        },
      ],
    },
    'use-theme': {
      title: 'useTheme para controles de app',
      description:
        'Usa este composable para conectar toggles y selectores al estado de tema activo sin crear un store paralelo de theming.',
      calloutDescription:
        'Mantiene aqui las operaciones runtime de consumo. Para resolucion inicial de tema, estrategia de persistencia y registro runtime de temas, continua en Runtime Theme API y Custom Themes.',
    },
    'use-overlay-service': {
      title: 'useOverlayService para capas transitorias',
      description:
        'Usa este composable cuando overlays custom necesitan el mismo comportamiento de lock scroll, foco, escape y z-index que overlays del framework.',
    },
    'use-breakpoint': {
      title: 'useBreakpoint para ramificacion responsive',
      description:
        'Usa rangos reactivos de viewport para ramificar densidad de layout, modo de navegacion y bloques condicionales de UI desde codigo de app.',
    },
    'compose-patterns': {
      title: 'Componer varios composables',
      description:
        'Combina estos composables para controlar un estado de UI coherente en lugar de repartir responsive, overlays y theming en stores desconectados.',
      items: [
        {
          title: 'Una fuente por responsabilidad',
          description: 'Mantiene theming, overlays y breakpoints en su contrato composable y deriva estado de UI con computed.',
        },
        {
          title: 'Preferir composicion sobre eventos cruzados',
          description: 'Conecta estado de pantalla en setup y pasa solo estado derivado a componentes presentacionales.',
        },
        {
          title: 'Limpieza de ciclo de vida explicita',
          description: 'Cuando abras overlays custom, cierrelos en el mismo flujo para evitar entradas stale en el stack.',
        },
        {
          title: 'Evitar reimplementar internals del framework',
          description: 'Si un composable ya expone estado runtime, consumelo directo antes de crear stores globales nuevos.',
        },
      ],
    },
  },
}

export const composablesPages = {
  composables: composablesEditorialContentEs,
} as const

export default composablesPages
