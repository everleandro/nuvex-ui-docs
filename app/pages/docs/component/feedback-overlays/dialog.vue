<template>
  <article class="docs-page">
    <DocsPageHero :title="content.hero.title" :description-html="content.hero.descriptionHtml" />

    <DocsSection :id="sections.usage.key" :title="sections.usage.title"
      :description-html="sections.usage.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsPlayground" color="primary">
        <template #panel-design>
          <EButton color="primary" @click="usageOpen = true">{{ dialogLabel('openDialog') }}</EButton>
          <EDialog v-model="usageOpen" :max-width="dialogProperties.maxWidth" :elevation="dialogProperties.elevation"
            :persistent="dialogProperties.persistent" :fluid="dialogProperties.fluid"
            :auto-focus="dialogProperties.autoFocus" :restore-focus="dialogProperties.restoreFocus">
            <ECard :title="dialogLabel('basicTitle')" :description="dialogLabel('basicBody')">
              <div class="d-flex justify-end">
                <EButton color="primary" @click="usageOpen = false">{{ dialogLabel('close') }}</EButton>
              </div>
            </ECard>
          </EDialog>
        </template>
        <template #panel-design-code>
          <CodePanel :code="usageTemplateCode" />
        </template>
        <template #form>
          <EForm>
            <ESelect v-model="dialogProperties.maxWidth" cols="24" :items="maxWidths"
              :label="controlLabel('maxWidth')" />
            <ESelect v-model="dialogProperties.elevation" cols="24" :items="elevations"
              :label="controlLabel('elevation')" />
            <ECheckbox v-model="dialogProperties.persistent" cols="24" :label="controlLabel('persistent')" />
            <ECheckbox v-model="dialogProperties.fluid" cols="24" :label="controlLabel('fluid')" />
            <ECheckbox v-model="dialogProperties.autoFocus" cols="24" :label="controlLabel('autoFocus')" />
            <ECheckbox v-model="dialogProperties.restoreFocus" cols="24" :label="controlLabel('restoreFocus')" />
          </EForm>
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['dismissal-and-persistence'].key" :title="sections['dismissal-and-persistence'].title"
      :description-html="sections['dismissal-and-persistence'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" color="primary">
        <template #panel-design>
          <div class="d-flex flex-wrap justify-center gap-3">
            <EButton outlined @click="standardOpen = true">{{ dialogLabel('standardDialog') }}</EButton>
            <EButton color="primary" @click="persistentOpen = true">{{ dialogLabel('persistentDialog') }}</EButton>
          </div>

          <EDialog v-model="standardOpen" :max-width="440">
            <ECard :title="dialogLabel('dismissalTitle')" :description="dialogLabel('dismissalBody')">
              <EButton color="primary" block @click="standardOpen = false">{{ dialogLabel('close') }}</EButton>
            </ECard>
          </EDialog>

          <EDialog ref="persistentDialog" v-model="persistentOpen" persistent :max-width="440">
            <ECard :title="dialogLabel('dismissalTitle')" :description="dialogLabel('dismissalBody')">
              <div class="d-flex flex-wrap justify-end gap-2">
                <EButton text @click="persistentDialog?.close(true)">{{ dialogLabel('cancel') }}</EButton>
                <EButton color="primary" @click="persistentOpen = false">{{ dialogLabel('continue') }}</EButton>
              </div>
            </ECard>
          </EDialog>
        </template>
        <template #panel-template>
          <CodePanel :code="dismissalTemplateCode" />
        </template>
        <template #panel-ts>
          <CodePanel :code="dismissalTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['visual-variants'].key" :title="sections['visual-variants'].title"
      :description-html="sections['visual-variants'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" color="primary">
        <template #panel-design>
          <div class="d-flex flex-wrap justify-center gap-4">
            <EButton outlined @click="compactOpen = true">{{ dialogLabel('compactDialog') }}</EButton>
            <EButton outlined @click="fluidOpen = true">{{ dialogLabel('fluidDialog') }}</EButton>
          </div>
          <EDialog v-model="compactOpen" :max-width="360" elevation="sm">
            <ECard :title="dialogLabel('sizingTitle')" :description="dialogLabel('sizingBody')">
              <EButton color="primary" block @click="compactOpen = false">{{ dialogLabel('close') }}</EButton>
            </ECard>
          </EDialog>
          <EDialog v-model="fluidOpen" fluid :max-width="720" elevation="md">
            <ECard :title="dialogLabel('sizingTitle')" :description="dialogLabel('sizingBody')">
              <div class="d-flex justify-end">
                <EButton color="primary" @click="fluidOpen = false">{{ dialogLabel('close') }}</EButton>
              </div>
            </ECard>
          </EDialog>
        </template>
        <template #panel-template>
          <CodePanel :code="visualVariantsTemplateCode" />
        </template>
        <template #panel-ts>
          <CodePanel :code="visualVariantsTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.fullscreen.key" :title="sections.fullscreen.title"
      :description-html="sections.fullscreen.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" color="primary">
        <template #panel-design>
          <EButton color="primary" @click="fullscreenOpen = true">{{ dialogLabel('openFullscreen') }}</EButton>
          <EDialog v-model="fullscreenOpen" fullscreen>
            <EBar color="primary" elevation="sm">
              <h2 class="type-h5 text-capitalize">{{ dialogLabel('fullscreenTitle') }}</h2>
              <ESpacer />
              <EButton text @click="fullscreenOpen = false">{{ dialogLabel('close') }}</EButton>
            </EBar>

            <div class="p-6 d-flex flex-column gap-6">
              <p class="type-body text-center">{{ dialogLabel('fullscreenBody') }}</p>
            </div>
          </EDialog>
        </template>
        <template #panel-template>
          <CodePanel :code="fullscreenTemplateCode" />
        </template>
        <template #panel-ts>
          <CodePanel :code="fullscreenTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['composition-patterns'].key" :title="sections['composition-patterns'].title"
      :description-html="sections['composition-patterns'].descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" color="primary">
        <template #panel-design>
          <EButton outlined @click="formOpen = true">{{ dialogLabel('openForm') }}</EButton>
          <EDialog v-model="formOpen" :max-width="520">
            <ECard :title="dialogLabel('formTitle')" :description="dialogLabel('formBody')">
              <EForm>
                <ETextfield v-model="invite.name" :label="dialogLabel('nameLabel')" />
                <ETextfield v-model="invite.email" type="email" :label="dialogLabel('emailLabel')" />
              </EForm>
              <div class="d-flex mt-4 justify-end gap-4">
                <EButton text @click="formOpen = false">{{ dialogLabel('cancel') }}</EButton>
                <EButton color="primary" @click="formOpen = false">{{ dialogLabel('save') }}</EButton>
              </div>
            </ECard>
          </EDialog>
        </template>
        <template #panel-template>
          <CodePanel :code="compositionTemplateCode" />
        </template>
        <template #panel-ts>
          <CodePanel :code="compositionTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.accessibility.key" :title="sections.accessibility.title"
      :description-html="sections.accessibility.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
        <template #panel-design>
          <div class="d-flex flex-column items-center gap-3">
            <EButton color="primary" @click="accessibilityOpen = true">{{ dialogLabel('openAccessible') }}</EButton>
            <p class="type-caption text-medium-emphasis">{{ dialogLabel('focusHint') }}</p>
          </div>
          <EDialog v-model="accessibilityOpen" :max-width="480">
            <ECard :title="dialogLabel('accessibilityTitle')" :description="dialogLabel('accessibilityBody')">
              <div class="d-flex flex-wrap justify-end gap-2">
                <EButton text @click="accessibilityOpen = false">{{ dialogLabel('cancel') }}</EButton>
                <EButton color="primary" @click="accessibilityOpen = false">{{ dialogLabel('continue') }}</EButton>
              </div>
            </ECard>
          </EDialog>
        </template>
        <template #panel-template>
          <CodePanel :code="accessibilityTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.props.key" :title="sections.props.title" :description="sections.props.description">
      <h3 class="type-h5 text-heading mb-3">{{ dialogLabel('apiDialog') }}</h3>
      <DocsApiTable :api-reference="localizedDialogApiReference" />
      <h3 class="type-h5 text-heading mt-6 mb-2">{{ dialogLabel('apiDetailsTitle') }}</h3>
      <p class="type-body">{{ dialogLabel('apiDetailsBody') }}</p>
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { dialogApiReference } from '~/api-reference/feedback-overlays/dialog'
import { dialogApiReferenceEs } from '~/api-reference/feedback-overlays/dialog-es'
import { dialogCodeSnippets } from './dialog.snippets'

