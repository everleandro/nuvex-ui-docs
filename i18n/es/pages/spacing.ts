import type { DocsConceptPageContent, DocsSpacingSectionKey } from '~/types/docs'

export const spacingEditorialContentEs: DocsConceptPageContent<DocsSpacingSectionKey> = {
  kind: 'concept',
  seo: {
    title: 'Spacing',
    description:
      'Aprende los helpers publicos de spacing expuestos por Nuvex UI, inspecciona su sintaxis y previsualiza clases de margin y padding con la escala documentada del framework.',
  },
  hero: {
    title: 'Spacing',
    description:
      'El spacing en Nuvex UI se expone mediante clases publicas para margin, padding y gap. Usa esta pagina para inspeccionar la sintaxis de los helpers, revisar los modificadores de direccion soportados y copiar ejemplos listos para el framework basados en la escala documentada.',
    actions: [
      {
        key: 'open-flexbox',
        label: 'Abrir flexbox',
      },
      {
        key: 'open-display-helpers',
        label: 'Abrir helpers de display',
      },
    ],
  },
  sections: {
    usage: {
      type: 'card-grid',
      key: 'usage',
      title: 'Uso',
      description:
        'Previsualiza los helpers de margin y padding contra la escala de spacing del framework. Ajusta direccion y tamano para generar las clases exactas usadas por el ejemplo renderizado.',
      labels: {
        paddingDirection: 'Direccion de padding',
        paddingSize: 'Tamano de padding',
        marginDirection: 'Direccion de margin',
        marginSize: 'Tamano de margin',
        all: 'Todos',
        horizontal: 'Horizontal',
        vertical: 'Vertical',
        top: 'Superior',
        right: 'Derecha',
        bottom: 'Inferior',
        left: 'Izquierda',
        marginClass: 'Clase de margin',
        paddingClass: 'Clase de padding',
        previewTitle: 'Preview de helpers',
        previewBody: 'Cambia los selectores para inspeccionar como cada helper se traduce al nombre de clase generado.',
      },
    },
    'class-syntax': {
      type: 'card-grid',
      key: 'class-syntax',
      title: 'Sintaxis de clases',
      descriptionHtml:
        'Los helpers de spacing combinan un prefijo de propiedad, un modificador de direccion opcional y un valor de escala. Usa <code class="docs-inline-code">m-*</code> para margin, <code class="docs-inline-code">p-*</code> para padding y variantes direccionales cuando quieras acotar la regla a un subconjunto de lados.',
      description:
        'Los helpers de spacing combinan un prefijo de propiedad, un modificador de direccion opcional y un valor de escala. Usa los prefijos de margin y padding directamente, y agrega direccion solo cuando haga falta.',
      items: [
        {
          title: 'Todos los lados',
          description: 'Usa m-{n} y p-{n} para aplicar spacing en todos los lados de un elemento.',
        },
        {
          title: 'Modificadores por eje',
          description: 'Usa mx-{n}, my-{n}, px-{n} y py-{n} para spacing horizontal o vertical.',
        },
        {
          title: 'Modificadores por lado',
          description: 'Usa mt-{n}, mr-{n}, mb-{n}, ml-{n} y los helpers equivalentes de padding para un solo lado.',
        },
        {
          title: 'Margin negativo',
          description: 'Los helpers negativos existen solo para margin, como m-n2 y ml-n4.',
        },
      ],
      itemsHtml: {
        'Todos los lados': 'Usa <code class="docs-inline-code">m-{n}</code> y <code class="docs-inline-code">p-{n}</code> para aplicar spacing en todos los lados de un elemento.',
        'Modificadores por eje': 'Usa <code class="docs-inline-code">mx-{n}</code>, <code class="docs-inline-code">my-{n}</code>, <code class="docs-inline-code">px-{n}</code> y <code class="docs-inline-code">py-{n}</code> para spacing horizontal o vertical.',
        'Modificadores por lado': 'Usa <code class="docs-inline-code">mt-{n}</code>, <code class="docs-inline-code">mr-{n}</code>, <code class="docs-inline-code">mb-{n}</code>, <code class="docs-inline-code">ml-{n}</code> y los helpers equivalentes de padding para un solo lado.',
        'Margin negativo': 'Los helpers negativos existen solo para margin, como <code class="docs-inline-code">m-n2</code> y <code class="docs-inline-code">ml-n4</code>.',
      },
    },
    'direction-modifiers': {
      type: 'card-grid',
      key: 'direction-modifiers',
      title: 'Modificadores de direccion',
      description:
        'Los modificadores de direccion se comparten entre los helpers de spacing. Cuando no hay modificador, el helper aplica a todos los lados.',
      items: [
        {
          title: 'Sin sufijo',
          description: 'Aplica spacing a todos los lados, por ejemplo p-4 o m-2.',
        },
        {
          title: 'x',
          description: 'Aplica sobre el eje horizontal: izquierda y derecha.',
        },
        {
          title: 'y',
          description: 'Aplica sobre el eje vertical: superior e inferior.',
        },
        {
          title: 't, r, b, l',
          description: 'Apunta a un solo lado: superior, derecha, inferior o izquierda.',
        },
      ],
      itemsHtml: {
        'Sin sufijo': 'Aplica spacing a todos los lados, por ejemplo <code class="docs-inline-code">p-4</code> o <code class="docs-inline-code">m-2</code>.',
        't, r, b, l': 'Apunta a un solo lado con <code class="docs-inline-code">t</code>, <code class="docs-inline-code">r</code>, <code class="docs-inline-code">b</code> o <code class="docs-inline-code">l</code>.',
      },
    },
    'scale-reference': {
      type: 'card-grid',
      key: 'scale-reference',
      title: 'Referencia de escala',
      description:
        'Los helpers de spacing documentados en esta pagina usan valores de escala del framework de 0 a 12. Cada paso se mapea a la base de spacing configurada por el generador de utilidades.',
    },
    'implementation-examples': {
      type: 'card-grid',
      key: 'implementation-examples',
      title: 'Ejemplos de implementacion',
      description:
        'Estos ejemplos muestran helpers de spacing escritos directamente en markup del framework para que el patron pueda copiarse a vistas y templates de componentes.',
      items: [
        {
          title: 'Padding de superficie',
          description: 'Aplica helpers de padding directamente sobre una superficie de contenido o un wrapper de card.',
        },
        {
          title: 'Separacion de secciones',
          description: 'Usa helpers direccionales de margin para separar bloques consecutivos de contenido.',
        },
        {
          title: 'Gaps entre items',
          description: 'Los helpers de gap pertenecen a la misma capa utilitaria y funcionan bien para hijos repetidos en linea o en stack.',
        },
      ],
    },
    'framework-notes': {
      type: 'list',
      key: 'framework-notes',
      title: 'Notas del framework',
      description:
        'Estas notas documentan comportamiento del framework util al leer o generar helpers de spacing dentro de un proyecto Nuvex UI.',
      items: [
        'Los helpers de spacing se generan desde la hoja de utilidades compartida y no desde componentes individuales.',
        'La escala publica documentada en esta pagina va de 0 a 12.',
        'Los helpers de margin soportan valores negativos mediante el sufijo n, como m-n2 y mx-n4.',
        'Los helpers de gap siguen la misma escala numerica mediante gap-{n}, gap-x-{n} y gap-y-{n}.',
      ],
      itemsHtml: {
        'Los helpers de margin soportan valores negativos mediante el sufijo n, como m-n2 y mx-n4.': 'Los helpers de margin soportan valores negativos mediante el sufijo <code class="docs-inline-code">n</code>, como <code class="docs-inline-code">m-n2</code> y <code class="docs-inline-code">mx-n4</code>.',
        'Los helpers de gap siguen la misma escala numerica mediante gap-{n}, gap-x-{n} y gap-y-{n}.': 'Los helpers de gap siguen la misma escala numerica mediante <code class="docs-inline-code">gap-{n}</code>, <code class="docs-inline-code">gap-x-{n}</code> y <code class="docs-inline-code">gap-y-{n}</code>.',
      },
    },
  },
}

export const spacingPages = {
  spacing: spacingEditorialContentEs,
} as const

export default spacingPages