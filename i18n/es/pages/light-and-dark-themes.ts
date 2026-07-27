import type { DocsLightAndDarkThemesSectionKey, DocsWorkflowPageContent } from '~/types/docs'

export const lightAndDarkThemesEditorialContentEs: DocsWorkflowPageContent<DocsLightAndDarkThemesSectionKey> = {
  kind: 'workflow',
  seo: {
    title: 'Light and Dark Themes',
    description:
      'Entiende los temas built-in light y dark de Nuvex UI, como se resuelve el tema inicial y como personalizar ese baseline sin crear una variante nueva.',
  },
  hero: {
    title: 'Light and Dark Themes',
    description:
      'Esta pagina explica el comportamiento base de tema que Nuvex UI ya aporta a tu app. Usala para adoptar correctamente los temas built-in light y dark antes de pasar a controles runtime o a custom themes.',
    prerequisitesTitle: 'Lo que el framework ya te entrega',
    actions: [
      {
        key: 'back-to-theming-overview',
        label: 'Volver a Theming Overview',
      },
      {
        key: 'open-runtime-theme-api',
        label: 'Abrir Runtime Theme API',
      },
    ],
    prerequisites: [
      'Nuvex UI siempre registra <code class="docs-inline-code">light</code> y <code class="docs-inline-code">dark</code> como temas built-in.',
      'El plugin de tema es opcional. Un proyecto puede quedarse en el baseline built-in y seguir teniendo una configuracion de tema completa.',
      'Si solo necesitas refinar como se ven light o dark, la via normal es <code class="docs-inline-code">Design Tokens</code> o <code class="docs-inline-code">CSS Variables</code>, no un tema nombrado nuevo.',
    ],
  },
  sections: {
    'built-in-theme-baseline': {
      title: 'Baseline de temas built-in',
      description:
        'El framework arranca con un baseline real, no con un hook vacio. Light y dark siempre existen, cargan la jerarquia oficial de surfaces y son el punto de partida por defecto para casi cualquier integracion de producto.',
      items: [
        'Light y dark ya estan registrados antes de que agregues cualquier custom theme.',
        'La jerarquia built-in de surfaces se comparte entre ambos temas y actua como baseline visual por defecto del framework.',
        'Puedes publicar una app completa sin registrar otro tema nombrado si el producto solo necesita el modelo built-in.',
      ],
    },
    'initial-theme-resolution': {
      title: 'Resolucion inicial del tema',
      description:
        'El tema inicial se resuelve en un orden estricto: valor persistido primero, luego preferencia del sistema, despues defaultTheme configurado y al final el fallback built-in. Esto importa cuando la app arranca en un tema distinto al que esperabas.',
      calloutDescription:
        'Si el comportamiento de arranque no coincide, revisa primero el orden de resolucion antes de agregar mas logica runtime. La mayoria de los desajustes vienen de storage o de la preferencia del sistema ganando antes que defaultTheme.',
      items: [
        {
          title: '1. El tema persistido gana primero',
          description: 'Si storage esta habilitado y devuelve un tema registrado, Nuvex UI arranca ahi antes de evaluar cualquier otra fuente.',
        },
        {
          title: '2. La preferencia del sistema gana despues',
          description: 'Si no hay tema persistido y la deteccion del sistema esta habilitada, prefers-color-scheme resuelve a light o dark cuando esos temas existen.',
        },
        {
          title: '3. defaultTheme solo entra como siguiente fallback',
          description: 'defaultTheme se usa despues de storage y de la preferencia del sistema, no antes.',
        },
        {
          title: '4. Light built-in es la red final de seguridad',
          description: 'Si nada mas resuelve y light existe, el framework cae en light como ultimo baseline.',
        },
      ],
    },
    'dom-theme-contract': {
      title: 'Contrato de tema en el DOM',
      description:
        'Cuando un tema queda activo, Nuvex UI escribe el atributo de tema en documentElement y, cuando isDark esta definido, aplica tambien el color-scheme correspondiente. Ese es el contrato que consumen el CSS de tu app y los selectores especificos por tema.',
    },
    'adopt-in-vue-and-nuxt': {
      title: 'Adopta light y dark en Vue y Nuxt',
      description:
        'La configuracion normal es pequena: conserva los temas built-in, decide si storage y preferencia del sistema quedan habilitados, y define defaultTheme solo cuando el producto necesita otro baseline de arranque.',
      calloutDescription:
        'Esta pagina trata del consumo del baseline built-in. Si la siguiente tarea es alternar, persistir o reaccionar a cambios de tema desde componentes, continua en Runtime Theme API.',
    },
    'customize-light-and-dark': {
      title: 'Personaliza light y dark sin crear un tema nuevo',
      description:
        'Usa Sass tokens para cambiar el baseline del framework en build-time, o CSS variables cuando el override pertenece a la cascada. No intentes re-registrar light o dark dentro de theme options solo para restilizarlos.',
      calloutDescription:
        'Los temas built-in no se reemplazan a traves del registro themes del plugin. Su personalizacion visual vive en Design Tokens y CSS Variables.',
      items: [
        {
          title: 'Design Tokens',
          description: 'Cambia el baseline del framework en build-time cuando light y dark deben partir de valores Sass distintos.',
        },
        {
          title: 'CSS Variables',
          description: 'Quedate en la cascada cuando el override pertenece al scope de la app, a selectores por tema o a un ajuste local de superficie.',
        },
      ],
    },
    'stay-on-base-themes': {
      title: 'Cuando quedarte en los temas base',
      description:
        'Quedate en light y dark cuando el producto sigue encajando en el modelo built-in y solo necesita refinamiento visual. Pasa a custom themes solo cuando realmente necesitas una variante nombrada adicional con identidad propia y una ruta runtime de seleccion.',
      note:
        'Pasa a custom themes solo cuando el producto necesita otra opcion runtime nombrada. Si la necesidad es solo refinamiento visual, conserva light y dark y personaliza el baseline.',
    },
    'next-steps': {
      title: 'Siguientes pasos recomendados',
      description:
        'Continua con la pagina que coincide con el siguiente cambio real de theming despues de estabilizar el baseline built-in.',
      items: [
        {
          title: 'Runtime Theme API',
          description: 'Ve ahi si el siguiente problema es alternar, persistir o reaccionar al tema activo desde codigo.',
        },
        {
          title: 'Design Tokens',
          description: 'Continua ahi si el baseline del framework necesita un ajuste Sass en build-time.',
        },
        {
          title: 'CSS Variables',
          description: 'Continua ahi si el cambio pertenece a la cascada o a un selector especifico por tema.',
        },
        {
          title: 'Custom Themes',
          description: 'Ve ahi solo cuando el producto realmente necesita otro tema nombrado ademas de light y dark.',
        },
      ],
    },
  },
}

export const lightAndDarkThemesPages = {
  lightAndDarkThemes: lightAndDarkThemesEditorialContentEs,
} as const

export default lightAndDarkThemesPages