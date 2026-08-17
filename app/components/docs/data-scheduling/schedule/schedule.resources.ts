import type { ScheduleEvent, ScheduleSpace } from "nuvex-ui";
import { useI18n } from "vue-i18n";
import { useDocsComponentI18nContent } from "~/composables/useDocsI18nContent";

export type ScheduleResourceLabels = Record<string, string>;

interface ScheduleEventContent {
  name: string;
  footer: string;
}

type ScheduleEventKey =
  | "planning"
  | "research"
  | "designReview"
  | "handoff"
  | "customerInterview"
  | "roadmapReview"
  | "architectureSync"
  | "usabilityTest"
  | "releasePlanning";

type ScheduleEventContentMap = Record<ScheduleEventKey, ScheduleEventContent>;

interface ScheduleResourceOptions {
  spaceCount?: number;
  eventCount?: number;
}

const take = <Resource>(resources: Resource[], count: number) =>
  resources.slice(0, Math.max(0, count));

const getRequiredLabelGroup = <LabelGroup>(
  value: unknown,
  key: string,
): LabelGroup => {
  if (!value || Array.isArray(value))
    throw new Error(`Schedule label group missing: ${key}`);
  return value as LabelGroup;
};

export const getScheduleSpaces = (
  labels: ScheduleResourceLabels,
  count = 3,
): ScheduleSpace[] =>
  take(
    [
      { id: "studio-a", label: labels.studioA ?? "" },
      { id: "studio-b", label: labels.studioB ?? "" },
      { id: "review-room", label: labels.reviewRoom ?? "" },
    ],
    count,
  );

const getRelativeDate = (dayOffset: number, hour: number, minute = 0) => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + dayOffset);
  date.setHours(hour, minute, 0, 0);
  return date;
};

export const getScheduleEvents = (
  labels: ScheduleEventContentMap,
  locale: string,
  count = 18,
): ScheduleEvent[] => {
  const createEvent = (
    event: Omit<ScheduleEvent, "name" | "subtitle" | "footer">,
    content: ScheduleEventContent,
  ) => ({
    ...event,
    name: content.name,
    subtitle: formatEventRange(event.start, event.end, locale),
    footer: content.footer,
  });

  const eventSeries = [
    { id: "planning", entityId: "studio-a", dayOffset: 0, startHour: 9, startMinute: 0, endHour: 10, endMinute: 30, color: "teal-200", label: labels.planning },
    { id: "research", entityId: "studio-a", dayOffset: -2, startHour: 11, startMinute: 0, endHour: 12, endMinute: 0, color: "green-200", label: labels.research },
    { id: "design-review", entityId: "studio-a", dayOffset: 2, startHour: 14, startMinute: 0, endHour: 16, endMinute: 0, color: "lime-200", label: labels.designReview },
    { id: "handoff", entityId: "studio-a", dayOffset: -5, startHour: 10, startMinute: 0, endHour: 11, endMinute: 0, color: "orange-200", label: labels.handoff },
    { id: "customer-interview", entityId: "studio-a", dayOffset: 6, startHour: 13, startMinute: 0, endHour: 14, endMinute: 0, color: "amber-200", label: labels.customerInterview },
    { id: "roadmap-review", entityId: "review-room", dayOffset: 3, startHour: 10, startMinute: 0, endHour: 11, endMinute: 30, color: "neutral-200", label: labels.roadmapReview },
    { id: "architecture-sync", entityId: "studio-b", dayOffset: -4, startHour: 15, startMinute: 0, endHour: 16, endMinute: 0, color: "purple-200", label: labels.architectureSync },
    { id: "usability-test", entityId: "review-room", dayOffset: 7, startHour: 9, startMinute: 30, endHour: 11, endMinute: 0, color: "brown-200", label: labels.usabilityTest },
    { id: "release-planning", entityId: "studio-b", dayOffset: 5, startHour: 14, startMinute: 0, endHour: 15, endMinute: 30, color: "blue-200", label: labels.releasePlanning },
    { id: "planning-2", entityId: "studio-a", dayOffset: 0, startHour: 8, startMinute: 0, endHour: 9, endMinute: 0, color: "teal-200", label: labels.planning },
    { id: "research-2", entityId: "studio-a", dayOffset: 0, startHour: 15, startMinute: 30, endHour: 16, endMinute: 30, color: "green-200", label: labels.research },
    { id: "design-review-2", entityId: "studio-a", dayOffset: 1, startHour: 11, startMinute: 0, endHour: 12, endMinute: 30, color: "lime-200", label: labels.designReview },
    { id: "handoff-2", entityId: "studio-b", dayOffset: -1, startHour: 14, startMinute: 0, endHour: 15, endMinute: 0, color: "orange-200", label: labels.handoff },
    { id: "customer-interview-2", entityId: "studio-b", dayOffset: 4, startHour: 9, startMinute: 30, endHour: 10, endMinute: 30, color: "amber-200", label: labels.customerInterview },
    { id: "roadmap-review-2", entityId: "review-room", dayOffset: -6, startHour: 13, startMinute: 0, endHour: 14, endMinute: 30, color: "neutral-200", label: labels.roadmapReview },
    { id: "architecture-sync-2", entityId: "studio-b", dayOffset: -3, startHour: 10, startMinute: 0, endHour: 11, endMinute: 0, color: "purple-200", label: labels.architectureSync },
    { id: "usability-test-2", entityId: "review-room", dayOffset: 1, startHour: 15, startMinute: 0, endHour: 16, endMinute: 30, color: "brown-200", label: labels.usabilityTest },
    { id: "release-planning-2", entityId: "studio-a", dayOffset: 7, startHour: 16, startMinute: 0, endHour: 17, endMinute: 30, color: "blue-200", label: labels.releasePlanning },
  ];

  return take(
    eventSeries.map(({ id, entityId, dayOffset, startHour, startMinute, endHour, endMinute, color, label }) =>
      createEvent(
        {
          id,
          entityId,
          start: getRelativeDate(dayOffset, startHour, startMinute),
          end: getRelativeDate(dayOffset, endHour, endMinute),
          color,
        },
        label,
      ),
    ),
    count,
  );
};

const formatEventRange = (
  start: Date | string,
  end: Date | string,
  locale: string,
) => {
  const formatter = new Intl.DateTimeFormat(locale, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return `${formatter.format(new Date(start))} - ${formatter.format(new Date(end))}`;
};

export const useScheduleResources = (options: ScheduleResourceOptions = {}) => {
  const { locale } = useI18n();
  const content = useDocsComponentI18nContent("pages.schedule.schedule");
  const labels = computed<ScheduleResourceLabels>(() => {
    const scheduleText = content.value.labels.scheduleText;
    return scheduleText && !Array.isArray(scheduleText) ? scheduleText : {};
  });
  const spaceLabels = computed(() =>
    getRequiredLabelGroup<ScheduleResourceLabels>(
      content.value.labels.scheduleSpaces,
      "scheduleSpaces",
    ),
  );
  const eventLabels = computed(() =>
    getRequiredLabelGroup<ScheduleEventContentMap>(
      content.value.labels.scheduleEvents,
      "scheduleEvents",
    ),
  );
  const spaces = computed(() =>
    getScheduleSpaces(spaceLabels.value, options.spaceCount),
  );
  const events = computed(() =>
    getScheduleEvents(eventLabels.value, locale.value, options.eventCount),
  );

  return { labels, spaces, events };
};
