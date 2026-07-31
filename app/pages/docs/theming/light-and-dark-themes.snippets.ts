type LightAndDarkThemesCodeSnippet = {
  label?: string
  code: string
  language: 'bash' | 'ts' | 'js' | 'vue' | 'scss' | 'json' | 'html' | 'css' | 'shell' | 'sh'
}

export const lightAndDarkThemesCodeSnippets: Record<'adopt-in-vue-and-nuxt' | 'dom-theme-contract', LightAndDarkThemesCodeSnippet[]> = {
  'adopt-in-vue-and-nuxt': [
    {
      label: 'app/plugins/nuvex-ui.ts',
      code: `import { createApp } from 'vue'
import App from './App.vue'
import { NuvexUI } from 'nuvex-ui'

createApp(App).use(NuvexUI, {
  theme: {
    defaultTheme: 'light',
    storage: {
      enabled: true,
      key: 'my-product-theme',
    },
    system: {
      enabled: true,
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
})`,
      language: 'ts',
    },
  ],
  'dom-theme-contract': [
    {
      label: 'app/assets/styles/theme.css',
      code: `:root {
  color-scheme: light;
}

[data-theme='dark'] {
  color-scheme: dark;
}

[data-theme='dark'] .marketing-shell {
  background: var(--e-color-surface-canvas);
  color: var(--e-text-default);
}`,
      language: 'css',
    },
  ],
}