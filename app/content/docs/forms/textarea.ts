import type { DocsComponentPageContent } from '../types'

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
