# RFC: Surface Usage And Semantic Naming v1

Estado: Draft
Fecha: 2026-06-24
Scope: drocket + nuvex-ui-docs

## 1. Objetivo

Definir la regla unica para el uso de superficies en componentes base y consolidar el naming semantico oficial (`surface-canvas/base/raised/subtle`) en framework y docs.

Esta version ya refleja la decision implementada: el naming numerico deja de ser parte del contrato publico.

## 2. Problema actual

Hoy se usan valores `surface-N` directos en varios componentes. Esto tiene dos efectos:

- Menor legibilidad de intencion visual por componente.
- Riesgo de regresiones cuando un componente reutiliza un token numerico para un rol distinto.

## 3. Principios

1. Consumir tokens semanticos en componentes de UI.
2. Preservar contraste por defecto en light y dark.
3. Tratar el naming numerico previo como legado removido, no como alias vigente.
4. Evitar cambios globales no acotados por componente.

## 4. Mapa semantico oficial

### 4.1 Superficies

- `surface-canvas`
- `surface-base`
- `surface-raised`
- `surface-subtle`

### 4.2 Contraste

- `contrast-surface-canvas`
- `contrast-surface-base`
- `contrast-surface-raised`
- `contrast-surface-subtle`

## 5. Regla de uso por componente (v1)

1. Main: `surface-canvas`
2. Drawer: `surface-base`
3. Drawer floating: `surface-raised`
4. Bar: `surface-raised`
5. Card: `surface-base`
6. Button default (sin color prop): `surface-subtle`
7. Button icon (sin color prop): `surface-subtle`

## 6. Reglas especificas para Button

1. El boton default sin `color` usa fondo `surface-subtle`.
2. El boton icon sin `color` usa fondo `surface-subtle`.
3. Si existe `color`, default e icon respetan `--e-btn-color`.
4. El color del icono debe mantener contraste (`--e-btn-contrast-color`) cuando hay `color` explicito.

## 7. Estado de implementacion

1. El framework expone solo `surface-canvas/base/raised/subtle` y sus pares `contrast-surface-*` como contrato oficial.
2. Los componentes base consumen surfaces semanticas o tokens de componente con fallback semantico.
3. Tokens de componente (`--e-bar-bg`, `--e-drawer-bg`, etc.) se mantienen como contrato publico.
4. El naming numerico previo se considera breaking change y debe migrarse en apps consumidoras.

## 8. Criterios de aceptacion

1. Build de playground y docs compila sin errores.
2. Main, Drawer, Bar, Card y Button mantienen contraste en light/dark.
3. No hay regresion en variantes `text` y `outlined` fuera del alcance definido.
4. Nuevos componentes no consumen naming numerico legacy en codigo fuente, snippets ni docs publicas.

## 9. Plan de migracion por fases

### Fase 1: Especificacion (actual)

- Publicar este RFC.
- Alinear equipo en reglas de uso por componente.

### Fase 2: Gobernanza activa

- El chequeo `npm run lint:surface:targets` detecta naming numerico legacy en `src`, `public/styles`, `playground/src` y `docs` del framework.
- Regla para codigo nuevo: usar surfaces semanticas o tokens de componente con fallback semantico.

### Fase 3: Migracion de consumidores

1. Reemplazar cualquier surface numerica legacy por `surface-canvas/base/raised/subtle` en temas de aplicacion.
2. Reemplazar cualquier contraste de superficie numerico legacy por `contrast-surface-canvas/base/raised/subtle`.
3. Revisar ejemplos con `color="surface-*"` y CSS vars customizadas.

## 10. Fuera de alcance

1. Redefinir paleta de color base.
2. Cambiar componentes no listados en esta version.
3. Eliminar tokens numericos legacy en esta etapa.
