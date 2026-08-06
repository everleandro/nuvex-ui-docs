import type { DocsPluginApiSectionKey, DocsWorkflowPageContent } from '~/types/docs'

export const pluginApiEditorialContentEs: DocsWorkflowPageContent<DocsPluginApiSectionKey> = {
  kind: 'workflow',
  seo: {
    title: 'Plugin API',
    description:
      'Configura las opciones del plugin de NuvexUI enfocadas en internacionalizacion y estrategia de registro de componentes.',
  },
  hero: {
    title: 'Plugin API',
    description:
      'Usa esta pagina para configurar locale y registro de componentes cuando el setup minimo ya esta completo.',
    prerequisitesTitle: 'Antes de empezar',
    actions: [
      {
        key: 'back-to-installation',
        label: 'Volver a Installation',
      },
      {
        key: 'open-nuxt-integration',
        label: 'Abrir Nuxt Integration',
      },
    ],
    prerequisites: [
      'Ya completaste el setup minimo de Installation.',
      'Necesitas configurar comportamiento de locale o registro personalizado de componentes.',
      'Quieres una navegacion directa hacia paginas dedicadas para iconos y runtime theme.',
    ],
  },
  sections: {
    'configure-locales-and-default-locale': {
      title: 'Configura locales y locale por defecto',
      description:
        'Usa locales para registrar diccionarios adicionales y locale para fijar el codigo inicial usado por helpers de fecha y componentes guiados por fecha.',
    },
    'override-components-registry': {
      title: 'Sobrescribe la estrategia de registro de componentes',
      description:
        'Usa components cuando necesitas un registro acotado en lugar de registrar todo el set publico por defecto.',
      calloutDescription:
        'Si no pasas components, NuvexUI registra su registro publico de componentes por defecto.',
    },
    'next-steps': {
      title: 'Siguientes pasos recomendados',
      description:
        'Continua con la pagina que mejor encaje con tu siguiente decision de integracion despues de estabilizar el setup del plugin.',
      items: [
        {
          title: 'Icon Configuration',
          description: 'Abre esta pagina si tu siguiente paso es configurar iconos y reglas de render de iconografia.',
        },
        {
          title: 'Composables',
          description: 'Abre esta pagina para continuar con useTheme, useOverlayService y useBreakpoint despues del setup de plugin.',
        },
        {
          title: 'Runtime Theme API',
          description: 'Abre esta pagina si tu siguiente paso es control runtime de tema y transiciones de estado.',
        },
        {
          title: 'Nuxt Integration',
          description: 'Abre esta pagina si necesitas comportamiento SSR-safe de persistencia en Nuxt.',
        },
      ],
    },
  },
}

export const pluginApiPages = {
  pluginApi: pluginApiEditorialContentEs,
} as const

export default pluginApiPages
