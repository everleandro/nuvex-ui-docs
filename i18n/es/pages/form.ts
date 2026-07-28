import type { DocsComponentPageContent } from '~/types/docs'

export const formComponentContentEs: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Form',
    description:
      'Documentacion del componente Form de Nuvex UI con herencia de comportamiento para fields, layout tipo tabla, composicion con form column, ciclo de validacion, metodos expuestos y props.',
  },
  hero: {
    title: 'Form',
    descriptionHtml:
      "El componente <code class='docs-inline-code'>e-form</code> centraliza el comportamiento de los fields que viven dentro de el. Puede propagar configuracion compartida como <code class='docs-inline-code'>outlined</code>, <code class='docs-inline-code'>disabled</code>, <code class='docs-inline-code'>readonly</code> y <code class='docs-inline-code'>retainColor</code>, controlar la validacion al enviar, exponer metodos de validacion y activar el modo de layout <code class='docs-inline-code'>table</code> cuando el formulario necesita una estructura mas fuerte.<br><br>Esta pagina muestra como Form toma el control de sus hijos desde un solo punto para unificar estados, apariencia y validacion, y como <code class='docs-inline-code'>e-form-column</code> completa esa capa de orquestacion cuando el flujo necesita acciones y estructura adicional.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Uso',
      descriptionHtml:
        "Usa este playground para ver como un solo <code class='docs-inline-code'>Form</code> aplica comportamiento compartido sobre varios fields al mismo tiempo. El preview muestra el efecto de <code class='docs-inline-code'>outlined</code>, <code class='docs-inline-code'>disabled</code>, <code class='docs-inline-code'>readonly</code> y <code class='docs-inline-code'>retainColor</code> sobre el mismo bloque de inputs, mientras el selector de <code class='docs-inline-code'>color</code> actualiza la presentacion del conjunto.",
    },
    {
      key: 'inherited-behavior',
      title: 'Comportamiento heredado por hijos',
      descriptionHtml:
        "Este preview muestra como <code class='docs-inline-code'>Form</code> empuja configuracion compartida hacia fields compatibles sin repetir la misma prop en cada hijo. Aqui el contenedor aplica <code class='docs-inline-code'>labelBehavior</code> con valor <code class='docs-inline-code'>floating</code> y <code class='docs-inline-code'>outlined</code> una sola vez para mantener el mismo tratamiento visual en textfields, selects y textareas dentro del bloque.",
    },
    {
      key: 'table-layout',
      title: 'Layout tipo tabla',
      descriptionHtml:
        "Este preview muestra a <code class='docs-inline-code'>Form</code> en modo <code class='docs-inline-code'>table</code> para presentar un bloque de datos operativos con una estructura mas rigida. Sobre la misma matriz se renderizan <code class='docs-inline-code'>ticketId</code>, <code class='docs-inline-code'>assignee</code>, <code class='docs-inline-code'>environment</code> y <code class='docs-inline-code'>requiresApproval</code>, mientras el contenedor queda preparado para ajustar detalles visuales como <code class='docs-inline-code'>tableLineColor</code>, <code class='docs-inline-code'>tableCellBackgroundColor</code>, <code class='docs-inline-code'>tableFieldColor</code> y <code class='docs-inline-code'>tableLineOpacity</code>.",
    },
    {
      key: 'form-column',
      title: 'Form column y acciones',
      descriptionHtml:
        "Este preview muestra como <code class='docs-inline-code'>e-form-column</code> reserva una fila propia dentro de <code class='docs-inline-code'>Form</code> para alinear acciones sin romper la grilla del formulario. Despues de los campos <code class='docs-inline-code'>Workflow name</code> y <code class='docs-inline-code'>Owner</code>, la columna empuja el CTA principal hacia el extremo derecho y mantiene la accion integrada en el mismo flujo visual del bloque.",
    },
    {
      key: 'validation-lifecycle',
      title: 'Ciclo de validacion',
      descriptionHtml:
        "Este preview muestra un flujo de validacion gobernado por <code class='docs-inline-code'>Form</code> al momento del submit. El contenedor activa <code class='docs-inline-code'>validate-on-submit</code> y <code class='docs-inline-code'>focus-first-invalid</code>, evalua reglas sobre <code class='docs-inline-code'>subject</code>, <code class='docs-inline-code'>message</code> y <code class='docs-inline-code'>policyAccepted</code>, y actualiza el feedback superior segun si se dispara <code class='docs-inline-code'>submit</code> o <code class='docs-inline-code'>submit-invalid</code>.",
    },
    {
      key: 'exposed-methods',
      title: 'Metodos expuestos',
      descriptionHtml:
        "Este preview muestra como controlar una instancia de <code class='docs-inline-code'>Form</code> desde acciones explicitas fuera del submit nativo. Los botones disparan <code class='docs-inline-code'>validate()</code> para inspeccionar si el bloque es valido y <code class='docs-inline-code'>resetValidation()</code> para limpiar los mensajes de error, mientras el texto superior resume el ultimo resultado ejecutado.",
    },
    {
      key: 'props',
      title: 'Props',
      description:
        'Usa la tabla de API como fuente de verdad para props aceptadas, valores por defecto, eventos emitidos y notas de comportamiento.',
    },
  ],
  labels: {
    controls: [
      { key: 'color', label: 'color' },
      { key: 'outlined', label: 'outlined' },
      { key: 'disabled', label: 'disabled' },
      { key: 'readonly', label: 'readonly' },
      { key: 'retainColor', label: 'retainColor' },
      { key: 'table', label: 'table' },
    ],
    formText: {
      usageCardTitle: 'Comportamiento compartido del formulario',
      usageCardSubtitle: 'Un padre controla multiples child fields',
      nameLabel: 'Nombre',
      emailLabel: 'Correo electronico',
      roleLabel: 'Rol',
      notesLabel: 'Notas',
      placeholderName: 'Ana Perez',
      placeholderEmail: 'nombre@empresa.com',
      roleItems: ['Admin', 'Editor', 'Viewer'],
    },
    tableText: {
      cardTitle: 'Formulario estructurado de aprobacion',
      cardSubtitle: 'Layout tipo tabla para inputs de negocio densos',
      assigneeLabel: 'Responsable',
      environmentLabel: 'Ambiente',
      ticketLabel: 'Ticket ID',
      approvalLabel: 'Requiere aprobacion',
      lineColorLabel: 'tableLineColor',
      cellColorLabel: 'tableCellBackgroundColor',
      opacityLabel: 'tableLineOpacity',
    },
    columnText: {
      cardTitle: 'Layout de acciones con Form Column',
      cardSubtitle: 'Agrupa fields y acciones sin romper la alineacion',
      primaryAction: 'Guardar cambios',
      secondaryAction: 'Reiniciar',
      tertiaryAction: 'Validar solamente',
      helperTitle: 'Revisa antes de enviar',
      helperBody:
        'Usa Form Column cuando botones, resumenes o contenido de apoyo deban mantenerse alineados con el grid del formulario.',
    },
    validationText: {
      cardTitle: 'Flujo de validacion al enviar',
      cardSubtitle: 'Coordina la validacion desde el form padre',
      subjectLabel: 'Asunto',
      messageLabel: 'Mensaje',
      policyLabel: 'Revise la politica de release',
      submitLabel: 'Enviar formulario',
      invalidFeedback: 'La validacion bloqueo el envio. Revisa los fields resaltados.',
      validFeedback: 'El formulario es valido. Los handlers de submit pueden continuar.',
      idleFeedback: 'Envia el formulario para probar los eventos del ciclo de validacion.',
      requiredMessage: 'Este campo es obligatorio.',
      policyMessage: 'Debes confirmar la politica antes de continuar.',
    },
    methodsText: {
      cardTitle: 'Control programatico del formulario',
      cardSubtitle: 'Controla validacion y resets desde acciones explicitas',
      validateAction: 'Validate',
      resetAction: 'Reset',
      resetValidationAction: 'Reset validation',
      stateIdle: 'Elige una accion para inspeccionar el comportamiento de la instancia del form.',
      stateValid: 'validate() resolvio correctamente.',
      stateInvalid: 'validate() encontro fields invalidos.',
      stateReset: 'reset() limpio los valores del modelo.',
      stateResetValidation: 'resetValidation() limpio los mensajes de validacion.',
    },
  },
}

export const formPages = {
  form: formComponentContentEs,
} as const

export default formPages