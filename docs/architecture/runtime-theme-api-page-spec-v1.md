# Runtime Theme API Page Spec v1

Estado: Draft
Fecha: 2026-07-27
Tipo: C (workflow / operational guide)
Ruta objetivo: `/docs/theming/runtime-theme-api`
Basado en: `docs/architecture/docs-page-standard-rfc.md`
Alineado con: `docs/architecture/theming-section-rfc-v1.md`

## 1. Objetivo

Definir el contenido exacto de la pagina Runtime Theme API antes de implementar su contrato tipado y su version Type C v1.

La pagina debe resolver una sola necesidad principal:

- operar el tema activo desde codigo usando el contrato real que expone Nuvex UI,
- dejar claro que informacion ya entrega la libreria en runtime,
- explicar como cambia y persiste el tema activo,
- aclarar que opciones modifican la resolucion inicial y la salida al DOM,
- y dejar al usuario listo para construir un toggle, selector o logica de runtime sin revisar el source.

La pagina no debe absorber contenido que pertenece a:

- Theming Overview como pagina de decision,
- una guia profunda de SSR o cookies en Nuxt,
- teoria amplia de tokens,
- una explicacion general de composables o `ref`,
- o la guia completa de Custom Themes.

## 2. Regla editorial

Runtime Theme API es una pagina de workflow operativo, no una pagina conceptual ni una referencia academica de API.

Su secuencia debe responder estas preguntas en orden:

1. Que me da Nuvex UI en runtime sin que yo lo reconstruya.
2. Como decide la libreria el tema inicial.
3. Como leo el estado actual y el inventario de temas.
4. Como cambio o reseteo el tema activo.
5. Como persisto esa decision.
6. Que escribe la libreria en el DOM.
7. Cuando puedo emitir tokens como CSS variables.
8. Como agrego o quito temas en runtime.
9. Cuales son los errores frecuentes al usar este contrato.
10. Cual es el siguiente paso correcto.

Regla de tono:

- explicar lo que aporta la libreria;
- evitar explicar fundamentos basicos de Vue, JavaScript o eventos;
- asumir que el lector ya sabe programar y necesita claridad operativa sobre Nuvex UI.

## 2.1 Baseline de implementacion Type C

Runtime Theme API sigue la misma base de implementacion Type C usada por Installation, Quick Start y Nuxt Integration.

Reglas obligatorias:

- El archivo Vue se escribe en orden `template -> script -> style`.
- Cada seccion se declara de forma explicita en el template. No se itera una coleccion heterogenea de secciones para renderizar la pagina completa.
- Todo el contenido editorial visible vive en `i18n/en/pages/runtime-theme-api.ts` y `i18n/es/pages/runtime-theme-api.ts`.
- La pagina arma localmente solo lo no editorial: rutas, anchors, snippets y metadatos de presentacion.
- Cuando la pagina referencia otra pagina de docs, debe existir un link navegable hacia esa ruta.

Consecuencia practica:

- `app/pages/docs/theming/runtime-theme-api.vue` debe dejar de ser scaffold y pasar a ser una pagina Type C explicita.
- Los snippets deben partir del contrato real de `drocket/src/theme/index.ts` y de usos reales dentro de la doc app cuando aporten contexto.

## 3. Estructura exacta

## 3.1 Hero

Titulo:

- `Runtime Theme API`

Descripcion:

- `Usa el contrato de runtime de Nuvex UI para leer, cambiar, persistir y extender el tema activo sin reconstruir la logica base del sistema.`

Actions:

- `Back to Theming Overview`
- `Open Custom Themes`

Prerequisitos sugeridos:

- `Ya entiendes que light y dark son el baseline oficial de la libreria.`
- `Quieres operar el tema desde app code, no redefinir el sistema visual completo.`
- `Tu proyecto ya tiene Nuvex UI instalado y renderizando correctamente.`

## 3.2 Seccion: What Nuvex UI gives you at runtime

Section key:

- `what-nuvex-ui-gives-you`

Tipo de bloque:

- `decision-grid`

Titulo:

- `What Nuvex UI gives you at runtime`

Descripcion:

- `Antes de escribir logica propia, identifica que partes ya resuelve la libreria para seleccion de tema, persistencia y salida al DOM.`

Items:

1. `Built-in themes`
   - `La libreria ya registra light y dark como baseline disponible desde el primer render util.`
2. `Initial resolution`
   - `El tema inicial puede salir de storage, preferencia del sistema o fallback configurado sin que tengas que coordinar varios pasos manuales.`
3. `Runtime state`
   - `useTheme ya expone el tema actual y el inventario disponible para pintar toggles o selectores.`
