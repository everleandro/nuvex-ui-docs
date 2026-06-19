import { normalizeDocsPath } from '~/utils/docs-path';

export interface NavigationLeafItem {
  title: string;
  to: string;
}

export interface NavigationGroupItem {
  id: string;
  title: string;
  icon: string;
  children: NavigationLeafItem[];
}

export const navigationGroups: NavigationGroupItem[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: 'gettingStarted',
    children: [
      { title: 'Introduction', to: '/docs/getting-started/introduction' },
      { title: 'Installation', to: '/docs/getting-started/installation' },
      { title: 'Quick Start', to: '/docs/getting-started/quick-start' },
      { title: 'Nuxt Integration', to: '/docs/getting-started/nuxt-integration' },
    ],
  },
  {
    id: 'design-system',
    title: 'Design System',
    icon: 'designSystem',
    children: [
      { title: 'Colors', to: '/docs/design-system/colors' },
      { title: 'Typography', to: '/docs/design-system/typography' },
      { title: 'Icons', to: '/docs/design-system/icons' },
      { title: 'Spacing', to: '/docs/design-system/spacing' },
      { title: 'Surfaces', to: '/docs/design-system/surfaces' },
    ],
  },
  {
    id: 'theming',
    title: 'Theming',
    icon: 'theming',
    children: [
      { title: 'Overview', to: '/docs/theming/overview' },
      { title: 'Runtime Theme API', to: '/docs/theming/runtime-theme-api' },
      { title: 'Design Tokens', to: '/docs/theming/design-tokens' },
      { title: 'CSS Variables', to: '/docs/theming/css-variables' },
      { title: 'Light and Dark Themes', to: '/docs/theming/light-and-dark-themes' },
      { title: 'Custom Themes', to: '/docs/theming/custom-themes' },
    ],
  },
  {
    id: 'layout',
    title: 'Layout',
    icon: 'layout',
    children: [
      { title: 'App Shell', to: '/docs/layout/app-shell' },
      { title: 'Bar', to: '/docs/layout/bar' },
      { title: 'Drawer', to: '/docs/layout/drawer' },
      { title: 'Container', to: '/docs/layout/container' },
      { title: 'Divider', to: '/docs/layout/divider' },
      { title: 'Responsive Patterns', to: '/docs/layout/responsive-patterns' },
    ],
  },
  {
    id: 'utilities',
    title: 'Utilities',
    icon: 'utilities',
    children: [
      { title: 'Flexbox', to: '/docs/utilities/flexbox' },
      { title: 'Spacing Helpers', to: '/docs/utilities/spacing-helpers' },
      { title: 'Display Helpers', to: '/docs/utilities/display-helpers' },
      { title: 'Elevation', to: '/docs/utilities/elevation' },
      { title: 'Positioning', to: '/docs/utilities/positioning' },
    ],
  },
  {
    id: 'forms',
    title: 'Forms',
    icon: 'forms',
    children: [
      { title: 'Overview', to: '/docs/forms/overview' },
      { title: 'TextField', to: '/docs/forms/text-field' },
      { title: 'Textarea', to: '/docs/forms/textarea' },
      { title: 'Select', to: '/docs/forms/select' },
      { title: 'Checkbox', to: '/docs/forms/checkbox' },
      { title: 'Radio', to: '/docs/forms/radio' },
      { title: 'Switch', to: '/docs/forms/switch' },
      { title: 'Validation Patterns', to: '/docs/forms/validation-patterns' },
    ],
  },
  {
    id: 'navigation',
    title: 'Navigation',
    icon: 'navigation',
    children: [
      { title: 'List', to: '/docs/navigation/list' },
      { title: 'Menu', to: '/docs/navigation/menu' },
      { title: 'Tabs', to: '/docs/navigation/tabs' },
      { title: 'Routing Patterns', to: '/docs/navigation/routing-patterns' },
    ],
  },
  {
    id: 'feedback-overlays',
    title: 'Feedback and Overlays',
    icon: 'feedbackOverlays',
    children: [
      { title: 'Dialog', to: '/docs/feedback-overlays/dialog' },
      { title: 'Progress', to: '/docs/feedback-overlays/progress' },
      { title: 'Overlay Service', to: '/docs/feedback-overlays/overlay-service' },
      { title: 'Focus and Accessibility', to: '/docs/feedback-overlays/focus-and-accessibility' },
    ],
  },
  {
    id: 'data-scheduling',
    title: 'Data and Scheduling',
    icon: 'dataScheduling',
    children: [
      { title: 'Card', to: '/docs/data-scheduling/card' },
      { title: 'Date Picker', to: '/docs/data-scheduling/date-picker' },
      { title: 'Time Picker', to: '/docs/data-scheduling/time-picker' },
      { title: 'Schedule', to: '/docs/data-scheduling/schedule' },
    ],
  },
  {
    id: 'advanced',
    title: 'Advanced',
    icon: 'advanced',
    children: [
      { title: 'Plugin API', to: '/docs/advanced/plugin-api' },
      { title: 'SSR', to: '/docs/advanced/ssr' },
      { title: 'Composables', to: '/docs/advanced/composables' },
      { title: 'Directives', to: '/docs/advanced/directives' },
      { title: 'Extending the Library', to: '/docs/advanced/extending-the-library' },
    ],
  },
  {
    id: 'community',
    title: 'Community',
    icon: 'communityGroup',
    children: [
      { title: 'Changelog', to: '/docs/community/changelog' },
      { title: 'Roadmap', to: '/docs/community/roadmap' },
      { title: 'Contributing', to: '/docs/community/contributing' },
      { title: 'Sponsors', to: '/docs/community/sponsors' },
    ],
  },
];

export interface ResolvedNavigationItem {
  group: NavigationGroupItem;
  item: NavigationLeafItem;
}

export interface NavigationSiblings {
  previous?: NavigationLeafItem;
  next?: NavigationLeafItem;
}

export const navigationItems = navigationGroups.flatMap((group) =>
  group.children.map((item) => ({
    group,
    item,
  })),
);

export const findNavigationItemByPath = (path: string): ResolvedNavigationItem | undefined => {
  const normalizedPath = normalizeDocsPath(path);
  return navigationItems.find(({ item }) => item.to === normalizedPath);
};

const toTranslationKeySuffix = (path: string): string => {
  return normalizeDocsPath(path)
    .replace(/^\/docs\//, '')
    .replace(/\//g, '.')
    .replace(/-/g, '_');
};

export const getNavigationGroupTitleKey = (group: NavigationGroupItem): string => {
  return `navigation.groups.${group.id.replace(/-/g, '_')}`;
};

export const getNavigationItemTitleKey = (item: NavigationLeafItem): string => {
  return `navigation.items.${toTranslationKeySuffix(item.to)}`;
};

export const findNavigationSiblingsByPath = (path: string): NavigationSiblings => {
  const resolvedItem = findNavigationItemByPath(path);

  if (!resolvedItem) return {};

  const normalizedPath = normalizeDocsPath(path);
  const { children } = resolvedItem.group;
  const currentIndex = children.findIndex((item) => item.to === normalizedPath);

  if (currentIndex < 0) return {};

  return {
    previous: currentIndex > 0 ? children[currentIndex - 1] : undefined,
    next: currentIndex < children.length - 1 ? children[currentIndex + 1] : undefined,
  };
};

export const findOpenGroupIdsByPath = (path: string): string[] => {
  const resolvedItem = findNavigationItemByPath(path);

  if (!resolvedItem) return [];

  return [resolvedItem.group.id];
};