<template>
    <ECard elevation="xs" class="mb-4 docs-page__api-table">
        <div class="responsive-table">
            <table>
                <thead>
                    <tr>
                        <th>Property</th>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Default</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in props.apiReference" :key="item.property">
                        <td>{{ item.property }}</td>
                        <td v-html="item.description"> </td>
                        <td :class="item.type.class" v-html="item.type.value"></td>
                        <td :class="item.default.class">{{ item.default.value }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </ECard>
</template>
<script setup lang="ts">
import type { ApiPropReferenceRow } from '~/api-reference/schema'

interface Props {
    apiReference: ApiPropReferenceRow[]
}

const props = defineProps<Props>()
</script>
<style lang="scss" scoped>
.docs-page__api-table {
    --card-padding: calc(var(--e-space-base, 4px) * 4) 0;

    code {
        font-size: 16px
    }

    div.responsive-table {
        overflow-x: auto;
        width: 100%
    }

    .text-h3 code {
        font-size: 20px
    }

    table {
        border-collapse: collapse;
        letter-spacing: -.5px;
        min-width: -moz-min-content;
        min-width: min-content;
        table-layout: auto;
        text-indent: 0;
        width: 100%;
        --boolean-color: #905;
        --string-color: #690;
        --undefined-color: #07a
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
        font-weight: 500;
        padding: 16px;
        text-align: start;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none
    }

    table td {
        border-top: thin solid var(--e-color-border, rgba(0, 0, 0, 0.12));
        font-family: monospace;
        font-size: 16px;
        padding: 12px 16px
    }

    table td:first-child {
        color: var(--e-palette-green);
    }
}
</style>