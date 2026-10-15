// Code snippets shown on the Custom Components docs page

export const CustomCompose = `import { Button, Flex, Tag, Text } from '@weareredlight/design-system'

// A page header made only of existing components
const ProjectHeader = ({ name, status, onEdit }: ProjectHeaderProps) => (
  <Flex justify='spaceBetween' align='center' gap='sm'>
    <Flex align='center' gap='xxsm'>
      <Text variant='h4' color='neutral800'>{name}</Text>
      <Tag>{status}</Tag>
    </Flex>
    <Button variant='secondary' onClick={onEdit}>Edit</Button>
  </Flex>
)`

export const CustomProjectCardTsx = `import { EllipsisIcon } from 'lucide-react'
import { Avatar, Flex, Pill, PopOver, Text, Tooltip } from '@weareredlight/design-system'

import styles from './ProjectCard.module.scss'

const STATUS = {
  onTrack: { label: 'On track', variant: 'default' },
  atRisk: { label: 'At risk', variant: 'error' },
  done: { label: 'Done', variant: 'success' },
} as const

const MAX_MEMBERS = 3

export type ProjectCardProps = {
  name: string
  status: keyof typeof STATUS
  progress: number // 0 to 100
  members: { name: string, url?: string }[]
  // ...description, dueDate, onEdit, onArchive, className and style
}

const ProjectCard = ({ name, status, progress, members, className, style }: ProjectCardProps) => {
  const hiddenMembers = members.length - MAX_MEMBERS

  return (
    <div className={[styles.card, styles[status], className].filter(Boolean).join(' ')} style={style}>
      <Flex justify='spaceBetween' align='center' gap='xsm'>
        <Flex align='center' gap='xxsm' wrap>
          <Text variant='h5' color='neutral900'>{name}</Text>
          <Pill variant={STATUS[status].variant}>{STATUS[status].label}</Pill>
        </Flex>
        <PopOver
          side='bottom'
          align='end'
          trigger={(
            <button type='button' className={styles.menuButton} aria-label='Project options'>
              <EllipsisIcon size={16} />
            </button>
          )}
        >
          {/* ...title, and the Edit and Archive buttons */}
        </PopOver>
      </Flex>

      {/* ...description */}

      <Flex direction='column' align='stretch' gap='xxxsm'>
        <Flex justify='spaceBetween' className={styles.progressLabel}>
          <span>Progress</span>
          <span>{\`\${progress}%\`}</span>
        </Flex>
        <div className={styles.track}>
          <div className={styles.bar} style={{ width: \`\${progress}%\` }} />
        </div>
      </Flex>

      <Flex justify='spaceBetween' align='center' gap='xsm' wrap>
        <Flex align='center' className={styles.members}>
          {members.slice(0, MAX_MEMBERS).map(member => (
            <Tooltip key={member.name} content={member.name} side='top'>
              <Avatar size='small' name={member.name} url={member.url} className={styles.member} />
            </Tooltip>
          ))}
          {hiddenMembers > 0 && <span className={styles.more}>{\`+\${hiddenMembers}\`}</span>}
        </Flex>
        {/* ...due date */}
      </Flex>
    </div>
  )
}

export default ProjectCard`

export const CustomProjectCardScss = `@use '@weareredlight/design-system/src/styles/typography';
@use '@weareredlight/design-system/src/styles/media';

.card {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  padding: var(--space-xxlg);
  border-radius: var(--radii-sm);
  background: var(--colors-white);
  box-shadow: var(--shadows-cardShadow);

  @include media.query(sm) {
    padding: var(--space-lg);
  }
}

// Not a design system component: a plain button styled with the tokens
.menuButton {
  all: unset;
  display: flex;
  padding: var(--space-xxxsm);
  border-radius: var(--radii-xsm);
  color: var(--colors-neutral600);
  // ...hover and focus states
}

// Progress bar, colored by status
.progressLabel {
  @include typography.microCopy;
  color: var(--colors-neutral600);
}

.track {
  height: var(--sizes-xxsm);
  border-radius: var(--radii-full);
  background: var(--colors-neutral200);
  overflow: hidden;
}

.bar {
  height: 100%;
  background: var(--colors-primary);

  .atRisk & { background: var(--colors-danger); }
  .done & { background: var(--colors-success); }
}

// Overlapping avatars, with a white ring to separate them
.member,
.more {
  margin-left: calc(-1 * var(--space-xxsm));
  border-radius: var(--radii-full);
  box-shadow: 0 0 0 2px var(--colors-white);
}

// ....members, .more and .dueDate`

export const CustomProjectCardUse = `<ProjectCard
  name='Website redesign'
  description='New landing page, pricing and blog, all built with the design system.'
  status='onTrack'
  progress={68}
  members={[{ name: 'Ana Costa' }, { name: 'Rui Silva' }, /* ... */]}
  dueDate='30 Nov 2026'
  onEdit={openEditor}
  onArchive={archiveProject}
/>`

export const CustomComponentTsx = `import type { CSSProperties, ReactNode } from 'react'
import { Flex } from '@weareredlight/design-system'

import styles from './StatCard.module.scss'

export type StatCardProps = {
  label: string
  value: ReactNode
  icon?: ReactNode
  variant?: 'default' | 'highlight'
  className?: string
  style?: CSSProperties
}

const StatCard = ({ label, value, icon, variant = 'default', className, style }: StatCardProps) => (
  <div className={[styles.card, styles[variant], className].filter(Boolean).join(' ')} style={style}>
    <Flex align='center' gap='xxsm' className={styles.label}>
      {icon}
      {label}
    </Flex>
    <span className={styles.value}>{value}</span>
  </div>
)

export default StatCard`

export const CustomComponentScss = `@use '@weareredlight/design-system/src/styles/typography';
@use '@weareredlight/design-system/src/styles/media';

.card {
  display: flex;
  flex-direction: column;
  gap: var(--space-xxsm);
  padding: var(--space-xxlg);
  border-radius: var(--radii-sm);
  background: var(--colors-white);
  box-shadow: var(--shadows-cardShadow);

  @include media.query(sm) {
    padding: var(--space-lg);
  }
}

.label {
  @include typography.microCopy;
  color: var(--colors-neutral600);
}

.value {
  @include typography.heading3;
  color: var(--colors-neutral900);
}

.highlight {
  background: var(--colors-primary100);

  .value { color: var(--colors-primary600); }
}`

export const CustomComponentUse = `import { UsersIcon } from 'lucide-react'

<StatCard label='Active users' value='1,284' icon={<UsersIcon size={16} />} />
<StatCard label='Revenue' value='€12.4k' variant='highlight' />`
