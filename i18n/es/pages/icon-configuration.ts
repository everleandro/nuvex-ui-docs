import type { DocsIconConfigurationSectionKey, DocsWorkflowPageContent } from '~/types/docs'

export const iconConfigurationEditorialContentEs: DocsWorkflowPageContent<DocsIconConfigurationSectionKey> = {
  kind: 'workflow',
  seo: {
    title: 'Configuracion de iconos',
    description:
      'Configura una estrategia consistente de iconos en Nuvex UI para la UI de la aplicacion, los defaults internos de componentes y librerias externas de iconos.',
  },
  hero: {
    title: 'Configuracion de iconos',
    description:
      'Configura una estrategia consistente de iconos en Nuvex UI para la UI de la aplicacion, los defaults internos de componentes y librerias externas de iconos.',
  },
  sections: {
    overview: {
      title: 'Resumen',
      description:
        'Esta pagina distingue entre el sistema de iconos de la aplicacion y los defaults internos de iconos que requieren los componentes del framework. Estas capas pueden alinearse mediante configuracion, pero deben seguir siendo preocupaciones separadas para que la iconografia de la aplicacion no dependa de internals del framework.',
      items: [
        {
          title: 'Sistema de iconos de la aplicacion',
          description: 'Define una sola estrategia de iconos para la UI del producto y componentes custom mediante iconFont o un registro SVG propio de la aplicacion.',
        },
        {
          title: 'Defaults de iconos del framework',
          description: 'Usa los defaults integrados para el comportamiento de componentes y sobreescribelos solo cuando esos controles deban alinearse con el sistema de iconos de la aplicacion.',
        },
      ],
    },
    'application-icon-strategy': {
      title: 'Estrategia de iconos de aplicacion',
      description:
        'Para los iconos de aplicacion, define una sola estrategia global mediante iconFont. Esto mantiene consistentes EIcon y cualquier componente que acepte iconos string entre paginas, componentes custom y render SSR.',
      calloutDescription:
        'Usa baseClass cuando la libreria necesite una clase raiz compartida, prefix cuando el naming sea lineal y resolveClass cuando un icono logico deba expandirse en multiples clases finales.',
      items: [
        {
          title: 'baseClass',
          description: 'Agrega una clase raiz compartida a cada icono basado en clases que resuelve el framework.',
        },
        {
          title: 'prefix',
          description: 'Funciona para librerias con una convencion simple como prefix + nombre del icono.',
        },
        {
          title: 'resolveClass',
          description: 'Permite que un nombre de icono logico se expanda a multiples clases finales cuando una libreria lo requiere.',
        },
      ],
    },
    'mdi-integration': {
      title: 'Integracion con MDI',
      description:
        'Material Design Icons es una integracion basada en prefijo. Configura una baseClass compartida y un prefijo estable cuando los nombres de iconos se resuelven como prefijo + nombre logico.',
      calloutDescription:
        'MDI es una integracion directa porque la resolucion de clases suele seguir una convencion estable basada en prefijo.',
      items: [
        {
          title: 'Clases resueltas',
          description: 'Un nombre de icono logico como home se resuelve a la clase base compartida mas la clase prefijada del icono.',
        },
        {
          title: 'Cuando usarlo',
          description: 'Usa esta estrategia cuando la aplicacion mantiene un vocabulario unico de iconos basado en MDI para la UI del producto y componentes custom.',
        },
      ],
    },
    'font-awesome-integration': {
      title: 'Integracion con Font Awesome',
      description:
        'Font Awesome es una integracion de clases compuestas. Usa resolveClass cuando un nombre de icono logico deba expandirse a modificadores de estilo y a la clase final del icono.',
      calloutDescription:
        'Font Awesome es un caso tipico de resolveClass porque la salida final suele combinar una clase de estilo con la clase especifica del icono.',
      items: [
        {
          title: 'Clases resueltas',
          description: 'Un nombre de icono logico se expande a una clase de estilo mas la clase final del icono.',
        },
        {
          title: 'Cuando usarlo',
          description: 'Usa esta estrategia cuando la libreria requiera modificadores de estilo o multiples clases finales para un solo nombre logico de icono.',
        },
      ],
    },
    'internal-framework-icons': {
      title: 'Iconos internos del framework',
      description:
        'El framework incluye defaults internos de iconos para que los controles integrados rendericen de forma consistente. Estos iconos soportan comportamiento del framework y no deben definir el sistema de iconos de la aplicacion.',
      calloutDescription:
        'Los iconos internos del framework y los iconos de aplicacion deben permanecer como capas separadas. Si necesitan compartir el mismo lenguaje visual, alinealos mediante overrides explicitos.',
      items: [
        'Nuvex UI incluye iconos internos para controles propiedad del framework como acciones de clear, triggers de pickers y flechas de navegacion.',
        'Trata este set como soporte de implementacion para componentes integrados, no como la fuente principal de iconos para pantallas de producto o UI custom de la aplicacion.',
      ],
    },
    'overriding-framework-icons': {
      title: 'Sobreescribir iconos del framework',
      description:
        'Si tu aplicacion ya tiene su propio sistema de iconos, usa la opcion de instalacion icons para alinear los controles internos del framework con el mismo lenguaje visual.',
      calloutDescription:
        'Sobreescribe los defaults del framework cuando los controles integrados deban alinearse con el mismo sistema visual usado por los iconos de tu aplicacion.',
      items: [
        {
          title: 'Mantener un solo lenguaje visual',
          description: 'Sobreescribe los defaults del framework cuando los controles integrados deban coincidir con el mismo vocabulario de iconos usado por tu aplicacion.',
        },
        {
          title: 'No duplicar fuentes de verdad',
          description: 'Trata el set interno del framework como un objetivo de override, no como un segundo catalogo de iconos para pantallas de producto.',
        },
      ],
    },
    'per-instance-overrides': {
      title: 'Overrides por instancia',
      description:
        'Usa la prop prefix en EIcon como un override local de componente para iconos string basados en clases. Tiene precedencia sobre la estrategia global de iconFont solo para esa instancia.',
      calloutDescription:
        'Usa overrides por instancia con prefix para excepciones aisladas. Si el mismo mapping aparece en multiples pantallas, muevelo a iconFont para mantener centralizada la resolucion de clases.',
    },
    'ssr-considerations': {
      title: 'Consideraciones de SSR',
      description:
        'Para iconos string basados en clases, la configuracion se resuelve mediante configuracion del framework y no por inspeccion del DOM. Eso mantiene alineada la salida server-rendered con el render del cliente.',
      calloutDescription:
        'Para iconos string basados en clases, la estrategia iconFont se configura a nivel framework, por lo que la resolucion de clases ya no depende de leer variables CSS del DOM durante el render.',
      items: [
        'La resolucion de iconos string basados en clases no requiere getComputedStyle ni acceso a document.',
        'La salida server-rendered puede resolver clases de iconos de forma determinista a partir de la configuracion del framework.',
        'La hidratacion se mantiene estable porque la generacion de clases de iconos ya no depende de inspeccion CSS en runtime.',
      ],
    },
    recommendations: {
      title: 'Recomendaciones',
      description:
        'Estas reglas ayudan a mantener coherentes en el tiempo la iconografia de aplicacion, los defaults del framework y el comportamiento SSR.',
      items: [
        {
          title: 'Usa una sola estrategia de aplicacion',
          description: 'Elige una sola estrategia de iconos para la app y definela globalmente mediante iconFont.',
        },
        {
          title: 'Prefiere prefix en librerias lineales',
          description: 'Librerias como MDI suelen expresarse mejor con baseClass mas prefix.',
        },
        {
          title: 'Prefiere resolveClass en librerias compuestas',
          description: 'Librerias como Font Awesome suelen requerir multiples clases por icono y deben usar resolveClass.',
        },
        {
          title: 'Sobreescribe iconos del framework con intencion',
          description: 'Reemplaza defaults internos solo cuando quieras que los componentes del framework se alineen con el sistema de iconos de tu aplicacion.',
        },
      ],
    },
  },
}

export const iconConfigurationPages = {
  iconConfiguration: iconConfigurationEditorialContentEs,
} as const

export default iconConfigurationPages
