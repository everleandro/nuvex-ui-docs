import type { DocsCssVariablesSectionKey, DocsWorkflowPageContent } from '~/types/docs'

export const cssVariablesEditorialContentEs: DocsWorkflowPageContent<DocsCssVariablesSectionKey> = {
  kind: 'workflow',
  seo: {
    title: 'Variables CSS | Nuvex UI Docs',
    description:
      'Usa las CSS custom properties que Nuvex UI emite cuando compila framework.scss y deja los overrides de Sass tokens para los cambios que pertenecen al baseline del framework.',
  },
  hero: {
    title: 'CSS Variables',
    description:
      'Esta pagina documenta las CSS custom properties que Nuvex UI emite a partir de sus tokens Sass. Usalas cuando el cambio pertenece a la cascada, a un alcance de tema o a un override local de superficie.',
    prerequisitesTitle: 'Generadas a partir de tokens Sass',
    actions: [
      {
        key: 'back-to-theming-overview',
        label: 'Volver a Theming Overview',
      },
      {
        key: 'open-design-tokens',
        label: 'Abrir Design Tokens',
      },
    ],
    prerequisites: [
      'Las variables que emite <code class="docs-inline-code">framework.scss</code> se generan desde los tokens Sass publicos que expone <code class="docs-inline-code">setting.scss</code> y desde los mapas semanticos del tema activo.',
      'Si el baseline del framework debe cambiar para toda la app, vuelve a <code class="docs-inline-code">Design Tokens</code> y sobreescribe el token Sass de origen. Si el cambio solo necesita cascada o alcance, quedate en la capa de CSS variables.',
      'Declara los overrides despues de cargar <code class="docs-inline-code">nuvex-ui/framework.scss</code>, ya sea en <code class="docs-inline-code">:root</code>, en un selector de tema como <code class="docs-inline-code">[data-theme="dark"]</code> o dentro de un contenedor local.',
    ],
  },
  sections: {
    'use-in-vue-and-nuxt': {
      title: 'Consume CSS variables en Vue y Nuxt',
      description:
        'Mantiene los overrides de CSS variables en los estilos de tu app despues de que framework.scss ya este presente. Usa overrides en root para ajustes globales, selectores de tema para variaciones light o dark, y selectores locales cuando el cambio solo afecta una superficie.',
      calloutDescription:
        'Si la variable que necesitas no existe, o el valor deberia convertirse en el nuevo default del framework en todas partes, el cambio correcto normalmente vive en Design Tokens y no en otro override local de CSS.',
    },
    'next-steps': {
      title: 'Siguientes pasos recomendados',
      description:
        'Continua con la pagina que coincide con la siguiente decision despues de validar el override en cascada.',
      items: [
        {
          title: 'Design Tokens',
          description: 'Vuelve ahi si el override debe subir al origen Sass en lugar de quedarse en el CSS de la app.',
        },
        {
          title: 'Light and Dark Themes',
          description: 'Continua ahi si necesitas confirmar cuales variables cambian con el switch de temas built-in.',
        },
        {
          title: 'Runtime Theme API',
          description: 'Ve ahi si la siguiente tarea es seleccionar, persistir o reaccionar al tema activo en runtime.',
        },
      ],
    },
  },
}

export const cssVariablesPages = {
  cssVariables: cssVariablesEditorialContentEs,
} as const

export default cssVariablesPages