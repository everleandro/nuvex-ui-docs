# RFC: Estandar de Paginas de Documentacion

Estado: Draft
Fecha: 2026-06-23
Scope: nuvex-ui-docs

## 1. Objetivo

Definir un estandar unico para las paginas de documentacion antes de escalar contenido.
Este RFC formaliza:

- Los 2 tipos de pagina oficiales.
- El contrato de contenido para renderizado consistente.
- La estrategia de internacionalizacion (i18n) por pagina.
- Los componentes base reutilizables.
- El plan de migracion de la pagina Button como primera pagina de componente estandar.

No incluye implementacion UI en esta fase.

## 2. Contexto actual

En este momento conviven dos enfoques:

- Enfoque declarativo (contenido tipado): usado por Introduction.
- Enfoque manual por pagina: usado por Forms/Button.

Consecuencia:

- Inconsistencia de estructura y traducciones.
- Menor reutilizacion de componentes.
- Divergencia en navegacion secundaria por secciones.

## 3. Tipos de pagina oficiales

### Tipo A: Pagina conceptual

Uso:

- Onboarding y conceptos.
- Explicaciones de arquitectura o principios.

Contenido esperado:

- Hero.
- Secciones de texto, listas y grids informativos.
- Ruta recomendada y buenas practicas.

Ejemplo actual:

- Getting Started / Introduction.

### Tipo B: Pagina de componente

Uso:

- Documentacion tecnica de un componente UI.

Contenido esperado:

- Hero con proposito del componente.
- When to use / When not to use.
- Playground principal.
- Variantes.
- Estados.
- Accesibilidad.
- API (props, eventos, slots).
- Pitfalls y recomendaciones.

Ejemplo objetivo:

- Forms / Button (migrada al estandar).

## 4. Contrato comun de pagina

Toda pagina (A o B) debe cumplir:

- SEO por pagina (title, description).
- Secciones con id estables para secondary nav.
- Footer de navegacion anterior/siguiente.
- Textos visibles internacionalizables.
- Estructura renderizable por un contrato tipado.

### 4.1 Esquema minimo propuesto (v1)

```ts
export type DocsPageKind = 'concept' | 'component'

export interface DocsPageModel {
  kind: DocsPageKind
  seo: {
    title: string
    description: string
  }
  hero: {
    title: string
    description: string
    actions?: Array<{
      label: string
      to: string
      variant?: 'text' | 'outlined' | 'flat' | 'tonal' | 'elevated'
      outlined?: boolean
    }>
  }
  sections: DocsSectionModel[]
}

export type DocsSectionModel =
  | DocsCardGridSection
  | DocsListSection
  | DocsPlaygroundSection
  | DocsApiSection
  | DocsCalloutSection
```

Notas:

- No obliga a crear todos los bloques de inmediato.
- Permite evolucion por fases sin romper contenido existente.

## 5. Bloques estandar por tipo de pagina

### 5.1 Bloques para Tipo A (concept)

Minimo:

- card-grid
- list (ordered/unordered)
- callout (opcional)

### 5.2 Bloques para Tipo B (component)

Minimo:

- playground
- list (uso y recomendaciones)
- api-reference
- callout (accesibilidad y caveats)

## 6. Estrategia de i18n

## 6.1 Regla general

- Todo texto editorial visible debe salir de contenido por locale.
- El codigo de ejemplo no se traduce.

## 6.2 Distribucion recomendada

- UI global (labels genericos): i18n/locales/en.json y i18n/locales/es.json.
- Contenido editorial por pagina: modulos tipados por locale.

Ejemplo:

- app/content/docs/forms/button.ts
- app/content/docs/forms/button-es.ts

## 6.3 Criterios de calidad i18n

- Paridad de paginas entre en y es.
- Paridad de secciones entre en y es.
- Fallback controlado a en solo cuando falte traduccion.
- Sin hardcode de strings de contenido en componentes Vue de pagina.

## 7. Reutilizacion de componentes

Mantener y reforzar estos componentes base:

- docs/PageHero.vue
- docs/Section.vue
- docs/ApiTable.vue
- code/Box.vue (o su evolucion para playground estandar)
- code/CodePanel.vue

Regla:

- La pagina define contenido y estado.
- Los componentes de docs renderizan presentacion consistente.

## 8. Convenciones de contenido

### 8.1 Naming

- keys de seccion en kebab-case y estables.
- ids de seccion no deben cambiar sin migracion de anchors.

### 8.2 Orden recomendado en paginas de componente

1. overview
2. playground
3. variants
4. states
5. accessibility
6. api
7. best-practices

### 8.3 Criterio de snippet

- Todo snippet debe corresponder a una demo valida de la pagina.
- Evitar snippets desactualizados respecto al playground.

### 8.4 Estructura FAQ estandar

Cuando una pagina componente incluya FAQ, el contenido debe modelarse por items y no como bloque de codigo unico.

Formato recomendado por item:

- question: string
- answerHtml: string

Reglas:

- El titulo del panel (`header-title`) sale de `question`.
- El cuerpo del panel renderiza `answerHtml` (permite resaltado con tags como <code class='ma-2 green--text'>text</code>).
- FAQ debe renderizarse con componente reusable de docs (evitar maquetaciones duplicadas por pagina).
- Mantener paridad de items FAQ entre en/es.

Referencia de implementacion actual:

- `app/components/docs/FaqPanel.vue`
- `app/content/docs/forms/button.ts`
- `app/content/docs/forms/button-es.ts`
- `app/content/docs/forms/text-field.ts`
- `app/content/docs/forms/text-field-es.ts`

