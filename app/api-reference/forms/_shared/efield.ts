import type { ApiPropReferenceRow } from '~/api-reference/schema'

export type EFieldInheritedReferenceOptions = {
  labelBehaviorType: string
  labelBehaviorDescription: string
  rulesType: string
}

export const buildEFieldInheritedApiReference = (
  options: EFieldInheritedReferenceOptions,
): ApiPropReferenceRow[] => {
  return [
    {
      property: 'clearable',
      description: 'Shows clear action when a value exists.',
      type: { value: 'boolean', class: 'boolean' },
      default: { value: 'false', class: 'boolean' },
    },
    {
      property: 'color',
      description: 'Base theme color applied to field state and interactions.',
      type: { value: 'string', class: 'string' },
      default: { value: '"primary"', class: 'string' },
    },
    {
      property: 'outlined',
      description: 'Uses outlined visual variant for the field container.',
      type: { value: 'boolean', class: 'boolean' },
      default: { value: 'false', class: 'boolean' },
    },
    {
      property: 'disabled',
      description: 'Disables interaction and prevents value updates.',
      type: { value: 'boolean', class: 'boolean' },
      default: { value: 'false', class: 'boolean' },
    },
    {
      property: 'readonly',
      description: 'Prevents editing while preserving focus behavior.',
      type: { value: 'boolean', class: 'boolean' },
      default: { value: 'false', class: 'boolean' },
    },
    {
      property: 'dense',
      description: 'Applies denser vertical spacing inherited from Field.',
      type: { value: 'boolean', class: 'boolean' },
      default: { value: 'false', class: 'boolean' },
    },
    {
      property: 'retainColor',
      description: 'Keeps active color styling after focus/interaction.',
      type: { value: 'boolean', class: 'boolean' },
      default: { value: 'false', class: 'boolean' },
    },
    {
      property: 'label',
      description: 'Field label text.',
      type: { value: 'string | number', class: 'string' },
      default: { value: 'undefined', class: 'string' },
    },
    {
      property: 'labelMinWidth',
      description: 'Minimum width reserved for label region.',
      type: { value: 'string | number', class: 'string' },
      default: { value: 'undefined', class: 'string' },
    },
    {
      property: 'labelBehavior',
      description: options.labelBehaviorDescription,
      type: { value: options.labelBehaviorType, class: 'string' },
      default: { value: '"static"', class: 'string' },
    },
    {
      property: 'inputAlign',
      description: 'Horizontal text alignment inside input/selection area.',
      type: { value: 'left | right | center | start | end', class: 'string' },
      default: { value: '"start"', class: 'string' },
    },
    {
      property: 'prependIcon',
      description: 'Icon rendered in outer-left affix region.',
      type: { value: 'string | IconPath | IconPath[]', class: 'string' },
      default: { value: 'undefined', class: 'string' },
    },
    {
      property: 'prependInnerIcon',
      description: 'Icon rendered before content inside input frame.',
      type: { value: 'string | IconPath | IconPath[]', class: 'string' },
      default: { value: 'undefined', class: 'string' },
    },
    {
      property: 'appendInnerIcon',
      description: 'Icon rendered after content inside input frame.',
      type: { value: 'string | IconPath | IconPath[]', class: 'string' },
      default: { value: 'undefined', class: 'string' },
    },
    {
      property: 'appendIcon',
      description: 'Icon rendered in outer-right affix region.',
      type: { value: 'string | IconPath | IconPath[]', class: 'string' },
      default: { value: 'undefined', class: 'string' },
    },
    {
      property: 'detail',
      description: 'Helper text shown in details area when no errors are present.',
      type: { value: 'string', class: 'string' },
      default: { value: 'undefined', class: 'string' },
    },
    {
      property: 'detailsOnMessageOnly',
      description: 'Shows details area only when messages/errors exist.',
      type: { value: 'boolean', class: 'boolean' },
      default: { value: 'false', class: 'boolean' },
    },
    {
      property: 'rules',
      description: 'Validation rules evaluated against modelValue.',
      type: { value: options.rulesType, class: 'string' },
      default: { value: 'undefined', class: 'string' },
    },
    {
      property: 'detailErrors',
      description: 'Explicit error messages rendered in details area.',
      type: { value: 'string[]', class: 'string' },
      default: { value: 'undefined', class: 'string' },
    },
  ]
}
