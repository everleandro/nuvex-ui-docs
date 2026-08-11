import type { DocsWorkflowPageContent } from '~/types/docs'

type AppShellSectionKey = 'structure' | 'base-template' | 'verify-structure' | 'next-steps'

export const appShellWorkflowContentEs: DocsWorkflowPageContent<AppShellSectionKey> = {
  kind: 'workflow',
  seo: {
    title: 'Estructura de aplicacion | Nuvex UI Docs',
    description:
      'Configura la estructura base de una aplicación Nuvex UI con barra, drawer de navegación y contenido principal.',
  },
  hero: {
    title: 'App Shell',
    descriptionHtml:
      "Configura la estructura base de una aplicación con <code class='docs-inline-code'>EApp</code>, <code class='docs-inline-code'>EBar</code>, <code class='docs-inline-code'>EDrawer</code> y <code class='docs-inline-code'>EMain</code>. Estos componentes comparten el mismo contexto de layout para coordinar la barra, la navegación y el contenido.",
  },
  sections: {
    structure: {
      title: 'Estructura',
      description: 'El shell separa la aplicación en regiones con responsabilidades claras.',
      items: [
        { title: 'EApp', description: 'Crea el contexto de layout que comparten todas las regiones.' },
        { title: 'EBar', description: 'Contiene la identidad, el título y las acciones superiores de la aplicación.' },
        { title: 'EDrawer', description: 'Contiene los enlaces y menús de navegación principal.' },
        { title: 'EMain y EContainer', description: 'Alojan la página activa y mantienen el contenido alineado.' },
      ],
    },
    'base-template': {
      title: 'Plantilla base',
      descriptionHtml:
        "Usa este playground como plantilla base recomendada para <code class='docs-inline-code'>EApp</code>, <code class='docs-inline-code'>EBar</code>, <code class='docs-inline-code'>EDrawer</code> y <code class='docs-inline-code'>EMain</code>. Ajusta props de layout como <code class='docs-inline-code'>clipped</code> y <code class='docs-inline-code'>fixed</code>, y luego copia el snippet generado con <code class='docs-inline-code'>NuxtPage</code> dentro de <code class='docs-inline-code'>EContainer</code>.",
    },
    'verify-structure': {
      title: 'Verifica la estructura',
      description: 'Antes de personalizar cada componente, confirma que la composición base funciona.',
      items: [
        'La barra se renderiza dentro del contexto de EApp.',
        'El drawer puede abrirse y cerrarse mediante drawerModel.',
        'La página activa se muestra dentro de EMain y EContainer.',
        'El contenido no necesita offsets o padding manual para compensar la barra y el drawer.',
      ],
    },
    'next-steps': {
      title: 'Siguientes pasos',
      description: 'Continúa con la guía específica de cada región cuando necesites configurar su comportamiento o apariencia.',
      items: [
        { title: 'Bar', description: 'Configura el contenido y el comportamiento de la barra superior.' },
        { title: 'Drawer', description: 'Configura la navegación lateral, su estado y sus variantes.' },
        { title: 'Container', description: 'Define el ancho y la alineación del contenido principal.' },
      ],
    },
  },
}

export const appShellPages = {
  appShell: appShellWorkflowContentEs,
} as const

export default appShellPages
