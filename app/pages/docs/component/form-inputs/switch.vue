<template>
  <article class="docs-page switch-page">
    <DocsPageHero :title="content.hero.title" :description-html="content.hero.descriptionHtml" />

    <DocsSection :id="sections.usage.key" :title="sections.usage.title" :description="sections.usage.description">
      <DocsComponentPlayground :tabs="tabsPlayground" :color="color">
        <template #panel-design>
          <ESwitch v-model="switchValue" :label="pageText.usageLabel" :detail="pageText.usageDetail" :color="color"
            :outlined="switchProperty.outlined" :disabled="switchProperty.disabled" :readonly="switchProperty.readonly"
            :loading="switchProperty.loading" :retain-color="switchProperty.retainColor" />
        </template>

        <template #panel-design-code>
          <CodePanel :code="usageTemplateCode" />
        </template>

        <template #form>
          <EForm>
            <ESelect v-model="color" cols="24" :items="colors" :color="color" :label="controlLabel('color')" />
            <ECheckbox v-model="switchProperty.outlined" cols="24" :label="controlLabel('outlined')" :color="color" />
            <ECheckbox v-model="switchProperty.disabled" cols="24" :label="controlLabel('disabled')" :color="color" />
            <ECheckbox v-model="switchProperty.readonly" cols="24" :label="controlLabel('readonly')" :color="color" />
            <ECheckbox v-model="switchProperty.loading" cols="24" :label="controlLabel('loading')" :color="color" />
            <ECheckbox v-model="switchProperty.retainColor" cols="24" :label="controlLabel('retainColor')"
              :color="color" />
          </EForm>
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['visual-variants'].key" :title="sections['visual-variants'].title"
      :description="sections['visual-variants'].description">
      <DocsComponentPlayground :tabs="tabsDesignTemplate" :color="color">
        <template #panel-design>
          <EForm>
            <ESwitch v-model="visualStates.default" lg="6" :label="pageText.visualStateLabels.default" :color="color" />
            <ESwitch v-model="visualStates.outlined" lg="6" :label="pageText.visualStateLabels.outlined" outlined
              :color="color" />
            <ESwitch v-model="visualStates.tonal" lg="6" :label="pageText.visualStateLabels.tonal" tonal
              :color="color" />
            <ESwitch v-model="visualStates.retainColor" lg="6" :label="pageText.visualStateLabels.retainColor"
              retain-color :color="color" />
            <ESwitch v-model="visualStates.loading" lg="6" :label="pageText.visualStateLabels.loading" loading
              :color="color" />
            <ESwitch v-model="visualStates.disabled" lg="6" :label="pageText.visualStateLabels.disabled" disabled
              :color="color" />
            <ESwitch v-model="visualStates.readonly" lg="6" :label="pageText.visualStateLabels.readonly" readonly
              outlined :color="color" />
          </EForm>
        </template>

        <template #panel-template>
          <CodePanel :code="switchCodeSnippets.visualVariantsTemplateCode" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['custom-values'].key" :title="sections['custom-values'].title"
      :description="sections['custom-values'].description">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" :color="color">
        <template #panel-design>
          <EForm>
            <ESwitch v-model="deploymentStatus" lg="8" :label="pageText.customValuesLabel" true-value="published"
              false-value="draft" :detail="pageText.customValuesDetail" :color="color" />
            <EFormColumn lg="4">
              <ECard elevation="sm" :subtitle="pageText.currentModelValue">
                <ECard :color="deploymentStatus === 'published' ? 'success' : 'warning'" tonal>
                  {{ deploymentStatus }}
                </ECard>
              </ECard>
            </EFormColumn>
          </EForm>
        </template>

        <template #panel-template>
          <CodePanel :code="switchCodeSnippets.customValuesTemplateCode" />
        </template>

        <template #panel-ts>
          <CodePanel :code="switchCodeSnippets.customValuesTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections['loading-and-async'].key" :title="sections['loading-and-async'].title"
      :description="sections['loading-and-async'].description">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" :color="color">
        <template #panel-design>
          <ECard elevation="sm" style="width: 420px;">
            <ECard :color="asyncFeedbackColor" tonal>{{ asyncFeedback }}</ECard>
            <ESwitch v-model="asyncState.value" :label="pageText.asyncLabel" :detail="pageText.asyncDetail"
              :loading="asyncState.loading" :color="color" @update:model-value="handleAsyncUpdate" />
            <EButton :disabled="asyncState.loading" :color="color" block class="mt-4" @click="resetAsyncDemo">
              {{ pageText.asyncButtonLabel }}
            </EButton>
          </ECard>
        </template>

        <template #panel-template>
          <CodePanel :code="switchCodeSnippets.asyncTemplateCode" />
        </template>

        <template #panel-ts>
          <CodePanel :code="switchCodeSnippets.asyncTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.slots.key" :title="sections.slots.title"
      :description-html="sections.slots.descriptionHtml">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" :color="color">
        <template #panel-design>
          <div class="d-flex flex-column gap-3">
            <ESwitch v-model="slotValue" :color="color">
              <template #label>
                {{ pageText.slotLead }}
                <a href="#" @click.prevent="termsDialogOpen = true" class="primary--text">{{ pageText.slotLinkLabel
                  }}</a>
              </template>
            </ESwitch>

            <EDialog v-model="termsDialogOpen" max-width="420">
              <ECard class="pa-4 d-flex flex-column gap-3">
                <div>
                  <div class="type-subtitle text-heading">{{ pageText.dialogTitle }}</div>
                  <p class="type-body mt-2 mb-0">{{ pageText.dialogBody }}</p>
                </div>

                <div class="d-flex justify-end">
                  <EButton color="primary" @click="termsDialogOpen = false">
                    {{ pageText.dialogClose }}
                  </EButton>
                </div>
              </ECard>
            </EDialog>
          </div>
        </template>

        <template #panel-template>
          <CodePanel :code="switchCodeSnippets.slotsTemplateCode" />
        </template>

        <template #panel-ts>
          <CodePanel :code="switchCodeSnippets.slotsTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.validation.key" :title="sections.validation.title"
      :description="sections.validation.description">
      <DocsComponentPlayground :tabs="tabsDesignTemplateTs" :color="color">
        <template #panel-design>
          <DocsFormsSwitchValidationPreview :color="color" />
        </template>

        <template #panel-template>
          <CodePanel :code="switchCodeSnippets.validationTemplateCode" />
        </template>

        <template #panel-ts>
          <CodePanel :code="switchCodeSnippets.validationTsCode" language="ts" />
        </template>
      </DocsComponentPlayground>
    </DocsSection>

    <DocsSection :id="sections.props.key" :title="sections.props.title" :description="sections.props.description">
      <DocsApiTable :api-reference="localizedSwitchApiReference" />
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { switchApiReference } from '~/api-reference/forms/switch'
import { switchApiReferenceEs } from '~/api-reference/forms/switch-es'
import { switchCodeSnippets } from './switch.snippets'
import { buildTemplateElementSnippet } from '~/utils/snippet-element'

