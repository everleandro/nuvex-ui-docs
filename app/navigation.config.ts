import { toCanonicalDocsPath } from '~/utils/docs-navigation-paths';

export interface NavigationLinkItem {
  kind: 'link';
  id: string;
  titleKey: string;
  sectionId: string;
  sectionTitleKey: string;
  to: string;
}

export interface NavigationHeaderItem {
  kind: 'header';
  id: string;
  titleKey: string;
}

export interface NavigationDividerItem {
  kind: 'divider';
  id: string;
}

export type NavigationEntry = NavigationLinkItem | NavigationHeaderItem | NavigationDividerItem;

export interface NavigationGroupItem {
  id: string;
  titleKey: string;
  icon: string;
  entries: NavigationEntry[];
}

const createLink = (
  id: string,
  titleKey: string,
  to: string,
  sectionId: string,
  sectionTitleKey: string,
): NavigationLinkItem => ({
  kind: 'link',
  id,
  titleKey,
  sectionId,
  sectionTitleKey,
  to,
});

const createSimpleGroup = (
  id: string,
  titleKey: string,
  icon: string,
  links: Array<{ id: string; titleKey: string; to: string }>,
): NavigationGroupItem => ({
  id,
  titleKey,
  icon,
  entries: links.map((link) => createLink(link.id, link.titleKey, link.to, id, titleKey)),
});

const componentGroupTitleKey = 'navigation.groups.components';

