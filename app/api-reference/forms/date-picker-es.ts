import type { ApiPropReferenceRow } from '~/api-reference/schema'

export const datePickerApiReferenceEs: ApiPropReferenceRow[] = [
  {
    property: 'modelValue',
    description: 'Valor de fecha seleccionado actualmente. Acepta Date o un string de fecha que el componente pueda normalizar.',
    type: { value: 'Date | string', class: 'string' },
    default: { value: 'undefined', class: 'undefined' },
  },
  {
    property: 'view',
    description: 'Controla la profundidad activa de navegacion. Combinala con update:view para un picker totalmente controlado.',
    type: { value: 'datePickerViewType', class: 'string' },
    default: { value: 'undefined', class: 'undefined' },
  },
  {
    property: 'disabled / highlighted',
    description: 'Objetos de configuracion de fechas usados para bloquear seleccion y resaltar fechas o rangos importantes.',
    type: { value: 'DatesConfiguration', class: 'object' },
    default: { value: 'undefined / undefined', class: 'undefined' },
  },
  {
    property: 'weekStart',
    description: 'Define el primer dia visible de la semana, donde 0 es domingo y 1 es lunes.',
    type: { value: 'number', class: 'string' },
    default: { value: '1', class: 'string' },
  },
  {
    property: 'format',
    description: 'Cadena de tokens para personalizar el formato del header principal.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'undefined' },
  },
  {
    property: 'lng',
    description: 'Sobrescribe el locale usado para resolver nombres de meses y dias en esta instancia del picker.',
    type: { value: 'suportedLng', class: 'string' },
    default: { value: 'locale global', class: 'string' },
  },
  {
    property: 'landscape',
    description: 'Cambia el picker a su layout horizontal landscape.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'noTitle',
    description: 'Oculta el bloque superior que muestra el anio seleccionado y la fecha formateada.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'onlyMonth / onlyYear',
    description: 'Restringe la navegacion a flujos de seleccion solo por mes o solo por anio.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false / false', class: 'boolean' },
  },
  {
    property: 'closeOnChange',
    description: 'Cierra inmediatamente el dialog o menu contenedor despues de una seleccion valida.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'iconPrev / iconNext',
    description: 'Reemplaza los iconos de navegacion anterior y siguiente en el header.',
    type: { value: 'string | IconPath | IconPath[]', class: 'string' },
    default: { value: 'undefined', class: 'undefined' },
  },
  {
    property: 'color',
    description: 'Color semantico base aplicado a estados seleccionados y resaltados del picker.',
    type: { value: 'string', class: 'string' },
    default: { value: '"primary"', class: 'string' },
  },
  {
    property: 'elevation / gridButtonElevation',
    description: 'Aplica elevacion a la superficie del picker y a los botones seleccionados del grid.',
    type: { value: 'ElevationLevel', class: 'string' },
    default: { value: 'undefined / undefined', class: 'undefined' },
  },
]