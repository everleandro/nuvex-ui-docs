import type { DocsComponentPageContent } from '../types'

export const checkboxComponentContentEs: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Checkbox',
    description: 'Documentacion del componente Checkbox de Nuvex UI con uso interactivo, variantes, valores personalizados, slot de label, validacion y props.',
  },
  hero: {
    title: 'Checkbox',
    descriptionHtml:
      "El componente <code class='green--text mx-2 title'>e-checkbox</code> captura valores booleanos o mapeados (on/off) con contrato consistente de field, incluyendo validacion, details y estados disabled/readonly.<br><br>Usa esta pagina para validar patrones de interaccion, mapeo del modelo y etiquetado accesible antes de integrar flujos con checkbox en formularios de produccion.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Uso',
      description:
        'Usa este playground base para configurar checkbox en contexto: color, outlined, disabled, readonly, overlay y mapeo de modelo via true-value y false-value.',
    },
    {
      key: 'visual-variants',
      title: 'Variantes visuales',
      description:
        'Compara la presentacion default y outlined en estados activo, disabled y readonly para mantener clara la intencion semantica en formularios densos.',
    },
    {
      key: 'custom-values',
      title: 'Valores personalizados',
      description:
        'Mapea el estado del checkbox a valores de dominio con true-value y false-value cuando el contrato del formulario no es estrictamente booleano.',
    },
    {
      key: 'slots',
      title: 'Slots nombrados',
      descriptionHtml:
        "Usa el slot <code class='ma-2 green--text'>label</code> para renderizar labels enriquecidas con links o contexto adicional sin perder semantica nativa de checkbox.",
    },
    {
      key: 'validation',
      title: 'Validacion',
      description:
        'Valida flujos de consentimiento con reglas obligatorias y feedback explicito de envio antes de continuar acciones criticas.',
    },
    {
      key: 'props',
      title: 'Props',
      description: 'Usa la tabla de API como fuente de verdad para tipos aceptados, defaults y comportamiento heredado de field.',
    },
  ],
  labels: {
    controls: [
      { key: 'color', label: 'color' },
      { key: 'outlined', label: 'outlined' },
      { key: 'disabled', label: 'disabled' },
      { key: 'readonly', label: 'readonly' },
      { key: 'tonal', label: 'tonal' },
      { key: 'customValues', label: 'valores personalizados' },
    ],
  },
}
