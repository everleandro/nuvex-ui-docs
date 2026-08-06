import type {
  DocsConceptPageContent,
  DocsFlexboxSectionKey,
} from "~/types/docs";

export const flexboxEditorialContentEs: DocsConceptPageContent<DocsFlexboxSectionKey> =
  {
    kind: "concept",
    seo: {
      title: "Flexbox",
      description:
        "Aprende los helpers publicos de flexbox de Nuvex UI, inspecciona combinaciones de clases y compone patrones de layout sin usar clases row y col de grid.",
    },
    hero: {
      title: "Flexbox",
      description:
        "Flexbox en Nuvex UI se expone mediante clases utilitarias para direccion, wrap, alineacion y tamano de items. Usa esta pagina para combinar helpers con seguridad sin apoyarte en clases row y col de grid.",
      actions: [
        {
          key: "open-spacing-helpers",
          label: "Abrir helpers de espaciado",
        },
        {
          key: "open-display-helpers",
          label: "Abrir helpers de display",
        },
      ],
    },
    sections: {
      usage: {
        type: "card-grid",
        key: "usage",
        title: "Uso",
        description:
          "Previsualiza como se combinan los helpers de direccion, wrap, alineacion y gap en un mismo contenedor flex. Ajusta controles y copia el set de clases resultante.",
        labels: {
          display: "Modo de display",
          direction: "Direccion",
          wrap: "Wrap",
          justify: "Justify",
          align: "Alinear items",
          gap: "Tamano de gap",
          block: "Flex en bloque",
          inline: "Flex en linea",
          row: "Fila",
          column: "Columna",
          noWrap: "Sin wrap",
          wrapEnabled: "Con wrap",
          start: "Inicio",
          center: "Centro",
          end: "Final",
          between: "Espacio entre",
          around: "Espacio alrededor",
          stretch: "Stretch",
          baseline: "Baseline",
          classList: "Clases generadas",
          previewTitle: "Preview de helpers renderizados",
          previewBody:
            "Usa los selectores para probar combinaciones antes de copiar el markup a vistas de app.",
        },
      },
      "class-syntax": {
        type: "card-grid",
        key: "class-syntax",
        title: "Sintaxis de clases",
        descriptionHtml:
          'Los helpers de flexbox se arman con clases de display, direccion, alineacion y espaciado. Comienza con <code class="docs-inline-code">d-flex</code> o <code class="docs-inline-code">d-inline-flex</code> y despues compone solo los modificadores que el layout necesite.',
        description:
          "Los helpers de flexbox se arman con clases de display, direccion, alineacion y espaciado. Comienza con una clase de display y agrega solo los modificadores que el layout necesite.",

        itemsHtml: {
          "Display base":
            'Usa <code class="docs-inline-code">d-flex</code> para contenedores en bloque y <code class="docs-inline-code">d-inline-flex</code> para contextos de flujo inline.',
          "Direccion y wrap":
            'Usa <code class="docs-inline-code">flex-row</code> o <code class="docs-inline-code">flex-column</code>, y activa <code class="docs-inline-code">flex-wrap</code> solo cuando los items deban saltar de linea.',
          "Alineacion por ejes":
            'Usa <code class="docs-inline-code">justify-*</code> para distribuir en eje principal y <code class="docs-inline-code">items-*</code> para alinear en eje cruzado.',
          "Par de espaciado":
            'Usa <code class="docs-inline-code">gap-{n}</code>, <code class="docs-inline-code">gap-x-{n}</code> o <code class="docs-inline-code">gap-y-{n}</code> para separar hijos sin overrides de margin custom.',
        },
      },
      "axis-behavior": {
        type: "card-grid",
        key: "axis-behavior",
        title: "Comportamiento por ejes",
        description:
          "El eje principal y el eje cruzado cambian cuando cambia la direccion. Ten este mapeo en mente antes de combinar justify e items.",
        itemsHtml: {
          "Direccion row":
            'Con <code class="docs-inline-code">flex-row</code>, <code class="docs-inline-code">justify-*</code> controla flujo horizontal e <code class="docs-inline-code">items-*</code> controla alineacion vertical.',
          "Direccion column":
            'Con <code class="docs-inline-code">flex-column</code>, <code class="docs-inline-code">justify-*</code> controla flujo vertical e <code class="docs-inline-code">items-*</code> controla alineacion horizontal.',
        },
      },
      "direction-wrapping": {
        type: "card-grid",
        key: "direction-wrapping",
        title: "Direccion y wrapping",
        description:
          "La direccion define el orden del flujo y el wrap define si los hijos quedan en una linea o se distribuyen en lineas adicionales.",
        itemsHtml: {
          "Flujo en una linea":
            'Usa <code class="docs-inline-code">flex-nowrap</code> para barras de acciones compactas o grupos que deban mantenerse en una sola linea.',
          "Flujo adaptativo":
            'Usa <code class="docs-inline-code">flex-wrap</code> para filtros, chips o controles repetidos que necesiten wrapping responsive.',
        },
      },
      alignment: {
        type: "card-grid",
        key: "alignment",
        title: "Matriz de alineacion",
        description:
          "Las combinaciones frecuentes son mas faciles de leer cuando se expresan como pares de clases.",
        itemsHtml: {
          "Par centrado":
            '<code class="docs-inline-code">justify-center</code> + <code class="docs-inline-code">items-center</code> centra contenido sobre ambos ejes.',
          "Fila distribuida":
            '<code class="docs-inline-code">justify-between</code> + <code class="docs-inline-code">items-center</code> separa acciones iniciales y finales manteniendo alineacion vertical.',
          "Texto por baseline":
            '<code class="docs-inline-code">items-baseline</code> ayuda a alinear en una linea textos con tamanos distintos.',
        },
      },
      "item-sizing": {
        type: "card-grid",
        key: "item-sizing",
        title: "Helpers de tamano por item",
        description:
          "Usa helpers a nivel de item para controlar crecimiento y encogimiento sin CSS por componente.",
        itemsHtml: {
          "Ocupar espacio disponible":
            'Usa <code class="docs-inline-code">flex-1</code> cuando un hijo deba absorber el espacio libre restante.',
          "Preservar ancho intrinseco":
            'Usa <code class="docs-inline-code">flex-none</code> en controles que deban conservar tamano por contenido.',
          "Grow y shrink explicitos":
            'Usa <code class="docs-inline-code">flex-grow</code>, <code class="docs-inline-code">flex-grow-0</code>, <code class="docs-inline-code">flex-shrink</code> y <code class="docs-inline-code">flex-shrink-0</code> para comportamiento preciso.',
        },
      },
      "implementation-examples": {
        type: "card-grid",
        key: "implementation-examples",
        title: "Ejemplos de implementacion",
        description:
          "Estos snippets aplican helpers de flexbox directamente sobre contenedores neutros y grupos de acciones.",
        items: [
          {
            title: "Franja de acciones",
            description:
              "Distribuye clusters de acciones con un solo item flexible y alineacion consistente.",
          },
          {
            title: "Grupo de controles con wrap",
            description:
              "Permite wrapping de controles manteniendo espaciado consistente entre filas y columnas.",
          },
          {
            title: "Area de trabajo dividida",
            description:
              "Combina paneles fijos y fluidos con flex-none y flex-1 en un layout horizontal.",
          },
        ],
      },
      "framework-notes": {
        type: "list",
        key: "framework-notes",
        title: "Notas del framework",
        description:
          "Estas notas resumen comportamiento de helpers especifico de las utilidades Nuvex UI.",
        items: [
          "Flexbox en Nuvex UI esta disenado para componer layout con clases pequenas y combinables.",
          "La estrategia recomendada es resolver layout con helpers primero y usar CSS custom solo en casos excepcionales.",
        ],
        itemsHtml: {
          "Usa clases utilitarias directamente en elementos semanticos; las clases row y col pertenecen a componentes de grid y se documentan por separado.":
            'Usa clases utilitarias directamente en elementos semanticos; las clases <code class="docs-inline-code">row</code> y <code class="docs-inline-code">col</code> pertenecen a componentes de grid y se documentan por separado.',
        },
      },
    },
  };

export const flexboxPages = {
  flexbox: flexboxEditorialContentEs,
} as const;

export default flexboxPages;
