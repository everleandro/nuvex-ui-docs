import { useI18n } from 'vue-i18n'
import type {
  DocsComponentPageContent,
  DocsWorkflowPageContent,
} from '~/types/docs'

export const useDocsI18nContent = <TContent>(messageKey: string) => {
  const { tm } = useI18n()

  return computed(() => tm(messageKey) as TContent)
}

export const useDocsComponentI18nContent = (messageKey: string) => {
  return useDocsI18nContent<DocsComponentPageContent>(messageKey)
}