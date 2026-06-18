import { ref } from 'vue'
import { getMessage, pick, pickList, type Locale, type Localized } from '@/i18n/helpers'
import { messages } from '@/i18n/messages'

const STORAGE_KEY = 'portfolio-locale'

function readLocale(): Locale {
  const saved = localStorage.getItem(STORAGE_KEY)
  return saved === 'en' ? 'en' : 'pt'
}

export const locale = ref<Locale>(readLocale())

function applyDocumentLocale(current: Locale) {
  document.documentElement.lang = current === 'pt' ? 'pt-BR' : 'en'
  document.title = getMessage(messages, current, 'meta.title')
}

applyDocumentLocale(locale.value)

export type { Locale } from '@/i18n/helpers'

export function useLocale() {
  function t(key: string): string {
    return getMessage(messages, locale.value, key)
  }

  function setLocale(next: Locale) {
    locale.value = next
    localStorage.setItem(STORAGE_KEY, next)
    applyDocumentLocale(next)
  }

  function p(value: Localized<string> | string): string {
    return pick(locale.value, value)
  }

  function pl(value: Localized<string[]>): string[] {
    return pickList(locale.value, value)
  }

  return { locale, t, setLocale, p, pl }
}
