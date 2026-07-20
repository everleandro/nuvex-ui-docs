# Installation Page Spec v1

Estado: Draft
Fecha: 2026-07-09
Tipo: C (workflow / integration)
Ruta objetivo: `/docs/getting-started/installation`
Basado en: `docs/architecture/docs-page-standard-rfc.md`

## 1. Objetivo

Definir el contenido exacto de la pagina Installation antes de implementar su contrato tipado y renderer.

La pagina debe resolver una sola necesidad principal:

- instalar Nuvex UI,
- registrar el plugin,
- cargar estilos base,
- verificar que el setup funciona,
- y dirigir al siguiente paso correcto.

La pagina no debe absorber contenido que pertenece a:

- Nuxt Integration,
- Theming avanzado,
- SSR de tema,
- custom themes,
- o demos profundas de componentes.

## 2. Regla editorial

Installation es una pagina de workflow, no una pagina conceptual ni una pagina de componente.

Su secuencia debe responder estas preguntas en orden:

1. Que voy a instalar.
2. Que stack estoy usando.
3. Que comando debo correr.
4. Que archivo debo tocar.
5. Como verifico que funciono.
6. Cual es el siguiente paso.

## 2.1 Baseline de implementacion Type C

Installation define la base de implementacion para las paginas Tipo C v1.

Reglas obligatorias:

- El archivo Vue se escribe en orden `template -> script -> style`.
- Cada seccion se declara de forma explicita en el template. No se itera una coleccion heterogenea de secciones para renderizar la pagina completa.
- Todo el contenido editorial visible vive en `i18n/en/pages/installation.ts` y `i18n/es/pages/installation.ts`.
- La pagina arma localmente solo lo no editorial: icons, rutas, anchors, snippets, comandos y metadatos de presentacion.
- Cuando la pagina referencia otra pagina de docs, debe existir un link navegable hacia esa ruta.

Consecuencia practica:

- `installation.vue` actua como referencia base para futuras paginas Tipo C.

## 3. Estructura exacta

## 3.1 Hero

Titulo:

- `Installation`

Descripcion:

- `Instala Nuvex UI, registra el plugin y carga los estilos base para dejar tu proyecto listo antes de pasar a componentes, theming o layout.`

Actions:

- `Instalar con npm`
- `Ver integracion Nuxt`

Prerequisitos sugeridos:

- `Vue 3 o Nuxt 4`
- `Un proyecto ya creado`
- `Sass instalado si vas a importar framework.scss`

## 3.2 Seccion: Elige tu punto de partida

Tipo de bloque:

- `decision-grid`

Titulo:

- `Elige tu punto de partida`

Descripcion:

- `La instalacion base es corta, pero el archivo que debes tocar cambia segun tu stack.`

Items:

1. `Vue + Vite`
   - `Registra Nuvex UI en main.ts y carga estilos globales en el arranque de la app.`
2. `Nuxt`
   - `Registra Nuvex UI en un plugin y carga los estilos desde nuxt.config.ts en el orden correcto.`
3. `Proyecto existente`
   - `Usa esta guia si ya tienes routing, estilos y estructura propia y solo necesitas incorporar la libreria sin rehacer setup.`
4. `Explorar componentes`
   - `Si ya conoces el setup base, continua despues con Button, Text Field o Theming segun tu objetivo inmediato.`

## 3.3 Seccion: Instala el paquete

Tipo de bloque:

- `command-tabs`

Titulo:

- `Instala el paquete`

Descripcion:

- `Elige el gestor de paquetes que uses en tu proyecto. Si vas a importar framework.scss, instala tambien sass.`

Status-card sugerido:

- color: `warning`
- icon: `alert`
- texto: `Si omites sass, la importacion de nuvex-ui/framework.scss fallara en tiempo de build.`

Tabs exactos:

### npm

```bash
npm install nuvex-ui sass
```

### pnpm

```bash
pnpm add nuvex-ui sass
```

### yarn

```bash
yarn add nuvex-ui sass
```

### bun

```bash
bun add nuvex-ui sass
```

## 3.4 Seccion: Registro minimo en Vue + Vite

Tipo de bloque:

- `code-block`

Titulo:

- `Registro minimo en Vue + Vite`

Descripcion:

- `En una app Vue, registra el plugin en main.ts y carga primero styles.css y despues framework.scss.`

Snippet:

```ts
// src/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import { NuvexUI } from 'nuvex-ui'
import 'nuvex-ui/styles.css'
import 'nuvex-ui/framework.scss'

const app = createApp(App)

app.use(NuvexUI)
app.mount('#app')
```

