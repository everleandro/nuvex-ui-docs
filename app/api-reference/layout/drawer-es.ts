import type { ApiPropReferenceRow } from '~/api-reference/schema'

export const drawerApiReferenceEs: ApiPropReferenceRow[] = [
  { property: 'modelValue', description: 'Controla si el drawer está abierto y admite enlace bidireccional con v-model.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'nav', description: 'Renderiza la raíz del drawer como un elemento nav semántico en lugar de aside.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'right', description: 'Coloca el drawer en el lado derecho en lugar del izquierdo.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'width', description: 'Define el ancho del drawer como número o cualquier medida CSS válida.', type: { value: 'string | number', class: 'string' }, default: { value: '16', class: 'number' } },
  { property: 'widthUnit', description: 'Proporciona la unidad CSS usada cuando width es un número o una cadena numérica.', type: { value: 'string', class: 'string' }, default: { value: 'rem', class: 'string' } },
  { property: 'floating', description: 'Separa la superficie de los bordes y aplica el fondo, radio y elevación opcional del modo flotante.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'appearance', description: 'Selecciona la superficie predeterminada o una apariencia transparente.', type: { value: "'default' | 'transparent'", class: 'string' }, default: { value: 'default', class: 'string' } },
  { property: 'elevation', description: 'Aplica una sombra del framework cuando el drawer es absolute o floating.', type: { value: 'ElevationLevel', class: 'string' }, default: { value: 'sm', class: 'string' } },
  { property: 'absolute', description: 'Posiciona el drawer de forma absoluta y activa el overlay temporal mientras está abierto.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'fixed', description: 'Aplica el modificador de posicionamiento fijo del drawer.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'autoFocus', description: 'Mueve el foco al drawer cuando se activa el comportamiento de overlay temporal.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'true', class: 'boolean' } },
  { property: 'restoreFocus', description: 'Devuelve el foco al elemento anterior cuando se cierra un drawer temporal.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'true', class: 'boolean' } },
  { property: 'disabled', description: 'Aplica la clase de estado deshabilitado a la raíz del drawer.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'devMode', description: 'Desactiva la adaptación automática al breakpoint para que el comportamiento absolute dependa solo de esa prop.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
]