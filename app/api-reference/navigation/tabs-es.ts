import type { ApiPropReferenceRow } from '~/api-reference/schema'

export const tabGroupApiReferenceEs: ApiPropReferenceRow[] = [
  { property: 'modelValue', description: 'Valor del tab activo sincronizado mediante update:modelValue.', type: { value: 'string | number', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'color', description: 'Define el color del tab activo y del indicador.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'inactiveColor', description: 'Define el color heredado por los tabs inactivos.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'track', description: 'Renderiza una linea base debajo del indicador activo.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'vertical', description: 'Usa un layout vertical y cambia la navegacion por teclado al eje vertical.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'grow', description: 'Distribuye el espacio disponible por igual entre los tabs.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'tabAlign', description: 'Alinea los tabs sobre el eje principal del grupo.', type: { value: '"start" | "center" | "end"', class: 'string' }, default: { value: '"center"', class: 'string' } },
  { property: 'name', description: 'Prefija los IDs que establecen la relacion accesible entre tabs y paneles.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
]

export const tabApiReferenceEs: ApiPropReferenceRow[] = [
  { property: 'value', description: 'Identidad unica comparada con el modelo del grupo padre.', type: { value: 'string | number', class: 'string' }, default: { value: 'requerida', class: 'string' } },
  { property: 'icon', description: 'Renderiza un icono en el boton del tab.', type: { value: 'string | IconPath | IconPath[]', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'disabled', description: 'Deshabilita la activacion por puntero y teclado para este tab.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'color', description: 'Sobrescribe el color del grupo para este tab cuando esta activo.', type: { value: 'string', class: 'string' }, default: { value: 'heredado', class: 'string' } },
  { property: 'to', description: 'Propaga un destino de navegacion al contrato heredado de Button.', type: { value: 'RouteLocationRaw', class: 'string' }, default: { value: 'undefined', class: 'string' } },
]