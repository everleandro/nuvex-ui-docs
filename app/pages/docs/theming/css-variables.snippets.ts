type CssVariablesCodeSnippet = {
  label?: string
  code: string
  language: 'bash' | 'ts' | 'js' | 'vue' | 'scss' | 'json' | 'html' | 'css' | 'shell' | 'sh'
}

export const cssVariablesCodeSnippets: Record<'use-in-vue-and-nuxt', CssVariablesCodeSnippet[]> = {
  'use-in-vue-and-nuxt': [
    {
      label: 'assets/styles/theme-overrides.css',
      code: `:root {
  --e-border-radius-root: 0.875rem;
  --e-color-primary: #0f766e;
  --e-surface-1: #ffffff;
}

[data-theme='dark'] {
  --e-color-primary: #5eead4;
  --e-surface-1: #111827;
  --e-text-default: #e5eef9;
}`,
      language: 'css',
    },
    {
      label: 'components/MarketingBanner.vue <style scoped>',
      code: `.marketing-banner {
  border-radius: var(--e-border-radius-root);
  background: var(--e-surface-1);
  color: var(--e-text-default);
  border: 1px solid var(--e-border);
}

.marketing-banner__badge {
  background: var(--e-color-primary);
  color: var(--e-contrast-primary);
}`,
      language: 'css',
    },
  ],
}