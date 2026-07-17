import en from './en'
import es from './es'

export const messages = {
  en,
  es,
} as const

export type MessageSchema = typeof en

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages,
}))