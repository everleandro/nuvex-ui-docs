import type { ApiPropReferenceRow } from '~/api-reference/schema'

export const progressApiReferenceEs: ApiPropReferenceRow[] = [
  { property: 'indeterminate', description: 'Usa una animación continua cuando la operación no puede informar un porcentaje exacto de finalización.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'value', description: 'Define el progreso determinado. Los valores se normalizan al rango de 0 a 100.', type: { value: 'number', class: 'number' }, default: { value: '0', class: 'number' } },
  { property: 'height', description: 'Define el grosor de la barra. Los números se normalizan a píxeles y los strings aceptan medidas CSS válidas.', type: { value: 'string | number', class: 'string' }, default: { value: '4', class: 'number' } },
  { property: 'color', description: 'Resuelve el color del progreso mediante el sistema de color del framework.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'useContrastColor', description: 'Usa el token de contraste asociado con color en lugar de su valor base.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
]