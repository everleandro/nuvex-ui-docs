import type { ApiPropReferenceRow } from '~/api-reference/schema'

export const barApiReferenceEs: ApiPropReferenceRow[] = [
  { property: 'app', description: 'Registra la barra en el contexto de layout de EApp más cercano para que EMain y EDrawer reciban sus offsets.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'color', description: 'Resuelve los colores de fondo y contraste legible de la barra desde el tema activo.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'dense', description: 'Usa la altura compacta de 48px en lugar de la altura predeterminada de 64px.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'height', description: 'Define una altura explícita y reemplaza la altura estándar o dense.', type: { value: 'string | number', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'fixed', description: 'Fija la barra a su viewport contenedor y conserva su registro en el layout.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'absolute', description: 'Posiciona la barra de forma absoluta dentro de su bloque contenedor.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'clipped', description: 'Extiende una app bar sobre la región del drawer y desplaza debajo un drawer coordinado.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'outlined', description: 'Agrega un borde fino y elimina la sombra de la barra.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'depressed', description: 'Elimina la elevación visual de la barra.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'elevation', description: 'Aplica un nivel de elevación del framework a la barra.', type: { value: 'ElevationLevel', class: 'string' }, default: { value: 'undefined', class: 'string' } },
]