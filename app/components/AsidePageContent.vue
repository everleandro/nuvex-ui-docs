<template>
    <EDrawer model-value="true" right width="200px" appearance="transparent">
        <template #prepend>
            <div class="d-flex items-center gap-2 mt-4 mb-2">
                <EIcon :icon="$icon.layersOutline" />
                <span class="text-h6">Content</span>
            </div>
        </template>
        <ETabGroup v-model="example" vertical tab-align="start" track>
            <ETab v-for="i in 3" :key="i" :value="i">Option {{ i }}</ETab>
        </ETabGroup>
    </EDrawer>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const example = ref(1);
</script>