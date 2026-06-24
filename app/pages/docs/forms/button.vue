<template>
    <article class="docs-page">
        <DocsPageHero :title="content.hero.title" :description-html="content.hero.descriptionHtml" />

        <DocsSection :id="sections.usage.key" :title="sections.usage.title" :description="sections.usage.description">
            <DocsComponentPlayground :tabs="tabsInlinePlayground" :color="color" mode="inline-example"
                inline-tab-value="playground">
                <template #panel-playground>
                    <div class="full-height d-flex flex-col p-4">
                        <div class="flex-1 d-flex justify-center items-center">
                            <e-button :color="color" :disabled="buttonProperty.disabled"
                                :rounded="buttonProperty.rounded" :outlined="buttonProperty.outlined"
                                :text="buttonProperty.text" :depressed="buttonProperty.depressed"
                                :block="buttonProperty.block" :loading="buttonProperty.loading">
                                {{ buttonTextLabels.preview }}
                            </e-button>
                        </div>
                        <div class="flex-1 d-flex items-end">
                            <div v-text="HTMLCode" v-prism class="flex-1"></div>
                        </div>
                    </div>
                </template>

                <template #form>
                    <EForm>
                        <ESelect v-model="color" cols="24" :items="colors" :color="color"
                            :label="controlLabel('color')" />
                        <ECheckbox v-model="buttonProperty.outlined" cols="24" :label="controlLabel('outlined')"
                            :color="color" />
                        <ECheckbox v-model="buttonProperty.block" cols="24" :label="controlLabel('block')"
                            :color="color" />
                        <ECheckbox v-model="buttonProperty.disabled" cols="24" :label="controlLabel('disabled')"
                            :color="color" />
                        <ECheckbox v-model="buttonProperty.rounded" cols="24" :label="controlLabel('rounded')"
                            :color="color" />
                        <ECheckbox v-model="buttonProperty.loading" cols="24" :label="controlLabel('loading')"
                            :color="color" />
                        <ECheckbox v-model="buttonProperty.depressed" cols="24" :label="controlLabel('depressed')"
                            :color="color" />
                    </EForm>
                </template>
            </DocsComponentPlayground>

        </DocsSection>

        <DocsSection :id="sections['size-variants'].key" :title="sections['size-variants'].title"
            :description-html="sections['size-variants'].descriptionHtml">
            <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
                <template #panel-design>
                    <div class="pa-4 button-container">
                        <e-button size="x-small"> x-small </e-button>
                        <e-button size="small"> small </e-button>
                        <e-button size="default"> default </e-button>
                        <e-button size="large"> large </e-button>
                        <e-button size="x-large"> x-large </e-button>
                    </div>
                </template>

                <template #panel-template>
                    <div v-text="sizeHtmlCode" v-prism class="full-height"></div>
                </template>
            </DocsComponentPlayground>

        </DocsSection>

        <DocsSection :id="sections['icon-mode'].key" :title="sections['icon-mode'].title">
            <template #description>
                <p>
                    <span v-html="sections['icon-mode'].descriptionHtml"></span>
                    {{ iconLinks.iconGuidePrefix }}
                    <e-button :to="withLocalePrefix('/docs/design-system/icons', locale)" text color='primary'>
                        {{ iconLinks.iconsPage }}
                    </e-button>
                    {{ iconLinks.iconGuideSuffix }}
                </p>
            </template>
            <DocsComponentPlayground :tabs="tabsDesignTemplateTs" color="primary">
                <template #panel-design>
                    <div class="pa-4 button-container">
                        <e-button size="x-small" :icon="$icon.send" />
                        <e-button size="small" :icon="$icon.send" />
                        <e-button size="default" :icon="$icon.send" />
                        <e-button size="large" :icon="$icon.send" />
                        <e-button size="x-large" :icon="$icon.send" />
                        <e-button text size="x-small" :icon="$icon.music" />
                        <e-button text size="small" :icon="$icon.music" />
                        <e-button text size="default" :icon="$icon.music" />
                        <e-button text size="large" :icon="$icon.music" />
                        <e-button text size="x-large" :icon="$icon.music" />
                    </div>
                </template>

                <template #panel-template>
                    <div v-text="iconHtmlCode" v-prism class="full-height"></div>
                </template>

                <template #panel-ts>
                    <div v-text="iconTsCode" v-prism="{ class: 'language-ts' }" class="full-height"></div>
                </template>
            </DocsComponentPlayground>

        </DocsSection>

        <DocsSection :id="sections['prepend-append-icons'].key" :title="sections['prepend-append-icons'].title"
            :description-html="sections['prepend-append-icons'].descriptionHtml">
            <DocsComponentPlayground :tabs="tabsDesignTemplate">
                <template #panel-design>
                    <div class="pa-4 button-container">
                        <e-button :prepend-icon="$icon.delete">{{ buttonTextLabels.delete }}</e-button>
                        <e-button :prepend-icon="$icon.send">{{ buttonTextLabels.send }}</e-button>
                        <e-button :prepend-icon="$icon.alert" color="warning">{{ buttonTextLabels.warning }}</e-button>
                        <e-button :append-icon="$icon.alertBox">{{ buttonTextLabels.stop }}</e-button>
                    </div>
                </template>

                <template #panel-template>
                    <div v-text="appendPrependHtmlCode" v-prism class="full-height"></div>
                </template>
            </DocsComponentPlayground>

        </DocsSection>

        <DocsSection :id="sections['custom-size'].key" :title="sections['custom-size'].title"
            :description-html="sections['custom-size'].descriptionHtml">
            <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
                <template #panel-design>
                    <div class="pa-4">
                        <e-button class="m-4" :width="150">width:150px</e-button>
                        <e-button class="m-4" :width="200">width: 200px</e-button>
                        <e-button class="m-4" :height="60">height: 60px</e-button>
                        <e-button class="m-4" :height="70">height: 70px</e-button>
                    </div>
                </template>

                <template #panel-template>
                    <div v-text="customSizeHtmlCode" v-prism class="full-height"></div>
                </template>
            </DocsComponentPlayground>

        </DocsSection>

        <DocsSection :id="sections.states.key" :title="sections.states.title"
            :description="sections.states.description">
            <div v-text="statesCode" v-prism class="full-height app-responsive-content"></div>
        </DocsSection>

        <DocsSection :id="sections.accessibility.key" :title="sections.accessibility.title"
            :description="sections.accessibility.description">
            <div v-text="accessibilityCode" v-prism class="full-height app-responsive-content"></div>
        </DocsSection>

        <DocsSection :id="sections.integration.key" :title="sections.integration.title"
            :description="sections.integration.description">
            <div v-text="integrationCode" v-prism class="full-height app-responsive-content"></div>
        </DocsSection>

        <DocsSection :id="sections['do-dont'].key" :title="sections['do-dont'].title"
            :description="sections['do-dont'].description">
            <div v-text="doCode" v-prism class="full-height mb-4 app-responsive-content"></div>
            <div v-text="dontCode" v-prism class="full-height app-responsive-content"></div>
        </DocsSection>

        <DocsSection :id="sections['composition-patterns'].key" :title="sections['composition-patterns'].title"
            :description="sections['composition-patterns'].description">
            <div v-text="compositionCode" v-prism class="full-height app-responsive-content"></div>
        </DocsSection>

        <DocsSection :id="sections.faq.key" :title="sections.faq.title" :description="sections.faq.description">
            <DocsFaqPanel :items="faqItems" />
        </DocsSection>

        <DocsSection :id="sections.props.key" :title="sections.props.title" :description="sections.props.description">
            <DocsApiTable :api-reference="buttonApiReference" />

        </DocsSection>
    </article>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { getDocsComponentPageContent } from '~/content/docs'
