import type { ApiPropReferenceRow } from '~/api-reference/schema'
import { buildEFieldInheritedApiReferenceEs } from '~/api-reference/forms/_shared/efield-es'

export const checkboxApiReferenceEs: ApiPropReferenceRow[] = [
  {
    property: 'modelValue',
    description: 'Valor actual del checkbox. El estado marcado se resuelve por igualdad estricta contra trueValue.',
    type: { value: 'boolean | string | number', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'trueValue',
    description: 'Valor emitido cuando el checkbox queda marcado.',
    type: { value: 'boolean | string | number', class: 'string' },
    default: { value: 'true', class: 'boolean' },
  },
  {
    property: 'falseValue',
    description: 'Valor emitido cuando el checkbox queda desmarcado.',
    type: { value: 'boolean | string | number', class: 'string' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'tonal',
    description: 'Muestra estilo de overlay del field dentro del slot de control sin cambiar el comportamiento.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  ...buildEFieldInheritedApiReferenceEs({
    labelBehaviorType: '"static"',
    labelBehaviorDescription: 'El comportamiento de label es estatico para controles checkbox.',
    rulesType: 'FieldRule<CheckboxValue>[]',
  }),
]
