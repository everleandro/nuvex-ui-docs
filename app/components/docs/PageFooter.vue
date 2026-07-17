<template>
    <footer v-if="hasSiblings" class="docs-page-footer">
        <DocsSection :title="t('common.docs.footer.title')" :description="t('common.docs.footer.description')">
            <div class="d-flex gap-3 p-3">
                <NuxtLink v-if="siblings.previous" :to="withLocalePrefix(siblings.previous.to, locale)" class="docs-page-footer__link">
                    <ECard
                        v-ripple
                        outlined
                        :title="t(getNavigationItemTitleKey(siblings.previous))"
                        :subtitle="t('common.docs.footer.previous')"
                        :prepend-icon="$icon.arrowLeft" :prepend-icon-props="{ size: 'x-large' }" />
                </NuxtLink>
                <ESpacer />
                <NuxtLink v-if="siblings.next" :to="withLocalePrefix(siblings.next.to, locale)" class="docs-page-footer__link">
                    <ECard
                        v-ripple
                        outlined
                        :title="t(getNavigationItemTitleKey(siblings.next))"
                        :subtitle="t('common.docs.footer.next')"
                        :append-icon="$icon.arrowRight" :append-icon-props="{ size: 'x-large' }" />
                </NuxtLink>
            </div>
        </DocsSection>
    </footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { findNavigationSiblingsByPath, getNavigationItemTitleKey } from '~/navigation.config'
import { withLocalePrefix } from '~/utils/locale-path'

const route = useRoute()
const { t, locale } = useI18n()

const siblings = computed(() => findNavigationSiblingsByPath(route.path))
const hasSiblings = computed(() => Boolean(siblings.value.previous || siblings.value.next))
</script>

<style lang="scss" scoped>
.docs-page-footer__link {
    display: block;
    height: 100%;
    text-decoration: none;
    color: inherit;

    .e-card {
        --doc-page-card-size: 266px;
        min-width: var(--doc-page-card-size);
        width: var(--doc-page-card-size);
    }
}
</style>