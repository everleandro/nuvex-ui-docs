import type { DocsConceptPageContent, DocsIntroductionSectionKey } from '~/types/docs'

export const introductionEditorialContentEs: DocsConceptPageContent<DocsIntroductionSectionKey> = {
  kind: 'concept',
  seo: {
    title: 'Introduccion',
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
    'docs-organization': {
      type: 'card-grid',
      key: 'docs-organization',
      title: 'Como navegar la documentacion',
      description: 'La documentacion esta pensada para llevarte de orientacion general a implementacion puntual.',
      descriptionHtml:
        'La documentacion esta pensada para llevarte de orientacion general a implementacion puntual. Usa esta estructura para encontrar mas rapido lo que necesitas y recorrer cada pagina sin perder contexto. Si quieres ver el patron tipo B en accion, revisa <a href="/docs/component/forms/button" class="docs-page__inline-link">Button</a> o <a href="/docs/component/forms/text-field" class="docs-page__inline-link">Text Field</a>, donde el recorrido pasa de overview a playground, ejemplos, validacion y API.',
      items: [
        {
          title: 'Empieza por el area correcta',
          description: 'Usa los hubs principales para ubicar la capacidad que necesitas: onboarding, sistema visual, theming, layout, formularios o integracion avanzada.',
        },
        {
          title: 'Pasa del overview al playground',
          description: 'En las paginas de componente, empieza por el hero y la seccion de uso para entender alcance, probar el caso principal y ajustar las props mas importantes antes de entrar en variantes.',
        },
        {
          title: 'Profundiza con ejemplos reales',
          description: 'Despues del playground principal, recorre las secciones especificas del componente para comparar estados, composicion, iconos, patrones de integracion y casos de uso mas cercanos a produccion.',
        },
        {
          title: 'Cierra con validacion y API',
          description: 'En componentes de entrada, revisa validacion antes de llegar a props. Usa la API reference al final para confirmar contratos, tipos y comportamiento una vez que ya elegiste el patron correcto.',
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
      itemsHtml: [
        'Instala Nuvex UI y verifica las dependencias base en <a href="/docs/getting-started/installation" class="docs-page__inline-link">Installation</a>.',
        'Construye una primera pantalla con componentes core y estilos globales usando como referencia una pagina tipo B como <a href="/docs/component/forms/button" class="docs-page__inline-link">Button</a>.',
        'Configura temas, primitivas de layout y estructura de navegacion apoyandote en <a href="/docs/theming/overview" class="docs-page__inline-link">Theming</a> y <a href="/docs/component/layout/app-shell" class="docs-page__inline-link">Layout</a>.',
        'Expande hacia la documentacion especifica de componentes segun se implementen funcionalidades, por ejemplo <a href="/docs/component/forms/text-field" class="docs-page__inline-link">Text Field</a> o <a href="/docs/component/forms/select" class="docs-page__inline-link">Select</a>.',
      ],
    },
    'system-principles': {
      type: 'list',
      key: 'system-principles',
      title: 'Que esperar de las paginas de componentes',
      description:
        'Usa estos criterios para leer y evaluar paginas tipo B con mas claridad antes de tomar decisiones de implementacion.',
      items: [
        'Playground primero: cada pagina debe ayudarte a probar el caso principal antes de entrar en variantes y detalles de API.',
        'Ejemplos antes que teoria: las secciones intermedias deben mostrar estados, composicion y patrones de uso cercanos a implementacion real.',
        'Validation cuando aplica: en componentes de entrada, la validacion debe aparecer antes de la API para cerrar el flujo con contexto funcional.',
        'API al final: usa la referencia tecnica para confirmar contratos, tipos y comportamiento una vez que ya elegiste el patron correcto.',
      ],
    },
  },
}

export const introductionPages = {
  introduction: introductionEditorialContentEs,
} as const

export default introductionPages