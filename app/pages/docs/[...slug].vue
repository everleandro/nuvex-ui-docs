<template>
  <DocsScaffoldPage
    :section="resolvedGroupTitle"
    :title="resolvedItemTitle"
    :doc-path="route.path"
  />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { findNavigationItemByPath, getNavigationItemSectionTitleKey, getNavigationItemTitleKey } from '~/navigation.config'

const route = useRoute()
const { t } = useI18n()

const resolvedItem = computed(() => findNavigationItemByPath(route.path))
const resolvedGroupTitle = computed(() => {
  if (!resolvedItem.value) {
    return ''
  }

  return t(getNavigationItemSectionTitleKey(resolvedItem.value.item))
})

const resolvedItemTitle = computed(() => {
  if (!resolvedItem.value) {
    return ''
  }

  return t(getNavigationItemTitleKey(resolvedItem.value.item))
})

if (!resolvedItem.value) {
  throw createError({ statusCode: 404, statusMessage: 'Documentation page not found' })
}
</script>