import type { DocsComponentPageContent } from '~/types/docs'

export const buttonComponentContentEs: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Botones',
    description:
      'Documentacion del componente Button de Nuvex UI con playground, variantes, iconos, tamanos y props.',
  },
  hero: {
    title: 'Botones',
    descriptionHtml:
      "El componente <code class='green--text mx-2 title'>e-button</code> cubre acciones primarias, secundarias y de navegacion. Soporta variantes visuales, tamanos, estados como <code class='green--text mx-1 title'>disabled</code>/<code class='green--text mx-1 title'>loading</code> e integracion con iconos y enlaces. En esta pagina puedes comparar patrones reales de uso para elegir rapidamente la configuracion adecuada segun jerarquia visual, contexto y accesibilidad.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Uso',
      description:
        'Usa este playground para ajustar jerarquia visual con color, outlined y text; prueba block para layouts de formulario/mobile; y valida feedback de estado con disabled y loading.',
    },
    {
      key: 'size-variants',
      title: 'Variantes de tamano',
      descriptionHtml:
        "Define escala visual segun densidad y prioridad. Opciones: <code class='green--text'>x-small small default large x-large</code>.",
    },
    {
      key: 'visual-variants',
      title: 'Variantes visuales',
      description:
        'Compara variantes con el mismo texto para elegir jerarquia: default para accion principal, outlined/text para acciones secundarias, tonal para enfasis intermedio.',
    },
    {
      key: 'icon-mode',
      title: 'Modo icono',
      descriptionHtml:
        "Con la prop <code class='ma-2 green--text'>icon</code> puedes crear botones compactos basados en icono. Recomendado para barras de herramientas y acciones recurrentes.",
    },
    {
      key: 'prepend-append-icons',
      title: 'Iconos prepend y append',
      descriptionHtml:
        "Agrega contexto visual colocando iconos al lado <code class='ma-2 green--text'>izquierdo</code> (prepend) o <code class='ma-2 green--text'>derecho</code> (append) del texto.",
    },
    {
      key: 'custom-size',
      title: 'Tamano personalizado',
      descriptionHtml:
        "Ajusta dimensiones con <code class='ma-2 green--text'>width</code> y <code class='ma-2 green--text'>height</code> cuando el layout requiera medidas especificas.",
    },
    {
      key: 'common-use-cases',
      title: 'Casos de uso comunes',
      description:
        'Patron recomendado en Cards: accion secundaria en text y accion principal destacada, validando estados loading y disabled.',
    },
    {
      key: 'props',
      title: 'Props',
      description:
        'Referencia completa de props, tipos y comportamiento para configurar Button con precision.',
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
      iconsPage: 'Configuracion de iconos',
      iconGuidePrefix:
        'Puedes aprender mas sobre como funcionan los iconos en la pagina de',
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

export const buttonPages = {
  button: buttonComponentContentEs,
} as const

export default buttonPages