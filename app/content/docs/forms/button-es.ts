import type { DocsComponentPageContent } from '../types'

export const buttonComponentContentEs: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Button',
    description: 'Documentacion del componente Button de Nuvex UI con playground, variantes, iconos, tamanos y props.',
  },
  hero: {
    title: 'Buttons',
    descriptionHtml:
      "El componente <code class='green--text mx-2 title'>e-button</code> ofrece varios tipos y tamanos de botones para distintos contextos de uso.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Uso',
      description:
        'En su forma mas simple, un boton tiene una elevacion ligera, feedback al pasar el cursor y efecto ripple al hacer clic.',
    },
    {
      key: 'size-variants',
      title: 'Variantes de tamano',
      descriptionHtml:
        "Opciones disponibles de tamano: <code class='green--text'>x-small small default large x-large</code>",
    },
    {
      key: 'icon-mode',
      title: 'Modo icono',
      descriptionHtml:
        "Usando la prop <code class='ma-2 green--text'>icon</code> puedes cambiar el layout del componente a un enfoque basado en iconos.",
    },
    {
      key: 'prepend-append-icons',
      title: 'Iconos prepend y append',
      descriptionHtml:
        "Puedes posicionar iconos en el lado <code class='ma-2 green--text'>izquierdo</code> o <code class='ma-2 green--text'>derecho</code> del boton.",
    },
    {
      key: 'custom-size',
      title: 'Tamano personalizado',
      descriptionHtml:
        "Usando <code class='ma-2 green--text'>width</code> o <code class='ma-2 green--text'>height</code> puedes cambiar las dimensiones por defecto.",
    },
    {
      key: 'states',
      title: 'Estados e interaccion',
      description:
        'Documenta claramente los estados disabled y loading, y conserva una senal focus-visible para usuarios de teclado.',
    },
    {
      key: 'accessibility',
      title: 'Accesibilidad',
      description:
        'Usa etiquetas explicitas en acciones solo-icono, conserva contraste legible y asegura semantica correcta segun la accion.',
    },
    {
      key: 'integration',
      title: 'Patrones de integracion',
      description:
        'Usa botones para routing y acciones asincronas con estado loading/disabled para evitar envios duplicados.',
    },
    {
      key: 'do-dont',
      title: 'Buenas y malas practicas',
      description:
        'Prefiere acciones con etiquetas claras, intencion semantica y jerarquia visual consistente. Evita labels ambiguos y acciones primarias en competencia.',
    },
    {
      key: 'composition-patterns',
      title: 'Patrones de composicion',
      description:
        'Usa agrupaciones de acciones para toolbars, dialogs y pie de formularios con orden primario/secundario predecible.',
    },
    {
      key: 'faq',
      title: 'FAQ y troubleshooting',
      description:
        'Resuelve problemas comunes de loading, etiquetado de botones solo-icono y comportamiento de navegacion.',
      faqItems: [
        {
          question: 'Como evito envios duplicados?',
          answerHtml:
            "Usa <code class='ma-2 green--text'>loading</code> y <code class='ma-2 green--text'>disabled</code> al mismo tiempo mientras una accion asincrona esta en progreso.",
        },
        {
          question: 'Como etiqueto correctamente un boton solo-icono?',
          answerHtml:
            "Agrega siempre <code class='ma-2 green--text'>aria-label</code> en botones solo-icono para que tecnologias asistivas anuncien la accion.",
        },
        {
          question: 'Cuando debo usar boton y cuando boton de texto?',
          answerHtml:
            "Usa boton para acciones directas y estilo <code class='ma-2 green--text'>text</code> cuando la accion tenga menor prioridad visual.",
        },
      ],
    },
    {
      key: 'props',
      title: 'Props',
      description: 'Explora las props disponibles para el componente Button.',
    },
  ],
  labels: {
    tabs: {
      design: 'Diseno',
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
      iconsPage: 'Iconos',
      iconGuidePrefix: 'Puedes aprender mas sobre como funcionan los iconos en la pagina de',
      iconGuideSuffix: '.',
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
