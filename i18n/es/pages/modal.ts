import type { DocsComponentPageContent } from '~/types/docs'

export const dialogComponentContentEs: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Dialog',
    description: 'Documentación de Dialog en Nuvex UI con estado controlado, cierre, flujos persistentes, dimensiones, pantalla completa, manejo de foco y referencia API.',
  },
  hero: {
    title: 'Dialog',
    descriptionHtml:
      "El componente <code class='docs-inline-code'>EDialog</code> presenta contenido modal enfocado sobre la aplicación, coordina su overlay y orden de capas, bloquea el scroll de fondo y administra el foco de teclado. Compón su slot default con cards, formularios o contenido específico de la tarea mientras <code class='docs-inline-code'>v-model</code> permanece como fuente de verdad para la visibilidad.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Uso',
      descriptionHtml:
        "Abre y cierra el dialog mediante <code class='docs-inline-code'>v-model</code> y configura las props comunes del panel y del foco. El activador pertenece a la vista que llama al dialog, por lo que su manejador de clic actualiza el mismo estado controlado.",
    },
    {
      key: 'dismissal-and-persistence',
      title: 'Cierre y persistencia',
      descriptionHtml:
        "Un dialog estándar se cierra mediante una acción explícita, <code class='docs-inline-code'>Escape</code> o interacción exterior. Activa <code class='docs-inline-code'>persistent</code> cuando el usuario deba completar o cancelar deliberadamente una decisión; el intento de cierre reproduce feedback en lugar de cambiar el modelo.",
    },
    {
      key: 'visual-variants',
      title: 'Dimensiones y superficie',
      descriptionHtml:
        "Limita tareas enfocadas con <code class='docs-inline-code'>maxWidth</code>, usa <code class='docs-inline-code'>fluid</code> para ocupar el ancho disponible y aplica una <code class='docs-inline-code'>elevation</code> del framework al panel. El contenido largo hace scroll dentro del dialog mientras el overlay mantiene bloqueado el documento.",
    },
    {
      key: 'fullscreen',
      title: 'Dialogs a pantalla completa',
      descriptionHtml:
        "Usa <code class='docs-inline-code'>fullscreen</code> para tareas inmersivas o que requieren mucho espacio. El modo elimina márgenes y radio del panel, ocupa el viewport y tiene prioridad sobre <code class='docs-inline-code'>maxWidth</code>.",
    },
    {
      key: 'composition-patterns',
      title: 'Patrones de composición',
      descriptionHtml:
        "El slot default acepta cualquier estructura específica de la tarea. Mantén título, contenido de apoyo y acciones en un orden claro; los formularios deben exponer una acción principal de envío y una forma distinta de cancelar o cerrar.",
    },
    {
      key: 'accessibility',
      title: 'Foco y accesibilidad',
      descriptionHtml:
        "El contenedor expone semántica de dialog, atrapa <code class='docs-inline-code'>Tab</code> dentro del panel activo, enfoca el dialog al abrir y restaura el foco previo al cerrar. Proporciona un título visible y una salida explícita, especialmente al activar <code class='docs-inline-code'>persistent</code>.",
    },
    {
      key: 'props',
      title: 'Referencia API',
      description: 'Consulta las props públicas verificadas de EDialog. Su evento, slot default y método close expuesto se resumen después de la tabla.',
    },
  ],
  labels: {
    controls: [
      { key: 'maxWidth', label: 'ancho máximo' },
      { key: 'elevation', label: 'elevación' },
      { key: 'persistent', label: 'persistent' },
      { key: 'fluid', label: 'fluid' },
      { key: 'autoFocus', label: 'enfoque automático' },
      { key: 'restoreFocus', label: 'restaurar foco' },
    ],
    dialogText: {
      openDialog: 'Abrir dialog',
      close: 'Cerrar',
      cancel: 'Cancelar',
      continue: 'Continuar',
      save: 'Guardar cambios',
      basicTitle: 'Actualización del workspace',
      basicBody: 'Revisa la configuración del dialog y ciérralo cuando completes la tarea.',
      standardDialog: 'Dialog estándar',
      persistentDialog: 'Dialog persistente',
      dismissalTitle: 'Confirmar publicación',
      dismissalBody: 'Una decisión persistente permanece abierta hasta que eliges una de sus acciones explícitas.',
      compactDialog: 'Dialog compacto',
      fluidDialog: 'Dialog fluido',
      sizingTitle: 'Vista previa de superficie',
      sizingBody: 'El ancho y la elevación del panel se adaptan a la tarea sin cambiar el comportamiento modal.',
      openFullscreen: 'Abrir dialog a pantalla completa',
      fullscreenTitle: 'Editar notas del release',
      fullscreenBody: 'El modo de pantalla completa proporciona todo el viewport para trabajo largo y estructurado.',
      formTitle: 'Invitar colaborador',
      formBody: 'Recopila datos enfocados y mantén la acción principal cerca de los campos que envía.',
      nameLabel: 'Nombre',
      emailLabel: 'Correo electrónico',
      openForm: 'Abrir formulario',
      openAccessible: 'Abrir dialog accesible',
      accessibilityTitle: 'Revisión por teclado',
      accessibilityBody: 'Usa Tab y Shift+Tab para moverte entre acciones. Escape cierra este dialog no persistente.',
      focusHint: 'Al cerrar, el foco regresa al botón que abrió el dialog.',
      apiDialog: 'Props de EDialog',
      apiDetailsTitle: 'Evento, slot y método expuesto',
      apiDetailsBody: 'EDialog emite update:modelValue, renderiza contenido mediante su slot default y expone close(force?). close() respeta persistent; close(true) fuerza el cierre.',
    },
  },
}

export const modalPagesEs = {
  dialog: dialogComponentContentEs,
} as const

export default modalPagesEs