<template>
  <article class="docs-page">
    <DocsPageHero :title="editorialContent.hero.title" :description="editorialContent.hero.description"
      :actions="heroActions" />

    <DocsSection :title="editorialContent.hero.prerequisitesTitle">
      <ECard elevation="sm" color="primary" tonal>
        <ul class="pl-5">
          <li v-for="(item, index) in editorialContent.hero.prerequisites" :key="item"
            :class="index === editorialContent.hero.prerequisites.length - 1 ? 'mb-0' : 'mb-2'">
            {{ item }}
          </li>
        </ul>
      </ECard>
    </DocsSection>

    <DocsSection :id="sections['choose-path'].key" :title="sections['choose-path'].title"
      :description="sections['choose-path'].description">
      <ERow dense>
        <ECol v-for="item in sections['choose-path'].items" :key="item.title" cols="12" md="6">
          <NuxtLink :to="withLocalePrefix(item.to, locale)" class="docs-page__card-link no-underline">
            <ECard v-ripple outlined class="full-height chose-path__card" :title="item.title"
              :description="item.description" :prepend-header-icon="$icon[item.icon]"
              :prepend-header-icon-props="{ viewBox: item.viewBox }" />
          </NuxtLink>
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="sections['install-package'].key" :title="sections['install-package'].title"
      :description="sections['install-package'].description" :callout="sections['install-package'].callout">
      <CodeCommandTabs :commands="sections['install-package'].commands" />
    </DocsSection>

    <DocsSection :id="sections['register-vue'].key" :title="sections['register-vue'].title"
      :description="sections['register-vue'].description">
      <ECard v-for="snippet in sections['register-vue'].snippets" :subtitle="snippet.label">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="sections['register-nuxt'].key" :title="sections['register-nuxt'].title"
      :description="sections['register-nuxt'].description" :callout="sections['register-nuxt'].callout">
      <ECard v-for="snippet in sections['register-nuxt'].snippets" :subtitle="snippet.label" class="mt-4">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="sections['first-render'].key" :title="sections['first-render'].title"
      :description="sections['first-render'].description">
      <ECard v-for="snippet in sections['first-render'].snippets" :subtitle="snippet.label">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="sections['verify-installation'].key" :title="sections['verify-installation'].title"
      :description="sections['verify-installation'].description">
      <ECard elevation="sm" color="primary" tonal>
        <ol class="pl-5">
          <li v-for="(item, index) in sections['verify-installation'].items" :key="index" class="mb-2">
            {{ item }}
          </li>
        </ol>
      </ECard>
    </DocsSection>

    <DocsSection :id="sections['common-pitfalls'].key" :title="sections['common-pitfalls'].title"
      :description="sections['common-pitfalls'].description">
      <ERow dense>
        <ECol v-for="item in sections['common-pitfalls'].items" :key="item.title" cols="12" md="6">
          <ECard elevation="sm" class="full-height" :title="item.title" :description="item.description" />
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="sections['next-steps'].key" :title="sections['next-steps'].title"
      :description="sections['next-steps'].description" :callout="sections['next-steps'].callout">
      <ERow dense>
        <ECol v-for="(item, index) in sections['next-steps'].items" :key="index" cols="12" md="6">
          <NuxtLink :to="withLocalePrefix(item.to, locale)" class="docs-page__card-link no-underline ">
            <ECard v-ripple outlined :title="item.title" :description="item.description" />
          </NuxtLink>
        </ECol>
      </ERow>
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useDocsInstallationI18nContent } from '~/composables/useDocsI18nContent'
import type { DocsGridItem, DocsPageAction } from '~/types/docs'
import { installationCodeSnippets, installationCommands } from './installation.snippets'
import { withLocalePrefix } from '~/utils/locale-path'

const { locale } = useI18n()

const editorialContent = useDocsInstallationI18nContent('pages.installation.installation')

