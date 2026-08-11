<template>
  <article class="docs-page">
    <DocsPageHero :title="content.hero.title" :description="content.hero.description" :actions="heroActions" />

    <DocsSection :title="content.hero.prerequisitesTitle">
      <ECard elevation="sm" color="primary" tonal>
        <ul class="pl-5">
          <li v-for="(item, index) in prerequisites" :key="item"
            :class="index === prerequisites.length - 1 ? 'mb-0' : 'mb-2'">
            {{ item }}
          </li>
        </ul>
      </ECard>
    </DocsSection>

    <DocsSection :id="releasePolicySection.key" :title="releasePolicySection.title"
      :description="releasePolicySection.description">
      <ECard elevation="sm">
        <ol class="pl-5 mb-0">
          <li v-for="(item, index) in releasePolicySection.items" :key="item"
            :class="index === releasePolicySection.items.length - 1 ? 'mb-0' : 'mb-2'">
            {{ item }}
          </li>
        </ol>
      </ECard>
    </DocsSection>

    <DocsSection :id="latestReleaseSection.key" :title="latestReleaseSection.title"
      :description="latestReleaseSection.description">
      <ECard v-if="latestRelease" outlined>
        <template #title>
          {{ `v${latestRelease.version}` }}
        </template>
        <template #description>
          {{ formatDate(latestRelease.date) }} · {{ latestRelease.status }}
        </template>

        <div v-if="latestRelease.highlights.length" class="mt-4">
          <h4 class="text-subtitle-2 mb-2">{{ uiLabels.highlights }}</h4>
          <ul class="pl-5 mb-0">
            <li v-for="highlight in latestRelease.highlights" :key="highlight.id" class="mb-2">
              <strong>{{ highlight.title }}:</strong>
              {{ highlight.summary }}
            </li>
          </ul>
        </div>

        <div v-for="group in latestReleaseChangesByType" :key="group.type" class="mt-4">
          <h4 class="text-subtitle-2 mb-2">{{ changeTypeLabel(group.type) }}</h4>
          <ul class="pl-5 mb-0">
            <li v-for="change in group.items" :key="change.id" class="mb-2">
              {{ change.summary }}
              <span v-if="change.breaking" class="font-weight-medium">({{ uiLabels.breaking }})</span>
            </li>
          </ul>
        </div>
      </ECard>

      <ECard v-else elevation="sm" tonal>
        {{ uiLabels.noReleasedVersion }}
      </ECard>

      <ECard class="mt-4" outlined>
        <template #title>
          {{ changelogData.unreleased.label }}
        </template>
        <template #description>
          {{ `${uiLabels.since} ${formatDate(changelogData.unreleased.since)}` }}
        </template>

        <ul class="pl-5 mb-0 mt-4">
          <li v-for="change in changelogData.unreleased.changes" :key="change.id" class="mb-2">
            {{ change.summary }}
          </li>
        </ul>
      </ECard>
    </DocsSection>

    <DocsSection :id="releaseHistorySection.key" :title="releaseHistorySection.title"
      :description="releaseHistorySection.description">
      <ECard v-for="release in releaseHistory" :key="release.version" class="mb-4" outlined>
        <template #title>
          {{ `v${release.version}` }}
        </template>
        <template #description>
          {{ formatDate(release.date) }}
        </template>

        <div class="d-flex flex-wrap gap-3 mt-3">
          <span class="docs-inline-code">{{ `${uiLabels.changes}: ${release.changes.length}` }}</span>
          <span class="docs-inline-code">{{ `${uiLabels.highlights}: ${release.highlights.length}` }}</span>
          <span class="docs-inline-code">{{ `${uiLabels.migrations}: ${release.migrations.length}` }}</span>
        </div>
      </ECard>
    </DocsSection>

    <DocsSection :id="migrationNotesSection.key" :title="migrationNotesSection.title"
      :description="migrationNotesSection.description">
      <ECard v-if="latestReleaseMigrations.length === 0" elevation="sm" tonal>
        {{ uiLabels.noMigrations }}
      </ECard>

      <ECard v-for="migration in latestReleaseMigrations" :key="migration.id" class="mb-4" outlined
        :title="migration.title" :description="`${uiLabels.impact}: ${migration.impact}`">
        <p class="mb-2"><strong>{{ uiLabels.whoIsAffected }}:</strong> {{ migration.whoIsAffected }}</p>
        <p class="mb-0"><strong>{{ uiLabels.actionRequired }}:</strong> {{ migration.actionRequired }}</p>
      </ECard>
    </DocsSection>

    <DocsSection :id="nextStepsSection.key" :title="nextStepsSection.title" :description="nextStepsSection.description">
      <ERow dense>
        <ECol v-for="item in nextStepsSection.items" :key="item.to" cols="12" md="6">
          <NuxtLink :to="withLocalePrefix(item.to, locale)" class="docs-page__card-link no-underline">
            <ECard v-ripple outlined :title="item.title" :description="item.description" class="full-height" />
          </NuxtLink>
        </ECol>
      </ERow>
    </DocsSection>
  </article>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import type {
  DocsChangelogSectionKey,
  DocsEditorialGridItem,
  DocsPageAction,
  DocsWorkflowPageContent,
} from '~/types/docs'
import { withLocalePrefix } from '~/utils/locale-path'
import changelogDataRaw from '~~/data/changelog/releases.json'

type ChangeType = 'added' | 'changed' | 'fixed' | 'removed' | 'deprecated' | 'security' | 'performance' | 'docs'

type ChangelogChange = {
  id: string
  type: ChangeType
  area: string
  summary: string
  breaking: boolean
}

type ChangelogMigration = {
  id: string
  title: string
  impact: 'low' | 'medium' | 'high'
  whoIsAffected: string
  actionRequired: string
}

