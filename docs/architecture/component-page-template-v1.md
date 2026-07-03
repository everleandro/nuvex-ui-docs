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

Este template adopta Button como baseline para paginas de componente personalizado.

Estructura minima esperada:

1. Hero (proposito + alcance del componente).
2. Playground principal.
3. 5 secciones de ejemplos/variantes (minimo).
4. Al menos 1 seccion de uso comun (composicion real).
5. Tabla de props (API).
6. Navegacion inferior prev/next.
7. Navegacion lateral "En esta pagina" (anchors por id estable).

Notas:

- El baseline define piso minimo, no techo editorial.
- Si el componente requiere mas secciones (accesibilidad, estados avanzados, eventos, slots), se agregan sin romper el orden base.

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
| Playground principal | pending | |
| Secciones de ejemplo (minimo 5) | pending | |
| Caso de uso comun (minimo 1) | pending | |
| API table de props | pending | |
| Secondary nav (En esta pagina) | pending | |
| Footer nav (prev/next) | pending | |

## 2.2) Modulos por Familia (Req/Opt)

Usar esta matriz para decidir que secciones adicionales incluir.

| Modulo editorial | Core Actions | Form Inputs | Feedback/Overlay | Data Display | Navigation | Layout/Utility |
| --- | --- | --- | --- | --- | --- | --- |
| Overview | Req | Req | Req | Req | Req | Req |
| Variants | Req | Req | Req | Req | Req | Opt |
| States | Req | Req | Req | Opt | Req | Opt |
| Accessibility | Req | Req | Req | Req | Req | Req |
| Composition patterns | Req | Req | Opt | Req | Req | Opt |
| Integration | Opt | Req | Req | Opt | Req | Opt |
| Do / Don't | Opt | Opt | Opt | Opt | Opt | Opt |
| FAQ / Troubleshooting | Opt | Opt | Opt | Opt | Opt | Opt |

## 2.3) Regla de Flexibilidad

No todos los componentes son iguales. Aplicar estas reglas:

- Regla A: mantener siempre el baseline (hero + playground + ejemplos + uso comun + API + navegaciones).
- Regla B: adaptar secciones al dominio del componente (form, layout, overlay, data, utility).
- Regla C: si una seccion marcada como Req no aplica, justificar explicitamente la excepcion en Notas.
- Regla D: priorizar decisiones de implementacion sobre texto descriptivo.

## 3) Secciones Opcionales

| Seccion | Estado | Notas |
| --- | --- | --- |
| FAQ / Troubleshooting | pending | |

Opcionales recomendadas para v1.1:

- Accessibility checklist operativo.
- Do / Don't.
- Integration patterns.
- FAQ basada en incidencias reales.

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

### 4.2 Playground principal

Objetivo:

- Mostrar caso de uso principal con controles.
- Snippet sincronizado con estado actual.

Contrato minimo recomendado:

- Tab de diseno/preview.
- Tab de template/snippet.
- Controles que representen las props mas usadas.

### 4.3 Variants

Objetivo:

- Mostrar variantes visuales y/o de comportamiento.

Regla baseline:

- Este bloque puede dividirse en varias secciones hasta cubrir minimo 5 secciones de ejemplo en total.

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

### 4.6 Composition patterns

Objetivo:

- Enseñar uso en layout real con componentes relacionados.

Regla baseline:

- Al menos 1 caso comun obligatorio.

### 4.7 Integration

Objetivo:

- Explicar integracion con routing, forms, async actions o data flow.

### 4.8 API reference

Objetivo:

- Documentar props, eventos, slots y defaults.

Regla baseline:

- Si solo existe props en v1, es valido.
- Eventos/slots pueden entrar en v1.1 si el componente los expone y son relevantes.

### 4.9 Do / Don't

Objetivo:

- Evitar anti-patrones y promover decisiones consistentes.

Formato recomendado:

- Do: 3 ejemplos minimos.
- Don't: 3 ejemplos minimos.

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

## 5) Checklist de Publicacion

1. Cumple todos los bloques del baseline v1.
2. Incluye al menos 3 snippets de casos reales.
3. Cumple modulos Req para su familia (matriz 2.2).
4. Seccion Accessibility (cuando aplica como Req) contiene reglas accionables.
5. Seccion Do / Don't (si existe) tiene minimo 3 ejemplos por lado.
6. API incluye props y, cuando aplique, eventos/slots.
7. Existe paridad en en/es para hero, secciones y labels.
8. Secondary nav refleja todos los ids de seccion.
9. Cada seccion agrega valor de decision para implementacion.

## 6) Plantilla de Gap Report Rapido

| Bloque/Modulo | Baseline o Familia | Estado actual | Gap | Prioridad |
| --- | --- | --- | --- | --- |
| Hero | Baseline (Req) | | | |
| Playground principal | Baseline (Req) | | | |
| Secciones de ejemplo (>=5) | Baseline (Req) | | | |
| Caso de uso comun | Baseline (Req) | | | |
| API table de props | Baseline (Req) | | | |
| Secondary nav | Baseline (Req) | | | |
| Footer nav | Baseline (Req) | | | |
| Overview | Familia (Req/Opt segun 2.2) | | | |
| Variants | Familia (Req/Opt segun 2.2) | | | |
| States | Familia (Req/Opt segun 2.2) | | | |
| Accessibility | Familia (Req/Opt segun 2.2) | | | |
| Composition patterns | Familia (Req/Opt segun 2.2) | | | |
| Integration | Familia (Req/Opt segun 2.2) | | | |
| Do / Don't | Familia (Req/Opt segun 2.2) | | | |
| FAQ / Troubleshooting | Familia (Req/Opt segun 2.2) | | | |
