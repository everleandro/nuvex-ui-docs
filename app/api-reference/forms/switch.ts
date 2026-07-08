import type { ApiPropReferenceRow } from '~/api-reference/schema'
import { buildEFieldInheritedApiReference } from '~/api-reference/forms/_shared/efield'

export const switchApiReference: ApiPropReferenceRow[] = [
  {
    property: 'modelValue',
    description: 'Current switch value. Active state is resolved by strict equality against trueValue.',
    type: { value: 'boolean | string | number', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'trueValue',
    description: 'Value emitted when the switch becomes active.',
    type: { value: 'boolean | string | number', class: 'string' },
    default: { value: 'true', class: 'boolean' },
  },
  {
    property: 'falseValue',
    description: 'Value emitted when the switch becomes inactive.',
    type: { value: 'boolean | string | number', class: 'string' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'loading',
    description: 'Makes the control non-interactive and shows an inline loading indicator in the thumb.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'tonal',
    description: 'Shows field overlay styling inside the switch control without changing binary behavior.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'hideOverlay',
    description: 'Hides the shared field overlay visual without changing switch behavior.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  ...buildEFieldInheritedApiReference({
    labelBehaviorType: '"static"',
    labelBehaviorDescription: 'Label behavior is static for switch controls.',
    rulesType: 'FieldRule<SwitchValue>[]',
  }),
]