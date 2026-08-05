import type { ApiPropReferenceRow } from '~/api-reference/schema'

export const drawerApiReference: ApiPropReferenceRow[] = [
  { property: 'modelValue', description: 'Controls whether the drawer is open and supports two-way binding with v-model.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'nav', description: 'Renders the drawer root as a semantic nav element instead of an aside.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'right', description: 'Positions the drawer on the right side instead of the left.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'width', description: 'Sets the drawer width as a number or any valid CSS size.', type: { value: 'string | number', class: 'string' }, default: { value: '16', class: 'number' } },
  { property: 'widthUnit', description: 'Supplies the CSS unit used when width is numeric or a numeric string.', type: { value: 'string', class: 'string' }, default: { value: 'rem', class: 'string' } },
  { property: 'floating', description: 'Insets the drawer surface and applies the floating background, radius, and optional elevation.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'appearance', description: 'Selects the default surface or a transparent drawer appearance.', type: { value: "'default' | 'transparent'", class: 'string' }, default: { value: 'default', class: 'string' } },
  { property: 'elevation', description: 'Applies a framework shadow when the drawer is absolute or floating.', type: { value: 'ElevationLevel', class: 'string' }, default: { value: 'sm', class: 'string' } },
  { property: 'absolute', description: 'Positions the drawer absolutely and activates temporary overlay behavior while open.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'fixed', description: 'Applies the fixed-position drawer modifier.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'autoFocus', description: 'Moves focus into the drawer when temporary overlay behavior becomes active.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'true', class: 'boolean' } },
  { property: 'restoreFocus', description: 'Returns focus to the previously focused element when a temporary drawer closes.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'true', class: 'boolean' } },
  { property: 'disabled', description: 'Applies the disabled state class to the drawer root.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'devMode', description: 'Disables the automatic breakpoint fallback so absolute behavior follows only the absolute prop.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
]