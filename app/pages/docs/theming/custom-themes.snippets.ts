type CustomThemesCodeSnippet = {
  label?: string
  code: string
  language: 'bash' | 'ts' | 'js' | 'vue' | 'scss' | 'json' | 'html' | 'css' | 'shell' | 'sh'
}

export const customThemesCodeSnippets: Record<'define-theme-object' | 'register-at-startup' | 'operate-at-runtime', CustomThemesCodeSnippet[]> = {
  'define-theme-object': [
    {
      label: 'theme/ocean.ts',
      code: `export const oceanTheme = {
  name: 'ocean',
  label: 'Ocean',
  isDark: false,
  tokens: {
    brand: '#0ea5e9',
    'surface-1': '#ecfeff',
    'text-default': '#0f172a',
  },
}`,
      language: 'ts',
    },
  ],
  'register-at-startup': [
    {
      label: 'app/plugins/nuvex-ui.ts',
      code: `import { NuvexUI } from 'nuvex-ui'
import { oceanTheme } from './theme/ocean'

app.use(NuvexUI, {
  theme: {
    themes: {
      ocean: oceanTheme,
    },
    defaultTheme: 'light',
  },
})`,
      language: 'ts',
    },
  ],
  'operate-at-runtime': [
    {
      label: 'components/ThemeSelector.vue <script setup>',
      code: `import { useTheme } from 'nuvex-ui'

const { availableThemes, registerTheme, unregisterTheme, setTheme } = useTheme()

registerTheme({
  name: 'campaign-dark',
  label: 'Campaign Dark',
  isDark: true,
  tokens: {
    brand: '#f97316',
  },
})

setTheme('campaign-dark')

unregisterTheme('campaign-dark')`,
      language: 'ts',
    },
  ],
}