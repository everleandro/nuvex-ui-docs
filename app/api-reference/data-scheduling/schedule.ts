import type { ApiPropReferenceRow } from '~/api-reference/schema'

const row = (property: string, description: string, type: string, defaultValue = 'undefined'): ApiPropReferenceRow => ({
  property,
  description,
  type: { value: type, class: 'string' },
  default: { value: defaultValue, class: 'string' },
})

export const scheduleApiReference: ApiPropReferenceRow[] = [
  row('modelValue', 'Sets the base date for the active view.', 'Date', 'required'),
  row('view', 'Selects calendar or resource mode.', 'ScheduleView', 'ScheduleView.Calendar'),
  row('scale', 'Selects day or week scale while calendar mode is active.', 'CalendarScale', 'CalendarScale.Day'),
  row('spaces', 'Provides the resources or spaces available to the schedule.', 'ScheduleSpace[]', '[]'),
  row('selectedSpace', 'Sets the active space used to filter calendar events.', 'ScheduleSpace | undefined'),
  row('events', 'Provides the events rendered in the visible date and space range.', 'ScheduleEvent[]', '[]'),
  row('resourceColumns', 'Limits the visible resource columns per page.', 'string | number'),
  row('loading', 'Marks the schedule busy, disables interaction, and shows linear progress.', 'boolean', 'false'),
  row('color', 'Sets the semantic color for schedule controls.', 'string', "'primary'"),
  row('lng', 'Sets the locale used by schedule labels and formatters.', 'suportedLng', 'global locale'),
  row('rowHeight', 'Sets the visual height of each time interval.', 'string | number', "'97'"),
  row('stickyTopHeader', 'Sets the top offset for the sticky schedule header.', 'string | number', '0'),
  row('step', 'Sets each interval duration in seconds.', 'number', '3600'),
  row('start', 'Sets the visible start time in seconds from midnight.', 'number', '0'),
  row('end', 'Sets the visible end time in seconds from midnight.', 'number', '86400'),
  row('elevation', 'Applies a framework elevation preset to the schedule container.', 'ElevationLevel'),
  row('eventElevation', 'Applies a framework elevation preset to event wrappers or removes it explicitly.', "ElevationLevel | 'none'", "'md'"),
]

export const scheduleSlotsReference: ApiPropReferenceRow[] = [
  row('toolbar', 'Replaces the top toolbar and exposes localized state plus navigation callbacks.', 'ScheduleToolbarSlotProps', '-'),
  row('event', 'Replaces event content and exposes the current event.', '{ event: ScheduleEvent }', '-'),
  row('empty-slot', 'Replaces an available interval and exposes its resolved time and space data.', '{ data: ScheduleSlotEvent }', '-'),
]

export const scheduleEventsReference: ApiPropReferenceRow[] = [
  row('update:modelValue', 'Emits when schedule navigation changes the base date.', 'Date', '-'),
  row('update:view', 'Emits when calendar or resource mode changes.', 'ScheduleView', '-'),
  row('update:scale', 'Emits when day or week scale changes.', 'CalendarScale', '-'),
  row('update:selected-space', 'Emits when the active space changes.', 'ScheduleSpace | undefined', '-'),
  row('click:header', 'Emits when a day or resource header is activated.', '{ view, scale?, date, entityId? }', '-'),
  row('click:event', 'Emits the selected event and native click event.', '{ data: ScheduleEvent, nativeEvent: MouseEvent }', '-'),
  row('click:empty-slot', 'Emits the selected empty interval and native click event.', '{ data: ScheduleSlotEvent, nativeEvent: MouseEvent }', '-'),
]