type DialogSectionKey = 'usage' | 'dismissal-and-persistence' | 'visual-variants' | 'fullscreen'
  | 'composition-patterns' | 'accessibility' | 'props'
type DialogExposed = { close: (force?: boolean) => void }

const { locale } = useI18n()
const content = useDocsComponentI18nContent('pages.modal.dialog')
const getRequiredSection = (key: DialogSectionKey) => {
  const section = content.value.sections.find((value) => value.key === key)
  if (!section) throw createError({ statusCode: 500, statusMessage: `Dialog documentation section missing: ${key}` })
  return section
}
const sections = computed(() => ({
  usage: getRequiredSection('usage'),
  'dismissal-and-persistence': getRequiredSection('dismissal-and-persistence'),
  'visual-variants': getRequiredSection('visual-variants'),
  fullscreen: getRequiredSection('fullscreen'),
  'composition-patterns': getRequiredSection('composition-patterns'),
  accessibility: getRequiredSection('accessibility'),
  props: getRequiredSection('props'),
}))

useSeoMeta({ title: computed(() => content.value.seo.title), description: computed(() => content.value.seo.description) })

const usageOpen = ref(false)
const standardOpen = ref(false)
const persistentOpen = ref(false)
const compactOpen = ref(false)
const fluidOpen = ref(false)
const fullscreenOpen = ref(false)
const formOpen = ref(false)
const accessibilityOpen = ref(false)
const persistentDialog = ref<DialogExposed | null>(null)
const invite = ref({ name: '', email: '' })
const maxWidths = [360, 480, 640]
const elevations = ['xs', 'sm', 'md', 'lg']
const dialogProperties = ref({
  maxWidth: 480,
  elevation: 'sm',
  persistent: false,
  fluid: false,
  autoFocus: true,
  restoreFocus: true,
})

