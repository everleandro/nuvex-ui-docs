import type { ApiPropReferenceRow } from '~/api-reference/schema'
import { buildEFieldInheritedApiReferenceEs } from '~/api-reference/forms/_shared/efield-es'

export const switchApiReferenceEs: ApiPropReferenceRow[] = [
  {
    property: 'modelValue',
    description: 'Valor actual del switch. El estado activo se resuelve por igualdad estricta contra trueValue.',
    type: { value: 'boolean | string | number', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'trueValue',
    description: 'Valor emitido cuando el switch queda activo.',
    type: { value: 'boolean | string | number', class: 'string' },
    default: { value: 'true', class: 'boolean' },
  },
  {
    property: 'falseValue',
    description: 'Valor emitido cuando el switch queda inactivo.',
    type: { value: 'boolean | string | number', class: 'string' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'loading',
    description: 'Vuelve el control no interactivo y muestra un indicador de carga inline en el thumb.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'tonal',
    description: 'Muestra el estilo de overlay del field dentro del control switch sin cambiar el comportamiento binario.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'hideOverlay',
    description: 'Oculta el visual de overlay compartido del field sin cambiar el comportamiento del switch.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  ...buildEFieldInheritedApiReferenceEs({
    labelBehaviorType: '"static"',
    labelBehaviorDescription: 'El comportamiento de label es estatico para controles switch.',
    rulesType: 'FieldRule<SwitchValue>[]',
  }),
]