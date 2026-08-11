import type { DocsComponentPageContent } from '~/types/docs'

export const buttonComponentContent: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Button | Nuvex UI Docs',
    description: 'Button component documentation for Nuvex UI, including playground, variants, icons, sizing, and props.',
  },
  hero: {
    title: 'Buttons',
    descriptionHtml:
      "The <code class='docs-inline-code'>e-button</code> component covers primary, secondary, and navigation actions. It supports visual variants, sizes, states like <code class='docs-inline-code'>disabled</code>/<code class='docs-inline-code'>loading</code>, plus icon and link integration. This page helps you compare real usage patterns so you can quickly choose the right setup for visual hierarchy, context, and accessibility.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Usage',
      descriptionHtml:
        "Use this playground to tune visual hierarchy with <code class='docs-inline-code'>color</code>, <code class='docs-inline-code'>outlined</code>, and <code class='docs-inline-code'>text</code>; try <code class='docs-inline-code'>block</code> for form/mobile layouts; and validate state feedback with <code class='docs-inline-code'>disabled</code> and <code class='docs-inline-code'>loading</code>.",
    },
    {
      key: 'size-variants',
      title: 'Button size variants',
      descriptionHtml:
        "Set visual scale based on density and priority. Options: <code class='docs-inline-code'>x-small</code>, <code class='docs-inline-code'>small</code>, <code class='docs-inline-code'>default</code>, <code class='docs-inline-code'>large</code>, <code class='docs-inline-code'>x-large</code>.",
    },
    {
      key: 'visual-variants',
      title: 'Visual variants',
      descriptionHtml:
        "Compare how the framework materializes an already-decided visual hierarchy with <code class='docs-inline-code'>default</code>, <code class='docs-inline-code'>outlined</code>, <code class='docs-inline-code'>text</code>, and <code class='docs-inline-code'>tonal</code> to consistently express a primary action, secondary actions, or mid-level emphasis in the interface.",
    },
    {
      key: 'icon-mode',
      title: 'Icon mode',
      descriptionHtml:
        "With the <code class='docs-inline-code'>icon</code> prop you can create compact icon-driven buttons. Recommended for toolbars and frequent actions.",
    },
    {
      key: 'prepend-append-icons',
      title: 'Prepend and append icons',
      descriptionHtml:
        "Add visual context by placing icons on the <code class='docs-inline-code'>left</code> (prepend) or <code class='docs-inline-code'>right</code> (append) side of the label.",
    },
    {
      key: 'custom-size',
      title: 'Custom size',
      descriptionHtml:
        "Adjust dimensions with <code class='docs-inline-code'>width</code> and <code class='docs-inline-code'>height</code> when the layout requires exact measurements.",
    },
    {
      key: 'common-use-cases',
      title: 'Common use cases',
      description:
        'Recommended app bar pattern: navigation at the start, brand in the main flow, a tonal primary action for creation, and utility actions grouped at the end.',
    },
    {
      key: 'props',
      title: 'Props',
      description: 'Complete reference of props, types, and behavior to configure Button precisely.',
    },
  ],
  labels: {
    controls: [
      { key: 'color', label: 'color' },
      { key: 'outlined', label: 'outlined' },
      { key: 'block', label: 'block' },
      { key: 'disabled', label: 'disabled' },
      { key: 'rounded', label: 'rounded' },
      { key: 'loading', label: 'loading' },
      { key: 'depressed', label: 'depressed' },
    ],
    links: {
      iconsPage: 'Icon Configuration',
      iconGuidePrefix: 'You can learn more about how icons work on the',
      iconGuideSuffix: 'page.',
    },
    buttonText: {
      preview: 'Button',
      delete: 'Delete',
      send: 'Send',
      warning: 'warning',
      stop: 'Stop',
    },
  },
}

export const buttonPages = {
  button: buttonComponentContent,
} as const

export default buttonPages