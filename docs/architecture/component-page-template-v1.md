# Component Page Template v1

Estado: Draft
Fecha: 2026-06-23
Basado en: docs/architecture/docs-page-standard-rfc.md

## 1) Metadatos

- Componente:
- Familia (Core Actions | Form Inputs | Feedback/Overlay | Data Display | Navigation | Layout/Utility):
- Ruta docs:
- Responsables:
- Estado (draft | review | published):

## 1.1) Estandar Base (v1)

Este template define el estandar oficial para Tipo B (pagina de componente).

Baseline validado por implementaciones actuales:

- Forms/Button
- Forms/Text Field
- Forms/Textarea
- Forms/Select

Estructura minima esperada:

1. Hero (proposito + alcance del componente).
2. Seccion de uso con playground principal.
3. Secciones de ejemplos especificos del componente (cantidad variable).
4. Tabla de props (API) al final.
5. Navegacion lateral "En esta pagina" (anchors por id estable).
6. Navegacion inferior prev/next.

Notas:

- El estandar define forma de presentacion, no una lista fija de secciones.
- Entre "uso" y "props" se agregan o quitan secciones segun el componente.
- Para componentes de entrada (text-field, textarea, select, switch, checkbox, radio), `validation` es obligatoria y va justo antes de `props`.
- Si el componente tiene slots nombrados, incluir una seccion de slots obligatoria.
- Si hay varios escenarios de slots, se permiten multiples secciones de slots.
- Si una demo crece en complejidad, extraerla a un componente de apoyo en `app/components/docs/[ruta-de-la-pagina]/[NombreSeccion].vue`.

Definicion operativa de "componente de entrada":

- Se clasifica como componente de entrada cuando su objetivo principal es capturar o modificar un valor de usuario.
- Aplicar clasificacion de entrada si cumple al menos 2 criterios:
	- expone `v-model` o `modelValue` como contrato principal;
	- su valor se usa en submit, filtros, busqueda o persistencia;
	- requiere validacion de negocio;
	- maneja estados de campo (`disabled`, `readonly`, `error`, `dirty/touched`);
	- representa semanticamente entrada/seleccion de valor.
- Referencia directa: `text-field`, `textarea`, `select`, `switch`, `checkbox`, `radio` son de entrada.

## 2) Matriz de Secciones (Baseline + Familia)

La version anterior de esta seccion era rigida y asumia que todas las paginas debian incluir exactamente los mismos bloques.
Desde v1, el estandar se compone de:

- Baseline obligatorio para toda pagina de componente.
- Modulos por familia con regla Req/Opt.

## 2.1) Checklist Baseline (siempre obligatorio)

Marca cada bloque como `done` o `pending`.

| Bloque baseline | Estado | Notas |
| --- | --- | --- |
| Hero (proposito + alcance) | pending | |
| Uso (playground principal) | pending | |
| Secciones de ejemplo (cantidad segun componente) | pending | |
| Validation justo antes de API (solo componentes de entrada) | pending | |
| Seccion de slots (si el componente expone slots nombrados) | pending | |
| API table de props al final | pending | |
| Secondary nav (En esta pagina) | pending | |
| Footer nav (prev/next) | pending | |

## 2.2) Modulos por Familia (Req/Opt)

Usar esta matriz para decidir que secciones adicionales incluir.

| Modulo editorial (alineado a implementacion actual) | Core Actions | Form Inputs | Feedback/Overlay | Data Display | Navigation | Layout/Utility |
| --- | --- | --- | --- | --- | --- | --- |
| Hero | Req | Req | Req | Req | Req | Req |
| Uso (playground principal) | Req | Req | Req | Req | Req | Opt |
| Variantes visuales (`visual-variants`) | Req | Req | Req | Req | Req | Opt |
| Ejemplos especificos del componente | Req | Req | Req | Req | Req | Req |
| States e interacciones | Req | Req | Req | Opt | Req | Opt |
| Validation | N/A | Req | N/A | N/A | N/A | N/A |
| Slots / composicion interna | Opt | Opt | Opt | Opt | Opt | Opt |
| Integration (`integration`) | Opt | Opt | Opt | Opt | Opt | Opt |
| API reference (`props`) | Req | Req | Req | Req | Req | Req |

