import type { DocsComponentPageContent } from '../types'

export const textFieldComponentContentEs: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'TextField',
    description: 'Documentacion del componente TextField de Nuvex UI con playground, tipos de entrada, estados y props.',
  },
  hero: {
    title: 'TextField',
    descriptionHtml:
      "El componente <code class='green--text mx-2 title'>e-text-field</code> es el input base de texto para formularios, con soporte de validacion, estados, iconos y utilidades de formato.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Uso',
      description: 'Comienza con el text field por defecto y ajusta su comportamiento con props de estado y estilo.',
    },
    {
      key: 'input-types',
      title: 'Tipos de entrada',
      descriptionHtml: "Usa tipos nativos como <code class='green--text'>text</code>, <code class='green--text'>email</code> y <code class='green--text'>password</code> segun el contexto.",
    },
    {
      key: 'prefix-suffix-counter',
      title: 'Prefix, suffix y contador',
      description: 'Agrega prefijos/sufijos contextuales y limites de caracteres para entradas estructuradas.',
    },
    {
      key: 'inner-icons',
      title: 'Iconos internos',
      description: 'Usa iconos internos al inicio o final para busqueda, identidad o ayudas visuales.',
    },
    {
      key: 'states',
      title: 'Estados y validacion',
      description: 'Documenta estados disabled, readonly y feedback de validacion con senales visuales y semanticas claras.',
    },
    {
      key: 'accessibility',
      title: 'Accesibilidad',
      description: 'Asegura etiquetas claras para cada campo, usa placeholder solo como apoyo y mantén estados de foco visibles para navegacion con teclado.',
    },
    {
      key: 'integration',
      title: 'Patrones de integracion',
      description: 'Combina text fields con validacion de formularios y flujos de envio asincrono manteniendo feedback consistente.',
    },
    {
      key: 'do-dont',
      title: 'Buenas y malas practicas',
      description: 'Prefiere etiquetas claras, helper text conciso y restricciones explicitas. Evita placeholders como etiqueta principal o validaciones ocultas.',
    },
    {
      key: 'composition-patterns',
      title: 'Patrones de composicion',
      description: 'Usa text fields en layouts agrupados como barras de busqueda, filas de filtros y formularios de perfil con acciones alineadas.',
    },
    {
      key: 'faq',
      title: 'FAQ y troubleshooting',
      description: 'Resuelve dudas comunes sobre timing de validacion, readonly frente a disabled y comportamiento de counter/limit.',
      faqItems: [
        {
          question: 'Cuando debo usar readonly en lugar de disabled?',
          answerHtml:
            "Usa <code class='ma-2 green--text'>readonly</code> cuando el usuario deba poder enfocar y copiar el valor, y <code class='ma-2 green--text'>disabled</code> cuando el campo deba quedar totalmente inactivo.",
        },
        {
          question: 'Como muestro validacion solo despues de enviar?',
          answerHtml:
            "Controla <code class='ma-2 green--text'>error-messages</code> con una bandera de envio para mostrar errores tras el primer intento de submit.",
        },
        {
          question: 'Como configuro counter y limit correctamente?',
          answerHtml:
            "Usa <code class='ma-2 green--text'>counter</code> junto con <code class='ma-2 green--text'>:limit</code> para hacer visibles las restricciones desde el inicio.",
        },
      ],
    },
    {
      key: 'props',
      title: 'Props',
      description: 'Explora las props disponibles para el componente TextField.',
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
      { key: 'disabled', label: 'disabled' },
      { key: 'readonly', label: 'readonly' },
      { key: 'clearable', label: 'clearable' },
      { key: 'counter', label: 'counter' },
      { key: 'required', label: 'required' },
    ],
  },
}
