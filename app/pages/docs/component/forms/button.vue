<template>
    <article class="docs-page">
        <DocsPageHero :title="content.hero.title" :description-html="content.hero.descriptionHtml" />

        <DocsSection :id="sections.usage.key" :title="sections.usage.title" :description="sections.usage.description">
            <DocsComponentPlayground :tabs="tabsPlayground" :color="color">
                <template #panel-design>
                    <e-button :color="color" :disabled="buttonProperty.disabled" :rounded="buttonProperty.rounded"
                        :outlined="buttonProperty.outlined" :text="buttonProperty.text" :block="buttonProperty.block"
                        :loading="buttonProperty.loading">
                        {{ buttonTextLabels.preview }}
                    </e-button>
                </template>

                <template #panel-design-code>
                    <CodePanel :code="HTMLCode" />
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
                        <ECheckbox v-model="buttonProperty.text" cols="24" :label="controlLabel('text')"
                            :color="color" />
                        <ECheckbox v-model="buttonProperty.loading" cols="24" :label="controlLabel('loading')"
                            :color="color" />
                    </EForm>
                </template>
            </DocsComponentPlayground>
        </DocsSection>

        <DocsSection :id="sections['size-variants'].key" :title="sections['size-variants'].title"
            :description-html="sections['size-variants'].descriptionHtml">
            <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
                <template #panel-design>
                    <EButton size="x-small"> Extra Small Size</EButton>
                    <EButton size="small"> Small Size</EButton>
                    <EButton size="default"> Default Size</EButton>
                    <EButton size="large"> Large Size</EButton>
                    <EButton size="x-large"> Extra Large Size</EButton>
                </template>

                <template #panel-template>
                    <CodePanel :code="sizeHtmlCode" />
                </template>
            </DocsComponentPlayground>
        </DocsSection>

        <DocsSection :id="sections['visual-variants'].key" :title="sections['visual-variants'].title"
            :description="sections['visual-variants'].description">
            <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
                <template #panel-design>
                    <div class="d-flex flex-column gap-3">
                        <div class="d-flex flex-wrap gap-4">
                            <EButton color="primary">Default</EButton>
                            <EButton color="primary" outlined>Outlined</EButton>
                            <EButton color="primary" text>Text</EButton>
                            <EButton color="primary" tonal>Tonal</EButton>
                        </div>
                        <div class="d-flex flex-wrap gap-4">
                            <EButton color="primary" disabled>Default</EButton>
                            <EButton color="primary" outlined disabled>Outlined</EButton>
                            <EButton color="primary" text disabled>Text</EButton>
                            <EButton color="primary" tonal disabled>Tonal</EButton>
                        </div>
                    </div>
                </template>

                <template #panel-template>
                    <CodePanel :code="visualVariantsHtmlCode" class="full-height" :line-numbers="false" />
                </template>
            </DocsComponentPlayground>
        </DocsSection>

        <DocsSection :id="sections['icon-mode'].key" :title="sections['icon-mode'].title">
            <template #description>
                <span v-html="sections['icon-mode'].descriptionHtml"></span>
                {{ iconLinks.iconGuidePrefix }}
                <e-button :to="withLocalePrefix('/docs/design-system/icons', locale)" text color='primary'>
                    {{ iconLinks.iconsPage }}
                </e-button>
                {{ iconLinks.iconGuideSuffix }}
            </template>
            <DocsComponentPlayground :tabs="tabsDesignTemplateTs" color="primary">
                <template #panel-design>
                    <div class="d-flex flex-column gap-2 items-center">

                        <div class="d-flex gap-2 align-center items-center">
                            <EButton text size="x-small" :icon="$icon.accountBox" />
                            <EButton text size="small" :icon="$icon.heart" />
                            <EButton text size="default" :icon="$icon.dialpad" />
                            <EButton text size="large" :icon="$icon.trash" />
                            <EButton text size="x-large" :icon="$icon.music" />
                        </div>
                        <div class="d-flex gap-6 align-center items-center flex-1">
                            <EButton size="x-small" :icon="$icon.send" />
                            <EButton size="small" :icon="$icon.calendar" />
                            <EButton size="default" :icon="$icon.account" />
                            <EButton size="large" :icon="$icon.email" />
                            <EButton size="x-large" :icon="$icon.fullScreen" />
                        </div>
                        <div class="d-flex gap-10 align-center items-center flex-1">
                            <EButton tonal color="tertiary" :icon="$icon.send" />
                            <EButton tonal color="success" :icon="$icon.calendar" />
                            <EButton tonal color="warning" :icon="$icon.account" />
                            <EButton tonal color="primary" :icon="$icon.email" />
                            <EButton tonal color="secondary" :icon="$icon.fullScreen" />
                        </div>
                    </div>
                </template>

                <template #panel-template>
                    <CodePanel :code="iconHtmlCode" />
                </template>

                <template #panel-ts>
                    <CodePanel :code="iconTsCode" language="ts" />
                </template>
            </DocsComponentPlayground>
        </DocsSection>

        <DocsSection :id="sections['prepend-append-icons'].key" :title="sections['prepend-append-icons'].title"
            :description-html="sections['prepend-append-icons'].descriptionHtml">
            <DocsComponentPlayground :tabs="tabsDesignTemplate">
                <template #panel-design>
                    <EButton :prepend-icon="$icon.delete">{{ buttonTextLabels.delete }}</EButton>
                    <EButton :prepend-icon="$icon.send">{{ buttonTextLabels.send }}</EButton>
                    <EButton :prepend-icon="$icon.alert" color="warning">{{ buttonTextLabels.warning }}
                    </EButton>
                    <EButton :append-icon="$icon.alertBox">{{ buttonTextLabels.stop }}</EButton>

                </template>

                <template #panel-template>
                    <CodePanel :code="appendPrependHtmlCode" class="full-height" :line-numbers="false" />
                </template>
            </DocsComponentPlayground>

        </DocsSection>

        <DocsSection :id="sections['custom-size'].key" :title="sections['custom-size'].title"
            :description-html="sections['custom-size'].descriptionHtml">
            <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
                <template #panel-design>
                    <EButton :width="150">width:150px</EButton>
                    <EButton :width="200">width: 200px</EButton>
                    <EButton :height="60">height: 60px</EButton>
                    <EButton :height="70">height: 70px</EButton>
                </template>

                <template #panel-template>
                    <CodePanel :code="customSizeHtmlCode" class="full-height" :line-numbers="false" />
                </template>
            </DocsComponentPlayground>

        </DocsSection>

        <DocsSection :id="sections['common-use-cases'].key" :title="sections['common-use-cases'].title"
            :description="sections['common-use-cases'].description">
            <DocsComponentPlayground :tabs="tabsDesignTemplateTsCss" color="primary">
                <template #panel-design>
                    <DocsFormsButtonFormPreview />
                </template>

                <template #panel-template>
                    <CodePanel :code="commonUseCasesCardHtmlCode" class="full-height" :line-numbers="false" />
                </template>

                <template #panel-ts>
                    <CodePanel :code="commonUseCasesCardTsCode" language="ts" class="full-height"
                        :line-numbers="false" />
                </template>

                <template #panel-css>
                    <CodePanel :code="commonUseCasesCardCssCode" language="scss" class="full-height"
                        :line-numbers="false" />
                </template>
            </DocsComponentPlayground>
        </DocsSection>

        <DocsSection :id="sections.props.key" :title="sections.props.title" :description="sections.props.description">
            <DocsApiTable :api-reference="localizedButtonApiReference" />
        </DocsSection>
    </article>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { useDocsComponentI18nContent } from '~/composables/useDocsI18nContent'
