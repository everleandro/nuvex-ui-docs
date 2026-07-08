import type { DocsComponentPageContent } from '../types'

export const switchComponentContent: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Switch',
    description: 'Switch component documentation for Nuvex UI with interactive usage, variants, custom values, async loading, label slot patterns, validation, and props.',
  },
  hero: {
    title: 'Switch',
    descriptionHtml:
      "The <code class='green--text mx-2 title'>e-switch</code> component captures boolean or mapped binary state with the shared field contract, including helper details, async loading feedback, validation, and accessible labeling.<br><br>Use this page to validate toggle behavior, side effects, and value mapping before wiring preference panels, release gates, or environment settings into production flows.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Usage',
      description:
        'Use this baseline playground to tune switch behavior in context: color, outlined, disabled, readonly, loading, and retain-color for stronger state continuity.',
    },
    {
      key: 'visual-variants',
      title: 'Visual variants',
      description:
        'Compare default, outlined, tonal, retain-color, loading, disabled, and readonly states to keep binary decisions clear in dense configuration panels.',
    },
    {
      key: 'custom-values',
      title: 'Custom values',
      description:
        'Map the switch state to domain values with true-value and false-value when the backing model is not strictly boolean.',
    },
    {
      key: 'loading-and-async',
      title: 'Loading and async flows',
      description:
        'Use loading to block interaction while persisting the new value and to make side effects explicit during async preference updates.',
    },
    {
      key: 'slots',
      title: 'Named slots',
      descriptionHtml:
        "Use the <code class='ma-2 green--text'>label</code> slot to render richer inline labels with links or policy context while preserving switch semantics.",
    },
    {
      key: 'validation',
      title: 'Validation',
      description:
        'Validate consent or environment requirements with explicit submit-state feedback before allowing a critical transition.',
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
      { key: 'loading', label: 'loading' },
      { key: 'retainColor', label: 'retainColor' },
    ],
    switchText: {
      usageLabel: 'Enable release gate',
      usageDetail: 'Controls whether the release can proceed automatically.',
      visualStateLabels: {
        default: 'Default',
        outlined: 'Outlined',
        tonal: 'Tonal',
        retainColor: 'Retain color',
        loading: 'Loading',
        disabled: 'Disabled',
        readonly: 'Readonly',
      },
      customValuesLabel: 'Publish changes',
      customValuesDetail: 'Maps switch state to deployment status values.',
      currentModelValue: 'Current model value',
      asyncLabel: 'Live analytics',
      asyncDetail: 'Persist the preference before enabling session tracking.',
      asyncButtonLabel: 'Reset demo',
      asyncIdleFeedback: 'Toggle the switch to simulate an async save.',
      asyncSavingFeedback: 'Saving preference...',
      asyncSuccessFeedback: 'Preference saved successfully.',
      slotLead: 'I reviewed the',
      slotLinkLabel: 'environment policy',
      dialogTitle: 'Environment policy',
      dialogBody: 'Use the label slot when the switch label needs richer inline content such as links, helper context, or policy summaries.',
      dialogClose: 'Close',
      validationLabel: 'Enable production notifications',
      validationButtonLabel: 'Continue',
      validationMessage: 'Enable this switch before continuing.',
      validationIdleFeedback: 'Submit to validate the switch rule.',
      validationSuccessFeedback: 'Form is valid. Ready to continue.',
    },
  },
}