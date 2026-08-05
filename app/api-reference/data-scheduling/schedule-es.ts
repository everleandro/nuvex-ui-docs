import type { ApiPropReferenceRow } from '~/api-reference/schema'

const row = (property: string, description: string, type: string, defaultValue = 'undefined'): ApiPropReferenceRow => ({
  property,
  description,
  type: { value: type, class: 'string' },
  default: { value: defaultValue, class: 'string' },
})

export const scheduleApiReferenceEs: ApiPropReferenceRow[] = [
  row('modelValue', 'Define la fecha base de la vista activa.', 'Date', 'required'),
  row('view', 'Selecciona el modo calendario o recursos.', 'ScheduleView', 'ScheduleView.Calendar'),
  row('scale', 'Selecciona la escala diaria o semanal mientras el modo calendario está activo.', 'CalendarScale', 'CalendarScale.Day'),
  row('spaces', 'Proporciona los recursos o espacios disponibles en el schedule.', 'ScheduleSpace[]', '[]'),
  row('selectedSpace', 'Define el espacio activo utilizado para filtrar eventos del calendario.', 'ScheduleSpace | undefined'),
  row('events', 'Proporciona los eventos renderizados en el rango visible de fechas y espacios.', 'ScheduleEvent[]', '[]'),
  row('resourceColumns', 'Limita las columnas de recursos visibles por página.', 'string | number'),
  row('loading', 'Marca el schedule como ocupado, desactiva la interacción y muestra progreso lineal.', 'boolean', 'false'),
  row('color', 'Define el color semántico de los controles del schedule.', 'string', "'primary'"),
  row('lng', 'Define el locale utilizado por las etiquetas y los formatters del schedule.', 'suportedLng', 'global locale'),
  row('rowHeight', 'Define la altura visual de cada intervalo temporal.', 'string | number', "'97'"),
  row('stickyTopHeader', 'Define el offset superior del encabezado sticky del schedule.', 'string | number', '0'),
  row('step', 'Define la duración de cada intervalo en segundos.', 'number', '3600'),
  row('start', 'Define la hora inicial visible en segundos desde medianoche.', 'number', '0'),
  row('end', 'Define la hora final visible en segundos desde medianoche.', 'number', '86400'),
  row('elevation', 'Aplica un preset de elevación del framework al contenedor del schedule.', 'ElevationLevel'),
  row('eventElevation', 'Aplica un preset de elevación del framework a los wrappers de eventos o lo elimina explícitamente.', "ElevationLevel | 'none'", "'md'"),
]

export const scheduleSlotsReferenceEs: ApiPropReferenceRow[] = [
  row('toolbar', 'Reemplaza la toolbar superior y expone estado localizado junto con callbacks de navegación.', 'ScheduleToolbarSlotProps', '-'),
  row('event', 'Reemplaza el contenido del evento y expone el evento actual.', '{ event: ScheduleEvent }', '-'),
  row('empty-slot', 'Reemplaza un intervalo disponible y expone sus datos resueltos de tiempo y espacio.', '{ data: ScheduleSlotEvent }', '-'),
]

export const scheduleEventsReferenceEs: ApiPropReferenceRow[] = [
  row('update:modelValue', 'Se emite cuando la navegación del schedule cambia la fecha base.', 'Date', '-'),
  row('update:view', 'Se emite al cambiar entre los modos calendario y recursos.', 'ScheduleView', '-'),
  row('update:scale', 'Se emite al cambiar entre las escalas diaria y semanal.', 'CalendarScale', '-'),
  row('update:selected-space', 'Se emite cuando cambia el espacio activo.', 'ScheduleSpace | undefined', '-'),
  row('click:header', 'Se emite al activar un encabezado de día o recurso.', '{ view, scale?, date, entityId? }', '-'),
  row('click:event', 'Emite el evento seleccionado y el evento click nativo.', '{ data: ScheduleEvent, nativeEvent: MouseEvent }', '-'),
  row('click:empty-slot', 'Emite el intervalo vacío seleccionado y el evento click nativo.', '{ data: ScheduleSlotEvent, nativeEvent: MouseEvent }', '-'),
]