import type { DocsComponentPageContent } from '~/types/docs'

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
        'Compara la presentacion default, outlined, tonal, retain-color, activa, disabled y readonly para mantener clara la intencion semantica en formularios densos.',
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
        tonal: 'Tonal',
        retainColor: 'Retain color',
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

export const selectComponentContentEs: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Select',
    description: 'Documentacion del componente Select de Nuvex UI con playground, mapeo de items, chips, busqueda, carga asincrona y props.',
  },
  hero: {
    title: 'Select',
    descriptionHtml:
      "El componente <code class='green--text mx-2 title'>e-select</code> resuelve seleccion simple y multiple con soporte para items primitivos u objetos, autocomplete opcional, chips, estado de carga y render personalizado por slots.<br><br>Usa esta pagina para comparar patrones de configuracion rapido, validar contratos de mapeo objeto/valor y construir flujos de formulario listos para produccion con feedback claro.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Uso',
      description:
        'Usa este playground base para configurar Select en contexto: color, outlined, clearable, readonly, disabled, multiple, chips y autocomplete desde un solo panel de control.',
    },
    {
      key: 'item-mapping',
      title: 'Mapeo de items',
      description:
        'Mapea colecciones de objetos con item-text e item-value, y compara return-object activado/desactivado para elegir el contrato de modelo correcto en formularios y APIs.',
    },
    {
      key: 'visual-variants',
      title: 'Variantes visuales',
      description:
        'Compara variantes default y outlined en estados interactivo, readonly y disabled para definir jerarquia y legibilidad en formularios reales.',
    },
    {
      key: 'multiple-and-chips',
      title: 'Multiple y chips',
      description:
        'Usa seleccion multiple para entradas tipo tags y modo chip cuando necesitas que los valores elegidos queden visibles y removibles de un vistazo.',
    },
    {
      key: 'autocomplete-and-search',
      title: 'Autocomplete y busqueda',
      description:
        'Controla la busqueda con update:search y listas filtradas para manejar muchos items sin romper el flujo de teclado.',
    },
    {
      key: 'slots',
      title: 'Slots nombrados',
      descriptionHtml:
        "Personaliza la lista y el valor seleccionado con los slots <code class='ma-2 green--text'>item</code> y <code class='ma-2 green--text'>selection</code> para renderizar metadatos y contexto adicional.",
    },
    {
      key: 'async-loading',
      title: 'Carga asincrona',
      description:
        'Usa loading con hidratacion remota de items para mantener feedback explicito mientras llegan los datos.',
    },
    {
      key: 'validation',
      title: 'Validacion',
      description:
        'Valida formularios con Select usando reglas y control del estado de envio para mantener acciones predecibles.',
    },
    {
      key: 'props',
      title: 'Props',
      description: 'Usa la tabla de API como fuente de verdad para props soportadas, tipos permitidos, defaults y notas de comportamiento.',
    },
  ],
  labels: {
    controls: [
      { key: 'color', label: 'color' },
      { key: 'outlined', label: 'outlined' },
      { key: 'disabled', label: 'disabled' },
      { key: 'readonly', label: 'readonly' },
      { key: 'clearable', label: 'clearable' },
      { key: 'multiple', label: 'multiple' },
      { key: 'chip', label: 'chip' },
      { key: 'autocomplete', label: 'autocomplete' },
      { key: 'returnObject', label: 'returnObject' },
    ],
    integrationText: {
      form: {
        submit: 'Crear ticket',
        idle: 'Completa campos obligatorios para continuar',
        submitting: 'Creando ticket...',
        success: 'Ticket creado correctamente',
        canceled: 'Formulario reiniciado',
        cardTitle: 'Ticket de soporte',
        cardSubtitle: 'Canaliza incidencia y define prioridad',
      },
    },
  },
}

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

