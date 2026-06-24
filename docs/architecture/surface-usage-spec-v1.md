# RFC: Surface Usage And Semantic Naming v1

Estado: Draft
Fecha: 2026-06-24
Scope: drocket + nuvex-ui-docs

## 1. Objetivo

Definir una regla unica para el uso de superficies en componentes base y establecer la migracion desde naming numerico (`surface-0..3`) hacia naming semantico (`surface-canvas/base/raised/subtle`).

Esta fase define especificacion y plan de migracion. No cierra implementacion completa.

## 2. Problema actual

Hoy se usan valores `surface-N` directos en varios componentes. Esto tiene dos efectos:

- Menor legibilidad de intencion visual por componente.
- Riesgo de regresiones cuando un componente reutiliza un token numerico para un rol distinto.

## 3. Principios

1. Consumir tokens semanticos en componentes de UI.
2. Mantener compatibilidad total durante la migracion.
3. Preservar contraste por defecto en light y dark.
4. Evitar cambios globales no acotados por componente.

## 4. Mapa semantico oficial

### 4.1 Superficies

- `surface-canvas` -> `surface-0`
- `surface-base` -> `surface-1`
- `surface-raised` -> `surface-2`
- `surface-subtle` -> `surface-3`

### 4.2 Contraste

- `contrast-surface-canvas` -> `contrast-surface-0`
- `contrast-surface-base` -> `contrast-surface-1`
- `contrast-surface-raised` -> `contrast-surface-2`
- `contrast-surface-subtle` -> `contrast-surface-3`

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

## 7. Estrategia de compatibilidad

1. No se eliminan tokens numericos en esta fase.
2. Se agregan aliases semanticos en light/dark apuntando a numericos.
3. Los componentes migran gradualmente a aliases semanticos.
4. Tokens de componente (`--e-bar-bg`, `--e-drawer-bg`, etc.) se mantienen como contrato publico.

## 8. Criterios de aceptacion

1. Build de playground y docs compila sin errores.
2. Main, Drawer, Bar, Card y Button mantienen contraste en light/dark.
3. No hay regresion en variantes `text` y `outlined` fuera del alcance definido.
4. Nuevos componentes no consumen `surface-N` directo en `src/components`.

## 9. Plan de migracion por fases

### Fase 1: Especificacion (actual)

- Publicar este RFC.
- Alinear equipo en reglas de uso por componente.

### Fase 2: Aliases semanticos

- Agregar variables en temas light/dark:
  - `--e-color-surface-canvas/base/raised/subtle`
  - `--e-contrast-surface-canvas/base/raised/subtle`
- Mantener `--e-color-surface-0..3` y `--e-contrast-surface-0..3`.

### Fase 3: Migracion de componentes objetivo

1. Main
2. Drawer
3. Bar
4. Card
5. Button

Regla de ejecucion: migrar uno por PR pequeno, con validacion visual y build.

### Fase 4: Gobernanza

- Regla para codigo nuevo: usar aliases semanticos o tokens de componente con fallback semantico.
- Agregar chequeo de lint/script para detectar `surface-[0-9]` directo en componentes.

Implementacion inicial (scope de migracion v1):

- Script: `scripts/check-surface-semantic-targets.mjs`
- Comando: `npm run lint:surface:targets`
- Archivos cubiertos:
  - `src/components/layout/main.vue`
  - `src/components/layout/drawer/style.scss`
  - `src/components/layout/bar/style.scss`
  - `src/components/card/style.scss`
  - `src/components/button/style.scss`

Regla del chequeo:

- En estos archivos, `surface-N` solo se permite como fallback en una linea que ya use alias semantico.

## 10. Fuera de alcance

1. Redefinir paleta de color base.
2. Cambiar componentes no listados en esta version.
3. Eliminar tokens numericos legacy en esta etapa.
