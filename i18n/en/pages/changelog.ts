import type { DocsChangelogSectionKey, DocsWorkflowPageContent } from '~/types/docs'

export const changelogEditorialContent: DocsWorkflowPageContent<DocsChangelogSectionKey> = {
  kind: 'workflow',
  seo: {
    title: 'Changelog | Nuvex UI Docs',
    description:
      'Review release history, migration notes, and unreleased updates for Nuvex UI in a versioned format.',
  },
  hero: {
    title: 'Changelog',
    description:
      'Track what changed by version and keep upgrades predictable with one release source of truth.',
    prerequisitesTitle: 'How to use this page',
    actions: [
      {
        key: 'open-roadmap',
        label: 'Open Roadmap',
      },
      {
        key: 'open-contributing',
        label: 'Open Contributing',
      },
    ],
    prerequisites: [
      'Read entries by version first, then scan migration notes when present.',
      'Use unreleased entries as preview only until they are cut into a version.',
      'Follow release links for PR, issue, and compare context.',
    ],
  },
  sections: {
    'release-policy': {
      title: 'Release policy',
      description:
        'The changelog follows semver and groups changes by release type so upgrade impact is explicit.',
      items: [
        'Each release entry is versioned and dated.',
        'Change categories are stable: added, changed, fixed, removed, deprecated, security, performance, docs.',
        'Breaking impact is flagged per entry and followed by migration guidance when needed.',
      ],
    },
    'latest-release': {
      title: 'Latest release',
      description:
        'Use this section for the newest published version and the current unreleased queue.',
    },
    'release-history': {
      title: 'Release history',
      description:
        'Past releases stay in descending order so teams can audit change flow over time.',
    },
    'migration-notes': {
      title: 'Migration notes',
      description:
        'When behavior or API expectations change, migration notes capture who is affected and required action.',
    },
    'next-steps': {
      title: 'Recommended next steps',
      description:
        'Continue with planning and contribution pages to coordinate upcoming changes and release quality.',
      items: [
        {
          title: 'Roadmap',
          description: 'Review what is planned next and how priorities are grouped.',
        },
        {
          title: 'Contributing',
          description: 'Follow contribution flow for changelog-ready pull requests.',
        },
        {
          title: 'Runtime Theme API',
          description: 'Inspect the theming runtime contract when a changelog entry references theme behavior.',
        },
      ],
    },
  },
}

export const changelogPages = {
  changelog: changelogEditorialContent,
} as const

export default changelogPages
