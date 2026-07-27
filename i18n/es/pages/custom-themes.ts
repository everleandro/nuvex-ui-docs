import type { DocsCustomThemesSectionKey, DocsWorkflowPageContent } from '~/types/docs'

export const customThemesEditorialContentEs: DocsWorkflowPageContent<DocsCustomThemesSectionKey> = {
  kind: 'workflow',
  seo: {
    title: 'Custom Themes',
    description:
      'Crea y registra temas nombrados adicionales en Nuvex UI sin reemplazar el baseline built-in de light y dark.',
  },
  hero: {
    title: 'Custom Themes',
    description:
      'Usa esta pagina cuando el producto necesita otro tema nombrado como ocean, brand-x o campaign-dark. La meta es agregar otra opcion runtime sin romper el baseline built-in que Nuvex UI ya entrega.',
    prerequisitesTitle: 'Lo que el framework ya soporta',
    actions: [
      {
        key: 'back-to-light-and-dark-themes',
        label: 'Volver a Light and Dark Themes',
      },
      {
        key: 'open-runtime-theme-api',
        label: 'Abrir Runtime Theme API',
      },
    ],
    prerequisites: [
      'Nuvex UI ya incluye <code class="docs-inline-code">light</code> y <code class="docs-inline-code">dark</code>. Un custom theme agrega otra opcion nombrada; no reemplaza el baseline built-in.',
      'Los custom themes se registran mediante <code class="docs-inline-code">theme.themes</code> al arranque o mediante <code class="docs-inline-code">registerTheme</code> en runtime.',
      'Si el producto solo necesita refinar la apariencia actual de light o dark, quedate en <code class="docs-inline-code">Design Tokens</code> o <code class="docs-inline-code">CSS Variables</code> en lugar de crear otro nombre de tema.',
    ],
  },
  sections: {
    'define-theme-object': {
      title: 'Define el objeto de tema',
      description:
        'La definicion de un custom theme debe mantenerse pequena: dale un nombre estable, un label opcional, decide si se comporta como dark y aporta solo los overrides runtime de tokens que hacen distinto a ese tema.',
    },
    'register-at-startup': {
      title: 'Registra custom themes al arranque',
      description:
        'El registro al arranque es la via normal cuando el tema extra forma parte del shell del producto desde el inicio. Agregalo en theme.themes para que aparezca inmediatamente en el registry y pueda participar en la resolucion inicial.',
      calloutDescription:
        'Usa registro al arranque para temas de producto que conoces de antemano. Recurre al registro en runtime solo cuando los temas aparecen de forma condicional o se cargan despues.',
    },
    'operate-at-runtime': {
      title: 'Opera custom themes en runtime',
      description:
        'Una vez registrado, un custom theme se comporta como cualquier otro tema en la runtime API. Puedes consultarlo, activarlo, listarlo o volver a removerlo cuando el flujo del producto lo necesite.',
      calloutDescription:
        'Esta pagina se centra en el ciclo de vida del custom theme. Si el siguiente problema son toggles, persistencia o estado del tema activo desde componentes, continua en Runtime Theme API.',
    },
    'built-in-theme-limits': {
      title: 'Respeta los limites de los temas built-in',
      description:
        'El registro del plugin es para temas adicionales, no para redefinir light o dark. Los temas built-in no se pueden volver a registrar ni remover mediante la ruta de custom themes.',
      note:
        'Si necesitas cambiar como se ven light o dark, personaliza el baseline. Si necesitas otra rama runtime nombrada, crea un custom theme.',
    },
    'next-steps': {
      title: 'Siguientes pasos recomendados',
      description:
        'Continua con la pagina que coincide con la siguiente tarea real despues de que el custom theme ya existe en el registry.',
      items: [
        {
          title: 'Runtime Theme API',
          description: 'Ve ahi si la siguiente tarea es seleccionar, persistir o reaccionar al custom theme activo desde codigo.',
        },
        {
          title: 'Light and Dark Themes',
          description: 'Vuelve ahi si el producto todavia encaja en el modelo built-in y este custom theme podria ser innecesario.',
        },
        {
          title: 'Design Tokens',
          description: 'Continua ahi si el cambio real sigue siendo una decision visual de baseline en build-time.',
        },
        {
          title: 'CSS Variables',
          description: 'Continua ahi si el tema nuevo necesita ajustes de cascada con alcance despues del registro.',
        },
      ],
    },
  },
}

export const customThemesPages = {
  customThemes: customThemesEditorialContentEs,
} as const

export default customThemesPages