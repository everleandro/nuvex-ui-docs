export const datePickerCodeSnippets = {
  dateRulesTemplateCode: `<template>
  <ECard
    title="Blocked scheduling rules"
    subtitle="Blocks weekends and August 20-25."
  >
    <div class="d-flex justify-center">
      <EDatePicker
        v-model="disabledDate"
        color="secondary"
        :disabled="disabledDates"
      />
    </div>
  </ECard>

  <ECard
    title="Visible scheduling windows"
    subtitle="Marks releases and the approval window."
  >
    <div class="d-flex justify-center">
      <EDatePicker
        v-model="highlightedDate"
        color="primary"
        :highlighted="highlightedDates"
      />
    </div>
  </ECard>
</template>`,

  dateRulesTsCode: `import { ref } from 'vue'
import type { DatesConfiguration } from 'nuvex-ui'

const disabledDate = ref(new Date(2026, 7, 14))
const highlightedDate = ref(new Date(2026, 7, 14))

const disabledDates: DatesConfiguration = {
  days: [0, 6],
  ranges: [
    {
      from: new Date(2026, 7, 20),
      to: new Date(2026, 7, 25),
    },
  ],
}

const highlightedDates: DatesConfiguration = {
  dates: [new Date(2026, 7, 14), new Date(2026, 7, 29)],
  ranges: [
    {
      from: new Date(2026, 7, 10),
      to: new Date(2026, 7, 12),
    },
  ],
}`,

  localizationTemplateCode: `<template>
  <ECard
    title="Spanish calendar"
    subtitle="Calendar labels and month names are displayed in Spanish."
    elevation="sm"
  >
    <EDatePicker v-model="spanishDate" lng="es" color="secondary" />
  </ECard>

  <ECard
    title="French calendar"
    subtitle="Calendar labels and month names are displayed in French."
    elevation="sm"
  >
    <EDatePicker v-model="frenchDate" lng="fr" color="primary" />
  </ECard>
</template>`,

  localizationTsCode: `import { ref } from 'vue'

const spanishDate = ref(new Date(2026, 7, 14))
const frenchDate = ref(new Date(2026, 7, 14))`,

  integrationTemplateCode: `<template>
  <EDialog v-model="dialogOpen">
    <EDatePicker v-model="birthDate" color="secondary" close-on-change />
  </EDialog>

  <ERow>
    <ECol sm="6">
      <ETextfield
        id="birth-date"
        :model-value="formatDate(birthDate)"
        label="Birth date"
        :append-icon="$icon.calendar"
        input-align="end"
        input-readonly
        @click="dialogOpen = true"
      />
    </ECol>

    <ECol sm="6">
      <EMenu origin="bottom right" fit-content>
        <template #activator="{ attrs }">
          <ETextfield
            id="deadline"
            :model-value="formatDate(deadline)"
            label="Deadline"
            :append-inner-icon="$icon.calendar"
            input-align="end"
            input-readonly
            v-bind="attrs"
          />
        </template>

        <EDatePicker v-model="deadline" color="primary" close-on-change />
      </EMenu>
    </ECol>
  </ERow>
</template>`,

  integrationTsCode: `import { ref } from 'vue'

const dialogOpen = ref(false)
const birthDate = ref(new Date(1996, 3, 18))
const deadline = ref(new Date(2026, 9, 3))

const formatDate = (value: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(value)
}`,
}