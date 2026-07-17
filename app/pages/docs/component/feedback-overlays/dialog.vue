<template>
  <DocsScaffoldPage
    :section="t('pages.modal.dialog.section')"
    :title="t('pages.modal.dialog.title')"
    doc-path="/docs/component/feedback-overlays/dialog"
  />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
