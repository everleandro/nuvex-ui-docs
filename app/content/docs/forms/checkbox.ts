import type { DocsComponentPageContent } from '../types'

export const checkboxComponentContent: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Checkbox',
    description: 'Checkbox component documentation for Nuvex UI with interactive usage, variants, retain-color, custom values, label slot patterns, validation, and props.',
  },
  hero: {
    title: 'Checkbox',
    descriptionHtml:
      "The <code class='green--text mx-2 title'>e-checkbox</code> component captures boolean or mapped on/off values with a field-consistent contract, including validation, helper details, and disabled/readonly states.<br><br>Use this page to validate interaction patterns, model mapping, and accessibility-friendly labeling before integrating checkbox flows into production forms.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Usage',
      description:
        'Use this baseline playground to configure checkbox behavior in context: color, outlined, disabled, readonly, tonal, and retain-color for stronger state continuity.',
    },
    {
      key: 'visual-variants',
      title: 'Visual variants',
      description:
        'Compare default, outlined, tonal, retain-color, active, disabled, and readonly states to keep semantic intent clear in dense forms.',
    },
    {
      key: 'custom-values',
      title: 'Custom values',
      description:
        'Map checkbox state to domain values with true-value and false-value when your form contract is not strictly boolean.',
    },
    {
      key: 'slots',
      title: 'Named slots',
      descriptionHtml:
        "Use the <code class='ma-2 green--text'>label</code> slot to render richer labels with links or helper context while keeping native checkbox semantics.",
    },
    {
      key: 'validation',
      title: 'Validation',
      description:
        'Validate consent-style flows with required rules and explicit submit-state feedback before continuing critical actions.',
    },
    {
      key: 'props',
      title: 'Props',
      description: 'Use the API table as the source of truth for accepted types, defaults, and inherited field behavior.',
    },
  ],
  labels: {
    controls: [
      { key: 'color', label: 'color' },
      { key: 'outlined', label: 'outlined' },
      { key: 'disabled', label: 'disabled' },
      { key: 'readonly', label: 'readonly' },
      { key: 'tonal', label: 'tonal' },
      { key: 'retainColor', label: 'retainColor' },
      { key: 'customValues', label: 'custom values' },
    ],
    checkboxText: {
      usageLabel: 'Enable deployment checks',
      usageDetail: 'Required for deployment checklist',
      visualStateLabels: {
        default: 'Default',
        outlined: 'Outlined',
        tonal: 'Tonal',
        retainColor: 'Retain color',
        active: 'Active',
        disabled: 'Disabled',
        readonly: 'Readonly',
      },
      customValuesLabel: 'Release checklist',
      customValuesDetail: 'Toggle to mark deployment readiness',
      currentModelValue: 'Current model value',
      termsDialogTitle: 'Terms and Conditions',
      termsDialogBody: 'Use this dialog to explain the scope of consent, expected usage, and any additional conditions before continuing.',
      termsDialogClose: 'Close',
      validationCheckboxLabel: 'I accept the terms of service',
      validationMessage: 'You must accept the terms before continuing.',
      validationButtonLabel: 'Create account',
      validationIdleFeedback: 'Submit to validate the checkbox rule.',
      validationSuccessFeedback: 'Form is valid. Ready to continue.',
      slotsLead: 'I agree to the',
      slotsLinkLabel: 'Terms and Conditions',
    },
  },
}
