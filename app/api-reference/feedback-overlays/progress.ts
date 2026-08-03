import type { ApiPropReferenceRow } from '~/api-reference/schema'

export const progressApiReference: ApiPropReferenceRow[] = [
  { property: 'indeterminate', description: 'Uses continuous animation when the operation cannot report an exact completion percentage.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'value', description: 'Sets determinate progress. Values are normalized to the 0–100 range.', type: { value: 'number', class: 'number' }, default: { value: '0', class: 'number' } },
  { property: 'height', description: 'Sets the bar thickness. Numeric values are normalized to pixels; strings accept valid CSS sizes.', type: { value: 'string | number', class: 'string' }, default: { value: '4', class: 'number' } },
  { property: 'color', description: 'Resolves the progress color through the framework color system.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'useContrastColor', description: 'Uses the contrast token associated with color instead of its base value.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
]