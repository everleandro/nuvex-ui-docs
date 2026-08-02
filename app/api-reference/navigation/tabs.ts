import type { ApiPropReferenceRow } from '~/api-reference/schema'

export const tabGroupApiReference: ApiPropReferenceRow[] = [
  { property: 'modelValue', description: 'Active tab value synchronized through update:modelValue.', type: { value: 'string | number', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'color', description: 'Sets the active tab and indicator color.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'inactiveColor', description: 'Sets the color inherited by inactive tabs.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'track', description: 'Renders a baseline beneath the active indicator.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'vertical', description: 'Uses a vertical layout and switches keyboard navigation to the vertical axis.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'grow', description: 'Distributes the available space equally between tabs.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'tabAlign', description: 'Aligns tabs along the group main axis.', type: { value: '"start" | "center" | "end"', class: 'string' }, default: { value: '"center"', class: 'string' } },
  { property: 'name', description: 'Prefixes tab and panel IDs used by the accessible relationship.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
]

export const tabApiReference: ApiPropReferenceRow[] = [
  { property: 'value', description: 'Unique identity matched against the parent group model.', type: { value: 'string | number', class: 'string' }, default: { value: 'required', class: 'string' } },
  { property: 'icon', description: 'Renders an icon in the tab button.', type: { value: 'string | IconPath | IconPath[]', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'disabled', description: 'Disables pointer and keyboard activation for this tab button.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'color', description: 'Overrides the group color for this tab when active.', type: { value: 'string', class: 'string' }, default: { value: 'inherited', class: 'string' } },
  { property: 'to', description: 'Forwards a navigation target to the inherited button contract.', type: { value: 'RouteLocationRaw', class: 'string' }, default: { value: 'undefined', class: 'string' } },
]