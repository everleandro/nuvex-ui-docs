import type { ApiPropReferenceRow } from '~/api-reference/schema'

export const listApiReferenceEs: ApiPropReferenceRow[] = [
  { property: 'modelValue', description: 'Valor del item seleccionado. Un arreglo activa seleccion multiple.', type: { value: 'ListModelProp', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'group', description: 'Estado controlado de grupos abiertos. Sin esta prop, la lista administra el estado internamente.', type: { value: 'ListModelProp', class: 'string' }, default: { value: 'estado interno', class: 'string' } },
  { property: 'disabled', description: 'Deshabilita la interaccion de la lista y todos sus items y grupos descendientes.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'outlined / inset / dense', description: 'Controla borde, espaciado interno, radio de los items y densidad compacta.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'size', description: 'Tamano por defecto heredado por los items, salvo override local.', type: { value: 'Size', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'color / activeColor', description: 'Define el color base del texto y el color del item activo.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'elevation', description: 'Aplica una clase de elevacion del framework a la superficie.', type: { value: 'Elevation', class: 'string' }, default: { value: 'undefined', class: 'string' } },
]

export const listItemApiReferenceEs: ApiPropReferenceRow[] = [
  { property: 'value', description: 'Identidad usada por el modelo de seleccion de la lista padre.', type: { value: 'string | number', class: 'string' }, default: { value: 'ruta o id generado', class: 'string' } },
  { property: 'title / subtitle', description: 'Texto principal y secundario con relaciones accesibles automaticas.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'prependIcon / appendIcon', description: 'Renderiza un icono en la region inicial o final del item.', type: { value: 'string | IconPath | IconPath[]', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'prependAvatar / appendAvatar', description: 'Renderiza un avatar de imagen en la region inicial o final.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'isActive / activeClass', description: 'Sobrescribe el estado activo derivado del modelo y personaliza su clase.', type: { value: 'boolean / string', class: 'string' }, default: { value: 'undefined / "e-list-item--active"', class: 'string' } },
  { property: 'disabled', description: 'Retira el item de la interaccion y del foco administrado por teclado.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'ripple', description: 'Prop de compatibilidad para el contrato de ripple del item interactivo.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'undefined', class: 'string' } },
  { property: 'tag', description: 'Sobrescribe el elemento raiz. La prop to renderiza router-link por defecto.', type: { value: 'string', class: 'string' }, default: { value: '"li"', class: 'string' } },
  { property: 'size', description: 'Sobrescribe el tamano heredado desde EList.', type: { value: 'Size', class: 'string' }, default: { value: '"default"', class: 'string' } },
  { property: 'color / activeColor', description: 'Sobrescribe los colores base o activo heredados para este item.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
]

export const listGroupApiReferenceEs: ApiPropReferenceRow[] = [
  { property: 'value', description: 'Identidad estable usada para construir la ruta jerarquica del grupo.', type: { value: 'string | number', class: 'string' }, default: { value: 'id generado', class: 'string' } },
  { property: 'disabled', description: 'Deshabilita el activador y hereda el estado disabled de EList.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'elevation', description: 'Aplica una clase de elevacion del framework al contenedor del grupo.', type: { value: 'Elevation', class: 'string' }, default: { value: 'undefined', class: 'string' } },
]