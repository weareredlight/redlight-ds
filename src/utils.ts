export const capitalize = (string: string) => string.charAt(0).toUpperCase() + string.slice(1)

// Joins class names, skipping falsy values.
export const cx = (...classes: unknown[]) => classes.filter(Boolean).join(' ')

// The locale dates and times are shown in: the given one, or the browser's
export const resolveLocale = (locale?: string) => locale
  || (typeof navigator !== 'undefined' ? navigator.language : undefined)
  || 'en-US'

// Whether a locale shows times with AM/PM (4:00 PM) instead of 24 hours (16:00)
export const uses12Hours = (locale: string) => {
  const { hourCycle, hour12 } = new Intl.DateTimeFormat(locale, { hour: 'numeric' }).resolvedOptions()
  return hourCycle ? hourCycle === 'h11' || hourCycle === 'h12' : Boolean(hour12)
}
