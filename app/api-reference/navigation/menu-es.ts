import type { ApiPropReferenceRow } from '~/api-reference/schema'

export const menuApiReferenceEs: ApiPropReferenceRow[] = [
  { property: 'modelValue', description: 'Estado de apertura controlado y sincronizado mediante update:modelValue.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'activator', description: 'Activador externo resuelto desde un elemento, selector CSS o ref de elemento.', type: { value: 'MenuTypeTarget', class: 'string' }, default: { value: 'slot activator', class: 'string' } },
  { property: 'closeOnContentClick', description: 'Cierra el menu cuando su superficie de contenido recibe un clic.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'disableMenu', description: 'Impide la activacion por clic y teclado conservando el estado ARIA.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'fitContent / fullWidth', description: 'Usa el ancho intrinseco del contenido o iguala exactamente el ancho del activador.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'width / maxWidth', description: 'Define un ancho explicito o limita el ancho maximo del menu.', type: { value: 'string | number', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'origin', description: 'Posicion vertical y horizontal preferida respecto al activador.', type: { value: 'string', class: 'string' }, default: { value: '"bottom left"', class: 'string' } },
  { property: 'offsetX / offsetY', description: 'Desplaza el menu desde su posicion horizontal o vertical resuelta.', type: { value: 'string | number', class: 'string' }, default: { value: '0', class: 'number' } },
  { property: 'checkOffset', description: 'Ajusta la posicion resuelta para mantener el menu dentro de los margenes del viewport.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'holdFocus', description: 'Mantiene el foco en el elemento actual en lugar de moverlo al menu o devolverlo al activador.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'transition', description: 'Nombra la transicion Vue usada al abrir y cerrar el contenido.', type: { value: 'string', class: 'string' }, default: { value: '"fade"', class: 'string' } },
  { property: 'color / elevation', description: 'Define el color frontal del contenido y la elevacion de la superficie.', type: { value: 'string / Elevation', class: 'string' }, default: { value: 'undefined / "sm"', class: 'string' } },
  { property: 'ariaHaspopup / ariaControls', description: 'Sobrescribe los atributos de relacion generados para el activador.', type: { value: 'string', class: 'string' }, default: { value: '"menu" / id generado', class: 'string' } },
  { property: 'contentRole', description: 'Define el rol del contenido teletransportado. Usa presentation cuando un hijo tenga la semantica.', type: { value: 'string', class: 'string' }, default: { value: '"menu"', class: 'string' } },
]