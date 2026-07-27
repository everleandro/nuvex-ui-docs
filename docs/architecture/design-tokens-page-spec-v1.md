# Design Tokens Page Spec v1

Estado: Draft
Fecha: 2026-07-27
Tipo: C (workflow / decision guide)
Ruta objetivo: `/docs/theming/design-tokens`
Basado en: `docs/architecture/docs-page-standard-rfc.md`
Alineado con: `docs/architecture/theming-section-rfc-v1.md`

## 1. Objetivo

Definir el contenido exacto de la pagina Design Tokens antes de implementar su contrato tipado y su version Type C v1.

La pagina debe resolver una sola necesidad principal:

- ayudar al usuario a elegir la familia de token correcta antes de cambiar la apariencia del sistema,
- dejar claro como Nuvex UI separa semantica, surfaces, contraste y paleta primitiva,
- explicar como mapear una decision visual de producto al token adecuado,
- ofrecer una referencia agrupada de los tokens expuestos por el framework,
- y evitar que el usuario confunda tokens, CSS overrides y custom themes.

La pagina no debe absorber contenido que pertenece a:

- CSS Variables como guia de overrides en cascada,
- Runtime Theme API como contrato operativo de seleccion o persistencia,
- una lista exhaustiva de variables CSS publicadas en DOM,
- una clase completa de teoria del color,
- o una guia profunda de custom themes.

## 2. Regla editorial

Design Tokens es una pagina Type C de decision, no una pagina de referencia plana ni una taxonomia abstracta desconectada de implementacion.

Su secuencia debe responder estas preguntas en orden:

1. Que tipo de decision visual estoy intentando tomar.
2. Que familia de token debo tocar para esa decision.
3. Como se relacionan semantic colors, surfaces y contrast tokens.
4. Cuando debo usar paleta primitiva en lugar de tokens semanticos.
5. Donde encuentro el nombre exacto del token en el framework.
6. Cuando cambiar seeds, overrides o tokens de tema.
7. Que errores de mapeo conviene evitar.
8. Cual es el siguiente paso correcto.

Regla de tono:

- explicar lo que aporta la arquitectura de tokens de Nuvex UI;
- evitar explicaciones basicas de CSS, color theory o programacion general;
- asumir que el lector ya sabe construir UI y necesita criterio para tocar la capa correcta del sistema.

## 2.1 Baseline de implementacion Type C

Design Tokens sigue la misma base de implementacion Type C usada por Installation, Quick Start, Nuxt Integration y Runtime Theme API.

Reglas obligatorias:

- El archivo Vue se escribe en orden `template -> script -> style`.
- Cada seccion se declara de forma explicita en el template. No se itera una coleccion heterogenea de secciones para renderizar la pagina completa.
- Todo el contenido editorial visible vive en `i18n/en/pages/design-tokens.ts` y `i18n/es/pages/design-tokens.ts`.
- La pagina arma localmente solo lo no editorial: rutas, anchors, snippets y metadatos de presentacion.
- Cuando la pagina referencia otra pagina de docs, debe existir un link navegable hacia esa ruta.

Consecuencia practica:

- `app/pages/docs/theming/design-tokens.vue` debe dejar de ser scaffold y pasar a ser una pagina Type C explicita.
- Los ejemplos deben partir de la arquitectura ya documentada en `drocket/docs/theming.md`, `docs/architecture/surface-usage-spec-v1.md` y de los tokens consumidos por la libreria.

## 3. Estructura exacta

Decision de forma:

- la pagina se organiza por familias de tokens;
- la primera mitad ayuda a decidir que familia tocar;
- la segunda mitad funciona como referencia del framework;
- y la referencia debe estar agrupada por familia, no como un listado unico mezclado.

## 3.1 Hero

Titulo:

- `Design Tokens`

Descripcion:

- `Usa esta guia para decidir que token debes cambiar en Nuvex UI cuando el problema real es visual, semantico o estructural.`

Actions:

- `Back to Theming Overview`
- `Open CSS Variables`

Prerequisitos sugeridos:

- `Ya sabes que tu cambio pertenece a theming y no a instalacion o layout base.`
- `Quieres ajustar color, surfaces o contraste sin inventar un tema nuevo por defecto.`
- `Necesitas criterio para tocar la capa correcta antes de escribir overrides.`

## 3.2 Seccion: What kind of change are you making

Section key:

- `choose-token-layer`

Tipo de bloque:

- `decision-grid`

Titulo:

- `What kind of change are you making`

Descripcion:

