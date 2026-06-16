<template>
    <footer v-if="footerContent.items.length" class="docs-page-footer">
        <DocsSection :title="footerContent.title" :description="footerContent.description">
            <ERow dense>
                <ECol v-for="step in footerContent.items" :key="step.to" :cols="12" :md="6" :lg="4">
                    <ECard v-ripple class="docs-page-footer__card">
                        <NuxtLink :to="step.to">
                            <strong>{{ step.title }}</strong>
                            <span>{{ step.description }}</span>
                        </NuxtLink>
                    </ECard>
                </ECol>
            </ERow>
        </DocsSection>
    </footer>
</template>

<script setup lang="ts">
import { getDocsFooterContent } from '~/navigation.config'

const route = useRoute()

const footerContent = computed(() => getDocsFooterContent(route.path))
</script>

<style lang="scss" scoped>
.docs-page-footer__card {
    transition: transform 0.2s ease;

     a {
        display: grid;
        gap: 0.5rem;
        padding: 1rem;
        border: 1px solid var(--e-color-border);
        color: inherit;
        text-decoration: none;

    }

    &:hover {
        transform: translateY(-2px);
    }

    &span {
        opacity: 0.78;
    }

}
</style>