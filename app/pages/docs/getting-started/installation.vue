<template>
  <article class="docs-page">
    <DocsPageHero :title="content.hero.title" :description="content.hero.description"
      :actions="heroActions" />

    <DocsSection :title="content.hero.prerequisitesTitle">
      <ECard elevation="sm" color="primary" tonal>
        <ul class="pl-5">
          <li v-for="(item, index) in prerequisites" :key="item" :class="index === prerequisites.length - 1 ? 'mb-0' : 'mb-2'">
            {{ item }}
          </li>
        </ul>
      </ECard>
    </DocsSection>

    <DocsSection :id="choosePathSection.key" :title="choosePathSection.title" :description="choosePathSection.description">
      <ERow dense>
        <ECol v-for="item in choosePathSection.items" :key="item.title" cols="12" md="6">
          <NuxtLink :to="withLocalePrefix(item.to, locale)" class="docs-page__card-link no-underline">
            <ECard v-ripple outlined class="full-height chose-path__card" :title="item.title"
              :description="item.description" :prepend-header-icon="$icon[item.icon]"
              :prepend-header-icon-props="{ viewBox: item.viewBox }" />
          </NuxtLink>
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="installPackageSection.key" :title="installPackageSection.title"
      :description="installPackageSection.description" :callout="installPackageSection.callout">
      <CodeCommandTabs :commands="installPackageSection.commands" />
    </DocsSection>

    <DocsSection :id="registerVueSection.key" :title="registerVueSection.title"
      :description="registerVueSection.description">
      <ECard v-for="snippet in registerVueSection.snippets" :key="snippet.label || snippet.code" :subtitle="snippet.label">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="registerNuxtSection.key" :title="registerNuxtSection.title"
      :description="registerNuxtSection.description" :callout="registerNuxtSection.callout">
      <ECard v-for="snippet in registerNuxtSection.snippets" :key="snippet.label || snippet.code" :subtitle="snippet.label" class="mt-4">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="firstRenderSection.key" :title="firstRenderSection.title"
      :description="firstRenderSection.description">
      <ECard v-for="snippet in firstRenderSection.snippets" :key="snippet.label || snippet.code" :subtitle="snippet.label">
        <CodePanel :code="snippet.code" :language="snippet.language" />
      </ECard>
    </DocsSection>

    <DocsSection :id="verifyInstallationSection.key" :title="verifyInstallationSection.title"
      :description="verifyInstallationSection.description">
      <ECard elevation="sm" color="primary" tonal>
        <ol class="pl-5">
          <li v-for="(item, index) in verifyInstallationSection.items" :key="index" class="mb-2">
            {{ item }}
          </li>
        </ol>
      </ECard>
    </DocsSection>

    <DocsSection :id="commonPitfallsSection.key" :title="commonPitfallsSection.title"
      :description="commonPitfallsSection.description">
      <ERow dense>
        <ECol v-for="item in commonPitfallsSection.items" :key="item.title" cols="12" md="6">
          <ECard elevation="sm" class="full-height" :title="item.title" :description="item.description" />
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection :id="nextStepsSection.key" :title="nextStepsSection.title"
      :description="nextStepsSection.description" :callout="nextStepsSection.callout">
      <ERow dense>
        <ECol v-for="item in nextStepsSection.items" :key="item.to" cols="12" md="6">
          <NuxtLink :to="withLocalePrefix(item.to, locale)" class="docs-page__card-link no-underline">
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
const content = computed(() => editorialContent.value)
const prerequisites = computed(() => content.value.hero.prerequisites)

const heroActions = computed<DocsPageAction[]>(() => ([
  {
    label: content.value.hero.actions.installPackage,
    to: '/docs/getting-started/installation#install-package',
    outlined: true,
  },
  {
    label: content.value.hero.actions.nuxtIntegration,
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

const choosePathSection = computed(() => {
  const section = content.value.sections['choose-path']
  const items = (section.items as DocsGridItem[] | undefined) ?? []

  return {
    key: 'choose-path',
    title: section.title,
    description: section.description,
    items: items.map((item, index) => {
      const meta = installationChoosePathMeta[index]!

      return {
        title: item.title,
        description: item.description,
        to: meta.to,
        icon: meta.icon,
        viewBox: meta.viewBox,
      }
    }),
  }
})

const installPackageSection = computed(() => {
  const section = content.value.sections['install-package']

  return {
    key: 'install-package',
    title: section.title,
    description: section.description,
    commands: installationCommands,
    callout: {
      color: 'warning' as const,
      icon: 'alert',
      description: section.calloutDescription,
    },
  }
})

const registerVueSection = computed(() => {
  const section = content.value.sections['register-vue']

  return {
    key: 'register-vue',
    title: section.title,
    description: section.description,
    snippets: installationCodeSnippets['register-vue'],
  }
})

const registerNuxtSection = computed(() => {
  const section = content.value.sections['register-nuxt']

  return {
    key: 'register-nuxt',
    title: section.title,
    description: section.description,
    snippets: installationCodeSnippets['register-nuxt'],
    callout: {
      color: 'info' as const,
      description: section.calloutDescription,
    },
  }
})

const firstRenderSection = computed(() => {
  const section = content.value.sections['first-render']

  return {
    key: 'first-render',
    title: section.title,
    description: section.description,
    snippets: installationCodeSnippets['first-render'],
  }
})

const verifyInstallationSection = computed(() => {
  const section = content.value.sections['verify-installation']

  return {
    key: 'verify-installation',
    title: section.title,
    description: section.description,
    items: section.items ?? [],
  }
})

const commonPitfallsSection = computed(() => {
  const section = content.value.sections['common-pitfalls']

  return {
    key: 'common-pitfalls',
    title: section.title,
    description: section.description,
    items: (section.items as DocsGridItem[] | undefined) ?? [],
  }
})

const nextStepsSection = computed(() => {
  const section = content.value.sections['next-steps']
  const items = (section.items as DocsGridItem[] | undefined) ?? []

  return {
    key: 'next-steps',
    title: section.title,
    description: section.description,
    callout: undefined,
    items: items.map((item, index) => {
      const meta = installationNextStepMeta[index]!

      return {
        title: item.title,
        description: item.description,
        to: meta.to,
        icon: meta.icon,
      }
    }),
  }
})

useSeoMeta({
  title: computed(() => content.value.seo.title),
  description: computed(() => content.value.seo.description),
})
</script>
<style lang="scss">
.chose-path__card .e-card__header>.e-card__prepend {
  align-self: baseline;

}
</style>