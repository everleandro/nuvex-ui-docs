import type { ApiPropReferenceRow } from '~/api-reference/schema'
import { buildEFieldInheritedApiReferenceEs } from '~/api-reference/forms/_shared/efield-es'

export const textareaApiReferenceEs: ApiPropReferenceRow[] = [
  {
    property: 'modelValue',
    description: 'Valor actual del textarea. Soporta uso controlado con v-model.',
    type: { value: 'string | number | null', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'name',
    description: 'Atributo name nativo del textarea para envios de formulario.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'placeholder',
    description: 'Placeholder mostrado cuando no hay valor y el comportamiento de label lo permite.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'rows',
    description: 'Cantidad inicial de filas visibles del area de texto.',
    type: { value: 'string | number', class: 'string' },
    default: { value: '3', class: 'string' },
  },
  {
    property: 'prefix',
    description: 'Texto renderizado antes de la region de entrada del textarea.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'suffix',
    description: 'Texto renderizado despues de la region de entrada del textarea.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'autocomplete',
    description: 'Atributo autocomplete nativo para comportamiento de autofill del navegador.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'inputReadonly',
    description: 'Aplica readonly directamente al elemento textarea nativo.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'iconClear',
    description: 'Sobrescribe el icono usado por la accion de limpiar.',
    type: { value: 'string | IconPath | IconPath[]', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'limit',
    description: 'Cantidad maxima de caracteres permitidos en la entrada del textarea.',
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
    property: 'spellcheck',
    description: 'Activa correccion ortografica del navegador para contenido del textarea.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'autocapitalize',
    description: 'Controla capitalizacion automatica en dispositivos compatibles.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'enterkeyhint',
    description: 'Sugiere etiqueta de accion para la tecla Enter en teclados virtuales.',
    type: { value: 'TextInputEnterKeyHint', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'modelModifiers',
    description: 'Mapa de modificadores v-model (trim, number, lazy) aplicado por la logica del input.',
    type: { value: 'TextInputModelModifiers', class: 'string' },
    default: { value: '{}', class: 'string' },
  },
  ...buildEFieldInheritedApiReferenceEs({
    labelBehaviorType: '"static" | "floating" | "inline"',
    labelBehaviorDescription: 'Estrategia de comportamiento de etiqueta para presentacion static/floating/inline.',
    rulesType: 'FieldRule<TextInputValue>[]',
  }),
]
