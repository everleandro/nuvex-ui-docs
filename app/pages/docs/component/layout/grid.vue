<template>
    <article class="docs-page docs-page__grid">
        <DocsPageHero :title="content.hero.title" :description-html="content.hero.descriptionHtml" />

        <DocsSection :id="sections.usage.key" :title="sections.usage.title"
            :description-html="sections.usage.descriptionHtml">
            <DocsComponentPlayground :tabs="tabsPlayground" color="primary">
                <template #panel-design>
                    <ERow class="full-width" :dense="rowProperties.dense" :auto="rowProperties.auto"
                        :equal="rowProperties.equal" :no-gutters="rowProperties.noGutters" :gap="rowProperties.gap">
                        <ECol v-for="item in previewColumns" :key="item.title"
                            :cols="rowProperties.auto ? undefined : rowProperties.cols">
                            <ECard class="full-height full-width" :title="item.title" elevation="md" />
                        </ECol>
                    </ERow>
                </template>
                <template #panel-design-code>
                    <CodePanel :code="usageTemplateCode" />
                </template>
                <template #form>
                    <EForm>
                        <EFormColumn>
                            <span class="type-lead text-heading" v-html="controlLabel('colProperties')"></span>
                        </EFormColumn>
                        <ESelect v-model="rowProperties.cols" :disabled="rowProperties.auto || rowProperties.equal"
                            cols="24" :items="columnSpans" :label="controlLabel('cols')" clearable />
                        <EFormColumn>
                            <span class="type-lead text-heading" v-html="controlLabel('rowProperties')"></span>
                        </EFormColumn>
                        <ESelect v-model="rowProperties.gap" cols="24" :items="gaps" :label="controlLabel('gap')"
                            clearable />
                        <ECheckbox v-model="rowProperties.dense" cols="24" :label="controlLabel('dense')"
                            color="primary" />
                        <ECheckbox v-model="rowProperties.auto" cols="24" :label="controlLabel('auto')"
                            color="primary" />
                        <ECheckbox v-model="rowProperties.equal" cols="24" :label="controlLabel('equal')"
                            color="primary" />
                        <ECheckbox v-model="rowProperties.noGutters" cols="24" :label="controlLabel('noGutters')"
                            color="primary" />
                    </EForm>
                </template>
            </DocsComponentPlayground>
        </DocsSection>

        <DocsSection :id="sections['responsive-breakpoints'].key" :title="sections['responsive-breakpoints'].title"
            :description-html="sections['responsive-breakpoints'].descriptionHtml">
            <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
                <template #panel-design>
                    <ERow class="full-width" gap="md">
                        <ECol cols="12" md="8" lg="9">
                            <ECard elevation="sm" :title="gridLabel('responsiveMainTitle')"
                                :description="gridLabel('responsiveMainDescription')" />
                        </ECol>
                        <ECol cols="12" md="4" lg="3">
                            <ECard outlined :title="gridLabel('responsiveAsideTitle')"
                                :description="gridLabel('responsiveAsideDescription')" />
                        </ECol>
                    </ERow>
                </template>
                <template #panel-template>
                    <CodePanel :code="gridCodeSnippets.responsiveBreakpointsTemplateCode" />
                </template>
            </DocsComponentPlayground>
        </DocsSection>

        <DocsSection :id="sections['nested-layouts'].key" :title="sections['nested-layouts'].title"
            :description-html="sections['nested-layouts'].descriptionHtml">
            <DocsComponentPlayground :tabs="tabsDesignTemplate" color="primary">
                <template #panel-design>
                    <ERow class="full-width" gap="md">
                        <ECol cols="12" lg="8">
                            <ECard class="mb-3" elevation="sm" :title="gridLabel('nestedPrimaryTitle')" />
                            <ERow gap="sm">
                                <ECol cols="12" md="6">
                                    <ECard outlined :title="gridLabel('nestedA')" />
                                </ECol>
                                <ECol cols="12" md="6">
                                    <ECard outlined :title="gridLabel('nestedB')" />
                                </ECol>
                            </ERow>
                        </ECol>
                        <ECol cols="12" lg="4">
                            <ECard outlined class="full-height" :title="gridLabel('nestedRailTitle')"
                                :description="gridLabel('nestedRailDescription')" />
                        </ECol>
                    </ERow>
                </template>
                <template #panel-template>
                    <CodePanel :code="gridCodeSnippets.nestedLayoutTemplateCode" />
                </template>
            </DocsComponentPlayground>
        </DocsSection>

        <DocsSection :id="sections.props.key" :title="sections.props.title" :description="sections.props.description">
            <h3 class="type-h5 text-heading mb-3">{{ gridLabel('apiRowTitle') }}</h3>
            <DocsApiTable :api-reference="localizedGridRowApiReference" />
            <h3 class="type-h5 text-heading mt-6 mb-3">{{ gridLabel('apiColTitle') }}</h3>
            <DocsApiTable :api-reference="localizedGridColApiReference" />
            <h3 class="type-h5 text-heading mt-6 mb-2">{{ gridLabel('apiSlotsTitle') }}</h3>
            <p class="type-body">{{ gridLabel('apiSlotsBody') }}</p>
        </DocsSection>
    </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { gridRowApiReference, gridColApiReference } from '~/api-reference/layout/grid'
