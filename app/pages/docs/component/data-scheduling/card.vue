<template>
  <article class="docs-page">
    <DocsPageHero :title="content.hero.title" :description-html="content.hero.descriptionHtml" />

    <DocsSection :id="sections.usage.key" :title="sections.usage.title"
      :description-html="sections.usage.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsPlayground" :color="cardProperties.color">
        <template #panel-design>
          <ECard class="full-width" :title="cardLabel('previewTitle')" :subtitle="cardLabel('previewSubtitle')"
            :description="cardLabel('previewDescription')" :color="cardProperties.color"
            :elevation="cardProperties.elevation" :outlined="cardProperties.outlined" :tonal="cardProperties.tonal" />
        </template>
        <template #panel-design-code>
          <CodePanel :code="usageTemplateCode" />
        </template>
        <template #form>
          <EForm>
            <ESelect v-model="cardProperties.color" cols="24" :items="colors" :label="controlLabel('color')"
              clearable />
            <ESelect v-model="cardProperties.elevation" cols="24" :items="elevations" :label="controlLabel('elevation')"
              clearable />
            <ECheckbox v-model="cardProperties.outlined" cols="24" :label="controlLabel('outlined')"
              :color="cardProperties.color" />
            <ECheckbox v-model="cardProperties.tonal" cols="24" :label="controlLabel('tonal')"
              :color="cardProperties.color" />
          </EForm>
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['visual-variants'].key" :title="sections['visual-variants'].title"
      :description-html="sections['visual-variants'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <ERow class="full-width">
            <ECol md="12" lg="4">
              <ECard :title="cardLabel('defaultVariant')" :description="cardLabel('defaultVariantDescription')"
                elevation="sm" />
            </ECol>
            <ECol md="6" lg="4">
              <ECard :title="cardLabel('outlinedVariant')" :description="cardLabel('outlinedVariantDescription')"
                outlined depressed />
            </ECol>
            <ECol md="6" lg="4">
              <ECard :title="cardLabel('tonalVariant')" :description="cardLabel('tonalVariantDescription')"
                color="primary" tonal />
            </ECol>
          </ERow>
        </template>
        <template #panel-template>
          <CodePanel :code="visualVariantsTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['content-anatomy'].key" :title="sections['content-anatomy'].title"
      :description-html="sections['content-anatomy'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <ECard class="full-width" elevation="md" :title="cardLabel('fullAnatomyTitle')"
            :subtitle="cardLabel('fullAnatomySubtitle')" :description="cardLabel('fullAnatomyDescription')">
            <p>{{ cardLabel('bodyCopy') }}</p>
          </ECard>
        </template>
        <template #panel-template>
          <CodePanel :code="contentAnatomyTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['media-placement'].key" :title="sections['media-placement'].title"
      :description-html="sections['media-placement'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <ERow class="full-width">
            <ECol md="6">
              <ECard :prepend-header-icon="$icon.calendar" elevation="md" :title="cardLabel('headerMediaTitle')"
                :subtitle="cardLabel('headerMediaSubtitle')" :description="cardLabel('headerMediaDescription')" />
            </ECol>
            <ECol md="6">
              <ECard :prepend-icon="$icon.account" prepend-vertical-align="center" elevation="md"
                :title="cardLabel('bodyMediaTitle')" :subtitle="cardLabel('bodyMediaSubtitle')"
                :description="cardLabel('bodyMediaDescription')" />
            </ECol>
          </ERow>
        </template>
        <template #panel-template>
          <CodePanel :code="mediaPlacementTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.slots.key" :title="sections.slots.title"
      :description-html="sections.slots.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <ECard class="full-width" outlined :title="cardLabel('actionsTitle')"
            :description="cardLabel('actionsDescription')">
            <template #footer>
              <div class="d-flex justify-end gap-2 full-width">
                <EButton text>{{ cardLabel('cancel') }}</EButton>
                <EButton color="primary">{{ cardLabel('publish') }}</EButton>
              </div>
            </template>
          </ECard>
        </template>
        <template #panel-template>
          <CodePanel :code="slotsTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['composition-patterns'].key" :title="sections['composition-patterns'].title"
      :description-html="sections['composition-patterns'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <ERow class="full-width">
            <ECol md="4">
              <ECard :prepend-header-icon="$icon.account" elevation="md" :title="cardLabel('profileTitle')"
                :subtitle="cardLabel('profileSubtitle')" :description="cardLabel('profileDescription')" />
            </ECol>
            <ECol md="4">
              <ECard :title="cardLabel('taskTitle')" :subtitle="cardLabel('taskSubtitle')" outlined>
                <template #footer>
                  <div class="d-flex justify-end full-width">
                    <EButton text color="primary">{{ cardLabel('taskAction') }}</EButton>
                  </div>
                </template>
              </ECard>
            </ECol>
            <ECol md="4">
              <ECard :title="cardLabel('metricTitle')" :subtitle="cardLabel('metricSubtitle')" tonal color="success">
                <strong class="type-h4">{{ cardLabel('metricValue') }}</strong>
              </ECard>
            </ECol>
          </ERow>
        </template>
        <template #panel-template>
          <CodePanel :code="compositionTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.accessibility.key" :title="sections.accessibility.title"
      :description-html="sections.accessibility.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <ECard class="full-width" outlined role="region" :aria-label="cardLabel('accessibleLabel')"
            :title="cardLabel('accessibleTitle')" :description="cardLabel('accessibleDescription')">
            <template #footer>
              <div class="d-flex justify-end full-width">
                <EButton color="primary">{{ cardLabel('accessibleAction') }}</EButton>
              </div>
            </template>
          </ECard>
        </template>
        <template #panel-template>
          <CodePanel :code="accessibilityTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.props.key" :title="sections.props.title" :description="sections.props.description">
      <h3 class="type-h5 text-heading mb-3">{{ cardLabel('apiTitle') }}</h3>
      <DocsApiTable :api-reference="localizedCardApiReference" />
      <h3 class="type-h5 text-heading mt-6 mb-2">{{ cardLabel('apiSlotsTitle') }}</h3>
      <p class="type-body">{{ cardLabel('apiSlotsBody') }}</p>
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { cardApiReference } from '~/api-reference/data-scheduling/card'
import { cardApiReferenceEs } from '~/api-reference/data-scheduling/card-es'
import { buildTemplateElementSnippet } from '~/utils/snippet-element'
import { cardCodeSnippets } from './card.snippets'

