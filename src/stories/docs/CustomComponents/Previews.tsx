import {
  ArchiveIcon,
  CalendarDaysIcon,
  EllipsisIcon,
  PencilIcon,
  UsersIcon,
} from 'lucide-react'

import type { CSSProperties, ReactNode } from 'react'

import Avatar from '../../../components/Avatar'
import Button from '../../../components/Button'
import Pill from '../../../components/Pill'
import PopOver from '../../../components/PopOver'
import Tag from '../../../components/Tag'
import Text from '../../../components/Text'
import Tooltip from '../../../components/Tooltip'
import Flex from '../../../elements/Flex'
import { cx } from '../../../utils'

import styles from './styles.module.scss'

// Live versions of the page's examples, built like the code below them

const Preview = ({ children }: { children: ReactNode }) => (
  <div className={cx('sb-unstyled', styles.preview)}>{children}</div>
)

/* ------------------------------ Project header ------------------------------ */

export const ProjectHeaderPreview = () => (
  <Preview>
    <Flex justify='spaceBetween' align='center' gap='sm'>
      <Flex align='center' gap='xxsm'>
        <Text variant='h4' color='neutral800'>Website redesign</Text>
        <Tag>In progress</Tag>
      </Flex>
      <Button variant='secondary' onClick={() => { }}>Edit</Button>
    </Flex>
  </Preview>
)

/* ------------------------------- Project card ------------------------------- */

const STATUS = {
  onTrack: { label: 'On track', variant: 'default' },
  atRisk: { label: 'At risk', variant: 'error' },
  done: { label: 'Done', variant: 'success' },
} as const

const MAX_MEMBERS = 3

const EditIcon = () => <PencilIcon />
const ArchiveProjectIcon = () => <ArchiveIcon />

type ProjectCardProps = {
  name: string
  description: string
  status: keyof typeof STATUS
  progress: number
  members: { name: string, url?: string }[]
  dueDate: string
  onEdit: () => void
  onArchive: () => void
  className?: string
  style?: CSSProperties
}

const ProjectCard = ({
  name,
  description,
  status,
  progress,
  members,
  dueDate,
  onEdit,
  onArchive,
  className,
  style,
}: ProjectCardProps) => {
  const hiddenMembers = members.length - MAX_MEMBERS

  return (
    <div className={cx(styles.projectCard, styles[status], className)} style={style}>
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
          <Flex direction='column' gap='xsm'>
            <Text variant='h6' color='neutral800'>Project options</Text>
            <Flex gap='xxsm' style={{ width: '100%' }}>
              <Button variant='secondary' iconComponent={EditIcon} iconPosition='left' onClick={onEdit} fullWidth>
                Edit
              </Button>
              <Button variant='danger' iconComponent={ArchiveProjectIcon} iconPosition='left' onClick={onArchive} fullWidth>
                Archive
              </Button>
            </Flex>
          </Flex>
        </PopOver>
      </Flex>

      <Text variant='textBlock' color='neutral700'>{description}</Text>

      <Flex direction='column' align='stretch' gap='xxxsm'>
        <Flex justify='spaceBetween' className={styles.progressLabel}>
          <span>Progress</span>
          <span>{`${progress}%`}</span>
        </Flex>
        <div className={styles.track}>
          <div className={styles.bar} style={{ width: `${progress}%` }} />
        </div>
      </Flex>

      <Flex justify='spaceBetween' align='center' gap='xsm' wrap>
        <Flex align='center' className={styles.members}>
          {members.slice(0, MAX_MEMBERS).map(member => (
            <Tooltip key={member.name} content={member.name} side='top'>
              <Avatar size='small' name={member.name} url={member.url} className={styles.member} />
            </Tooltip>
          ))}
          {hiddenMembers > 0 && <span className={styles.more}>{`+${hiddenMembers}`}</span>}
        </Flex>
        <Flex align='center' gap='xxxsm' className={styles.dueDate}>
          <CalendarDaysIcon size={14} />
          {dueDate}
        </Flex>
      </Flex>
    </div>
  )
}

export const ProjectCardPreview = () => (
  <Preview>
    <div className={styles.projectGrid}>
      <ProjectCard
        name='Website redesign'
        description='New landing page, pricing and blog, all built with the design system.'
        status='onTrack'
        progress={68}
        members={[
          { name: 'Ana Costa' },
          { name: 'Rui Silva' },
          { name: 'Marta Lopes' },
          { name: 'João Dias' },
          { name: 'Inês Faria' },
        ]}
        dueDate='30 Nov 2026'
        onEdit={() => { }}
        onArchive={() => { }}
      />
      <ProjectCard
        name='Mobile app'
        description='Native app for bookings, with offline mode and push notifications.'
        status='atRisk'
        progress={35}
        members={[{ name: 'Pedro Alves' }, { name: 'Sofia Reis' }]}
        dueDate='12 Nov 2026'
        onEdit={() => { }}
        onArchive={() => { }}
      />
      <ProjectCard
        name='Brand guidelines'
        description='Logo, colors and tone of voice, documented for the whole team.'
        status='done'
        progress={100}
        members={[{ name: 'Marta Lopes' }, { name: 'Ana Costa' }, { name: 'Tiago Melo' }]}
        dueDate='2 Oct 2026'
        onEdit={() => { }}
        onArchive={() => { }}
      />
    </div>
  </Preview>
)

/* --------------------------------- Stat card -------------------------------- */

type StatCardProps = {
  label: string
  value: ReactNode
  icon?: ReactNode
  variant?: 'default' | 'highlight'
  className?: string
  style?: CSSProperties
}

const StatCard = ({
  label,
  value,
  icon,
  variant = 'default',
  className,
  style,
}: StatCardProps) => (
  <div className={cx(styles.card, styles[variant], className)} style={style}>
    <Flex align='center' gap='xxsm' className={styles.label}>
      {icon}
      {label}
    </Flex>
    <span className={styles.value}>{value}</span>
  </div>
)

export const StatCardPreview = () => (
  <Preview>
    <Flex gap='lg' wrap>
      <StatCard label='Active users' value='1,284' icon={<UsersIcon size={16} />} />
      <StatCard label='Revenue' value='€12.4k' variant='highlight' />
    </Flex>
  </Preview>
)