import { gridRowApiReferenceEs, gridColApiReferenceEs } from '~/api-reference/layout/grid-es'
import { buildTemplateElementSnippet } from '~/utils/snippet-element'
import { gridCodeSnippets } from './grid.snippets'

type GridSectionKey = 'usage' | 'responsive-breakpoints' | 'row-modes' | 'nested-layouts' | 'props'

const { locale } = useI18n()
const content = useDocsComponentI18nContent('pages.grid.grid')

const getRequiredSection = (key: GridSectionKey) => {
    const section = content.value.sections.find((value) => value.key === key)
    if (!section) throw createError({ statusCode: 500, statusMessage: `Grid documentation section missing: ${key}` })
    return section
}

const sections = computed(() => ({
    usage: getRequiredSection('usage'),
    'responsive-breakpoints': getRequiredSection('responsive-breakpoints'),
    'row-modes': getRequiredSection('row-modes'),
    'nested-layouts': getRequiredSection('nested-layouts'),
    props: getRequiredSection('props'),
}))

useSeoMeta({ title: computed(() => content.value.seo.title), description: computed(() => content.value.seo.description) })

const gaps = ['none', 'xs', 'sm', 'md', 'lg', '8', '16', '24']
const columnSpans = ['12', '6', '4', '3', 'auto']

const rowProperties = ref({
    gap: 'md',
    cols: '12',
    dense: false,
    auto: false,
    equal: false,
    noGutters: false,
})
watch(() => rowProperties.value.auto, (newValue) => {
    if (newValue) {
        rowProperties.value.equal = false;
    }
}, { deep: true })
watch(() => rowProperties.value.equal, (newValue) => {
    if (newValue) {
        rowProperties.value.auto = false;
    }
}, { deep: true })

const previewColumns = computed(() => ([
    { title: gridLabel('columnA'), description: gridLabel('columnDescription') },
    { title: gridLabel('columnB'), description: gridLabel('columnDescription') },
    { title: gridLabel('columnC'), description: gridLabel('columnDescription') },
]))

const { tabsPlayground, tabsDesignTemplate } = useDocsPlaygroundTabSets()
const controlLabel = (key: string): string => content.value.labels.controls.find((item) => item.key === key)?.label ?? key
const gridLabels = computed(() => {
    const labels = content.value.labels.gridText
    return labels && !Array.isArray(labels) ? labels : {}
})
const gridLabel = (key: string): string => String(gridLabels.value[key] ?? key)

const localizedGridRowApiReference = computed(() => locale.value === 'es' ? gridRowApiReferenceEs : gridRowApiReference)
const localizedGridColApiReference = computed(() => locale.value === 'es' ? gridColApiReferenceEs : gridColApiReference)

const usageTemplateCode = computed(() => {
    const attrs = [
        rowProperties.value.gap && `gap="${rowProperties.value.gap}"`,
        rowProperties.value.dense && 'dense',
        rowProperties.value.auto && 'auto',
        rowProperties.value.equal && 'equal',
        rowProperties.value.noGutters && 'no-gutters',
    ]

    return buildTemplateElementSnippet({
        tag: 'ERow',
        attrs,
        contentLines: [
            `<ECol cols="${rowProperties.value.cols}" md="4">`,
            `  <ECard title="${gridLabel('columnA')}" />`,
            '</ECol>',
            `<ECol cols="${rowProperties.value.cols}" md="4">`,
            `  <ECard title="${gridLabel('columnB')}" />`,
            '</ECol>',
            `<ECol cols="${rowProperties.value.cols}" md="4">`,
            `  <ECard title="${gridLabel('columnC')}" />`,
            '</ECol>',
        ],
    })
})
</script>

<style lang="scss">
.docs-page__grid {
    .e-card {
        border-radius: var(--e-border-radius-root);
    }
}
</style>
