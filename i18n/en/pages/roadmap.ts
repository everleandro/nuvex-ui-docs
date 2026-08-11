import type { DocsRoadmapSectionKey, DocsWorkflowPageContent } from '~/types/docs'

export const roadmapEditorialContent: DocsWorkflowPageContent<DocsRoadmapSectionKey> = {
  kind: 'workflow',
  seo: {
    title: 'Roadmap | Nuvex UI Docs',
    description:
      'Review near-term and upcoming priorities for Nuvex UI with stable planning scope and feedback loops.',
  },
  hero: {
    title: 'Roadmap',
    description:
      'Use this page to understand planning priorities without tying work to fixed release dates.',
    prerequisitesTitle: 'Before you start',
    actions: [
      {
        key: 'open-changelog',
        label: 'Open Changelog',
      },
      {
        key: 'open-contributing',
        label: 'Open Contributing',
      },
    ],
    prerequisites: [
      'Roadmap priorities can move based on product feedback and maintenance needs.',
      'Near-term items have higher confidence than next and later groups.',
      'Use Changelog to confirm what is already released.',
    ],
  },
  sections: {
    'planning-principles': {
      title: 'Planning principles',
      description:
        'Priorities are set by user impact, maintenance risk, and adoption blockers before feature breadth.',
      items: [
        'Stability and migration safety are prioritized before net-new surface area.',
        'Accessibility and consistency gaps can move up when they block production use.',
        'Cross-cutting docs and tooling tasks are scheduled when they reduce integration errors.',
      ],
    },
    'near-term': {
      title: 'Near term',
      description:
        'High-confidence work currently targeted for the next planning cycle.',
      items: [
        {
          title: 'Community docs baseline',
          description: 'Stabilize Changelog, Roadmap, and Contributing pages with clear maintenance ownership.',
        },
        {
          title: 'Advanced docs consistency',
          description: 'Complete local navigation and section anchor consistency across Advanced pages.',
        },
        {
          title: 'Component docs quality passes',
          description: 'Close content gaps in high-traffic component pages and usage examples.',
        },
      ],
    },
    'next-up': {
      title: 'Next up',
      description:
        'Work that is likely after near-term priorities but can still shift by dependency risk.',
      items: [
        {
          title: 'Roadmap status badges',
          description: 'Expose planned, in-progress, and done status markers directly in Community docs.',
        },
        {
          title: 'Release note automation helpers',
          description: 'Improve changelog update ergonomics through repeatable contributor workflow docs.',
        },
      ],
    },
    later: {
      title: 'Later',
      description:
        'Exploration items that remain valuable but are intentionally not in active planning yet.',
      items: [
        {
          title: 'Community spotlight formats',
          description: 'Evaluate showcasing production usage patterns and ecosystem examples.',
        },
        {
          title: 'Extended governance docs',
          description: 'Expand contribution governance once maintainer workflow is stable and repeatable.',
        },
      ],
    },
    'feedback-loop': {
      title: 'Feedback loop',
      description:
        'Roadmap updates are informed by issue triage, integration friction, and release retrospectives.',
      items: [
        'Capture recurring pain points from issue and PR reviews.',
        'Reorder priorities when unresolved regressions impact adoption.',
        'Reflect scope decisions in Changelog and Contributing guidance.',
      ],
    },
    'next-steps': {
      title: 'Recommended next steps',
      description:
        'Continue with release and contribution pages to connect roadmap plans with delivery and collaboration.',
      items: [
        {
          title: 'Changelog',
          description: 'See what has already shipped and what is currently unreleased.',
        },
        {
          title: 'Contributing',
          description: 'Follow contribution flow for tasks that align with roadmap priorities.',
        },
        {
          title: 'Plugin API',
          description: 'Review an advanced page where current documentation stabilization is being applied.',
        },
      ],
    },
  },
}

export const roadmapPages = {
  roadmap: roadmapEditorialContent,
} as const

export default roadmapPages