## 2.3) Regla de Flexibilidad

No todos los componentes son iguales. Aplicar estas reglas:

- Regla A: mantener siempre el baseline (hero + uso + ejemplos + API al final + navegaciones).
- Regla B: adaptar secciones al dominio del componente (form, layout, overlay, data, utility).
- Regla C: si una seccion marcada como Req no aplica, justificar explicitamente la excepcion en Notas.
- Regla D: priorizar decisiones de implementacion sobre texto descriptivo.
- Regla E: secciones de slots son obligatorias cuando existan slots nombrados publicos.
- Regla F: en componentes de entrada, `validation` es obligatoria y debe quedar inmediatamente antes de `API reference`.

## 3) Secciones Opcionales

| Seccion | Estado | Notas |
| --- | --- | --- |
| FAQ / Troubleshooting | pending | |

Opcionales recomendadas para v1.1:

- Integration patterns.

## 4) Estructura Recomendada de Contenido

### 4.1 Overview

Objetivo:

- Explicar que problema resuelve.
- Delimitar cuando usarlo y cuando no usarlo.

Minimo de calidad:

- Debe ayudar a decidir, no solo describir.
- Evitar frases vacias tipo "este componente permite..." sin contexto.

Snippet minimo sugerido:

```vue
<e-component />
```

### 4.2 Uso (playground principal)

Objetivo:

- Mostrar caso de uso principal con controles.
- Snippet sincronizado con estado actual.

Contrato minimo recomendado:

- Tab de diseno/preview.
- Tab de template/snippet.
- Controles que representen las props mas usadas.

### 4.3 Ejemplos especificos del componente

Objetivo:

- Mostrar comportamientos reales del componente segun su dominio.

Regla baseline:

- Este bloque puede dividirse en varias secciones con total flexible.
- No existe minimo universal de secciones; depende del componente.

### 4.4 States

Objetivo:

- Cubrir normal, hover/focus-visible, active, disabled, loading/error (si aplica).

### 4.5 Accessibility

Checklist minimo:

- Etiqueta accesible clara.
- Foco visible por teclado.
- Contraste legible.
- Semantica correcta para el rol del componente.

Snippet sugerido (ajustar por componente):

```vue
<e-component aria-label="Descriptive action" />
```

### 4.6 Slots nombrados (cuando aplique)

Objetivo:

- Documentar slots publicos con ejemplos de uso reales.

Reglas:

- Si el componente tiene slots nombrados, esta seccion es obligatoria.
- Si los slots cubren escenarios diferentes, dividir en mas de una seccion.
- Si el ejemplo crece, mover la demo a `app/components/docs/[ruta-de-la-pagina]/[NombreSeccion].vue`.

### 4.7 Composition patterns

Objetivo:

- Enseñar uso en layout real con componentes relacionados.

Regla baseline:

- Se incluye cuando agrega valor real al componente.

### 4.8 Integration

Objetivo:

- Explicar integracion con routing, forms, async actions o data flow.

### 4.8.1 Regla de orden para componentes de entrada

Aplica a: `text-field`, `textarea`, `select`, `switch`, `checkbox`, `radio`.

- `validation` es obligatoria.
- `validation` debe ubicarse inmediatamente antes de `API reference`.
- Orden de cierre obligatorio: `... -> validation -> API reference`.

### 4.9 API reference

Objetivo:

- Documentar props, eventos, slots y defaults.

Regla baseline:

- Debe ubicarse al final de la pagina.
- Si solo existe props en v1, es valido.
- Eventos/slots pueden entrar en v1.1 si el componente los expone y son relevantes.

