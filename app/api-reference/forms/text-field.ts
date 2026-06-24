import type { ApiPropReferenceRow } from '~/api-reference/schema'

export const textFieldApiReference: ApiPropReferenceRow[] = [
  {
    property: 'modelValue',
    description: 'Current input value. Supports controlled usage with v-model.',
    type: { value: 'string | number | null', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'label',
    description: 'Field label rendered in the control container.',
    type: { value: 'string | number', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'placeholder',
    description: 'Placeholder shown when there is no value and label behavior allows it.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'disabled',
    description: 'Disables interactions and applies disabled state styles.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'readonly / inputReadonly',
    description: 'Prevents editing while preserving focus/selection behavior.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'clearable',
    description: 'Shows clear action when the field has value and is interactive.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'type',
    description: 'Native input type. Common values include text, email, and password.',
    type: { value: 'string', class: 'string' },
    default: { value: 'text', class: 'string' },
  },
  {
    property: 'limit',
    description: 'Maximum number of characters allowed in the input.',
    type: { value: 'string | number', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'counter',
    description: 'Displays character counter in details section.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'prefix / suffix',
    description: 'Text content rendered before or after the input value area.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'prependInnerIcon / appendInnerIcon',
    description: 'Icon displayed inside the field frame at the start or end.',
    type: { value: 'IconPath | string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'outlined',
    description: 'Uses outlined visual variant for the field container.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'color',
    description: 'Theme color applied to active state and accents.',
    type: { value: 'string', class: 'string' },
    default: { value: 'primary', class: 'string' },
  },
  {
    property: 'rules / detailErrors',
    description: 'Validation rules and explicit error messages for details state.',
    type: { value: 'FieldRule[] | string[]', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
]
