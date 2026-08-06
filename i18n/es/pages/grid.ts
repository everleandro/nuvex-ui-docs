import type { DocsComponentPageContent } from '~/types/docs'

export const gridComponentContentEs: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Grid',
    description: 'Documentación de Grid en Nuvex UI con uso interactivo, breakpoints responsivos, modos de fila, layouts anidados y referencia API para ERow y ECol.',
  },
  hero: {
    title: 'Grid',
    descriptionHtml:
      "Usa <code class='docs-inline-code'>ERow</code> y <code class='docs-inline-code'>ECol</code> para componer estructura responsiva antes de aplicar estilos de componentes. El grid controla el espaciado, el comportamiento por breakpoints y la distribución de columnas, mientras los componentes de contenido mantienen la responsabilidad visual y semántica.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Uso',
      descriptionHtml:
        "Ajusta <code class='docs-inline-code'>gap</code>, los modificadores de fila y el span base de <code class='docs-inline-code'>cols</code> para previsualizar cómo el mismo contenido se adapta a distintas densidades de layout.",
    },
    {
      key: 'responsive-breakpoints',
      title: 'Breakpoints responsivos',
      descriptionHtml:
        "Combina <code class='docs-inline-code'>cols</code> con props de breakpoint como <code class='docs-inline-code'>md</code> y <code class='docs-inline-code'>lg</code> para definir spans mobile-first que se expanden progresivamente.",
    },
    {
      key: 'row-modes',
      title: 'Modos de fila',
      descriptionHtml:
        "Los modificadores de fila controlan el ritmo estructural. Usa <code class='docs-inline-code'>dense</code> para espaciado compacto, <code class='docs-inline-code'>equal</code> para anchos uniformes entre columnas hermanas y <code class='docs-inline-code'>noGutters</code> cuando las superficies deban alinearse borde a borde.",
    },
    {
      key: 'nested-layouts',
      title: 'Layouts anidados',
      descriptionHtml:
        "Anida filas dentro de columnas cuando una región de contenido necesite un sub-grid interno. Mantén el anidamiento poco profundo y limitado a la parte de la página que realmente necesite estructura local.",
    },
    {
      key: 'props',
      title: 'Referencia API',
      description: 'Consulta las props públicas verificadas de ERow y ECol.',
    },
  ],
  labels: {
    controls: [
      { key: 'gap', label: 'gap' },
      { key: 'dense', label: 'dense' },
      { key: 'auto', label: 'auto' },
      { key: 'equal', label: 'equal' },
      { key: 'noGutters', label: 'noGutters' },
      { key: 'cols', label: 'cols' },
    ],
    gridText: {
      previewTitle: 'Vista previa de grid',
      previewDescription: 'Muestra de layout interactivo con tres columnas responsivas.',
      columnA: 'Columna A',
      columnB: 'Columna B',
      columnC: 'Columna C',
      columnDescription: 'Reemplaza estas cards con secciones, métricas o formularios de tu página.',
      responsiveMainTitle: 'Contenido principal',
      responsiveMainDescription: 'Ocupa la mayor parte de la fila en pantallas medianas y grandes.',
      responsiveAsideTitle: 'Barra lateral',
      responsiveAsideDescription: 'Se apila bajo el contenido en móvil y se alinea al lado desde md.',
      rowModesDenseTitle: 'dense',
      rowModesDenseDescription: 'Gutters más cerrados para interfaces compactas.',
      rowModesEqualTitle: 'equal',
      rowModesEqualDescription: 'Fuerza que las columnas hermanas compartan el ancho disponible.',
      rowModesNoGuttersTitle: 'no-gutters',
      rowModesNoGuttersDescription: 'Elimina gutters cuando las superficies deben tocar los bordes.',
      nestedPrimaryTitle: 'Columna principal',
      nestedA: 'Anidada A',
      nestedB: 'Anidada B',
      nestedRailTitle: 'Rail de apoyo',
      nestedRailDescription: 'Úsalo para filtros, contexto o acciones rápidas.',
      apiRowTitle: 'Props de ERow',
      apiColTitle: 'Props de ECol',
      apiSlotsTitle: 'Slots y eventos',
      apiSlotsBody: 'ERow y ECol exponen solo el slot default y no emiten eventos públicos.',
    },
  },
}

export const gridPagesEs = { grid: gridComponentContentEs } as const

export default gridPagesEs
