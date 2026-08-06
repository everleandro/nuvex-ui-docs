type PluginApiCodeSnippet = {
  label?: string
  code: string
  language: 'bash' | 'ts' | 'js' | 'vue' | 'scss' | 'json' | 'html' | 'css' | 'shell' | 'sh'
}

export const pluginApiCodeSnippets: Record<
  | 'configure-locales-and-default-locale'
  | 'override-components-registry',
  PluginApiCodeSnippet[]
> = {
  'configure-locales-and-default-locale': [
    {
      label: 'Locales + default locale',
      code: "app.use(NuvexUI, {\n  locale: 'es-mx',\n  locales: {\n    'es-mx': {\n      months: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],\n      monthsShort: ['ene.', 'feb.', 'mar.', 'abr.', 'may.', 'jun.', 'jul.', 'ago.', 'sep.', 'oct.', 'nov.', 'dic.'],\n      weekdays: ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'],\n      weekdaysShort: ['dom', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab'],\n      weekdaysMin: ['do', 'lu', 'ma', 'mi', 'ju', 'vi', 'sa'],\n      start: 1,\n      schedule: {\n        toolbar: {\n          view: 'Vista',\n          day: 'Dia',\n          week: 'Semana',\n          resource: 'Recurso',\n          space: 'Espacio',\n          today: 'Hoy',\n          previousPeriod: 'Periodo anterior',\n          nextPeriod: 'Periodo siguiente',\n          previousResourcePage: 'Pagina anterior de recursos',\n          nextResourcePage: 'Pagina siguiente de recursos',\n          backToWeek: 'Volver a semana',\n          resourcePage: 'Pagina de recursos',\n        },\n      },\n    },\n  },\n})",
      language: 'ts',
    },
  ],
  'override-components-registry': [
    {
      label: 'Register only a custom subset',
      code: "import { EButton, ECard } from 'nuvex-ui'\n\napp.use(NuvexUI, {\n  components: {\n    EButton,\n    ECard,\n  },\n})",
      language: 'ts',
    },
  ],
}