export const navigationGroups: NavigationGroupItem[] = [
  createSimpleGroup('getting-started', 'navigation.groups.getting_started', 'gettingStarted', [
    { id: 'introduction', titleKey: 'navigation.items.getting_started.introduction', to: '/docs/getting-started/introduction' },
    { id: 'installation', titleKey: 'navigation.items.getting_started.installation', to: '/docs/getting-started/installation' },
    { id: 'quick-start', titleKey: 'navigation.items.getting_started.quick_start', to: '/docs/getting-started/quick-start' },
    { id: 'nuxt-integration', titleKey: 'navigation.items.getting_started.nuxt_integration', to: '/docs/getting-started/nuxt-integration' },
  ]),
  createSimpleGroup('design-system', 'navigation.groups.design_system', 'designSystem', [
    { id: 'colors', titleKey: 'navigation.items.design_system.colors', to: '/docs/design-system/colors' },
    { id: 'typography', titleKey: 'navigation.items.design_system.typography', to: '/docs/design-system/typography' },
    { id: 'icons', titleKey: 'navigation.items.design_system.icons', to: '/docs/design-system/icons' },
    { id: 'spacing', titleKey: 'navigation.items.design_system.spacing', to: '/docs/design-system/spacing' },
    { id: 'surfaces', titleKey: 'navigation.items.design_system.surfaces', to: '/docs/design-system/surfaces' },
  ]),
  createSimpleGroup('theming', 'navigation.groups.theming', 'theming', [
    { id: 'overview', titleKey: 'navigation.items.theming.overview', to: '/docs/theming/overview' },
    { id: 'runtime-theme-api', titleKey: 'navigation.items.theming.runtime_theme_api', to: '/docs/theming/runtime-theme-api' },
    { id: 'design-tokens', titleKey: 'navigation.items.theming.design_tokens', to: '/docs/theming/design-tokens' },
    { id: 'css-variables', titleKey: 'navigation.items.theming.css_variables', to: '/docs/theming/css-variables' },
    { id: 'light-and-dark-themes', titleKey: 'navigation.items.theming.light_and_dark_themes', to: '/docs/theming/light-and-dark-themes' },
    { id: 'custom-themes', titleKey: 'navigation.items.theming.custom_themes', to: '/docs/theming/custom-themes' },
  ]),
  {
    id: 'components',
    titleKey: componentGroupTitleKey,
    icon: 'components',
    entries: [
      { kind: 'header', id: 'forms-header', titleKey: 'navigation.subgroups.forms' },
      createLink('forms-overview', 'navigation.items.forms.overview', '/docs/component/forms/overview', 'forms', 'navigation.subgroups.forms'),
      createLink('forms-button', 'navigation.items.forms.button', '/docs/component/forms/button', 'forms', 'navigation.subgroups.forms'),
      createLink('forms-text-field', 'navigation.items.forms.text_field', '/docs/component/forms/text-field', 'forms', 'navigation.subgroups.forms'),
      createLink('forms-textarea', 'navigation.items.forms.textarea', '/docs/component/forms/textarea', 'forms', 'navigation.subgroups.forms'),
      createLink('forms-select', 'navigation.items.forms.select', '/docs/component/forms/select', 'forms', 'navigation.subgroups.forms'),
      createLink('forms-checkbox', 'navigation.items.forms.checkbox', '/docs/component/forms/checkbox', 'forms', 'navigation.subgroups.forms'),
      createLink('forms-radio', 'navigation.items.forms.radio', '/docs/component/forms/radio', 'forms', 'navigation.subgroups.forms'),
      createLink('forms-switch', 'navigation.items.forms.switch', '/docs/component/forms/switch', 'forms', 'navigation.subgroups.forms'),
      createLink('forms-validation-patterns', 'navigation.items.forms.validation_patterns', '/docs/component/forms/validation-patterns', 'forms', 'navigation.subgroups.forms'),
      { kind: 'divider', id: 'forms-divider' },
      { kind: 'header', id: 'navigation-header', titleKey: 'navigation.subgroups.navigation' },
      createLink('navigation-list', 'navigation.items.navigation.list', '/docs/component/navigation/list', 'navigation', 'navigation.subgroups.navigation'),
      createLink('navigation-menu', 'navigation.items.navigation.menu', '/docs/component/navigation/menu', 'navigation', 'navigation.subgroups.navigation'),
      createLink('navigation-tabs', 'navigation.items.navigation.tabs', '/docs/component/navigation/tabs', 'navigation', 'navigation.subgroups.navigation'),
      createLink('navigation-routing-patterns', 'navigation.items.navigation.routing_patterns', '/docs/component/navigation/routing-patterns', 'navigation', 'navigation.subgroups.navigation'),
      { kind: 'divider', id: 'navigation-divider' },
      { kind: 'header', id: 'layout-header', titleKey: 'navigation.subgroups.layout' },
      createLink('layout-app-shell', 'navigation.items.layout.app_shell', '/docs/component/layout/app-shell', 'layout', 'navigation.subgroups.layout'),
      createLink('layout-bar', 'navigation.items.layout.bar', '/docs/component/layout/bar', 'layout', 'navigation.subgroups.layout'),
      createLink('layout-drawer', 'navigation.items.layout.drawer', '/docs/component/layout/drawer', 'layout', 'navigation.subgroups.layout'),
      createLink('layout-container', 'navigation.items.layout.container', '/docs/component/layout/container', 'layout', 'navigation.subgroups.layout'),
      createLink('layout-divider', 'navigation.items.layout.divider', '/docs/component/layout/divider', 'layout', 'navigation.subgroups.layout'),
      createLink('layout-responsive-patterns', 'navigation.items.layout.responsive_patterns', '/docs/component/layout/responsive-patterns', 'layout', 'navigation.subgroups.layout'),
      { kind: 'divider', id: 'layout-divider-separator' },
      { kind: 'header', id: 'feedback-overlays-header', titleKey: 'navigation.subgroups.feedback_overlays' },
      createLink('feedback-overlays-dialog', 'navigation.items.feedback_overlays.dialog', '/docs/component/feedback-overlays/dialog', 'feedback-overlays', 'navigation.subgroups.feedback_overlays'),
      createLink('feedback-overlays-progress', 'navigation.items.feedback_overlays.progress', '/docs/component/feedback-overlays/progress', 'feedback-overlays', 'navigation.subgroups.feedback_overlays'),
      createLink('feedback-overlays-overlay-service', 'navigation.items.feedback_overlays.overlay_service', '/docs/component/feedback-overlays/overlay-service', 'feedback-overlays', 'navigation.subgroups.feedback_overlays'),
      createLink('feedback-overlays-focus-and-accessibility', 'navigation.items.feedback_overlays.focus_and_accessibility', '/docs/component/feedback-overlays/focus-and-accessibility', 'feedback-overlays', 'navigation.subgroups.feedback_overlays'),
      { kind: 'divider', id: 'feedback-overlays-divider' },
      { kind: 'header', id: 'data-scheduling-header', titleKey: 'navigation.subgroups.data_scheduling' },
      createLink('data-scheduling-card', 'navigation.items.data_scheduling.card', '/docs/component/data-scheduling/card', 'data-scheduling', 'navigation.subgroups.data_scheduling'),
      createLink('data-scheduling-date-picker', 'navigation.items.data_scheduling.date_picker', '/docs/component/data-scheduling/date-picker', 'data-scheduling', 'navigation.subgroups.data_scheduling'),
      createLink('data-scheduling-time-picker', 'navigation.items.data_scheduling.time_picker', '/docs/component/data-scheduling/time-picker', 'data-scheduling', 'navigation.subgroups.data_scheduling'),
      createLink('data-scheduling-schedule', 'navigation.items.data_scheduling.schedule', '/docs/component/data-scheduling/schedule', 'data-scheduling', 'navigation.subgroups.data_scheduling'),
    ],
  },
  createSimpleGroup('utilities', 'navigation.groups.utilities', 'utilities', [
    { id: 'flexbox', titleKey: 'navigation.items.utilities.flexbox', to: '/docs/utilities/flexbox' },
    { id: 'spacing-helpers', titleKey: 'navigation.items.utilities.spacing_helpers', to: '/docs/utilities/spacing-helpers' },
    { id: 'display-helpers', titleKey: 'navigation.items.utilities.display_helpers', to: '/docs/utilities/display-helpers' },
    { id: 'elevation', titleKey: 'navigation.items.utilities.elevation', to: '/docs/utilities/elevation' },
    { id: 'positioning', titleKey: 'navigation.items.utilities.positioning', to: '/docs/utilities/positioning' },
  ]),
  createSimpleGroup('advanced', 'navigation.groups.advanced', 'advanced', [
    { id: 'plugin-api', titleKey: 'navigation.items.advanced.plugin_api', to: '/docs/advanced/plugin-api' },
    { id: 'ssr', titleKey: 'navigation.items.advanced.ssr', to: '/docs/advanced/ssr' },
    { id: 'composables', titleKey: 'navigation.items.advanced.composables', to: '/docs/advanced/composables' },
    { id: 'directives', titleKey: 'navigation.items.advanced.directives', to: '/docs/advanced/directives' },
    { id: 'extending-the-library', titleKey: 'navigation.items.advanced.extending_the_library', to: '/docs/advanced/extending-the-library' },
  ]),
  createSimpleGroup('community', 'navigation.groups.community', 'communityGroup', [
    { id: 'changelog', titleKey: 'navigation.items.community.changelog', to: '/docs/community/changelog' },
    { id: 'roadmap', titleKey: 'navigation.items.community.roadmap', to: '/docs/community/roadmap' },
    { id: 'contributing', titleKey: 'navigation.items.community.contributing', to: '/docs/community/contributing' },
    { id: 'sponsors', titleKey: 'navigation.items.community.sponsors', to: '/docs/community/sponsors' },
  ]),
];

