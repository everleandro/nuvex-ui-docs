import type { ApiPropReferenceRow } from '~/api-reference/schema'

export const gridRowApiReferenceEs: ApiPropReferenceRow[] = [
  { property: 'dense', description: 'Compacta el espaciado de la fila aplicando el modificador dense.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'auto', description: 'Activa el comportamiento de ancho automático para los hijos de la fila según su contenido y props de columna.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'equal', description: 'Distribuye el ancho disponible de forma equitativa entre columnas hermanas.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'noGutters', description: 'Elimina el gutter horizontal estándar entre columnas.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'gap', description: 'Sobrescribe el gap de la fila con tokens del framework (none/xs/sm/md/lg) o con un valor entero en píxeles.', type: { value: 'GapValue | number | string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
]

export const gridColApiReferenceEs: ApiPropReferenceRow[] = [
  { property: 'cols', description: 'Define el span base de la columna sobre 12 tracks o usa auto.', type: { value: "number | string | 'auto'", class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'xs', description: 'Define el span para el breakpoint extra small.', type: { value: "number | string | 'auto'", class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'sm', description: 'Define el span para el breakpoint small.', type: { value: "number | string | 'auto'", class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'md', description: 'Define el span para el breakpoint medium.', type: { value: "number | string | 'auto'", class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'lg', description: 'Define el span para el breakpoint large.', type: { value: "number | string | 'auto'", class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'xl', description: 'Define el span para el breakpoint extra large.', type: { value: "number | string | 'auto'", class: 'string' }, default: { value: 'undefined', class: 'string' } },
]
