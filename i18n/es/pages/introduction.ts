import type { DocsPageContent, DocsWorkflowPageContent } from '~/types/docs'

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
      type: 'nav-card-grid',
      key: 'what-is-nuvex-ui',
      title: 'Explora Nuvex UI por capacidades',
      description:
        'Nuvex UI se organiza en capacidades que cubren desde la integracion inicial hasta la personalizacion, la estructura de pantallas y los flujos de entrada. Usa estas areas como puertas de entrada segun la necesidad de tu producto.',
      items: [
        {
          title: 'Primeros pasos',
          description: 'Instalacion, arranque rapido e integracion inicial para incorporar Nuvex UI en un proyecto nuevo con el menor tiempo de setup posible.',
          to: '/docs/getting-started/installation',
          icon: 'gettingStarted',
        },
        {
          title: 'Design System',
          description: 'Colores, tipografia, iconografia, spacing y superficies para entender el lenguaje visual base y tomar decisiones consistentes desde el inicio.',
          to: '/docs/design-system/colors',
          icon: 'designSystem',
        },
        {
          title: 'Theming',
          description: 'Tokens, variables CSS y APIs de tema para adaptar la libreria a la identidad del producto sin perder coherencia entre componentes.',
          to: '/docs/theming/overview',
          icon: 'theming',
        },
        {
          title: 'Layout',
          description: 'App shell, bar, drawer, container y patrones responsivos para estructurar pantallas reales sobre una base predecible y reutilizable.',
          to: '/docs/component/layout/app-shell',
          icon: 'layout',
        },
        {
          title: 'Forms y entrada de datos',
          description: 'Campos, validacion, acciones y patrones de captura para construir flujos de negocio claros, consistentes y listos para produccion.',
          to: '/docs/component/forms/overview',
          icon: 'forms',
        },
        {
          title: 'Capacidades avanzadas',
          description: 'Overlays, scheduling, utilidades, extensibilidad y guias de integracion para escenarios mas complejos y equipos que necesitan ir mas alla del caso base.',
          to: '/docs/advanced/plugin-api',
          icon: 'advanced',
        },
      ],
      cols: {
        md: 6,
        lg: 4,
      },
    },
    {
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
      cols: {
        md: 6,
        lg: 6,
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
      itemsHtml: [
        'Instala Nuvex UI y verifica las dependencias base en <a href="/docs/getting-started/installation" class="docs-page__inline-link">Installation</a>.',
        'Construye una primera pantalla con componentes core y estilos globales usando como referencia una pagina tipo B como <a href="/docs/component/forms/button" class="docs-page__inline-link">Button</a>.',
        'Configura temas, primitivas de layout y estructura de navegacion apoyandote en <a href="/docs/theming/overview" class="docs-page__inline-link">Theming</a> y <a href="/docs/component/layout/app-shell" class="docs-page__inline-link">Layout</a>.',
        'Expande hacia la documentacion especifica de componentes segun se implementen funcionalidades, por ejemplo <a href="/docs/component/forms/text-field" class="docs-page__inline-link">Text Field</a> o <a href="/docs/component/forms/select" class="docs-page__inline-link">Select</a>.',
      ],
    },
    {
      type: 'list',
      key: 'system-principles',
      title: 'Que esperar de las paginas de componentes',
      description:
        'Usa estos criterios para leer y evaluar paginas tipo B con mas claridad antes de tomar decisiones de implementacion.',
      ordered: false,
      items: [
        'Playground primero: cada pagina debe ayudarte a probar el caso principal antes de entrar en variantes y detalles de API.',
        'Ejemplos antes que teoria: las secciones intermedias deben mostrar estados, composicion y patrones de uso cercanos a implementacion real.',
        'Validation cuando aplica: en componentes de entrada, la validacion debe aparecer antes de la API para cerrar el flujo con contexto funcional.',
        'API al final: usa la referencia tecnica para confirmar contratos, tipos y comportamiento una vez que ya elegiste el patron correcto.',
      ],
    },
  ],
}

