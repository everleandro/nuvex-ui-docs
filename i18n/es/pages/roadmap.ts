import type { DocsRoadmapSectionKey, DocsWorkflowPageContent } from '~/types/docs'

export const roadmapEditorialContentEs: DocsWorkflowPageContent<DocsRoadmapSectionKey> = {
  kind: 'workflow',
  seo: {
    title: 'Roadmap',
    description:
      'Revisa prioridades cercanas y siguientes de Nuvex UI con alcance de planificacion estable y bucle de feedback.',
  },
  hero: {
    title: 'Roadmap',
    description:
      'Usa esta pagina para entender prioridades de planificacion sin atarlas a fechas de release fijas.',
    prerequisitesTitle: 'Antes de empezar',
    actions: [
      {
        key: 'open-changelog',
        label: 'Abrir Changelog',
      },
      {
        key: 'open-contributing',
        label: 'Abrir Contributing',
      },
    ],
    prerequisites: [
      'Las prioridades del roadmap pueden cambiar segun feedback de producto y necesidades de mantenimiento.',
      'Near term tiene mayor certeza que next y later.',
      'Usa Changelog para confirmar lo que ya esta publicado.',
    ],
  },
  sections: {
    'planning-principles': {
      title: 'Principios de planificacion',
      description:
        'Las prioridades se definen por impacto en usuarios, riesgo de mantenimiento y bloqueos de adopcion antes que por amplitud de features.',
      items: [
        'Se prioriza estabilidad y seguridad de migracion antes de ampliar superficie nueva.',
        'Brechas de accesibilidad y consistencia pueden subir cuando bloquean uso en produccion.',
        'Tareas transversales de docs y tooling se planifican cuando reducen errores de integracion.',
      ],
    },
    'near-term': {
      title: 'Near term',
      description:
        'Trabajo de alta confianza que se apunta al siguiente ciclo de planificacion.',
      items: [
        {
          title: 'Base de docs de Community',
          description: 'Estabilizar paginas de Changelog, Roadmap y Contributing con ownership claro de mantenimiento.',
        },
        {
          title: 'Consistencia en docs Advanced',
          description: 'Completar consistencia de navegacion local y anchors de seccion en paginas Advanced.',
        },
        {
          title: 'Pases de calidad en docs de componentes',
          description: 'Cerrar brechas de contenido en paginas de componentes de mayor trafico y ejemplos de uso.',
        },
      ],
    },
    'next-up': {
      title: 'Next up',
      description:
        'Trabajo probable despues de near-term, pero aun sensible a riesgos de dependencias.',
      items: [
        {
          title: 'Badges de estado en roadmap',
          description: 'Mostrar planned, in-progress y done dentro de Community docs.',
        },
        {
          title: 'Helpers para automatizar release notes',
          description: 'Mejorar la ergonomia de updates de changelog mediante flujo de contribucion repetible.',
        },
      ],
    },
    later: {
      title: 'Later',
      description:
        'Items de exploracion que siguen siendo valiosos pero todavia no entran en planificacion activa.',
      items: [
        {
          title: 'Formatos de community spotlight',
          description: 'Evaluar mostrar patrones de uso en produccion y ejemplos del ecosistema.',
        },
        {
          title: 'Docs de gobernanza extendida',
          description: 'Expandir gobernanza de contribucion cuando el flujo de maintainers sea estable y repetible.',
        },
      ],
    },
    'feedback-loop': {
      title: 'Bucle de feedback',
      description:
        'Las actualizaciones del roadmap se alimentan de triage de issues, friccion de integracion y retrospectivas de release.',
      items: [
        'Capturar puntos de dolor recurrentes desde revisiones de issues y PR.',
        'Reordenar prioridades cuando regresiones no resueltas afecten adopcion.',
        'Reflejar decisiones de alcance en guias de Changelog y Contributing.',
      ],
    },
    'next-steps': {
      title: 'Siguientes pasos recomendados',
      description:
        'Continua con paginas de releases y contribucion para conectar planificacion con entrega y colaboracion.',
      items: [
        {
          title: 'Changelog',
          description: 'Revisa lo que ya se publico y lo que aun esta en unreleased.',
        },
        {
          title: 'Contributing',
          description: 'Sigue el flujo de contribucion para tareas alineadas a prioridades del roadmap.',
        },
        {
          title: 'Plugin API',
          description: 'Revisa una pagina avanzada donde se aplica la estabilizacion de documentacion actual.',
        },
      ],
    },
  },
}

export const roadmapPages = {
  roadmap: roadmapEditorialContentEs,
} as const

export default roadmapPages
