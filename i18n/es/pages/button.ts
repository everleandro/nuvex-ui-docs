import type { DocsComponentPageContent } from '~/types/docs'

export const buttonComponentContentEs: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Botones | Nuvex UI Docs',
    description:
      'Documentacion del componente Button de Nuvex UI con playground, variantes, iconos, tamanos y props.',
  },
  hero: {
    title: 'Botones',
    descriptionHtml:
      "El componente <code class='docs-inline-code'>e-button</code> cubre acciones primarias, secundarias y de navegacion. Soporta variantes visuales, tamanos, estados como <code class='docs-inline-code'>disabled</code>/<code class='docs-inline-code'>loading</code> e integracion con iconos y enlaces. En esta pagina puedes comparar patrones reales de uso para elegir rapidamente la configuracion adecuada segun jerarquia visual, contexto y accesibilidad.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Uso',
      descriptionHtml:
        "Usa este playground para ajustar jerarquia visual con <code class='docs-inline-code'>color</code>, <code class='docs-inline-code'>outlined</code> y <code class='docs-inline-code'>text</code>; prueba <code class='docs-inline-code'>block</code> para layouts de formulario/mobile; y valida feedback de estado con <code class='docs-inline-code'>disabled</code> y <code class='docs-inline-code'>loading</code>.",
    },
    {
      key: 'size-variants',
      title: 'Variantes de tamano',
      descriptionHtml:
        "Define escala visual segun densidad y prioridad. Opciones: <code class='docs-inline-code'>x-small</code>, <code class='docs-inline-code'>small</code>, <code class='docs-inline-code'>default</code>, <code class='docs-inline-code'>large</code>, <code class='docs-inline-code'>x-large</code>.",
    },
    {
      key: 'visual-variants',
      title: 'Variantes visuales',
      descriptionHtml:
        "Compara como el framework materializa una jerarquia visual ya decidida con <code class='docs-inline-code'>default</code>, <code class='docs-inline-code'>outlined</code>, <code class='docs-inline-code'>text</code> y <code class='docs-inline-code'>tonal</code> para resolver con consistencia una accion principal, acciones secundarias o un enfasis intermedio dentro de la interfaz.",
    },
    {
      key: 'icon-mode',
      title: 'Modo icono',
      descriptionHtml:
        "Con la prop <code class='docs-inline-code'>icon</code> puedes crear botones compactos basados en icono. Recomendado para barras de herramientas y acciones recurrentes.",
    },
    {
      key: 'prepend-append-icons',
      title: 'Iconos prepend y append',
      descriptionHtml:
        "Agrega contexto visual colocando iconos al lado <code class='docs-inline-code'>izquierdo</code> (prepend) o <code class='docs-inline-code'>derecho</code> (append) del texto.",
    },
    {
      key: 'custom-size',
      title: 'Tamano personalizado',
      descriptionHtml:
        "Ajusta dimensiones con <code class='docs-inline-code'>width</code> y <code class='docs-inline-code'>height</code> cuando el layout requiera medidas especificas.",
    },
    {
      key: 'common-use-cases',
      title: 'Casos de uso comunes',
      description:
        'Patron recomendado para app bars: navegacion al inicio, marca dentro del flujo principal, una accion primaria tonal para crear y utilidades agrupadas al final.',
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