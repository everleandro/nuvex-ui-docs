import type { ApiPropReferenceRow } from '~/api-reference/schema'

export const barApiReference: ApiPropReferenceRow[] = [
  { property: 'app', description: 'Registers the bar with the nearest EApp layout context so EMain and EDrawer receive its offsets.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'color', description: 'Resolves the bar background and readable contrast colors from the active theme.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'dense', description: 'Uses the compact 48px bar height instead of the default 64px height.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'height', description: 'Sets an explicit bar height and overrides the standard or dense height.', type: { value: 'string | number', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'fixed', description: 'Fixes the bar to its containing viewport while preserving layout registration.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'absolute', description: 'Positions the bar absolutely within its containing block.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'clipped', description: 'Extends an app bar across the drawer region and offsets a coordinated drawer below it.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'outlined', description: 'Adds a thin border and removes the bar shadow.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'depressed', description: 'Removes visual elevation from the bar.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'elevation', description: 'Applies a framework elevation preset to the bar.', type: { value: 'ElevationLevel', class: 'string' }, default: { value: 'undefined', class: 'string' } },
]