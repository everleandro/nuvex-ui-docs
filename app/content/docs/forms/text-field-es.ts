import type { DocsComponentPageContent } from "../types";

export const textFieldComponentContentEs: DocsComponentPageContent = {
  kind: "component",
  seo: {
    title: "Textfield",
    description:
      "Documentación del componente Textfield de Nuvex UI con playground, variantes y props.",
  },
  hero: {
    title: "Textfield",
    descriptionHtml:
      "El componente <code class='green--text mx-2 title'>e-text-field</code> es el input base para formularios y captura de datos estructurados en Nuvex UI. Soporta variantes visuales, iconos internos, prefijos/sufijos, comportamiento de etiqueta y estados clave como <code class='green--text mx-1 title'>readonly</code>, <code class='green--text mx-1 title'>disabled</code> y <code class='green--text mx-1 title'>clearable</code>.<br><br>Usa esta página para comparar patrones de interacción rápidamente, componer inputs más ricos con slots nombrados y aplicar reglas de validación que mantengan formularios claros, accionables y listos para producción.",
  },
  sections: [
    {
      key: "usage",
      title: "Uso",
      description:
        "Usa este playground base para configurar el Text Field en contexto: ajusta color, outlined, clearable, counter/limit, readonly, disabled y retain-color desde un solo panel de control.",
    },
    {
      key: "icons",
      title: "Íconos",
      descriptionHtml:
        "Compara <code class='ma-2 green--text'>prependIcon</code> y <code class='ma-2 green--text'>appendIcon</code> con <code class='ma-2 green--text'>prependInnerIcon</code> y <code class='ma-2 green--text'>appendInnerIcon</code> en campos filled y outlined para elegir el peso visual correcto en contexto, acciones y escaneo.",
    },
    {
      key: "visual-variants",
      title: "Variantes visuales",
      description:
        "Compara campos filled y outlined en estados interactivo, readonly y disabled, y evalúa el comportamiento de retain-color y floating-label para definir jerarquía y legibilidad en formularios reales.",
    },
    {
      key: "slots",
      title: "Slots nombrados",
      descriptionHtml:
        "Compone inputs orientados a tareas con <code class='ma-2 green--text'>prepend</code>, <code class='ma-2 green--text'>prepend-inner</code>, <code class='ma-2 green--text'>append-inner</code> y <code class='ma-2 green--text'>append</code> para incluir contexto, acciones rápidas y controles secundarios sin perder claridad.",
    },
    {
      key: "prepend-append-icons",
      title: "Prefijos y sufijos",
      descriptionHtml:
        "Usa <code class='ma-2 green--text'>prefix</code> y <code class='ma-2 green--text'>suffix</code> para fijar tokens como símbolos monetarios, IDs y unidades; así los usuarios entienden el formato esperado de inmediato y cometen menos errores de entrada.",
    },
    {
      key: "validation",
      title: "Validación",
      descriptionHtml:
        "Construye flujos de validación de extremo a extremo con reglas, visibilidad de errores y control del estado de envío. Este ejemplo usa un card de registro completo para mostrar cómo reglas de campo y disponibilidad de acciones trabajan juntas en formularios de producción.",
    },
    {
      key: "props",
      title: "Props",
      description:
        "Usa la tabla de API como fuente de verdad para props, tipos permitidos, valores por defecto y notas de comportamiento al implementar variantes de Text Field en producción.",
    },
  ],
  labels: {
    controls: [
      { key: "color", label: "color" },
      { key: "outlined", label: "outlined" },
      { key: "disabled", label: "disabled" },
      { key: "readonly", label: "readonly" },
      { key: "clearable", label: "clearable" },
      { key: "counter", label: "counter" },
      { key: "required", label: "required" },
    ],
    integrationText: {
      form: {
        submit: "Finalizar registro",
        idle: "Completa todos los campos obligatorios para continuar",
        submitting: "Enviando registro...",
        success: "Registro completado correctamente",
        canceled: "Formulario de registro reiniciado",
        firstNameLabel: "Nombre",
        firstNamePlaceholder: "Ana",
        lastNameLabel: "Apellido",
        lastNamePlaceholder: "Pérez",
        emailLabel: "Correo electrónico",
        emailPlaceholder: "nombre@empresa.com",
        passwordLabel: "Contraseña",
        passwordPlaceholder: "Mínimo 6 caracteres",
        cardTitle: "Formulario de registro",
        cardSubtitle: "Datos básicos",
      },
    },
  },
};
