import type { DocsComponentPageContent } from '../types'

export const radioComponentContent: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Radio',
    description: 'Radio group component documentation for Nuvex UI with interactive usage, row and column layouts, visual variants, mandatory selection, slots, validation, and props for ERadioGroup and ERadio.',
  },
  hero: {
    title: 'Radio',
    descriptionHtml:
      "The <code class='green--text mx-2 title'>e-radio-group</code> and <code class='green--text mx-2 title'>e-radio</code> components handle exclusive selection inside the shared field system, including validation, row or column layout, and centralized color, disabled, and readonly behavior.<br><br>Use this page to validate grouped choice flows before wiring release tracks, environments, or preference selections into production forms.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Usage',
      description:
        'Use this baseline playground to configure group behavior in context: row layout, color, outlined, disabled, readonly, tonal, and retain-color.',
    },
    {
      key: 'layout-and-direction',
      title: 'Layout and direction',
      description:
        'Compare row and column layouts to match density, label length, and available horizontal space.',
    },
    {
      key: 'visual-variants',
      title: 'Visual variants',
      description:
        'Compare default, outlined, tonal, retain-color, disabled, and readonly group states to keep exclusive selection clear in dense forms.',
    },
    {
      key: 'mandatory-selection',
      title: 'Mandatory selection',
      description:
        'Use mandatory when the group must always resolve to one valid option, even if the incoming model is empty.',
    },
    {
      key: 'slots',
      title: 'Named slots',
      descriptionHtml:
        "Use the <code class='ma-2 green--text'>label</code> slot on both <code class='ma-2 green--text'>e-radio-group</code> and <code class='ma-2 green--text'>e-radio</code> when the copy needs richer inline content.",
    },
    {
      key: 'validation',
      title: 'Validation',
      description:
        'Validate required choice flows with explicit submit-state feedback before continuing a critical configuration step.',
    },
    {
      key: 'props',
      title: 'Props',
      description: 'Use the API table as the source of truth for ERadioGroup and ERadio props, defaults, and inherited field behavior.',
    },
  ],
  labels: {
    controls: [
      { key: 'color', label: 'color' },
      { key: 'row', label: 'row' },
      { key: 'outlined', label: 'outlined' },
      { key: 'disabled', label: 'disabled' },
      { key: 'readonly', label: 'readonly' },
      { key: 'tonal', label: 'tonal' },
      { key: 'retainColor', label: 'retainColor' },
    ],
    radioText: {
      usageGroupLabel: 'Contact method',
      usageDetail: 'Choose the preferred channel for release updates.',
      usageOptions: {
        email: 'Email',
        phone: 'Phone',
        sms: 'SMS',
      },
      layoutLabels: {
        row: 'row',
        column: 'column',
      },
      layoutGroupLabels: {
        row: 'Row layout',
        column: 'Column layout',
      },
      layoutDetail: 'Use row for compact option sets and column for longer labels.',
      layoutOptions: {
        staging: 'Staging',
        production: 'Production',
        canary: 'Canary',
      },
      visualStateLabels: {
        default: 'Default',
        outlined: 'Outlined',
        tonal: 'Tonal',
        retainColor: 'Retain color',
        disabled: 'Disabled',
        readonly: 'Readonly',
      },
      stateOptions: {
        auto: 'Automatic',
        manual: 'Manual',
      },
      mandatoryGroupLabel: 'Membership tier',
      mandatoryDetail: 'Mandatory selects the first available option when no valid value exists.',
      mandatoryOptions: {
        free: 'Free',
        pro: 'Pro',
        enterprise: 'Enterprise',
      },
      resetMandatoryButton: 'Reset demo',
      currentModelValue: 'Current model value',
      slotGroupLead: 'Review the',
      slotGroupLinkLabel: 'release policy',
      slotOptionLabel: 'Stable (recommended)',
      slotDialogTitle: 'Release policy',
      slotDialogBody: 'Use the label slots when the group label or an individual radio needs richer inline content such as links, helper context, or stronger recommendations.',
      slotDialogClose: 'Close',
      validationGroupLabel: 'Release track',
      validationOptions: {
        stable: 'Stable',
        beta: 'Beta',
        nightly: 'Nightly',
      },
      validationButtonLabel: 'Save preferences',
      validationMessage: 'Select a release track before continuing.',
      validationIdleFeedback: 'Submit to validate the radio group rule.',
      validationSuccessFeedback: 'Form is valid. Ready to continue.',
    },
  },
}