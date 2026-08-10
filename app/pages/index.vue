<template>
  <article class="docs-landing">
    <section class="docs-landing__hero d-flex pb-0 justify-center items-center flex-column gap-4 pt-0">
      <h6 class="type-subtitle text-uppercase text-muted">{{ content.hero.eyebrow }}</h6>
      <h1 class="type-h1 text-center">{{ content.hero.title }}</h1>
      <p class="type-title text-center">{{ content.hero.description }}
      </p>
      <div class="d-flex gap-4">
        <EButton color="primary" rounded size="x-large" width="168.68"
          :to="withLocalePrefix('/docs/getting-started/quick-start', locale)">
          {{ getHeroActionLabel('open-quick-start') }}
        </EButton>
        <EButton rounded outlined size="x-large" :to="withLocalePrefix('/docs/component/core-actions/button', locale)">
          {{ getHeroActionLabel('browse-components') }}
        </EButton>
      </div>

      <div class="d-flex flex-wrap justify-center gap-2 docs-landing__hero-pills">
        <EChip v-for="pill in heroPills" :key="pill" outlined>
          {{ pill }}
        </EChip>
      </div>
    </section>

    <section class="docs-landing__dashboard-example d-flex justify-center pt-0">
      <ECard elevation="md" class="docs-landing__dashboard-frame-card">
        <DocsPlaygroundFrame :path="dashboardPreviewSrc" :locale="locale" title="Landing dashboard example" />
      </ECard>
    </section>

    <section class="docs-landing__quick-start surface-base">
      <div class="docs-landing__section-container ">
        <ERow>
          <ECol sm="6">
            <ECard class="full-width quick-start__info transparent-card">
              <h6 class="type-subtitle text-uppercase text-muted">{{ quickStartSection.title }}</h6>
              <h2 class="type-h2 my-4">{{ quickStartLabels.panelTitle }}</h2>
              <p class="type-lead text-muted">
                {{ quickStartSection.body }}
              </p>
              <template #footer>
                <EButton color="secondary" :to="withLocalePrefix('/docs/getting-started/installation', locale)"
                  :aria-label="quickStartLabels.commandLabel" :title="quickStartLabels.commandLabel">
                  <span class="muted-text mx-2">$</span> npm install nuvex-ui
                </EButton>
              </template>
            </ECard>
          </ECol>
          <ECol sm="6">
            <ECard elevation="md" class="full-height">
              <CodePanel :code="snippet.quickStart" :language="snippet.language" />
            </ECard>
          </ECol>
        </ERow>
      </div>
    </section>
    <section class="docs-landing__theming">
      <ERow equal>
        <ECol sm="6">
          <ECard class="full-width quick-theming__info transparent-card">
            <h6 class="type-subtitle text-uppercase text-muted">{{ themingSection.title }}</h6>
            <h2 class="type-h2 my-4">{{ themingLabels.panelTitle }}</h2>
            <p class="type-lead text-muted">
              {{ themingSection.body }}
            </p>
            <ETabGroup v-model="themingForm.color" class="my-4">
              <ETab v-for="color in colors" :key="color" :value="color" :color="color">{{ color }}</ETab>
            </ETabGroup>
            <ECard :title="themingLabels.cardTitle" :subtitle="themingLabels.cardSubtitle" elevation="md">
              <EForm :field-color="themingForm.color" retain-color label-min-width="100" text-align="right">
                <ETextfield v-model="themingForm.name" :label="themingLabels.fieldName"
                  :placeholder="themingLabels.fieldNamePlaceholder" />
                <ETextfield v-model="themingForm.lastName" :label="themingLabels.fieldLastName"
                  :placeholder="themingLabels.fieldLastNamePlaceholder" />
                <ESwitch v-model="themingForm.twoFactorAuth" :label="themingLabels.switchLabel" />
              </EForm>
              <div class="d-flex justify-end gap-4 pt-4">
                <EButton text width="120">{{ themingLabels.cancel }}</EButton>
                <EButton color="primary" width="120">{{ themingLabels.save }}</EButton>
              </div>
            </ECard>
          </ECard>
        </ECol>
        <ECol sm="6">
          <ECard elevation="md" class="full-height">
            <CodePanel :code="yourDesignSnippet.yourDesign" :language="yourDesignSnippet.language" />
          </ECard>
        </ECol>
      </ERow>
    </section>
  </article>
