import type { ApiPropReferenceRow } from '~/api-reference/schema'

export const textFieldApiReferenceEs: ApiPropReferenceRow[] = [
  {
    property: 'modelValue',
    description: 'Valor actual del campo. Soporta uso controlado con v-model.',
    type: { value: 'string | number | null', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'label',
    description: 'Etiqueta del campo renderizada en el contenedor de control.',
    type: { value: 'string | number', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'placeholder',
    description: 'Placeholder mostrado cuando no hay valor y el comportamiento de label lo permite.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'disabled',
    description: 'Deshabilita interacciones y aplica estilos de estado deshabilitado.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'readonly / inputReadonly',
    description: 'Evita edicion manteniendo comportamiento de foco/seleccion.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'clearable',
    description: 'Muestra accion de limpiar cuando el campo tiene valor y es interactivo.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'type',
    description: 'Tipo nativo del input. Valores comunes: text, email y password.',
    type: { value: 'string', class: 'string' },
    default: { value: 'text', class: 'string' },
  },
  {
    property: 'limit',
    description: 'Cantidad maxima de caracteres permitidos en la entrada.',
    type: { value: 'string | number', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'counter',
    description: 'Muestra contador de caracteres en la zona de detalles.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'prefix / suffix',
    description: 'Texto renderizado antes o despues del area de valor del input.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'prependInnerIcon / appendInnerIcon',
    description: 'Icono mostrado dentro del marco del campo al inicio o final.',
    type: { value: 'IconPath | string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'outlined',
    description: 'Usa variante visual outlined para el contenedor del campo.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'color',
    description: 'Color del tema aplicado a estados activos y acentos.',
    type: { value: 'string', class: 'string' },
    default: { value: 'primary', class: 'string' },
  },
  {
    property: 'rules / detailErrors',
    description: 'Reglas de validacion y mensajes de error explicitos para el estado de detalles.',
    type: { value: 'FieldRule[] | string[]', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
]
