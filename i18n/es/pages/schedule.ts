import type { DocsComponentPageContent } from '~/types/docs'

export const scheduleComponentContentEs: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Schedule',
    description: 'Documentación de Schedule en Nuvex UI con composición de calendario, slots, integración con Dialog, accesibilidad y referencia API.',
  },
  hero: {
    title: 'Schedule',
    descriptionHtml:
      "El componente <code class='docs-inline-code'>ESchedule</code> organiza eventos temporales en vistas de calendario y recursos. Combina navegación por fecha, espacios seleccionables, intervalos interactivos y renderizado extensible de eventos para flujos de planificación.",
  },
  sections: [
    {
      key: 'usage-design',
      title: 'Uso y diseño',
      descriptionHtml:
        "Empieza con una fecha mediante <code class='docs-inline-code'>v-model</code> y proporciona los espacios y eventos que se mostrarán. Cada evento se vincula a un espacio mediante <code class='docs-inline-code'>entityId</code>; el schedule se encarga de la navegación y la distribución temporal.",
    },
    {
      key: 'without-toolbar',
      title: 'Sin barra de herramientas',
      descriptionHtml:
        "Usa la prop <code class='docs-inline-code'>hide-toolbar</code> cuando la navegación y los controles del schedule se proporcionen desde otra parte de la interfaz.",
    },
    {
      key: 'slots',
      title: 'Slots',
      descriptionHtml:
        "Personaliza regiones específicas sin reemplazar el layout del schedule. <code class='docs-inline-code'>#toolbar</code> controla la navegación, <code class='docs-inline-code'>#event</code> controla el contenido de eventos y <code class='docs-inline-code'>#empty-slot</code> controla los intervalos disponibles.",
    },
    {
      key: 'integration',
      title: 'Integración',
      descriptionHtml:
        "Combina <code class='docs-inline-code'>ESchedule</code> con <code class='docs-inline-code'>EDialog</code> para crear y editar eventos en contexto. Los intervalos vacíos proporcionan la fecha y hora iniciales; los eventos existentes proporcionan el modelo que se actualizará.",
    },
    {
      key: 'accessibility',
      title: 'Accesibilidad',
      descriptionHtml:
        'El schedule expone una región con nombre y renderiza los eventos e intervalos vacíos predeterminados como botones nativos. Conserva esa semántica de teclado en slots personalizados, anuncia los resultados del flujo y permite que los dialogs restauren el foco al control de origen.',
    },
    {
      key: 'props',
      title: 'Referencia API',
      description: 'Consulta las props, los slots y los eventos emitidos públicos verificados de ESchedule.',
    },
  ],
  labels: {
    controls: [],
    scheduleSpaces: {
      studioA: 'Estudio A',
      studioB: 'Estudio B',
      reviewRoom: 'Sala de revisión',
    },
    scheduleEvents: {
      planning: { name: 'Planificación del sprint', footer: 'Equipo de producto' },
      research: { name: 'Síntesis de investigación', footer: 'Equipo de investigación' },
      designReview: { name: 'Revisión de diseño', footer: 'Equipo de diseño' },
      handoff: { name: 'Handoff con ingeniería', footer: 'Equipo de ingeniería' },
      customerInterview: { name: 'Entrevista con cliente', footer: 'Equipo de investigación' },
      roadmapReview: { name: 'Revisión del roadmap', footer: 'Equipo de producto' },
      architectureSync: { name: 'Sincronización de arquitectura', footer: 'Equipo de ingeniería' },
      usabilityTest: { name: 'Prueba de usabilidad', footer: 'Equipo de investigación' },
      releasePlanning: { name: 'Planificación del release', footer: 'Equipo de producto' },
    },
    scheduleText: {
      toolbarSlotTitle: 'Slot toolbar',
      toolbarSlotBody: 'Crea navegación de periodos personalizada con las etiquetas localizadas y los callbacks expuestos por el scope del slot.',
      eventSlotTitle: 'Slot event',
      eventSlotBody: 'Cambia la jerarquía de información dentro de los eventos y conserva un control interactivo real con texto de apoyo legible.',
      emptySlotTitle: 'Slot empty-slot',
      emptySlotBody: 'Convierte los intervalos disponibles en acciones explícitas de creación. Mantén cada reemplazo accesible por teclado y proporciona un nombre accesible significativo.',
      chooseSlot: 'Elige un intervalo disponible para crear un evento.',
      createAt: 'Crear evento a las',
      selectedSlot: 'Intervalo seleccionado:',
      add: 'Agregar',
      createEvent: 'Crear evento',
      editEvent: 'Editar evento',
      dialogDescription: 'Define un nombre y un rango horario; después guarda el evento en el schedule.',
      eventName: 'Nombre del evento',
      startTime: 'Hora de inicio',
      endTime: 'Hora de finalización',
      cancel: 'Cancelar',
      save: 'Guardar evento',
      keyboardHint: 'Usa Tab para alcanzar eventos e intervalos disponibles; después pulsa Enter o Espacio para activarlos.',
      eventSelected: 'Evento seleccionado',
      slotSelected: 'Intervalo disponible seleccionado',
      apiPropsTitle: 'Props de ESchedule',
      apiSlotsTitle: 'Slots',
      apiEventsTitle: 'Eventos',
    },
  },
}

export const schedulePagesEs = {
  schedule: scheduleComponentContentEs,
} as const

export default schedulePagesEs