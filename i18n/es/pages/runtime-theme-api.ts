import type { DocsRuntimeThemeApiSectionKey, DocsWorkflowPageContent } from '~/types/docs'

export const runtimeThemeApiEditorialContentEs: DocsWorkflowPageContent<DocsRuntimeThemeApiSectionKey> = {
  kind: 'workflow',
  seo: {
    title: 'Runtime Theme API',
    description:
      'Usa el contrato de theming runtime de Nuvex UI para inspeccionar, cambiar, persistir y extender el tema activo sin reconstruir el sistema por tu cuenta.',
  },
  hero: {
    title: 'Runtime Theme API',
    description:
      'Usa el contrato de theming runtime de Nuvex UI para inspeccionar, cambiar, persistir y extender el tema activo sin reconstruir por tu cuenta el flujo base del sistema.',
    prerequisitesTitle: 'Antes de empezar',
    actions: [
      {
        key: 'back-to-theming-overview',
        label: 'Volver a Theming Overview',
      },
      {
        key: 'open-custom-themes',
        label: 'Abrir Custom Themes',
      },
    ],
    prerequisites: [
      'Ya entiendes que light y dark son los temas baseline integrados de la libreria.',
      'Quieres operar el tema activo desde codigo de app en lugar de redefinir todo el sistema visual.',
      'Nuvex UI ya esta instalado y renderizando correctamente en tu proyecto.',
    ],
  },
  sections: {
    'resolve-initial-theme': {
      title: 'Como se resuelve el tema inicial',
      description:
        'La libreria primero intenta restaurar un tema valido desde storage, luego considera la preferencia del sistema y al final cae al fallback configurado o al baseline built-in.',
      calloutDescription:
        'Si un valor almacenado no existe en el registro real de temas, la libreria lo descarta y continua con el siguiente paso de resolucion.',
    },
    'inspect-theme-state': {
      title: 'Inspecciona el estado del tema',
      description:
        'Usa el estado runtime que Nuvex UI ya expone en lugar de leer atributos del DOM o de mantener un registro paralelo de temas en tu app.',
    },
    'change-active-theme': {
      title: 'Cambia el tema activo',
      description:
        'Usa estas operaciones cuando la app necesita fijar un tema conocido, alternar entre opciones o volver al fallback de la libreria.',
      calloutDescription:
        'setTheme ignora nombres desconocidos y conserva el estado valido actual, pero ese caso sigue siendo un error de integracion que tu app debe tratar.',
    },
    'persist-theme-choice': {
      title: 'Persiste la eleccion del usuario',
      description:
        'Nuvex UI ya soporta persistencia por llave o mediante un adaptador custom, asi que aqui se trata de conectar el contrato y no de reinventar la persistencia.',
      calloutDescription:
        'Si tu app necesita persistencia de tema consciente de SSR, conecta aqui un storage custom y deja el flujo especifico del framework para la guia de integracion.',
    },
    'control-dom-output': {
      title: 'Controla la salida al DOM',
      description:
        'La API runtime no solo mantiene estado. Tambien escribe el tema activo en el DOM mediante un atributo configurable y ajusta color-scheme cuando corresponde.',
    },
    'emit-css-variables': {
      title: 'Emite tokens del tema como CSS variables',
      description:
        'Habilita esta salida cuando el tema runtime activo tambien necesita publicar valores de token para consumo CSS sin montar otra capa puente en tu app.',
      calloutDescription:
        'Esta opcion publica tokens del tema runtime activo. No reemplaza la decision de cuando un cambio pertenece a tokens frente a overrides CSS.',
    },
    'register-runtime-themes': {
      title: 'Registra temas en runtime',
      description:
        'Usa el registro runtime cuando la app necesita agregar o quitar variantes nombradas durante la ejecucion sin alterar el contrato baseline de los built-ins.',
      calloutDescription:
        'light y dark forman parte del baseline integrado de la libreria. No se pueden volver a registrar ni eliminar desde este contrato runtime.',
    },
    'app-integration-patterns': {
      title: 'Patrones de integracion en app',
      description:
        'Cierra la pagina con patrones reales de uso que muestran como encaja el contrato runtime en UI de aplicacion sin infraestructura extra.',
    },
    'runtime-mistakes': {
      title: 'Errores runtime que conviene evitar',
      description:
        'No son errores genericos de programacion. Aparecen cuando usas el contrato de theming en la capa equivocada o con supuestos incorrectos.',
      items: [
        {
          title: 'Resolver con runtime un problema de tokens',
          description: 'Si el cambio real es visual y estable, la siguiente pagina probablemente sea Design Tokens o CSS Variables, no otra rama runtime.',
        },
        {
          title: 'Suponer que cualquier string funciona',
          description: 'setTheme solo aplica nombres que ya estan registrados en el runtime de la libreria.',
        },
        {
          title: 'Intentar redefinir built-ins en runtime',
          description: 'light y dark forman parte del contrato baseline y no se tratan como temas descartables definidos por usuario.',
        },
        {
          title: 'Duplicar el registro en estado de app',
          description: 'Si availableThemes y getThemes() ya exponen la fuente de verdad, evita espejar esa lista en otro store sin una razon real.',
        },
      ],
    },
    'next-steps': {
      title: 'Siguientes pasos recomendados',
      description:
        'Continua con la pagina que mejor encaje con tu siguiente decision sobre comportamiento baseline, customizacion visual o alta de una nueva variante.',
      items: [
        {
          title: 'Theming Overview',
          description: 'Vuelve a la pagina de decision si necesitas reubicar el problema en la capa correcta de theming.',
        },
        {
          title: 'Light and Dark Themes',
          description: 'Revisa el baseline oficial antes de cambiar como se comporta la seleccion runtime de tema en tu app.',
        },
        {
          title: 'Custom Themes',
          description: 'Continua aqui si necesitas una nueva variante nombrada con identidad propia.',
        },
        {
          title: 'Design Tokens',
          description: 'Ve ahi si el problema real es semantico y visual, no de seleccion runtime del tema.',
        },
      ],
    },
  },
}

export const runtimeThemeApiPages = {
  runtimeThemeApi: runtimeThemeApiEditorialContentEs,
} as const

export default runtimeThemeApiPages