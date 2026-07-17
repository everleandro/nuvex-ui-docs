<template>
    <ECard elevation="xs" class="mb-4 docs-page__api-table">
        <div class="responsive-table">
            <table>
                <thead>
                    <tr>
                        <th class="api-table__head type-subtitle">{{ t('common.docs.apiTable.property') }}</th>
                        <th class="api-table__head type-subtitle">{{ t('common.docs.apiTable.type') }}</th>
                        <th class="api-table__head type-subtitle">{{ t('common.docs.apiTable.default') }}</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="item in props.apiReference" :key="item.property">
                        <tr class="api-table__row api-table__row--property">
                            <td class="api-table__property type-code">{{ item.property }}</td>
                            <td class="api-table__token type-code" :class="item.type.class" v-html="item.type.value"></td>
                            <td class="api-table__token type-code" :class="item.default.class">{{ item.default.value }}</td>
                        </tr>
                        <tr class="api-table__row" v-if="item.description">
                            <td class="api-table__description-cell" colspan="3">
                                <p class="api-table__description type-body">{{ item.description }}</p>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </ECard>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type { ApiPropReferenceRow } from '~/api-reference/schema'

interface Props {
    apiReference: ApiPropReferenceRow[]
}

const props = defineProps<Props>()
const { t } = useI18n()
</script>
<style lang="scss" scoped>
.docs-page__api-table {
    --card-padding: calc(var(--e-space-base, 4px) * 4) 0;
    border: 1px solid var(--e-color-border, rgba(0, 0, 0, 0.12));

    div.responsive-table {
        overflow-x: auto;
        width: 100%
    }

    table {
        border-collapse: collapse;
        min-width: -moz-min-content;
        min-width: min-content;
        table-layout: auto;
        text-indent: 0;
        width: 100%;
        --boolean-color: #905;
        --string-color: #690;
        --undefined-color: #07a
    }

    .api-table__head {
        font-weight: 500;
    }

    .api-table__property {
        color: var(--e-palette-green);
    }

    .api-table__token {
        white-space: nowrap;
    }

    .api-table__description {
        margin: 0;
    }

    .api-table__row--property {
        background: color-mix(in srgb, var(--e-color-surface-canvas, #fff) 92%, var(--e-color-border, #000) 8%);
    }

    table .undefined {
        color: var(--undefined-color)
    }

    table .string {
        color: var(--string-color)
    }

    table .boolean,
    table .object {
        color: var(--undefined-color)
    }

    table th {
        --space-base-4:  calc(var(--e-space-base, 4px) * 4);
        padding: 0 var(--space-base-4) var(--space-base-4) var(--space-base-4);
        text-align: start;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none
    }

    table td {
        border-top: thin solid var(--e-color-border, rgba(0, 0, 0, 0.12));
        padding: calc(var(--e-space-base, 4px) * 3) calc(var(--e-space-base, 4px) * 4);
    }
}
</style>