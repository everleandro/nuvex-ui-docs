import type { DocsContributingSectionKey, DocsWorkflowPageContent } from '~/types/docs'

export const contributingEditorialContent: DocsWorkflowPageContent<DocsContributingSectionKey> = {
  kind: 'workflow',
  seo: {
    title: 'Contributing',
    description:
      'Follow a guided, repeatable contribution flow with practical command and changelog examples.',
  },
  hero: {
    title: 'Contributing',
    description:
      'Use this page as a step-by-step path to contribute with review-ready pull requests.',
    prerequisitesTitle: 'Before you start',
    actions: [
      {
        key: 'open-roadmap',
        label: 'Open Roadmap',
      },
      {
        key: 'open-changelog',
        label: 'Open Changelog',
      },
    ],
    prerequisites: [
      'Align your work with active roadmap priorities when possible.',
      'Check changelog and open issues before duplicating effort.',
      'Keep pull requests small enough for fast review.',
    ],
  },
  sections: {
    'contribution-paths': {
      title: 'Contribution paths',
      description:
        'Choose one path first so your contribution scope stays clear during implementation and review.',
      items: [
        {
          title: 'Docs improvements',
          description: 'Fix content gaps, navigation issues, and example clarity where users are blocked.',
        },
        {
          title: 'Bug fixes',
          description: 'Resolve regressions or incorrect behavior with a reproducible before and after.',
        },
        {
          title: 'Feature changes',
          description: 'Propose and implement scoped enhancements aligned with roadmap direction.',
        },
      ],
    },
    'local-setup': {
      title: 'Local setup',
      description:
        'Use a reproducible local flow before coding so reviewers can validate your change quickly.',
      items: [
        'Fork and clone the repository you are targeting.',
        'Create a dedicated branch from the default branch.',
        'Run install and build steps, then confirm tests or checks relevant to your scope.',
      ],
    },
    'pull-request-flow': {
      title: 'Pull request flow',
      description:
        'Follow this sequence to keep context visible and reduce review back-and-forth.',
      items: [
        'Open one branch per topic and keep commit messages focused on intent.',
        'Describe problem, solution, and validation evidence in the PR body.',
        'Link related issues or prior discussion when your change depends on them.',
      ],
    },
    'review-checklist': {
      title: 'Review checklist',
      description:
        'Use this checklist before requesting review to reduce avoidable feedback loops.',
      items: [
        'Scope is clear and limited to one main objective.',
        'User-facing docs are updated when behavior changed.',
        'Build or tests for affected areas were executed and passed.',
        'No unrelated formatting or refactors were mixed into the PR.',
      ],
    },
    'changelog-policy': {
      title: 'Changelog policy',
      description:
        'Every user-impacting contribution should add or update a changelog entry in the unreleased section.',
      items: [
        'Use concise summaries with clear user impact.',
        'Mark breaking impact explicitly when applicable.',
        'Include issue or PR references when available.',
      ],
    },
    'next-steps': {
      title: 'Recommended next steps',
      description:
        'Continue with planning and release pages to connect contribution work with roadmap and shipped output.',
      items: [
        {
          title: 'Roadmap',
          description: 'Confirm current priorities before opening larger contribution scope.',
        },
        {
          title: 'Changelog',
          description: 'Review release format and add unreleased entries consistently.',
        },
        {
          title: 'Plugin API',
          description: 'Use an advanced page as a concrete reference for docs contribution style.',
        },
      ],
    },
  },
}

export const contributingPages = {
  contributing: contributingEditorialContent,
} as const

export default contributingPages
