const navigation = {
  groups: {
    getting_started: 'Getting Started',
    design_system: 'Design System',
    theming: 'Theming',
    components: 'Components',
    utilities: 'Utilities',
    advanced: 'Advanced',
    community: 'Community',
  },
  subgroups: {
    core_actions: 'Core Actions',
    form_foundations: 'Form Foundations',
    form_inputs: 'Form Inputs',
    navigation: 'Navigation',
    layout: 'Layout',
    feedback_overlays: 'Feedback and Overlays',
    data_display_scheduling: 'Data & Scheduling',
  },
  items: {
    getting_started: {
      introduction: 'Introduction',
      installation: 'Installation',
      quick_start: 'Quick Start',
      nuxt_integration: 'Nuxt Integration',
    },
    design_system: {
      colors: 'Colors',
      typography: 'Typography',
      icon_configuration: 'Icon Configuration',
      spacing: 'Spacing',
      surfaces: 'Surfaces',
    },
    theming: {
      overview: 'Overview',
      runtime_theme_api: 'Runtime Theme API',
      design_tokens: 'Design Tokens',
      css_variables: 'CSS Variables',
      light_and_dark_themes: 'Light and Dark Themes',
      custom_themes: 'Custom Themes',
    },
    layout: {
      app_shell: 'App Shell',
      bar: 'Bar',
      drawer: 'Drawer',
      grid: 'Grid',
      container: 'Container',
      divider: 'Divider',
      responsive_patterns: 'Responsive Patterns',
    },
    utilities: {
      flexbox: 'Flexbox',
      spacing_helpers: 'Spacing Helpers',
      display_helpers: 'Display Helpers',
      elevation: 'Elevation',
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
      list: 'List',
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
      plugin_api: 'Plugin API',
      composables: 'Composables',
      directives: 'Directives',
    },
    community: {
      changelog: 'Changelog',
      roadmap: 'Roadmap',
      contributing: 'Contributing',
    },
  },
} as const

export default navigation