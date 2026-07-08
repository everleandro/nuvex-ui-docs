import type { ApiPropReferenceRow } from '~/api-reference/schema'
import { buildEFieldInheritedApiReference } from '~/api-reference/forms/_shared/efield'

export const radioApiReference: ApiPropReferenceRow[] = [
  {
    property: 'ERadioGroup.modelValue',
    description: 'Current selected value for the group. A child radio is active when its modelValue matches this value exactly.',
    type: { value: 'string | number | null | undefined', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'ERadioGroup.mandatory',
    description: 'When enabled and no valid selection exists, initializes the first available radio on mount.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'ERadioGroup.row',
    description: 'Lays out child radios horizontally. When omitted, the group is rendered as a column.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'ERadioGroup.tonal',
    description: 'Shows field overlay styling on the group container without changing selection behavior.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  ...buildEFieldInheritedApiReference({
    labelBehaviorType: '"static"',
    labelBehaviorDescription: 'Label behavior is static for radio group controls.',
    rulesType: 'FieldRule<ERadioType>[]',
  }),
  {
    property: 'ERadio.modelValue',
    description: 'Value represented by the individual option. This must be used inside ERadioGroup.',
    type: { value: 'string | number | null | undefined', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'ERadio.label',
    description: 'Visible label text for the individual option.',
    type: { value: 'string | number', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
]