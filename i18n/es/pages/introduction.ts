import type { DocsConceptPageContent, DocsIntroductionSectionKey } from '~/types/docs'

export const introductionEditorialContentEs: DocsConceptPageContent<DocsIntroductionSectionKey> = {
  kind: 'concept',
  seo: {
    title: 'Introduccion | Nuvex UI Docs',
    description:
      'Introduccion a Nuvex UI. Aprende que ofrece la libreria, como se organiza la documentacion y el mejor camino para empezar a construir.',
  },
  hero: {
    title: 'Introduccion',
    description:
      'Nuvex UI es un sistema de componentes para Vue 3 enfocado en crear interfaces consistentes mas rapido. Usa esta guia para entender la libreria, el flujo de documentacion y la ruta recomendada hacia produccion.',
    actions: [
      {
        key: 'start-with-installation',
        label: 'Comenzar con la instalacion',
      },
      {
        key: 'open-quick-start',
        label: 'Abrir inicio rapido',
      },
    ],
  },
  sections: {
    'what-is-nuvex-ui': {
      type: 'nav-card-grid',
      key: 'what-is-nuvex-ui',
      title: 'Explora Nuvex UI por capacidades',
      description:
        'Nuvex UI se organiza en capacidades que cubren desde la integracion inicial hasta la personalizacion, la estructura de pantallas y los flujos de entrada. Usa estas areas como puertas de entrada segun la necesidad de tu producto.',
      items: [
        {
          title: 'Primeros pasos',
          description: 'Instalacion, arranque rapido e integracion inicial para incorporar Nuvex UI en un proyecto nuevo con el menor tiempo de setup posible.',
        },
        {
          title: 'Design System',
          description: 'Colores, tipografia, iconografia, spacing y superficies para entender el lenguaje visual base y tomar decisiones consistentes desde el inicio.',
        },
        {
          title: 'Theming',
          description: 'Tokens, variables CSS y APIs de tema para adaptar la libreria a la identidad del producto sin perder coherencia entre componentes.',
        },
        {
          title: 'Layout',
          description: 'App shell, bar, drawer, container y patrones responsivos para estructurar pantallas reales sobre una base predecible y reutilizable.',
        },
        {
          title: 'Forms y entrada de datos',
          description: 'Campos, validacion, acciones y patrones de captura para construir flujos de negocio claros, consistentes y listos para produccion.',
        },
        {
          title: 'Capacidades avanzadas',
          description: 'Overlays, scheduling, utilidades, extensibilidad y guias de integracion para escenarios mas complejos y equipos que necesitan ir mas alla del caso base.',
        },
      ],
    },
    'recommended-path': {
      type: 'list',
      key: 'recommended-path',
      title: 'Ruta recomendada para empezar',
      description:
        'Sigue esta secuencia para pasar de la primera instalacion a una integracion lista para produccion con menos decisiones y retrabajo.',
      ordered: true,
      items: [
        'Instala Nuvex UI y verifica las dependencias base.',
        'Construye una primera pantalla con componentes core y estilos globales.',
        'Configura temas, primitivas de layout y estructura de navegacion.',
        'Expande hacia la documentacion especifica de componentes segun se implementen funcionalidades.',
      ],
      itemsHtml: {
        'Instala Nuvex UI y verifica las dependencias base.': 'Instala Nuvex UI y verifica las dependencias base en <a href="/docs/getting-started/installation" class="docs-page__inline-link">Installation</a>.',
        'Construye una primera pantalla con componentes core y estilos globales.': 'Construye una primera pantalla con componentes core y estilos globales usando como referencia una pagina tipo B como <a href="/docs/component/core-actions/button" class="docs-page__inline-link">Button</a>.',
        'Configura temas, primitivas de layout y estructura de navegacion.': 'Configura temas, primitivas de layout y estructura de navegacion apoyandote en <a href="/docs/theming/overview" class="docs-page__inline-link">Theming</a> y <a href="/docs/component/layout/app-shell" class="docs-page__inline-link">Layout</a>.',
        'Expande hacia la documentacion especifica de componentes segun se implementen funcionalidades.': 'Expande hacia la documentacion especifica de componentes segun se implementen funcionalidades, por ejemplo <a href="/docs/component/form-inputs/text-field" class="docs-page__inline-link">Text Field</a> o <a href="/docs/component/form-inputs/select" class="docs-page__inline-link">Select</a>.',
      },
    },
    'system-principles': {
      type: 'list',
      key: 'system-principles',
      title: 'Como te ayudan las paginas de componentes',
      description:
        'Las paginas de componentes estan organizadas para ayudarte a pasar de orientacion a implementacion sin tener que adivinar que revisar despues.',
      items: [
        'Empieza por el ejemplo principal para entender el componente en su caso de uso mas comun antes de comparar variantes.',
        'Usa las secciones intermedias para revisar estados, composicion, iconos y patrones de integracion cercanos al trabajo real de producto.',
        'En componentes de entrada, revisa validacion y guias de interaccion antes de apoyarte solo en la tabla de API.',
        'Deja la API reference para el final y usala para confirmar props, eventos, slots y comportamiento cuando ya tengas claro el patron que necesitas.',
      ],
    },
  },
}

export const introductionPages = {
  introduction: introductionEditorialContentEs,
} as const

export default introductionPages