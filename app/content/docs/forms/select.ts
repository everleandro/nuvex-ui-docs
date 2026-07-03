import type { DocsComponentPageContent } from '../types'

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
