import type { DocsComponentPageContent } from '~/types/docs'

export const progressComponentContentEs: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Progress',
    description: 'Documentación de Progress en Nuvex UI con modos determinado e indeterminado, manejo de valores, personalización visual, patrones de composición, accesibilidad y referencia API.',
  },
  hero: {
    title: 'Progress',
    descriptionHtml:
      "El componente <code class='docs-inline-code'>EProgressLinear</code> comunica el estado de tareas de carga, sincronización y procesamiento mediante una pista lineal compacta. Usa progreso determinado cuando la aplicación conoce la cantidad completada e indeterminado cuando solo puede confirmar que el trabajo está activo.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Uso',
      descriptionHtml:
        "Configura las props comunes del progreso e inspecciona el markup generado. <code class='docs-inline-code'>value</code> controla la pista llena en modo determinado, mientras <code class='docs-inline-code'>indeterminate</code> la reemplaza por movimiento continuo.",
    },
    {
      key: 'progress-modes',
      title: 'Modos de progreso',
      descriptionHtml:
        "Elige el modo según la información que puede reportar la tarea. El progreso determinado representa un valor medible de 0 a 100; el indeterminado comunica actividad sin sugerir una estimación de finalización que no está disponible.",
    },
    {
      key: 'visual-variants',
      title: 'Color y grosor',
      descriptionHtml:
        "Usa <code class='docs-inline-code'>color</code> para alinear la barra con su contexto y <code class='docs-inline-code'>height</code> para adaptarla a controles compactos o superficies de tarea destacadas. <code class='docs-inline-code'>useContrastColor</code> resuelve el token de contraste asociado con el color seleccionado.",
    },
    {
      key: 'value-behavior',
      title: 'Valores y ciclo de vida',
      descriptionHtml:
        "Actualiza <code class='docs-inline-code'>value</code> desde el estado real de la tarea. El componente normaliza entradas numéricas inválidas a 0 y limita los valores finitos al rango de 0 a 100, pero la fuente de datos debe seguir proporcionando un progreso significativo.",
    },
    {
      key: 'composition-patterns',
      title: 'Patrones de composición',
      descriptionHtml:
        "Acompaña la barra con una etiqueta de tarea y un estado visible para que las personas sepan qué se ejecuta y qué significa completarlo. La exportación de un reporte es determinada cuando se pueden medir los elementos procesados e indeterminada mientras el servidor prepara trabajo sin totales.",
    },
    {
      key: 'accessibility',
      title: 'Accesibilidad',
      descriptionHtml:
        "El componente renderiza <code class='docs-inline-code'>role=\"progressbar\"</code> con un rango de 0 a 100. El modo determinado expone <code class='docs-inline-code'>aria-valuenow</code>; el indeterminado lo omite. Proporciona un nombre accesible a la barra y marca la región relacionada como ocupada mientras el trabajo está activo.",
    },
    {
      key: 'guidelines',
      title: 'Recomendaciones de uso',
      description: 'Mantén el progreso honesto, contextual y legible en todos los estados de la tarea.',
    },
    {
      key: 'props',
      title: 'Referencia API',
      description: 'Consulta las props públicas verificadas de EProgressLinear. El componente no emite eventos públicos ni expone slots públicos.',
    },
  ],
  labels: {
    controls: [
      { key: 'value', label: 'valor' },
      { key: 'color', label: 'color' },
      { key: 'height', label: 'grosor' },
      { key: 'indeterminate', label: 'indeterminado' },
      { key: 'useContrastColor', label: 'usar color de contraste' },
    ],
    progressText: {
      determinate: 'Determinado',
      indeterminate: 'Indeterminado',
      knownProgress: '72 % de los archivos procesados',
      unknownProgress: 'Preparando datos del workspace',
      valueLabel: 'Progreso actual',
      reset: 'Reiniciar',
      advance: 'Avanzar',
      complete: 'Completar',
      reportTitle: 'Exportación del reporte trimestral',
      reportIdle: 'Listo para iniciar la exportación del reporte',
      reportPreparing: 'Preparando exportación',
      reportProcessing: 'Procesando páginas del reporte',
      reportComplete: 'Exportación lista',
      reportAction: 'Iniciar exportación',
      accessibleLabel: 'Progreso de exportación del reporte',
      accessibilityHint: 'La región contenedora informa su estado ocupado mientras la exportación está activa.',
      doTitle: 'Haz',
      dontTitle: 'Evita',
      doItems: [
        'Usar el modo determinado cuando el progreso provenga de trabajo medible.',
        'Colocar una etiqueta de tarea o estado visible cerca del progreso importante.',
        'Usar un color y grosor que permanezcan legibles sobre la superficie actual.',
      ],
      dontItems: [
        'Inventar porcentajes para operaciones que no pueden reportar finalización.',
        'Dejar el progreso indeterminado activo después de finalizar la tarea.',
        'Depender solo de la animación o el color para comunicar el estado de la tarea.',
      ],
      apiTitle: 'Props de EProgressLinear',
      apiDetailsTitle: 'Eventos y slots',
      apiDetailsBody: 'EProgressLinear no emite eventos públicos ni expone slots públicos.',
    },
  },
}

export const progressPagesEs = {
  progress: progressComponentContentEs,
} as const

export default progressPagesEs