export interface ResolvedNavigationItem {
  group: NavigationGroupItem;
  item: NavigationLinkItem;
}

export interface NavigationSiblings {
  previous?: NavigationLinkItem;
  next?: NavigationLinkItem;
}

const isNavigationLinkItem = (entry: NavigationEntry): entry is NavigationLinkItem => entry.kind === 'link';

const getGroupLinks = (group: NavigationGroupItem): NavigationLinkItem[] => group.entries.filter(isNavigationLinkItem);

export const navigationItems = navigationGroups.flatMap((group) =>
  getGroupLinks(group).map((item) => ({
    group,
    item,
  })),
);

export const findNavigationItemByPath = (path: string): ResolvedNavigationItem | undefined => {
  const normalizedPath = toCanonicalDocsPath(path);
  return navigationItems.find(({ item }) => item.to === normalizedPath);
};

export const getNavigationGroupTitleKey = (group: NavigationGroupItem): string => {
  return group.titleKey;
};

export const getNavigationItemSectionTitleKey = (item: NavigationLinkItem): string => {
  return item.sectionTitleKey;
};

export const getNavigationItemTitleKey = (item: NavigationLinkItem): string => {
  return item.titleKey;
};

export const findNavigationSiblingsByPath = (path: string): NavigationSiblings => {
  const resolvedItem = findNavigationItemByPath(path);

  if (!resolvedItem) return {};

  const normalizedPath = toCanonicalDocsPath(path);
  const sectionLinks = getGroupLinks(resolvedItem.group).filter((item) => item.sectionId === resolvedItem.item.sectionId);
  const currentIndex = sectionLinks.findIndex((item) => item.to === normalizedPath);

  if (currentIndex < 0) return {};

  return {
    previous: currentIndex > 0 ? sectionLinks[currentIndex - 1] : undefined,
    next: currentIndex < sectionLinks.length - 1 ? sectionLinks[currentIndex + 1] : undefined,
  };
};

export const findOpenGroupIdsByPath = (path: string): string[] => {
  const resolvedItem = findNavigationItemByPath(path);

  if (!resolvedItem) return [];

  return [resolvedItem.group.id];
};