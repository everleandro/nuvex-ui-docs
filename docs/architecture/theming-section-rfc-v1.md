# RFC: Theming Section v1

Estado: Draft
Fecha: 2026-07-24
Scope: nuvex-ui-docs
Seccion objetivo: `/docs/theming/*`
Basado en: `docs/architecture/docs-page-standard-rfc.md`

## 1. Objetivo

Definir la arquitectura editorial completa de la seccion Theming antes de implementar sus paginas.

Este RFC formaliza:

- la taxonomia oficial de la seccion Theming;
- el objetivo funcional de cada pagina;
- los limites entre Theming, Getting Started, Design System y Utilities;
- el contenido que debe vivir en cada pagina y el contenido que debe salir de ella;
- el orden recomendado de implementacion;
- y la referencia canonica que debe preservarse mientras avancemos pagina por pagina.

Este documento debe actuar como fuente de verdad durante toda la implementacion de Theming v1.

Si una decision futura contradice este RFC, primero se actualiza este archivo y despues se implementa el cambio en las paginas.

## 2. Contexto actual

La navegacion actual expone 6 paginas bajo Theming:

- `/docs/theming/overview`
- `/docs/theming/runtime-theme-api`
- `/docs/theming/design-tokens`
- `/docs/theming/css-variables`
- `/docs/theming/light-and-dark-themes`
- `/docs/theming/custom-themes`

Estado actual:

- Todas esas rutas siguen en scaffold.
- La capacidad real de theming ya existe en la libreria.
- El conocimiento tecnico esta repartido entre una guia monolitica y el codigo fuente del sistema de tema.

Fuentes tecnicas canonicas en la libreria:

- `drocket/docs/theming.md`
- `drocket/src/theme/index.ts`
- `drocket/src/theme/types.ts`
- `drocket/src/theme/index.spec.ts`

Problema actual:

- Si implementamos las paginas sin una frontera editorial clara, Theming va a duplicar Installation, Nuxt Integration y parte de Design System.
- Si fusionamos todo en una sola pagina, volvemos a una guia monolitica dificil de navegar.
- Si dividimos sin criterio, el usuario no sabra en que pagina resolver cada necesidad.

## 3. Decision de arquitectura

Para Theming v1 se mantiene la taxonomia actual de 6 paginas.

Decision explicita:

- No agregar nuevas paginas en esta fase.
- No eliminar paginas de la navegacion en esta fase.
- No fusionar paginas mientras el contenido siga teniendo preguntas de usuario distintas.

Justificacion:

- La libreria ya tiene suficiente superficie tecnica para sostener 6 documentos sin relleno artificial.
- Cada ruta actual puede responder una pregunta diferente y util.
- El principal riesgo hoy no es falta de paginas sino mezcla de responsabilidades.

## 4. Principio editorial rector

La seccion Theming debe responder una sola categoria de necesidad:

- como adaptar, operar y extender el sistema de tema de Nuvex UI sin romper su contrato visual ni su integracion.

Theming no existe para describir todos los fundamentos visuales del producto.

Theming tampoco existe para reemplazar guias de instalacion o de framework.

## 5. Limites de seccion

### 5.1 Lo que si pertenece a Theming

- el modelo de temas `light` y `dark`;
- el contrato del runtime API `useTheme`;
- registro, seleccion y persistencia de temas;
- tokens de tema y su semantica;
- aplicacion opcional de tokens como CSS variables;
- personalizacion de tema en build-time y runtime;
- reglas para crear temas adicionales;
- y criterios para elegir entre override, token o tema nuevo.

### 5.2 Lo que no pertenece a Theming

- instalacion minima de la libreria;
- setup base de Vue o Nuxt;
- SSR generico no relacionado con tema;
- catalogos de utilidades CSS;
- demos amplias de componentes;
- o explicaciones generales de layout que no dependan del sistema de tema.

### 5.3 Frontera con Getting Started

Getting Started resuelve:

- instalar Nuvex UI;
- registrar el plugin;
- cargar estilos base;
- y dejar una integracion inicial funcionando.

Theming toma el relevo cuando el usuario ya quiere:

- personalizar la apariencia;
- controlar tema activo;
- persistir preferencia;
- o extender el sistema con temas adicionales.

### 5.4 Frontera con Nuxt Integration

Nuxt Integration conserva:

- el wiring especifico de Nuxt;
- el orden de estilos en `nuxt.config.ts`;
- la estrategia SSR server/client;
- cookies como fuente SSR;
- y la validacion de hidratacion estable.

Theming puede mencionar SSR solo como comportamiento general del sistema de tema, pero no debe absorber la guia operacional de Nuxt.

### 5.5 Frontera con Design System

Design System define el lenguaje visual base:

- color,
- typography,
- spacing,
- surfaces,
- e icon strategy.

