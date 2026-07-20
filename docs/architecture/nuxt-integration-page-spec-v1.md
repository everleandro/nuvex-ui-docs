# Nuxt Integration Page Spec v1

Estado: Draft
Fecha: 2026-07-20
Tipo: C (workflow / integration)
Ruta objetivo: `/docs/getting-started/nuxt-integration`
Basado en: `docs/architecture/docs-page-standard-rfc.md`

## 1. Objetivo

Definir el contenido exacto de la pagina Nuxt Integration antes de implementar su contrato tipado y su version Type C v1.

La pagina debe resolver una sola necesidad principal:

- integrar Nuvex UI dentro de una app Nuxt ya instalada,
- dejar claro que archivos de Nuxt participan en esa integracion,
- explicar el orden correcto de carga de estilos,
- establecer una estrategia de tema compatible con SSR,
- verificar que el tema inicial no depende solo de `localStorage`,
- y dirigir al siguiente paso correcto dentro de theming o layout.

La pagina no debe absorber contenido que pertenece a:

- Installation base,
- Quick Start,
- custom themes profundos,
- API completa de theming en runtime,
- una guia general de SSR en Nuxt,
- o demos amplias de componentes.

## 2. Regla editorial

Nuxt Integration es una pagina de workflow, no una pagina conceptual ni una pagina de componente.

Su secuencia debe responder estas preguntas en orden:

1. Que agrega esta guia sobre Installation.
2. Que archivos de Nuxt debo tocar.
3. Como registrar el plugin en Nuxt.
4. Como cargar estilos y overrides sin romper el orden.
5. Como persistir el tema para SSR y cliente.
6. Como verifico que no hay desalineacion entre server y client.
7. Cual es el siguiente paso correcto.

## 2.1 Baseline de implementacion Type C

Nuxt Integration sigue la misma base de implementacion Type C usada por Installation y Quick Start.

Reglas obligatorias:

- El archivo Vue se escribe en orden `template -> script -> style`.
- Cada seccion se declara de forma explicita en el template. No se itera una coleccion heterogenea de secciones para renderizar la pagina completa.
- Todo el contenido editorial visible vive en `i18n/en/pages/nuxt-integration.ts` y `i18n/es/pages/nuxt-integration.ts`.
- La pagina arma localmente solo lo no editorial: rutas, anchors, snippets, comandos y metadatos de presentacion.
- Cuando la pagina referencia otra pagina de docs, debe existir un link navegable hacia esa ruta.

Consecuencia practica:

- `nuxt-integration.vue` debe dejar de ser scaffold y pasar a ser una pagina Type C explicita.
- El ejemplo canonical de la integracion puede salir de la implementacion real que ya usa esta doc en `app/plugins/nuvex-ui.ts` y `nuxt.config.ts`.

## 3. Estructura exacta

## 3.1 Hero

Titulo:

- `Nuxt Integration`

Descripcion:

- `Integra Nuvex UI en Nuxt con una base compatible con SSR, carga correcta de estilos y persistencia de tema antes de pasar a theming mas profundo o a layout.`

Actions:

- `Back to Installation`
- `Open Theming Overview`

Prerequisitos sugeridos:

- `Ya completaste Installation o ya tienes el setup minimo funcionando en Nuxt.`
- `Tu app Nuxt ya compila con Nuvex UI y estilos base.`
- `Quieres resolver integracion real de Nuxt antes de profundizar en theming o App Shell.`

## 3.2 Seccion: Que agrega esta guia

Tipo de bloque:

- `decision-grid` o `card-grid`

Titulo:

- `What this guide adds`

Descripcion:

- `Installation deja lista la base minima. Esta guia resuelve la capa especifica de Nuxt para que tema, SSR y carga inicial queden alineados.`

Items:

1. `Nuxt plugin`
   - `Registra Nuvex UI dentro del ciclo normal de plugins de Nuxt en lugar de tratarlo como un setup generico de Vue.`
2. `Style loading order`
   - `Confirma el orden de styles.css, framework.scss y estilos propios dentro de nuxt.config.ts.`
3. `SSR theme persistence`
   - `Usa cookie como fuente de verdad para que el server conozca el tema inicial antes de hidratar.`
4. `Client fallback`
   - `Mantiene compatibilidad con localStorage en cliente sin depender de el como unica fuente.`

## 3.3 Seccion: Registra el plugin en Nuxt

Tipo de bloque:

- `code-block`

Titulo:

- `Register the Nuxt plugin`

Descripcion:

- `Empieza desde el archivo de plugin donde Nuxt monta Nuvex UI. Aqui es donde despues podras agregar configuracion especifica de tema o storage.`

Snippet base esperado:

```ts
// app/plugins/nuvex-ui.ts
import { NuvexUI } from 'nuvex-ui'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(NuvexUI)
})
```

Nota editorial:

- Esta seccion puede partir del setup minimo, pero debe preparar el terreno para la persistencia SSR que se desarrolla despues.

## 3.4 Seccion: Carga estilos y overrides en nuxt.config.ts

Tipo de bloque:

- `code-block`

Titulo:

- `Load styles in nuxt.config.ts`

Descripcion:

- `En Nuxt, el orden de los estilos define si el framework y tus overrides entran en la cascada correcta desde el primer render.`

Status-card sugerido:

- color: `warning`
- icon: `alert`
- texto: `Carga primero nuvex-ui/styles.css, despues nuvex-ui/framework.scss y deja tus estilos de app al final.`

