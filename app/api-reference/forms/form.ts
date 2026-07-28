import type { ApiPropReferenceRow } from '~/api-reference/schema'

export const formApiReference: ApiPropReferenceRow[] = [
  {
    property: 'modelValue',
    description: 'Current form validity state emitted through v-model.',
    type: { value: 'boolean | undefined', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'lazy',
    description: 'Reserved form option for deferred validation flows.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'focusFirstInvalid',
    description: 'Moves focus to the first invalid child field after validation fails.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'validateOnSubmit',
    description: 'Runs child validation automatically before emitting submit.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'outlined',
    description: 'Propagates outlined presentation to compatible child fields.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'disabled',
    description: 'Propagates disabled state to compatible child fields.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'readonly',
    description: 'Propagates readonly state to compatible child fields.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'labelBehavior',
    description: 'Shared label behavior pushed into compatible child fields.',
    type: { value: 'FieldLabelBehavior', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'labelMinWidth',
    description: 'Applies a shared minimum label width when child fields render aligned labels.',
    type: { value: 'string | number', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'retainColor',
    description: 'Preserves semantic field color across compatible child fields.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'fieldColor',
    description: 'Sets the shared color pushed into compatible child fields. When both fieldColor and color are provided, fieldColor wins for inherited child field color.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'color',
    description: 'Fallback color used for inherited child field color when fieldColor is not provided. In table mode it can also act as the legacy source for separator color when tableLineColor is unset.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'table',
    description: 'Enables structured table-style layout treatment for child fields.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'tableLineColor',
    description: 'Overrides the separator color used in table mode.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'tableCellBackgroundColor',
    description: 'Sets the background color applied to table-mode field cells.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'tableFieldColor',
    description: 'Legacy alias used to resolve table cell background treatment.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'tableLineOpacity',
    description: 'Adjusts separator opacity in table mode.',
    type: { value: 'string | number', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
]