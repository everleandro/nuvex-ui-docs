import type { DocsComponentPageContent } from '~/types/docs'

export const dialogComponentContent: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Dialog',
    description: 'Dialog component documentation for Nuvex UI with controlled state, dismissal, persistent flows, sizing, fullscreen layouts, focus management, and API reference.',
  },
  hero: {
    title: 'Dialog',
    descriptionHtml:
      "The <code class='docs-inline-code'>EDialog</code> component presents focused modal content above the application, coordinates its overlay and stacking order, locks background scroll, and manages keyboard focus. Compose its default slot with cards, forms, or task-specific content while <code class='docs-inline-code'>v-model</code> remains the source of truth for visibility.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Usage',
      descriptionHtml:
        "Open and close the dialog through <code class='docs-inline-code'>v-model</code>, then configure the common panel and focus props. The activator belongs to the calling view, so its click handler updates the same controlled state.",
    },
    {
      key: 'dismissal-and-persistence',
      title: 'Dismissal and persistence',
      descriptionHtml:
        "A standard dialog closes through an explicit action, <code class='docs-inline-code'>Escape</code>, or outside interaction. Enable <code class='docs-inline-code'>persistent</code> when the user must complete or deliberately cancel a decision; rejected dismissal plays feedback instead of changing the model.",
    },
    {
      key: 'visual-variants',
      title: 'Sizing and surface',
      descriptionHtml:
        "Constrain focused tasks with <code class='docs-inline-code'>maxWidth</code>, use <code class='docs-inline-code'>fluid</code> for the available width, and apply a framework <code class='docs-inline-code'>elevation</code> to the panel. Long content scrolls inside the dialog while the overlay keeps the document locked.",
    },
    {
      key: 'fullscreen',
      title: 'Fullscreen dialogs',
      descriptionHtml:
        "Use <code class='docs-inline-code'>fullscreen</code> for immersive or space-intensive tasks. It removes panel margins and radius, fills the viewport, and takes precedence over <code class='docs-inline-code'>maxWidth</code>.",
    },
    {
      key: 'composition-patterns',
      title: 'Composition patterns',
      descriptionHtml:
        "The default slot accepts any task-specific structure. Keep the title, supporting content, and actions in a clear order; forms should expose a primary submission action and a distinct way to cancel or close.",
    },
    {
      key: 'accessibility',
      title: 'Focus and accessibility',
      descriptionHtml:
        "The container exposes dialog semantics, traps <code class='docs-inline-code'>Tab</code> within the active panel, focuses the dialog on open, and restores the previous focus on close. Provide a visible title and an explicit exit, especially when <code class='docs-inline-code'>persistent</code> is enabled.",
    },
    {
      key: 'props',
      title: 'API reference',
      description: 'Reference the verified public props for EDialog. Its event, default slot, and exposed close method are summarized after the table.',
    },
  ],
  labels: {
    controls: [
      { key: 'maxWidth', label: 'max width' },
      { key: 'elevation', label: 'elevation' },
      { key: 'persistent', label: 'persistent' },
      { key: 'fluid', label: 'fluid' },
      { key: 'autoFocus', label: 'auto focus' },
      { key: 'restoreFocus', label: 'restore focus' },
    ],
    dialogText: {
      openDialog: 'Open dialog',
      close: 'Close',
      cancel: 'Cancel',
      continue: 'Continue',
      save: 'Save changes',
      basicTitle: 'Workspace update',
      basicBody: 'Review the dialog settings and close it when the task is complete.',
      standardDialog: 'Standard dialog',
      persistentDialog: 'Persistent dialog',
      dismissalTitle: 'Confirm publication',
      dismissalBody: 'A persistent decision remains open until you choose one of its explicit actions.',
      compactDialog: 'Compact dialog',
      fluidDialog: 'Fluid dialog',
      sizingTitle: 'Surface preview',
      sizingBody: 'Panel width and elevation adapt to the task without changing the modal behavior.',
      openFullscreen: 'Open fullscreen dialog',
      fullscreenTitle: 'Edit release notes',
      fullscreenBody: 'Fullscreen mode provides the entire viewport for longer, structured work.',
      formTitle: 'Invite collaborator',
      formBody: 'Collect focused input and keep the primary action close to the fields it submits.',
      nameLabel: 'Name',
      emailLabel: 'Email',
      openForm: 'Open form dialog',
      openAccessible: 'Open accessible dialog',
      accessibilityTitle: 'Keyboard review',
      accessibilityBody: 'Use Tab and Shift+Tab to move between actions. Escape closes this non-persistent dialog.',
      focusHint: 'After closing, focus returns to the button that opened the dialog.',
      apiDialog: 'EDialog props',
      apiDetailsTitle: 'Event, slot, and exposed method',
      apiDetailsBody: 'EDialog emits update:modelValue, renders content through its default slot, and exposes close(force?). Calling close() respects persistent; close(true) forces dismissal.',
    },
  },
}

export const modalPages = {
  dialog: dialogComponentContent,
} as const

export default modalPages