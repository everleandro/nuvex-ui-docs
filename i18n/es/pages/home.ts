import type { DocsConceptPageContent, DocsHomeSectionKey } from '~/types/docs'

export const homeEditorialContentEs: DocsConceptPageContent<DocsHomeSectionKey> = {
  kind: 'concept',
  seo: {
    title: 'Nuvex UI Docs',
    description:
      'Landing de la documentacion de Nuvex UI. Empieza por instalacion, entra a componentes y prepara una vista previa del tipo de superficies de producto que el framework puede construir.',
  },
  hero: {
    eyebrow: 'Nuvex UI',
    title: 'UI de producto con Nuvex',
    description:
      'Nuvex UI integra layout, formularios, overlays, navegacion y theming para Vue 3 y Nuxt. Empieza rapido, escala con coherencia y entrega pantallas listas para produccion.',
    pills: ['Vue 3', 'Nuxt', 'Design System', 'Documentacion de produccion'],
    actions: [
      {
        key: 'open-quick-start',
        label: 'Inicio rapido',
      },
      {
        key: 'review-installation',
        label: 'Instalacion',
      },
      {
        key: 'browse-components',
        label: 'Componentes',
      },
    ],
  },
  sections: {
    'entry-points': {
      type: 'nav-card-grid',
      key: 'entry-points',
      title: 'Escoge la mejor puerta de entrada a la doc',
      description:
        'La landing debe llevar a accion rapido. Estos accesos cubren setup, primer render, descubrimiento de componentes y las decisiones de sistema que normalmente vienen despues.',
      items: [
        {
          title: 'Inicio rapido',
          description: 'Pasa de la instalacion del paquete a una primera pantalla compuesta con la ruta mas corta dentro de la documentacion.',
        },
        {
          title: 'Instalacion',
          description: 'Verifica setup del paquete, registro del plugin, estilos y el contrato del primer render antes de profundizar.',
        },
        {
          title: 'Componentes',
          description: 'Recorre bloques de produccion para acciones, formularios, layout, navegacion, overlays y scheduling.',
        },
        {
          title: 'Theming y Layout',
          description: 'Define tokens, superficies y estructura de app temprano para que el resto de la implementacion escale con orden.',
        },
      ],
    },
    'quick-start-showcase': {
      type: 'callout',
      key: 'quick-start-showcase',
      title: 'Quick Start',
      description:
        'Comienza con una instalacion simple y pasa rapido al primer render. Esta seccion sirve como puente entre la portada y la guia de integracion completa.',
      body: 'Instala Nuvex UI desde npm e integra los componentes que necesitas en tu aplicacion Vue sin configuraciones extensas para la primera pantalla.',
      labels: {
        panelTitle: 'Tan simple de usar',
        commandLabel: 'Instalar paquete',
      },
    },
    'theming-showcase': {
      type: 'callout',
      key: 'theming-showcase',
      title: 'Theming',
      description:
        'Personaliza el sistema visual sin romper consistencia entre componentes. Ajusta tokens y colores desde una base estable para evolucionar con tu marca.',
      body: 'Nuvex UI te permite definir temas, alternar estilos y mantener una identidad visual coherente en toda la aplicacion.',
      labels: {
        panelTitle: 'Tu sistema de diseno',
        cardTitle: 'Editar perfil',
        cardSubtitle: 'Actualiza los detalles de tu cuenta',
        fieldName: 'Nombre',
        fieldNamePlaceholder: 'Ingresa el nombre del tema',
        fieldLastName: 'Apellido',
        fieldLastNamePlaceholder: 'Ingresa el apellido',
        switchLabel: 'Activar modo oscuro',
        cancel: 'Cancelar',
        save: 'Guardar',
      },
    },
    'preview-canvas': {
      type: 'callout',
      key: 'preview-canvas',
      title: 'Area de vista previa de producto',
      description:
        'Esta seccion reserva el espacio para una vista embebida de dashboard. En esta primera iteracion solo deja resueltas la jerarquia, la proporcion y el contexto visual antes de conectar el iframe real.',
      body: 'Mas adelante este espacio puede alojar un iframe con un dashboard sencillo construido con cards, bar, navegacion, filtros y widgets de scheduling.',
      labels: {
        badge: 'Superficie de preview',
        status: 'Espacio de iframe reservado',
        frameTitle: 'Placeholder del dashboard demo',
        frameDescription: 'El embed vivo se montara dentro de esta card cuando el ejemplo de apoyo este listo.',
        shellLabel: 'Area de app embebida',
        noteTitle: 'Por que reservarlo ahora',
        noteBody: 'El placeholder permite que la landing absorba el demo futuro sin tener que redisenar spacing, proporciones ni el flujo de informacion a su alrededor.',
      },
    },
    'recommended-flow': {
      type: 'list',
      key: 'recommended-flow',
      title: 'Ruta sugerida dentro de la documentacion',
      description:
        'Una landing asi no solo debe atraer; tambien debe reducir friccion de navegacion. Este orden ayuda a pasar del setup a decisiones reales de implementacion sin vueltas innecesarias.',
      ordered: true,
      items: [
        'Confirma el setup del paquete y el primer render en Instalacion.',
        'Usa Inicio rapido para armar la primera pantalla y validar las primitivas base de layout.',
        'Entra a Componentes para elegir las piezas que necesita la funcionalidad inmediata.',
        'Vuelve a Theming y Layout cuando la pantalla exista y necesite pulido a nivel de sistema.',
      ],
      labels: {
        asideTitle: 'Buenos objetivos para la landing',
        asideBody: 'Si luego hace falta una zona de soporte adicional, esta seccion puede crecer hacia novedades, notas de migracion o una card compacta de roadmap sin cambiar la estructura base de la home.',
      },
    },
  },
}

export const homePages = {
  home: homeEditorialContentEs,
} as const

export default homePages