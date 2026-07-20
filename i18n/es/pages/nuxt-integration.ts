import type { DocsNuxtIntegrationEditorialContent } from '~/types/docs'

export const nuxtIntegrationEditorialContentEs: DocsNuxtIntegrationEditorialContent = {
  seo: {
    title: 'Nuxt Integration',
    description:
      'Integra Nuvex UI en Nuxt con persistencia de tema compatible con SSR, carga correcta de estilos y un plugin listo para profundizar en theming.',
  },
  hero: {
    title: 'Nuxt Integration',
    description:
      'Integra Nuvex UI en Nuxt con una base compatible con SSR, carga correcta de estilos y persistencia de tema antes de pasar a theming mas profundo o a patrones de layout.',
    prerequisitesTitle: 'Antes de empezar',
    actions: {
      backToInstallation: 'Volver a Installation',
      openThemingOverview: 'Abrir Theming Overview',
    },
    prerequisites: [
      'Ya completaste Installation o ya tienes el setup minimo funcionando en Nuxt.',
      'Tu app Nuxt ya compila con Nuvex UI y los estilos base.',
      'Quieres resolver la integracion real de Nuxt antes de profundizar en theming o App Shell.',
    ],
  },
  sections: {
    'what-this-guide-adds': {
      title: 'Que agrega esta guia',
      description:
        'Installation deja funcionando el setup minimo. Esta guia agrega la capa especifica de Nuxt para que tema, SSR y carga inicial queden alineados.',
      items: [
        {
          title: 'Plugin de Nuxt',
          description: 'Registra Nuvex UI dentro del ciclo normal de plugins de Nuxt en lugar de tratar el setup como una entrada generica de Vue.',
          icon: 'nuxt',
        },
        {
          title: 'Orden de estilos',
          description: 'Confirma el orden de styles.css, framework.scss y tus overrides dentro de nuxt.config.ts.',
          icon: 'theming',
        },
        {
          title: 'Persistencia SSR del tema',
          description: 'Usa una cookie como fuente de verdad para que el server conozca el tema inicial antes de hidratar.',
          icon: 'theming',
        },
        {
          title: 'Fallback en cliente',
          description: 'Mantiene localStorage como apoyo en cliente sin depender de el como unica fuente del tema.',
          icon: 'advanced',
        },
      ],
    },
    'register-nuxt-plugin': {
      title: 'Registra el plugin en Nuxt',
      description:
        'Empieza desde el archivo de plugin donde la app monta Nuvex UI. Ese es el punto de integracion donde despues vivira la configuracion especifica de tema o storage.',
    },
    'load-styles': {
      title: 'Carga estilos en nuxt.config.ts',
      description:
        'En Nuxt, el orden de los estilos determina si el framework y tus overrides entran en la cascada correcta desde el primer render.',
      calloutDescription:
        'Carga primero nuvex-ui/styles.css, despues nuvex-ui/framework.scss y deja los estilos de tu app despues de ambos.',
    },
    'persist-theme': {
      title: 'Persiste el tema entre SSR y cliente',
      description:
        'Si el tema inicial solo vive en localStorage, el server no puede conocerlo antes de renderizar. Usa una cookie como fuente SSR y deja el fallback cliente solo como compatibilidad.',
      calloutDescription:
        'En esta guia, la cookie es la fuente de verdad para SSR. localStorage queda como fallback cliente y capa de compatibilidad legacy.',
    },
    'assemble-nuxt-integration': {
      title: 'Arma la integracion completa en Nuxt',
      description:
        'Ahora junta plugin, cookie y lecturas en cliente en un solo punto para que la app ya tenga un tema inicial coherente tanto en server como en cliente.',
      calloutDescription:
        'Con esta base, el server ya puede resolver el tema inicial y el cliente puede conservarlo sin depender solo de actualizaciones despues de hidratar.',
    },
    'verify-integration': {
      title: 'Verifica la integracion',
      description:
        'Usa esta lista para confirmar que la integracion Nuxt ya esta lista antes de pasar a guias de theming mas profundas.',
      items: [
        'La app compila y monta Nuvex UI desde el plugin de Nuxt.',
        'Los estilos base y framework se aplican desde nuxt.config.ts en el orden correcto.',
        'El tema inicial ya no depende solo de localStorage.',
        'Al recargar la pagina, el tema persiste sin desalinearse entre server y cliente.',
        'No aparece un cambio visual evidente de tema justo despues de hidratar.',
      ],
    },
    'common-pitfalls': {
      title: 'Problemas comunes',
      description:
        'Estos problemas suelen aparecer cuando el setup de Nuxt ya va mas alla de la instalacion minima y conviene resolverlos antes de seguir con theming.',
      items: [
        {
          title: 'El tema cambia despues de hidratar',
          description: 'Verifica que el server lea el tema desde cookie y que el cliente no dependa solo de localStorage para el valor inicial.',
        },
        {
          title: 'Los estilos no cargan en el orden esperado',
          description: 'Confirma que styles.css carga antes de framework.scss y que tus overrides de app cargan despues de ambos.',
        },
        {
          title: 'El tema no persiste entre recargas',
          description: 'Revisa que el cliente actualice la cookie y no solo localStorage cuando cambie el tema.',
        },
        {
          title: 'Necesito una customizacion de tema mas profunda',
          description: 'El siguiente paso ya es Theming Overview, Runtime Theme API o una guia especifica de custom themes en lugar de alargar esta pagina de integracion.',
        },
      ],
    },
    'next-steps': {
      title: 'Siguientes pasos recomendados',
      description:
        'Cuando la integracion Nuxt ya este estable, continua con la pagina que mejor encaje con tu siguiente decision sobre tema, runtime o layout.',
      items: [
        {
          title: 'Theming Overview',
          description: 'Continua con tokens, variables CSS y el modelo general de tema cuando la base Nuxt ya este estable.',
        },
        {
          title: 'Runtime Theme API',
          description: 'Profundiza en cambios programaticos de tema cuando la estrategia SSR-safe ya este resuelta.',
        },
        {
          title: 'Light and Dark Themes',
          description: 'Lleva la integracion a un comportamiento real de temas claro y oscuro cuando el tema inicial ya resuelve bien.',
        },
        {
          title: 'App Shell',
          description: 'Pasa a la estructura de layout cuando el setup de Nuxt y la persistencia de tema ya esten estables.',
        },
      ],
    },
  },
}

export const nuxtIntegrationPages = {
  nuxtIntegration: nuxtIntegrationEditorialContentEs,
} as const

export default nuxtIntegrationPages