- `Empieza por la decision real. En Nuvex UI, no todas las variaciones visuales pertenecen a la misma familia de tokens.`

Items:

1. `Semantic meaning`
   - `Cuando quieres cambiar accion, estado, feedback o intencion de marca compartida.`
2. `Structural surface`
   - `Cuando el cambio afecta fondos de app, paneles, chrome o capas elevadas.`
3. `Readable contrast`
   - `Cuando el foreground debe seguir el contexto de una surface y no un color fijo arbitrario.`
4. `Extra tonal range`
   - `Cuando la capa semantica no alcanza y necesitas tonos reutilizables sin significado de producto.`

## 3.3 Seccion: Understand the token families

Section key:

- `token-families`

Tipo de bloque:

- `decision-grid`

Titulo:

- `Understand the token families`

Descripcion:

- `El sistema no trata todos los tokens por igual. Cada familia resuelve una clase distinta de problema visual.`

Debe cubrir:

- semantic color tokens;
- surface tokens;
- contrast surface tokens;
- primitive palette.

Nota editorial:

- Esta seccion debe explicar rol e intencion, no listar todas las variables publicas una por una.

Forma sugerida:

- cuatro cards o bloques paralelos;
- una por familia;
- cada una con `que resuelve`, `cuando usarla` y `cuando no usarla`.

## 3.4 Seccion: Map brand and product decisions correctly

Section key:

- `map-decisions-to-tokens`

Tipo de bloque:

- `code-block`

Titulo:

- `Map brand and product decisions correctly`

Descripcion:

- `La mejor forma de evitar overrides innecesarios es mapear primero la decision visual al token correcto.`

Status-card sugerido:

- color: `info`
- icon: `information`
- texto: `Si la decision debe mantenerse consistente en componentes y estados del sistema, probablemente pertenece a un token semantico y no a una regla CSS aislada.`

Snippets esperados:

- un ejemplo de `semantic-color-tokens-light` y `semantic-color-tokens-dark`;
- un ejemplo corto de `semantic-text-tokens-*` o contraste contextual cuando aplique.

Contenido recomendado:

- una mini matriz de decisiones tipo `si quieres X, empieza por Y`;
- ejemplos como `primary`, `success`, `warning`, `error`, `info` y decisiones de branding compartido.

## 3.5 Seccion: Use surfaces for structure, not decoration

Section key:

- `surfaces-not-decoration`

Tipo de bloque:

- `card-grid` o `decision-grid`

Titulo:

- `Use surfaces for structure, not decoration`

Descripcion:

- `Las surfaces no son una paleta libre. En Nuvex UI representan jerarquia estructural y deben elegirse por rol de layout.`

Debe cubrir:

- `surface-canvas`;
- `surface-base`;
- `surface-raised`;
- `surface-subtle`;
- y sus pares de contraste.

Alineacion requerida:

- mantener consistencia con `docs/architecture/surface-usage-spec-v1.md`.

Contenido recomendado:

- explicar `surface-canvas`, `surface-base`, `surface-raised` y `surface-subtle` como jerarquia estructural;
- reforzar sus pares `contrast-surface-*`;
- y evitar cualquier tono de catalogo visual aislado.

## 3.6 Seccion: Know when primitive palette is the right tool

Section key:

- `primitive-palette-usage`

Tipo de bloque:

- `code-block`

Titulo:

- `Know when primitive palette is the right tool`

Descripcion:

- `La paleta primitiva existe para rango tonal reutilizable sin cargar significado semantico de producto.`

Status-card sugerido:

- color: `warning`
- icon: `alert`
- texto: `Si un color debe significar accion, exito, error o estado compartido, empieza por tokens semanticos. Usa paleta primitiva cuando necesitas rango tonal, no significado.`

Snippets esperados:

- `primitive-color-seeds`;
- `primitive-color-overrides`;
- y un consumo CSS corto con `--e-palette-*`.

Contenido recomendado:

- explicar que la paleta primitiva sirve para rango tonal reutilizable;
- mostrar un caso donde seria un error usarla para reemplazar `primary` o `success`;
- y otro donde si tiene sentido en piezas ilustrativas, charts o decoracion controlada.

## 3.7 Seccion: Framework token reference

Section key:

- `framework-token-reference`

Tipo de bloque:

- `code-block`

Titulo:

- `Framework token reference`

Descripcion:

- `Una vez que ya elegiste la familia correcta, usa esta referencia para confirmar los nombres de token que el framework expone y consume.`

Decision de presentacion:

