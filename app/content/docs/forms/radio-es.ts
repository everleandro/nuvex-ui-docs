import type { DocsComponentPageContent } from '../types'

export const radioComponentContentEs: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Radio',
    description: 'Documentacion del componente Radio Group de Nuvex UI con uso interactivo, layouts row y column, variantes visuales, seleccion obligatoria, slots, validacion y props para ERadioGroup y ERadio.',
  },
  hero: {
    title: 'Radio',
    descriptionHtml:
      "Los componentes <code class='green--text mx-2 title'>e-radio-group</code> y <code class='green--text mx-2 title'>e-radio</code> resuelven seleccion exclusiva dentro del sistema compartido de field, incluyendo validacion, layout en fila o columna y comportamiento centralizado de color, disabled y readonly.<br><br>Usa esta pagina para validar flujos de seleccion agrupada antes de conectar canales de release, ambientes o preferencias a formularios de produccion.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Uso',
      description:
        'Usa este playground base para configurar el comportamiento del grupo en contexto: layout row, color, outlined, disabled, readonly, tonal y retain-color.',
    },
    {
      key: 'layout-and-direction',
      title: 'Layout y direccion',
      description:
        'Compara layouts en fila y columna para adaptarlos a la densidad, longitud de labels y espacio horizontal disponible.',
    },
    {
      key: 'visual-variants',
      title: 'Variantes visuales',
      description:
        'Compara estados default, outlined, tonal, retain-color, disabled y readonly para mantener clara la seleccion exclusiva en formularios densos.',
    },
    {
      key: 'mandatory-selection',
      title: 'Seleccion obligatoria',
      description:
        'Usa mandatory cuando el grupo debe resolverse siempre con una opcion valida, incluso si el modelo inicial llega vacio.',
    },
    {
      key: 'slots',
      title: 'Slots nombrados',
      descriptionHtml:
        "Usa el slot <code class='ma-2 green--text'>label</code> tanto en <code class='ma-2 green--text'>e-radio-group</code> como en <code class='ma-2 green--text'>e-radio</code> cuando el copy necesita contenido inline mas rico.",
    },
    {
      key: 'validation',
      title: 'Validacion',
      description:
        'Valida flujos de seleccion requerida con feedback explicito de submit antes de continuar un paso critico de configuracion.',
    },
    {
      key: 'props',
      title: 'Props',
      description: 'Usa la tabla de API como fuente de verdad para props de ERadioGroup y ERadio, defaults y comportamiento heredado del field.',
    },
  ],
  labels: {
    controls: [
      { key: 'color', label: 'color' },
      { key: 'row', label: 'row' },
      { key: 'outlined', label: 'outlined' },
      { key: 'disabled', label: 'disabled' },
      { key: 'readonly', label: 'readonly' },
      { key: 'tonal', label: 'tonal' },
      { key: 'retainColor', label: 'retainColor' },
    ],
    radioText: {
      usageGroupLabel: 'Metodo de contacto',
      usageDetail: 'Elige el canal preferido para actualizaciones de release.',
      usageOptions: {
        email: 'Email',
        phone: 'Telefono',
        sms: 'SMS',
      },
      layoutLabels: {
        row: 'row',
        column: 'column',
      },
      layoutGroupLabels: {
        row: 'Layout en fila',
        column: 'Layout en columna',
      },
      layoutDetail: 'Usa fila para sets compactos de opciones y columna para labels mas largos.',
      layoutOptions: {
        staging: 'Staging',
        production: 'Production',
        canary: 'Canary',
      },
      visualStateLabels: {
        default: 'Default',
        outlined: 'Outlined',
        tonal: 'Tonal',
        retainColor: 'Retain color',
        disabled: 'Deshabilitado',
        readonly: 'Solo lectura',
      },
      stateOptions: {
        auto: 'Automatico',
        manual: 'Manual',
      },
      mandatoryGroupLabel: 'Nivel de membresia',
      mandatoryDetail: 'Mandatory selecciona la primera opcion disponible cuando no existe un valor valido.',
      mandatoryOptions: {
        free: 'Free',
        pro: 'Pro',
        enterprise: 'Enterprise',
      },
      resetMandatoryButton: 'Reiniciar demo',
      currentModelValue: 'Valor actual del modelo',
      slotGroupLead: 'Revisa la',
      slotGroupLinkLabel: 'politica de releases',
      slotOptionLabel: 'Stable (recomendado)',
      slotDialogTitle: 'Politica de releases',
      slotDialogBody: 'Usa los slots de label cuando la etiqueta del grupo o de una opcion individual necesita contenido inline mas rico, como links, contexto de ayuda o recomendaciones mas fuertes.',
      slotDialogClose: 'Cerrar',
      validationGroupLabel: 'Canal de release',
      validationOptions: {
        stable: 'Stable',
        beta: 'Beta',
        nightly: 'Nightly',
      },
      validationButtonLabel: 'Guardar preferencias',
      validationMessage: 'Selecciona un canal de release antes de continuar.',
      validationIdleFeedback: 'Envia para validar la regla del grupo de radios.',
      validationSuccessFeedback: 'El formulario es valido. Listo para continuar.',
    },
  },
}