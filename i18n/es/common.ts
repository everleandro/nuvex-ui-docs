const common = {
  actions: {
    copyCode: 'Copiar codigo',
    copied: 'Copiado',
  },
  theme: {
    toggle: 'Cambiar tema',
    toLight: 'Cambiar a tema claro',
    toDark: 'Cambiar a tema oscuro',
  },
  language: {
    toggle: 'Cambiar idioma',
    switchTo: 'Cambiar a {locale}',
  },
  docs: {
    secondaryNav: {
      title: 'En esta pagina',
      empty: 'No hay secciones disponibles.',
    },
    footer: {
      title: 'Navegacion',
      description: 'Continua con el tema anterior o siguiente.',
      previous: 'Anterior',
      next: 'Siguiente',
    },
    apiTable: {
      property: 'Propiedad',
      type: 'Tipo',
      default: 'Por defecto',
    },
  },
  labels: {
    api: 'API',
    props: 'Props',
    events: 'Eventos',
    slots: 'Slots',
    examples: 'Ejemplos',
    preview: 'Preview',
    required: 'Obligatorio',
    optional: 'Opcional',
    default: 'Por defecto',
    type: 'Tipo',
    description: 'Descripcion',
    search: 'Buscar',
  },
} as const

export default common