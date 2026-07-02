import type { DocsComponentPageContent } from '../types'

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
