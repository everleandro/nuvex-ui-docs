import type { ApiPropReferenceRow } from '~/api-reference/schema'
import { buildEFieldInheritedApiReference } from '~/api-reference/forms/_shared/efield'

export const checkboxApiReference: ApiPropReferenceRow[] = [
  {
    property: 'modelValue',
    description: 'Current checkbox value. Checked state is resolved by strict equality against trueValue.',
    type: { value: 'boolean | string | number', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'trueValue',
    description: 'Value emitted when the checkbox becomes checked.',
    type: { value: 'boolean | string | number', class: 'string' },
    default: { value: 'true', class: 'boolean' },
  },
  {
    property: 'falseValue',
    description: 'Value emitted when the checkbox becomes unchecked.',
    type: { value: 'boolean | string | number', class: 'string' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'tonal',
    description: 'Shows field overlay styling inside the control slot without changing behavior.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  ...buildEFieldInheritedApiReference({
    labelBehaviorType: '"static"',
    labelBehaviorDescription: 'Label behavior is static for checkbox controls.',
    rulesType: 'FieldRule<CheckboxValue>[]',
  }),
]
