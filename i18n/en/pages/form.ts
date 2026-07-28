import type { DocsComponentPageContent } from '~/types/docs'

export const formComponentContent: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Form',
    description:
      'Form component documentation for Nuvex UI with inherited field behavior, table layouts, form column composition, validation lifecycle, exposed methods, and props.',
  },
  hero: {
    title: 'Form',
    descriptionHtml:
      "The <code class='docs-inline-code'>e-form</code> component centralizes the behavior of the fields inside it. It can propagate shared configuration such as <code class='docs-inline-code'>outlined</code>, <code class='docs-inline-code'>disabled</code>, <code class='docs-inline-code'>readonly</code>, <code class='docs-inline-code'>retainColor</code>, manage submit-time validation, expose validation methods, and switch into <code class='docs-inline-code'>table</code> layout mode when forms need stronger structure.<br><br>This page shows how Form takes control of its children from a single point to unify state, appearance, and validation, and how <code class='docs-inline-code'>e-form-column</code> extends that orchestration layer when the flow needs actions and additional structure.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Usage',
      descriptionHtml:
        "Use this playground to see how a single <code class='docs-inline-code'>Form</code> applies shared behavior across multiple fields at once. The preview shows the effect of <code class='docs-inline-code'>outlined</code>, <code class='docs-inline-code'>disabled</code>, <code class='docs-inline-code'>readonly</code>, and <code class='docs-inline-code'>retainColor</code> on the same input group, while the <code class='docs-inline-code'>color</code> selector updates the presentation of the whole set.",
    },
    {
      key: 'inherited-behavior',
      title: 'Inherited child behavior',
      descriptionHtml:
        "This preview shows how <code class='docs-inline-code'>Form</code> pushes shared configuration into compatible fields without repeating the same prop on every child. Here the parent applies <code class='docs-inline-code'>labelBehavior</code> with the <code class='docs-inline-code'>floating</code> value and <code class='docs-inline-code'>outlined</code> once to keep the same visual treatment across textfields, selects, and textareas inside the block.",
    },
    {
      key: 'table-layout',
      title: 'Table layout',
      descriptionHtml:
        "This preview shows <code class='docs-inline-code'>Form</code> in <code class='docs-inline-code'>table</code> mode to present an operational data block with a more rigid structure. The same matrix renders <code class='docs-inline-code'>ticketId</code>, <code class='docs-inline-code'>assignee</code>, <code class='docs-inline-code'>environment</code>, and <code class='docs-inline-code'>requiresApproval</code>, while the container is ready to tune visual details such as <code class='docs-inline-code'>tableLineColor</code>, <code class='docs-inline-code'>tableCellBackgroundColor</code>, <code class='docs-inline-code'>tableFieldColor</code>, and <code class='docs-inline-code'>tableLineOpacity</code>.",
    },
    {
      key: 'form-column',
      title: 'Form column and actions',
      descriptionHtml:
        "This preview shows how <code class='docs-inline-code'>e-form-column</code> reserves its own row inside <code class='docs-inline-code'>Form</code> to align actions without breaking the form grid. After the <code class='docs-inline-code'>Workflow name</code> and <code class='docs-inline-code'>Owner</code> fields, the column pushes the primary CTA to the far right while keeping the action inside the same visual flow as the rest of the block.",
    },
    {
      key: 'validation-lifecycle',
      title: 'Validation lifecycle',
      descriptionHtml:
        "This preview shows a validation flow governed by <code class='docs-inline-code'>Form</code> at submit time. The container enables <code class='docs-inline-code'>validate-on-submit</code> and <code class='docs-inline-code'>focus-first-invalid</code>, evaluates rules for <code class='docs-inline-code'>subject</code>, <code class='docs-inline-code'>message</code>, and <code class='docs-inline-code'>policyAccepted</code>, and updates the top feedback state depending on whether <code class='docs-inline-code'>submit</code> or <code class='docs-inline-code'>submit-invalid</code> fires.",
    },
    {
      key: 'exposed-methods',
      title: 'Exposed methods',
      descriptionHtml:
        "This preview shows how to control a <code class='docs-inline-code'>Form</code> instance from explicit actions outside the native submit path. The buttons trigger <code class='docs-inline-code'>validate()</code> to inspect whether the block is valid and <code class='docs-inline-code'>resetValidation()</code> to clear error messages, while the text above summarizes the last action result.",
    },
    {
      key: 'props',
      title: 'Props',
      description:
        'Use the API table as the source of truth for accepted props, defaults, emitted events, and behavior notes.',
    },
  ],
  labels: {
    controls: [
      { key: 'color', label: 'color' },
      { key: 'outlined', label: 'outlined' },
      { key: 'disabled', label: 'disabled' },
      { key: 'readonly', label: 'readonly' },
      { key: 'retainColor', label: 'retainColor' },
      { key: 'table', label: 'table' },
    ],
    formText: {
      usageCardTitle: 'Shared form behavior',
      usageCardSubtitle: 'One parent controls multiple child fields',
      nameLabel: 'Name',
      emailLabel: 'Email',
      roleLabel: 'Role',
      notesLabel: 'Notes',
      placeholderName: 'Jane Doe',
      placeholderEmail: 'name@company.com',
      roleItems: ['Admin', 'Editor', 'Viewer'],
    },
    tableText: {
      cardTitle: 'Structured approval form',
      cardSubtitle: 'Table layout for dense business inputs',
      assigneeLabel: 'Assignee',
      environmentLabel: 'Environment',
      ticketLabel: 'Ticket ID',
      approvalLabel: 'Requires approval',
      lineColorLabel: 'tableLineColor',
      cellColorLabel: 'tableCellBackgroundColor',
      opacityLabel: 'tableLineOpacity',
    },
    columnText: {
      cardTitle: 'Action layout with Form Column',
      cardSubtitle: 'Group fields and actions without breaking alignment',
      primaryAction: 'Save changes',
      secondaryAction: 'Reset',
      tertiaryAction: 'Validate only',
      helperTitle: 'Review before submit',
      helperBody:
        'Use Form Column when buttons, summaries, or supporting content should stay aligned with the form grid.',
    },
    validationText: {
      cardTitle: 'Submit-time validation flow',
      cardSubtitle: 'Coordinate validation from the parent form',
      subjectLabel: 'Subject',
      messageLabel: 'Message',
      policyLabel: 'I reviewed the release policy',
      submitLabel: 'Submit form',
      invalidFeedback: 'Validation blocked the submit. Review the highlighted fields.',
      validFeedback: 'Form is valid. Submit handlers can continue safely.',
      idleFeedback: 'Submit the form to test validation lifecycle events.',
      requiredMessage: 'This field is required.',
      policyMessage: 'You must confirm the policy before continuing.',
    },
    methodsText: {
      cardTitle: 'Programmatic form control',
      cardSubtitle: 'Drive validation and resets from explicit actions',
      validateAction: 'Validate',
      resetAction: 'Reset',
      resetValidationAction: 'Reset validation',
      stateIdle: 'Choose an action to inspect the form instance behavior.',
      stateValid: 'validate() resolved successfully.',
      stateInvalid: 'validate() found invalid fields.',
      stateReset: 'reset() cleared the model values.',
      stateResetValidation: 'resetValidation() cleared validation messages.',
    },
  },
}

export const formPages = {
  form: formComponentContent,
} as const

export default formPages