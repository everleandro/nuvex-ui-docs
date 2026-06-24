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
      "The <code class='green--text mx-2 title'>e-button</code> component offers a variety of button types and sizes to fit different interaction and layout needs.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Usage',
      description:
        'In its simplest form, a button has subtle elevation, hover feedback, and a ripple interaction on click.',
    },
    {
      key: 'size-variants',
      title: 'Button size variants',
      descriptionHtml:
        "Available size options: <code class='green--text'>x-small small default large x-large</code>",
    },
    {
      key: 'icon-mode',
      title: 'Icon mode',
      descriptionHtml:
        "Using the <code class='ma-2 green--text'>icon</code> prop you can switch the component to icon-driven layouts.",
    },
    {
      key: 'prepend-append-icons',
      title: 'Prepend and append icons',
      descriptionHtml:
        "You can place icons on either the <code class='ma-2 green--text'>left</code> or <code class='ma-2 green--text'>right</code> side of the button.",
    },
    {
      key: 'custom-size',
      title: 'Custom size',
      descriptionHtml:
        "Using <code class='ma-2 green--text'>width</code> or <code class='ma-2 green--text'>height</code> you can change the default dimensions.",
    },
    {
      key: 'states',
      title: 'States and interaction',
      description:
        'Document disabled and loading states clearly, and keep focus-visible affordance for keyboard users to preserve interaction feedback.',
    },
    {
      key: 'accessibility',
      title: 'Accessibility',
      description:
        'Use explicit labels for icon-only actions, preserve color contrast, and ensure button semantics match the intended action type.',
    },
    {
      key: 'integration',
      title: 'Integration patterns',
      description:
        'Use buttons for routing and async actions with clear loading/disabled behavior to prevent duplicate submissions.',
    },
    {
      key: 'do-dont',
      title: "Do and don't",
      description:
        'Prefer clear action labels, semantic intent, and consistent hierarchy. Avoid ambiguous labels and competing primary actions.',
    },
    {
      key: 'composition-patterns',
      title: 'Composition patterns',
      description:
        'Use grouped actions for toolbars, dialogs, and form footers with predictable primary and secondary ordering.',
    },
    {
      key: 'faq',
      title: 'FAQ and troubleshooting',
      description:
        'Resolve common issues around loading feedback, icon-only labeling, and navigation behavior.',
      faqItems: [
        {
          question: 'How can I prevent duplicate submits?',
          answerHtml:
            "Use <code class='ma-2 green--text'>loading</code> and <code class='ma-2 green--text'>disabled</code> together while an async action is running.",
        },
        {
          question: 'How should I label an icon-only action?',
          answerHtml:
            "Always provide <code class='ma-2 green--text'>aria-label</code> on icon-only buttons so assistive technologies can announce the action.",
        },
        {
          question: 'When should I use a button versus a text link?',
          answerHtml:
            "Use a button for direct actions and use <code class='ma-2 green--text'>text</code> style when the action has lower visual priority.",
        },
      ],
    },
    {
      key: 'props',
      title: 'Props',
      description: 'Explore the available props for the Button component.',
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