</template>


<script setup lang="ts">
definePageMeta({
  layout: 'landing',
})
import { ETab, ETextfield } from 'nuvex-ui'
import type { DocsConceptPageContent, DocsHomeSectionKey } from '~/types/docs'
import { withLocalePrefix } from '~/utils/locale-path'
const { getAvatarByIndex } = useAvatars()
const { locale } = useI18n()

const editorialContent = useDocsI18nContent<DocsConceptPageContent<DocsHomeSectionKey>>('pages.home.home')
const content = computed(() => editorialContent.value)

const getHeroActionLabel = (key: string) => {
  const action = content.value.hero.actions?.find((entry) => entry.key === key)

  if (!action) {
    throw new Error(`Missing home hero action: ${key}`)
  }

  return action.label
}

const heroPills = computed(() => content.value.hero.pills ?? [])
const dashboardPreviewSrc = computed(() => withLocalePrefix('/playgrounds/landing-dashboard', locale.value))
const quickStartSection = computed(() => content.value.sections['quick-start-showcase'])
const themingSection = computed(() => content.value.sections['theming-showcase'])

const quickStartLabels = computed(() => {
  return {
    panelTitle: quickStartSection.value.labels?.panelTitle ?? '',
    commandLabel: quickStartSection.value.labels?.commandLabel ?? '',
  }
})

const themingLabels = computed(() => {
  return {
    panelTitle: themingSection.value.labels?.panelTitle ?? '',
    cardTitle: themingSection.value.labels?.cardTitle ?? '',
    cardSubtitle: themingSection.value.labels?.cardSubtitle ?? '',
    fieldName: themingSection.value.labels?.fieldName ?? '',
    fieldNamePlaceholder: themingSection.value.labels?.fieldNamePlaceholder ?? '',
    fieldLastName: themingSection.value.labels?.fieldLastName ?? '',
    fieldLastNamePlaceholder: themingSection.value.labels?.fieldLastNamePlaceholder ?? '',
    switchLabel: themingSection.value.labels?.switchLabel ?? '',
    cancel: themingSection.value.labels?.cancel ?? '',
    save: themingSection.value.labels?.save ?? '',
  }
})

const colors = ['blue', 'green', 'orange', 'pink', 'purple', 'red', 'teal']
const themingForm = ref({
  color: 'blue',
  name: '',
  lastName: '',
  avatar: getAvatarByIndex(0),
  twoFactorAuth: false,
})
const scritpTag = `&lt;/script>`.replace(/&lt;/g, '<')
const snippet = {
  quickStart: `<EButton>
  <EButton /> text </EButton>
</template>

<script setup>
  import { EButton } from 'nuvex-ui'
${scritpTag}`,
  language: 'html'
}
const yourDesignSnippet = {
  yourDesign: `<script setup>
  const { registerTheme, setTheme, unregisterTheme } = useTheme()

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

  unregisterTheme('ocean')
${scritpTag}`,
  language: 'html'
}
useSeoMeta({
  title: computed(() => content.value.seo.title),
  description: computed(() => content.value.seo.description),
})
</script>
<style lang="scss">
.docs-landing {
  --section-space-vertical: calc(var(--e-space-base) * 50);

  &__hero {
    min-height: 60dvh;
    background: linear-gradient(to bottom,
        color-mix(in srgb, var(--e-color-primary) 10%, transparent) 0%,
        transparent 75%);

    p {
      max-width: 760px;
    }

    .type-title {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      line-clamp: 3;
      overflow: hidden;
    }
  }

  section:not([class*="pb-"]) {
    padding-bottom: var(--section-space-vertical);
  }

  section:not([class*="pt-"]) {
    padding-top: var(--section-space-vertical);
  }

  section {
    padding-left: calc(var(--e-space-base) * 4);
    padding-right: calc(var(--e-space-base) * 4);
  }

  &__dashboard-frame-card {
    --card-padding: 0;
    --docs-playground-frame-height: 800px;
    max-width: 1300px;
    overflow: hidden;
    border: 1px solid color-mix(in srgb, var(--e-color-outline) 62%, transparent);
  }

  .transparent-card {
    background-color: transparent;
  }

  &__section-container {
    max-width: 1185px;
    margin: auto;
  }

}
</style>
