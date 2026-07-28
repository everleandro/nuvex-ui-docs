import type { ApiPropReferenceRow } from '~/api-reference/schema'

export const formApiReferenceEs: ApiPropReferenceRow[] = [
  {
    property: 'modelValue',
    description: 'Estado actual de validez del formulario emitido por v-model.',
    type: { value: 'boolean | undefined', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'lazy',
    description: 'Opcion reservada del formulario para flujos de validacion diferida.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'focusFirstInvalid',
    description: 'Mueve el foco al primer field invalido despues de una validacion fallida.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'validateOnSubmit',
    description: 'Ejecuta la validacion de los hijos automaticamente antes de emitir submit.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'outlined',
    description: 'Propaga la presentacion outlined hacia los fields hijos compatibles.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'disabled',
    description: 'Propaga el estado disabled hacia los fields hijos compatibles.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'readonly',
    description: 'Propaga el estado readonly hacia los fields hijos compatibles.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'labelBehavior',
    description: 'Comportamiento compartido de label que se empuja a los fields hijos compatibles.',
    type: { value: 'FieldLabelBehavior', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'labelMinWidth',
    description: 'Aplica un ancho minimo compartido de label cuando los fields hijos renderizan labels alineados.',
    type: { value: 'string | number', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'retainColor',
    description: 'Conserva el color semantico del field en los hijos compatibles.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'fieldColor',
    description: 'Define el color compartido que Form empuja hacia los fields hijos compatibles. Si se usan fieldColor y color al mismo tiempo, fieldColor tiene prioridad para el color heredado por los hijos.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'color',
    description: 'Color de respaldo usado para el color heredado por los fields hijos cuando fieldColor no esta definido. En modo tabla tambien puede actuar como fuente legacy para el color de los separadores cuando tableLineColor no esta definido.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'table',
    description: 'Activa el tratamiento estructurado de layout tipo tabla para los child fields.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'tableLineColor',
    description: 'Sobrescribe el color de los separadores usado en modo tabla.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'tableCellBackgroundColor',
    description: 'Define el color de fondo aplicado a las celdas de fields en modo tabla.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'tableFieldColor',
    description: 'Alias legacy usado para resolver el tratamiento de fondo en las celdas de tabla.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'tableLineOpacity',
    description: 'Ajusta la opacidad de los separadores en modo tabla.',
    type: { value: 'string | number', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
]