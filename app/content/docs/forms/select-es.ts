import type { DocsComponentPageContent } from '../types'

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