Theming define como ese lenguaje se parametriza, adapta o extiende por tema.

Regla operativa:

- Si la pregunta es `que significa esta decision visual`, probablemente pertenece a Design System.
- Si la pregunta es `como la configuro, persisto o extiendo`, probablemente pertenece a Theming.

### 5.6 Frontera con Utilities

Utilities documenta clases de ayuda consumibles por el usuario.

Theming puede referenciar variables o colores que luego terminan usados por utilities o componentes, pero no debe convertirse en catalogo de clases.

## 6. Inventario oficial de paginas

Theming v1 mantiene estas paginas como inventario oficial:

1. Overview
2. Runtime Theme API
3. Design Tokens
4. CSS Variables
5. Light and Dark Themes
6. Custom Themes

## 7. Tipo de pagina por ruta

La seccion Theming mezcla paginas Tipo A y Tipo C del estandar general.

### 7.1 Overview

- Tipo: A (concept)
- Rol: puerta de entrada y pagina de decision

### 7.2 Runtime Theme API

- Tipo: C (workflow / operational guide)
- Rol: explicar como operar el tema desde app y componentes

### 7.3 Design Tokens

- Tipo: C (workflow / decision guide)
- Rol: ayudar a elegir la capa semantica correcta antes de tocar implementacion de tema

### 7.4 CSS Variables

- Tipo: C (workflow / implementation guide)
- Rol: explicar overrides y consumo de variables en CSS

### 7.5 Light and Dark Themes

- Tipo: A/C hibrida, implementada como workflow liviano
- Rol: explicar el comportamiento oficial de los temas base y como adoptarlos correctamente

### 7.6 Custom Themes

- Tipo: C (workflow / implementation guide)
- Rol: explicar como crear y registrar temas nuevos

Nota:

- Aunque `Light and Dark Themes` tiene una carga conceptual fuerte, su implementacion debe mantener secuencia operativa suficiente para que el usuario sepa como adoptar el comportamiento base sin saltar entre varias paginas.

## 8. Objetivo de cada pagina

### 8.1 Overview

Objetivo principal:

- orientar al usuario en el modelo de theming de Nuvex UI antes de que elija una estrategia de implementacion.

Pregunta principal que responde:

- `Que parte de Theming necesito segun el cambio que quiero hacer?`

Debe incluir:

- que es opcional y que viene por defecto en el sistema de tema;
- relacion entre temas base, tokens, CSS variables y runtime API;
- diferencias entre personalizacion build-time y runtime;
- y una matriz de decision que derive a las otras 5 paginas.

No debe incluir:

- detalles exhaustivos de API;
- tablas largas de variables;
- implementaciones concretas de storage;
- o una guia completa de Nuxt/SSR.

Resultado esperado:

- el usuario sale sabiendo a que pagina ir despues.

### 8.2 Runtime Theme API

Objetivo principal:

- documentar el contrato operativo para consultar, cambiar, registrar y resetear temas en tiempo de ejecucion.

Pregunta principal que responde:

- `Como controlo el tema activo desde codigo sin adivinar el comportamiento del sistema?`

Debe incluir:

- `useTheme`;
- `currentTheme`;
- `availableThemes`;
- `setTheme`;
- `toggleTheme`;
- `hasTheme`;
- `getTheme` y `getThemes`;
- `registerTheme`, `unregisterTheme` y `resetTheme`;
- comportamiento ante tema desconocido;
- y ejemplos de integracion en componentes de app.

Tambien debe cubrir, desde el punto de vista operativo:

- `storage.get` y `storage.set`;
- `system.enabled` y `darkQuery` cuando afectan resolucion inicial;
- `attribute.name`, `attribute.darkValue` y `attribute.lightValue`;
- `applyTokensAsCssVars`;
- `cssVarPrefix`.

No debe incluir:

- una guia profunda de cookies en Nuxt;
- teoria amplia de tokens;
- o explicacion larga de paletas primitivas.

Enfoque editorial obligatorio:

- explicar que resuelve y aporta la libreria en runtime;
- priorizar el contrato observable de Nuvex UI sobre conceptos basicos de Vue o programacion general;
- y asumir que el lector necesita operar la libreria, no aprender fundamentos de composables, refs o handlers.

Resultado esperado:

- el usuario puede implementar un selector de tema o una logica de runtime sin revisar el codigo fuente.

### 8.3 Design Tokens

Objetivo principal:

- explicar el modelo semantico de tokens que sostiene el sistema de tema.

Pregunta principal que responde:

- `Que tipo de token debo tocar para lograr el cambio visual correcto?`

Debe incluir:

- diferencia entre tokens semanticos y paleta primitiva;
- relacion entre color semantico, surfaces y otros tokens de tema;
- criterio para mapear decisiones de marca al sistema;
- reglas para no usar tokens con la intencion equivocada;
- y ejemplos de cuando conviene cambiar seeds, overrides o tokens de tema.

