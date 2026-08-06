import type { ApiPropReferenceRow } from '~/api-reference/schema'

export const gridRowApiReference: ApiPropReferenceRow[] = [
  { property: 'dense', description: 'Compacts row spacing by applying the dense row modifier.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'auto', description: 'Enables automatic width behavior for row children based on their content and column props.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'equal', description: 'Distributes available width equally among sibling columns.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'noGutters', description: 'Removes the standard horizontal gutter spacing between columns.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'gap', description: 'Overrides row gap using framework tokens (none/xs/sm/md/lg) or an integer pixel value.', type: { value: "GapValue | number | string", class: 'string' }, default: { value: 'undefined', class: 'string' } },
]

export const gridColApiReference: ApiPropReferenceRow[] = [
  { property: 'cols', description: 'Sets the base column span across 12 tracks, or uses auto sizing.', type: { value: "number | string | 'auto'", class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'xs', description: 'Sets the span for the extra-small breakpoint.', type: { value: "number | string | 'auto'", class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'sm', description: 'Sets the span for the small breakpoint.', type: { value: "number | string | 'auto'", class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'md', description: 'Sets the span for the medium breakpoint.', type: { value: "number | string | 'auto'", class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'lg', description: 'Sets the span for the large breakpoint.', type: { value: "number | string | 'auto'", class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'xl', description: 'Sets the span for the extra-large breakpoint.', type: { value: "number | string | 'auto'", class: 'string' }, default: { value: 'undefined', class: 'string' } },
]
