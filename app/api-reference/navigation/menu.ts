import type { ApiPropReferenceRow } from '~/api-reference/schema'

export const menuApiReference: ApiPropReferenceRow[] = [
  { property: 'modelValue', description: 'Controlled open state synchronized through update:modelValue.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'activator', description: 'External activator resolved from an element, CSS selector, or element ref.', type: { value: 'MenuTypeTarget', class: 'string' }, default: { value: 'activator slot', class: 'string' } },
  { property: 'closeOnContentClick', description: 'Closes the menu when its content surface receives a click.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'disableMenu', description: 'Prevents click and keyboard activation while preserving ARIA state.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'fitContent / fullWidth', description: 'Uses intrinsic content width or exactly matches the activator width.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'width / maxWidth', description: 'Sets explicit menu width or constrains its maximum width.', type: { value: 'string | number', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'origin', description: 'Preferred vertical and horizontal placement relative to the activator.', type: { value: 'string', class: 'string' }, default: { value: '"bottom left"', class: 'string' } },
  { property: 'offsetX / offsetY', description: 'Moves the menu away from its resolved horizontal or vertical position.', type: { value: 'string | number', class: 'string' }, default: { value: '0', class: 'number' } },
  { property: 'checkOffset', description: 'Adjusts the resolved position to keep the menu within viewport margins.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'holdFocus', description: 'Keeps focus on the current element instead of moving it into the menu or back to the activator.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'transition', description: 'Names the Vue transition used when the content opens and closes.', type: { value: 'string', class: 'string' }, default: { value: '"fade"', class: 'string' } },
  { property: 'color / elevation', description: 'Sets content foreground color and framework surface elevation.', type: { value: 'string / Elevation', class: 'string' }, default: { value: 'undefined / "sm"', class: 'string' } },
  { property: 'ariaHaspopup / ariaControls', description: 'Overrides the generated activator relationship attributes.', type: { value: 'string', class: 'string' }, default: { value: '"menu" / generated id', class: 'string' } },
  { property: 'contentRole', description: 'Sets the teleported content role. Use presentation when a child owns semantics.', type: { value: 'string', class: 'string' }, default: { value: '"menu"', class: 'string' } },
]