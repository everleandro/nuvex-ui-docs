import type { DocsComponentPageContent } from '../types'

export const textareaComponentContentEs: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Textarea',
    description: 'Documentacion del componente Textarea de Nuvex UI con patrones de uso, manejo de rows y longitud, validacion y props.',
  },
  hero: {
    title: 'Textarea',
    descriptionHtml:
      "El componente <code class='green--text mx-2 title'>e-textarea</code> esta pensado para entrada multilinea usando el mismo sistema de campos del resto de controles de formulario. Soporta variantes visuales, prefijos/sufijos, iconos, validacion y mensajes de ayuda.<br><br>Usa esta pagina para elegir la estructura correcta en comentarios, descripciones y entradas largas, manteniendo claridad, consistencia y comportamiento de envio predecible.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Uso',
      description:
        'Usa este playground base para configurar Textarea en contexto: color, outlined, clearable, readonly, disabled, retain-color, rows y counter/limit desde un solo panel de control.',
    },
    {
      key: 'visual-variants',
      title: 'Variantes visuales',
      description:
        'Compara variantes filled y outlined en estados interactivo, readonly y disabled para definir jerarquia y legibilidad en layouts de formulario densos.',
    },
    {
      key: 'rows-and-length',
      title: 'Rows y longitud',
      descriptionHtml:
        "Controla la huella vertical con <code class='ma-2 green--text'>rows</code> y agrega guardrails con <code class='ma-2 green--text'>limit</code> + <code class='ma-2 green--text'>counter</code> para mejorar calidad en entradas largas.",
    },
    {
      key: 'icons-and-affixes',
      title: 'Iconos y affixes',
      descriptionHtml:
        "Usa props de iconos y affixes como <code class='ma-2 green--text'>prependIcon</code>, <code class='ma-2 green--text'>appendInnerIcon</code>, <code class='ma-2 green--text'>prefix</code> y <code class='ma-2 green--text'>suffix</code> para reforzar intencion y escaneo sin agregar campos extra.",
    },
    {
      key: 'slots-composition',
      title: 'Slots nombrados',
      descriptionHtml:
        "Compone campos multilinea mas ricos con slots como <code class='ma-2 green--text'>prepend</code> y <code class='ma-2 green--text'>append-inner</code> para agregar contexto y acciones rapidas en sitio.",
    },
    {
      key: 'validation',
      title: 'Validacion',
      description:
        'Aplica validacion por reglas y bloqueo de envio para que entradas largas sigan siendo accionables y los errores se mantengan visibles antes de enviar.',
    },
    {
      key: 'props',
      title: 'Props',
      description:
        'Usa la tabla de API como fuente de verdad para props soportadas, tipos aceptados, defaults y comportamiento heredado de field.',
    },
  ],
  labels: {
    controls: [
      { key: 'color', label: 'color' },
      { key: 'outlined', label: 'outlined' },
      { key: 'disabled', label: 'disabled' },
      { key: 'readonly', label: 'readonly' },
      { key: 'clearable', label: 'clearable' },
      { key: 'counter', label: 'counter' },
      { key: 'retainColor', label: 'retainColor' },
      { key: 'rows', label: 'rows' },
    ],
    formText: {
      form: {
        submit: 'Enviar feedback',
        idle: 'Completa campos obligatorios para continuar',
        submitting: 'Enviando feedback...',
        success: 'Feedback enviado correctamente',
        canceled: 'Formulario de feedback reiniciado',
        cardTitle: 'Formulario de feedback',
        cardSubtitle: 'Captura detalles con contexto accionable',
      },
    },
  },
}