import { withLocalePrefix } from '~/utils/locale-path'
import { buildSfcSnippet } from '~/utils/snippet-sfc'
import { buttonApiReference } from '@/api-reference/forms/button'

const { locale } = useI18n()

const content = computed(() => {
    const resolvedContent = getDocsComponentPageContent('/docs/forms/button', locale.value)

    if (!resolvedContent) {
        throw createError({ statusCode: 404, statusMessage: 'Button documentation content not found' })
    }

    return resolvedContent
})

type ButtonSectionKey =
    | 'usage'
    | 'size-variants'
    | 'icon-mode'
    | 'prepend-append-icons'
    | 'custom-size'
    | 'states'
    | 'accessibility'
    | 'integration'
    | 'do-dont'
    | 'composition-patterns'
    | 'faq'
    | 'props'

const getRequiredSection = (key: ButtonSectionKey) => {
    const section = content.value.sections.find((value) => value.key === key)

    if (!section) {
        throw createError({
            statusCode: 500,
            statusMessage: `Button documentation section missing: ${key}`,
        })
    }

    return section
}

const sections = computed(() => {
    return {
        usage: getRequiredSection('usage'),
        'size-variants': getRequiredSection('size-variants'),
        'icon-mode': getRequiredSection('icon-mode'),
        'prepend-append-icons': getRequiredSection('prepend-append-icons'),
        'custom-size': getRequiredSection('custom-size'),
        states: getRequiredSection('states'),
        accessibility: getRequiredSection('accessibility'),
        integration: getRequiredSection('integration'),
        'do-dont': getRequiredSection('do-dont'),
        'composition-patterns': getRequiredSection('composition-patterns'),
        faq: getRequiredSection('faq'),
        props: getRequiredSection('props'),
    }
})

const faqItems = computed(() => {
    return sections.value.faq.faqItems ?? []
})

useSeoMeta({
    title: computed(() => content.value.seo.title),
    description: computed(() => content.value.seo.description),
})

const color = ref('primary')

const buttonProperty = ref({
    outlined: false,
    loading: false,
    disabled: false,
    depressed: false,
    block: false,
    rounded: false,
    text: false,
})
const colors = ['primary', 'secondary', 'blue', 'warning', 'purple']