type SwitchValue = boolean | string | number

const { locale } = useI18n()

const content = useDocsComponentI18nContent('pages.input.switch')

type SwitchSectionKey =
  | 'usage'
  | 'visual-variants'
  | 'custom-values'
  | 'loading-and-async'
  | 'slots'
  | 'validation'
  | 'props'

const getRequiredSection = (key: SwitchSectionKey) => {
  const section = content.value.sections.find((value) => value.key === key)

  if (!section) {
    throw createError({
      statusCode: 500,
      statusMessage: `Switch documentation section missing: ${key}`,
    })
  }

  return section
}

const sections = computed(() => {
  return {
    usage: getRequiredSection('usage'),
    'visual-variants': getRequiredSection('visual-variants'),
    'custom-values': getRequiredSection('custom-values'),
    'loading-and-async': getRequiredSection('loading-and-async'),
    slots: getRequiredSection('slots'),
    validation: getRequiredSection('validation'),
    props: getRequiredSection('props'),
  }
})

const localizedSwitchApiReference = computed(() => {
  return locale.value === 'es' ? switchApiReferenceEs : switchApiReference
})

useSeoMeta({
  title: computed(() => content.value.seo.title),
  description: computed(() => content.value.seo.description),
})

const color = ref('primary')
const colors = ['primary', 'secondary', 'blue', 'warning', 'purple']

const pageText = computed(() => {
  return content.value.labels.switchText ?? {
  }
})

const switchProperty = ref({
  outlined: false,
  disabled: false,
  readonly: false,
  loading: false,
  retainColor: true,
})

const switchValue = ref<SwitchValue>(false)

const visualStates = ref({
  default: false,
  outlined: true,
  tonal: true,
  retainColor: true,
  loading: true,
  disabled: false,
  readonly: true,
})

const deploymentStatus = ref<'published' | 'draft'>('draft')

const asyncState = ref({
  value: true,
  loading: false,
  status: 'idle' as 'idle' | 'saving' | 'success',
})

const handleAsyncUpdate = async (value: SwitchValue) => {
  asyncState.value.value = Boolean(value)
  asyncState.value.loading = true
  asyncState.value.status = 'saving'

  try {
    await new Promise((resolve) => setTimeout(resolve, 900))
    asyncState.value.status = 'success'
  } finally {
    asyncState.value.loading = false
  }
}

const resetAsyncDemo = () => {
  asyncState.value = {
    value: true,
    loading: false,
    status: 'idle',
  }
}

const asyncFeedback = computed(() => {
  if (asyncState.value.status === 'saving') return pageText.value.asyncSavingFeedback
  if (asyncState.value.status === 'success') return pageText.value.asyncSuccessFeedback
  return pageText.value.asyncIdleFeedback
})

const asyncFeedbackColor = computed(() => {
  if (asyncState.value.status === 'saving') return 'warning'
  if (asyncState.value.status === 'success') return 'success'
  return 'secondary'
})

const slotValue = ref(false)
const termsDialogOpen = ref(false)

const { tabsPlayground, tabsDesignTemplate, tabsDesignTemplateTs } = useDocsPlaygroundTabSets()

const controlLabel = (key: string): string => {
  return content.value.labels.controls.find((item) => item.key === key)?.label ?? key
}

const usageTemplateCode = computed(() => {
  return buildTemplateElementSnippet({
    tag: 'e-switch',
    attrs: [
      'v-model="releaseGate"',
      `label="${pageText.value.usageLabel}"`,
      `detail="${pageText.value.usageDetail}"`,
      `color="${color.value}"`,
      switchProperty.value.outlined && 'outlined',
      switchProperty.value.disabled && 'disabled',
      switchProperty.value.readonly && 'readonly',
      switchProperty.value.loading && 'loading',
      switchProperty.value.retainColor && 'retain-color',
    ],
  })
})
</script>
