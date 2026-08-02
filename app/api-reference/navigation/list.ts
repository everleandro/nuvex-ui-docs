import type { ApiPropReferenceRow } from '~/api-reference/schema'

export const listApiReference: ApiPropReferenceRow[] = [
  { property: 'modelValue', description: 'Selected item value. An array enables multiple selection.', type: { value: 'ListModelProp', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'group', description: 'Controlled state for open groups. Without it, the list manages group state internally.', type: { value: 'ListModelProp', class: 'string' }, default: { value: 'internal state', class: 'string' } },
  { property: 'disabled', description: 'Disables interaction for the list and all descendant items and groups.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'outlined / inset / dense', description: 'Controls border, inner spacing, item radius, and compact density.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'size', description: 'Default size inherited by descendant items unless overridden locally.', type: { value: 'Size', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'color / activeColor', description: 'Sets the base text color and the active item color.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'elevation', description: 'Applies a framework elevation class to the list surface.', type: { value: 'Elevation', class: 'string' }, default: { value: 'undefined', class: 'string' } },
]

export const listItemApiReference: ApiPropReferenceRow[] = [
  { property: 'value', description: 'Identity used by the parent list selection model.', type: { value: 'string | number', class: 'string' }, default: { value: 'route or generated id', class: 'string' } },
  { property: 'title / subtitle', description: 'Primary and supporting text with automatic accessible relationships.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'prependIcon / appendIcon', description: 'Renders an icon in the leading or trailing item region.', type: { value: 'string | IconPath | IconPath[]', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'prependAvatar / appendAvatar', description: 'Renders an image avatar in the leading or trailing item region.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
  { property: 'isActive / activeClass', description: 'Overrides model-derived active state and customizes its class.', type: { value: 'boolean / string', class: 'string' }, default: { value: 'undefined / "e-list-item--active"', class: 'string' } },
  { property: 'disabled', description: 'Removes the item from interaction and managed keyboard focus.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'ripple', description: 'Compatibility prop for the interactive item ripple contract.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'undefined', class: 'string' } },
  { property: 'tag', description: 'Overrides the root element. Passing to renders a router-link by default.', type: { value: 'string', class: 'string' }, default: { value: '"li"', class: 'string' } },
  { property: 'size', description: 'Overrides the size inherited from EList.', type: { value: 'Size', class: 'string' }, default: { value: '"default"', class: 'string' } },
  { property: 'color / activeColor', description: 'Overrides inherited base or active colors for this item.', type: { value: 'string', class: 'string' }, default: { value: 'undefined', class: 'string' } },
]

export const listGroupApiReference: ApiPropReferenceRow[] = [
  { property: 'value', description: 'Stable group identity used to build its hierarchical path.', type: { value: 'string | number', class: 'string' }, default: { value: 'generated id', class: 'string' } },
  { property: 'disabled', description: 'Disables the group activator and inherits disabled state from EList.', type: { value: 'boolean', class: 'boolean' }, default: { value: 'false', class: 'boolean' } },
  { property: 'elevation', description: 'Applies a framework elevation class to the group container.', type: { value: 'Elevation', class: 'string' }, default: { value: 'undefined', class: 'string' } },
]