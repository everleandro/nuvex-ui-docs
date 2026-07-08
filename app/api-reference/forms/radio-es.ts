import type { ApiPropReferenceRow } from '~/api-reference/schema'
import { buildEFieldInheritedApiReferenceEs } from '~/api-reference/forms/_shared/efield-es'

export const radioApiReferenceEs: ApiPropReferenceRow[] = [
  {
    property: 'ERadioGroup.modelValue',
    description: 'Valor seleccionado actual del grupo. Una opcion hija queda activa cuando su modelValue coincide exactamente con este valor.',
    type: { value: 'string | number | null | undefined', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'ERadioGroup.mandatory',
    description: 'Cuando esta activo y no existe una seleccion valida, inicializa la primera opcion disponible al montar.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'ERadioGroup.row',
    description: 'Distribuye los radios hijos en horizontal. Cuando se omite, el grupo se renderiza en columna.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'ERadioGroup.tonal',
    description: 'Muestra el estilo de overlay del field sobre el contenedor del grupo sin cambiar el comportamiento de seleccion.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  ...buildEFieldInheritedApiReferenceEs({
    labelBehaviorType: '"static"',
    labelBehaviorDescription: 'El comportamiento de label es estatico para controles radio group.',
    rulesType: 'FieldRule<ERadioType>[]',
  }),
  {
    property: 'ERadio.modelValue',
    description: 'Valor representado por la opcion individual. Debe usarse dentro de ERadioGroup.',
    type: { value: 'string | number | null | undefined', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'ERadio.label',
    description: 'Texto visible de la etiqueta para la opcion individual.',
    type: { value: 'string | number', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
]