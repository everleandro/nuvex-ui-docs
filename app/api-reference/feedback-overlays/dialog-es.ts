import type { ApiPropReferenceRow } from '~/api-reference/schema'

export const dialogApiReferenceEs: ApiPropReferenceRow[] = [
  { property: 'modelValue', description: 'Estado de apertura controlado y sincronizado mediante update:modelValue.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'persistent', description: 'Impide que Escape o la interacción exterior cierren el dialog y reproduce feedback de rechazo.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'maxWidth', description: 'Limita el ancho del panel cuando el dialog no está en fullscreen. Los valores numéricos se normalizan a píxeles.', type: { value: 'string | number', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'fluid', description: 'Expande el panel al ancho disponible conservando sus márgenes respecto al viewport.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'fullscreen', description: 'Hace que el panel ocupe todo el viewport e ignora maxWidth.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'absolute', description: 'Posiciona el contenedor del dialog de forma absoluta en lugar de fijarlo al viewport.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'autoFocus', description: 'Mueve el foco al dialog activo cuando se abre.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'true', class: 'boolean' } },
  { property: 'restoreFocus', description: 'Devuelve el foco al elemento previamente enfocado cuando el dialog se cierra.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'true', class: 'boolean' } },
  { property: 'elevation', description: 'Aplica una clase de elevación del framework al panel del dialog.', type: { value: 'Elevation', class: 'string' }, default: { value: 'undefined', class: 'string' } },
]