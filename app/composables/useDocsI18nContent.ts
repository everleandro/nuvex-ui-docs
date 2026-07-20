import { useI18n } from 'vue-i18n'
import type {
  DocsComponentPageContent,
  DocsInstallationEditorialContent,
  DocsNuxtIntegrationEditorialContent,
  DocsPageContent,
  DocsQuickStartEditorialContent,
  DocsWorkflowPageContent,
} from '~/types/docs'

export const useDocsPageI18nContent = (messageKey: string) => {
  const { tm } = useI18n()

  return computed(() => tm(messageKey) as DocsPageContent)
}

export const useDocsWorkflowI18nContent = (messageKey: string) => {
  const { tm } = useI18n()

  return computed(() => tm(messageKey) as DocsWorkflowPageContent)
}

export const useDocsComponentI18nContent = (messageKey: string) => {
  const { tm } = useI18n()

  return computed(() => tm(messageKey) as DocsComponentPageContent)
}

export const useDocsInstallationI18nContent = (messageKey: string) => {
  const { tm } = useI18n()

  return computed(() => tm(messageKey) as DocsInstallationEditorialContent)
}

export const useDocsQuickStartI18nContent = (messageKey: string) => {
  const { tm } = useI18n()

  return computed(() => tm(messageKey) as DocsQuickStartEditorialContent)
}

export const useDocsNuxtIntegrationI18nContent = (messageKey: string) => {
  const { tm } = useI18n()

  return computed(() => tm(messageKey) as DocsNuxtIntegrationEditorialContent)
}