## 9. Plan de migracion de Button

## Fase 0: Contrato (este RFC)

- Aprobacion de estructura y convenciones.

## Fase 1: Modelo de contenido

- Crear modelo tipado para pagina tipo component.
- Mover textos de Button al contenido por locale.
- Definir metadatos de secciones para secondary nav.

## Fase 2: Playground estandar

- Encapsular patrones repetidos de tabs + preview + code + controls.
- Alinear generacion de snippets con estado real.

## Fase 3: API y accesibilidad

- Integrar API table como bloque formal del contrato.
- Agregar seccion de accesibilidad con checklist minimo.

## Fase 4: Replicacion

- Usar Button como blueprint para TextField, Select, Checkbox, Radio, Switch.

## 10. Definition of Done para una pagina tipo component

Una pagina componente se considera lista si:

- Usa contrato tipado de contenido.
- Tiene al menos 6 secciones del orden recomendado.
- Tiene secondary nav funcional por ids estables.
- Tiene contenido en en/es (o fallback documentado).
- Tiene playground y snippets consistentes.
- Tiene API table y notas de accesibilidad.

## 11. Riesgos y mitigaciones

Riesgo: Mezclar contenido tipado con hardcode en templates.
Mitigacion: Regla de revision: contenido editorial fuera de la pagina Vue.

Riesgo: Deriva de traducciones entre en y es.
Mitigacion: Script de validacion de paridad por slug y por seccion.

Riesgo: Sobreacoplar el contrato a un solo componente.
Mitigacion: Bloques extensibles por union types y versionado de contrato.

## 12. Decisiones abiertas

- Si eventos y slots iran en tabla unica API o tablas separadas.
- Si playground se renderiza por un bloque generico o por bloques especializados.
- Si se agregara validacion automatica en CI para paridad i18n.

## 13. Proximo paso recomendado (implementacion controlada)

- Implementar solo Fase 1 para Button:
  - Modelo de contenido tipado.
  - Extraccion de textos en/es.
  - Mantener UI actual mientras se migra la fuente de contenido.

## 14. Matriz de secciones por familia de componentes (v1)

La siguiente matriz define que secciones son obligatorias u opcionales por tipo de componente.

Leyenda:

- Req: obligatoria.
- Opt: opcional (recomendada cuando agrega claridad).

| Seccion | Core Actions (Button, Chip) | Form Inputs (TextField, Select, Checkbox) | Feedback/Overlay (Dialog, Snackbar, Tooltip) | Data Display (Card, List, Table, Progress) | Navigation (Tabs, Menu, Breadcrumb) | Layout/Utility (Container, Grid, Spacing) |
| --- | --- | --- | --- | --- | --- | --- |
| Overview | Req | Req | Req | Req | Req | Req |
| Playground principal | Req | Req | Req | Req | Req | Opt |
| Variants | Req | Req | Req | Req | Req | Opt |
| States | Req | Req | Req | Opt | Req | Opt |
| Accessibility | Req | Req | Req | Req | Req | Req |
| Composition patterns | Req | Req | Req | Req | Req | Req |
| Integration | Req | Req | Req | Opt | Req | Opt |
| API reference | Req | Req | Req | Req | Req | Req |
| Do / Don\'t | Req | Req | Req | Req | Req | Req |
| FAQ / Troubleshooting | Opt | Opt | Req | Opt | Opt | Opt |

### 14.1 Notas por familia

Core Actions:

- Priorizar jerarquia visual, intencion y prevencion de acciones peligrosas.
- Incluir ejemplos de acciones asincronas y anti doble-submit.

Form Inputs:

- Documentar validacion, mensajes de error, estados disabled/readonly y uso con formularios.
- Incluir casos de accesibilidad por label, helper text y navegacion por teclado.

Feedback/Overlay:

- Priorizar foco, escape, dismiss, bloqueo de scroll y layering.
- FAQ recomendada para errores comunes de apertura/cierre y nesting.

Data Display:

- Priorizar semantica de lectura, placeholders/skeleton y comportamiento en estados vacios.
- Integration puede ser opcional salvo casos con paginacion, filtros o carga remota.

Navigation:

- Documentar rutas activas, deep-linking y sincronizacion con URL cuando aplique.
- States deben cubrir focus-visible, selected y disabled.

Layout/Utility:

- Enfatizar reglas de composicion y limites de uso (ancho maximo, breakpoints, espaciado).
- Playground puede ser opcional si un set de snippets claros cubre los casos.

## 15. Checklist minimo de publicacion (por pagina componente)

Antes de considerar una pagina como lista para publicacion:

1. Cumple todas las secciones Req segun su familia.
2. Incluye al menos 3 snippets de casos reales.
3. Tiene seccion de Accessibility con reglas accionables (no solo texto generico).
4. Tiene seccion Do / Don\'t con al menos 3 ejemplos.
5. API documenta props, eventos y slots (si aplican).
6. Mantiene paridad en en/es para hero, secciones y labels visibles.

## 16. Artefactos operativos

- Plantilla reutilizable por componente: `docs/architecture/component-page-template-v1.md`
- Evaluacion inicial de referencia (Button): `docs/architecture/button-gap-report-v1.md`
- Evaluacion inicial de referencia (TextField): `docs/architecture/text-field-gap-report-v1.md`
- Backlog priorizado de cierre v1: `docs/architecture/component-docs-backlog-v1.md`
