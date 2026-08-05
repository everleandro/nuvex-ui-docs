<template>
    <EApp>
        <EDrawer v-model="drawerProperties.open" dev-mode nav :right="drawerProperties.side === 'right'"
            :width="drawerProperties.width" :appearance="drawerProperties.appearance"
            :floating="drawerProperties.floating" :elevation="drawerProperties.elevation"
            :absolute="drawerProperties.absolute">
            <template #prepend>
                <EListItem :prepend-avatar="getAvatarByIndex(3)?.avatarSrc" title="Ever Santiesteban"
                    subtitle="elsantiesteban@gmail.com" />
            </template>
            <EDivider />

            <EList inset active-color="pink">
                <EListItem :prepend-icon="$icon.home" active="true" to="#" :title="drawerText('home')" />
                <EListItem :prepend-icon="$icon.account" :title="drawerText('profile')" />
                <EListItem :prepend-icon="$icon.cog" :title="drawerText('settings')" />
            </EList>

            <template #append>
                <div class="p-3">
                    <EButton color="pink" block @click="drawerProperties.open = !drawerProperties.open">{{
                        controlLabel('toggle') }}</EButton>
                </div>
            </template>
        </EDrawer>
        <EMain>
            <EContainer class="d-flex justify-center">
                <ECard elevation="sm" style="max-width: 440px;">
                    <EForm label-min-width="100" text-align="right">
                        <ERadioGroup v-model="drawerProperties.side" cols="24" row :label="controlLabel('side')">
                            <ERadio :label="controlLabel('left')" model-value="left" />
                            <ERadio :label="controlLabel('right')" model-value="right" />
                        </ERadioGroup>
                        <ERadioGroup v-model="drawerProperties.appearance" cols="24" row
                            :label="controlLabel('appearance')">
                            <ERadio :label="controlLabel('default')" model-value="default" />
                            <ERadio :label="controlLabel('transparent')" model-value="transparent" />
                        </ERadioGroup>
                        <ESelect v-model="drawerProperties.width" cols="24" :items="widths"
                            :label="controlLabel('width')" />
                        <ESelect v-model="drawerProperties.elevation" cols="24" :items="elevations"
                            :label="controlLabel('elevation')" :disabled="!drawerProperties.floating" />
                        <ESwitch v-model="drawerProperties.absolute" cols="24" :label="controlLabel('absolute')" />
                        <ESwitch v-model="drawerProperties.floating" :disabled="drawerProperties.absolute" cols="24"
                            :label="controlLabel('floating')" />
                        <EFormColumn>
                            <EButton color="pink" block @click="drawerProperties.open = !drawerProperties.open">
                                {{ controlLabel('toggle') }}
                            </EButton>
                        </EFormColumn>
                    </EForm>
                </ECard>
            </EContainer>
        </EMain>
    </EApp>
</template>

<script setup lang="ts">
import type { PlaygroundSnippetMessage } from '~/types/docs-playground'
import type { DrawerPlaygroundState } from '~/types/drawer-playground'
import { buildSfcSnippet } from '~/utils/snippet-sfc'
import { buildTemplateElementSnippet } from '~/utils/snippet-element'
const { getAvatarByIndex } = useAvatars()

definePageMeta({ layout: false })
useHead({ meta: [{ name: 'robots', content: 'noindex, nofollow' }] })

const content = useDocsComponentI18nContent('pages.drawer.drawer')
const widths = ['224px', '256px', '320px']
const elevations = ['xs', 'sm', 'md', 'lg', 'xl']
const drawerProperties = reactive<DrawerPlaygroundState>({
    open: true,
    side: 'left',
    width: '256px',
    appearance: 'default',
    absolute: false,
    floating: false,
    elevation: 'sm',
})

const controlLabel = (key: string): string => content.value.labels.controls.find((item) => item.key === key)?.label ?? key
const drawerText = (key: string): string => content.value.labels.drawerText?.[key as keyof typeof content.value.labels.drawerText] ?? key

const snippet = computed(() => buildSfcSnippet({
    template: buildTemplateElementSnippet({
        tag: 'EDrawer',
        attrs: [
            'v-model="drawerOpen"',
            'nav',
            drawerProperties.side === 'right' && 'right',
            `width="${drawerProperties.width}"`,
            drawerProperties.appearance !== 'default' && `appearance="${drawerProperties.appearance}"`,
            drawerProperties.absolute && 'absolute',
            drawerProperties.floating && 'floating',
            drawerProperties.floating && `elevation="${drawerProperties.elevation}"`,
        ],
        contentLines: [`<template #prepend>
        <EListItem prepend-avatar="/images/avatar-3.jpg" title="Ever Santiesteban"
        subtitle="elsantiesteban@gmail.com" />
    </template>
    <EDivider />

    <EList inset active-color="pink">
        <EListItem prepend-icon="home" title="${controlLabel('home')}" />
        <EListItem prepend-icon="account" title="${controlLabel('profile')}" />
        <EListItem prepend-icon="cog" title="${controlLabel('settings')}" />
    </EList>

    <template #append>
        <div class="p-3">
            <EButton color="pink" block>${controlLabel('toggle')}</EButton>
        </div>
    </template>`],
    }),
    scriptSetup: `import { ref } from 'vue'

const drawerOpen = ref(${drawerProperties.open})`,
}))

const postSnippet = (): void => {
    if (!import.meta.client || window.parent === window) return

    const message: PlaygroundSnippetMessage = {
        type: 'nuvex:playground-snippet',
        snippet: snippet.value,
    }
    window.parent.postMessage(message, window.location.origin)
}

watch(snippet, postSnippet)
onMounted(postSnippet)
</script>