import { withLocalePrefix } from '~/utils/locale-path'
import { buttonApiReference } from '@/api-reference/forms/button'
import { buttonApiReferenceEs } from '@/api-reference/forms/button-es'
import { createButtonPlaygroundLogic } from './button.logic'

const { locale } = useI18n()

const content = useDocsComponentI18nContent('pages.button.button')

type ButtonSectionKey =
    | 'usage'
    | 'size-variants'
    | 'visual-variants'
    | 'icon-mode'
    | 'prepend-append-icons'
    | 'custom-size'
    | 'common-use-cases'
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
        'visual-variants': getRequiredSection('visual-variants'),
        'icon-mode': getRequiredSection('icon-mode'),
        'prepend-append-icons': getRequiredSection('prepend-append-icons'),
        'custom-size': getRequiredSection('custom-size'),
        'common-use-cases': getRequiredSection('common-use-cases'),
        props: getRequiredSection('props'),
    }
})

const localizedButtonApiReference = computed(() => {
    return locale.value === 'es' ? buttonApiReferenceEs : buttonApiReference
})

useSeoMeta({
    title: computed(() => content.value.seo.title),
    description: computed(() => content.value.seo.description),
})

const {
    color,
    buttonProperty,
    colors,
    tabsPlayground,
    tabsDesignTemplate,
    tabsDesignTemplateTs,
    tabsDesignTemplateTsCss,
    controlLabel,
    iconLinks,
    buttonTextLabels,
    HTMLCode,
    sizeHtmlCode,
    visualVariantsHtmlCode,
    appendPrependHtmlCode,
    customSizeHtmlCode,
    commonUseCasesCardHtmlCode,
    commonUseCasesCardTsCode,
    commonUseCasesCardCssCode,
    iconHtmlCode,
    iconTsCode,
} = createButtonPlaygroundLogic(content)
</script>