No debe incluir:

- una lista exhaustiva de CSS variables expuestas en DOM;
- ejemplos largos de `useTheme`;
- ni detalle de clases utility.

Resultado esperado:

- el usuario entiende la semantica antes de tocar implementacion.

Enfoque editorial obligatorio:

- explicar el sistema de tokens desde la perspectiva de decisiones de theming en Nuvex UI;
- priorizar criterio de eleccion entre familias de tokens sobre teoria general de color;
- y asumir que el lector ya sabe programar y necesita saber que token tocar, no aprender fundamentos visuales desde cero.

### 8.4 CSS Variables

Objetivo principal:

- documentar la superficie de personalizacion via variables CSS y el orden seguro para sobrescribirlas.

Pregunta principal que responde:

- `Como hago overrides visuales desde CSS sin romper el contrato del framework?`

Debe incluir:

- diferencia entre variables generadas por Sass y variables disponibles en runtime;
- como se consumen variables de color y surface;
- cuando conviene sobrescribir una variable y cuando conviene cambiar un token;
- impacto de `applyTokensAsCssVars` y `cssVarPrefix`;
- y reglas de orden de carga y cascada.

No debe incluir:

- una guia de registro de temas nuevos;
- duplicacion del API runtime;
- ni un catalogo general de theming por framework.

Resultado esperado:

- el usuario puede hacer overrides CSS de manera intencional y reversible.

### 8.5 Light and Dark Themes

Objetivo principal:

- documentar el comportamiento oficial de los temas base y la estrategia recomendada para adoptarlos correctamente.

Pregunta principal que responde:

- `Como funcionan `light` y `dark`, y que parte puedo personalizar sin inventar un tema nuevo?`

Debe incluir:

- existencia obligatoria de `light` y `dark`;
- orden de resolucion inicial: storage, system, default y fallback;
- significado de `isDark` y efecto sobre `color-scheme`;
- personalizacion recomendada de temas base mediante Sass/CSS variables;
- y criterios para decidir cuando quedarse en temas base.

No debe incluir:

- una receta extensa de cookies SSR;
- ni la implementacion completa de temas adicionales.

Resultado esperado:

- el usuario entiende bien el baseline antes de pasar a custom themes.

### 8.6 Custom Themes

Objetivo principal:

- explicar como crear, registrar y mantener temas adicionales sin romper el contrato de los temas built-in.

Pregunta principal que responde:

- `Como agrego un tema nuevo como `ocean` o `brand-x` sin desalinear el sistema?`

Debe incluir:

- `themes` en plugin options;
- `registerTheme` y `unregisterTheme`;
- estructura de `ThemeDefinition`;
- uso de `name`, `label`, `isDark` y `tokens`;
- reglas de naming;
- limitaciones sobre `light` y `dark`;
- y criterios para saber si necesitas un tema nuevo o solo un override.

No debe incluir:

- un repaso completo del runtime API basico;
- ni detalle profundo de variables CSS ya cubiertas en su propia pagina.

Resultado esperado:

- el usuario puede introducir un tercer tema de forma coherente y mantenible.

## 9. Relaciones entre paginas

La seccion debe leerse como un sistema, no como paginas aisladas.

Flujo editorial principal recomendado:

1. Overview
2. Light and Dark Themes
3. Runtime Theme API
4. Design Tokens
5. CSS Variables
6. Custom Themes

Flujos alternos por necesidad:

1. Si el usuario quiere solo agregar un toggle:
   Overview -> Light and Dark Themes -> Runtime Theme API
2. Si el usuario quiere branding visual:
   Overview -> Design Tokens -> CSS Variables -> Custom Themes
3. Si el usuario viene desde Nuxt SSR:
   Nuxt Integration -> Overview -> Light and Dark Themes -> Runtime Theme API

## 10. Contenido canonico por fuente

### 10.1 Fuente principal de concepto

- `drocket/docs/theming.md`

### 10.2 Fuente principal de contrato tecnico

- `drocket/src/theme/types.ts`
- `drocket/src/theme/index.ts`

### 10.3 Fuente principal de comportamiento validado

- `drocket/src/theme/index.spec.ts`

Regla:

- Si un snippet editorial contradice estas fuentes, se corrige el snippet.
- Si el producto cambia realmente, primero se actualiza la fuente tecnica y luego este RFC o la pagina derivada.

## 11. Reglas de implementacion para Theming v1

### 11.1 Regla de i18n

- Todo texto editorial visible vive en contenido por locale.
- El codigo de ejemplo no se traduce.
- Payloads no traducibles como snippets, command tabs, small demo state o data de ejemplo viven en la pagina Vue o en modulos locales.

