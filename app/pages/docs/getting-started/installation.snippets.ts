type InstallationCommandSet = {
  [command in 'npm' | 'pnpm' | 'yarn' | 'bun']?: {
    code: string
    language?: 'bash' | 'shell' | 'sh'
    note?: string
  }
}

type InstallationCodeSnippet = {
  label?: string
  code: string
  language: 'bash' | 'ts' | 'js' | 'vue' | 'scss' | 'json'| 'html' | 'css' | 'shell' | 'sh'
}

export const installationCommands: InstallationCommandSet = {
  npm: {
    code: 'npm install nuvex-ui sass',
    language: 'bash',
  },
  pnpm: {
    code: 'pnpm add nuvex-ui sass',
    language: 'bash',
  },
  yarn: {
    code: 'yarn add nuvex-ui sass',
    language: 'bash',
  },
  bun: {
    code: 'bun add nuvex-ui sass',
    language: 'bash',
  },
}

export const installationCodeSnippets: Record<'register-vue' | 'register-nuxt' | 'first-render', InstallationCodeSnippet[]> = {
  'register-vue': [
    {
      label: 'src/main.ts',
      code: "import { createApp } from 'vue'\nimport App from './App.vue'\nimport { NuvexUI } from 'nuvex-ui'\nimport 'nuvex-ui/styles.css'\nimport 'nuvex-ui/framework.scss'\n\nconst app = createApp(App)\n\napp.use(NuvexUI)\napp.mount('#app')",
      language: 'ts',
    },
  ],
  'register-nuxt': [
    {
      label: 'app/plugins/nuvex-ui.ts',
      code: "import { NuvexUI } from 'nuvex-ui'\n\nexport default defineNuxtPlugin((nuxtApp) => {\n  nuxtApp.vueApp.use(NuvexUI)\n})",
      language: 'ts',
    },
    {
      label: 'nuxt.config.ts',
      code: "export default defineNuxtConfig({\n  css: [\n    'nuvex-ui/styles.css',\n    'nuvex-ui/framework.scss',\n  ],\n})",
      language: 'ts',
    },
  ],
  'first-render': [
    {
      code: '<template>\n  <div class="p-4">\n    <EButton color="primary">Hello Nuvex UI</EButton>\n  </div>\n</template>',
      language: 'html',
    },
  ],
}