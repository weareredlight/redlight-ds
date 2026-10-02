export const capitalize = (string: string) => string.charAt(0).toUpperCase() + string.slice(1)

// Joins class names, skipping falsy values.
export const cx = (...classes: unknown[]) => classes.filter(Boolean).join(' ')
