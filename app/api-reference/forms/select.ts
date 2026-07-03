import type { ApiPropReferenceRow } from '~/api-reference/schema'

export const selectApiReference: ApiPropReferenceRow[] = [
  {
    property: 'modelValue',
    description: 'Current selected value. Supports single value or array when multiple=true.',
    type: { value: 'SelectModelValue', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'items',
    description: 'Available options list. Supports primitive and object items.',
    type: { value: 'SelectItemType[]', class: 'string' },
    default: { value: '[]', class: 'string' },
  },
  {
    property: 'itemText / itemValue',
    description: 'Object keys used to resolve rendered label and emitted value.',
    type: { value: 'string', class: 'string' },
    default: { value: '"text" / "value"', class: 'string' },
  },
  {
    property: 'multiple',
    description: 'Enables multiple selection mode.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'returnObject',
    description: 'Emits whole object item instead of normalized primitive value.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'autocomplete / search',
    description: 'Allows editable input and external search binding through update:search.',
    type: { value: 'boolean / string | number', class: 'string' },
    default: { value: 'false / undefined', class: 'string' },
  },
  {
    property: 'chip / chipClosable',
    description: 'Renders selected values as chips and optionally allows closing single-chip selection.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false / false', class: 'boolean' },
  },
  {
    property: 'placeholder',
    description: 'Placeholder text shown when no value is selected.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'prefix / suffix',
    description: 'Decorative text rendered before or after the selection region.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'loading',
    description: 'Displays loading state and linear indicator while options are being resolved.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'outlined',
    description: 'Uses outlined visual variant for the field container.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'disabled / readonly / clearable',
    description: 'Core interaction states inherited from field base behavior.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false / false / false', class: 'boolean' },
  },
  {
    property: 'color / menuColor',
    description: 'Theme colors for field state and dropdown surface.',
    type: { value: 'string', class: 'string' },
    default: { value: '"primary" / undefined', class: 'string' },
  },
  {
    property: 'rules / detailErrors',
    description: 'Validation rules and explicit error messages for details area.',
    type: { value: 'FieldRule[] | string[]', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
]