## 3.5 Seccion: Registro minimo en Nuxt

Tipo de bloque:

- `code-block`

Titulo:

- `Registro minimo en Nuxt`

Descripcion:

- `En Nuxt, registra el plugin en app/plugins/nuvex-ui.ts y carga los estilos desde nuxt.config.ts.`

Status-card sugerido:

- color: `info`
- icon: `information`
- texto: `Este es el setup minimo para instalar la libreria. Persistencia de tema, SSR fino y storage custom deben vivir en una guia posterior de integracion o theming.`

Snippet 1:

```ts
// app/plugins/nuvex-ui.ts
import { NuvexUI } from 'nuvex-ui'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(NuvexUI)
})
```

Snippet 2:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  css: [
    'nuvex-ui/styles.css',
    'nuvex-ui/framework.scss',
  ],
})
```

## 3.6 Seccion: Prueba un primer componente

Tipo de bloque:

- `code-block`

Titulo:

- `Prueba un primer componente`

Descripcion:

- `Antes de seguir con theming o layout, confirma que la libreria ya renderiza un componente simple.`

Snippet:

```vue
<template>
  <div class="p-4">
    <EButton color="primary">Hello Nuvex UI</EButton>
  </div>
</template>
```

## 3.7 Seccion: Verifica la instalacion

Tipo de bloque:

- `checklist`

Titulo:

- `Verifica la instalacion`

Descripcion:

- `Usa esta lista para confirmar que el setup base quedo correcto antes de pasar a otras guias.`

Items:

- `La app compila sin errores de Sass.`
- `El primer componente se ve estilizado y no como HTML sin formato.`
- `Un EButton se renderiza sin warnings de componente no registrado.`
- `Las clases de framework y el acabado base de los componentes ya se reflejan si importaste framework.scss.`

## 3.8 Seccion: Problemas comunes

Tipo de bloque:

- `faq` o `callout-group`

Titulo:

- `Problemas comunes`

Descripcion:

- `Estos errores suelen aparecer en el primer setup y conviene resolverlos antes de seguir.`

Items:

1. `framework.scss no compila`
   - `Instala sass en tu proyecto antes de importar nuvex-ui/framework.scss.`
2. `Los estilos no se ven como esperas`
   - `Verifica el orden de carga: primero nuvex-ui/styles.css y despues nuvex-ui/framework.scss.`
3. `Los componentes no aparecen`
   - `Confirma que registraste NuvexUI con app.use(NuvexUI) o defineNuxtPlugin.`
4. `Mis variables Sass no se aplican`
   - `Si vas a personalizar framework.scss, define tus variables antes de importar el framework desde tu hoja global o desde la configuracion Sass del proyecto.`

## 3.9 Seccion: Siguiente paso recomendado

Tipo de bloque:

- `next-steps`

Titulo:

- `Siguiente paso recomendado`

Descripcion:

- `Con la instalacion base resuelta, el siguiente paso depende de si quieres probar componentes, estructurar pantallas o personalizar tema.`

Items:

- `Quick Start`
- `Button`
- `Theming Overview`
- `App Shell`

## 4. Limites explicitos de la pagina

No incluir en esta pagina:

- storage custom de tema,
- persistencia SSR de tema,
- variables avanzadas de SCSS,
- custom themes,
- matrices largas de compatibilidad,
- demos complejas por componente.

Si alguno de esos temas aparece, debe salir de Installation y moverse a una pagina posterior del mismo flujo.

## 5. Regla de presentacion para status-card

Cuando una seccion de Installation necesite resaltar un caveat importante:

- usar un card horizontal de ancho completo,
- preferiblemente tonal,
- con prepend icon,
- con color semantico de estado,
- y ubicado entre la descripcion editorial de la seccion y el bloque principal de tabs o codigo.

Esta regla aplica especialmente a:

- prerequisitos de `sass`,
- diferencias entre setup minimo y setup avanzado en Nuxt,
- y caveats de orden de carga de CSS.

## 6. Decisiones abiertas antes de implementar

Decisiones cerradas en v1:

- `Registro minimo en Vue + Vite` y `Registro minimo en Nuxt` viven como dos secciones `code-block` independientes.
- `Problemas comunes` se renderiza como grupo de cards, no como FAQ expandible.
- `installation.vue` renderiza sus secciones de forma explicita y usa el contenido editorial localizado solo como fuente de copy.

Decision abierta restante:

- Si `Quick Start` debe mantener pagina propia breve o absorber parte del contenido operativo de Installation.
