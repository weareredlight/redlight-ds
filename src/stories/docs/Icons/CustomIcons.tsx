import {
  CalendarDaysIcon,
  CircleAlertIcon,
  CircleCheckIcon,
  CircleXIcon,
  ClockIcon,
  FolderOpenIcon,
  MapPinIcon,
  PlusIcon,
  TrendingUpIcon,
  UsersIcon,
} from 'lucide-react'

import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

import Button from 'src/components/Button'
import Text from 'src/components/Text'
import Flex from 'src/elements/Flex'
import { DocCodeBlock } from 'src/stories/docs/document'
import { theme } from 'src/theme'
import { cx } from 'src/utils'

import styles from './styles.module.scss'

// Patterns for using Lucide icons in your own components: each preview sits above its code

type ExampleProps = { title: string, code: string, children: ReactNode }

const Example = ({ title, code, children }: ExampleProps) => (
  <div className={styles.example}>
    <span className='h7'>{title}</span>
    <div className={cx('sb-unstyled', styles.preview)}>{children}</div>
    <DocCodeBlock code={code} />
  </div>
)

/* ------------------------------ Icon with text ------------------------------ */

const iconWithTextCode = `import { CalendarDaysIcon, ClockIcon, MapPinIcon } from 'lucide-react'
import { Flex, Text, theme } from '@weareredlight/design-system'

<Flex gap='lg' style={{ color: theme.colors.neutral700 }}>
  <Flex gap='xxxsm' align='center'>
    <CalendarDaysIcon size={14} />
    <Text variant='microCopy' color='neutral700'>15 Oct 2026</Text>
  </Flex>
  <Flex gap='xxxsm' align='center'>
    <ClockIcon size={14} />
    <Text variant='microCopy' color='neutral700'>10:30</Text>
  </Flex>
  <Flex gap='xxxsm' align='center'>
    <MapPinIcon size={14} />
    <Text variant='microCopy' color='neutral700'>Lisbon</Text>
  </Flex>
</Flex>`

const IconWithText = () => (
  <Flex gap='lg' style={{ color: theme.colors.neutral700 }}>
    <Flex gap='xxxsm' align='center'>
      <CalendarDaysIcon size={14} />
      <Text variant='microCopy' color='neutral700'>15 Oct 2026</Text>
    </Flex>
    <Flex gap='xxxsm' align='center'>
      <ClockIcon size={14} />
      <Text variant='microCopy' color='neutral700'>10:30</Text>
    </Flex>
    <Flex gap='xxxsm' align='center'>
      <MapPinIcon size={14} />
      <Text variant='microCopy' color='neutral700'>Lisbon</Text>
    </Flex>
  </Flex>
)

/* -------------------------------- Stat cards -------------------------------- */

const statCardCode = `import { TrendingUpIcon, UsersIcon } from 'lucide-react'
import { Flex, Text, theme } from '@weareredlight/design-system'

const StatCard = ({ icon: Icon, value, label }) => (
  <Flex
    gap='xsm'
    align='center'
    style={{
      padding: theme.space.lg,
      borderRadius: theme.radii.sm,
      boxShadow: theme.shadows.cardShadow,
      background: theme.colors.white,
    }}
  >
    <Flex
      align='center'
      justify='center'
      style={{
        width: 40,
        height: 40,
        borderRadius: theme.radii.full,
        background: theme.colors.primary100,
        color: theme.colors.primary,
      }}
    >
      <Icon size={20} />
    </Flex>
    <Flex direction='column' align='start'>
      <Text variant='h4' color='neutral900'>{value}</Text>
      <Text variant='microCopy' color='neutral700'>{label}</Text>
    </Flex>
  </Flex>
)

<StatCard icon={UsersIcon} value='1,284' label='Active users' />
<StatCard icon={TrendingUpIcon} value='+12%' label='This month' />`

type StatCardProps = { icon: LucideIcon, value: string, label: string }

