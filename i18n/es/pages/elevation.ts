import type { DocsConceptPageContent, DocsElevationSectionKey } from '~/types/docs'

export const elevationEditorialContentEs: DocsConceptPageContent<DocsElevationSectionKey> = {
  kind: 'concept',
  seo: {
    title: 'Elevation',
    description:
      'Aprende los helpers publicos de elevation expuestos por Nuvex UI, inspecciona la escala de profundidad disponible y copia los nombres de clase usados para superponer superficies de forma consistente.',
  },
  hero: {
    title: 'Elevation',
    description:
      'Elevation en Nuvex UI se expone mediante clases utilitarias que definen profundidad para superficies, barras y paneles superpuestos. Usa esta pagina para previsualizar cada nivel, entender la escala y copiar los nombres exactos de clase usados por el framework.',
    actions: [
      {
        key: 'open-spacing-helpers',
        label: 'Abrir helpers de espaciado',
      },
      {
        key: 'open-flexbox',
        label: 'Abrir flexbox',
      },
    ],
  },
  sections: {
    usage: {
      type: 'card-grid',
      key: 'usage',
      title: 'Uso',
      description:
        'Elige un nivel de elevation e inspecciona la clase generada sobre una superficie neutra. Usa el resultado como token copiable para UI con capas.',
      labels: {
        level: 'Nivel de elevation',
        xs: 'xs',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
        xl: 'xl',
        classList: 'Clases generadas',
      },
    },
    'class-syntax': {
      type: 'card-grid',
      key: 'class-syntax',
      title: 'Sintaxis de clases',
      descriptionHtml:
        'Los helpers de elevation se expresan como <code class="docs-inline-code">e-elevation--{nivel}</code>. Apliquelos sobre la superficie raiz del elemento que deba recibir profundidad.',
      description:
        'Los helpers de elevation se expresan con un sufijo de nivel simple y deben aplicarse sobre la superficie raiz que necesite profundidad.',
      items: [
        {
          title: 'Sufijo de nivel',
          description: 'Usa xs, sm, md, lg o xl para expresar la intensidad de la sombra.',
        },
        {
          title: 'Superficie raiz',
          description: 'Aplica elevation al contenedor externo, no a bloques internos de contenido.',
        },
        {
          title: 'Espaciado y radio',
          description: 'Combina elevation con bordes redondeados y espaciado interno para formar una superficie completa.',
        },
      ],
      itemsHtml: {
        'Sufijo de nivel': 'Usa <code class="docs-inline-code">xs</code>, <code class="docs-inline-code">sm</code>, <code class="docs-inline-code">md</code>, <code class="docs-inline-code">lg</code> o <code class="docs-inline-code">xl</code> para expresar la intensidad de la sombra.',
        'Superficie raiz': 'Aplica elevation al contenedor externo, no a bloques internos de contenido.',
        'Espaciado y radio': 'Combina elevation con bordes redondeados y espaciado interno para formar una superficie completa.',
      },
    },
    'scale-reference': {
      type: 'card-grid',
      key: 'scale-reference',
      title: 'Referencia de escala',
      description:
        'La escala documentada de elevation va desde la elevacion mas suave hasta la profundidad mas fuerte.',
      items: [
        {
          title: 'xs',
          description: 'Profundidad muy sutil para el tratamiento mas ligero.',
        },
        {
          title: 'sm',
          description: 'Elevation sutil por defecto para superficies de baja presencia.',
        },
        {
          title: 'md',
          description: 'Profundidad equilibrada para superficies levantadas y barras.',
        },
        {
          title: 'lg',
          description: 'Separacion clara para superficies flotantes mas prominentes.',
        },
        {
          title: 'xl',
          description: 'La profundidad documentada mas fuerte para superficies muy elevadas.',
        },
      ],
    },
    'implementation-examples': {
      type: 'card-grid',
      key: 'implementation-examples',
      title: 'Ejemplos de implementacion',
      description:
        'Usa elevation directamente sobre superficies que necesiten separacion visual del fondo de pagina.',
      items: [
        {
          title: 'Panel compacto',
          description: 'Una superficie pequena con padding y un token de sombra sutil.',
        },
        {
          title: 'Barra de herramientas',
          description: 'Una barra horizontal elevada con espaciado equilibrado y separacion mas clara.',
        },
        {
          title: 'Hoja flotante',
          description: 'Un panel superpuesto que se separa del resto de la interfaz.',
        },
      ],
    },
    'framework-notes': {
      type: 'list',
      key: 'framework-notes',
      title: 'Notas del framework',
      description:
        'Estas notas resumen como se espera que se use elevation dentro del sistema de utilidades.',
      items: [
        'Usa el nivel mas bajo que aun permita separar la superficie del fondo.',
        'Combina elevation con bordes redondeados y espaciado en lugar de sobrescribir box-shadow manualmente.',
        'Mantén elevation alineado con la jerarquia para que las superficies se lean de forma predecible en toda la app.',
      ],
    },
  },
}

export const elevationPages = {
  elevation: elevationEditorialContentEs,
} as const

export default elevationPages
