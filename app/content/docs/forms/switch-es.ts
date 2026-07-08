import type { DocsComponentPageContent } from '../types'

export const switchComponentContentEs: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Switch',
    description: 'Documentacion del componente Switch para Nuvex UI con uso interactivo, variantes, valores custom, carga async, slot de label, validacion y props.',
  },
  hero: {
    title: 'Switch',
    descriptionHtml:
      "El componente <code class='green--text mx-2 title'>e-switch</code> captura estado booleano o binario mapeado dentro del contrato compartido de field, incluyendo detalles de ayuda, feedback de carga async, validacion y etiquetado accesible.<br><br>Usa esta pagina para validar comportamiento de toggles, side effects y mapeo de valores antes de conectar paneles de preferencias, release gates o settings de entorno a flujos de produccion.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Uso',
      description:
        'Usa este playground base para ajustar el comportamiento del switch en contexto: color, outlined, disabled, readonly, loading y retain-color para una continuidad visual mas clara.',
    },
    {
      key: 'visual-variants',
      title: 'Variantes visuales',
      description:
        'Compara estados default, outlined, tonal, retain-color, loading, disabled y readonly para mantener claras las decisiones binarias en paneles densos de configuracion.',
    },
    {
      key: 'custom-values',
      title: 'Valores custom',
      description:
        'Mapea el estado del switch a valores de dominio con true-value y false-value cuando el modelo no es estrictamente booleano.',
    },
    {
      key: 'loading-and-async',
      title: 'Loading y flujos async',
      description:
        'Usa loading para bloquear interaccion mientras se persiste el nuevo valor y para hacer explicitos los side effects durante updates async.',
    },
    {
      key: 'slots',
      title: 'Slots nombrados',
      descriptionHtml:
        "Usa el slot <code class='ma-2 green--text'>label</code> para renderizar labels mas ricos con links o contexto de politicas sin perder la semantica del switch.",
    },
    {
      key: 'validation',
      title: 'Validacion',
      description:
        'Valida requisitos de consentimiento o de entorno con feedback explicito de submit antes de permitir una transicion critica.',
    },
    {
      key: 'props',
      title: 'Props',
      description: 'Usa la tabla de API como fuente de verdad para tipos aceptados, defaults y comportamiento heredado del field.',
    },
  ],
  labels: {
    controls: [
      { key: 'color', label: 'color' },
      { key: 'outlined', label: 'outlined' },
      { key: 'disabled', label: 'disabled' },
      { key: 'readonly', label: 'readonly' },
      { key: 'loading', label: 'loading' },
      { key: 'retainColor', label: 'retainColor' },
    ],
    switchText: {
      usageLabel: 'Habilitar release gate',
      usageDetail: 'Controla si la liberacion puede continuar automaticamente.',
      visualStateLabels: {
        default: 'Default',
        outlined: 'Outlined',
        tonal: 'Tonal',
        retainColor: 'Retain color',
        loading: 'Loading',
        disabled: 'Disabled',
        readonly: 'Readonly',
      },
      customValuesLabel: 'Publicar cambios',
      customValuesDetail: 'Mapea el estado del switch a valores de estado de despliegue.',
      currentModelValue: 'Valor actual del modelo',
      asyncLabel: 'Analytics en vivo',
      asyncDetail: 'Persiste la preferencia antes de habilitar el tracking de sesion.',
      asyncButtonLabel: 'Reiniciar demo',
      asyncIdleFeedback: 'Activa el switch para simular un guardado async.',
      asyncSavingFeedback: 'Guardando preferencia...',
      asyncSuccessFeedback: 'Preferencia guardada correctamente.',
      slotLead: 'Revise la',
      slotLinkLabel: 'politica del entorno',
      dialogTitle: 'Politica del entorno',
      dialogBody: 'Usa el slot de label cuando la etiqueta del switch necesita contenido inline mas rico, como links, contexto de ayuda o resumenes de politicas.',
      dialogClose: 'Cerrar',
      validationLabel: 'Habilitar notificaciones de produccion',
      validationButtonLabel: 'Continuar',
      validationMessage: 'Activa este switch antes de continuar.',
      validationIdleFeedback: 'Envia para validar la regla del switch.',
      validationSuccessFeedback: 'El formulario es valido. Listo para continuar.',
    },
  },
}