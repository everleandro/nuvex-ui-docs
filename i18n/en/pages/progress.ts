import type { DocsComponentPageContent } from '~/types/docs'

export const progressComponentContent: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Progress',
    description: 'Progress component documentation for Nuvex UI with determinate and indeterminate modes, value handling, visual customization, composition patterns, accessibility, and API reference.',
  },
  hero: {
    title: 'Progress',
    descriptionHtml:
      "The <code class='docs-inline-code'>EProgressLinear</code> component communicates the status of loading, synchronization, and processing tasks in a compact linear track. Use determinate progress when the application knows the completed amount, and indeterminate progress when it can only confirm that work is active.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Usage',
      descriptionHtml:
        "Configure the common progress props and inspect the generated markup. <code class='docs-inline-code'>value</code> controls the filled track in determinate mode, while <code class='docs-inline-code'>indeterminate</code> replaces it with continuous motion.",
    },
    {
      key: 'progress-modes',
      title: 'Progress modes',
      descriptionHtml:
        "Choose the mode from the information your task can report. Determinate progress represents a measurable value from 0 to 100; indeterminate progress communicates activity without suggesting an unavailable completion estimate.",
    },
    {
      key: 'visual-variants',
      title: 'Color and thickness',
      descriptionHtml:
        "Use <code class='docs-inline-code'>color</code> to align the bar with its context and <code class='docs-inline-code'>height</code> to fit compact controls or prominent task surfaces. <code class='docs-inline-code'>useContrastColor</code> resolves the contrast token associated with the selected color.",
    },
    {
      key: 'value-behavior',
      title: 'Values and lifecycle',
      descriptionHtml:
        "Update <code class='docs-inline-code'>value</code> from real task state. The component normalizes invalid numeric input to 0 and clamps finite values to the 0–100 range, but the data source should still provide meaningful progress.",
    },
    {
      key: 'composition-patterns',
      title: 'Composition patterns',
      descriptionHtml:
        "Pair the bar with a task label and a visible status so users know what is running and what completion means. A report export is determinate when processed items are measurable and indeterminate while the server prepares work without totals.",
    },
    {
      key: 'accessibility',
      title: 'Accessibility',
      descriptionHtml:
        "The component renders <code class='docs-inline-code'>role=\"progressbar\"</code> with a range from 0 to 100. Determinate mode exposes <code class='docs-inline-code'>aria-valuenow</code>; indeterminate mode omits it. Give the bar an accessible name and mark the related region busy while work is active.",
    },
    {
      key: 'guidelines',
      title: 'Usage guidelines',
      description: 'Keep progress honest, contextual, and readable across task states.',
    },
    {
      key: 'props',
      title: 'API reference',
      description: 'Reference the verified public props for EProgressLinear. The component does not emit public events or expose public slots.',
    },
  ],
  labels: {
    controls: [
      { key: 'value', label: 'value' },
      { key: 'color', label: 'color' },
      { key: 'height', label: 'height' },
      { key: 'indeterminate', label: 'indeterminate' },
      { key: 'useContrastColor', label: 'use contrast color' },
    ],
    progressText: {
      determinate: 'Determinate',
      indeterminate: 'Indeterminate',
      knownProgress: '72% of files processed',
      unknownProgress: 'Preparing workspace data',
      valueLabel: 'Current progress',
      reset: 'Reset',
      advance: 'Advance',
      complete: 'Complete',
      reportTitle: 'Quarterly report export',
      reportIdle: 'Ready to start the report export',
      reportPreparing: 'Preparing export',
      reportProcessing: 'Processing report pages',
      reportComplete: 'Export ready',
      reportAction: 'Start export',
      accessibleLabel: 'Report export progress',
      accessibilityHint: 'The surrounding region reports its busy state while the export is active.',
      doTitle: 'Do',
      dontTitle: "Don't",
      doItems: [
        'Use determinate mode when progress comes from measurable work.',
        'Place a visible task label or status near important progress.',
        'Use color and thickness that remain readable on the current surface.',
      ],
      dontItems: [
        'Invent percentages for operations that cannot report completion.',
        'Leave indeterminate progress running after the task has finished.',
        'Rely on animation or color alone to communicate task status.',
      ],
      apiTitle: 'EProgressLinear props',
      apiDetailsTitle: 'Events and slots',
      apiDetailsBody: 'EProgressLinear does not emit public events and does not expose public slots.',
    },
  },
}

export const progressPages = {
  progress: progressComponentContent,
} as const

export default progressPages