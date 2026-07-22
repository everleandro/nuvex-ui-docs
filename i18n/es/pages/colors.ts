import type { DocsColorsSectionKey, DocsConceptPageContent } from '~/types/docs'

export const colorsEditorialContentEs: DocsConceptPageContent<DocsColorsSectionKey> = {
  kind: 'concept',
  seo: {
    title: 'Colores',
    description:
      'Consulta los tokens semanticos, tokens de superficie, paletas primitivas y helper classes que Nuvex UI usa para construir interfaces consistentes.',
  },
  hero: {
    title: 'Colores',
    description:
      'Nuvex UI organiza el color en tokens semanticos para significado de producto, tokens de superficie para contexto estructural y paletas primitivas para rango tonal. Usa esta pagina para elegir la capa correcta, aplicar helper classes con criterio y consultar las variables CSS detras de cada familia de tokens.',
    actions: [
      {
        key: 'open-theming-overview',
        label: 'Abrir overview de theming',
      },
      {
        key: 'open-surfaces',
        label: 'Abrir superficies',
      },
    ],
  },
  sections: {
    'background-helpers': {
      type: 'callout',
      key: 'background-helpers',
      title: 'Helpers de fondo',
      description:
        'Helpers de fondo como .primary o .success aplican color de fondo con el tratamiento de contraste correspondiente desde el sistema de tokens. Usalos para prototipado rapido, enfasis de estado y estados simples de interfaz sin CSS personalizado.',
      descriptionHtml:
        'Helpers de fondo como <code class="docs-inline-code">.primary</code> o <code class="docs-inline-code">.success</code> aplican color de fondo con el tratamiento de contraste correspondiente desde el sistema de tokens. Usalos para prototipado rapido, enfasis de estado y estados simples de interfaz sin CSS personalizado.',
    },
    'text-helpers': {
      type: 'callout',
      key: 'text-helpers',
      title: 'Helpers de texto',
      description:
        'Usa helpers --text cuando la superficie deba mantenerse neutral pero el contenido todavia necesite enfasis semantico o tonal. Estos helpers afectan el color del texto, el caret y la herencia de fill en SVG.',
      descriptionHtml:
        'Usa helpers <code class="docs-inline-code">--text</code> cuando la superficie deba mantenerse neutral pero el contenido todavia necesite enfasis semantico o tonal. Estos helpers afectan el color del texto, el caret y la herencia de fill en SVG.',
      labels: {
        previewHtml:
          'Usa helpers de color de texto para agregar enfasis sin cambiar la superficie que los rodea. Aplica <code class="docs-inline-code primary--text">.primary--text</code> en acciones principales, <code class="docs-inline-code secondary--text">.secondary--text</code> en informacion de apoyo, <code class="docs-inline-code success--text">.success--text</code> en feedback de exito, <code class="docs-inline-code warning--text">.warning--text</code> en advertencias, <code class="docs-inline-code error--text">.error--text</code> en errores y <code class="docs-inline-code info--text">.info--text</code> en estados informativos. Cuando un diseno necesite mayor rango tonal, usa helpers primitivos como <code class="docs-inline-code blue-500--text">.blue-500--text</code>, <code class="docs-inline-code teal-600--text">.teal-600--text</code>, <code class="docs-inline-code purple-400--text">.purple-400--text</code> y <code class="docs-inline-code neutral-700--text">.neutral-700--text</code>.',
      },
    },
    'palette-reference': {
      type: 'card-grid',
      key: 'palette-reference',
      title: 'Referencia de paleta',
      description:
        'Nuvex UI expone tokens semanticos para significado de producto, tokens de superficie para capas base de la interfaz y paletas primitivas para un control tonal mas amplio. Empieza por las capas semantica y de superficie para mantener consistencia, y usa escalas primitivas cuando necesites un matiz visual mas especifico.',
      labels: {
        semantic: 'Colores semanticos',
        semanticDescription: 'Usa estos tokens para acciones, feedback y significados de estado que deban mantenerse consistentes en todo el producto.',
        surfaces: 'Tokens de superficie y soporte',
        surfacesDescription: 'Usa estos tokens para canvas, paneles, campos, labels, bordes y estados disabled para que las superficies estructurales se mantengan predecibles entre temas.',
        primitive: 'Paletas primitivas',
        primitiveDescription: 'Usa paletas primitivas cuando un diseno necesite mas rango tonal que la capa semantica, ya sea mediante helper classes o referencias directas a variables CSS.',
      },
    },
  },
}

export const colorsPages = {
  colors: colorsEditorialContentEs,
} as const

export default colorsPages