### 11.2 Ubicacion recomendada de contenido

- `i18n/en/pages/...`
- `i18n/es/pages/...`

### 11.3 Regla de composicion

- Las vistas Vue de Theming deben declarar secciones explicitas en el template.
- No se debe convertir esta seccion en un renderer generico de bloques heterogeneos.
- Cada pagina debe mantener ids estables para secondary nav.

### 11.4 Regla de navegacion

- Cada pagina de Theming debe derivar al siguiente paso correcto.
- Ninguna pagina debe cerrar sin al menos una salida clara hacia una pagina hermana o una guia vecina.

### 11.5 Regla de no-duplicacion

- Si un bloque empieza a explicar instalacion, se mueve a Getting Started.
- Si un bloque empieza a explicar Nuxt SSR detallado, se mueve a Nuxt Integration.
- Si un bloque empieza a catalogar clases helper, se mueve a Utilities.
- Si un bloque empieza a justificar principios visuales base, se mueve a Design System.

## 12. Estructura minima esperada por pagina

### 12.1 Overview

Minimo obligatorio:

- hero;
- mapa del sistema de tema;
- decision grid;
- rutas recomendadas;
- y next steps.

### 12.2 Runtime Theme API

Minimo obligatorio:

- hero;
- overview operacional centrado en lo que aporta la libreria;
- ejemplos de uso en componente;
- tabla o grid de metodos;
- opciones que afectan runtime;
- pitfalls;
- y next steps.

### 12.3 Design Tokens

Minimo obligatorio:

- hero;
- taxonomia operativa de tokens;
- decision guide;
- mapping guide;
- reglas de uso correcto;
- ejemplos comparativos;
- y next steps.

### 12.4 CSS Variables

Minimo obligatorio:

- hero;
- surface de variables;
- orden de carga y cascada;
- ejemplos de override;
- pitfalls;
- y next steps.

### 12.5 Light and Dark Themes

Minimo obligatorio:

- hero;
- comportamiento base;
- resolucion inicial;
- estrategia recomendada de personalizacion;
- checklist de validacion;
- y next steps.

### 12.6 Custom Themes

Minimo obligatorio:

- hero;
- decision point sobre cuando crear un tema nuevo;
- estructura de `ThemeDefinition`;
- registro inicial;
- tokens por tema;
- pitfalls;
- y next steps.

## 13. Priorizacion de implementacion

Orden recomendado de implementacion:

1. Overview
2. Light and Dark Themes
3. Runtime Theme API
4. Custom Themes
5. Design Tokens
6. CSS Variables

Razon:

- `Overview` define el mapa.
- `Light and Dark Themes` aclara el baseline oficial.
- `Runtime Theme API` habilita el flujo mas comun de control de tema.
- `Custom Themes` cubre la primera ampliacion frecuente.
- `Design Tokens` y `CSS Variables` profundizan la personalizacion fina una vez clara la base operativa.

## 14. Criterios de aceptacion de la seccion

Theming v1 se considera coherente cuando:

- cada pagina responde una pregunta distinta y reconocible;
- ningun tema importante depende de copiar y pegar bloques de otra pagina;
- Overview permite elegir ruta sin ambiguedad;
- Runtime Theme API cubre el contrato real expuesto por la libreria;
- Light and Dark Themes deja claro el baseline oficial;
- Custom Themes deja claro que no se redefinen built-ins desde plugin options;
- Design Tokens explica semantica antes que implementation detail;
- CSS Variables explica overrides sin convertirse en catalogo infinito;
- y Nuxt Integration sigue reteniendo la capa SSR/framework especifica.

## 15. Regla de mantenimiento de contexto

Este RFC debe mantenerse vivo durante la implementacion.

Reglas de trabajo:

- Antes de implementar una pagina, revisar su objetivo y sus limites en este RFC.
- Si durante la implementacion aparece contenido que no cabe claramente en la pagina actual, no se fuerza: se reasigna a la pagina correcta y se actualiza este RFC si hacia falta una aclaracion.
- Si una pagina necesita cambiar de alcance, primero se modifica este RFC y despues la implementacion.
- Si una decision solo afecta copy o ejemplos, no hace falta reescribir toda la seccion; basta con preservar el objetivo funcional y la frontera editorial aqui definidos.

## 16. Cambios fuera de alcance para v1

Quedan fuera de este RFC:

- rediseñar la navegacion global del sitio;
- agregar una pagina separada de SSR theming;
- agregar una pagina separada de theme recipes por framework;
- convertir Theming en referencia API exhaustiva generada automaticamente;
- o fusionar Design System y Theming en una sola seccion.

## 17. Siguiente paso

El siguiente entregable despues de este RFC debe ser el spec individual de `Theming Overview`, usandolo como pagina de entrada de toda la seccion.