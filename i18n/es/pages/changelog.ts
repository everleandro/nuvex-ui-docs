import type { DocsChangelogSectionKey, DocsWorkflowPageContent } from '~/types/docs'

export const changelogEditorialContentEs: DocsWorkflowPageContent<DocsChangelogSectionKey> = {
  kind: 'workflow',
  seo: {
    title: 'Historial de cambios | Nuvex UI Docs',
    description:
      'Revisa historial de versiones, notas de migracion y cambios unreleased de Nuvex UI en formato versionado.',
  },
  hero: {
    title: 'Changelog',
    description:
      'Sigue que cambio por version y mantien upgrades predecibles con una sola fuente de verdad de releases.',
    prerequisitesTitle: 'Como usar esta pagina',
    actions: [
      {
        key: 'open-roadmap',
        label: 'Abrir Roadmap',
      },
      {
        key: 'open-contributing',
        label: 'Abrir Contributing',
      },
    ],
    prerequisites: [
      'Lee primero por version y luego revisa notas de migracion cuando existan.',
      'Usa las entradas unreleased como vista previa hasta que se publiquen en una version.',
      'Sigue los links de release para contexto de PR, issue y compare.',
    ],
  },
  sections: {
    'release-policy': {
      title: 'Politica de releases',
      description:
        'El changelog sigue semver y agrupa cambios por tipo de release para hacer explicito el impacto de upgrade.',
      items: [
        'Cada release tiene version y fecha.',
        'Las categorias son estables: added, changed, fixed, removed, deprecated, security, performance, docs.',
        'El impacto breaking se marca por entrada y agrega guia de migracion cuando aplica.',
      ],
    },
    'latest-release': {
      title: 'Ultimo release',
      description:
        'Usa esta seccion para la version publicada mas reciente y la cola actual de cambios unreleased.',
    },
    'release-history': {
      title: 'Historial de releases',
      description:
        'Los releases anteriores se mantienen en orden descendente para auditar la evolucion de cambios.',
    },
    'migration-notes': {
      title: 'Notas de migracion',
      description:
        'Cuando cambian expectativas de comportamiento o API, estas notas explican impacto y accion requerida.',
    },
    'next-steps': {
      title: 'Siguientes pasos recomendados',
      description:
        'Continua con paginas de planificacion y contribucion para coordinar proximos cambios y calidad de release.',
      items: [
        {
          title: 'Roadmap',
          description: 'Revisa que viene despues y como se agrupan las prioridades.',
        },
        {
          title: 'Contributing',
          description: 'Sigue el flujo de contribucion para PR listos para changelog.',
        },
        {
          title: 'Runtime Theme API',
          description: 'Revisa el contrato runtime de theming cuando una entrada de changelog referencie comportamiento de tema.',
        },
      ],
    },
  },
}

export const changelogPages = {
  changelog: changelogEditorialContentEs,
} as const

export default changelogPages
