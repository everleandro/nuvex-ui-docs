import type { DocsPageContent } from '../types'

export const introductionContentEs: DocsPageContent = {
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
        label: 'Comenzar con la instalacion',
        to: '/docs/getting-started/installation',
        outlined: true,
      },
      {
        label: 'Abrir inicio rapido',
        to: '/docs/getting-started/quick-start',
        variant: 'text',
        outlined: false,
      },
    ],
  },
  sections: [
    {
      type: 'card-grid',
      key: 'what-is-nuvex-ui',
      title: 'Que es Nuvex UI',
      description:
        'Nuvex UI combina componentes reutilizables, primitivas de layout y herramientas de tema para que los equipos construyan interfaces con un lenguaje visual y de interaccion compartido.',
      items: [
        {
          title: 'Componentes UI',
          description: 'Componentes listos para produccion para formularios, overlays, navegacion e interfaces orientadas a datos.',
        },
        {
          title: 'Sistema de temas',
          description: 'Personalizacion basada en tokens con variables CSS, escalas de color y control de tema claro u oscuro.',
        },
        {
          title: 'Primitivas de layout',
          description:
            'Bloques de construccion para app shell como barras, drawers, contenedores y utilidades de grid para pantallas responsivas.',
        },
        {
          title: 'Experiencia de desarrollo',
          description: 'APIs composables y patrones predecibles que reducen codigo de pegamento y facilitan el mantenimiento a largo plazo.',
        },
      ],
      cols: {
        md: 6,
        lg: 3,
      },
    },
    {
      type: 'card-grid',
      key: 'docs-organization',
      title: 'Como se organiza la documentacion',
      description:
        'La documentacion esta organizada por capacidades, desde onboarding hasta integracion avanzada, para avanzar de conceptos a implementacion sin cambiar de contexto.',
      items: [
        {
          title: 'Primeros pasos',
          description: 'Instalacion, configuracion inicial y primeros pasos de integracion para proyectos nuevos.',
        },
        {
          title: 'Sistema de diseno y temas',
          description: 'Fundamentos visuales, estrategia de tokens y lineamientos de personalizacion en runtime.',
        },
        {
          title: 'Componentes y patrones',
          description: 'Documentacion por componente con APIs, patrones de uso y recomendaciones de integracion.',
        },
        {
          title: 'Avanzado y comunidad',
          description: 'API de plugins, guia SSR, puntos de extension, roadmap y flujo de contribucion.',
        },
      ],
      cols: {
        md: 6,
        lg: 3,
      },
    },
    {
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
    },
    {
      type: 'list',
      key: 'system-principles',
      title: 'Principios del sistema',
      description:
        'Estos principios definen como evaluar componentes, componer layouts y mantener decisiones de implementacion alineadas entre equipos.',
      ordered: false,
      items: [
        'Consistencia primero: el comportamiento de los componentes debe ser predecible en todos los contextos.',
        'Extensibilidad por diseno: los equipos deben poder adaptar el sistema sin bifurcar patrones base.',
        'Accesibilidad por defecto: el markup semantico y el soporte de teclado son requisitos base.',
        'DX pragmatica: las APIs deben optimizar velocidad de implementacion sin ocultar decisiones criticas.',
      ],
    },
    {
      type: 'card-grid',
      key: 'page-structure',
      title: 'Que suele incluir cada pagina',
      description:
        'La mayoria de las paginas de documentacion siguen esta estructura para ubicar informacion rapidamente.',
      items: [
        {
          title: 'Problema y alcance',
          description: 'Que resuelve esta capacidad, cuando usarla y donde encaja en los flujos del producto.',
        },
        {
          title: 'API y setup',
          description: 'Props, eventos y configuracion minima para una primera implementacion confiable.',
        },
        {
          title: 'Ejemplos de uso',
          description: 'Desde muestras minimas hasta escenarios orientados a produccion con composicion realista.',
        },
        {
          title: 'Buenas practicas y caveats',
          description: 'Notas de accesibilidad, guias de theming y errores comunes de implementacion.',
        },
      ],
      cols: {
        md: 6,
        lg: 3,
      },
    },
  ],
}
