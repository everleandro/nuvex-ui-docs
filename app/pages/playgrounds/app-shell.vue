<template>
    <EApp style="max-height: 560px;">
        <EBar app outlined :fixed="shellState.fixed" :clipped="shellState.clipped">
            <EButton :icon="$icon.menu" text @click="shellState.drawerOpen = !shellState.drawerOpen" />
            <div class="d-flex justify-center items-center full-width full-height">
                <code class="docs-inline-code">&lt;Bar content&gt;</code>
            </div>
        </EBar>

        <EDrawer v-model="shellState.drawerOpen" nav dev-mode :right="shellState.drawerSide === 'right'"
            :width="shellState.drawerWidth">
            <div class="d-flex justify-center items-center full-width full-height">
                <code class="docs-inline-code">&lt;Drawer content&gt;</code>
            </div>
        </EDrawer>
        <EMain>
            <EContainer class="d-flex justify-center items-start" style="min-height: 700px;">
                <ECard elevation="sm" class="p-4" style="width: 400px;">
                    <EForm label-min-width="120" input-align="right">
                        <ESwitch v-model="shellState.fixed" cols="24" label="Bar fixed" />
                        <ESwitch v-model="shellState.clipped" cols="24" label="Bar clipped" />
                    </EForm>
                </ECard>
            </EContainer>
        </EMain>
    </EApp>
</template>

<script setup lang="ts">
import type { PlaygroundSnippetMessage } from '~/types/docs-playground'
import { buildSfcSnippet } from '~/utils/snippet-sfc'

definePageMeta({ layout: false })
useHead({ meta: [{ name: 'robots', content: 'noindex, nofollow' }] })

const shellState = reactive({
    drawerOpen: true,
    fixed: true,
    clipped: true,
    drawerSide: 'left' as 'left' | 'right',
    drawerWidth: '256px',
})

const barAttrs = computed(() => {
    const attrs = ['app', 'outlined']
    if (shellState.fixed) attrs.push('fixed')
    if (shellState.clipped) attrs.push('clipped')
    return attrs.join(' ')
})

const snippet = computed(() => buildSfcSnippet({
    template: `    <EApp>
        <EBar ${barAttrs.value}>
            <EButton icon="menu" @click="drawerModel = !drawerModel" />
        </EBar>
        <EDrawer v-model="drawerModel" nav>
            content
        </EDrawer>
        <EMain>
            <EContainer>
                <NuxtPage />
            </EContainer>
        </EMain>
    </EApp>`,
    scriptSetup: `import { ref } from 'vue'

const drawerModel = ref(${shellState.drawerOpen})`,
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
