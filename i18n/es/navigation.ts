const navigation = {
  groups: {
    getting_started: 'Primeros pasos',
    design_system: 'Diseño',
    theming: 'Temas',
    components: 'Componentes',
    utilities: 'Utilidades',
    advanced: 'Avanzado',
    community: 'Comunidad',
  },
  subgroups: {
    core_actions: 'Acciones base',
    form_foundations: 'Formularios',
    form_inputs: 'Campos de formulario',
    navigation: 'Navegacion',
    layout: 'Layout',
    feedback_overlays: 'Feedback y overlays',
    data_display_scheduling: 'Datos y agenda',
  },
  items: {
    getting_started: {
      introduction: 'Introduccion',
      installation: 'Instalacion',
      quick_start: 'Inicio rapido',
      nuxt_integration: 'Integracion con Nuxt',
    },
    design_system: {
      colors: 'Colores',
      typography: 'Tipografia',
      icon_configuration: 'Configuracion de iconos',
      spacing: 'Espaciado',
      surfaces: 'Superficies',
    },
    theming: {
      overview: 'Resumen',
      runtime_theme_api: 'API de tema en runtime',
      design_tokens: 'Tokens de diseno',
      css_variables: 'Variables CSS',
      light_and_dark_themes: 'Temas claro y oscuro',
      custom_themes: 'Temas personalizados',
    },
    layout: {
      app_shell: 'App shell',
      bar: 'Barra',
      drawer: 'Drawer',
      grid: 'Grid',
      container: 'Contenedor',
      divider: 'Divisor',
      responsive_patterns: 'Patrones responsivos',
    },
    utilities: {
      flexbox: 'Flexbox',
      spacing_helpers: 'Helpers de espaciado',
      display_helpers: 'Helpers de display',
      elevation: 'Elevacion',
    },
    core_actions: {
      button: 'Button',
    },
    form_foundations: {
      form: 'Form',
    },
    form_inputs: {
      text_field: 'Textfield',
      textarea: 'Textarea',
      select: 'Select',
      checkbox: 'Checkbox',
      radio: 'Radio',
      switch: 'Switch',
      date_picker: 'Date Picker',
      time_picker: 'Time Picker',
    },
    navigation: {
      list: 'Lista',
      menu: 'Menu',
      tabs: 'Tabs',
    },
    feedback_overlays: {
      dialog: 'Dialog',
      progress: 'Progress',
    },
    data_display_scheduling: {
      card: 'Card',
      schedule: 'Schedule',
    },
    advanced: {
      plugin_api: 'API de plugin',
      composables: 'Composables',
      directives: 'Directivas',
    },
    community: {
      changelog: 'Changelog',
      roadmap: 'Roadmap',
      contributing: 'Contribuir',
    },
  },
} as const

export default navigation