export const selectCodeSnippets = {
  itemMappingTemplateCode: `<EForm>
  <ESelect
    v-model="mappedPrimitiveValue"
    :items="assigneeItems"
    item-text="name"
    item-value="id"
    label="Primitive model (id)"
    clearable
  />

  <ESelect
    v-model="mappedObjectValue"
    :items="assigneeItems"
    item-text="name"
    item-value="id"
    return-object
    label="Object model (item)"
    clearable
  />
</EForm>`,

  itemMappingTsCode: `type Assignee = {
  id: string
  name: string
  email: string
  avatarSrc: string
}

const assigneeItems: Assignee[] = [
  { id: 'ana', name: 'Ana Garcia', email: 'ana@example.com', avatarSrc: '/img/avatar/ana.jpg' },
  { id: 'carlos', name: 'Carlos Lopez', email: 'carlos@example.com', avatarSrc: '/img/avatar/carlos.jpg' },
]

const mappedPrimitiveValue = ref<string | undefined>('ana')
const mappedObjectValue = ref<Assignee | undefined>(assigneeItems[0])`,

  visualVariantsTemplateCode: `<EForm>
  <ESelect v-model="visualVariants.default" :items="statusItems" label="Default" :color="color" />
  <ESelect v-model="visualVariants.outlined" :items="statusItems" label="Outlined" outlined :color="color" />
  <ESelect v-model="visualVariants.readonly" :items="statusItems" label="Readonly" readonly outlined :color="color" />
  <ESelect v-model="visualVariants.disabled" :items="statusItems" label="Disabled" disabled :color="color" />
</EForm>`,

  multipleAndChipsTemplateCode: `<EForm>
  <ESelect
    v-model="tagValues"
    :items="tagItems"
    multiple
    chip
    clearable
    label="Tags (multiple + chip)"
  />

  <ESelect
    v-model="singleChipValue"
    :items="statusItems"
    chip
    chip-closable
    clearable
    label="Single chip"
  />
</EForm>`,

  autocompleteTemplateCode: `<ESelect
  v-model="fruitValue"
  :items="filteredFruitItems"
  :search="searchQuery"
  autocomplete
  clearable
  label="Search fruit"
  placeholder="Type to filter"
  @update:search="searchQuery = String($event ?? '')"
/>`,

  autocompleteTsCode: `const fruitItems = ['Apple', 'Apricot', 'Banana', 'Blueberry', 'Cherry']
const searchQuery = ref('')
const fruitValue = ref<string | undefined>('')

const filteredFruitItems = computed(() => {
  const term = searchQuery.value.trim().toLowerCase()
  if (!term) return fruitItems
  return fruitItems.filter((item) => item.toLowerCase().includes(term))
})`,

  slotsTemplateCode: `<ESelect
  v-model="slotValue"
  :items="assigneeItems"
  item-text="name"
  item-value="id"
  label="Assignee"
>
  <template #selection="{ selection }">
    <EAvatar :src="selection.avatarSrc" :icon="$icon.account" size="small" class="mr-2" />
    <span class="font-weight-bold">{{ selection.name }}</span>
    <span class="opacity-70"> - {{ selection.email }}</span>
  </template>

  <template #item="{ item, attrs }">
    <EListItem v-bind="attrs">
      <div class="d-flex align-center gap-3 py-1">
        <EAvatar :src="item.avatarSrc" :icon="$icon.account" size="small" />
        <div class="d-flex flex-column">
          <span class="font-weight-bold">{{ item.name }}</span>
          <small class="opacity-70">{{ item.email }}</small>
        </div>
      </div>
    </EListItem>
  </template>
</ESelect>`,

  slotsTsCode: `type Assignee = {
  id: string
  name: string
  email: string
  avatarSrc: string
}

const assigneeItems: Assignee[] = [
  { id: '1', name: 'Ana Garcia', email: 'ana@example.com', avatarSrc: '/img/avatar/ana.jpg' },
  { id: '2', name: 'Carlos Lopez', email: 'carlos@example.com', avatarSrc: '/img/avatar/carlos.jpg' },
  { id: '3', name: 'Diana Chen', email: 'diana@example.com', avatarSrc: '/img/avatar/diana.jpg' },
  { id: '11', name: 'User 11', email: 'user11@example.com', avatarSrc: '/img/avatar/user11.jpg' },
  { id: '12', name: 'User 12', email: 'user12@example.com', avatarSrc: '/img/avatar/user12.jpg' },
  { id: '13', name: 'User 13', email: 'user13@example.com', avatarSrc: '/img/avatar/user13.jpg' },
  { id: '19', name: 'User 19', email: 'user19@example.com', avatarSrc: '/img/avatar/user19.jpg' },
  { id: '21', name: 'User 21', email: 'user21@example.com', avatarSrc: '/img/avatar/user21.jpg' },
  { id: '33', name: 'User 33', email: 'user33@example.com', avatarSrc: '/img/avatar/user33.jpg' },
  { id: '40', name: 'User 40', email: 'user40@example.com', avatarSrc: '/img/avatar/user40.jpg' },
  { id: '44', name: 'User 44', email: 'user44@example.com', avatarSrc: '/img/avatar/user44.jpg' },
]

const slotValue = ref<string | undefined>('1')`,

  slotsCssCode: `.select-page__item-avatar {
  --list-item-affix-width: 44px;
}`,

  asyncTemplateCode: `<ESelect
  v-model="countryValue"
  :items="countryItems"
  item-text="name"
  item-value="code"
  :loading="loadingCountries"
  clearable
  label="Country"
  @focus="fetchCountries"
/>`,

  asyncTsCode: `type Country = {
  code: string
  name: string
}

const countryItems = ref<Country[]>([])
const countryValue = ref<string | undefined>()
const loadingCountries = ref(false)

const fetchCountries = async () => {
  if (countryItems.value.length > 0 || loadingCountries.value) return
  loadingCountries.value = true
  try {
    await new Promise((resolve) => setTimeout(resolve, 900))
    countryItems.value = [
      { code: 'es', name: 'Spain' },
      { code: 'mx', name: 'Mexico' },
    ]
  } finally {
    loadingCountries.value = false
  }
}`,

  validationTemplateCode: `<ECard :title="labels.cardTitle" :subtitle="validationStatusMessage" elevation="sm">
  <EForm ref="validationFormRef" v-model="validationFormIsValid" class="d-flex flex-column gap-3">
    <ESelect
      v-model="validationModel.assignee"
      :items="assigneeItems"
      :color="color"
      item-text="name"
      item-value="id"
      label="Assignee"
      :rules="[requiredRule]"
    />

    <ESelect
      v-model="validationModel.priority"
      :items="priorityItems"
      :color="color"
      label="Priority"
      :rules="[requiredRule]"
    />

    <ESelect v-model="validationModel.tags" :items="tagItems" multiple chip label="Tags" :color="color" />

    <EFormColumn class="d-block">
      <EDivider />
      <div class="d-flex gap-2 flex-1 pt-4">
        <ESpacer />
        <EButton text @click="resetValidationDemo">{{ labels.cancel }}</EButton>
        <EButton :disabled="!validationCanSubmit" :loading="validationSubmitting" @click="submitValidationDemo" color="primary">
          {{ labels.submit }}
        </EButton>
      </div>
    </EFormColumn>
  </EForm>
</ECard>`,

  validationTsCode: `import type { EForm } from 'nuvex-ui'

const labels = {
  cancel: 'Cancel',
  submit: 'Create ticket',
  idle: 'Complete required fields to continue',
  submitting: 'Creating ticket...',
  success: 'Ticket created successfully',
  canceled: 'Form reset',
  cardTitle: 'Support ticket',
  cardSubtitle: 'Route issue and set priority',
}

const color = ref('primary')
const validationFormIsValid = ref(false)
const validationSubmitting = ref(false)
const validationStatusMessage = ref(labels.idle)
const validationFormRef = ref<EForm | null>(null)
const validationModel = ref({
  assignee: '',
  priority: 'Medium',
  tags: ['UI'],
})

const requiredRule = (value: unknown) => {
  if (Array.isArray(value)) {
    return value.length > 0 || 'This field is required'
  }

  return Boolean(value) || 'This field is required'
}

const validationCanSubmit = computed(() => {
  return validationFormIsValid.value && !validationSubmitting.value
})

const resetValidationDemo = () => {
  validationFormRef.value?.reset?.()
  validationFormRef.value?.resetValidation?.()
  validationSubmitting.value = false
  validationStatusMessage.value = labels.canceled
}

const submitValidationDemo = async () => {
  const valid = await validationFormRef.value?.validate?.()
  if (!validationCanSubmit.value || !valid) return

  validationSubmitting.value = true
  validationStatusMessage.value = labels.submitting

  try {
    await new Promise((resolve) => setTimeout(resolve, 900))
    validationStatusMessage.value = labels.success
  } finally {
    validationSubmitting.value = false
  }
}`,
} as const