<template>
  <article class="docs-page icon-configuration-page">
    <DocsPageHero :title="content.hero.title" :description="content.hero.description" />

    <DocsSection id="overview" :title="overviewSection.title" :description="overviewSection.description">
      <ERow dense>
        <ECol v-for="item in overviewSection.items" :key="item.title" cols="12" md="6">
          <ECard outlined class="full-height" :title="item.title" :description="item.description" />
        </ECol>
      </ERow>
    </DocsSection>

    <DocsSection id="application-icon-strategy" :title="applicationStrategySection.title"
      :description="applicationStrategySection.description" :callout="applicationStrategySection.callout">
      <ERow dense>
        <ECol v-for="item in applicationStrategySection.items" :key="item.title" cols="12" md="4">
          <ECard tonal outlined class="full-height" :title="item.title" :description="item.description" />
        </ECol>
      </ERow>

      <ECard class="mt-4" subtitle="Vue · src/main.ts">
        <CodePanel :code="applicationStrategyVueCode" language="ts" />
      </ECard>

      <ECard class="mt-4" subtitle="Nuxt · app/plugins/nuvex-ui.ts">
        <CodePanel :code="applicationStrategyNuxtCode" language="ts" />
      </ECard>

      <ECard class="mt-4" subtitle="Any component · components/AppHeader.vue">
        <CodePanel :code="applicationUsageCode" language="html" />
      </ECard>
    </DocsSection>

    <DocsSection id="mdi-integration" :title="mdiSection.title" :description="mdiSection.description"
      :callout="mdiSection.callout">
      <ERow dense>
        <ECol cols="12" md="6">
          <ECard outlined :title="mdiSection.items[0]?.title" class="full-height"
            :description="mdiSection.items[0]?.description">
            <div class="gap-4 mt-4 d-flex">
              <span v-for="value in mdiResolvedClasses" :key="value" class="docs-inline-code">{{ value }}</span>
            </div>
          </ECard>
        </ECol>
        <ECol cols="12" md="6">
          <ECard outlined :title="mdiSection.items[1]?.title" class="full-height"
            :description="mdiSection.items[1]?.description" />
        </ECol>
      </ERow>

      <ECard class="mt-4" subtitle="Vue · src/main.ts">
        <CodePanel :code="mdiConfigCode" language="ts" />
      </ECard>

      <ECard class="mt-4" subtitle="Nuxt · app/plugins/nuvex-ui.ts">
        <CodePanel :code="mdiNuxtCode" language="ts" />
      </ECard>

      <ECard class="mt-4" subtitle="Any component · components/AppHeader.vue">
        <CodePanel :code="mdiUsageCode" language="html" />
      </ECard>
    </DocsSection>

    <DocsSection id="font-awesome-integration" :title="fontAwesomeSection.title"
      :description="fontAwesomeSection.description" :callout="fontAwesomeSection.callout">
      <ERow dense>
        <ECol cols="12" md="6">
          <ECard outlined :title="fontAwesomeSection.items[0]?.title" class="full-height"
            :description="fontAwesomeSection.items[0]?.description">
            <div class="d-flex gap-4 mt-4">
              <span v-for="value in fontAwesomeResolvedClasses" :key="value" class="docs-inline-code">{{ value }}</span>
            </div>
          </ECard>
        </ECol>
        <ECol cols="12" md="6">
          <ECard outlined :title="fontAwesomeSection.items[1]?.title" class="full-height"
            :description="fontAwesomeSection.items[1]?.description" />
        </ECol>
      </ERow>

      <ECard class="mt-4" subtitle="Vue · src/main.ts">
        <CodePanel :code="fontAwesomeConfigCode" language="ts" />
      </ECard>

      <ECard class="mt-4" subtitle="Nuxt · app/plugins/nuvex-ui.ts">
        <CodePanel :code="fontAwesomeNuxtCode" language="ts" />
      </ECard>

      <ECard class="mt-4" subtitle="Any component · components/AppHeader.vue">
        <CodePanel :code="fontAwesomeUsageCode" language="html" />
      </ECard>
    </DocsSection>

    <DocsSection id="internal-framework-icons" :title="internalFrameworkIconsSection.title"
      :description="internalFrameworkIconsSection.description" :callout="internalFrameworkIconsSection.callout">
      <ECard elevation="sm" class="icon-configuration-page__content-card">
        <p v-for="(paragraph, index) in internalFrameworkIconsSection.paragraphs" :key="index"
          :class="index === internalFrameworkIconsSection.paragraphs.length - 1 ? 'mb-0' : 'mb-2'">
          {{ paragraph }}
        </p>
      </ECard>
    </DocsSection>

    <DocsSection id="overriding-framework-icons" :title="overrideSection.title"
      :description="overrideSection.description" :callout="overrideSection.callout">
      <ERow dense>
        <ECol v-for="item in overrideSection.items" :key="item.title" cols="12" md="6">
          <ECard outlined class="full-height" :title="item.title" :description="item.description" />
        </ECol>
      </ERow>

      <ECard class="mt-4" subtitle="Vue · src/main.ts">
        <CodePanel :code="overrideFrameworkIconsCode" language="ts" />
      </ECard>

      <ECard class="mt-4" subtitle="Nuxt · app/plugins/nuvex-ui.ts">
        <CodePanel :code="overrideFrameworkIconsNuxtCode" language="ts" />
      </ECard>

      <ECard class="mt-4" subtitle="Any component · components/ProfileForm.vue">
        <CodePanel :code="overrideUsageCode" language="html" />
      </ECard>
    </DocsSection>

    <DocsSection id="per-instance-overrides" :title="perInstanceSection.title"
      :description="perInstanceSection.description" :callout="perInstanceSection.callout">
      <ECard subtitle="Any component · components/AppHeader.vue">
        <CodePanel :code="perInstanceOverrideCode" language="html" />
      </ECard>
    </DocsSection>

    <DocsSection id="ssr-considerations" :title="ssrSection.title" :description="ssrSection.description"
      :callout="ssrSection.callout">
      <ECard elevation="sm" color="success" tonal>
        <ul class="pl-5 mb-0">
          <li v-for="item in ssrSection.items" :key="item" class="mb-2">
            {{ item }}
          </li>
        </ul>
      </ECard>
    </DocsSection>

    <DocsSection id="recommendations" :title="recommendationsSection.title"
      :description="recommendationsSection.description">
      <ERow dense>
        <ECol v-for="item in recommendationsSection.items" :key="item.title" cols="12" md="6">
          <ECard class="full-height" outlined :title="item.title" :description="item.description" />
        </ECol>
      </ERow>
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import type { DocsEditorialGridItem, DocsIconConfigurationSectionKey, DocsWorkflowPageContent } from '~/types/docs'
import { iconConfigurationCodeSnippets } from './icon-configuration.snippets'

