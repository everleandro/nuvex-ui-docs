import type { DocsComponentPageContent } from '~/types/docs'

export const menuComponentContentEs: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Menu',
    description: 'Documentacion de Menu en Nuvex UI con activadores, posicionamiento, tamano, estado controlado, composicion, anidacion, accesibilidad y referencia API.',
  },
  hero: {
    title: 'Menu',
    descriptionHtml:
      "El componente <code class='docs-inline-code'>EMenu</code> ancla contenido contextual a un activador y coordina su posicion, estado de apertura, cierre, foco y capas. Componlo con <code class='docs-inline-code'>EList</code> para menus de acciones o proporciona contenido interactivo personalizado cuando el overlay deba permanecer abierto.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Uso',
      descriptionHtml:
        "Usa el playground para configurar las decisiones mas comunes del menu. El slot activador propaga los bindings de clic, teclado y ARIA mediante <code class='docs-inline-code'>attrs</code>, mientras <code class='docs-inline-code'>v-model</code> expone el estado de apertura actual.",
    },
    {
      key: 'activator-patterns',
      title: 'Patrones de activador',
      descriptionHtml:
        "Prefiere el slot nombrado <code class='docs-inline-code'>activator</code> para mantener juntos el activador y el menu. Usa la prop <code class='docs-inline-code'>activator</code> con un ref de elemento cuando otro componente sea propietario del activador; los selectores estan disponibles para objetivos DOM estables.",
    },
    {
      key: 'placement-offsets',
      title: 'Posicion y offsets',
      descriptionHtml:
        "Define el borde preferido con <code class='docs-inline-code'>origin</code> y luego aplica <code class='docs-inline-code'>offsetX</code> y <code class='docs-inline-code'>offsetY</code>. El menu puede cambiar al lado con mas espacio, mientras <code class='docs-inline-code'>checkOffset</code> mantiene la superficie dentro del viewport.",
    },
    {
      key: 'sizing-surface',
      title: 'Tamano y superficie',
      descriptionHtml:
        "Por defecto, el menu acomoda tanto su activador como su contenido. Usa <code class='docs-inline-code'>fitContent</code> para el ancho intrinseco, <code class='docs-inline-code'>fullWidth</code> para igualar el activador o dimensiones explicitas cuando el diseno requiera una superficie fija.",
    },
    {
      key: 'transitions',
      title: 'Transiciones',
      descriptionHtml:
        "Los menus usan la transicion <code class='docs-inline-code'>fade</code> por defecto, por lo que puedes omitir la prop. Define <code class='docs-inline-code'>transition=\"scale\"</code> cuando la superficie deba crecer desde su origen al aparecer.",
    },
    {
      key: 'open-close-states',
      title: 'Estados de apertura, cierre y deshabilitado',
      descriptionHtml:
        "Controla la visibilidad con <code class='docs-inline-code'>v-model</code>. Configura el cierre por seleccion con <code class='docs-inline-code'>closeOnContentClick</code>, impide la apertura con <code class='docs-inline-code'>disableMenu</code> o llama los metodos expuestos para flujos dirigidos por la aplicacion.",
    },
    {
      key: 'composition-patterns',
      title: 'Patrones de composicion',
      descriptionHtml:
        "Compone <code class='docs-inline-code'>EMenu</code> con <code class='docs-inline-code'>EList</code> para acciones compactas. Para filtros, pickers u otro contenido de varios pasos, manten el overlay abierto y cierralo explicitamente al completar la tarea.",
    },
    {
      key: 'nested-menus',
      title: 'Menus anidados y capas',
      descriptionHtml:
        "Los menus anidados forman una rama de overlays compartida. Cada hijo recibe la siguiente capa, la interaccion exterior cierra las ramas no relacionadas y <code class='docs-inline-code'>Escape</code> cierra primero el menu abierto superior.",
    },
    {
      key: 'accessibility',
      title: 'Accesibilidad y teclado',
      descriptionHtml:
        "Los bindings del activador sincronizan <code class='docs-inline-code'>aria-haspopup</code>, <code class='docs-inline-code'>aria-expanded</code>, <code class='docs-inline-code'>aria-controls</code> y el estado deshabilitado. Enter, Space o Flecha abajo abren el menu; Escape cierra la capa superior y el foco regresa al activador.",
    },
    {
      key: 'props',
      title: 'Referencia API',
      description: 'Consulta las props publicas verificadas de EMenu. Los eventos, slots y metodos expuestos se resumen despues de la tabla.',
    },
  ],
  labels: {
    controls: [
      { key: 'origin', label: 'origin' },
      { key: 'color', label: 'color' },
      { key: 'elevation', label: 'elevation' },
      { key: 'fitContent', label: 'ajustar al contenido' },
      { key: 'fullWidth', label: 'ancho del activador' },
      { key: 'closeOnContentClick', label: 'cerrar al hacer clic en contenido' },
      { key: 'checkOffset', label: 'comprobar limite del viewport' },
      { key: 'disableMenu', label: 'deshabilitar menu' },
    ],
    menuText: {
      openActions: 'Abrir acciones',
      edit: 'Editar',
      duplicate: 'Duplicar',
      archive: 'Archivar',
      slotActivator: 'Activador por slot',
      externalActivator: 'Activador externo',
      leftAligned: 'Abajo a la izquierda',
      rightAligned: 'Abajo a la derecha',
      compact: 'Contenido compacto',
      matchActivator: 'Igualar activador',
      fixedWidth: 'Ancho fijo',
      defaultFade: 'Fade (por defecto)',
      scaleTransition: 'Scale',
      controlledMenu: 'Menu controlado',
      openMenu: 'Abrir menu',
      closeMenu: 'Cerrar menu',
      currentState: 'Estado actual',
      opened: 'abierto',
      closed: 'cerrado',
      filters: 'Filtros',
      showArchived: 'Mostrar archivados',
      includeDrafts: 'Incluir borradores',
      apply: 'Aplicar',
      moreActions: 'Mas acciones',
      moveTo: 'Mover a',
      project: 'Proyecto',
      personal: 'Personal',
      keyboardMenu: 'Menu por teclado',
      keyboardHint: 'Enfoca el activador y presiona Enter, Space o Flecha abajo. Presiona Escape para cerrar.',
      apiEvents: 'Eventos, slots y metodos',
      apiEventsBody: 'EMenu emite update:modelValue. Los slots publicos son activator y default. El componente expone openMenu() y closeMenu().',
    },
  },
}

export const menuPagesEs = {
  menu: menuComponentContentEs,
} as const

export default menuPagesEs