export const quickStartContentEs: DocsWorkflowPageContent = {
  kind: 'workflow',
  seo: {
    title: 'Inicio rapido',
    description:
      'Construye una primera pantalla util con Nuvex UI despues de la instalacion usando un layout minimo, una accion principal y un primer input.',
  },
  hero: {
    title: 'Inicio rapido',
    description:
      'Construye una primera pantalla util con Nuvex UI despues de la instalacion. Esta guia te lleva de una libreria ya conectada a una interfaz pequena y real con layout, jerarquia de accion y un primer input.',
    actions: [
      {
        label: 'Volver a Installation',
        to: '/docs/getting-started/installation',
        outlined: true,
      },
      {
        label: 'Abrir docs de Button',
        to: '/docs/component/forms/button',
        variant: 'text',
      },
    ],
  },
  sections: [
    {
      type: 'decision-grid',
      key: 'what-you-will-build',
      title: 'Que vas a construir',
      description:
        'En lugar de explorar componentes aislados primero, esta pagina arma una pantalla minima pero realista para que entiendas como se empieza a sentir Nuvex UI dentro de una pagina real.',
      items: [
        {
          title: 'Layout base',
          description: 'Un contenedor simple con espaciado, titulo y una superficie para el contenido principal.',
          icon: 'layout',
        },
        {
          title: 'Accion principal',
          description: 'Un llamado a la accion claro usando Button con la jerarquia visual correcta.',
          icon: 'forms',
        },
        {
          title: 'Primer input',
          description: 'Un campo basico que convierte la pantalla en un flujo minimo funcional.',
          icon: 'forms',
        },
      ],
      cols: {
        md: 6,
        lg: 4,
      },
    },
    {
      type: 'checklist',
      key: 'before-you-start',
      title: 'Antes de empezar',
      description:
        'Esta pagina asume que Nuvex UI ya esta instalado y registrado en tu proyecto. Si faltan estilos o la app aun no compila, vuelve primero a Installation.',
      callout: {
        color: 'info',
        icon: 'installation',
        description: 'Quick Start se apoya en Installation. No reemplaza la guia de setup ni cubre decisiones avanzadas de theming o integracion todavia.',
      },
      items: [
        'Nuvex UI ya esta instalado y registrado.',
        'Los estilos base ya estan cargando correctamente.',
        'Quieres armar una primera pantalla, no configurar theming o integracion avanzada todavia.',
      ],
    },
    {
      type: 'code-block',
      key: 'create-the-shell',
      title: 'Crea la base de la pagina',
      description:
        'Empieza con una pantalla real en lugar de widgets aislados. Un titulo simple, una frase corta de apoyo y una superficie principal bastan para establecer la estructura de la pagina.',
      snippets: [
        {
          code: `<template>\n  <EContainer class="py-8">\n    <div class="d-flex flex-column gap-6">\n      <div class="d-flex flex-column gap-2">\n        <h1 class="type-h3 text-heading">Crear proyecto</h1>\n        <p class="type-body">\n          Prepara un pequeno workspace usando bloques base de Nuvex UI.\n        </p>\n      </div>\n\n      <ECard class="pa-6 d-flex flex-column gap-4">\n        <p class="type-body">Tu primera pantalla empieza aqui.</p>\n      </ECard>\n    </div>\n  </EContainer>\n</template>`,
          language: 'vue',
        },
      ],
    },
    {
      type: 'code-block',
      key: 'add-primary-action',
      title: 'Agrega una accion principal',
      description:
        'Cuando la base ya existe, agrega una sola accion de alta intencion. Empezar con un boton claro hace mas facil leer la jerarquia que introducir varias variantes demasiado pronto.',
      snippets: [
        {
          code: `<template>\n  <ECard class="pa-6 d-flex flex-column gap-4">\n    <div class="d-flex justify-end">\n      <EButton color="primary">Crear proyecto</EButton>\n    </div>\n  </ECard>\n</template>`,
          language: 'vue',
        },
      ],
    },
    {
      type: 'code-block',
      key: 'add-first-input',
      title: 'Agrega el primer input',
      description:
        'Para convertir la pagina en un flujo inicial real, agrega un input con un proposito claro. Un solo campo basta para pasar de una base visual a una interfaz con sentido.',
      snippets: [
        {
          code: `<template>\n  <ECard class="pa-6 d-flex flex-column gap-4">\n    <ETextField\n      label="Nombre del proyecto"\n      placeholder="Panel de operaciones"\n    />\n\n    <div class="d-flex justify-end">\n      <EButton color="primary">Crear proyecto</EButton>\n    </div>\n  </ECard>\n</template>`,
          language: 'vue',
        },
      ],
    },
    {
      type: 'code-block',
      key: 'assemble-the-screen',
      title: 'Arma la primera pantalla',
      description:
        'Ahora junta las piezas en una sola pantalla coherente. Aqui es cuando Nuvex UI deja de sentirse como un import de libreria y empieza a sentirse como una interfaz real.',
      callout: {
        color: 'success',
        description: 'Esto ya alcanza para una primera pantalla real: estructura, un campo y una accion con jerarquia clara.',
      },
      snippets: [
        {
          code: `<template>\n  <EContainer class="py-8">\n    <div class="d-flex flex-column gap-6">\n      <div class="d-flex flex-column gap-2">\n        <h1 class="type-h3 text-heading">Crear proyecto</h1>\n        <p class="type-body">\n          Prepara un workspace de proyecto con una estructura clara desde el inicio.\n        </p>\n      </div>\n\n      <ECard class="pa-6 d-flex flex-column gap-4">\n        <ETextField\n          label="Nombre del proyecto"\n          placeholder="Panel de operaciones"\n        />\n\n        <div class="d-flex justify-end">\n          <EButton color="primary">Crear proyecto</EButton>\n        </div>\n      </ECard>\n    </div>\n  </EContainer>\n</template>`,
          language: 'vue',
        },
      ],
    },
    {
      type: 'checklist',
      key: 'verify',
      title: 'Verifica el resultado',
      description:
        'Usa este checklist para confirmar que la libreria no solo esta instalada, sino que ya se comporta correctamente dentro de una pagina real.',
      items: [
        'El layout renderiza con espaciado y estructura, no como elementos apilados en crudo.',
        'La superficie del card se ve correcta y sigue el sistema visual base.',
        'El text field renderiza sin warnings de registro.',
        'El boton aparece con estilo primary y enfasis claro.',
        'Ya puedes pasar a paginas especificas de componentes con un modelo mental real de como encajan.',
      ],
    },
    {
      type: 'next-steps',
      key: 'next-steps',
      title: 'Continua desde aqui',
      description:
        'Cuando la primera pantalla ya funciona, pasa a la capa que coincida con tu siguiente decision: comportamiento de componentes, estructura de layout o personalizacion visual.',
      items: [
        {
          title: 'Button',
          description: 'Aprende jerarquia de acciones, variantes, iconos y patrones comunes de botones.',
          to: '/docs/component/forms/button',
          icon: 'forms',
        },
        {
          title: 'Text Field',
          description: 'Profundiza en comportamiento de inputs, validacion y composicion con slots.',
          to: '/docs/component/forms/text-field',
          icon: 'forms',
        },
        {
          title: 'App Shell',
          description: 'Expande de una pantalla simple a una estructura mas amplia usando primitivas de layout.',
          to: '/docs/component/layout/app-shell',
          icon: 'layout',
        },
        {
          title: 'Theming Overview',
          description: 'Personaliza tokens, colores y comportamiento de tema cuando la primera pantalla ya este estable.',
          to: '/docs/theming/overview',
          icon: 'theming',
        },
      ],
    },
  ],
}

export const introductionPages = {
  introduction: introductionContentEs,
  quickStart: quickStartContentEs,
} as const

export default introductionPages