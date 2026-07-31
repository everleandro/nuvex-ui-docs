type RuntimeThemeApiCodeSnippet = {
  label?: string
  code: string
  language: 'bash' | 'ts' | 'js' | 'vue' | 'scss' | 'json' | 'html' | 'css' | 'shell' | 'sh'
}

export const runtimeThemeApiCodeSnippets: Record<
  | 'resolve-initial-theme'
  | 'inspect-theme-state'
  | 'change-active-theme'
  | 'persist-theme-choice'
  | 'control-dom-output'
  | 'emit-css-variables'
  | 'register-runtime-themes'
  | 'app-integration-patterns',
  RuntimeThemeApiCodeSnippet[]
> = {
  'resolve-initial-theme': [
    {
      label: 'app/plugins/nuvex-ui.ts',
      code: `app.use(NuvexUI, {
  theme: {
    defaultTheme: 'light',
    storage: {
      key: 'acme-theme',
    },
    system: {
      enabled: true,
      darkQuery: '(prefers-color-scheme: dark)',
    },
  },
})`,
      language: 'ts',
    },
  ],
  'inspect-theme-state': [
    {
      label: 'components/ThemeInspector.vue <script setup>',
      code: `import { useTheme } from 'nuvex-ui'

const {
  currentTheme,
  availableThemes,
  hasTheme,
  getTheme,
  getThemes,
} = useTheme()`,
      language: 'ts',
    },
    {
      label: 'components/ThemeSelector.vue <script setup>',
      code: `const { availableThemes, setTheme } = useTheme()

const themeOptions = computed(() =>
  Object.values(availableThemes).map((theme) => ({
    value: theme.name,
    label: theme.label ?? theme.name,
  })),
)

const selectTheme = (themeName: string) => {
  setTheme(themeName)
}`,
      language: 'ts',
    },
    {
      label: 'components/ThemeInspector.vue <script setup>',
      code: `const { hasTheme, getTheme } = useTheme()

const describeTheme = (themeName: string) => {
  if (!hasTheme(themeName)) {
    return undefined
  }

  return getTheme(themeName)
}`,
      language: 'ts',
    },
  ],
  'change-active-theme': [
    {
      label: 'components/AppThemeToggle.vue <script setup>',
      code: `const { toggleTheme } = useTheme()

const toggleColorMode = () => {
  toggleTheme('light', 'dark')
}`,
      language: 'ts',
    },
    {
      label: 'components/ThemeSelector.vue <script setup>',
      code: `const { setTheme } = useTheme()

const applySelectedTheme = (themeName: string) => {
  setTheme(themeName)
}`,
      language: 'ts',
    },
    {
      label: 'components/ThemeResetButton.vue <script setup>',
      code: `const { resetTheme } = useTheme()

const clearThemeOverride = () => {
  resetTheme()
}`,
      language: 'ts',
    },
  ],
  'persist-theme-choice': [
    {
      label: 'app/plugins/nuvex-ui.ts',
      code: `app.use(NuvexUI, {
  theme: {
    storage: {
      key: 'acme-theme',
    },
  },
})`,
      language: 'ts',
    },
    {
      label: 'app/plugins/nuvex-ui.ts',
      code: `app.use(NuvexUI, {
  theme: {
    storage: {
      get: () => readThemeFromCookie(),
      set: (themeName: string) => writeThemeToCookie(themeName),
    },
  },
})`,
      language: 'ts',
    },
  ],
  'control-dom-output': [
    {
      label: 'app/plugins/nuvex-ui.ts',
      code: `app.use(NuvexUI, {
  theme: {
    attribute: {
      name: 'data-color-mode',
      lightValue: 'light',
      darkValue: 'dark',
    },
  },
})`,
      language: 'ts',
    },
  ],
  'emit-css-variables': [
    {
      label: 'app/plugins/nuvex-ui.ts',
      code: `app.use(NuvexUI, {
  theme: {
    applyTokensAsCssVars: true,
    cssVarPrefix: '--acme-theme-',
  },
})`,
      language: 'ts',
    },
    {
      label: 'assets/styles/app.css',
      code: `.marketing-banner {
  background: var(--acme-theme-surface-base);
  color: var(--acme-theme-primary);
}`,
      language: 'css',
    },
  ],
  'register-runtime-themes': [
    {
      label: 'components/ThemeRegistryDemo.vue <script setup>',
      code: `const { registerTheme, setTheme, unregisterTheme } = useTheme()

registerTheme({
  name: 'ocean',
  label: 'Ocean',
  isDark: false,
  tokens: {
    primary: '#0ea5e9',
    'surface-base': '#ecfeff',
  },
})

setTheme('ocean')

unregisterTheme('ocean')`,
      language: 'ts',
    },
  ],
  'app-integration-patterns': [
    {
      label: 'layouts/default.vue <script setup>',
      code: `const { currentTheme, toggleTheme } = useTheme()

const toggleColorMode = () => {
  toggleTheme('light', 'dark')
}`,
      language: 'ts',
    },
    {
      label: 'components/ThemeSelector.vue <script setup>',
      code: `const { availableThemes, setTheme } = useTheme()

const themeOptions = computed(() => Object.values(availableThemes))

const handleThemeSelection = (themeName: string) => {
  setTheme(themeName)
}`,
      language: 'ts',
    },
    {
      label: 'components/ThemePreferenceGate.vue <script setup>',
      code: `const { hasTheme, setTheme } = useTheme()

const applyExternalPreference = (themeName: string | undefined) => {
  if (!themeName || !hasTheme(themeName)) {
    return
  }

  setTheme(themeName)
}`,
      language: 'ts',
    },
  ],
}