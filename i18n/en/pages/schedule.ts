import type { DocsComponentPageContent } from '~/types/docs'

export const scheduleComponentContent: DocsComponentPageContent = {
  kind: 'component',
  seo: {
    title: 'Schedule',
    description: 'Schedule component documentation for Nuvex UI with calendar composition, slots, Dialog integration, accessibility, and API reference.',
  },
  hero: {
    title: 'Schedule',
    descriptionHtml:
      "The <code class='docs-inline-code'>ESchedule</code> component organizes time-based events across calendar and resource views. It combines date navigation, selectable spaces, interactive time slots, and extensible event rendering for scheduling workflows.",
  },
  sections: [
    {
      key: 'usage-design',
      title: 'Usage & design',
      descriptionHtml:
        "Start with a date through <code class='docs-inline-code'>v-model</code>, then provide the spaces and events to display. Each event links to a space through <code class='docs-inline-code'>entityId</code>; the schedule handles navigation and time-based layout.",
    },
    {
      key: 'without-toolbar',
      title: 'Without toolbar',
      descriptionHtml:
        "Use the <code class='docs-inline-code'>hide-toolbar</code> prop when schedule navigation and controls are provided elsewhere in the interface.",
    },
    {
      key: 'slots',
      title: 'Slots',
      descriptionHtml:
        "Customize focused regions without replacing the schedule layout. <code class='docs-inline-code'>#toolbar</code> controls navigation, <code class='docs-inline-code'>#event</code> controls event content, and <code class='docs-inline-code'>#empty-slot</code> controls available intervals.",
    },
    {
      key: 'integration',
      title: 'Integration',
      descriptionHtml:
        "Combine <code class='docs-inline-code'>ESchedule</code> with <code class='docs-inline-code'>EDialog</code> to create and edit events in context. Empty intervals provide the initial date and time; existing events provide the model to update.",
    },
    {
      key: 'accessibility',
      title: 'Accessibility',
      descriptionHtml:
        "The schedule exposes a named region and renders default events and empty intervals as native buttons. Preserve those keyboard semantics in custom slots, announce workflow results, and let dialogs restore focus to the originating control.",
    },
    {
      key: 'props',
      title: 'API reference',
      description: 'Reference the verified public props, slots, and emitted events for ESchedule.',
    },
  ],
  labels: {
    controls: [],
    scheduleSpaces: {
      studioA: 'Studio A',
      studioB: 'Studio B',
      reviewRoom: 'Review room',
    },
    scheduleEvents: {
      planning: { name: 'Sprint planning', footer: 'Product team' },
      research: { name: 'Research synthesis', footer: 'Research team' },
      designReview: { name: 'Design review', footer: 'Design team' },
      handoff: { name: 'Engineering handoff', footer: 'Engineering team' },
      customerInterview: { name: 'Customer interview', footer: 'Research team' },
      roadmapReview: { name: 'Roadmap review', footer: 'Product team' },
      architectureSync: { name: 'Architecture sync', footer: 'Engineering team' },
      usabilityTest: { name: 'Usability test', footer: 'Research team' },
      releasePlanning: { name: 'Release planning', footer: 'Product team' },
    },
    scheduleText: {
      toolbarSlotTitle: 'Toolbar slot',
      toolbarSlotBody: 'Build custom period navigation from the localized labels and callbacks exposed by the slot scope.',
      eventSlotTitle: 'Event slot',
      eventSlotBody: 'Change the information hierarchy inside events while preserving a real interactive control and readable supporting text.',
      emptySlotTitle: 'Empty-slot slot',
      emptySlotBody: 'Turn available intervals into explicit creation actions. Keep each replacement keyboard reachable and provide a meaningful accessible name.',
      chooseSlot: 'Choose an available interval to create an event.',
      createAt: 'Create event at',
      selectedSlot: 'Selected interval:',
      add: 'Add',
      createEvent: 'Create event',
      editEvent: 'Edit event',
      dialogDescription: 'Set a name and time range, then save the event to the schedule.',
      eventName: 'Event name',
      startTime: 'Start time',
      endTime: 'End time',
      cancel: 'Cancel',
      save: 'Save event',
      keyboardHint: 'Use Tab to reach events and available intervals, then press Enter or Space to activate them.',
      eventSelected: 'Selected event',
      slotSelected: 'Selected available interval',
      apiPropsTitle: 'ESchedule props',
      apiSlotsTitle: 'Slots',
      apiEventsTitle: 'Events',
    },
  },
}

export const schedulePages = {
  schedule: scheduleComponentContent,
} as const

export default schedulePages