const heroActions = computed<DocsPageAction[]>(() => ([
  {
    label: editorialContent.value.hero.actions.installPackage,
    to: '/docs/getting-started/installation#install-package',
    outlined: true,
  },
  {
    label: editorialContent.value.hero.actions.nuxtIntegration,
    to: '/docs/getting-started/nuxt-integration',
    variant: 'text',
    outlined: false,
  },
]))

const installationNextStepMeta = [
  {
    to: '/docs/getting-started/quick-start',
    icon: 'gettingStarted',
  },
  {
    to: '/docs/component/forms/button',
    icon: 'forms',
  },
  {
    to: '/docs/theming/overview',
    icon: 'theming',
  },
  {
    to: '/docs/component/layout/app-shell',
    icon: 'layout',
  },
] as const

const installationChoosePathMeta = [
  {
    to: '/docs/getting-started/installation#register-vue',
    icon: 'vite',
    viewBox: '0 0 410 404',
  },
  {
    to: '/docs/getting-started/installation#register-nuxt',
    icon: 'nuxt',
    viewBox: '0 0 24 24',
  },
] as const

const sections = computed(() => {
  const content = editorialContent.value.sections
  const choosePathItems = content['choose-path'].items as DocsGridItem[] | undefined
  const nextStepItems = content['next-steps'].items as DocsGridItem[] | undefined

  const installPackageCallout = {
    color: 'warning',
    icon: 'alert',
    description: content['install-package'].calloutDescription,
  }

  const registerNuxtCallout = {
    color: 'info',
    description: content['register-nuxt'].calloutDescription,
  }

  return {
    'choose-path': {
      key: 'choose-path',
      title: content['choose-path'].title,
      description: content['choose-path'].description,
      items: (choosePathItems ?? []).map((item, index) => {
        const meta = installationChoosePathMeta[index]!

        return {
          title: item.title,
          description: item.description,
          to: meta.to,
          icon: meta.icon,
          viewBox: meta.viewBox,
        }
      }),
      callout: undefined,
    },
    'install-package': {
      key: 'install-package',
      title: content['install-package'].title,
      description: content['install-package'].description,
      commands: installationCommands,
      callout: installPackageCallout,
    },
    'register-vue': {
      key: 'register-vue',
      title: content['register-vue'].title,
      description: content['register-vue'].description,
      snippets: installationCodeSnippets['register-vue'],
      callout: undefined,
    },
    'register-nuxt': {
      key: 'register-nuxt',
      title: content['register-nuxt'].title,
      description: content['register-nuxt'].description,
      snippets: installationCodeSnippets['register-nuxt'],
      callout: registerNuxtCallout,
    },
    'first-render': {
      key: 'first-render',
      title: content['first-render'].title,
      description: content['first-render'].description,
      snippets: installationCodeSnippets['first-render'],
      callout: undefined,
    },
    'verify-installation': {
      key: 'verify-installation',
      title: content['verify-installation'].title,
      description: content['verify-installation'].description,
      items: content['verify-installation'].items,
      itemsHtml: undefined,
      callout: undefined,
    },
    'common-pitfalls': {
      key: 'common-pitfalls',
      title: content['common-pitfalls'].title,
      description: content['common-pitfalls'].description,
      items: content['common-pitfalls'].items,
      callout: undefined,
    },
    'next-steps': {
      key: 'next-steps',
      title: content['next-steps'].title,
      description: content['next-steps'].description,
      items: (nextStepItems ?? []).map((item, index) => {
        const meta = installationNextStepMeta[index]!

        return {
          title: item.title,
          description: item.description,
          to: meta.to,
          icon: meta.icon,
        }
      }),
      callout: undefined,
    },
  }
})

useSeoMeta({
  title: computed(() => editorialContent.value.seo.title),
  description: computed(() => editorialContent.value.seo.description),
})
</script>
<style lang="scss">
.chose-path__card .e-card__header>.e-card__prepend {
  align-self: baseline;

}
</style>