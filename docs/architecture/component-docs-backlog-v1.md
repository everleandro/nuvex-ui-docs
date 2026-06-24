# Component Docs Backlog v1

Fecha: 2026-06-23
Scope: cierre de estandar v1 en componentes piloto (Button y TextField)

## Estado Global

- v1 piloto cerrado en componentes objetivo: Button y TextField.
- Secciones requeridas implementadas y visibles.
- Paridad en contenido en/es mantenida.

## Prioridad Global (v1.1)

Regla de priorizacion usada:

1. Primero mejoras de claridad de decision (overview, variants).
2. Luego profundidad de estados y accesibilidad.
3. Finalmente ampliaciones editoriales (faq/casos avanzados).

## Backlog por Componente

### 1) Button (Core Actions)

Estado actual:

- v1 complete.
- Secciones requeridas implementadas: states, accessibility, integration, do/don't, composition, faq.

Mejoras v1.1 sugeridas:

1. Media: expandir Overview con when to use / when not to use.
2. Media: ampliar Variants con jerarquia de intencion.
3. Media: checklist explicito de Accessibility.
4. Baja: ejemplos de Integration con manejo de error remoto.
5. Baja: ampliar FAQ con casos reales del equipo.

Referencia:

- docs/architecture/button-gap-report-v1.md

### 2) TextField (Form Inputs)

Estado actual:

- v1 complete.
- Secciones requeridas implementadas: states, accessibility, integration, do/don't, composition, faq.

Mejoras v1.1 sugeridas:

1. Media: expandir Overview con when to use / when not to use.
2. Media: ampliar States con success/error asincrono.
3. Media: checklist operativo de Accessibility.
4. Baja: Integration con schema validation y errores remotos.
5. Baja: ampliar Composition patterns en formularios complejos.
6. Baja: ampliar FAQ con casos comunes de validacion tardia.

Referencia:

- docs/architecture/text-field-gap-report-v1.md

## Orden Sugerido de Ejecucion (Sprint v1.1)

1. Button y TextField: Overview + Variants guidance.
2. Button y TextField: Accessibility checklist operativo.
3. TextField: estados avanzados y validation timing.
4. Button: integration con errores remotos.
5. Ambos: FAQ ampliada por incidencias reales.

## Definition of Ready para iniciar cada tarea

1. Existe texto en en y es para hero/seccion nueva.
2. Existe snippet inicial valido.
3. Existe id de seccion estable para secondary nav.

## Definition of Done por tarea

1. Seccion visible en la pagina.
2. Contenido en en/es con paridad.
3. Snippet validado contra el ejemplo mostrado.
4. Sin errores de tipos/template en archivos tocados.