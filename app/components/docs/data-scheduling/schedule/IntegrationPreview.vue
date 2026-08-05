<template>
  <div class="full-width">
    <ESchedule v-model="date" class="full-width" :spaces="spaces" :events="events" :start="9 * 60 * 60"
      :end="14 * 60 * 60" :row-height="64" elevation="sm" @click:empty-slot="openCreateDialog"
      @click:event="openEditDialog" />

    <EDialog v-model="dialogOpen" :max-width="520" restore-focus>
      <ECard :title="editingId ? labels.editEvent : labels.createEvent" :description="labels.dialogDescription">
        <EForm class="d-flex flex-column gap-3">
          <ETextfield v-model="draft.name" :label="labels.eventName" />
          <ETextfield v-model="draft.startTime" md="6" type="time" :label="labels.startTime" />
          <ETextfield v-model="draft.endTime" type="time" md="6" :label="labels.endTime" />
        </EForm>
        <div class="d-flex flex-wrap justify-end gap-4 mt-4">
          <EButton text @click="dialogOpen = false">{{ labels.cancel }}</EButton>
          <EButton color="primary" :disabled="!canSave" @click="saveEvent">{{ labels.save }}</EButton>
        </div>
      </ECard>
    </EDialog>
  </div>
</template>

<script setup lang="ts">
import type { ScheduleEvent, ScheduleSlotEvent } from 'nuvex-ui'
import { useScheduleResources } from './schedule.resources'

const { labels, spaces, events: resourceEvents } = useScheduleResources({ spaceCount: 1, eventCount: 1 })

const date = ref(new Date(2026, 7, 3))
const events = ref<ScheduleEvent[]>([])
watch(resourceEvents, (localizedEvents) => {
  events.value = localizedEvents.map(event => ({ ...event }))
}, { immediate: true })
const dialogOpen = ref(false)
const editingId = ref<string | number | null>(null)
const selectedSlot = ref<ScheduleSlotEvent | null>(null)
const draft = reactive({ name: '', startTime: '09:00', endTime: '10:00' })
const canSave = computed(() => Boolean(draft.name.trim()) && draft.startTime < draft.endTime)

const toTime = (value: Date | string) => {
  const parsed = new Date(value)
  return `${String(parsed.getHours()).padStart(2, '0')}:${String(parsed.getMinutes()).padStart(2, '0')}`
}
const openCreateDialog = ({ data }: { data: ScheduleSlotEvent }) => {
  editingId.value = null
  selectedSlot.value = data
  draft.name = ''
  draft.startTime = toTime(data.start)
  draft.endTime = toTime(data.end)
  dialogOpen.value = true
}
const openEditDialog = ({ data }: { data: ScheduleEvent }) => {
  editingId.value = data.id
  selectedSlot.value = data
  draft.name = data.name
  draft.startTime = toTime(data.start)
  draft.endTime = toTime(data.end)
  dialogOpen.value = true
}
const applyTime = (source: Date | string, time: string) => {
  const value = new Date(source)
  const [hours, minutes] = time.split(':').map(Number)
  value.setHours(hours ?? 0, minutes ?? 0, 0, 0)
  return value
}
const saveEvent = () => {
  if (!canSave.value || !selectedSlot.value) return

  const nextEvent: ScheduleEvent = {
    id: editingId.value ?? `event-${Date.now()}`,
    entityId: selectedSlot.value.entityId,
    name: draft.name.trim(),
    start: applyTime(selectedSlot.value.start, draft.startTime),
    end: applyTime(selectedSlot.value.end, draft.endTime),
    color: editingId.value ? 'primary' : 'success',
  }
  const eventIndex = events.value.findIndex(({ id }) => id === editingId.value)
  if (eventIndex >= 0) events.value[eventIndex] = nextEvent
  else events.value.push(nextEvent)
  dialogOpen.value = false
}
</script>