Snippet esperado:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  css: [
    'nuvex-ui/styles.css',
    'nuvex-ui/framework.scss',
    '~/assets/styles/app.scss',
  ],
})
```

## 3.5 Seccion: Persiste el tema para SSR y cliente

Tipo de bloque:

- `code-block`

Titulo:

- `Persist the theme across SSR and client`

Descripcion:

- `Si el tema inicial solo vive en localStorage, el server no puede conocerlo antes de renderizar. Usa una cookie como fuente SSR y conserva el fallback cliente solo como compatibilidad.`

Status-card sugerido:

- color: `info`
- icon: `information`
- texto: `En esta guia, la cookie es la fuente de verdad para SSR. localStorage queda como apoyo cliente y compatibilidad legacy.`

Snippets esperados:

Snippet 1:

```ts
const themeCookie = useCookie<string | undefined>('nuvex-ui-theme', {
  sameSite: 'lax',
  path: '/',
})
```

Snippet 2:

```ts
theme: {
  storage: {
    get: () => import.meta.server ? themeCookie.value : readThemeCookie() || readLegacyTheme(),
    set: (themeName: string) => {
      if (import.meta.server) {
        return
      }

      themeCookie.value = themeName
      window.localStorage.setItem('nuvex-ui:theme', themeName)
    },
  },
}
```

Nota editorial:

- La implementacion final debe basarse en el ejemplo real que ya usa esta doc en `app/plugins/nuvex-ui.ts`, no en un pseudo ejemplo inventado.

## 3.6 Seccion: Ensambla la integracion Nuxt completa

Tipo de bloque:

- `code-block`

Titulo:

- `Assemble the Nuxt integration`

Descripcion:

- `Ahora junta plugin, cookie y lectura cliente en un solo punto de integracion para que la app ya tenga un tema inicial coherente en SSR y en cliente.`

Callout sugerido:

- color: `success`
- texto: `Con esta base, el server ya puede resolver el tema inicial y el cliente puede mantenerlo sin depender solo de hidratacion posterior.`

Snippet esperado:

- Un snippet completo basado en `app/plugins/nuvex-ui.ts` tal como funciona en la doc.

## 3.7 Seccion: Verifica la integracion

Tipo de bloque:

- `checklist`

Titulo:

- `Verify the integration`

Descripcion:

- `Usa esta lista para confirmar que la integracion Nuxt ya esta lista antes de pasar a theming mas profundo.`

Items:

- `La app compila y monta Nuvex UI desde el plugin de Nuxt.`
- `Los estilos base y framework se aplican desde nuxt.config.ts en el orden correcto.`
- `El tema inicial no depende solo de localStorage.`
- `Al recargar la pagina, el tema persiste sin desalinearse entre server y client.`
- `No aparece un cambio visual evidente de tema justo despues de hidratar.`

## 3.8 Seccion: Problemas comunes

Tipo de bloque:

- `faq` o `callout-group`

Titulo:

- `Common pitfalls`

Descripcion:

- `Estos problemas suelen aparecer cuando la integracion Nuxt ya intenta ir mas alla del setup minimo y conviene resolverlos antes de continuar con theming.`

Items:

1. `El tema cambia despues de hidratar`
   - `Verifica que el server lea el tema desde cookie y que el cliente no dependa solo de localStorage para el valor inicial.`
2. `Los estilos no se aplican en el orden esperado`
   - `Confirma que styles.css va antes de framework.scss y que tus overrides se cargan despues.`
3. `El tema no persiste entre recargas`
   - `Revisa que la escritura cliente actualice la cookie y no solo localStorage.`
4. `Quiero customizar el tema mas alla del storage`
   - `Eso ya pertenece a Theming Overview, Runtime Theme API o a una guia especifica de custom themes.`

## 3.9 Seccion: Siguientes pasos recomendados

Tipo de bloque:

- `next-steps`

Titulo:

- `Recommended next steps`

Descripcion:

- `Cuando la integracion Nuxt ya esta estable, continua con la pagina que mejor encaje con tu siguiente decision sobre tema, runtime o layout.`

Items:

- `Theming Overview`
- `Runtime Theme API`
- `Light and Dark Themes`
- `App Shell`

## 4. Limites explicitos de la pagina

No incluir en esta pagina:

- instalacion del paquete otra vez,
- setup Vue + Vite,
- quick start de layout,
- custom themes profundos,
- catalogos amplios de tokens,
- documentacion general de cookies en Nuxt,
- o SSR generico que no afecte la integracion de Nuvex UI.

Si alguno de esos temas aparece, debe salir de Nuxt Integration y moverse a Installation, Quick Start o Theming segun corresponda.

## 5. Regla de presentacion para status-card

Cuando una seccion de Nuxt Integration necesite resaltar un caveat importante:

- usar un card horizontal de ancho completo,
- preferiblemente tonal,
- con prepend icon cuando aporte claridad,
- con color semantico de estado,
- y ubicado entre la descripcion editorial y el bloque principal de codigo.

Esta regla aplica especialmente a:

- orden de carga de CSS,
- cookie como fuente SSR,
- y diferencia entre persistencia cliente y persistencia compatible con server render.

## 6. Decisiones abiertas antes de implementar

Decisiones cerradas en v1:

- Nuxt Integration se implementa como pagina Type C explicita, no como scaffold.
- La pagina parte del supuesto de que Installation ya fue resuelta.
- El ejemplo canonical de SSR/theme debe salir de la implementacion real de esta doc.
- La persistencia SSR de tema es parte central de la pagina, no un caveat menor.

Decisiones abiertas restantes:

- Si la seccion `Que agrega esta guia` conviene renderizarse como `decision-grid` o como grid de cards simples.
- Si el snippet de integracion completa debe mostrarse en una sola tarjeta o dividido en plugin base + storage de tema.