import type { DocsComponentPageContent } from '~/types/docs'

export const drawerComponentContentEs: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Drawer',
    description: 'Documentación de Drawer en Nuvex UI con estado, dimensiones, superficies, slots y referencia API.',
  },
  hero: {
    title: 'Drawer',
    descriptionHtml:
      'Drawer muestra navegación o contenido auxiliar en un panel lateral con estado controlado.',
  },
  sections: [
    {
      key: 'playground',
      title: 'Playground',
      descriptionHtml:
        "Este playground muestra un drawer de navegación con las regiones <code class='docs-inline-code'>prepend</code>, contenido principal y <code class='docs-inline-code'>append</code>. Puedes comparar lado, ancho, apariencia y modos de posicionamiento.",
      callout: {
        title: 'Diferencia de posicionamiento',
        description: 'En modo normal, el drawer participa en el layout. En modo absoluto, se superpone al contenido.',
        color: 'info',
        icon: 'information',
      },
    },
    {
      key: 'slots',
      title: 'Slots y composición',
      descriptionHtml:
        "Usa <code class='docs-inline-code'>prepend</code> para el contexto persistente, el slot default para el contenido desplazable y <code class='docs-inline-code'>append</code> para acciones de cuenta o sesión.",
    },
    {
      key: 'props',
      title: 'Referencia API',
      description: 'Consulta las props públicas verificadas de EDrawer. Su evento y sus slots se resumen después de la tabla.',
    },
  ],
  labels: {
    controls: [
      { key: 'toggle', label: 'Abrir/Cerrar' },
      { key: 'side', label: 'Lado' },
      { key: 'width', label: 'Ancho' },
      { key: 'appearance', label: 'Apariencia' },
      { key: 'floating', label: 'Flotante' },
      { key: 'absolute', label: 'Absolute' },
      { key: 'elevation', label: 'Elevación' },
    ],
    drawerText: {
      playgroundTitle: 'Playground interactivo de Drawer',
      openDrawer: 'Abrir drawer',
      closeDrawer: 'Cerrar drawer',
      workspace: 'Espacio de trabajo',
      home: 'Inicio',
      profile: 'Perfil',
      settings: 'Configuración',
      account: 'Cuenta',
      logout: 'Cerrar sesión',
      apiEventTitle: 'Evento',
      apiEventBody: 'EDrawer emite update:modelValue cuando cambia su estado abierto.',
      apiSlotsTitle: 'Slots',
      apiSlotsBody: 'Los slots prepend y append enmarcan el slot default desplazable con regiones de contenido persistente.',
    },
  },
}

export const drawerPagesEs = { drawer: drawerComponentContentEs } as const

export default drawerPagesEs