const StatCard = ({ icon: Icon, value, label }: StatCardProps) => (
  <Flex
    gap='xsm'
    align='center'
    style={{
      padding: theme.space.lg,
      borderRadius: theme.radii.sm,
      boxShadow: theme.shadows.cardShadow,
      background: theme.colors.white,
    }}
  >
    <Flex
      align='center'
      justify='center'
      style={{
        width: 40,
        height: 40,
        borderRadius: theme.radii.full,
        background: theme.colors.primary100,
        color: theme.colors.primary,
      }}
    >
      <Icon size={20} />
    </Flex>
    <Flex direction='column' align='start'>
      <Text variant='h4' color='neutral900'>{value}</Text>
      <Text variant='microCopy' color='neutral700'>{label}</Text>
    </Flex>
  </Flex>
)

const StatCards = () => (
  <Flex gap='lg' wrap>
    <StatCard icon={UsersIcon} value='1,284' label='Active users' />
    <StatCard icon={TrendingUpIcon} value='+12%' label='This month' />
  </Flex>
)

/* ------------------------------- Status list -------------------------------- */

const statusListCode = `import { CircleAlertIcon, CircleCheckIcon, CircleXIcon } from 'lucide-react'
import { Flex, Text, theme } from '@weareredlight/design-system'

<Flex direction='column' align='start' gap='xsm'>
  <Flex gap='xxsm' align='center'>
    <CircleCheckIcon size={16} style={{ color: theme.colors.success }} />
    <Text variant='paragraph' color='neutral800'>Payment received</Text>
  </Flex>
  <Flex gap='xxsm' align='center'>
    <CircleAlertIcon size={16} style={{ color: theme.colors.primary }} />
    <Text variant='paragraph' color='neutral800'>Invoice due in 3 days</Text>
  </Flex>
  <Flex gap='xxsm' align='center'>
    <CircleXIcon size={16} style={{ color: theme.colors.danger }} />
    <Text variant='paragraph' color='neutral800'>Card declined</Text>
  </Flex>
</Flex>`

const StatusList = () => (
  <Flex direction='column' align='start' gap='xsm'>
    <Flex gap='xxsm' align='center'>
      <CircleCheckIcon size={16} style={{ color: theme.colors.success }} />
      <Text variant='paragraph' color='neutral800'>Payment received</Text>
    </Flex>
    <Flex gap='xxsm' align='center'>
      <CircleAlertIcon size={16} style={{ color: theme.colors.primary }} />
      <Text variant='paragraph' color='neutral800'>Invoice due in 3 days</Text>
    </Flex>
    <Flex gap='xxsm' align='center'>
      <CircleXIcon size={16} style={{ color: theme.colors.danger }} />
      <Text variant='paragraph' color='neutral800'>Card declined</Text>
    </Flex>
  </Flex>
)

/* ------------------------------- Empty state -------------------------------- */

const emptyStateCode = `import { FolderOpenIcon, PlusIcon } from 'lucide-react'
import { Button, Flex, Text, theme } from '@weareredlight/design-system'

const AddIcon = () => <PlusIcon />

<Flex direction='column' gap='xsm'>
  <FolderOpenIcon size={48} strokeWidth={1.5} style={{ color: theme.colors.neutral400 }} />
  <Text variant='h5' color='neutral800'>No projects yet</Text>
  <Text variant='paragraph' color='neutral700'>Create your first project to get started.</Text>
  <Button iconComponent={AddIcon} iconPosition='left'>New project</Button>
</Flex>`

const AddIcon = () => <PlusIcon />

const EmptyState = () => (
  <Flex direction='column' gap='xsm' style={{ width: '100%' }}>
    <FolderOpenIcon size={48} strokeWidth={1.5} style={{ color: theme.colors.neutral400 }} />
    <Text variant='h5' color='neutral800'>No projects yet</Text>
    <Text variant='paragraph' color='neutral700'>Create your first project to get started.</Text>
    <Button iconComponent={AddIcon} iconPosition='left'>New project</Button>
  </Flex>
)

/* ---------------------------------------------------------------------------- */

const CustomIcons = () => (
  <div className={styles.examples}>
    <Example title='Icon with text' code={iconWithTextCode}>
      <IconWithText />
    </Example>
    <Example title='Stat cards' code={statCardCode}>
      <StatCards />
    </Example>
    <Example title='Status colors' code={statusListCode}>
      <StatusList />
    </Example>
    <Example title='Empty state' code={emptyStateCode}>
      <EmptyState />
    </Example>
  </div>
)

export default CustomIcons
