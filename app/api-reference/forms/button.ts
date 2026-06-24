import type { ApiPropReferenceRow } from '~/api-reference/schema'

export const buttonApiReference: ApiPropReferenceRow[] = [
  {
    property: 'color',
    description: 'Applies theme color to the button background and state layers.',
    type: { value: 'string', class: 'string' },
    default: { value: 'primary', class: 'string' },
  },
  {
    property: 'disabled',
    description: 'Disables interactions and applies disabled styles.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'loading',
    description: 'Shows the loading indicator and blocks click interactions.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'outlined',
    description: 'Uses outlined visual style instead of filled background.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'text',
    description: 'Uses text style with transparent background.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'depressed',
    description: 'Removes default elevation to create a flat button.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'rounded',
    description: 'Applies rounded pill corners to the button.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'block',
    description: 'Expands button width to fill the available horizontal space.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'icon',
    description: 'Renders the button as icon-only when an icon path/object is passed.',
    type: { value: 'IconPath | string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'prependIcon / appendIcon',
    description: 'Adds an icon before or after the default slot content.',
    type: { value: 'IconPath | string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'width / height',
    description: 'Controls button dimensions using number (px) or CSS size string.',
    type: { value: 'number | string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
]
