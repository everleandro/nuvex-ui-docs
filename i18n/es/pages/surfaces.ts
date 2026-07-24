import type { DocsConceptPageContent, DocsSurfacesSectionKey } from '~/types/docs'

export const surfacesEditorialContentEs: DocsConceptPageContent<DocsSurfacesSectionKey> = {
  kind: 'concept',
  seo: {
    title: 'Superficies',
    description:
      'Aprende como Nuvex UI usa tokens de superficie para construir jerarquia estructural, preservar contraste y mantener decisiones de layout consistentes entre temas.',
  },
  hero: {
    title: 'Superficies',
    description:
      'Las superficies definen la jerarquia estructural de la interfaz. Usa surface-canvas, surface-base, surface-raised y surface-subtle para separar fondos, contenedores de contenido y capas elevadas sin depender de colores semanticos. Cada superficie tambien establece su contexto de contraste correspondiente para que texto e iconos se mantengan legibles en light y dark.',
    descriptionHtml:
      'Las superficies definen la jerarquia estructural de la interfaz. Usa <code class="docs-inline-code">surface-canvas</code>, <code class="docs-inline-code">surface-base</code>, <code class="docs-inline-code">surface-raised</code> y <code class="docs-inline-code">surface-subtle</code> para separar fondos, contenedores de contenido y capas elevadas sin depender de colores semanticos. Cada superficie tambien establece su contexto de contraste correspondiente para que texto e iconos se mantengan legibles en light y dark.',
    actions: [
      {
        key: 'open-colors',
        label: 'Abrir colores',
      },
      {
        key: 'open-theming-overview',
        label: 'Abrir overview de theming',
      },
    ],
  },
  sections: {
    'surface-roles': {
      type: 'card-grid',
      key: 'surface-roles',
      title: 'Roles de superficie',
      description:
        'Cada token de superficie representa un nivel distinto de enfasis estructural. Elige el token que coincida con el rol de la capa, no con la decoracion que quieras agregar.',
      items: [
        {
          title: 'surface-canvas',
          description: 'Usalo para el fondo de la aplicacion y la capa principal del viewport.',
        },
        {
          title: 'surface-base',
          description: 'Usalo para contenedores de contenido por defecto como cards, paneles y secciones principales.',
        },
        {
          title: 'surface-raised',
          description: 'Usalo para capas persistentes o elevadas que necesiten separarse con mayor claridad de la superficie base.',
        },
        {
          title: 'surface-subtle',
          description: 'Usalo para enfasis ligero y zonas de apoyo. Evita usarlo como fondo estructural dominante de una pagina.',
        },
      ],
    },
    'contrast-pairing': {
      type: 'callout',
      key: 'contrast-pairing',
      title: 'Pareja de contraste',
      description:
        'Las superficies no son tokens de fondo solamente. Cada una esta emparejada con un color de contraste correspondiente para que el contenido frontal siga siendo legible en cualquier tema.',
      body: 'Cuando un layout usa surface-canvas, surface-base, surface-raised o surface-subtle, el texto y los iconos dentro de esa capa deberian seguir el contexto de contraste correspondiente en lugar de asumir un foreground fijo. Por ejemplo, surface-base trabaja con contrast-surface-base y surface-raised con contrast-surface-raised.',
      bodyHtml:
        'Cuando un layout usa <code class="docs-inline-code">surface-canvas</code>, <code class="docs-inline-code">surface-base</code>, <code class="docs-inline-code">surface-raised</code> o <code class="docs-inline-code">surface-subtle</code>, el texto y los iconos dentro de esa capa deberian seguir el contexto de contraste correspondiente en lugar de asumir un foreground fijo. Por ejemplo, <code class="docs-inline-code">surface-base</code> trabaja con <code class="docs-inline-code">contrast-surface-base</code> y <code class="docs-inline-code">surface-raised</code> con <code class="docs-inline-code">contrast-surface-raised</code>.',
    },
    'layering-rule': {
      type: 'callout',
      key: 'layering-rule',
      title: 'Como apilar superficies',
      description: 'Construye layouts con una progresion visual estable.',
      bodyHtml:
        'Usa <code class="docs-inline-code">surface-canvas -&gt; surface-base -&gt; surface-raised -&gt; surface-subtle</code> como recorrido de apilado por defecto. Empieza por la capa mas estructural y sube solo cuando la interfaz necesite mayor separacion o enfasis. Evita saltar de <code class="docs-inline-code">surface-canvas</code> directamente a <code class="docs-inline-code">surface-subtle</code> para la jerarquia principal de una pantalla.',
    },
    'recommended-mappings': {
      type: 'list',
      key: 'recommended-mappings',
      title: 'Mapeos recomendados',
      description:
        'Estos mapeos ayudan a mantener el sistema predecible entre layouts y componentes. Un dashboard puede usar surface-canvas para el fondo general, surface-base para el contenido principal, surface-raised para el chrome persistente y surface-subtle solo para enfasis de apoyo.',
      items: [
        'Fondo de aplicacion: surface-canvas',
        'Paneles y cards por defecto: surface-base',
        'Bars y chrome persistente elevado: surface-raised',
        'Drawers flotantes o capas contextuales elevadas: surface-raised',
        'Bloques neutrales de enfasis de apoyo: surface-subtle',
      ],
      itemsHtml: {
        'Fondo de aplicacion: surface-canvas': 'Fondo de aplicacion: <code class="docs-inline-code">surface-canvas</code>',
        'Paneles y cards por defecto: surface-base': 'Paneles y cards por defecto: <code class="docs-inline-code">surface-base</code>',
        'Bars y chrome persistente elevado: surface-raised': 'Bars y chrome persistente elevado: <code class="docs-inline-code">surface-raised</code>',
        'Drawers flotantes o capas contextuales elevadas: surface-raised': 'Drawers flotantes o capas contextuales elevadas: <code class="docs-inline-code">surface-raised</code>',
        'Bloques neutrales de enfasis de apoyo: surface-subtle': 'Bloques neutrales de enfasis de apoyo: <code class="docs-inline-code">surface-subtle</code>',
      },
    },
  },
}

export const surfacesPages = {
  surfaces: surfacesEditorialContentEs,
} as const

export default surfacesPages