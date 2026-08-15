<template>
    <section class="landing-dashboard__view">
        <ERow gap="8" class="landing-dashboard__hero py-4 mb-2">
            <ECol class="flex-1-1-0 d-flex items-center">
                <div class="d-flex flex-column gap-1">
                    <p class="landing-dashboard__eyebrow type-caption">Schedule</p>
                    <h3 class="mb-0">Weekly agenda for the studio</h3>
                </div>
            </ECol>
            <ECol cols="7" sm="auto">
                <ETextfield id="schedule-date" :model-value="formatDate(scheduleDate)" :append-icon="$icon.calendar"
                    input-align="end" input-readonly @click="dialogOpen = true" />
            </ECol>
        </ERow>

        <ERow class="mb-4">
            <ECol v-for="stat in quickStats" :key="stat.label" cols="6" md="3">
                <ECard tonal elevation="sm" :color="stat.color" :title="stat.value" :subtitle="stat.label" />
            </ECol>
        </ERow>

        <EDialog v-model="dialogOpen">
            <EDatePicker v-model="scheduleDate" color="secondary" close-on-change />
        </EDialog>

        <ESchedule v-model="scheduleDate" class="full-width mt-2" hide-toolbar :spaces="spaces" :view="view"
            :events="events" :start="8 * 60 * 60" :end="18 * 60 * 60" sticky-top-header="64" elevation="sm" />
    </section>
</template>
<script setup lang="ts">
definePageMeta({
    layout: 'playground-dashboard',
})
const scheduleDate = ref(new Date(2026, 7, 3))
const dialogOpen = ref(false)
const formatDate = (value: Date) => {
    return new Intl.DateTimeFormat('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }).format(value)
}
import { ScheduleView } from 'nuvex-ui'
import type { ScheduleEvent, ScheduleSpace } from 'nuvex-ui'

const spaces = ref<ScheduleSpace[]>([
    { id: 'studio-a', label: "Studio A" },
    { id: 'studio-b', label: "Studio B" },
    { id: 'studio-c', label: "Studio C" },
    { id: 'studio-d', label: "Studio D" },
])

const quickStats = [
    { label: 'Sessions', value: '7', color: 'primary' },
    { label: 'Prep blocks', value: '3', color: 'secondary' },
    { label: 'Review calls', value: '2', color: 'success' },
    { label: 'Open slots', value: '4', color: 'warning' },
]

const events = ref<ScheduleEvent[]>([
    {
        id: 'planning',
        entityId: 'studio-a',
        start: new Date(2026, 7, 3, 9, 0),
        end: new Date(2026, 7, 3, 10, 30),
        color: 'primary',
        name: 'Planning',
        subtitle: '09:00 - 10:30',
        footer: 'Product • Studio A',
    },
    {
        id: 'review',
        entityId: 'studio-b',
        start: new Date(2026, 7, 3, 11, 0),
        end: new Date(2026, 7, 3, 12, 0),
        color: 'secondary',
        name: 'Client review',
        subtitle: '11:00 - 12:00',
        footer: 'Stakeholders • Boardroom',
    },
    {
        id: 'design',
        entityId: 'studio-c',
        start: new Date(2026, 7, 4, 9, 30),
        end: new Date(2026, 7, 4, 10, 30),
        color: 'success',
        name: 'Design sync',
        subtitle: '09:30 - 10:30',
        footer: 'Design • Creative',
    },
    {
        id: 'shoot',
        entityId: 'studio-d',
        start: new Date(2026, 7, 4, 13, 0),
        end: new Date(2026, 7, 4, 15, 0),
        color: 'warning',
        name: 'Launch prep',
        subtitle: '13:00 - 15:00',
        footer: 'Marketing • Campaign',
    },
    {
        id: 'check-in',
        entityId: 'studio-b',
        start: new Date(2026, 7, 5, 10, 0),
        end: new Date(2026, 7, 5, 11, 0),
        color: 'primary',
        name: 'Check-in',
        subtitle: '10:00 - 11:00',
        footer: 'Product • Team sync',
    },
    {
        id: 'strategy',
        entityId: 'studio-c',
        start: new Date(2026, 7, 6, 11, 0),
        end: new Date(2026, 7, 6, 12, 30),
        color: 'secondary',
        name: 'Workshop',
        subtitle: '11:00 - 12:30',
        footer: 'Leadership • Strategy',
    },
    {
        id: 'onboarding',
        entityId: 'studio-d',
        start: new Date(2026, 7, 7, 14, 0),
        end: new Date(2026, 7, 7, 15, 30),
        color: 'success',
        name: 'Onboarding',
        subtitle: '14:00 - 15:30',
        footer: 'Success • New clients',
    },
    {
        id: 'qa',
        entityId: 'studio-a',
        start: new Date(2026, 7, 7, 10, 0),
        end: new Date(2026, 7, 7, 11, 0),
        color: 'warning',
        name: 'QA review',
        subtitle: '10:00 - 11:00',
        footer: 'Engineering • Release',
    },
    {
        id: 'launch',
        entityId: 'studio-b',
        start: new Date(2026, 7, 6, 14, 0),
        end: new Date(2026, 7, 6, 15, 30),
        color: 'primary',
        name: 'Rehearsal',
        subtitle: '14:00 - 15:30',
        footer: 'Comms • Launch',
    },
])
const view = ref(ScheduleView.Resource)
</script>

<style scoped>
.landing-dashboard__eyebrow {
    margin: 0;
    color: var(--e-color-primary);
    letter-spacing: 0.12em;
    text-transform: uppercase;
}
</style>