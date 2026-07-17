import type { DocsInstallationEditorialContent } from '~/types/docs'

export const installationEditorialContentEs: DocsInstallationEditorialContent = {
  seo: {
    title: 'Instalacion',
    description:
      'Instala Nuvex UI, registra el plugin y carga los estilos base para dejar tu proyecto listo antes de pasar a componentes, theming o layout.',
  },
  hero: {
    title: 'Instalacion',
    description:
      'Instala Nuvex UI, registra el plugin y carga los estilos base para dejar tu proyecto listo antes de pasar a componentes, theming o layout.',
    prerequisitesTitle: 'Antes de empezar',
    actions: {
      installPackage: 'Instalar con npm',
      nuxtIntegration: 'Ver integracion Nuxt',
    },
    prerequisites: [
      'Vue 3 o Nuxt 4.',
      'Un proyecto ya creado.',
      'Sass instalado si vas a importar framework.scss.',
    ],
  },
  sections: {
    'choose-path': {
      title: 'Elige tu punto de partida',
      description:
        'La instalacion base es corta, pero el archivo que debes tocar cambia segun tu stack.',
      items: [
        {
          title: 'Vue + Vite',
          description:
            'Registra Nuvex UI en main.ts y carga estilos globales en el arranque de la app.',
        },
        {
          title: 'Nuxt',
          description:
            'Registra Nuvex UI en un plugin y carga los estilos desde nuxt.config.ts en el orden correcto.',
        },
      ],
    },
    'install-package': {
      title: 'Instala el paquete',
      description:
        'Elige el gestor de paquetes que uses en tu proyecto. Si vas a importar framework.scss, instala tambien sass.',
      calloutDescription:
        'Si omites sass, la importacion de nuvex-ui/framework.scss fallara en tiempo de build.',
    },
    'register-vue': {
      title: 'Registro minimo en Vue + Vite',
      description:
        'En una app Vue, registra el plugin en main.ts y carga primero styles.css y despues framework.scss.',
    },
    'register-nuxt': {
      title: 'Registro minimo en Nuxt',
      description:
        'En Nuxt, registra el plugin en app/plugins/nuvex-ui.ts y carga los estilos desde nuxt.config.ts.',
      calloutDescription:
        'Este es el setup minimo para instalar la libreria. Persistencia de tema, SSR fino y storage custom deben vivir en una guia posterior de integracion o theming.',
    },
    'first-render': {
      title: 'Prueba un primer componente',
      description:
        'Antes de seguir con theming o layout, confirma que la libreria ya renderiza un componente simple.',
    },
    'verify-installation': {
      title: 'Verifica la instalacion',
      description:
        'Usa esta lista para confirmar que el setup base quedo correcto antes de pasar a otras guias.',
      items: [
        'La app compila sin errores de Sass.',
        'Los estilos base de Nuvex UI se cargan sin importar CSS adicional fuera del setup principal.',
        'Un EButton se renderiza sin warnings de componente no registrado.',
        'Las clases de framework estan disponibles si importaste framework.scss.',
      ],
    },
    'common-pitfalls': {
      title: 'Problemas comunes',
      description:
        'Estos errores suelen aparecer en el primer setup y conviene resolverlos antes de seguir.',
      items: [
        {
          title: 'Error al compilar framework.scss',
          description:
            'Instala sass en tu proyecto antes de importar nuvex-ui/framework.scss.',
        },
        {
          title: 'Los helpers o estilos no se ven bien',
          description:
            'Verifica el orden de carga: primero nuvex-ui/styles.css y despues nuvex-ui/framework.scss.',
        },
        {
          title: 'Los componentes no renderizan',
          description:
            'Confirma que registraste NuvexUI con app.use(NuvexUI) o defineNuxtPlugin.',
        },
        {
          title: 'Necesito persistencia de tema o SSR mas fino',
          description:
            'Eso ya no pertenece a Installation; debe vivir en Nuxt Integration o en una guia especifica de theming.',
        },
      ],
    },
    'next-steps': {
      title: 'Siguiente paso recomendado',
      description:
        'Con la instalacion base resuelta, el siguiente paso depende de si quieres probar componentes, estructurar pantallas o personalizar tema.',
      items: [
        {
          title: 'Quick Start',
          description:
            'Construye una primera pantalla y confirma el flujo base de trabajo con la libreria.',
        },
        {
          title: 'Button',
          description:
            'Usa una pagina tipo B real como referencia para pasar de setup a implementacion.',
        },
        {
          title: 'Theming Overview',
          description:
            'Continua con tokens, variables CSS y personalizacion de tema.',
        },
        {
          title: 'App Shell',
          description:
            'Avanza hacia layout cuando ya tengas resuelto el setup base.',
        },
      ],
    },
  },
}

export const installationPages = {
  installation: installationEditorialContentEs,
} as const

export default installationPages