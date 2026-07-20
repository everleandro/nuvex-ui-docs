import type { DocsQuickStartEditorialContent } from '~/types/docs'

export const quickStartEditorialContentEs: DocsQuickStartEditorialContent = {
  seo: {
    title: 'Inicio rapido',
    description:
      'Construye la estructura inicial recomendada con Nuvex UI despues de la instalacion usando app bar, drawer y area principal de contenido.',
  },
  hero: {
    title: 'Inicio rapido',
    description:
      'Construye la estructura inicial recomendada para empezar una aplicacion con Nuvex UI despues de la instalacion.',
    descriptionHtml:
      'Construye la estructura inicial recomendada para empezar una aplicacion con Nuvex UI despues de la instalacion. Esta guia monta una base minima con <a href="/docs/component/layout/bar" class="no-underline primary--text">app bar</a>, <a href="/docs/component/layout/drawer" class="no-underline primary--text">drawer</a> y un area principal de contenido antes de pasar a patrones de layout mas profundos.',
    prerequisitesTitle: 'Antes de empezar',
    actions: {
      backToInstallation: 'Volver a Installation',
      openAppShell: 'Abrir docs de App Shell',
    },
    prerequisites: [
      'Nuvex UI ya esta instalado y registrado.',
      'Los estilos base ya cargan correctamente.',
      'La app ya compila sin errores de setup.',
      'Quieres la estructura inicial recomendada antes de entrar en patrones de layout mas profundos.',
    ],
  },
  sections: {
    'recommended-structure': {
      title: 'Estructura inicial recomendada',
      description:
        'Al terminar esta guia tendras una base de aplicacion simple y util: una barra superior, navegacion lateral y un area principal lista para empezar a montar pantallas reales antes de pasar a patrones de layout mas avanzados.',
      items: [
        {
          title: 'App bar',
          description: 'Define la franja superior de la aplicacion y deja visible el punto de entrada principal para acciones y navegacion.',
          icon: 'layout',
        },
        {
          title: 'Drawer de navegacion',
          description: 'Agrupa los destinos principales de la app en una navegacion lateral sencilla desde el primer setup.',
          icon: 'layout',
        },
        {
          title: 'Area principal',
          description: 'Reserva una zona de contenido estable para que las pantallas queden alineadas, legibles y listas para crecer.',
          icon: 'layout',
        },
        {
          title: 'Boton de menu',
          description: 'Agrega una interaccion basica para abrir y cerrar la navegacion lateral desde la barra superior.',
          icon: 'forms',
        },
      ],
    },
    'create-layout-base': {
      title: 'Crea la base del layout',
      description:
        'Empieza con la jerarquia estructural minima: EApp, una barra superior, la region principal y un contenedor de contenido. Eso da un marco claro a la app antes de agregar navegacion.',
    },
    'add-drawer': {
      title: 'Agrega el drawer de navegacion',
      description:
        'Agrega un drawer basico con algunos items de navegacion de ejemplo. En este punto el objetivo es la estructura, no el diseno final de navegacion.',
    },
    'connect-drawer-state': {
      title: 'Conecta el estado del drawer',
      description:
        'Introduce un estado local pequeno para controlar si el drawer esta abierto. Con esto la estructura deja de ser fija y queda lista para conectar la interaccion del siguiente paso.',
    },
    'add-bar-toggle': {
      title: 'Agrega el boton de menu en la app bar',
      description:
        'Coloca un boton de menu dentro de EBar y conectalo con el estado del drawer para abrir y cerrar la navegacion lateral.',
    },
    'assemble-initial-structure': {
      title: 'Arma la estructura inicial recomendada',
      description:
        'Ahora junta las piezas en un setup inicial completo. Esta es la base estructural que recomienda el framework antes de expandir hacia navegacion mas rica, theming o contenido real de pantalla.',
      calloutDescription:
        'Si tu app necesita variantes de navegacion, areas persistentes o un shell mas completo, continua con App Shell despues de terminar esta base inicial.',
    },
    'verify-structure': {
      title: 'Verifica la estructura',
      description:
        'Usa esta lista para confirmar que la estructura inicial ya funciona antes de pasar a layout mas profundo o a guias de componentes.',
      items: [
        'La app bar se renderiza como parte del layout de la aplicacion.',
        'El drawer abre y cierra desde el boton de menu.',
        'El contenido principal queda dentro de EMain y EContainer.',
        'El area principal ya muestra contenido real dentro de la estructura inicial.',
      ],
    },
    'next-steps': {
      title: 'Siguientes pasos recomendados',
      description:
        'Con la estructura inicial lista, elige la siguiente guia segun si quieres profundizar en layout, agregar acciones, introducir inputs o continuar con theming.',
      items: [
        {
          title: 'App Shell',
          description: 'Profundiza en patrones de layout, decisiones estructurales y variantes del shell.',
        },
        {
          title: 'Button',
          description: 'Agrega la primera accion a la estructura usando una pagina de componente simple y orientada a produccion.',
        },
        {
          title: 'Text Field',
          description: 'Introduce captura de datos y empieza a convertir el layout en un flujo funcional.',
        },
        {
          title: 'Theming Overview',
          description: 'Continua con tokens, variables CSS y personalizacion de tema cuando la estructura ya este estable.',
        },
      ],
    },
  },
}

export const quickStartPages = {
  quickStart: quickStartEditorialContentEs,
} as const

export default quickStartPages