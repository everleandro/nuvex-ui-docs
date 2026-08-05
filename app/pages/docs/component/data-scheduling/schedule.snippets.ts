export const scheduleCodeSnippets = {
  usageTemplateCode: `<ESchedule
  v-model="date"
  v-model:scale="scale"
  class="full-width"
  :spaces="spaces"
  :selected-space="spaces[0]"
  :events="events"
  :start="9 * 60 * 60"
  :end="14 * 60 * 60"
  :row-height="64"
  elevation="sm"
/>`,

  withoutToolbarTemplateCode: `<ESchedule
  v-model="date"
  v-model:scale="scale"
  class="full-width"
  :spaces="spaces"
  :events="events"
  :start="9 * 60 * 60"
  :end="14 * 60 * 60"
  :row-height="64"
  hide-toolbar
  elevation="sm"
/>`,

  toolbarTemplateCode: `<ESchedule
  v-model="date"
  class="full-width"
  :spaces="spaces"
  :events="events"
  :start="9 * 60 * 60"
  :end="14 * 60 * 60"
  :row-height="64"
  elevation="sm"
>
  <template #toolbar="toolbar">
    <EBar color="primary">
      <EButton
        text
        use-contrast-color
        :icon="$icon.arrowLeft"
        :aria-label="toolbar.labels.previousPeriod"
        @click="toolbar.goToPreviousPeriod()"
      />
      <EButton text use-contrast-color @click="toolbar.goToToday()">
        {{ toolbar.labels.today }}
      </EButton>
      <EButton
        text
        use-contrast-color
        :icon="$icon.arrowRight"
        :aria-label="toolbar.labels.nextPeriod"
        @click="toolbar.goToNextPeriod()"
      />
      <ESpacer />
      <strong class="type-subtitle">{{ formatDate(toolbar.date) }}</strong>
    </EBar>
  </template>
</ESchedule>`,

  eventTemplateCode: `<ESchedule
  v-model="date"
  class="full-width"
  :spaces="spaces"
  :events="events"
  :start="9 * 60 * 60"
  :end="14 * 60 * 60"
  :row-height="64"
  event-elevation="none"
  elevation="sm"
>
  <template #event="{ event }">
    <EButton text block class="full-height">
      <span
        class="d-flex flex-column items-start full-width"
        style="color: var(--schedule-local-event-color)"
      >
        <strong class="type-body">{{ event.name }}</strong>
        <span class="type-caption">{{ event.subtitle }}</span>
        <span class="type-caption text-medium-emphasis">{{ event.footer }}</span>
      </span>
    </EButton>
  </template>
</ESchedule>`,

  emptySlotTemplateCode: `<div class="full-width d-flex flex-column gap-3">
  <p class="type-body text-medium-emphasis" aria-live="polite">
    {{ feedback }}
  </p>
  <ESchedule
    v-model="date"
    class="full-width"
    :spaces="spaces"
    :start="9 * 60 * 60"
    :end="14 * 60 * 60"
    :row-height="64"
    elevation="sm"
  >
    <template #empty-slot="{ data }">
      <EButton
        text
        block
        class="full-height"
        :aria-label="\`\${labels.createAt} \${formatTime(data.start)}\`"
        @click="selectSlot(data)"
      >
        {{ labels.add }}
      </EButton>
    </template>
  </ESchedule>
</div>`,

  integrationTemplateCode: `<ESchedule
  v-model="date"
  class="full-width"
  :spaces="spaces"
  :events="events"
  :start="9 * 60 * 60"
  :end="14 * 60 * 60"
  :row-height="64"
  elevation="sm"
  @click:empty-slot="openCreateDialog"
  @click:event="openEditDialog"
/>

<EDialog v-model="dialogOpen" :max-width="520" restore-focus>
  <ECard
    :title="editingId ? labels.editEvent : labels.createEvent"
    :description="labels.dialogDescription"
  >
    <EForm class="d-flex flex-column gap-3">
      <ETextfield v-model="draft.name" :label="labels.eventName" />
      <ETextfield v-model="draft.startTime" type="time" :label="labels.startTime" />
      <ETextfield v-model="draft.endTime" type="time" :label="labels.endTime" />
    </EForm>
    <div class="d-flex flex-wrap justify-end gap-4 mt-4">
      <EButton text @click="dialogOpen = false">{{ labels.cancel }}</EButton>
      <EButton color="primary" :disabled="!canSave" @click="saveEvent">
        {{ labels.save }}
      </EButton>
    </div>
  </ECard>
</EDialog>`,

  integrationTsCode: `import type { ScheduleEvent, ScheduleSlotEvent } from 'nuvex-ui'

const dialogOpen = ref(false)
const editingId = ref<string | number | null>(null)
const selectedSlot = ref<ScheduleSlotEvent | null>(null)
const events = ref<ScheduleEvent[]>([])
const draft = reactive({ name: '', startTime: '09:00', endTime: '10:00' })

const openCreateDialog = ({ data }: { data: ScheduleSlotEvent }) => {
  editingId.value = null
  selectedSlot.value = data
  dialogOpen.value = true
}

const openEditDialog = ({ data }: { data: ScheduleEvent }) => {
  editingId.value = data.id
  selectedSlot.value = data
  draft.name = data.name
  dialogOpen.value = true
}

const saveEvent = () => {
  // Resolve the selected date with the form times, then insert or update the event.
  dialogOpen.value = false
}`,

  accessibilityTemplateCode: `<div class="full-width d-flex flex-column gap-3">
  <p class="type-body text-medium-emphasis" aria-live="polite">
    {{ announcement }}
  </p>
  <ESchedule
    v-model="date"
    class="full-width"
    :spaces="spaces"
    :events="events"
    :start="9 * 60 * 60"
    :end="14 * 60 * 60"
    :row-height="64"
    elevation="sm"
    @click:event="announceEvent"
    @click:empty-slot="announceSlot"
  />
</div>`,
} as const;