4. `DOM sync`
   - `Al cambiar tema, la libreria actualiza el atributo objetivo y el color-scheme cuando corresponde.`
5. `Optional CSS vars`
   - `Si lo habilitas, los tokens del tema activo se publican como CSS variables con prefijo configurable.`
6. `Dynamic registration`
   - `Puedes registrar y quitar temas adicionales en runtime sin rearmar el plugin.`

## 3.3 Seccion: How the initial theme resolves

Section key:

- `resolve-initial-theme`

Tipo de bloque:

- `code-block`

Titulo:

- `How the initial theme resolves`

Descripcion:

- `Esta es la parte operativa que mas evita comportamiento inesperado: Nuvex UI intenta restaurar un tema valido desde storage, luego considera system preference y finalmente cae al fallback configurado.`

Status-card sugerido:

- color: `info`
- icon: `information`
- texto: `Si el valor almacenado no existe en el registro real de temas, la libreria no lo aplica y continua con el siguiente paso de resolucion.`

Snippet esperado:

- Un snippet corto que muestre la configuracion `theme` con `defaultTheme`, `storage` y `system`, no una copia extensa del source interno.

Nota editorial:

- No explicar SSR de forma general. Solo aclarar como cambia la resolucion cuando existe `storage.get` custom o cuando `system.enabled` participa.

## 3.4 Seccion: Inspect theme state

Section key:

- `inspect-theme-state`

Tipo de bloque:

- `code-block`

Titulo:

- `Inspect theme state`

Descripcion:

- `La libreria ya expone el estado necesario para pintar UI de seleccion o para ramificar comportamiento sin leer el DOM ni mantener un store paralelo.`

Debe cubrir:

- `useTheme`
- `currentTheme`
- `availableThemes`
- `hasTheme`
- `getTheme`
- `getThemes`

Snippets esperados:

Snippet 1:

```ts
import { useTheme } from 'nuvex-ui'

const {
  currentTheme,
  availableThemes,
  hasTheme,
  getTheme,
  getThemes,
} = useTheme()
```

Snippet 2:

- un ejemplo de selector o menu que use `availableThemes` para iterar nombres y labels.

Nota editorial:

- Explicar la diferencia practica entre `availableThemes` y `getThemes()` desde la perspectiva del consumidor de la libreria.

## 3.5 Seccion: Change the active theme

Section key:

- `change-active-theme`

Tipo de bloque:

- `code-block`

Titulo:

- `Change the active theme`

Descripcion:

- `Usa estas operaciones cuando la app necesita fijar un tema, alternar entre opciones conocidas o volver al fallback del sistema.`

Debe cubrir:

- `setTheme`
- `toggleTheme`
- `resetTheme`
- comportamiento ante tema desconocido

Status-card sugerido:

- color: `warning`
- icon: `alert`
- texto: `setTheme ignora nombres desconocidos y evita romper el estado activo, pero ese caso debe tratarse como error de integracion de tu app.`

Snippets esperados:

- un toggle simple entre `light` y `dark`;
- un selector que use `setTheme(name)`;
- y un ejemplo corto de `resetTheme()` para volver al fallback.

## 3.6 Seccion: Persist the user choice

Section key:

- `persist-theme-choice`

Tipo de bloque:

- `code-block`

Titulo:

- `Persist the user choice`

Descripcion:

- `Nuvex UI ya contempla persistencia por llave propia o por adaptador custom. Esta seccion debe explicar como conectarla, no como reinventarla.`

Debe cubrir:

- `storage.enabled`
- `storage.key`
- `storage.get`
- `storage.set`

Status-card sugerido:

- color: `info`
- icon: `information`
- texto: `Si tu app necesita una fuente SSR de verdad, conecta un storage custom y deja la implementacion profunda de framework para una guia de integracion.`

Snippets esperados:

- configuracion con `storage.key`;
- configuracion con `storage.get` y `storage.set` custom.

## 3.7 Seccion: Control the DOM output

Section key:

- `control-dom-output`

Tipo de bloque:

- `code-block`

Titulo:

- `Control the DOM output`

Descripcion:

- `Cuando el tema cambia, la libreria sincroniza un atributo objetivo y puede ajustar color-scheme. Esta seccion debe dejar claro cual es ese contrato visible.`

Debe cubrir:

- `attribute.name`
- `attribute.darkValue`
- `attribute.lightValue`
- `isDark` y su efecto sobre `color-scheme`

Snippet esperado:

- configuracion `theme.attribute` con ejemplo de nombre y valores custom.

## 3.8 Seccion: Emit theme tokens as CSS variables

Section key:

- `emit-css-variables`

Tipo de bloque:

- `code-block`

Titulo:

- `Emit theme tokens as CSS variables`

Descripcion:

