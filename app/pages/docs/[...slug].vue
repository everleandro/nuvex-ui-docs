<template>
  <DocsScaffoldPage
    :section="resolvedItem?.group.title ?? ''"
    :title="resolvedItem?.item.title ?? ''"
    :doc-path="route.path"
  />
</template>

<script setup lang="ts">
import { findNavigationItemByPath } from '~/navigation.config'

const route = useRoute()

const resolvedItem = computed(() => findNavigationItemByPath(route.path))

if (!resolvedItem.value) {
  throw createError({ statusCode: 404, statusMessage: 'Documentation page not found' })
}
</script>