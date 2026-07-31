import type { ApiPropReferenceRow } from '~/api-reference/schema'

export const datePickerApiReference: ApiPropReferenceRow[] = [
  {
    property: 'modelValue',
    description: 'Current selected date value. Accepts Date or a date-like string that can be normalized by the component.',
    type: { value: 'Date | string', class: 'string' },
    default: { value: 'undefined', class: 'undefined' },
  },
  {
    property: 'view',
    description: 'Controls the active navigation depth. Pair with update:view for a fully controlled picker.',
    type: { value: 'datePickerViewType', class: 'string' },
    default: { value: 'undefined', class: 'undefined' },
  },
  {
    property: 'disabled / highlighted',
    description: 'Date configuration objects used to block selection and emphasize important dates or ranges.',
    type: { value: 'DatesConfiguration', class: 'object' },
    default: { value: 'undefined / undefined', class: 'undefined' },
  },
  {
    property: 'weekStart',
    description: 'Sets the first visible day of the week, where 0 is Sunday and 1 is Monday.',
    type: { value: 'number', class: 'string' },
    default: { value: '1', class: 'string' },
  },
  {
    property: 'format',
    description: 'Custom header format token string used for the main title date output.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'undefined' },
  },
  {
    property: 'lng',
    description: 'Overrides the locale used to resolve month and weekday names for this picker instance.',
    type: { value: 'suportedLng', class: 'string' },
    default: { value: 'global locale', class: 'string' },
  },
  {
    property: 'landscape',
    description: 'Switches the picker to its horizontal landscape layout.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'noTitle',
    description: 'Hides the upper title block that displays the selected year and formatted date.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'onlyMonth / onlyYear',
    description: 'Restricts navigation to month-only or year-only selection flows.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false / false', class: 'boolean' },
  },
  {
    property: 'closeOnChange',
    description: 'Closes the surrounding dialog or menu container immediately after a valid selection.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'iconPrev / iconNext',
    description: 'Replaces the previous and next navigation icons in the header.',
    type: { value: 'string | IconPath | IconPath[]', class: 'string' },
    default: { value: 'undefined', class: 'undefined' },
  },
  {
    property: 'color',
    description: 'Base semantic color applied to selected and highlighted picker states.',
    type: { value: 'string', class: 'string' },
    default: { value: '"primary"', class: 'string' },
  },
  {
    property: 'elevation / gridButtonElevation',
    description: 'Applies elevation to the picker surface and selected grid buttons.',
    type: { value: 'ElevationLevel', class: 'string' },
    default: { value: 'undefined / undefined', class: 'undefined' },
  },
]