const editorialContent = useDocsI18nContent<DocsWorkflowPageContent<DocsIconConfigurationSectionKey>>('pages.iconConfiguration.iconConfiguration')
const content = computed(() => editorialContent.value)

const overviewSection = computed(() => {
  const section = content.value.sections.overview

  return {
    title: section.title,
    description: section.description,
    items: (section.items as DocsEditorialGridItem[] | undefined) ?? [],
  }
})

const applicationStrategySection = computed(() => {
  const section = content.value.sections['application-icon-strategy']

  return {
    title: section.title,
    description: section.description,
    items: (section.items as DocsEditorialGridItem[] | undefined) ?? [],
    callout: {
      color: 'info' as const,
      icon: 'information',
      description: section.calloutDescription || '',
    },
  }
})

const mdiSection = computed(() => {
  const section = content.value.sections['mdi-integration']

  return {
    title: section.title,
    description: section.description,
    items: (section.items as DocsEditorialGridItem[] | undefined) ?? [],
    callout: {
      color: 'info' as const,
      icon: 'information',
      description: section.calloutDescription || '',
    },
  }
})

const fontAwesomeSection = computed(() => {
  const section = content.value.sections['font-awesome-integration']

  return {
    title: section.title,
    description: section.description,
    items: (section.items as DocsEditorialGridItem[] | undefined) ?? [],
    callout: {
      color: 'info' as const,
      icon: 'information',
      description: section.calloutDescription || '',
    },
  }
})

