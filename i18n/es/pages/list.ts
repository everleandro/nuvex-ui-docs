import type { DocsComponentPageContent } from '~/types/docs'

export const listComponentContentEs: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Lista | Nuvex UI Docs',
    description: 'Documentacion de List en Nuvex UI con seleccion, contenido de items, navegacion, grupos, slots, teclado y referencia API.',
  },
  hero: {
    title: 'List',
    descriptionHtml:
      "La suite List de Nuvex UI combina <code class='docs-inline-code'>EList</code>, <code class='docs-inline-code'>EListItem</code> y <code class='docs-inline-code'>EListGroup</code> para renderizar colecciones estructuradas con seleccion, enlaces de router, contenido enriquecido y grupos expandibles anidados. El contrato compartido de color, tamano, estados y teclado mantiene tanto listas simples como arboles completos de navegacion dentro del framework.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Uso',
      descriptionHtml:
        "Configura un <code class='docs-inline-code'>EList</code> seleccionable y observa como sus items heredan las props del contenedor. El valor actual de <code class='docs-inline-code'>v-model</code> identifica la fila activa.",
    },
    {
      key: 'item-content',
      title: 'Contenido del item',
      descriptionHtml:
        "Construye cada fila con <code class='docs-inline-code'>title</code>, <code class='docs-inline-code'>subtitle</code>, iconos o avatares. El item mantiene alineadas las regiones inicial y final mientras el contenido central se trunca de forma segura.",
    },
    {
      key: 'visual-variants',
      title: 'Variantes visuales',
      descriptionHtml:
        "Combina <code class='docs-inline-code'>outlined</code>, <code class='docs-inline-code'>inset</code>, <code class='docs-inline-code'>dense</code>, elevacion y la escala compartida de tamanos para adaptar la densidad y la superficie de la lista.",
    },
    {
      key: 'selection-and-states',
      title: 'Seleccion y estados',
      descriptionHtml:
        "Un <code class='docs-inline-code'>v-model</code> escalar activa seleccion simple; un arreglo activa seleccion multiple. Los estados activo, deshabilitado y de foco permanecen sincronizados con el modelo y el teclado.",
    },
    {
      key: 'navigation-links',
      title: 'Enlaces de navegacion',
      descriptionHtml:
        "Pasa <code class='docs-inline-code'>to</code> para renderizar items integrados con el router. La ruta funciona como valor de respaldo y las clases de ruta activa usan el color activo de la lista.",
    },
    {
      key: 'groups-and-nesting',
      title: 'Grupos y anidacion',
      descriptionHtml:
        "Compone ramas expandibles con <code class='docs-inline-code'>EListGroup</code> y propaga los <code class='docs-inline-code'>attrs</code> del activador. Los valores estables producen rutas jerarquicas controlables con <code class='docs-inline-code'>v-model:group</code>.",
    },
    {
      key: 'slots-composition',
      title: 'Slots y composicion',
      descriptionHtml:
        "Usa los slots <code class='docs-inline-code'>prepend</code> y <code class='docs-inline-code'>append</code> para medios y acciones personalizados sin perder el layout ni la superficie interactiva del item.",
    },
    {
      key: 'accessibility',
      title: 'Accesibilidad y teclado',
      descriptionHtml:
        "Las listas seleccionables exponen semantica listbox y foco administrado. Los items soportan flechas, <code class='docs-inline-code'>Home</code>, <code class='docs-inline-code'>End</code>, <code class='docs-inline-code'>Enter</code> y <code class='docs-inline-code'>Space</code>; los grupos tambien permiten navegar entre niveles horizontalmente.",
    },
    {
      key: 'props',
      title: 'Referencia API',
      description: 'Consulta las props publicas de cada componente de la suite List. Los eventos y slots nombrados se resumen despues de las tablas.',
    },
  ],
  labels: {
    controls: [
      { key: 'color', label: 'color' },
      { key: 'activeColor', label: 'color activo' },
      { key: 'size', label: 'tamano' },
      { key: 'outlined', label: 'outlined' },
      { key: 'inset', label: 'inset' },
      { key: 'disabled', label: 'disabled' },
    ],
    listText: {
      inbox: 'Bandeja de entrada',
      inboxSubtitle: '12 mensajes sin leer',
      drafts: 'Borradores',
      draftsSubtitle: '3 elementos pendientes de revision',
      archive: 'Archivo',
      archiveSubtitle: 'Conversaciones completadas',
      selectedValue: 'Valor seleccionado',
      profile: 'Perfil',
      profileSubtitle: 'Datos y preferencias de la cuenta',
      team: 'Equipo de diseno',
      teamSubtitle: '8 colaboradores activos',
      notifications: 'Notificaciones',
      notificationsSubtitle: 'Preferencias de correo y push',
      defaultVariant: 'Default',
      defaultVariantSubtitle: 'Espaciado y superficie base',
      outlinedVariant: 'Outlined e inset',
      outlinedVariantSubtitle: 'Tamano large heredado',
      denseVariant: 'Dense',
      denseVariantSubtitle: 'Ritmo vertical compacto',
      singleSelection: 'Seleccion simple',
      multipleSelection: 'Seleccion multiple',
      available: 'Disponible',
      disabledItem: 'Item deshabilitado',
      home: 'Resumen',
      listDocs: 'Documentacion de List',
      buttonDocs: 'Documentacion de Button',
      components: 'Componentes',
      navigation: 'Navegacion',
      list: 'List',
      tabs: 'Tabs',
      settings: 'Configuracion',
      account: 'Cuenta',
      security: 'Seguridad',
      member: 'Jordan Lee',
      memberSubtitle: 'Disenador de producto',
      moreActions: 'Mas acciones',
      keyboardHint: 'Enfoca un item y usa Flecha arriba, Flecha abajo, Home, End, Enter o Space.',
      foldersAriaLabel: 'Carpetas de mensajes',
      apiList: 'Props de EList',
      apiItem: 'Props de EListItem',
      apiGroup: 'Props de EListGroup',
      eventsTitle: 'Eventos y slots',
      eventsBody: 'EList emite update:modelValue y update:group. EListItem emite click:item. Los slots publicos son default en EList; default, prepend y append en EListItem; y activator y default en EListGroup.',
    },
  },
}

export const listPagesEs = {
  list: listComponentContentEs,
} as const

export default listPagesEs