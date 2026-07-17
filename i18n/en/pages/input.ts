import type { DocsComponentPageContent } from '~/types/docs'

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

export const selectComponentContent: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Select',
    description: 'Select component documentation for Nuvex UI with playground, item mapping, chips, search, async loading, and props.',
  },
  hero: {
    title: 'Select',
    descriptionHtml:
      "The <code class='green--text mx-2 title'>e-select</code> component handles single and multiple selection with support for primitive or object items, optional autocomplete, chips, loading state, and customizable rendering via slots.<br><br>Use this page to compare setup patterns fast, validate object/value mapping behavior, and build production-ready form flows with clear feedback.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Usage',
      description:
        'Use this baseline playground to configure Select in context: color, outlined, clearable, readonly, disabled, multiple, chips, and autocomplete from one control panel.',
    },
    {
      key: 'item-mapping',
      title: 'Item mapping',
      description:
        'Map object collections using item-text and item-value, then compare return-object on/off to choose the right model contract for forms and APIs.',
    },
    {
      key: 'visual-variants',
      title: 'Visual variants',
      description:
        'Compare default and outlined variants across interactive, readonly, and disabled states to define hierarchy and readability in real form layouts.',
    },
    {
      key: 'multiple-and-chips',
      title: 'Multiple and chips',
      description:
        'Use multiple selection for tag-like inputs and chip mode when selected values should stay visible and removable at a glance.',
    },
    {
      key: 'autocomplete-and-search',
      title: 'Autocomplete and search',
      description:
        'Drive search with update:search and filtered items to support long option lists without sacrificing keyboard flow.',
    },
    {
      key: 'slots',
      title: 'Named slots',
      descriptionHtml:
        "Customize the list and selected value with <code class='ma-2 green--text'>item</code> and <code class='ma-2 green--text'>selection</code> slots for richer metadata and contextual rendering.",
    },
    {
      key: 'async-loading',
      title: 'Async loading',
      description:
        'Use loading with remote item hydration to keep form feedback explicit while data is being fetched.',
    },
    {
      key: 'validation',
      title: 'Validation',
      description:
        'Validate select-driven forms with rule-based feedback and submit-state control to keep actions predictable.',
    },
    {
      key: 'props',
      title: 'Props',
      description: 'Use the API table as the source of truth for supported props, accepted types, defaults, and behavior notes.',
    },
  ],
  labels: {
    controls: [
      { key: 'color', label: 'color' },
      { key: 'outlined', label: 'outlined' },
      { key: 'disabled', label: 'disabled' },
      { key: 'readonly', label: 'readonly' },
      { key: 'clearable', label: 'clearable' },
      { key: 'multiple', label: 'multiple' },
      { key: 'chip', label: 'chip' },
      { key: 'autocomplete', label: 'autocomplete' },
      { key: 'returnObject', label: 'returnObject' },
    ],
    integrationText: {
      form: {
        submit: 'Create ticket',
        idle: 'Complete required fields to continue',
        submitting: 'Creating ticket...',
        success: 'Ticket created successfully',
        canceled: 'Form reset',
        cardTitle: 'Support ticket',
        cardSubtitle: 'Route issue and set priority',
      },
    },
  },
}

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

export const textFieldComponentContent: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Textfield',
    description: 'Textfield component documentation for Nuvex UI, including playground, variants, and props.',
  },
  hero: {
    title: 'Textfield',
    descriptionHtml:
      "The <code class='green--text mx-2 title'>e-text-field</code> component is the base text input for forms and structured data capture across Nuvex UI. It supports visual variants, inner icons, prefix/suffix content, label behavior, and key states such as <code class='green--text mx-1 title'>readonly</code>, <code class='green--text mx-1 title'>disabled</code>, and <code class='green--text mx-1 title'>clearable</code>.<br><br>Use this page to compare interaction patterns quickly, compose richer inputs with named slots, and apply validation rules that keep forms clear, actionable, and production-ready.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Usage',
      description: 'Use this baseline playground to configure a Text Field in context: adjust color, outlined, clearable, counter/limit, readonly, disabled, and retain-color from one control panel.',
    },
    {
      key: 'icons',
      title: 'Icons',
      descriptionHtml: "Compare <code class='ma-2 green--text'>prependIcon</code> and <code class='ma-2 green--text'>appendIcon</code> with <code class='ma-2 green--text'>prependInnerIcon</code> and <code class='ma-2 green--text'>appendInnerIcon</code> in filled and outlined fields to choose the right visual weight for context, actions, and scanning.",
    },
    {
      key: 'visual-variants',
      title: 'Visual variants',
      description: 'Compare filled and outlined fields across interactive, readonly, and disabled states, then evaluate retain-color and floating-label behavior to define hierarchy and readability in real forms.',
    },
    {
      key: 'slots',
      title: 'Named slots',
      descriptionHtml: "Compose task-focused inputs with <code class='ma-2 green--text'>prepend</code>, <code class='ma-2 green--text'>prepend-inner</code>, <code class='ma-2 green--text'>append-inner</code>, and <code class='ma-2 green--text'>append</code> to place identity cues, quick actions, and secondary controls without losing field clarity.",
    },
    {
      key: 'prepend-append-icons',
      title: 'Prefix and suffix',
      descriptionHtml: "Use <code class='ma-2 green--text'>prefix</code> and <code class='ma-2 green--text'>suffix</code> to anchor fixed tokens like currency symbols, IDs, and units, so users read expected format at a glance and enter values with fewer errors.",
    },
    {
      key: 'validation',
      title: 'Validation',
      descriptionHtml: "Build end-to-end validation flows with rule-based feedback, error visibility, and submit-state control. This example uses a full registration card to show how field rules and action readiness work together in production forms.",
    },
    {
      key: 'props',
      title: 'Props',
      description: 'Use the API table as the source of truth for props, accepted types, defaults, and behavioral notes when implementing Text Field variants in production.',
    },
  ],
  labels: {
    controls: [
      { key: 'color', label: 'color' },
      { key: 'outlined', label: 'outlined' },
      { key: 'disabled', label: 'disabled' },
      { key: 'readonly', label: 'readonly' },
      { key: 'clearable', label: 'clearable' },
      { key: 'counter', label: 'counter' },
      { key: 'required', label: 'required' },
    ],
    integrationText: {
      form: {
        submit: 'Complete registration',
        idle: 'Complete all required fields to continue',
        submitting: 'Submitting registration...',
        success: 'Registration completed successfully',
        canceled: 'Registration form reset',
        firstNameLabel: 'First name',
        firstNamePlaceholder: 'Jane',
        lastNameLabel: 'Last name',
        lastNamePlaceholder: 'Doe',
        emailLabel: 'Email',
        emailPlaceholder: 'name@company.com',
        passwordLabel: 'Password',
        passwordPlaceholder: 'At least 6 characters',
        cardTitle: 'Registration Form',
        cardSubtitle: 'Basic details',
      },
    },
  },
}