const tabsInlinePlayground = computed(() => [
    {
        value: 'playground',
        label: content.value.labels.tabs.example,
    },
])

const tabsDesignTemplate = computed(() => [
    {
        value: 'design',
        label: content.value.labels.tabs.design,
    },
    {
        value: 'template',
        label: content.value.labels.tabs.template,
    },
])

const tabsDesignTemplateTs = computed(() => [
    {
        value: 'design',
        label: content.value.labels.tabs.design,
    },
    {
        value: 'template',
        label: content.value.labels.tabs.template,
    },
    {
        value: 'ts',
        label: content.value.labels.tabs.ts,
    },
])

const controlLabel = (key: string): string => {
    return content.value.labels.controls.find((item) => item.key === key)?.label ?? key
}

const iconLinks = computed(() => {
    return {
        iconsPage: content.value.labels.links?.iconsPage ?? 'Icons',
        iconGuidePrefix: content.value.labels.links?.iconGuidePrefix ?? '',
        iconGuideSuffix: content.value.labels.links?.iconGuideSuffix ?? '',
    }
})

const buttonTextLabels = computed(() => {
    return {
        preview: content.value.labels.buttonText?.preview ?? 'Button',
        delete: content.value.labels.buttonText?.delete ?? 'Delete',
        send: content.value.labels.buttonText?.send ?? 'Send',
        warning: content.value.labels.buttonText?.warning ?? 'warning',
        stop: content.value.labels.buttonText?.stop ?? 'Stop',
    }
})


const HTMLCode = computed(() => `<template>
  <e-button \n    color="${color.value}"${buttonProperty.value.depressed ?
        '\n    depressed' : ''}${buttonProperty.value.loading ? '\n    loading' : ''}${buttonProperty.value.rounded ?
            '\n    rounded' : ''}${buttonProperty.value.disabled ? '\n    disabled' : ''}${buttonProperty.value.text ?
                '\n    text' : ''}${buttonProperty.value.outlined ? '\n    outlined' : ''}${buttonProperty.value.block ? '\n    block' : ''}>
    button
  </e-button>
</template>
`)

const sizeHtmlCode = `<template>
  <e-button x-small> x-small </e-button>
  <e-button small> small </e-button>
  <e-button> default </e-button>
  <e-button large> large </e-button>
  <e-button x-large> x-large </e-button>
</template>`

const appendPrependHtmlCode = `<template>
  <e-button prepend-icon="delete">Delete</e-button>
  <e-button prepend-icon="send">Send</e-button>
  <e-button prepend-icon="alert" color="warning">warning</e-button>
  <e-button append-icon="alertBox">Stop</e-button>
</template>`

const customSizeHtmlCode = `<template>
  <e-button width="150">width:150px</e-button>
    <e-button width="200">width: 200px</e-button>
  <e-button height="60">height: 60px</e-button>
  <e-button height="70">height: 70px</e-button>
</template>`

const iconHtmlCode = `<template>
  <e-button x-small :icon="iconSend" />
  <e-button small :icon="iconSend" />
  <e-button :icon="iconSend" />
  <e-button large :icon="iconSend" />
  <e-button x-large :icon="iconSend" />
  <e-button text x-small icon="music" />
  <e-button text small icon="music" />
  <e-button text icon="music" />
  <e-button text large icon="music" />
  <e-button text x-large icon="music" />
</template>`
const iconTsCode = `import { IconPath } from "drocket";
const iconSend: IconPath = {
  title: "send",
  d: "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",
};`

const statesCode = `<template>
    <e-button :loading="saving" :disabled="saving" @click="save">
        Save changes
    </e-button>

    <e-button disabled>
        Disabled action
    </e-button>
</template>`

const accessibilityCode = `<template>
    <e-button :icon="iconSend" aria-label="Send message" />

    <e-button color="primary">
        Publish
    </e-button>
</template>`

const integrationCode = buildSfcSnippet({
    template: `  <e-button :to="'/docs/forms/text-field'" text>
    Go to TextField docs
  </e-button>

  <e-button :loading="submitting" :disabled="submitting" @click="submit">
    Submit form
  </e-button>`,
    scriptSetup: `const submitting = ref(false)

const submit = async () => {
  if (submitting.value) return
  submitting.value = true
  try {
    await saveForm()
  } finally {
    submitting.value = false
  }
}`,
})

const doCode = `<template>
    <e-button color="primary">Save changes</e-button>
    <e-button text>Cancel</e-button>
    <e-button :loading="saving" :disabled="saving">Publish</e-button>
</template>`

const dontCode = `<template>
    <e-button color="primary">Click here</e-button>
    <e-button color="primary">Also primary</e-button>
    <e-button :icon="iconDelete" />
</template>

<!-- Avoid ambiguous labels, competing primary actions, and icon-only buttons without aria-label -->`

const compositionCode = `<template>
    <div class="d-flex justify-end ga-2">
        <e-button text>Cancel</e-button>
        <e-button color="primary">Save draft</e-button>
        <e-button color="success">Publish</e-button>
    </div>
</template>`
</script>