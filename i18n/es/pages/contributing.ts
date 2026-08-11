import type { DocsContributingSectionKey, DocsWorkflowPageContent } from '~/types/docs'

export const contributingEditorialContent: DocsWorkflowPageContent<DocsContributingSectionKey> = {
  kind: 'workflow',
  seo: {
    title: 'Contribuir | Nuvex UI Docs',
    description:
      'Sigue un flujo guiado y repetible con ejemplos practicos de comandos y changelog.',
  },
  hero: {
    title: 'Contribuir',
    description:
      'Usa esta pagina como una guia paso a paso para aportar con pull requests listos para revision.',
    prerequisitesTitle: 'Antes de empezar',
    actions: [
      {
        key: 'open-roadmap',
        label: 'Abrir Roadmap',
      },
      {
        key: 'open-changelog',
        label: 'Abrir Changelog',
      },
    ],
    prerequisites: [
      'Alinea tu trabajo con las prioridades activas del roadmap cuando sea posible.',
      'Revisa el changelog y los issues abiertos antes de duplicar esfuerzo.',
      'Manten los pull requests pequenos para acelerar la revision.',
    ],
  },
  sections: {
    'contribution-paths': {
      title: 'Rutas de contribucion',
      description:
        'Elige una ruta primero para mantener claro el alcance durante implementacion y revision.',
      items: [
        {
          title: 'Mejoras de documentacion',
          description: 'Corrige vacios de contenido, navegacion y claridad de ejemplos donde haya bloqueos.',
        },
        {
          title: 'Correcciones de errores',
          description: 'Resuelve regresiones o comportamiento incorrecto con un antes y despues reproducible.',
        },
        {
          title: 'Cambios de funcionalidad',
          description: 'Propone e implementa mejoras acotadas alineadas con la direccion del roadmap.',
        },
      ],
    },
    'local-setup': {
      title: 'Setup local',
      description:
        'Usa un flujo local reproducible antes de programar para que revision y validacion sean rapidas.',
      items: [
        'Haz fork y clona el repositorio objetivo.',
        'Crea una rama dedicada desde la rama por defecto.',
        'Ejecuta instalacion y build, luego valida pruebas o checks de tu alcance.',
      ],
    },
    'pull-request-flow': {
      title: 'Flujo de pull request',
      description:
        'Sigue esta secuencia para mantener contexto visible y reducir ida y vuelta en revision.',
      items: [
        'Abre una rama por tema y usa commits enfocados en la intencion.',
        'Describe problema, solucion y evidencia de validacion en el cuerpo del PR.',
        'Vincula issues relacionados o discusion previa cuando aplique.',
      ],
    },
    'review-checklist': {
      title: 'Checklist de revision',
      description:
        'Usa esta lista antes de pedir revision para reducir ciclos de feedback evitables.',
      items: [
        'El alcance es claro y se limita a un objetivo principal.',
        'La documentacion visible al usuario esta actualizada si cambio el comportamiento.',
        'Se ejecuto build o pruebas de las areas afectadas y pasaron.',
        'No se mezclaron formateos o refactors no relacionados en el PR.',
      ],
    },
    'changelog-policy': {
      title: 'Politica de changelog',
      description:
        'Cada contribucion con impacto al usuario debe agregar o actualizar una entrada en unreleased.',
      items: [
        'Usa resumenes cortos con impacto claro para el usuario.',
        'Marca impacto breaking de forma explicita cuando aplique.',
        'Incluye referencias de issue o PR cuando existan.',
      ],
    },
    'next-steps': {
      title: 'Siguientes pasos recomendados',
      description:
        'Continua con paginas de planeacion y releases para conectar contribucion con direccion y entregas.',
      items: [
        {
          title: 'Roadmap',
          description: 'Confirma prioridades actuales antes de abrir contribuciones de mayor alcance.',
        },
        {
          title: 'Changelog',
          description: 'Revisa formato de release y agrega entradas unreleased de forma consistente.',
        },
        {
          title: 'Plugin API',
          description: 'Toma una pagina avanzada como referencia concreta para estilo de docs.',
        },
      ],
    },
  },
}

export const contributingPages = {
  contributing: contributingEditorialContent,
} as const

export default contributingPages
