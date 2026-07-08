import type { ApiPropReferenceRow } from '~/api-reference/schema'
import { buildEFieldInheritedApiReference } from '~/api-reference/forms/_shared/efield'

export const textareaApiReference: ApiPropReferenceRow[] = [
  {
    property: 'modelValue',
    description: 'Current textarea value. Supports controlled usage with v-model.',
    type: { value: 'string | number | null', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'name',
    description: 'Native textarea name attribute used in form submissions.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'placeholder',
    description: 'Placeholder shown when there is no value and label behavior allows it.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'rows',
    description: 'Initial visible row count for the textarea input area.',
    type: { value: 'string | number', class: 'string' },
    default: { value: '3', class: 'string' },
  },
  {
    property: 'prefix',
    description: 'Text rendered before the textarea input region.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'suffix',
    description: 'Text rendered after the textarea input region.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'autocomplete',
    description: 'Native autocomplete attribute for browser autofill behavior.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'inputReadonly',
    description: 'Applies readonly directly to the native textarea element.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'iconClear',
    description: 'Overrides icon used by the clear action button.',
    type: { value: 'string | IconPath | IconPath[]', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'limit',
    description: 'Maximum number of characters allowed in textarea input.',
    type: { value: 'string | number', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'counter',
    description: 'Displays character counter in details section.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'spellcheck',
    description: 'Enables browser spell checking for textarea content.',
    type: { value: 'boolean', class: 'boolean' },
    default: { value: 'false', class: 'boolean' },
  },
  {
    property: 'autocapitalize',
    description: 'Controls automatic capitalization behavior on supported devices.',
    type: { value: 'string', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'enterkeyhint',
    description: 'Hints the Enter key action label on virtual keyboards.',
    type: { value: 'TextInputEnterKeyHint', class: 'string' },
    default: { value: 'undefined', class: 'string' },
  },
  {
    property: 'modelModifiers',
    description: 'v-model modifiers map (trim, number, lazy) applied by input logic.',
    type: { value: 'TextInputModelModifiers', class: 'string' },
    default: { value: '{}', class: 'string' },
  },
  ...buildEFieldInheritedApiReference({
    labelBehaviorType: '"static" | "floating" | "inline"',
    labelBehaviorDescription: 'Label behavior strategy for static/floating/inline presentation.',
    rulesType: 'FieldRule<TextInputValue>[]',
  }),
]
