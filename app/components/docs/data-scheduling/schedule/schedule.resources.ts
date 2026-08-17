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
  count = 9,
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

  return take(
    [
      createEvent(
        {
          id: "planning",
          entityId: "studio-a",
          start: getRelativeDate(0, 9, 0),
          end: getRelativeDate(0, 10, 30),
          color: "teal-200",
        },
        labels.planning,
      ),
      createEvent(
        {
          id: "research",
          entityId: "studio-a",
          start: getRelativeDate(1, 15, 0),
          end: getRelativeDate(1, 16, 0),
          color: "green-200",
        },
        labels.research,
      ),
      createEvent(
        {
          id: "design-review",
          entityId: "studio-a",
          start: getRelativeDate(2, 11, 0),
          end: getRelativeDate(2, 13, 0),
          color: "lime-200",
        },
        labels.designReview,
      ),
      createEvent(
        {
          id: "handoff",
          entityId: "studio-a",
          start: getRelativeDate(-1, 10, 0),
          end: getRelativeDate(-1, 11, 0),
          color: "orange-200",
        },
        labels.handoff,
      ),
      createEvent(
        {
          id: "customer-interview",
          entityId: "studio-a",
          start: getRelativeDate(0, 13, 0),
          end: getRelativeDate(0, 14, 0),
          color: "amber-200",
        },
        labels.customerInterview,
      ),
      createEvent(
        {
          id: "roadmap-review",
          entityId: "review-room",
          start: getRelativeDate(1, 14, 0),
          end: getRelativeDate(1, 15, 30),
          color: "neutral-200",
        },
        labels.roadmapReview,
      ),
      createEvent(
        {
          id: "architecture-sync",
          entityId: "studio-b",
          start: getRelativeDate(2, 10, 0),
          end: getRelativeDate(2, 11, 0),
          color: "purple-200",
        },
        labels.architectureSync,
      ),
      createEvent(
        {
          id: "usability-test",
          entityId: "review-room",
          start: getRelativeDate(-2, 9, 30),
          end: getRelativeDate(-2, 11, 0),
          color: "brown-200",
        },
        labels.usabilityTest,
      ),
      createEvent(
        {
          id: "release-planning",
          entityId: "studio-b",
          start: getRelativeDate(3, 14, 0),
          end: getRelativeDate(3, 15, 30),
          color: "blue-200",
        },
        labels.releasePlanning,
      ),
    ],
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
