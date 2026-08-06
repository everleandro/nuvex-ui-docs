import type {
  DocsConceptPageContent,
  DocsDisplayHelpersSectionKey,
} from "~/types/docs";

export const displayHelpersEditorialContentEs: DocsConceptPageContent<DocsDisplayHelpersSectionKey> =
  {
    kind: "concept",
    seo: {
      title: "Display Helpers",
      description:
        "Inspecciona utilidades de display en Nuvex UI, compone reglas de visibilidad responsive y copia patrones por breakpoint sin media queries custom.",
    },
    hero: {
      title: "Display Helpers",
      description:
        "Los helpers de display controlan como participa un elemento en el layout y cuando se ve en cada breakpoint. Esta pagina concentra patrones de visibilidad como d-md-none para que Flexbox se mantenga enfocado en ejes, alineacion y sizing de items.",
      actions: [
        {
          key: "open-flexbox",
          label: "Abrir flexbox",
        },
        {
          key: "open-spacing-helpers",
          label: "Abrir helpers de espaciado",
        },
      ],
    },
    sections: {
      usage: {
        type: "card-grid",
        key: "usage",
        title: "Uso",
        description:
          "Elige un display base, agrega opcionalmente un override responsive y copia la lista de clases resultante.",
        labels: {
          baseDisplay: "Display base",
          breakpoint: "Breakpoint responsive",
          responsiveDisplay: "Display en breakpoint",
          noBreakpoint: "Ninguno",
          block: "Bloque",
          inline: "Inline",
          inlineBlock: "Inline block",
          flex: "Flex",
          inlineFlex: "Inline flex",
          hidden: "Oculto",
          classList: "Clases generadas",
        },
      },
      "class-syntax": {
        type: "card-grid",
        key: "class-syntax",
        title: "Sintaxis de clases",
        descriptionHtml:
          'Los helpers de display se componen como <code class="docs-inline-code">d-{valor}</code> para comportamiento base y <code class="docs-inline-code">d-{breakpoint}-{valor}</code> para overrides responsivos.',
        description:
          "Los helpers de display se componen con una clase base y overrides opcionales por breakpoint.",
        items: [
          {
            title: "Clases base",
            description:
              "Usa d-block, d-inline, d-inline-block, d-flex, d-inline-flex o d-none.",
          },
          {
            title: "Overrides por breakpoint",
            description:
              "Prefija con sm, md, lg o xl para sobreescribir display desde ese breakpoint en adelante.",
          },
          {
            title: "Cascada mobile-first",
            description:
              "Breakpoints posteriores sobreescriben declaraciones de display previas en orden ascendente.",
          },
        ],
        itemsHtml: {
          "Clases base":
            'Usa <code class="docs-inline-code">d-block</code>, <code class="docs-inline-code">d-inline</code>, <code class="docs-inline-code">d-inline-block</code>, <code class="docs-inline-code">d-flex</code>, <code class="docs-inline-code">d-inline-flex</code> o <code class="docs-inline-code">d-none</code>.',
          "Overrides por breakpoint":
            'Prefija con <code class="docs-inline-code">sm</code>, <code class="docs-inline-code">md</code>, <code class="docs-inline-code">lg</code> o <code class="docs-inline-code">xl</code> para sobreescribir display desde ese breakpoint en adelante.',
        },
      },
      "responsive-breakpoints": {
        type: "card-grid",
        key: "responsive-breakpoints",
        title: "Breakpoints y visibilidad",
        descriptionHtml:
          'Patrones como <code class="docs-inline-code">d-none d-md-block</code> o <code class="docs-inline-code">d-block d-md-none</code> expresan transiciones de visibilidad sin media queries custom.',
        description:
          "Usa dos clases para declarar transiciones de visibilidad entre breakpoints.",
        items: [
          {
            title: "Bloque solo desktop",
            description:
              "Oculta por defecto y muestra como bloque desde md en adelante.",
          },
          {
            title: "Solo por debajo de md",
            description: "Muestra por defecto y oculta desde md en adelante.",
          },
          {
            title: "Inline a bloque",
            description:
              "Mantiene comportamiento inline en pantallas pequenas y cambia a bloque en pantallas grandes.",
          },
        ],
      },
      "breakpoint-reference": {
        type: "card-grid",
        key: "breakpoint-reference",
        title: "Referencia de breakpoints",
        description:
          "Usa esta tabla como mapa canónico de breakpoints al componer clases responsive de display.",
        labels: {
          tier: "Dispositivo",
          token: "Token",
          target: "Dispositivos tipicos",
          range: "Rango",
        },
        items: [
          "Extra small|xs|Telefono pequeno a grande|< 600px",
          "Small|sm|Tablet pequena a mediana|600px > < 840px",
          "Medium|md|Tablet grande a laptop|840px > < 1145px",
          "Large|lg|Laptop a desktop|1145px > < 1545px",
          "Extra large|xl|Desktop 1080p a 1440p|1545px >"
        ],
      },
      "implementation-examples": {
        type: "card-grid",
        key: "implementation-examples",
        title: "Ejemplos de implementacion",
        descriptionHtml:
          'Patrones como <code class="docs-inline-code">d-none d-md-block</code> o <code class="docs-inline-code">d-block d-md-none</code> expresan transiciones de visibilidad sin media queries custom.',
        items: [
          {
            title: "Navegacion solo desktop",
            description:
              "Oculta un bloque de navegacion en pantallas pequenas y muestralo desde md hacia arriba.",
          },
          {
            title: "Accion solo mobile",
            description:
              "Muestra una accion compacta por debajo de md y ocultala en breakpoints mayores.",
          },
          {
            title: "Badge inline promovido a bloque",
            description:
              "Mantiene ritmo inline en pantallas pequenas y promueve a bloque en xl.",
          },
        ],
      },
      "framework-notes": {
        type: "list",
        key: "framework-notes",
        title: "Notas del framework",
        description:
          "Estas notas aclaran como interactuan los helpers de display con otras paginas de utilidades.",
        items: [
          "Display Helpers concentra preocupaciones de visibilidad y breakpoints dentro de utilidades.",
          "La documentacion de Flexbox se enfoca en direccion, alineacion, wrapping y sizing por item.",
          "Combina helpers de display y flex cuando el layout necesite reglas de visibilidad y control de ejes.",
        ],
        itemsHtml: {
          "Combina helpers de display y flex cuando el layout necesite reglas de visibilidad y control de ejes.":
            'Combina helpers de display y flex cuando el layout necesite reglas de visibilidad y control de ejes, por ejemplo <code class="docs-inline-code">d-none d-md-flex items-center</code>.',
        },
      },
    },
  };

export const displayHelpersPages = {
  displayHelpers: displayHelpersEditorialContentEs,
} as const;

export default displayHelpersPages;
