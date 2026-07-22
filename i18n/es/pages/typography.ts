import type { DocsConceptPageContent, DocsTypographySectionKey } from '~/types/docs'

export const typographyEditorialContentEs: DocsConceptPageContent<DocsTypographySectionKey> = {
  kind: 'concept',
  seo: {
    title: 'Tipografia',
    description:
      'Referencia las clases publicas de tipografia expuestas por Nuvex UI, compara su jerarquia y copia el uso exacto de clase mostrado en cada ejemplo.',
  },
  hero: {
    title: 'Tipografia',
    description:
      'La tipografia en Nuvex UI se expone mediante clases publicas para jerarquia, roles de interfaz y contextos de texto especializados. Usa esta pagina para comparar cada clase visualmente, entender cuando aplicarla y copiar el mismo patron de markup mostrado en los snippets.',
    actions: [
      {
        key: 'open-colors',
        label: 'Abrir colores',
      },
      {
        key: 'open-surfaces',
        label: 'Abrir superficies',
      },
    ],
  },
  sections: {
    usage: {
      type: 'card-grid',
      key: 'usage',
      title: 'Uso',
      description:
        'Estos son los roles de texto base usados a lo largo de la interfaz. Cada card aplica una clase publica directamente sobre una muestra corta para que puedas copiar el mismo patron en labels, cards y texto de apoyo.',
    },
    hierarchy: {
      type: 'card-grid',
      key: 'hierarchy',
      title: 'Escala jerarquica',
      description:
        'La escala de headings se expone mediante .type-h1 a .type-h6. Usala cuando la etiqueta HTML semantica no sea suficiente o cuando la composicion de UI requiera un estilo de heading sobre otro elemento.',
      descriptionHtml:
        'La escala de headings se expone mediante <code class="docs-inline-code">.type-h1</code> a <code class="docs-inline-code">.type-h6</code>. Usala cuando la etiqueta HTML semantica no sea suficiente o cuando la composicion de UI requiera un estilo de heading sobre otro elemento.',
    },
    'specialized-roles': {
      type: 'card-grid',
      key: 'specialized-roles',
      title: 'Roles especializados',
      descriptionHtml:
        'Algunos roles tipograficos se reservan para contextos mas acotados, como <code class="docs-inline-code">.type-dialog-title</code> y <code class="docs-inline-code">.type-dialog-lead</code>. Mantenlos en esos momentos de UI para que la jerarquia general siga siendo predecible.',
      description:
        'Algunos roles tipograficos estan pensados para contextos mas acotados, como titulos de dialogo y copy de apoyo dentro del dialogo. Mantenlos en esos momentos para que la jerarquia general siga siendo predecible.',
    },
  },
}

export const typographyPages = {
  typography: typographyEditorialContentEs,
} as const

export default typographyPages