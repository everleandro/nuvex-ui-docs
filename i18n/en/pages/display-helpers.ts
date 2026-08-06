import type {
  DocsConceptPageContent,
  DocsDisplayHelpersSectionKey,
} from "~/types/docs";

export const displayHelpersEditorialContent: DocsConceptPageContent<DocsDisplayHelpersSectionKey> =
  {
    kind: "concept",
    seo: {
      title: "Display Helpers",
      description:
        "Inspect Nuvex UI display utilities, compose responsive visibility rules, and copy breakpoint-driven class patterns without custom media queries.",
    },
    hero: {
      title: "Display Helpers",
      description:
        "Display helpers control how elements participate in layout and when they are visible across breakpoints. This page owns responsive visibility patterns such as d-md-none so Flexbox can stay focused on axis, alignment, and item sizing.",
      actions: [
        {
          key: "open-flexbox",
          label: "Open Flexbox",
        },
        {
          key: "open-spacing-helpers",
          label: "Open Spacing Helpers",
        },
      ],
    },
    sections: {
      usage: {
        type: "card-grid",
        key: "usage",
        title: "Usage",
        description:
          "Pick a base display mode, optionally add one responsive override, and copy the resulting class list.",
        labels: {
          baseDisplay: "Base display",
          breakpoint: "Responsive breakpoint",
          responsiveDisplay: "Display at breakpoint",
          noBreakpoint: "None",
          block: "Block",
          inline: "Inline",
          inlineBlock: "Inline block",
          flex: "Flex",
          inlineFlex: "Inline flex",
          hidden: "Hidden",
          classList: "Generated classes",
        },
      },
      "class-syntax": {
        type: "card-grid",
        key: "class-syntax",
        title: "Class syntax",
        descriptionHtml:
          'Display helpers are composed as <code class="docs-inline-code">d-{value}</code> for base behavior and <code class="docs-inline-code">d-{breakpoint}-{value}</code> for responsive overrides.',
        description:
          "Display helpers are composed with one base class and optional breakpoint overrides.",
        items: [
          {
            title: "Base classes",
            description:
              "Use d-block, d-inline, d-inline-block, d-flex, d-inline-flex, or d-none.",
          },
          {
            title: "Breakpoint overrides",
            description:
              "Prefix with sm, md, lg, or xl to override display from that breakpoint and above.",
          },
          {
            title: "Mobile-first cascade",
            description:
              "Later breakpoints override previous display declarations in ascending order.",
          },
        ],
        itemsHtml: {
          "Base classes":
            'Use <code class="docs-inline-code">d-block</code>, <code class="docs-inline-code">d-inline</code>, <code class="docs-inline-code">d-inline-block</code>, <code class="docs-inline-code">d-flex</code>, <code class="docs-inline-code">d-inline-flex</code>, or <code class="docs-inline-code">d-none</code>.',
          "Breakpoint overrides":
            'Prefix with <code class="docs-inline-code">sm</code>, <code class="docs-inline-code">md</code>, <code class="docs-inline-code">lg</code>, or <code class="docs-inline-code">xl</code> to override display from that breakpoint and above.',
        },
      },
      "responsive-breakpoints": {
        type: "card-grid",
        key: "responsive-breakpoints",
        title: "Breakpoints and visibility",
        descriptionHtml:
          'Patterns such as <code class="docs-inline-code">d-none d-md-block</code> or <code class="docs-inline-code">d-block d-md-none</code> express visibility transitions without custom media queries.',
        description:
          "Use two classes to declare visibility transitions across breakpoints.",
        items: [
          {
            title: "Desktop only block",
            description: "Hide by default and show as block from md and above.",
          },
          {
            title: "Below md only",
            description: "Show by default and hide from md and above.",
          },
          {
            title: "Inline to block",
            description:
              "Keep inline behavior on small screens and switch to block on large screens.",
          },
        ],
      },
      "breakpoint-reference": {
        type: "card-grid",
        key: "breakpoint-reference",
        title: "Breakpoint reference",
        description:
          "Use this table as the canonical breakpoint map when composing responsive display classes.",
        labels: {
          tier: "Device",
          token: "Token",
          target: "Typical devices",
          range: "Range",
        },
        items: [
          "Extra small|xs|Small to large phone|< 600px",
          "Small|sm|Small to medium tablet|600px > < 840px",
          "Medium|md|Large tablet to laptop|840px > < 1145px",
          "Large|lg|Laptop to desktop|1145px > < 1545px",
          "Extra large|xl|1080p to 1440p desktop|1545px >",
        ],
      },
      "implementation-examples": {
        type: "card-grid",
        key: "implementation-examples",
        title: "Implementation examples",
        descriptionHtml:
          'Display helpers are composed as <code class="docs-inline-code">d-{value}</code> for base behavior and <code class="docs-inline-code">d-{breakpoint}-{value}</code> for responsive overrides.',

        items: [
          {
            title: "Desktop navigation only",
            description:
              "Hide a navigation block on small screens and reveal it from md upward.",
          },
          {
            title: "Mobile action only",
            description:
              "Show a compact action below md and hide it at larger breakpoints.",
          },
          {
            title: "Inline badge promoted to block",
            description:
              "Keep inline text rhythm on small screens and promote to block at xl.",
          },
        ],
      },
      "framework-notes": {
        type: "list",
        key: "framework-notes",
        title: "Framework notes",
        description:
          "These notes clarify how display helpers interact with other utility pages.",
        items: [
          "Display helpers own visibility and breakpoint concerns for utility documentation.",
          "Flexbox documentation focuses on direction, alignment, wrapping, and item sizing.",
          "Compose display and flex helpers together when a layout needs both visibility rules and axis control.",
        ],
        itemsHtml: {
          "Compose display and flex helpers together when a layout needs both visibility rules and axis control.":
            'Compose display and flex helpers together when a layout needs both visibility rules and axis control, for example <code class="docs-inline-code">d-none d-md-flex items-center</code>.',
        },
      },
    },
  };

export const displayHelpersPages = {
  displayHelpers: displayHelpersEditorialContent,
} as const;

export default displayHelpersPages;