interface ScheduleUsageSnippetContent {
  spaceLabel: string
  planningName: string
  planningFooter: string
  researchName: string
  researchFooter: string
  locale: string
}

export const createScheduleUsageTsCode = ({
  spaceLabel,
  planningName,
  planningFooter,
  researchName,
  researchFooter,
  locale,
}: ScheduleUsageSnippetContent) => {
  const formatTime = (date: Date) => new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date)
  const event = (
    id: string,
    day: number,
    startHour: number,
    startMinute: number,
    endHour: number,
    endMinute: number,
    color: string,
    name: string,
    footer: string,
  ) => {
    const start = new Date(2026, 7, day, startHour, startMinute)
    const end = new Date(2026, 7, day, endHour, endMinute)
    return `  {
    id: ${JSON.stringify(id)},
    entityId: 'studio-a',
    start: new Date(2026, 7, ${day}, ${startHour}, ${startMinute}),
    end: new Date(2026, 7, ${day}, ${endHour}, ${endMinute}),
    color: '${color}',
    name: ${JSON.stringify(name)},
    subtitle: ${JSON.stringify(`${formatTime(start)} - ${formatTime(end)}`)},
    footer: ${JSON.stringify(footer)},
  }`
  }

  return `import { CalendarScale } from 'nuvex-ui'
import type { ScheduleEvent, ScheduleSpace } from 'nuvex-ui'

const spaces = ref<ScheduleSpace[]>([
  { id: 'studio-a', label: ${JSON.stringify(spaceLabel)} },
])

const events = ref<ScheduleEvent[]>([
${event('planning', 3, 9, 0, 10, 30, 'primary', planningName, planningFooter)},
${event('research', 4, 11, 0, 12, 0, 'success', researchName, researchFooter)},
])

const date = ref(new Date(2026, 7, 3))
const scale = ref(CalendarScale.Week)`
}
