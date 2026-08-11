import type { DocsComponentPageContent } from '~/types/docs'

export const tabsComponentContentEs: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Pestanas | Nuvex UI Docs',
    description: 'Documentacion de Tabs en Nuvex UI con seleccion, variantes visuales, alineacion, orientacion, paneles de contenido, teclado y referencia API.',
  },
  hero: {
    title: 'Tabs',
    descriptionHtml:
      "La suite Tabs de Nuvex UI combina <code class='docs-inline-code'>ETabGroup</code> y <code class='docs-inline-code'>ETab</code> para organizar vistas relacionadas mediante una seleccion activa. Componla con <code class='docs-inline-code'>EWindow</code> y <code class='docs-inline-code'>EWindowItem</code> cuando cada tab controle un panel de contenido con estado sincronizado y relaciones accesibles.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Uso',
      descriptionHtml:
        "Configura el valor activo y las principales props del grupo en el playground. Cada <code class='docs-inline-code'>ETab</code> tiene un valor estable, mientras el <code class='docs-inline-code'>v-model</code> compartido identifica la seleccion actual.",
    },
    {
      key: 'visual-variants',
      title: 'Variantes visuales',
      descriptionHtml:
        "Usa <code class='docs-inline-code'>color</code> e <code class='docs-inline-code'>inactiveColor</code> para establecer el contraste de seleccion, agrega <code class='docs-inline-code'>track</code> para una linea base persistente e incluye iconos cuando mejoren el reconocimiento.",
    },
    {
      key: 'alignment-and-growth',
      title: 'Alineacion y distribucion',
      descriptionHtml:
        "Define <code class='docs-inline-code'>tabAlign</code> para ubicar tabs compactos al inicio, centro o final. Activa <code class='docs-inline-code'>grow</code> cuando los tabs deban dividir el ancho disponible por igual.",
    },
    {
      key: 'orientation',
      title: 'Orientacion',
      descriptionHtml:
        "Los tabs son horizontales por defecto. Activa <code class='docs-inline-code'>vertical</code> para navegacion lateral; el indicador gira y el movimiento por teclado cambia de Izquierda y Derecha a Arriba y Abajo.",
    },
    {
      key: 'content-panels',
      title: 'Paneles de contenido',
      descriptionHtml:
        "Conecta los tabs con paneles <code class='docs-inline-code'>EWindowItem</code> mediante los mismos valores del modelo. Asigna el mismo <code class='docs-inline-code'>name</code> a <code class='docs-inline-code'>ETabGroup</code> y <code class='docs-inline-code'>EWindow</code> para generar IDs coincidentes entre tabs y paneles.",
    },
    {
      key: 'states-and-interactions',
      title: 'Estados e interaccion',
      descriptionHtml:
        "El modelo controla los estados activo e inactivo y puede actualizarse desde los tabs o desde acciones de la aplicacion. Cada tab hereda props de estado de Button como <code class='docs-inline-code'>disabled</code>.",
    },
    {
      key: 'slots-composition',
      title: 'Slots y composicion',
      descriptionHtml:
        "El slot default del grupo contiene la secuencia de tabs y el slot default de cada tab contiene su etiqueta. Los tabs tambien heredan el soporte de iconos de Button.",
    },
    {
      key: 'accessibility',
      title: 'Accesibilidad y teclado',
      descriptionHtml:
        "Los tabs exponen semantica tablist, tab y tabpanel con foco administrado. Los grupos horizontales soportan Izquierda y Derecha; los verticales soportan Arriba y Abajo. <code class='docs-inline-code'>Home</code> y <code class='docs-inline-code'>End</code> mueven al primer y ultimo tab.",
    },
    {
      key: 'props',
      title: 'Referencia API',
      description: 'Consulta las props publicas de ETabGroup y las props principales de ETab. Los eventos y slots se resumen despues de las tablas.',
    },
  ],
  labels: {
    controls: [
      { key: 'color', label: 'color activo' },
      { key: 'inactiveColor', label: 'color inactivo' },
      { key: 'tabAlign', label: 'alineacion de tabs' },
      { key: 'track', label: 'track' },
      { key: 'grow', label: 'grow' },
    ],
    tabsText: {
      overview: 'Resumen',
      activity: 'Actividad',
      settings: 'Configuracion',
      overviewBody: 'Revisa el resumen del workspace y la salud reciente del proyecto.',
      activityBody: 'Sigue las actualizaciones de las personas y proyectos con los que trabajas.',
      settingsBody: 'Administra preferencias del workspace y valores por defecto de notificaciones.',
      selectedValue: 'Tab seleccionado',
      defaultStyle: 'Default',
      trackedStyle: 'Con track',
      iconStyle: 'Con iconos',
      design: 'Diseno',
      documentation: 'Documentacion',
      releases: 'Releases',
      alignStart: 'Inicio',
      alignCenter: 'Centro',
      alignEnd: 'Final',
      foundation: 'Fundamentos',
      components: 'Componentes',
      utilities: 'Utilidades',
      foundationBody: 'Fundamentos de color, tipografia, espaciado y superficies.',
      componentsBody: 'Controles reutilizables y patrones de interaccion.',
      utilitiesBody: 'Helpers de layout y estilos para vistas de aplicacion.',
      profile: 'Perfil',
      security: 'Seguridad',
      billing: 'Facturacion',
      openSecurity: 'Abrir Seguridad',
      keyboardHint: 'Enfoca un tab y usa las flechas, Home o End.',
      workspaceAriaLabel: 'Secciones del workspace',
      apiGroup: 'Props de ETabGroup',
      apiTab: 'Props de ETab',
      eventsTitle: 'Eventos y slots',
      eventsBody: 'ETabGroup emite update:modelValue y expone el slot default. ETab emite click y expone los slots default y activator. Un activador personalizado debe conservar el rol tab, los atributos ARIA y el comportamiento de teclado.',
    },
  },
}

export const tabsPagesEs = {
  tabs: tabsComponentContentEs,
} as const

export default tabsPagesEs