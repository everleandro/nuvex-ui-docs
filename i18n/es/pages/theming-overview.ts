import type { DocsConceptPageContent, DocsThemingOverviewSectionKey } from '~/types/docs'

export const themingOverviewEditorialContentEs: DocsConceptPageContent<DocsThemingOverviewSectionKey> = {
  kind: 'concept',
  seo: {
    title: 'Resumen de theming | Nuvex UI Docs',
    description:
      'Identifica que capa de Theming necesitas tocar en Nuvex UI antes de entrar a una guia de implementacion especifica.',
  },
  hero: {
    title: 'Theming Overview',
    description:
      'Usa esta pagina para identificar que capa de Theming necesitas tocar en Nuvex UI: temas base, runtime, tokens, variables CSS o temas personalizados.',
    actions: [
      {
        key: 'open-light-and-dark-themes',
        label: 'Abrir Light and Dark Themes',
      },
      {
        key: 'open-runtime-theme-api',
        label: 'Abrir Runtime Theme API',
      },
    ],
  },
  sections: {
    'what-theming-covers': {
      type: 'card-grid',
      key: 'what-theming-covers',
      title: 'Que cubre Theming',
      description:
        'Theming empieza cuando la libreria ya esta instalada y renderizando bien, y ahora necesitas adaptar la apariencia, controlar el tema activo o extender el sistema con nuevas variantes.',
      items: [
        {
          title: 'Temas base',
          description: 'Explica que ya existe en light y dark antes de que intentes redefinir el sistema.',
        },
        {
          title: 'Control en runtime',
          description: 'Sirve para leer, cambiar o persistir el tema activo desde codigo.',
        },
        {
          title: 'Tokens',
          description: 'Sirven para decidir que valor semantico debe cambiar cuando ajustas color, surface o marca.',
        },
        {
          title: 'Variables CSS',
          description: 'Sirven para overrides en la cascada cuando el ajuste no requiere crear un tema nuevo.',
        },
        {
          title: 'Custom themes',
          description: 'Sirven cuando el producto necesita una variante nombrada adicional ademas de light y dark.',
        },
      ],
    },
    'theme-model-overview': {
      type: 'card-grid',
      key: 'theme-model-overview',
      title: 'Como pensar el sistema de tema',
      description:
        'La forma correcta de entender Theming no es por features sueltas, sino por capas: primero el baseline, despues la seleccion del tema activo y luego la personalizacion.',
      items: [
        {
          title: '1. Parte del baseline',
          description: 'Nuvex UI ya incluye light y dark. Ese es el contrato inicial del sistema.',
        },
        {
          title: '2. Resuelve el tema activo',
          description: 'El tema inicial puede venir de una preferencia guardada, del sistema o de un default configurado.',
        },
        {
          title: '3. Decide si el cambio es operativo o visual',
          description: 'Si necesitas cambiar o persistir el tema, estas en runtime. Si necesitas cambiar como se ve, probablemente estas en tokens o variables CSS.',
        },
        {
          title: '4. Ajusta la capa correcta',
          description: 'No todo cambio visual requiere un tema nuevo. A veces basta con tokens; otras veces con variables CSS.',
        },
        {
          title: '5. Crea un tema nuevo solo cuando haga falta',
          description: 'Un tema personalizado tiene sentido cuando el producto necesita otra variante con identidad propia, no cuando solo estas refinando el baseline.',
        },
      ],
    },
    'default-behavior': {
      type: 'list',
      key: 'default-behavior',
      title: 'Comportamiento por defecto',
      description:
        'Antes de personalizar, conviene tener claro que comportamiento ya existe sin configuracion adicional.',
      items: [
        'Nuvex UI ya incluye los temas `light` y `dark` desde el inicio.',
        'El tema inicial puede resolverse desde storage, system preference o un default theme configurado segun lo que este disponible.',
        'El theming en runtime es opcional. Un proyecto puede quedarse en el baseline built-in y seguir siendo totalmente valido.',
      ],
      itemsHtml: {
        'Nuvex UI ya incluye los temas `light` y `dark` desde el inicio.': 'Nuvex UI ya incluye los temas <code class="docs-inline-code">light</code> y <code class="docs-inline-code">dark</code> desde el inicio.',
      },
    },
    'choose-your-path': {
      type: 'nav-card-grid',
      key: 'choose-your-path',
      title: 'Elige la siguiente guia',
      description:
        'Continua segun el tipo de cambio que necesitas resolver.',
      items: [
        {
          title: 'Quiero entender light y dark',
          description: 'Ve a Light and Dark Themes si primero necesitas adoptar correctamente el baseline built-in.',
        },
        {
          title: 'Quiero cambiar el tema desde codigo',
          description: 'Ve a Runtime Theme API si necesitas un toggle, un selector o persistencia en runtime.',
        },
        {
          title: 'Quiero decidir la capa semantica correcta',
          description: 'Ve a Design Tokens si el cambio involucra color, surfaces o intencion de marca.',
        },
        {
          title: 'Quiero hacer overrides en CSS',
          description: 'Ve a CSS Variables si el cambio pertenece a la cascada y no al registro de temas.',
        },
        {
          title: 'Quiero agregar una variante nueva',
          description: 'Ve a Custom Themes si el producto necesita un tema nombrado adicional.',
        },
      ],
    },
    'build-time-vs-runtime': {
      type: 'card-grid',
      key: 'build-time-vs-runtime',
      title: 'Build-time vs runtime',
      description:
        'La mayoria de los errores en Theming aparecen cuando intentas resolver un problema correcto en la capa equivocada. Si el cambio modifica la identidad visual base, piensa en build-time. Si modifica que tema esta activo durante el uso, piensa en runtime.',
      items: [
        {
          title: 'Personalizacion en build-time',
          description: 'Usa esta capa cuando quieres definir el baseline visual antes de que la app corra: variables Sass, token seeds y orden de estilos.',
        },
        {
          title: 'Personalizacion en runtime',
          description: 'Usa esta capa cuando la app necesita seleccionar, cambiar o persistir el tema activo mientras el usuario interactua.',
        },
      ],
    },
    'common-mistakes': {
      type: 'list',
      key: 'common-mistakes',
      title: 'Errores que conviene evitar',
      description:
        'Estos errores suelen aparecer cuando se mezclan capas o se usa una pagina equivocada para resolver el problema.',
      items: [
        'Cambiar variables CSS primero cuando la decision real debio tomarse en la capa de tokens.',
        'Crear un tema completamente nuevo cuando el producto solo necesitaba ajustar light y dark.',
        'Tratar runtime y build-time como si resolvieran el mismo tipo de problema.',
      ],
    },
  },
}

export const themingOverviewPages = {
  overview: themingOverviewEditorialContentEs,
} as const

export default themingOverviewPages