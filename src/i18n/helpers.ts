export type Locale = 'pt' | 'en'

export type Localized<T = string> = Record<Locale, T>

export function pick(locale: Locale, value: Localized<string> | string): string {
  return typeof value === 'string' ? value : value[locale]
}

export function pickList(locale: Locale, value: Localized<string[]>): string[] {
  return value[locale]
}

type MessageValue = string | { [key: string]: MessageValue }

export function getMessage(messages: Record<Locale, MessageValue>, locale: Locale, key: string): string {
  const value = key.split('.').reduce<unknown>((acc, part) => {
    if (acc && typeof acc === 'object' && part in acc) {
      return (acc as { [key: string]: MessageValue })[part]
    }
    return undefined
  }, messages[locale])

  return typeof value === 'string' ? value : key
}