const { tabsPlayground, tabsDesignTemplate, tabsDesignTemplateTs } = useDocsPlaygroundTabSets()
const controlLabel = (key: string): string => content.value.labels.controls.find((item) => item.key === key)?.label ?? key
const dialogLabel = (key: string): string => {
  const labels = content.value.labels.dialogText
  return labels && !Array.isArray(labels) ? labels[key] ?? key : key
}

const usageTemplateCode = computed(() => `<EButton @click="dialogOpen = true">
  Open dialog
</EButton>

<EDialog
  v-model="dialogOpen"
  :max-width="${dialogProperties.value.maxWidth}"
  elevation="${dialogProperties.value.elevation}"${dialogProperties.value.persistent ? '\n  persistent' : ''}${dialogProperties.value.fluid ? '\n  fluid' : ''}${dialogProperties.value.autoFocus ? '\n  auto-focus' : ''}${dialogProperties.value.restoreFocus ? '\n  restore-focus' : ''}
>
 <ECard :title="${dialogLabel('basicTitle')}" :description="${dialogLabel('basicBody')}">
    <div class="d-flex justify-end">
      <EButton color="primary" @click="usageOpen = false">${dialogLabel('close')}</EButton>
    </div>
  </ECard>
</EDialog>`)

const localizedDialogApiReference = computed(() => locale.value === 'es' ? dialogApiReferenceEs : dialogApiReference)
const {
  dismissalTemplateCode,
  dismissalTsCode,
  visualVariantsTemplateCode,
  visualVariantsTsCode,
  fullscreenTemplateCode,
  fullscreenTsCode,
  compositionTemplateCode,
  compositionTsCode,
  accessibilityTemplateCode,
} = dialogCodeSnippets
</script>
