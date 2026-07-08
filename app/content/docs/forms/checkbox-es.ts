import type { DocsComponentPageContent } from '../types'

export const checkboxComponentContentEs: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Checkbox',
    description: 'Documentacion del componente Checkbox de Nuvex UI con uso interactivo, variantes visuales, retain-color, valores personalizados, slot de label, validacion y props.',
  },
  hero: {
    title: 'Checkbox',
    descriptionHtml:
      "El componente <code class='green--text mx-2 title'>e-checkbox</code> captura valores booleanos o mapeados (on/off) con un contrato consistente de campo, incluyendo validacion, texto de ayuda y estados disabled/readonly.<br><br>Usa esta pagina para validar patrones de interaccion, mapeo del modelo y etiquetado accesible antes de integrar flujos con checkbox en formularios de produccion.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Uso',
      description:
        'Usa este playground base para configurar el checkbox en contexto: color, outlined, disabled, readonly, tonal y retain-color para mantener continuidad visual entre estados.',
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
        "Usa el slot <code class='ma-2 green--text'>label</code> para renderizar etiquetas enriquecidas con enlaces o contexto adicional sin perder la semantica nativa del checkbox.",
    },
    {
      key: 'validation',
      title: 'Validacion',
      description:
        'Valida flujos de consentimiento con reglas obligatorias y feedback explicito de envio antes de continuar con acciones criticas.',
    },
    {
      key: 'props',
      title: 'Props',
      description: 'Usa la tabla de API como fuente de verdad para tipos aceptados, defaults y comportamiento heredado del campo.',
    },
  ],
  labels: {
    controls: [
      { key: 'color', label: 'color' },
      { key: 'outlined', label: 'outlined' },
      { key: 'disabled', label: 'disabled' },
      { key: 'readonly', label: 'readonly' },
      { key: 'tonal', label: 'tonal' },
      { key: 'retainColor', label: 'retainColor' },
      { key: 'customValues', label: 'valores personalizados' },
    ],
    checkboxText: {
      usageLabel: 'Activar checks de despliegue',
      usageDetail: 'Requerido para la checklist de despliegue',
      visualStateLabels: {
        default: 'Default',
        outlined: 'Outlined',
        active: 'Activo',
        disabled: 'Deshabilitado',
        readonly: 'Solo lectura',
      },
      customValuesLabel: 'Checklist de liberacion',
      customValuesDetail: 'Activa esta opcion para marcar el despliegue como listo',
      currentModelValue: 'Valor actual del modelo',
      termsDialogTitle: 'Terminos y condiciones',
      termsDialogBody: 'Aqui puedes explicar el alcance del consentimiento, el uso esperado y cualquier condicion adicional antes de continuar.',
      termsDialogClose: 'Cerrar',
      validationCheckboxLabel: 'Acepto los terminos del servicio',
      validationMessage: 'Debes aceptar los terminos antes de continuar.',
      validationButtonLabel: 'Crear cuenta',
      validationIdleFeedback: 'Envia el formulario para validar la regla del checkbox.',
      validationSuccessFeedback: 'El formulario es valido. Puedes continuar.',
      slotsLead: 'Acepto los',
      slotsLinkLabel: 'Terminos y condiciones',
    },
  },
}
