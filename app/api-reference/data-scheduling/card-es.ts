import type { ApiPropReferenceRow } from '~/api-reference/schema'

export const cardApiReferenceEs: ApiPropReferenceRow[] = [
  { property: 'color', description: 'Resuelve los colores de fondo y contraste legible de la card desde el tema activo.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'outlined', description: 'Agrega un borde fino alrededor de la superficie de la card.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'tonal', description: 'Usa el color como tinte sutil de superficie y mantiene plana la card.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'depressed', description: 'Elimina la elevación visual de la card.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'elevation', description: 'Aplica un nivel de elevación cuando el modo tonal no está activo.', type: { value: 'Elevation', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'height', description: 'Define una altura explícita para la card. Los strings numéricos se normalizan a píxeles.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'title', description: 'Renderiza el texto principal en el encabezado de la card.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'subtitle', description: 'Renderiza texto de apoyo en el encabezado de la card.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'description', description: 'Renderiza una descripción entre el encabezado y el cuerpo del slot default.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'prependIcon / appendIcon', description: 'Renderiza un icono al inicio o final del área completa del cuerpo de la card.', type: { value: 'string | IconPath | IconPath[]', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'prependIconProps / appendIconProps', description: 'Pasa props adicionales al EIcon correspondiente del cuerpo.', type: { value: "Partial<Omit<IconProps, 'icon'>>", class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'prependAvatar / appendAvatar', description: 'Renderiza un avatar al inicio o final del área completa del cuerpo de la card.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'prependAvatarProps / appendAvatarProps', description: 'Pasa props adicionales al EAvatar correspondiente del cuerpo.', type: { value: "Partial<Omit<AvatarProps, 'src'>>", class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'prependVerticalAlign / appendVerticalAlign', description: 'Controla la alineación vertical de la media del cuerpo.', type: { value: "'start' | 'center' | 'end' | 'stretch'", class: 'string' }, default: { value: "'center'", class: 'string' } },
  { property: 'prependHeaderIcon / appendHeaderIcon', description: 'Renderiza un icono al inicio o final del encabezado.', type: { value: 'string | IconPath | IconPath[]', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'prependHeaderIconProps / appendHeaderIconProps', description: 'Pasa props adicionales al EIcon correspondiente del encabezado.', type: { value: "Partial<Omit<IconProps, 'icon'>>", class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'prependHeaderAvatar / appendHeaderAvatar', description: 'Renderiza un avatar al inicio o final del encabezado.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'prependHeaderAvatarProps / appendHeaderAvatarProps', description: 'Pasa props adicionales al EAvatar correspondiente del encabezado.', type: { value: "Partial<Omit<AvatarProps, 'src'>>", class: 'string' }, default: { value: 'undefined', class: 'string' } },
]