- `Si el runtime tambien debe publicar tokens del tema activo para consumo CSS, Nuvex UI puede escribirlos automaticamente sin que montes una capa adicional.`

Debe cubrir:

- `applyTokensAsCssVars`
- `cssVarPrefix`

Status-card sugerido:

- color: `success`
- texto: `Esta opcion agrega una salida CSS del tema activo. No reemplaza la decision de cuando conviene cambiar tokens frente a hacer overrides en CSS.`

Snippet esperado:

- configuracion con `applyTokensAsCssVars: true` y `cssVarPrefix` custom.

## 3.9 Seccion: Register themes at runtime

Section key:

- `register-runtime-themes`

Tipo de bloque:

- `code-block`

Titulo:

- `Register themes at runtime`

Descripcion:

- `Usa runtime registration cuando tu app necesita agregar o retirar variantes adicionales durante ejecucion sin alterar el contrato de los built-ins.`

Debe cubrir:

- `registerTheme`
- `unregisterTheme`
- limite sobre `light` y `dark`

Status-card sugerido:

- color: `warning`
- icon: `alert`
- texto: `Los built-ins light y dark forman parte del baseline de la libreria. No se re-registran ni se eliminan desde este contrato.`

Snippet esperado:

- registro de un tema `ocean` y eliminacion posterior.

Nota editorial:

- No convertir esta seccion en la guia principal de Custom Themes. Esa pagina cubre estructura, criterios y mantenimiento a mas profundidad.

## 3.10 Seccion: App integration patterns

Section key:

- `app-integration-patterns`

Tipo de bloque:

- `code-block`

Titulo:

- `App integration patterns`

Descripcion:

- `Cierra la pagina con patrones cortos y reales de uso para que el lector vea como encaja el contrato en UI cotidiana.`

Patrones minimos:

1. `App bar toggle`
   - `Un boton de alternancia para light/dark.`
2. `Theme selector`
   - `Una lista o select basada en availableThemes.`
3. `Guard before setTheme`
   - `Un ejemplo corto que valide con hasTheme antes de aplicar una preferencia externa.`

## 3.11 Seccion: Runtime mistakes to avoid

Section key:

- `runtime-mistakes`

Tipo de bloque:

- `decision-grid` o `card-grid`

Titulo:

- `Runtime mistakes to avoid`

Descripcion:

- `Estos errores no vienen de programacion basica, sino de usar el contrato de theming en la capa equivocada o con suposiciones incorrectas.`

Items:

1. `Usar runtime para un problema de tokens`
   - `Si el problema real es visual y estable, probablemente debes ir a Design Tokens o CSS Variables.`
2. `Asumir que cualquier string funciona`
   - `setTheme solo aplica nombres registrados y conocidos por la libreria.`
3. `Intentar redefinir built-ins en runtime`
   - `light y dark no son temas arbitrarios del usuario; son parte del baseline del sistema.`
4. `Montar un registro paralelo`
   - `Si ya tienes availableThemes y getThemes(), evita duplicar esa fuente de verdad en otra estructura de app sin necesidad.`

## 3.12 Seccion: Next steps

Section key:

- `next-steps`

Tipo de bloque:

- `next-steps`

Titulo:

- `Next steps`

Descripcion:

- `Continua segun si tu siguiente decision es operativa, visual o estructural dentro del sistema de tema.`

Items esperados:

1. `Theming Overview`
   - `Vuelve a la pagina de decision si necesitas reubicar el problema en la capa correcta.`
2. `Light and Dark Themes`
   - `Revisa el baseline oficial antes de cambiar el modelo operativo del runtime.`
3. `Custom Themes`
   - `Continua si necesitas una variante nueva con identidad propia.`
4. `Design Tokens`
   - `Ve ahi si el problema real es semantico y visual, no de seleccion runtime.`

## 4. Limites explicitos de la pagina

No incluir en esta pagina:

- una guia completa de cookies SSR en Nuxt,
- teoria amplia de tokens o paletas primitivas,
- una explicacion de fundamentos de `ref`, eventos o sintaxis Vue,
- personalizacion build-time profunda de light y dark,
- ni una estrategia completa de custom themes a largo plazo.

## 5. Resultado esperado

La pagina se considera correcta cuando:

- el lector entiende que parte del trabajo de runtime ya hace Nuvex UI por el,
- puede usar `availableThemes`, `currentTheme`, `setTheme` y `toggleTheme` sin revisar source interno,
- sabe como conectar persistencia custom sin convertir la pagina en una guia de framework,
- entiende que salida visible produce la libreria en el DOM,
- y reconoce cuando debe saltar a Custom Themes, Design Tokens o CSS Variables en lugar de seguir forzando Runtime Theme API.
