import type { DocsComponentPageContent } from '../types'

export const buttonComponentContent: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Button',
    description: 'Button component documentation for Nuvex UI, including playground, variants, icons, sizing, and props.',
  },
  hero: {
    title: 'Buttons',
    descriptionHtml:
      "The <code class='green--text mx-2 title'>e-button</code> component covers primary, secondary, and navigation actions. It supports visual variants, sizes, states like <code class='green--text mx-1 title'>disabled</code>/<code class='green--text mx-1 title'>loading</code>, plus icon and link integration. This page helps you compare real usage patterns so you can quickly choose the right setup for visual hierarchy, context, and accessibility.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Usage',
      description:
        'Use this playground to tune visual hierarchy with color, outlined, and text; try block for form/mobile layouts; and validate state feedback with disabled and loading.',
    },
    {
      key: 'size-variants',
      title: 'Button size variants',
      descriptionHtml:
        "Set visual scale based on density and priority. Options: <code class='green--text'>x-small small default large x-large</code>.",
    },
    {
      key: 'visual-variants',
      title: 'Visual variants',
      description:
        'Compare variants with the same label to pick hierarchy: default for primary action, outlined/text for secondary actions, tonal for mid emphasis.',
    },
    {
      key: 'icon-mode',
      title: 'Icon mode',
      descriptionHtml:
        "With the <code class='ma-2 green--text'>icon</code> prop you can create compact icon-driven buttons. Recommended for toolbars and frequent actions.",
    },
    {
      key: 'prepend-append-icons',
      title: 'Prepend and append icons',
      descriptionHtml:
        "Add visual context by placing icons on the <code class='ma-2 green--text'>left</code> (prepend) or <code class='ma-2 green--text'>right</code> (append) side of the label.",
    },
    {
      key: 'custom-size',
      title: 'Custom size',
      descriptionHtml:
        "Adjust dimensions with <code class='ma-2 green--text'>width</code> and <code class='ma-2 green--text'>height</code> when the layout requires exact measurements.",
    },
    {
      key: 'common-use-cases',
      title: 'Common use cases',
      description:
        'Recommended Card pattern: secondary text action plus emphasized primary action, validating loading and disabled states.',
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
      iconsPage: 'Icons',
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