- no usar un solo `CodePanel` gigante;
- renderizar una card o bloque por familia;
- cada card con un `subtitle` orientado a familia;
- y cada `CodePanel` con el listado agrupado correspondiente.

Sub-bloques esperados:

1. `Semantic token reference`
   - `primary`, `secondary`, `tertiary`, `success`, `warning`, `error`, `info` y pares de contraste o texto cuando formen parte del contrato documentado.
2. `Surface token reference`
   - `surface-canvas`, `surface-base`, `surface-raised`, `surface-subtle` y tokens estructurales relacionados.
3. `Contrast token reference`
   - `contrast-surface-canvas`, `contrast-surface-base`, `contrast-surface-raised`, `contrast-surface-subtle`.
4. `Primitive palette reference`
   - convencion `--e-palette-{family}-{tone}` y familias principales disponibles.

Regla editorial:

- esta referencia debe confirmar nombres, no reemplazar la explicacion de cuando usar cada familia.

## 3.8 Seccion: Choose between seeds, overrides, or theme tokens

Section key:

- `choose-customization-layer`

Tipo de bloque:

- `decision-grid`

Titulo:

- `Choose between seeds, overrides, or theme tokens`

Descripcion:

- `No toda customizacion debe ocurrir en la misma capa. Esta seccion debe enseñar el criterio de eleccion antes de tocar codigo.`

Items:

1. `Change seeds`
   - `Cuando quieres regenerar una familia completa de tonos primitivos desde un color base.`
2. `Change primitive overrides`
   - `Cuando solo necesitas corregir tonos puntuales sin rehacer toda la escala.`
3. `Change semantic or surface tokens`
   - `Cuando la decision afecta el lenguaje visual compartido del sistema.`
4. `Use CSS overrides later`
   - `Cuando el ajuste pertenece a la cascada y no a la definicion semantica del tema.`

## 3.9 Seccion: Token mapping mistakes to avoid

Section key:

- `token-mistakes`

Tipo de bloque:

- `card-grid`

Titulo:

- `Token mapping mistakes to avoid`

Descripcion:

- `Estos errores suelen aparecer cuando se mezcla intencion visual, estructura y overrides en la capa equivocada.`

Items:

1. `Usar paleta primitiva para estados semanticos del sistema`
   - `Eso rompe consistencia cuando varios componentes dependen de un significado compartido como primary, error o success.`
2. `Usar surfaces como color decorativo`
   - `surface-base o surface-raised deben representar estructura, no branding arbitrario.`
3. `Resolver con CSS lo que era una decision de token`
   - `Si el cambio debe mantenerse entre temas y componentes, probablemente no deberia empezar por un override local.`
4. `Inventar un tema nuevo demasiado pronto`
   - `Si el cambio cabe en tokens del baseline, no escales a custom themes sin necesidad.`

## 3.10 Seccion: Next steps

Section key:

- `next-steps`

Tipo de bloque:

- `next-steps`

Titulo:

- `Next steps`

Descripcion:

- `Continua con la pagina que mejor encaje con tu siguiente accion despues de elegir la capa correcta del sistema de tokens.`

Items esperados:

1. `CSS Variables`
   - `Sigue ahi si el siguiente paso es hacer overrides en cascada con variables ya expuestas.`
2. `Light and Dark Themes`
   - `Continua si necesitas entender como se aplica el baseline en los temas built-in.`
3. `Custom Themes`
   - `Ve ahi si ya confirmaste que el producto necesita una variante adicional con identidad propia.`
4. `Runtime Theme API`
   - `Vuelve ahi solo si el problema real ahora es seleccion o persistencia del tema activo.`

## 4. Limites explicitos de la pagina

No incluir en esta pagina:

- una lista exhaustiva de `--e-*` variables publicas en runtime,
- una guia de `useTheme` o persistencia,
- un catalogo general de utility classes,
- una clase larga de teoria del color,
- ni una receta completa de custom themes.

## 5. Resultado esperado

La pagina se considera correcta cuando:

- el lector sabe distinguir semantic tokens, surfaces, contrast tokens y paleta primitiva,
- entiende que tipo de decision visual pertenece a cada familia,
- puede usar una referencia agrupada del framework para confirmar nombres reales de token,
- puede decidir entre seeds, overrides y tokens de tema sin saltar directamente a CSS,
- evita usar surfaces como decoracion y paleta primitiva como semantica de sistema,
- y sale con claridad sobre si su siguiente paso es CSS Variables, Light and Dark Themes, Runtime Theme API o Custom Themes.
