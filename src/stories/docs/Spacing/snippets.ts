// Code snippets shown on the Spacing & Sizes docs page

export const SpacingCss = `.card {
  display: flex;
  flex-direction: column;
  gap: var(--space-xxsm);
  padding: var(--space-xxlg);
  border-radius: var(--radii-sm);
  box-shadow: var(--shadows-cardShadow);
}

.card-icon {
  width: var(--sizes-xlg);
  height: var(--sizes-xlg);
}`

export const SpacingJs = `import { Flex, theme } from '@weareredlight/design-system'

<Flex direction='column' gap='xxsm'>...</Flex>

<div style={{ padding: theme.space.xxlg, borderRadius: theme.radii.sm }} />
// theme.space.xxlg === 'var(--space-xxlg)'`

export const SpacingOverride = `setupTheme({
  userSizes: {
    space: { xxlg: '1.75rem' },
    radii: { xsm: '6px', sm: '12px' },
  },
  userShadows: { cardShadow: '0px 1px 4px rgba(0, 0, 0, 0.12)' },
})`
