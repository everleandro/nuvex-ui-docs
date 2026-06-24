import type { DocsComponentPageContent } from '../types'

export const textFieldComponentContent: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'TextField',
    description: 'TextField component documentation for Nuvex UI, including playground, input types, states, and props.',
  },
  hero: {
    title: 'TextField',
    descriptionHtml:
      "The <code class='green--text mx-2 title'>e-text-field</code> component is the base text input for forms, supporting validation, states, icons, and formatting helpers.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Usage',
      description: 'Start with the default text field and configure behavior using state and visual props.',
    },
    {
      key: 'input-types',
      title: 'Input types',
      descriptionHtml: "Use native input types like <code class='green--text'>text</code>, <code class='green--text'>email</code>, and <code class='green--text'>password</code> based on content intent.",
    },
    {
      key: 'prefix-suffix-counter',
      title: 'Prefix, suffix, and counter',
      description: 'Add contextual prefixes/suffixes and character limits for structured text input.',
    },
    {
      key: 'inner-icons',
      title: 'Inner icons',
      description: 'Use prepend/append inner icons for search, identity, or hint affordances inside the field frame.',
    },
    {
      key: 'states',
      title: 'States and validation',
      description: 'Document disabled, readonly, and validation feedback states with clear visual and semantic cues.',
    },
    {
      key: 'accessibility',
      title: 'Accessibility',
      description: 'Always pair inputs with clear labels, provide helpful placeholder text only as supporting hint, and preserve visible focus states for keyboard navigation.',
    },
    {
      key: 'integration',
      title: 'Integration patterns',
      description: 'Combine text fields with form validation and async submit flows while preserving consistent UX feedback.',
    },
    {
      key: 'do-dont',
      title: "Do and don't",
      description: 'Prefer clear labels, concise helper text, and explicit constraints. Avoid placeholders as primary labels or hidden validation rules.',
    },
    {
      key: 'composition-patterns',
      title: 'Composition patterns',
      description: 'Use text fields in grouped layouts such as search bars, filter rows, and profile forms with aligned actions.',
    },
    {
      key: 'faq',
      title: 'FAQ and troubleshooting',
      description: 'Address common issues around validation timing, readonly versus disabled, and counter/limit behavior.',
      faqItems: [
        {
          question: 'When should I use readonly instead of disabled?',
          answerHtml:
            "Use <code class='ma-2 green--text'>readonly</code> when users should still be able to focus and copy the value, and <code class='ma-2 green--text'>disabled</code> when the field must be fully inactive.",
        },
        {
          question: 'How can I show validation only after submit?',
          answerHtml:
            "Gate <code class='ma-2 green--text'>error-messages</code> behind a submitted state flag so validation appears after first submit attempt.",
        },
        {
          question: 'How should counter and limit be configured?',
          answerHtml:
            "Use <code class='ma-2 green--text'>counter</code> with <code class='ma-2 green--text'>:limit</code> to expose constraints early and prevent overflow surprises.",
        },
      ],
    },
    {
      key: 'props',
      title: 'Props',
      description: 'Explore the available props for the TextField component.',
    },
  ],
  labels: {
    tabs: {
      design: 'Design',
      template: 'Template',
      example: 'Playground',
      ts: 'TS',
    },
    controls: [
      { key: 'color', label: 'color' },
      { key: 'outlined', label: 'outlined' },
      { key: 'disabled', label: 'disabled' },
      { key: 'readonly', label: 'readonly' },
      { key: 'clearable', label: 'clearable' },
      { key: 'counter', label: 'counter' },
      { key: 'required', label: 'required' },
    ],
  },
}
