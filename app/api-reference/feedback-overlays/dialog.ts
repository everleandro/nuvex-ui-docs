import type { ApiPropReferenceRow } from '~/api-reference/schema'

export const dialogApiReference: ApiPropReferenceRow[] = [
  { property: 'modelValue', description: 'Controlled open state synchronized through update:modelValue.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'persistent', description: 'Prevents Escape and outside interaction from closing the dialog and plays rejection feedback instead.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'maxWidth', description: 'Constrains the panel width when the dialog is not fullscreen. Numeric values are normalized to pixels.', type: { value: 'string | number', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'fluid', description: 'Expands the dialog panel to the available width while preserving its viewport margins.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'fullscreen', description: 'Makes the panel occupy the full viewport and ignores maxWidth.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'absolute', description: 'Positions the dialog content container absolutely instead of fixing it to the viewport.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'autoFocus', description: 'Moves focus into the active dialog when it opens.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'true', class: 'boolean' } },
  { property: 'restoreFocus', description: 'Returns focus to the previously focused element when the dialog closes.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'true', class: 'boolean' } },
  { property: 'elevation', description: 'Applies a framework elevation class to the dialog panel.', type: { value: 'Elevation', class: 'string' }, default: { value: 'undefined', class: 'string' } },
]