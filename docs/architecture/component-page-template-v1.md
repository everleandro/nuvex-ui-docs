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

## 2) Secciones Obligatorias por Familia

Marca cada seccion como `done` o `pending`.

| Seccion | Estado | Notas |
| --- | --- | --- |
| Overview | pending | |
| Playground principal | pending | |
| Variants | pending | |
| States | pending | |
| Accessibility | pending | |
| Composition patterns | pending | |
| Integration | pending | |
| API reference | pending | |
| Do / Don't | pending | |

## 3) Secciones Opcionales

| Seccion | Estado | Notas |
| --- | --- | --- |
| FAQ / Troubleshooting | pending | |

## 4) Estructura Recomendada de Contenido

### 4.1 Overview

Objetivo:

- Explicar que problema resuelve.
- Delimitar cuando usarlo y cuando no usarlo.

Snippet minimo sugerido:

```vue
<e-component />
```

### 4.2 Playground principal

Objetivo:

- Mostrar caso de uso principal con controles.
- Snippet sincronizado con estado actual.

### 4.3 Variants

Objetivo:

- Mostrar variantes visuales y/o de comportamiento.

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

### 4.7 Integration

Objetivo:

- Explicar integracion con routing, forms, async actions o data flow.

### 4.8 API reference

Objetivo:

- Documentar props, eventos, slots y defaults.

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

1. Cumple secciones requeridas para su familia.
2. Incluye al menos 3 snippets de casos reales.
3. Seccion Accessibility contiene reglas accionables.
4. Seccion Do / Don't tiene minimo 3 ejemplos por lado.
5. API incluye props, eventos y slots (si aplican).
6. Existe paridad en en/es para hero, secciones y labels.
7. Secondary nav refleja todos los ids de seccion.

## 6) Plantilla de Gap Report Rapido

| Seccion | Requerida para la familia | Estado actual | Gap | Prioridad |
| --- | --- | --- | --- | --- |
| Overview | Yes | | | |
| Playground principal | Yes | | | |
| Variants | Yes | | | |
| States | Yes | | | |
| Accessibility | Yes | | | |
| Composition patterns | Yes | | | |
| Integration | Yes | | | |
| API reference | Yes | | | |
| Do / Don't | Yes | | | |
| FAQ / Troubleshooting | No/Yes | | | |
