import type { DocsDesignTokensSectionKey, DocsWorkflowPageContent } from '~/types/docs'

export const designTokensEditorialContentEs: DocsWorkflowPageContent<DocsDesignTokensSectionKey> = {
  kind: 'workflow',
  seo: {
    title: 'Design Tokens',
    description:
      'Consulta los modulos Sass de tokens que expone Nuvex UI y sobreescribelos desde assets/styles/variables.scss antes de compilar framework.scss.',
  },
  hero: {
    title: 'Design Tokens',
    description:
      'Esta pagina documenta la superficie publica de tokens Sass que Nuvex UI expone mediante setting.scss y como sobreescribir esos tokens desde assets/styles/variables.scss.',
    prerequisitesTitle: 'De tokens Sass a CSS variables',
    actions: [
      {
        key: 'back-to-theming-overview',
        label: 'Volver a Theming Overview',
      },
      {
        key: 'open-css-variables',
        label: 'Abrir CSS Variables',
      },
    ],
    prerequisites: [
      'Los tokens Sass simples que expone <code class="docs-inline-code">setting.scss</code> se exportan como CSS variables con la forma <code class="docs-inline-code">--e-{token}</code>. Por ejemplo, <code class="docs-inline-code">$border-radius-root</code> termina en <code class="docs-inline-code">--e-border-radius-root</code>.',
      'Los mapas semanticos de tema terminan en variables como <code class="docs-inline-code">--e-color-{clave}</code>, <code class="docs-inline-code">--e-contrast-{clave}</code> y <code class="docs-inline-code">--e-text-{clave}</code>, segun el grupo que <code class="docs-inline-code">framework.scss</code> emite para <code class="docs-inline-code">light</code> y <code class="docs-inline-code">dark</code>.',
      'La primitive palette genera variables como <code class="docs-inline-code">--e-palette-{familia}</code>, <code class="docs-inline-code">--e-palette-{familia}-{tono}</code> y sus pares de contraste. Esta pagina se centra en los tokens Sass que originan esas variables; la pagina de CSS Variables cubre el consumo final en cascada.',
    ],
  },
  sections: {
    'override-in-vue-and-nuxt': {
      title: 'Sobrescribe tokens en Vue y Nuxt',
      description:
        'Los overrides de build-time viven en assets/styles/variables.scss. Configura nuvex-ui/setting.scss ahi con @use ... with (...), y luego inyecta ese archivo antes de que framework.scss se compile en Vue o Nuxt.',
      calloutDescription:
        'Esta seccion trata solo de tokens Sass. Las CSS custom properties generadas a partir de esos tokens se documentan aparte en la pagina de CSS Variables.',
    },
    'framework-token-reference': {
      title: 'Referencia de tokens del framework',
      description:
        'Usa esta referencia agrupada como inventario publico Sass expuesto por nuvex-ui/setting.scss. Cada grupo corresponde a los tokens que puedes sobreescribir desde assets/styles/variables.scss antes de compilar framework.scss.',
    },
    'next-steps': {
      title: 'Siguientes pasos recomendados',
      description:
        'Continua con la pagina que mejor encaje con la accion siguiente despues de elegir la familia correcta de tokens.',
      items: [
        {
          title: 'CSS Variables',
          description: 'Sigue ahi si el siguiente paso es un override controlado en cascada con variables ya expuestas por el framework.',
        },
        {
          title: 'Light and Dark Themes',
          description: 'Continua ahi si necesitas entender como se aplica el baseline entre los temas built-in.',
        },
        {
          title: 'Custom Themes',
          description: 'Ve ahi si ya confirmaste que el producto necesita una variante de tema adicional y nombrada.',
        },
        {
          title: 'Runtime Theme API',
          description: 'Vuelve ahi solo si el problema real ahora es seleccion o persistencia del tema activo.',
        },
      ],
    },
  },
}

export const designTokensPages = {
  designTokens: designTokensEditorialContentEs,
} as const

export default designTokensPages