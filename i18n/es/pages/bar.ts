import type { DocsComponentPageContent } from '~/types/docs'

export const barComponentContentEs: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Barra',
    description: 'Documentación de Bar en Nuvex UI con estilos de superficie, composición de acciones, densidad y referencia API.',
  },
  hero: {
    title: 'Barra',
    descriptionHtml:
      "El componente <code class='docs-inline-code'>EBar</code> organiza un título, activadores de navegación y acciones contextuales en una superficie horizontal. Su color, elevación, borde y densidad establecen el énfasis visual adecuado para cada contexto.",
  },
  sections: [
    {
      key: 'usage',
      title: 'Uso',
      descriptionHtml:
        "Ajusta <code class='docs-inline-code'>color</code> y <code class='docs-inline-code'>elevation</code> para definir la superficie de la barra. Usa <code class='docs-inline-code'>ESpacer</code> para separar su identidad de las acciones finales.",
    },
    {
      key: 'content-actions',
      title: 'Contenido y acciones',
      descriptionHtml:
        "La prop <code class='docs-inline-code'>outlined</code> aplica un borde al componente y reemplaza la sombra por un estilo más definido.",
    },
    {
      key: 'density',
      title: 'Densidad',
      descriptionHtml:
        "La barra predeterminada mide 64px de alto. Activa <code class='docs-inline-code'>dense</code> para una barra compacta de 48px cuando la interfaz circundante ya proporcione suficiente contexto y los objetivos táctiles permanezcan claros.",
    },
    {
      key: 'props',
      title: 'Referencia API',
      description: 'Consulta las props públicas verificadas de EBar. Sus slots de contenido se resumen después de la tabla.',
    },
  ],
  labels: {
    controls: [
      { key: 'color', label: 'color' },
      { key: 'elevation', label: 'elevación' },
    ],
    barText: {
      workspace: 'Workspace',
      account: 'Cuenta',
      openNavigation: 'Abrir navegación',
      projects: 'Proyectos',
      search: 'Buscar',
      create: 'Crear',
      standardBar: 'Barra estándar',
      denseBar: 'Barra densa',
      moreActions: 'Más acciones',
      apiSlotsTitle: 'Slots',
      apiSlotsBody: 'El slot default contiene el contenido principal de la barra. El slot append renderiza una región adicional después de este.',
    },
  },
}

export const barPagesEs = { bar: barComponentContentEs } as const

export default barPagesEs