import type { ApiPropReferenceRow } from '~/api-reference/schema'

export const cardApiReference: ApiPropReferenceRow[] = [
  { property: 'color', description: 'Resolves the card background and readable contrast colors from the active theme.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'outlined', description: 'Adds a thin border around the card surface.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'tonal', description: 'Uses color as a subtle surface tint and keeps the card flat.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'depressed', description: 'Removes visual elevation from the card.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'elevation', description: 'Applies an elevation preset when tonal mode is not active.', type: { value: 'Elevation', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'height', description: 'Sets an explicit card height. Numeric strings are normalized to pixels.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'title', description: 'Renders the primary text in the card header.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'subtitle', description: 'Renders supporting text in the card header.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'description', description: 'Renders a description between the header and default slot body.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'prependIcon / appendIcon', description: 'Renders an icon at the start or end of the complete card body area.', type: { value: 'string | IconPath | IconPath[]', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'prependIconProps / appendIconProps', description: 'Passes additional props to the corresponding body EIcon.', type: { value: "Partial<Omit<IconProps, 'icon'>>", class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'prependAvatar / appendAvatar', description: 'Renders an avatar at the start or end of the complete card body area.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'prependAvatarProps / appendAvatarProps', description: 'Passes additional props to the corresponding body EAvatar.', type: { value: "Partial<Omit<AvatarProps, 'src'>>", class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'prependVerticalAlign / appendVerticalAlign', description: 'Controls vertical alignment for body media.', type: { value: "'start' | 'center' | 'end' | 'stretch'", class: 'string' }, default: { value: "'center'", class: 'string' } },
  { property: 'prependHeaderIcon / appendHeaderIcon', description: 'Renders an icon at the start or end of the header.', type: { value: 'string | IconPath | IconPath[]', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'prependHeaderIconProps / appendHeaderIconProps', description: 'Passes additional props to the corresponding header EIcon.', type: { value: "Partial<Omit<IconProps, 'icon'>>", class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'prependHeaderAvatar / appendHeaderAvatar', description: 'Renders an avatar at the start or end of the header.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'prependHeaderAvatarProps / appendHeaderAvatarProps', description: 'Passes additional props to the corresponding header EAvatar.', type: { value: "Partial<Omit<AvatarProps, 'src'>>", class: 'string' }, default: { value: 'undefined', class: 'string' } },
]
