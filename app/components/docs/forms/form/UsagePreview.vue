<template>
  <ECard :title="labels.usageCardTitle" :subtitle="labels.usageCardSubtitle" elevation="sm">
    <EForm :outlined="outlined" :disabled="disabled" :readonly="readonly" :retain-color="retainColor"
      :field-color="fieldColor || undefined" :table="table" :color="color">
      <ETextfield v-model="usageModel.name" md="6" :label="labels.nameLabel" :placeholder="labels.placeholderName" />
      <ESelect v-model="usageModel.role" md="6" :items="labels.roleItems" :label="labels.roleLabel" />
      <ETextfield v-model="usageModel.email" :label="labels.emailLabel" :placeholder="labels.placeholderEmail" />
      <ETextarea v-model="usageModel.notes" :label="labels.notesLabel" />
    </EForm>
  </ECard>
</template>

<script setup lang="ts">
interface FormUsageLabels {
  usageCardTitle: string
  usageCardSubtitle: string
  nameLabel: string
  emailLabel: string
  roleLabel: string
  notesLabel: string
  placeholderName: string
  placeholderEmail: string
  roleItems: string[]
}

defineProps<{
  color: string
  outlined: boolean
  disabled: boolean
  readonly: boolean
  retainColor: boolean
  table?: boolean
  fieldColor?: string
}>()

const content = useDocsComponentI18nContent('pages.form.form')

const labels = computed<FormUsageLabels>(() => {
  const raw = content.value.labels.formText as Partial<FormUsageLabels> | undefined

  return {
    usageCardTitle: raw?.usageCardTitle ?? 'Shared form behavior',
    usageCardSubtitle: raw?.usageCardSubtitle ?? 'One parent controls multiple child fields',
    nameLabel: raw?.nameLabel ?? 'Name',
    emailLabel: raw?.emailLabel ?? 'Email',
    roleLabel: raw?.roleLabel ?? 'Role',
    notesLabel: raw?.notesLabel ?? 'Notes',
    placeholderName: raw?.placeholderName ?? 'Jane Doe',
    placeholderEmail: raw?.placeholderEmail ?? 'name@company.com',
    roleItems: raw?.roleItems ?? ['Admin', 'Editor', 'Viewer'],
  }
})

const usageModel = reactive({
  name: '',
  email: '',
  role: '',
  notes: '',
})
</script>