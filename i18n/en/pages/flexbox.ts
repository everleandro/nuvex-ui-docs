import type {
  DocsConceptPageContent,
  DocsFlexboxSectionKey,
} from "~/types/docs";

export const flexboxEditorialContent: DocsConceptPageContent<DocsFlexboxSectionKey> =
  {
    kind: "concept",
    seo: {
      title: "Flexbox",
      description:
        "Learn the public flexbox helpers exposed by Nuvex UI, inspect class combinations, and compose layout patterns that avoid grid-only row and col classes.",
    },
    hero: {
      title: "Flexbox",
      description:
        "Flexbox in Nuvex UI is exposed through utility classes for layout direction, wrapping, alignment, and sizing. Use this page to combine helpers confidently without relying on grid row and col classes.",
      actions: [
        {
          key: "open-spacing-helpers",
          label: "Open Spacing Helpers",
        },
        {
          key: "open-display-helpers",
          label: "Open Display Helpers",
        },
      ],
    },
    sections: {
      usage: {
        type: "card-grid",
        key: "usage",
        title: "Usage",
        description:
          "Preview how direction, wrapping, alignment, and gap helpers combine in a single flex container. Adjust controls and copy the resulting class set.",
        labels: {
          display: "Display mode",
          direction: "Direction",
          wrap: "Wrap",
          justify: "Justify",
          align: "Align items",
          gap: "Gap size",
          block: "Block flex",
          inline: "Inline flex",
          row: "Row",
          column: "Column",
          noWrap: "No wrap",
          wrapEnabled: "Wrap",
          start: "Start",
          center: "Center",
          end: "End",
          between: "Space between",
          around: "Space around",
          stretch: "Stretch",
          baseline: "Baseline",
          classList: "Generated classes",
          previewTitle: "Rendered helper preview",
          previewBody:
            "Use selectors to test combinations before copying markup into app views.",
        },
      },
      "class-syntax": {
        type: "card-grid",
        key: "class-syntax",
        title: "Class syntax",
        descriptionHtml:
          'Flexbox helpers are assembled from display, direction, alignment, and spacing classes. Start with <code class="docs-inline-code">d-flex</code> or <code class="docs-inline-code">d-inline-flex</code>, then compose only the modifiers your layout needs.',
        description:
          "Flexbox helpers are assembled from display, direction, alignment, and spacing classes. Start with a display helper and add only the modifiers your layout needs.",

        itemsHtml: {
          "Display base":
            'Use <code class="docs-inline-code">d-flex</code> for block-level containers and <code class="docs-inline-code">d-inline-flex</code> for inline flow contexts.',
          "Direction and wrap":
            'Use <code class="docs-inline-code">flex-row</code> or <code class="docs-inline-code">flex-column</code>, then opt into <code class="docs-inline-code">flex-wrap</code> only when items should move to new lines.',
          "Axis alignment":
            'Use <code class="docs-inline-code">justify-*</code> for main axis distribution and <code class="docs-inline-code">items-*</code> for cross-axis alignment.',
          "Spacing pair":
            'Use <code class="docs-inline-code">gap-{n}</code>, <code class="docs-inline-code">gap-x-{n}</code>, or <code class="docs-inline-code">gap-y-{n}</code> to space children without custom margin overrides.',
        },
      },
      "axis-behavior": {
        type: "card-grid",
        key: "axis-behavior",
        title: "Axis behavior",
        description:
          "Main and cross axis switch when direction changes. Keep this mapping in mind before combining justify and items helpers.",
        itemsHtml: {
          "Row direction":
            'With <code class="docs-inline-code">flex-row</code>, <code class="docs-inline-code">justify-*</code> controls horizontal flow and <code class="docs-inline-code">items-*</code> controls vertical alignment.',
          "Column direction":
            'With <code class="docs-inline-code">flex-column</code>, <code class="docs-inline-code">justify-*</code> controls vertical flow and <code class="docs-inline-code">items-*</code> controls horizontal alignment.',
        },
      },
      "direction-wrapping": {
        type: "card-grid",
        key: "direction-wrapping",
        title: "Direction and wrapping",
        description:
          "Direction defines flow order while wrapping defines whether children keep one line or flow into additional lines.",
        itemsHtml: {
          "Single line flow":
            "Use <code class='docs-inline-code'>flex-nowrap</code> for compact toolbars or action groups that must stay on one line.",
          "Adaptive flow":
            "Use <code class='docs-inline-code'>flex-wrap</code> for chips, filter groups, or repeated controls that need responsive wrapping.",
        },
      },
      alignment: {
        type: "card-grid",
        key: "alignment",
        title: "Alignment matrix",
        description:
          "Common combinations become easier to read when expressed as class pairs.",
        itemsHtml: {
          "Centered pair":
            '<code class="docs-inline-code">justify-center</code> + <code class="docs-inline-code">items-center</code> keeps content centered across both axes.',
          "Distributed row":
            '<code class="docs-inline-code">justify-between</code> + <code class="docs-inline-code">items-center</code> separates leading and trailing actions while keeping vertical alignment.',
          "Baseline text":
            '<code class="docs-inline-code">items-baseline</code> helps mixed text sizes align naturally in one line.',
        },
      },
      "item-sizing": {
        type: "card-grid",
        key: "item-sizing",
        title: "Item sizing helpers",
        description:
          "Use item-level helpers to control growth and shrink behavior without writing per-component CSS.",
        itemsHtml: {
          "Fill available space":
            'Use <code class="docs-inline-code">flex-1</code> when one child should absorb remaining free space.',
          "Preserve intrinsic width":
            'Use <code class="docs-inline-code">flex-none</code> for controls that should keep content-based sizing.',
          "Explicit grow and shrink":
            'Use <code class="docs-inline-code">flex-grow</code>, <code class="docs-inline-code">flex-grow-0</code>, <code class="docs-inline-code">flex-shrink</code>, and <code class="docs-inline-code">flex-shrink-0</code> for precise behavior.',
        },
      },
      "implementation-examples": {
        type: "card-grid",
        key: "implementation-examples",
        title: "Implementation examples",
        description:
          "These snippets apply flexbox helpers directly to neutral containers and action groups.",
        items: [
          {
            title: "Action strip",
            description:
              "Distribute action clusters with one flexible spacer item and consistent alignment.",
          },
          {
            title: "Wrapped control group",
            description:
              "Allow controls to wrap while preserving consistent spacing between rows and columns.",
          },
          {
            title: "Split workspace",
            description:
              "Combine fixed and fluid panels using flex-none and flex-1 in one horizontal layout.",
          },
        ],
      },
      "framework-notes": {
        type: "list",
        key: "framework-notes",
        title: "Framework notes",
        description:
          "These notes summarize helper behavior specific to Nuvex UI utility classes.",
        items: [
          "Flexbox in Nuvex UI is designed to compose layout with small, combinable classes.",
          "The recommended strategy is to solve layout with helpers first and use custom CSS only in exceptional cases.",
        ],
        itemsHtml: {
          "Use utility classes directly on semantic elements; row and col classes belong to grid components and are documented separately.":
            'Use utility classes directly on semantic elements; <code class="docs-inline-code">row</code> and <code class="docs-inline-code">col</code> classes belong to grid components and are documented separately.',
        },
      },
    },
  };

export const flexboxPages = {
  flexbox: flexboxEditorialContent,
} as const;

export default flexboxPages;