const internalFrameworkIconsSection = computed(() => {
  const section = content.value.sections['internal-framework-icons']

  return {
    title: section.title,
    description: section.description,
    paragraphs: (section.items as string[] | undefined) ?? [],
    callout: {
      color: 'warning' as const,
      icon: 'alert',
      description: section.calloutDescription || '',
    },
  }
})

const overrideSection = computed(() => {
  const section = content.value.sections['overriding-framework-icons']

  return {
    title: section.title,
    description: section.description,
    items: (section.items as DocsEditorialGridItem[] | undefined) ?? [],
    callout: {
      color: 'success' as const,
      icon: 'checkCircle',
      description: section.calloutDescription || '',
    },
  }
})

const perInstanceSection = computed(() => {
  const section = content.value.sections['per-instance-overrides']

  return {
    title: section.title,
    description: section.description,
    callout: {
      color: 'info' as const,
      icon: 'information',
      description: section.calloutDescription || '',
    },
  }
})

const ssrSection = computed(() => {
  const section = content.value.sections['ssr-considerations']

  return {
    title: section.title,
    description: section.description,
    items: (section.items as string[] | undefined) ?? [],
    callout: {
      color: 'success' as const,
      icon: 'checkCircle',
      description: section.calloutDescription || '',
    },
  }
})

const recommendationsSection = computed(() => {
  const section = content.value.sections.recommendations

  return {
    title: section.title,
    description: section.description,
    items: (section.items as DocsEditorialGridItem[] | undefined) ?? [],
  }
})

const mdiResolvedClasses = ['mdi', 'mdi-home']
const fontAwesomeResolvedClasses = ['fa', 'fa-solid', 'fa-house']

const applicationStrategyVueCode = iconConfigurationCodeSnippets['application-strategy-vue'].code
const applicationStrategyNuxtCode = iconConfigurationCodeSnippets['application-strategy-nuxt'].code
const applicationUsageCode = iconConfigurationCodeSnippets['application-usage'].code

const mdiConfigCode = iconConfigurationCodeSnippets['mdi-config'].code
const mdiNuxtCode = iconConfigurationCodeSnippets['mdi-nuxt'].code
const mdiUsageCode = iconConfigurationCodeSnippets['mdi-usage'].code

const fontAwesomeConfigCode = iconConfigurationCodeSnippets['font-awesome-config'].code
const fontAwesomeNuxtCode = iconConfigurationCodeSnippets['font-awesome-nuxt'].code
const fontAwesomeUsageCode = iconConfigurationCodeSnippets['font-awesome-usage'].code

const overrideFrameworkIconsCode = iconConfigurationCodeSnippets['override-framework-icons'].code
const overrideFrameworkIconsNuxtCode = iconConfigurationCodeSnippets['override-framework-icons-nuxt'].code
const overrideUsageCode = iconConfigurationCodeSnippets['override-usage'].code

const perInstanceOverrideCode = iconConfigurationCodeSnippets['per-instance-override'].code

useSeoMeta({
  title: () => content.value.seo.title,
  description: () => content.value.seo.description,
})
</script>

<style lang="scss">
.icon-configuration-page {
  &__resolved-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  &__resolved-list .docs-inline-code {
    display: inline-flex;
    align-items: center;
    min-height: 32px;
    padding: 0 10px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--e-color-primary) 10%, transparent);
  }

  &__content-card {
    p+p {
      margin-top: 12px;
    }
  }
}
</style>