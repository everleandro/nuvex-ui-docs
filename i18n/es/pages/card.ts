import type { DocsComponentPageContent } from '~/types/docs'

export const cardComponentContentEs: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Card',
    description: 'Documentación de Card en Nuvex UI con variantes de superficie, anatomía de contenido, ubicación de media, slots, patrones de composición, accesibilidad y referencia API.',
  },
  hero: {
    title: 'Card',
    descriptionHtml:
      "El componente <code class='docs-inline-code'>ECard</code> agrupa contenido relacionado sobre una superficie contenida. Úsalo para establecer jerarquía visual en resúmenes, entidades y tareas específicas; usa layout sin card cuando el contenido no necesite un límite diferenciado.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Uso',
      descriptionHtml:
        "Configura las props comunes de superficie e inspecciona el markup generado. <code class='docs-inline-code'>color</code> resuelve el fondo y un contraste legible, mientras <code class='docs-inline-code'>outlined</code>, <code class='docs-inline-code'>tonal</code> y <code class='docs-inline-code'>elevation</code> definen su énfasis visual.",
    },
    {
      key: 'visual-variants',
      title: 'Variantes visuales',
      descriptionHtml:
        "Elige un tratamiento de superficie acorde con la jerarquía de la card. Las cards tonales usan el color como tinte sutil y permanecen planas aunque se proporcione <code class='docs-inline-code'>elevation</code>; combina tonal y outlined solo cuando el límite necesite mayor definición.",
    },
    {
      key: 'content-anatomy',
      title: 'Anatomía del contenido',
      descriptionHtml:
        "Usa <code class='docs-inline-code'>title</code>, <code class='docs-inline-code'>subtitle</code> y <code class='docs-inline-code'>description</code> para regiones predecibles de la card. El slot default contiene contenido de cuerpo más rico y solo se renderiza cuando se proporciona contenido.",
    },
    {
      key: 'media-placement',
      title: 'Ubicación de media',
      descriptionHtml:
        "La media del cuerpo usa las props <code class='docs-inline-code'>prepend*</code> y <code class='docs-inline-code'>append*</code> y puede abarcar el contenido de la card. La media del encabezado usa las props <code class='docs-inline-code'>*Header*</code> correspondientes y permanece alineada con el bloque de título.",
    },
    {
      key: 'slots',
      title: 'Slots y acciones',
      descriptionHtml:
        "Coloca contenido enriquecido en el slot default y acciones relacionadas en <code class='docs-inline-code'>#footer</code>. Mantén las acciones como botones o enlaces reales en lugar de convertir toda la superficie visual en un control implícito.",
    },
    {
      key: 'composition-patterns',
      title: 'Patrones de composición',
      descriptionHtml:
        "Las cards funcionan mejor cuando cada superficie representa un asunto claro. Mantén una jerarquía de acciones contenida, permite que el contenido determine la altura y prefiere un layout responsive de filas y columnas sobre anchos fijos o cards anidadas.",
    },
    {
      key: 'accessibility',
      title: 'Accesibilidad',
      descriptionHtml:
        "<code class='docs-inline-code'>ECard</code> es un contenedor visual y no renderiza semántica interactiva por sí mismo. Agrega una etiqueta de región o artículo significativa cuando la card necesite estructura independiente, conserva el orden de encabezados y mantén cada acción accesible por teclado.",
    },
    {
      key: 'props',
      title: 'Referencia API',
      description: 'Consulta las props públicas verificadas de ECard. El componente expone los slots default y footer y no emite eventos públicos.',
    },
  ],
  labels: {
    controls: [
      { key: 'color', label: 'color' },
      { key: 'elevation', label: 'elevación' },
      { key: 'outlined', label: 'outlined' },
      { key: 'tonal', label: 'tonal' },
      { key: 'depressed', label: 'sin elevación' },
    ],
    cardText: {
      previewTitle: 'Actividad del workspace',
      previewSubtitle: 'Actualizado hace unos minutos',
      previewDescription: 'Revisa los cambios recientes y continúa donde quedó tu equipo.',
      defaultVariant: 'Superficie predeterminada',
      defaultVariantDescription: 'Una card contenida y neutra para contenido estándar.',
      outlinedVariant: 'Superficie outlined',
      outlinedVariantDescription: 'Un límite visible sin elevación adicional.',
      tonalVariant: 'Superficie tonal',
      tonalVariantDescription: 'Un tinte semántico sutil que permanece plano.',
      fullAnatomyTitle: 'Resumen trimestral',
      fullAnatomySubtitle: 'Abril a junio',
      fullAnatomyDescription: 'Los ingresos y la participación superaron el periodo anterior.',
      bodyCopy: 'El slot default admite contenido estructurado adicional a las regiones de texto integradas.',
      headerMediaTitle: 'Revisión de diseño',
      headerMediaSubtitle: 'Hoy a las 14:30',
      headerMediaDescription: 'La media del encabezado permanece conectada al título y subtítulo.',
      bodyMediaTitle: 'Reporte guardado',
      bodyMediaSubtitle: 'Workspace de analítica',
      bodyMediaDescription: 'La media del cuerpo puede alinearse a través del área de contenido completa.',
      actionsTitle: '¿Publicar cambios?',
      actionsDescription: 'Tu actualización será visible para todas las personas del workspace.',
      cancel: 'Cancelar',
      publish: 'Publicar',
      profileTitle: 'Morgan Lee',
      profileSubtitle: 'Diseñadora de producto',
      profileDescription: 'Responsable de la documentación de componentes y las guías de interacción.',
      metricTitle: 'Tasa de finalización',
      metricSubtitle: 'Este mes',
      metricValue: '84 %',
      taskTitle: 'Revisión de documentación',
      taskSubtitle: 'Quedan 3 comentarios',
      taskAction: 'Abrir revisión',
      accessibleTitle: 'Seguridad de la cuenta',
      accessibleDescription: 'Revisa las sesiones activas y actualiza tus preferencias de acceso.',
      accessibleAction: 'Revisar seguridad',
      accessibleLabel: 'Configuración de seguridad de la cuenta',
      apiTitle: 'Props de ECard',
      apiSlotsTitle: 'Slots y eventos',
      apiSlotsBody: 'ECard expone el slot default para contenido del cuerpo y el slot footer para acciones relacionadas o contenido de apoyo. No emite eventos públicos.',
    },
  },
}

export const cardPagesEs = {
  card: cardComponentContentEs,
} as const

export default cardPagesEs
