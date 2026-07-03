import type { ApiPropReferenceRow } from '~/api-reference/schema'

export const selectApiReferenceEs: ApiPropReferenceRow[] = [
  {
    property: 'modelValue',
    description: 'Valor seleccionado actual. Soporta valor simple o arreglo cuando multiple=true.',
    type: { value: 'SelectModelValue', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'items',
    description: 'Lista de opciones disponibles. Soporta items primitivos y objetos.',
    type: { value: 'SelectItemType[]', class: 'string' },
    default: { value: '[]', class: 'string' },
  },
  {
    property: 'itemText / itemValue',
    description: 'Claves del objeto usadas para resolver etiqueta visible y valor emitido.',
    type: { value: 'string', class: 'string' },
    default: { value: '"text" / "value"', class: 'string' },
  },
  {
    property: 'multiple',
    description: 'Activa modo de seleccion multiple.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'returnObject',
    description: 'Emite el objeto completo en lugar del valor primitivo normalizado.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'autocomplete / search',
    description: 'Permite input editable y binding de busqueda externo con update:search.',
    type: { value: 'boolean / string | number', class: 'string' },
    default: { value: 'false / undefined', class: 'string' },
  },
  {
    property: 'chip / chipClosable',
    description: 'Renderiza seleccion como chips y opcionalmente permite cerrar chip en seleccion simple.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false / false', class: 'boolean' },
  },
  {
    property: 'placeholder',
    description: 'Texto placeholder mostrado cuando no hay valor seleccionado.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'prefix / suffix',
    description: 'Texto decorativo renderizado antes o despues de la region de seleccion.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'loading',
    description: 'Muestra estado de carga e indicador lineal mientras se resuelven opciones.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'outlined',
    description: 'Usa variante visual outlined para el contenedor del field.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'disabled / readonly / clearable',
    description: 'Estados de interaccion base heredados del comportamiento Field.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false / false / false', class: 'boolean' },
  },
  {
    property: 'color / menuColor',
    description: 'Colores de tema para estado del field y superficie del dropdown.',
    type: { value: 'string', class: 'string' },
    default: { value: '"primary" / undefined', class: 'string' },
  },
  {
    property: 'rules / detailErrors',
    description: 'Reglas de validacion y mensajes de error explicitos para la zona de detalles.',
    type: { value: 'FieldRule[] | string[]', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
]
