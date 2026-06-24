# Button Gap Report v1

Fecha: 2026-06-23
Componente: Button
Familia: Core Actions
Referencias:

- app/content/docs/forms/button.ts
- app/pages/docs/forms/button.vue
- docs/architecture/docs-page-standard-rfc.md

## Resumen Ejecutivo

Button ya cumple cobertura requerida de v1 para Core Actions segun la matriz del RFC. Las secciones obligatorias quedaron implementadas en contenido y pagina.

## Evaluacion por Seccion

| Seccion | Requerida | Estado actual | Gap identificado | Prioridad |
| --- | --- | --- | --- | --- |
| Overview | Yes | Cubierto | Sin gap bloqueante | Baja |
| Playground principal | Yes | Cubierto | Sin gap relevante | Baja |
| Variants | Yes | Cubierto | Mejorable: explicitar jerarquia visual de variantes | Media |
| States | Yes | Cubierto | Mejorable: agregar ejemplos de focus-visible y active | Media |
| Accessibility | Yes | Cubierto | Mejorable: checklist explicito por puntos | Media |
| Composition patterns | Yes | Cubierto | Mejorable: ampliar casos de toolbar/dialog | Baja |
| Integration | Yes | Cubierto | Mejorable: sumar ejemplo de submit con API real | Baja |
| API reference | Yes | Cubierto | Sin gap relevante | Baja |
| Do / Don't | Yes | Cubierto | Mejorable: aumentar cobertura de anti-patrones | Baja |
| FAQ / Troubleshooting | No (opcional) | Cubierto | Mejorable: ampliar preguntas frecuentes con errores reales | Baja |

## Mejoras Recomendadas v1.1 (no bloqueantes)

1. Expandir Overview con when to use y when not to use explicito.
2. Extender Variants con criterio de jerarquia primaria/secundaria.
3. Formalizar checklist de Accessibility en bullets accionables.
4. Agregar ejemplo Integration con flujo real de API y manejo de error.
5. Enriquecer FAQ con casos observados en adopcion interna.

## Snippets Minimos Sugeridos

### A) Icon-only accesible

```vue
<e-button :icon="$icon.send" aria-label="Send message" />
```

### B) Anti double-submit

```vue
<e-button :loading="saving" :disabled="saving" @click="save">
  Save
</e-button>
```

### C) Button como navegacion

```vue
<e-button :to="'/docs/forms/text-field'" text>
  Go to TextField docs
</e-button>
```

## Decision

Button queda en estado v1 complete para Core Actions.
Las mejoras restantes pasan a v1.1 de calidad editorial y profundidad de ejemplos, sin bloquear estandarizacion.