export const textareaComponentContent: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Textarea',
    description: 'Textarea component documentation for Nuvex UI with usage patterns, rows and length handling, validation, and props.',
  },
  hero: {
    title: 'Textarea',
    descriptionHtml:
      "The <code class='green--text mx-2 title'>e-textarea</code> component is built for multi-line input with the same field system used by other form controls. It supports visual variants, prefix/suffix tokens, icons, validation, and helper messaging.<br><br>Use this page to choose the right structure for comments, descriptions, and long-form input while preserving clarity, consistency, and predictable submission behavior.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Usage',
      description:
        'Use this baseline playground to configure Textarea in context: color, outlined, clearable, readonly, disabled, retain-color, rows, and counter/limit from a single control panel.',
    },
    {
      key: 'visual-variants',
      title: 'Visual variants',
      description:
        'Compare filled and outlined variants across interactive, readonly, and disabled states to define hierarchy and readability in dense form layouts.',
    },
    {
      key: 'rows-and-length',
      title: 'Rows and length',
      descriptionHtml:
        "Control vertical footprint with <code class='ma-2 green--text'>rows</code> and add guardrails with <code class='ma-2 green--text'>limit</code> + <code class='ma-2 green--text'>counter</code> for long-form input quality.",
    },
    {
      key: 'icons-and-affixes',
      title: 'Icons and affixes',
      descriptionHtml:
        "Use icon and affix props such as <code class='ma-2 green--text'>prependIcon</code>, <code class='ma-2 green--text'>appendInnerIcon</code>, <code class='ma-2 green--text'>prefix</code>, and <code class='ma-2 green--text'>suffix</code> to reinforce intent and scanning without adding extra fields.",
    },
    {
      key: 'slots-composition',
      title: 'Named slots',
      descriptionHtml:
        "Compose richer multiline fields with slots like <code class='ma-2 green--text'>prepend</code> and <code class='ma-2 green--text'>append-inner</code> to add context and quick actions in place.",
    },
    {
      key: 'validation',
      title: 'Validation',
      description:
        'Apply rule-based validation and submit-state gating so long-form input stays actionable and errors remain visible before submission.',
    },
    {
      key: 'props',
      title: 'Props',
      description:
        'Use the API table as source of truth for supported props, accepted types, defaults, and inherited field behavior.',
    },
  ],
  labels: {
    controls: [
      { key: 'color', label: 'color' },
      { key: 'outlined', label: 'outlined' },
      { key: 'disabled', label: 'disabled' },
      { key: 'readonly', label: 'readonly' },
      { key: 'clearable', label: 'clearable' },
      { key: 'counter', label: 'counter' },
      { key: 'retainColor', label: 'retainColor' },
      { key: 'rows', label: 'rows' },
    ],
    formText: {
      form: {
        submit: 'Send feedback',
        idle: 'Complete required fields to continue',
        submitting: 'Sending feedback...',
        success: 'Feedback submitted successfully',
        canceled: 'Feedback form reset',
        cardTitle: 'Feedback form',
        cardSubtitle: 'Capture details with actionable context',
      },
    },
  },
}

export const inputPages = {
  checkbox: checkboxComponentContent,
  radio: radioComponentContent,
  select: selectComponentContent,
  switch: switchComponentContent,
  textField: textFieldComponentContent,
  textarea: textareaComponentContent,
} as const

export default inputPages