export const textFieldComponentContentEs: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Textfield',
    description:
      'Documentación del componente Textfield de Nuvex UI con playground, variantes y props.',
  },
  hero: {
    title: 'Textfield',
    descriptionHtml:
      "El componente <code class='green--text mx-2 title'>e-text-field</code> es el input base para formularios y captura de datos estructurados en Nuvex UI. Soporta variantes visuales, iconos internos, prefijos/sufijos, comportamiento de etiqueta y estados clave como <code class='green--text mx-1 title'>readonly</code>, <code class='green--text mx-1 title'>disabled</code> y <code class='green--text mx-1 title'>clearable</code>.<br><br>Usa esta página para comparar patrones de interacción rápidamente, componer inputs más ricos con slots nombrados y aplicar reglas de validación que mantengan formularios claros, accionables y listos para producción.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Uso',
      description:
        'Usa este playground base para configurar el Text Field en contexto: ajusta color, outlined, clearable, counter/limit, readonly, disabled y retain-color desde un solo panel de control.',
    },
    {
      key: 'icons',
      title: 'Íconos',
      descriptionHtml:
        "Compara <code class='ma-2 green--text'>prependIcon</code> y <code class='ma-2 green--text'>appendIcon</code> con <code class='ma-2 green--text'>prependInnerIcon</code> y <code class='ma-2 green--text'>appendInnerIcon</code> en campos filled y outlined para elegir el peso visual correcto en contexto, acciones y escaneo.",
    },
    {
      key: 'visual-variants',
      title: 'Variantes visuales',
      description:
        'Compara campos filled y outlined en estados interactivo, readonly y disabled, y evalúa el comportamiento de retain-color y floating-label para definir jerarquía y legibilidad en formularios reales.',
    },
    {
      key: 'slots',
      title: 'Slots nombrados',
      descriptionHtml:
        "Compone inputs orientados a tareas con <code class='ma-2 green--text'>prepend</code>, <code class='ma-2 green--text'>prepend-inner</code>, <code class='ma-2 green--text'>append-inner</code> y <code class='ma-2 green--text'>append</code> para incluir contexto, acciones rápidas y controles secundarios sin perder claridad.",
    },
    {
      key: 'prepend-append-icons',
      title: 'Prefijos y sufijos',
      descriptionHtml:
        "Usa <code class='ma-2 green--text'>prefix</code> y <code class='ma-2 green--text'>suffix</code> para fijar tokens como símbolos monetarios, IDs y unidades; así los usuarios entienden el formato esperado de inmediato y cometen menos errores de entrada.",
    },
    {
      key: 'validation',
      title: 'Validación',
      descriptionHtml:
        "Construye flujos de validación de extremo a extremo con reglas, visibilidad de errores y control del estado de envío. Este ejemplo usa un card de registro completo para mostrar cómo reglas de campo y disponibilidad de acciones trabajan juntas en formularios de producción.",
    },
    {
      key: 'props',
      title: 'Props',
      description:
        'Usa la tabla de API como fuente de verdad para props, tipos permitidos, valores por defecto y notas de comportamiento al implementar variantes de Text Field en producción.',
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
      { key: 'required', label: 'required' },
    ],
    integrationText: {
      form: {
        submit: 'Finalizar registro',
        idle: 'Completa todos los campos obligatorios para continuar',
        submitting: 'Enviando registro...',
        success: 'Registro completado correctamente',
        canceled: 'Formulario de registro reiniciado',
        firstNameLabel: 'Nombre',
        firstNamePlaceholder: 'Ana',
        lastNameLabel: 'Apellido',
        lastNamePlaceholder: 'Pérez',
        emailLabel: 'Correo electrónico',
        emailPlaceholder: 'nombre@empresa.com',
        passwordLabel: 'Contraseña',
        passwordPlaceholder: 'Mínimo 6 caracteres',
        cardTitle: 'Formulario de registro',
        cardSubtitle: 'Datos básicos',
      },
    },
  },
}

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

export const inputPages = {
  checkbox: checkboxComponentContentEs,
  radio: radioComponentContentEs,
  select: selectComponentContentEs,
  switch: switchComponentContentEs,
  textField: textFieldComponentContentEs,
  textarea: textareaComponentContentEs,
} as const

export default inputPages