### 4.10 FAQ / Troubleshooting (opcional)

Objetivo:

- Resolver errores frecuentes y edge cases.

Contrato recomendado:

- faqItems: arreglo de items con:
- question: string
- answerHtml: string

Regla de render:

- Usar expansion panels reutilizables (componente docs compartido).
- `question` como header-title.
- `answerHtml` como contenido del panel.

Ejemplo:

```ts
faqItems: [
	{
		question: 'How do I prevent duplicate submits?',
		answerHtml:
			"Use <code class='ma-2 green--text'>loading</code> with <code class='ma-2 green--text'>disabled</code> during async actions.",
	},
]
```

### 4.11 Criterios minimos de calidad por seccion

Aplicar como gate antes de marcar una pagina como `published`.

| Seccion | Criterio minimo |
| --- | --- |
| Hero | Proposito + alcance + decision de uso en 2-4 frases. |
| Uso | Preview funcional y snippet sincronizado con el estado real. |
| Variantes visuales | Al menos 3 variantes utiles para decision de implementacion. |
| Ejemplos especificos | Al menos 2 escenarios propios del componente. |
| States e interacciones | Focus-visible + disabled + 1 estado adicional relevante. |
| Validation (inputs) | Reglas + mensajes + submit gating cuando aplique. |
| Slots | Al menos 1 slot nombrado con escenario real. |
| API reference (`props`) | Debe coincidir con implementacion vigente. |

### 4.12 Decision de tabs (segun complejidad real)

Usar siempre el preset mas pequeno que mantenga claridad.

- `tabsPlayground`: solo preview interactivo guiado (uso base).
- `tabsDesignTemplate`: preview + template sin logica adicional relevante.
- `tabsDesignTemplateTs`: cuando TS aporta reglas, estado, handlers o tipos necesarios.
- `tabsDesignTemplateTsCss`: cuando ademas existe CSS/SCSS propio necesario para reproducir la demo.

Reglas:

1. No abrir tab TS si el contenido no agrega decision tecnica.
2. No abrir tab CSS si el resultado se logra solo con utilidades existentes.
3. Si una demo crece demasiado, extraer preview a componente dedicado.

## 5) Checklist de Publicacion

1. Cumple todos los bloques del baseline v1.
2. Incluye al menos 3 snippets de casos reales.
3. Cumple modulos Req para su familia (matriz 2.2).
4. Para componentes de entrada, `validation` existe y va justo antes de `API reference`.
5. Si existe FAQ/Troubleshooting, cada item resuelve un problema real.
6. API incluye props y, cuando aplique, eventos/slots.
7. Existe paridad en en/es para hero, secciones y labels.
8. Secondary nav refleja todos los ids de seccion.
9. Cada seccion agrega valor de decision para implementacion.
10. Cada playground usa el preset de tabs correcto y sin tabs innecesarios.

## 6) Plantilla de Gap Report Rapido

| Bloque/Modulo | Baseline o Familia | Estado actual | Gap | Prioridad |
| --- | --- | --- | --- | --- |
| Hero | Baseline (Req) | | | |
| Uso (playground principal) | Baseline (Req) | | | |
| Secciones de ejemplo (cantidad flexible) | Baseline (Req) | | | |
| Slots nombrados (si aplica) | Baseline (Condicional Req) | | | |
| API table de props al final | Baseline (Req) | | | |
| Secondary nav | Baseline (Req) | | | |
| Footer nav | Baseline (Req) | | | |
| Overview | Familia (Req/Opt segun 2.2) | | | |
| Variantes visuales | Familia (Req/Opt segun 2.2) | | | |
| Ejemplos especificos | Familia (Req/Opt segun 2.2) | | | |
| States | Familia (Req/Opt segun 2.2) | | | |
| Integration | Familia (Req/Opt segun 2.2) | | | |
| Validation (inputs) | Familia (Req/Opt segun 2.2) | | | |
