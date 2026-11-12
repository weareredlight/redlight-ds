export const capitalize = (string: string) => string.charAt(0).toUpperCase() + string.slice(1)

// Joins class names, skipping falsy values.
export const cx = (...classes: unknown[]) => classes.filter(Boolean).join(' ')

// The inputs the date and time libraries render inside a field (day, month, hours, AM/PM, ...)
export const getPickerInputs = (field: HTMLElement | null) => [
  ...(field?.querySelectorAll<HTMLInputElement>('[data-input]') ?? []),
]

// Sets the ARIA attributes on the picker inputs based on the given aria object.
export const setPickerInputsAria = (
  field: HTMLElement | null,
  aria: { 'aria-invalid'?: boolean, 'aria-describedby'?: string },
) => getPickerInputs(field).forEach(input => {
  Object.entries(aria).forEach(([attribute, value]) => {
    const next = value === undefined ? null : String(value)
    if (input.getAttribute(attribute) === next) return
    if (next === null) input.removeAttribute(attribute)
    else input.setAttribute(attribute, next)
  })
})

// The locale dates and times are shown in: the given one, or the browser's
export const resolveLocale = (locale?: string) => locale
  || (typeof navigator !== 'undefined' ? navigator.language : undefined)
  || 'en-US'

// Whether a locale shows times with AM/PM (4:00 PM) instead of 24 hours (16:00)
export const uses12Hours = (locale: string) => {
  const { hourCycle, hour12 } = new Intl.DateTimeFormat(locale, { hour: 'numeric' }).resolvedOptions()
  return hourCycle ? hourCycle === 'h11' || hourCycle === 'h12' : Boolean(hour12)
}