type ChangelogHighlight = {
  id: string
  title: string
  summary: string
  area: string
  breaking: boolean
}

type ChangelogRelease = {
  version: string
  date: string
  status: 'released' | 'yanked'
  tag: string
  highlights: ChangelogHighlight[]
  changes: ChangelogChange[]
  migrations: ChangelogMigration[]
}

type ChangelogData = {
  schemaVersion: string
  unreleased: {
    since: string
    label: string
    changes: ChangelogChange[]
  }
  releases: ChangelogRelease[]
}

const changelogData = changelogDataRaw as ChangelogData

const { locale } = useI18n()

const editorialContent = useDocsI18nContent<DocsWorkflowPageContent<DocsChangelogSectionKey>>('pages.changelog.changelog')
const content = computed(() => editorialContent.value)
const prerequisites = computed(() => content.value.hero.prerequisites ?? [])

const changeTypeLabel = (type: ChangeType) => {
  const labels = locale.value.startsWith('es')
    ? {
      added: 'Added',
      changed: 'Changed',
      fixed: 'Fixed',
      removed: 'Removed',
      deprecated: 'Deprecated',
      security: 'Security',
      performance: 'Performance',
      docs: 'Docs',
    }
    : {
      added: 'Added',
      changed: 'Changed',
      fixed: 'Fixed',
      removed: 'Removed',
      deprecated: 'Deprecated',
      security: 'Security',
      performance: 'Performance',
      docs: 'Docs',
    }

  return labels[type]
}

const uiLabels = computed(() => (
  locale.value.startsWith('es')
    ? {
      highlights: 'Highlights',
      breaking: 'breaking',
      noReleasedVersion: 'Aun no hay una version publicada.',
      since: 'Desde',
      changes: 'Cambios',
      migrations: 'Migraciones',
      noMigrations: 'No hay notas de migracion en el ultimo release.',
      impact: 'Impacto',
      whoIsAffected: 'A quien afecta',
      actionRequired: 'Accion requerida',
    }
    : {
      highlights: 'Highlights',
      breaking: 'breaking',
      noReleasedVersion: 'No released version yet.',
      since: 'Since',
      changes: 'Changes',
      migrations: 'Migrations',
      noMigrations: 'No migration notes in the latest release.',
      impact: 'Impact',
      whoIsAffected: 'Who is affected',
      actionRequired: 'Action required',
    }
))

const getActionLabel = (key: string) => {
  const action = content.value.hero.actions?.find((entry) => entry.key === key)

  if (!action) {
    throw new Error(`Missing changelog hero action: ${key}`)
  }

  return action.label
}

const heroActions = computed<DocsPageAction[]>(() => ([
  {
    label: getActionLabel('open-roadmap'),
    to: '/docs/community/roadmap',
    outlined: true,
  },
  {
    label: getActionLabel('open-contributing'),
    to: '/docs/community/contributing',
    variant: 'text',
    outlined: false,
  },
]))

const nextStepMeta = [
  { to: '/docs/community/roadmap' },
  { to: '/docs/community/contributing' },
  { to: '/docs/theming/runtime-theme-api' },
] as const

const releasePolicySection = computed(() => {
  const section = content.value.sections['release-policy']

  return {
    key: 'release-policy',
    title: section.title,
    description: section.description,
    items: (section.items as string[] | undefined) ?? [],
  }
})

const latestReleaseSection = computed(() => {
  const section = content.value.sections['latest-release']

  return {
    key: 'latest-release',
    title: section.title,
    description: section.description,
  }
})

const releaseHistorySection = computed(() => {
  const section = content.value.sections['release-history']

  return {
    key: 'release-history',
    title: section.title,
    description: section.description,
  }
})

const migrationNotesSection = computed(() => {
  const section = content.value.sections['migration-notes']

  return {
    key: 'migration-notes',
    title: section.title,
    description: section.description,
  }
})

const nextStepsSection = computed(() => {
  const section = content.value.sections['next-steps']
  const items = (section.items as DocsEditorialGridItem[] | undefined) ?? []

  return {
    key: 'next-steps',
    title: section.title,
    description: section.description,
    items: items.map((item, index) => {
      const meta = nextStepMeta[index]!

      return {
        title: item.title,
        description: item.description,
        to: meta.to,
      }
    }),
  }
})

const latestRelease = computed(() => changelogData.releases[0])
const releaseHistory = computed(() => changelogData.releases.slice(1))
const latestReleaseMigrations = computed(() => latestRelease.value?.migrations ?? [])

const latestReleaseChangesByType = computed(() => {
  const changes = latestRelease.value?.changes ?? []
  const grouped = new Map<ChangeType, ChangelogChange[]>()

  for (const change of changes) {
    const current = grouped.get(change.type) ?? []
    current.push(change)
    grouped.set(change.type, current)
  }

  return Array.from(grouped.entries()).map(([type, items]) => ({
    type,
    items,
  }))
})

const formatDate = (value: string) => {
  const formatLocale = locale.value.startsWith('es') ? 'es-ES' : 'en-US'
  return new Intl.DateTimeFormat(formatLocale, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(new Date(`${value}T00:00:00`))
}

useSeoMeta({
  title: computed(() => content.value.seo.title),
  description: computed(() => content.value.seo.description),
  ogTitle: computed(() => content.value.seo.title),
  ogDescription: computed(() => content.value.seo.description),
  twitterTitle: computed(() => content.value.seo.title),
  twitterDescription: computed(() => content.value.seo.description),
})
</script>

<style scoped>
.docs-page {
  display: grid;
  gap: 1.5rem;
}

.docs-page__card-link {
  display: block;
  height: 100%;
}
</style>
