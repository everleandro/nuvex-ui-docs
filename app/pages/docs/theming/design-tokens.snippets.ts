type DesignTokensCodeSnippet = {
  label?: string
  code: string
  language: 'bash' | 'ts' | 'js' | 'vue' | 'scss' | 'json' | 'html' | 'css' | 'shell' | 'sh'
}

export const designTokensCodeSnippets: Record<
  'override-in-vue-and-nuxt' | 'map-decisions-to-tokens' | 'primitive-palette-usage' | 'framework-token-reference',
  DesignTokensCodeSnippet[]
> = {
  'override-in-vue-and-nuxt': [
    {
      label: 'vite.config.ts',
      code: `export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "assets/styles/variables.scss" as *;',
      },
    },
  },
})`,
      language: 'ts',
    },
    {
      label: 'nuxt.config.ts',
      code: `export default defineNuxtConfig({
  css: [
    'nuvex-ui/styles.css',
    'nuvex-ui/framework.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "assets/styles/variables.scss" as *;',
        },
      },
    },
  },
})`,
      language: 'ts',
    },
    {
      label: 'assets/styles/variables.scss',
      code: `@use 'nuvex-ui/setting.scss' with (
  $border-radius-root: 12px,
  $space-base: 0.25rem
);`,
      language: 'scss',
    },
  ],
  'map-decisions-to-tokens': [
    {
      label: 'assets/styles/variables.scss',
      code: `@use 'nuvex-ui/setting.scss' with (
  $semantic-color-tokens-light: (
    'primary': #0f766e,
    'secondary': #1f2937,
    'tertiary': #0ea5e9,
    'success': #15803d,
    'warning': #d97706,
    'error': #dc2626,
    'info': #0284c7,
    'surface-canvas': #f4f7fb,
    'surface-base': #ffffff,
  ),
  $semantic-color-tokens-dark: (
    'primary': #5eead4,
    'secondary': #cbd5e1,
    'tertiary': #38bdf8,
    'success': #4ade80,
    'warning': #fbbf24,
    'error': #f87171,
    'info': #7dd3fc,
    'surface-canvas': #0f172a,
    'surface-base': #111827,
  ),
);`,
      language: 'scss',
    },
    {
      label: 'assets/styles/variables.scss',
      code: `@use 'nuvex-ui/setting.scss' with (
  $semantic-contrast-tokens-light: (
    'primary': white,
    'secondary': white,
    'surface-canvas': #111827,
    'surface-base': #111827,
  ),
  $semantic-contrast-tokens-dark: (
    'primary': #042f2e,
    'secondary': #0f172a,
    'surface-canvas': #e5eef9,
    'surface-base': #f8fafc,
  ),
  $semantic-text-tokens-light: (
    'default': #1f2937,
    'muted': #4b5563,
    'heading': #0f172a,
    'inverse': white,
  ),
  $semantic-text-tokens-dark: (
    'default': #dbe4f0,
    'muted': #94a3b8,
    'heading': #f8fafc,
    'inverse': #020617,
  ),
);`,
      language: 'scss',
    },
  ],
  'primitive-palette-usage': [
    {
      label: 'assets/styles/variables.scss',
      code: `@use 'nuvex-ui/setting.scss' with (
  $primitive-color-seeds: (
    'blue': #2563eb,
    'teal': #0f766e,
    'amber': #d97706,
    'neutral': #4b5563,
    'brand': #7c3aed,
  ),
);`,
      language: 'scss',
    },
    {
      label: 'assets/styles/variables.scss',
      code: `@use 'nuvex-ui/setting.scss' with (
  $primitive-color-overrides: (
    'brand': (
      100: #ede9fe,
      500: #7c3aed,
      700: #6d28d9,
      900: #4c1d95,
    ),
    'blue': (
      700: #1d4ed8,
    ),
  ),
);`,
      language: 'scss',
    },
  ],
  'framework-token-reference': [
    {
      label: 'nuvex-ui/setting.scss foundation/globals',
      code: `$border-radius-root: 0rem;
    $root-font-size: 1rem;
    $space-base: 0.25rem;
    $root-font-family: 'Roboto Flex', 'Roboto', sans-serif;
    $root-font-family-mono: 'Roboto Mono', monospace;
    $border-width: thin;
    $space-scale: 10;
    $grid-cols: 12;`,
      language: 'scss',
    },
    {
  label: 'nuvex-ui/setting.scss foundation/semantic',
      code: `$semantic-color-tokens-light: (
  'primary': #42b883,
  'secondary': #35495e,
  'tertiary': #3498db,
  'error': #e74c3c,
  'warning': #f39c12,
  'success': #27ae60,
  'info': #3498db,
  'input': #4f636b,
  'label': #4f636b,
  'disabled': rgba(0, 0, 0, 0.5),
  'surface-canvas': #f4f6f8,
  'surface-base': #ffffff,
  'surface-raised': #f8fafc,
  'surface-subtle': #e6ebf2,
  'border': rgba(0, 0, 0, 0.15),
);

$semantic-color-tokens-dark: (
  'primary': #58d78d,
  'secondary': #8ca0b8,
  'tertiary': #5dade2,
  'error': #f58a8a,
  'warning': #f8b739,
  'success': #52c77a,
  'info': #5dade2,
  'input': #E5E7EB,
  'label': #E5E7EB,
  'disabled': rgba(255, 255, 255, 0.68),
  'surface-canvas': #141414,
  'surface-base': #1e1e1e,
  'surface-raised': #262626,
  'surface-subtle': #2f2f2f,
  'border': rgba(255, 255, 255, 0.15),
);

$semantic-contrast-tokens-light: (
  'primary': white,
  'secondary': white,
  'tertiary': white,
  'error': white,
  'warning': white,
  'success': white,
  'info': white,
  'input': white,
  'disabled': rgba(255, 255, 255, 0.58),
  'surface-canvas': black,
  'surface-base': black,
  'surface-raised': black,
  'surface-subtle': black,
);

$semantic-contrast-tokens-dark: (
  'primary': white,
  'secondary': white,
  'tertiary': white,
  'error': white,
  'warning': white,
  'success': white,
  'info': white,
  'input': white,
  'disabled': rgba(255, 255, 255, 0.38),
  'surface-canvas': #d0d7e1,
  'surface-base': #b5c0d2,
  'surface-raised': #9faec3,
  'surface-subtle': #8d9aaf,
);

$semantic-text-tokens-light: (
  'default': #314148,
  'muted': rgba(0, 0, 0, 0.68),
  'strong': black,
  'heading': #0f172b,
  'inverse': white,
);

$semantic-text-tokens-dark: (
  'default': #d0d7e1,
  'muted': #8496AF,
  'strong': #D6DEE8,
  'heading': #FAFAFA,
  'inverse': white,
);`,
      language: 'scss',
    },
    {
      label: 'nuvex-ui/setting.scss foundation/palettes',
      code: `$primitive-color-seeds: (
  'red': #ef4444,
  'pink': #ec4899,
  'purple': #8b5cf6,
  'indigo': #6366f1,
  'blue': #3b82f6,
  'cyan': #06b6d4,
  'teal': #14b8a6,
  'green': #22c55e,
  'lime': #84cc16,
  'yellow': #eab308,
  'amber': #f59e0b,
  'orange': #f97316,
  'brown': #8d6e63,
  'neutral': #6b7280,
);

$primitive-color-overrides: (
  'red': (
    50: #fee2e2,
    500: #ef4444,
    900: #7f1d1d,
  ),
  'blue': (
    100: #dbeafe,
    700: #1d4ed8,
  ),
  'neutral': (
    50: #f9fafb,
    900: #111827,
  ),
);

$primitive-color-palettes: e-build-primitive-palettes(
  $primitive-color-seeds,
  $primitive-color-overrides
);`,
      language: 'scss',
    },
    {
      label: 'nuvex-ui/setting.scss foundation/layout',
      code: `$grid-breakpoints: (
  xs: 0,
  sm: 600px,
  md: 960px,
  lg: 1264px,
  xl: 1904px,
);

$grid-gaps: (
  none: 0,
  xs: 4px,
  sm: 8px,
  md: 16px,
  lg: 24px,
  xl: 32px,
);

$elevation: (
  xs: (
    0 1px 2px 0 rgba(0, 0, 0, 0.18),
    0 1px 1px 0 rgba(0, 0, 0, 0.12),
    0 1px 3px 0 rgba(0, 0, 0, 0.10)
  ),
  sm: (
    0 1px 3px 0 rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12)
  ),
  md: (
    0 2px 4px 0 rgba(0, 0, 0, 0.2),
    0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 2px -1px rgba(0, 0, 0, 0.12)
  ),
  lg: (
    0 3px 6px 0 rgba(0, 0, 0, 0.2),
    0 4px 4px 0 rgba(0, 0, 0, 0.14),
    0 5px 3px -2px rgba(0, 0, 0, 0.12)
  ),
  xl: (
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 6px 0 rgba(0, 0, 0, 0.14),
    0 8px 4px -2px rgba(0, 0, 0, 0.12)
  ),
);`,
      language: 'scss',
    },
    {
      label: 'nuvex-ui/setting.scss foundation/typography',
      code: `$typography-family: (
  base: ('Roboto Flex', 'Roboto', sans-serif),
  mono: ('Roboto Mono', monospace),
);

$typography-display-font-sizes: (lg: 3.5625rem, md: 2.8125rem, sm: 2.25rem);
$typography-display-line-heights: (lg: 4rem, md: 3.25rem, sm: 2.75rem);
$typography-display-font-weights: (lg: 500, md: 500, sm: 500);
$typography-display-letter-spacings: (lg: -0.015em, md: -0.01em, sm: -0.005em);

$typography-headline-font-sizes: (lg: 2rem, md: 1.75rem, sm: 1.5rem);
$typography-headline-line-heights: (lg: 2.5rem, md: 2.25rem, sm: 2rem);
$typography-headline-font-weights: (lg: 500, md: 500, sm: 500);
$typography-headline-letter-spacings: (lg: -0.01em, md: -0.005em, sm: 0);

$typography-title-font-sizes: (lg: 1.375rem, md: 1rem, sm: 0.875rem);
$typography-title-line-heights: (lg: 1.75rem, md: 1.5rem, sm: 1.25rem);
$typography-title-font-weights: (lg: 500, md: 500, sm: 500);
$typography-title-letter-spacings: (lg: -0.005em, md: 0, sm: 0.005em);

$typography-body-font-sizes: (lg: 1.125rem, md: 1rem, sm: 0.75rem);
$typography-body-line-heights: (lg: 1.625rem, md: 1.25rem, sm: 1rem);
$typography-body-font-weights: (lg: 400, md: 400, sm: 400);
$typography-body-letter-spacings: (lg: 0, md: 0, sm: 0.01em);

$typography-label-font-sizes: (lg: 0.875rem, md: 1rem, sm: 0.6875rem);
$typography-label-line-heights: (lg: 1.25rem, md: 1.25rem, sm: 1rem);
$typography-label-font-weights: (lg: 500, md: 500, sm: 500);
$typography-label-letter-spacings: (lg: 0.01em, md: 0.02em, sm: 0.02em);

$typography-code-font-sizes: (sm: 0.75rem);
$typography-code-line-heights: (sm: 1.125rem);
$typography-code-font-weights: (sm: 400);
$typography-code-letter-spacings: (sm: 0);`,
      language: 'scss',
    },
    {
      label: 'nuvex-ui/setting.scss components/icon + avatar + bar',
      code: `$icon-close-font-size: 24px;
$icon-class: 'icon';
$icon-prefix: 'icon-';
$icon-state-layer-inset: calc(var(--e-space-base) * 2);
$icon-font-sizes: (
  x-small: 1.125rem,
  small: 1.25rem,
  default: 1.5rem,
  large: 1.75rem,
  x-large: 2rem,
);

$avatar-size: (
  x-small: 24px,
  small: 32px,
  default: 65px,
  large: 80px,
  x-large: 96px,
);

$e-bar-vertical-padding: 0px;
$e-bar-inline-padding: 16px;
$e-bar-height: 64px;
$e-bar-height-dense: 48px;
$e-bar-inline-gap: calc(var(--e-space-base, 4px) * 4);`,
      language: 'scss',
    },
    {
      label: 'nuvex-ui/setting.scss components/button',
      code: `$btn-border-radius: var(--e-border-radius-root, 0rem);
$btn-font-weight: 500;
$btn-letter-spacing: 0.089em;
$btn-border-style: solid;
$btn-border-width: 1px;
$btn-rounded-border-radius: 28px;
$btn-text-transform: none;
$btn-transition-duration: 0.3s;
$interactive-tonal-opacity: 0.06;

$interactive-states: (
  focus: 0.15,
  hover: 0.11,
  active: 0.17,
);

$btn-font-sizes: (
  x-small: 0.625rem,
  small: 0.75rem,
  default: 0.875rem,
  large: 0.875rem,
  x-large: 1rem,
);

$btn-icon-sizes: (
  x-small: 1.125rem,
  small: 1.25rem,
  default: 1.5rem,
  large: 1.75rem,
  x-large: 2rem,
);

$fab-font-sizes: (
  x-small: 1.25rem,
  small: 1.25rem,
  default: 1.5rem,
  large: 1.714rem,
  x-large: 2rem,
);

$fab-height: (
  x-small: 2em,
  small: 2.5em,
  default: 3.5em,
  large: 4em,
  x-large: 4.5em,
);

$stacked-height: (
  x-small: 2em,
  small: 2.5em,
  default: 4.5em,
  large: 5.5em,
  x-large: 8em,
);

$btn-height: (
  x-small: 2.187rem,
  small: 2.5rem,
  default: 3rem,
  large: 3.125rem,
  x-large: 3.4375rem,
);

$btn-text: currentColor;`,
      language: 'scss',
    },
    {
      label: 'nuvex-ui/setting.scss components/chip + list',
      code: `$chip-font-sizes: (
  x-small: 0.625rem,
  small: 0.75rem,
  default: 0.875rem,
  large: 0.9375rem,
  x-large: 1rem,
);

$chip-height: (
  x-small: 24px,
  small: 28px,
  default: 32px,
  large: 36px,
  x-large: 40px,
);

$chip-padding-x: (x-small: 8px, small: 10px, default: 12px, large: 14px, x-large: 16px);
$chip-content-padding-x: (x-small: 8px, small: 10px, default: 12px, large: 14px, x-large: 16px);
$chip-edge-padding-x: (x-small: 5px, small: 6px, default: 7px, large: 8px, x-large: 9px);
$chip-avatar-size: (x-small: 18px, small: 22px, default: 27px, large: 30px, x-large: 34px);
$chip-icon-size: (x-small: 14px, small: 16px, default: 18px, large: 20px, x-large: 22px);

$list-padding-inline: calc(var(--e-space-base, 4px) * 4);
$list-border-radius: var(--e-border-radius-root, 4px);
$list-item-border-radius: var(--e-border-radius-root, 4px);
$list-item-padding-inline: (x-small: 8px, small: 10px, default: 12px, large: 14px, x-large: 16px);
$list-item-font-sizes: (x-small: 0.625rem, small: 0.75rem, default: 0.875rem, large: 0.875rem, x-large: 1rem);
$list-item-states: (focus: 0.12, hover: 0.08, active: 0.12);
$list-item-height: (x-small: 2.187rem, small: 2.5rem, default: 3rem, large: 3.62rem, x-large: 4rem);
$list-item-title-font-sizes: (x-small: 0.625rem, small: 0.75rem, default: 1rem, large: 1rem, x-large: 1.125rem);
$list-item-title-line-heights: (x-small: 0.875rem, small: 1rem, default: 1.5rem, large: 1.5rem, x-large: 1.75rem);
$list-item-subtitle-font-sizes: (x-small: 0.5rem, small: 0.625rem, default: 0.875rem, large: 0.875rem, x-large: 1rem);
$list-item-subtitle-line-heights: (x-small: 0.625rem, small: 0.75rem, default: 1rem, large: 1rem, x-large: 1.25rem);
$list-item-content-padding-block: (x-small: 0.375rem, small: 0.5rem, default: 0.75rem, large: 0.875rem, x-large: 1rem);
$list-item-affix-gap: (x-small: 8px, small: 10px, default: 12px, large: 14px, x-large: 16px);
$list-item-affix-width: (x-small: 18px, small: 20px, default: 22px, large: 24px, x-large: 26px);
$list-item-affix-slot-min-width: (x-small: 18px, small: 20px, default: 22px, large: 24px, x-large: 26px);
$list-item-icon-size: (x-small: 16px, small: 18px, default: 20px, large: 22px, x-large: 24px);
$list-item-dense: (
  height: 40px,
  content-padding-block: 0.375rem,
  affix-gap: 0.5rem,
  title-line-height: 1.125rem,
  subtitle-font-size: 0.75rem,
  subtitle-line-height: 0.875rem,
  icon-size: 20px,
);`,
      language: 'scss',
    },
    {
      label: 'nuvex-ui/setting.scss components/drawer + expansion + schedule',
      code: `$drawer-bg: var(--e-color-surface-base);
    $drawer-color: var(--e-contrast-surface-base);
$drawer-border-color: var(--e-color-border);
$drawer-border-width: 1px;
$drawer-transition-duration: 0.2s;
$drawer-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    $drawer-floating-bg: var(--e-color-surface-raised);
$drawer-floating-margin: 12px;
$drawer-floating-radius: var(--e-border-radius-root, 0rem);

$expansion-header-height: 3rem;
$expansion-header-height-opened: $expansion-header-height * 1.3;
$expansion-header-font-size: 0.875rem;
$expansion-panel-gap: 0.5rem;
$expansion-panel-border-width: thin;
$expansion-panel-border-radius: var(--e-border-radius-root, 0rem);
$expansion-panel-button-background-color: var(--e-color-surface-base);
$expansion-panel-background-color: var(--e-color-surface-base);
$expansion-panel-button-color: var(--e-contrast-surface-base);
$expansion-panel-color: var(--e-contrast-surface-base);

$e-schedule-border-width: thin;
$hour-column-width: 4.0625rem;
$hour-column-width-xs: calc(var(--e-hour-column-width) - 1.1875rem);
$header-col-height: 4.0625rem;
$schedule-bg: var(--e-color-surface-base, #ffffff);
$schedule-color: var(--e-contrast-surface-base);
$schedule-border-color: var(--e-color-border, rgba(0, 0, 0, 0.12));
$schedule-border-radius: var(--e-border-radius-root, 0rem);
$schedule-header-frame-height: calc($header-col-height + 1.25rem);
$schedule-toolbar-gap: 0.5rem;
$schedule-event-bg: var(--e-color-surface-raised, #ffffff);`,
      language: 'scss',
    },
    {
      label: 'nuvex-ui/setting.scss components/date-picker',
      code: `$date-picker-radius: var(--e-border-radius-root, 0rem);
$date-picker-body-width: 18.125rem;
$date-picker-landscape-title-width: 10.625rem;
$date-picker-title-padding: 1rem;
$date-picker-header-padding-block: 0.25rem;
$date-picker-header-padding-inline: 1rem;
$date-picker-grid-padding-inline: 0.75rem;
$date-picker-grid-gap: 0.125rem;
$date-picker-grid-height: 17.25rem;
$date-picker-grid-date-leave-height: 14.6875rem;
$date-picker-grid-date-leave-width: 16.625rem;
$date-picker-grid-header-padding-bottom: 0.25rem;
$date-picker-header-button-min-height: 2.5rem;
$date-picker-header-value-padding-inline: 0.5rem;
$date-picker-day-button-size: 2.25rem;
$date-picker-day-button-radius: 9999px;
$date-picker-grid-header-cell-padding-block: 0.5rem;
$date-picker-title-button-inactive-opacity: 0.6;
$date-picker-muted-opacity: 0.4;
$date-picker-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
$date-picker-title-year-font-size: 0.875rem;
$date-picker-title-year-spacing: 0.5rem;
$date-picker-title-date-font-size: 2.125rem;
$date-picker-title-date-padding-bottom: 0.5rem;
$date-picker-grid-button-font-size: 0.75rem;`,
      language: 'scss',
    },
    {
      label: 'nuvex-ui/setting.scss components/field + switch',
      code: `$field-hover-overlay-opacity: 0.04;
$field-transition-duration: 0.2s;
$field-rest-color: currentColor;
$field-color: $field-rest-color;
$field-select-selection-color: $field-rest-color;
$field-border-radius: var(--e-border-radius-root, 4px);
$field-border-width: 1px;
$field-focus-line-opacity: 0.38;
$field-height: 3.25rem;
$field-height-dense: 3rem;
$field-height-default-with-label-floating: 3.75rem;
$field-height-dense-with-label-floating: 3.25rem;
$field-input-line-height: 1.125rem;
$field-slot-padding-base: 0.25rem;
$field-chip-height: 1.875rem;
$field-chip-height-dense: 1.625rem;
$field-max-width: 100%;
$field-control-size: 3rem;
$field-control-size-dense: 2.5rem;
$field-label-float-y: 0.45rem;
$field-label-float-scale: 0.78;
$field-label-float-y-dense: 0.3rem;
$field-label-float-scale-dense: 0.74;
$field-label-line-height: $field-input-line-height;
$field-control-ripple-display: block;

$switch-track-width: 2.25rem;
$switch-track-height: 0.875rem;
$switch-thumb-height: 1.25rem;`,
      language: 'scss',
    },
    {
      label: 'Grouped CSS variable export maps generated later by framework.scss',
      code: `$theme-base-css-var-groups: (
  'e-grid-breakpoint': $grid-breakpoints,
  'e-grid-gap': $grid-gaps,
  'e-typography-family': $typography-family,
  'e-typography-display-font-size': $typography-display-font-sizes,
  'e-typography-display-line-height': $typography-display-line-heights,
  'e-typography-display-font-weight': $typography-display-font-weights,
  'e-typography-display-letter-spacing': $typography-display-letter-spacings,
  'e-typography-headline-font-size': $typography-headline-font-sizes,
  'e-typography-headline-line-height': $typography-headline-line-heights,
  'e-typography-headline-font-weight': $typography-headline-font-weights,
  'e-typography-headline-letter-spacing': $typography-headline-letter-spacings,
  'e-typography-title-font-size': $typography-title-font-sizes,
  'e-typography-title-line-height': $typography-title-line-heights,
  'e-typography-title-font-weight': $typography-title-font-weights,
  'e-typography-title-letter-spacing': $typography-title-letter-spacings,
  'e-typography-body-font-size': $typography-body-font-sizes,
  'e-typography-body-line-height': $typography-body-line-heights,
  'e-typography-body-font-weight': $typography-body-font-weights,
  'e-typography-body-letter-spacing': $typography-body-letter-spacings,
  'e-typography-label-font-size': $typography-label-font-sizes,
  'e-typography-label-line-height': $typography-label-line-heights,
  'e-typography-label-font-weight': $typography-label-font-weights,
  'e-typography-label-letter-spacing': $typography-label-letter-spacings,
  'e-typography-code-font-size': $typography-code-font-sizes,
  'e-typography-code-line-height': $typography-code-line-heights,
  'e-typography-code-font-weight': $typography-code-font-weights,
  'e-typography-code-letter-spacing': $typography-code-letter-spacings,
  'e-icon-size': $icon-font-sizes,
  'e-interactive-state': $interactive-states,
  'e-btn-font-size': $btn-font-sizes,
  'e-btn-icon-size': $btn-icon-sizes,
  'e-btn-height': $btn-height,
  'e-fab-font-size': $fab-font-sizes,
  'e-fab-height': $fab-height,
  'e-stacked-height': $stacked-height,
  'e-list-item-font-size': $list-item-font-sizes,
  'e-list-item-title-font-size': $list-item-title-font-sizes,
  'e-list-item-title-line-height': $list-item-title-line-heights,
  'e-list-item-subtitle-font-size': $list-item-subtitle-font-sizes,
  'e-list-item-subtitle-line-height': $list-item-subtitle-line-heights,
  'e-list-item-padding-inline': $list-item-padding-inline,
  'e-list-item-content-padding-block': $list-item-content-padding-block,
  'e-list-item-affix-gap': $list-item-affix-gap,
  'e-list-item-affix-width': $list-item-affix-width,
  'e-list-item-affix-slot-min-width': $list-item-affix-slot-min-width,
  'e-list-item-height': $list-item-height,
  'e-list-item-icon-size': $list-item-icon-size,
  'e-list-item-dense': $list-item-dense,
  'e-chip-font-size': $chip-font-sizes,
  'e-chip-height': $chip-height,
  'e-chip-padding-x': $chip-padding-x,
  'e-chip-content-padding-x': $chip-content-padding-x,
  'e-chip-edge-padding-x': $chip-edge-padding-x,
  'e-chip-avatar-size': $chip-avatar-size,
  'e-chip-icon-size': $chip-icon-size,
  'e-elevation': $elevation,
);`,
      language: 'scss',
    },
  ],
}