type CardSectionKey = 'usage' | 'visual-variants' | 'content-anatomy' | 'media-placement'
  | 'slots' | 'composition-patterns' | 'accessibility' | 'props'

const { locale } = useI18n()
const content = useDocsComponentI18nContent('pages.card.card')

const getRequiredSection = (key: CardSectionKey) => {
  const section = content.value.sections.find((value) => value.key === key)
  if (!section) throw createError({ statusCode: 500, statusMessage: `Card documentation section missing: ${key}` })
  return section
}

const sections = computed(() => ({
  usage: getRequiredSection('usage'),
  'visual-variants': getRequiredSection('visual-variants'),
  'content-anatomy': getRequiredSection('content-anatomy'),
  'media-placement': getRequiredSection('media-placement'),
  slots: getRequiredSection('slots'),
  'composition-patterns': getRequiredSection('composition-patterns'),
  accessibility: getRequiredSection('accessibility'),
  props: getRequiredSection('props'),
}))

useSeoMeta({ title: computed(() => content.value.seo.title), description: computed(() => content.value.seo.description) })

const colors = ['primary', 'secondary', 'success', 'warning']
const elevations = ['none', 'xs', 'sm', 'md', 'lg', 'xl']
const cardProperties = ref<{
  color: string | undefined
  elevation: string | undefined
  outlined: boolean
  tonal: boolean
}>({ color: undefined, elevation: 'sm', outlined: false, tonal: false })

const { tabsPlayground, tabsDesignTemplate } = useDocsPlaygroundTabSets()
const controlLabel = (key: string): string => content.value.labels.controls.find((item) => item.key === key)?.label ?? key
const cardLabels = computed(() => {
  const labels = content.value.labels.cardText
  return labels && !Array.isArray(labels) ? labels : {}
})
const cardLabel = (key: string): string => String(cardLabels.value[key] ?? key)

const localizedCardApiReference = computed(() => locale.value === 'es' ? cardApiReferenceEs : cardApiReference)

const usageTemplateCode = computed(() => buildTemplateElementSnippet({
  tag: 'ECard',
  attrs: [
    `title="${cardLabel('previewTitle')}"`,
    `subtitle="${cardLabel('previewSubtitle')}"`,
    `description="${cardLabel('previewDescription')}"`,
    cardProperties.value.color && `color="${cardProperties.value.color}"`,
    cardProperties.value.elevation && `elevation="${cardProperties.value.elevation}"`,
    cardProperties.value.outlined && 'outlined',
    cardProperties.value.tonal && 'tonal'
  ],
}))

const {
  visualVariantsTemplateCode,
  contentAnatomyTemplateCode,
  mediaPlacementTemplateCode,
  slotsTemplateCode,
  compositionTemplateCode,
  accessibilityTemplateCode,
} = cardCodeSnippets
</script>
