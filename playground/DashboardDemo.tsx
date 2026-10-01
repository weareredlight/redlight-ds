import { MagnifyingGlassIcon, PlusIcon } from '@radix-ui/react-icons'
import { useMemo, useState } from 'react'

import type { Project, ProjectStatus } from './data'

import {
  Avatar,
  Button,
  Checkbox,
  DatePicker,
  Flex,
  Input,
  Modal,
  Pagination,
  Pill,
  Select,
  Table,
  Tabs,
  Tag,
  Text,
  ToastContainer,
  Toggle,
  Tooltip,
  alert,
  createColumnHelper,
  defaultColumnOptions,
} from '../src'

import { projects, statusOptions, team } from './data'

const PAGE_SIZE = 5

const AddIcon = () => <PlusIcon />
const SearchIcon = () => <MagnifyingGlassIcon />

const stack = { alignItems: 'stretch' }

const cardCss = {
  ...stack,
  backgroundColor: '$white',
  border: '1px solid $neutral200',
  borderRadius: '$md',
  boxShadow: '$cardShadow',
  padding: '$xxlg',
}

const statusVariant: Record<ProjectStatus, 'default' | 'error' | 'success'> = {
  'On track': 'default',
  'At risk': 'error',
  Done: 'success',
}

const columnHelper = createColumnHelper<Project>()
const columns = [
  columnHelper.accessor('name', {
    ...defaultColumnOptions<Project>(),
    header: 'Project',
    meta: { width: '30%' },
  }),
  columnHelper.accessor('owner', {
    ...defaultColumnOptions<Project>(),
    header: 'Owner',
    meta: { width: '25%' },
    cell: data => <Avatar size='small' name={data.getValue()} displayLabel />,
  }),
  columnHelper.accessor('status', {
    ...defaultColumnOptions<Project>(),
    header: 'Status',
    meta: { width: '15%' },
    cell: data => <Pill variant={statusVariant[data.getValue()]}>{data.getValue()}</Pill>,
  }),
  columnHelper.accessor('progress', {
    ...defaultColumnOptions<Project>(),
    header: 'Progress',
    meta: { width: '15%' },
    cell: data => `${data.getValue()}%`,
  }),
  columnHelper.accessor('due', {
    ...defaultColumnOptions<Project>(),
    header: 'Due',
    meta: { width: '15%' },
  }),
]

const StatCard = ({ label, value, hint }: { label: string, value: string, hint: string }) => (
  <Flex direction='column' gap='xxsm' css={{ ...cardCss, alignItems: 'flex-start', flex: '1 1 180px' }}>
    <Text variant='microCopy' color='neutral700'>{label}</Text>
    <Text variant='h2' color='primary'>{value}</Text>
    <Text variant='microCopy' color='neutral'>{hint}</Text>
  </Flex>
)

const DashboardDemo = () => {
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState<string | null>('all')
  const [page, setPage] = useState(1)
  const [modalOpen, setModalOpen] = useState(false)
  const [newProject, setNewProject] = useState('')
  const [notifications, setNotifications] = useState(true)
  const [weeklyDigest, setWeeklyDigest] = useState(false)
  const [reportDate, setReportDate] = useState('')
  const [tags, setTags] = useState(['design', 'frontend', 'q4'])

  const filtered = useMemo(() => projects.filter(p => (
    p.name.toLowerCase().includes(search.toLowerCase())
    && (status === 'all' || p.status === status)
  )), [search, status])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const pageData = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const createProject = () => {
    setModalOpen(false)
    alert.success('Project created', `"${newProject || 'Untitled'}" was added to the board.`)
    setNewProject('')
  }

  return (
    <Flex
      direction='column'
      gap='xxlg'
      css={{
        ...stack, padding: '$xxxlg', maxWidth: 1200, margin: '0 auto'
      }}
    >
      {/* Header */}
      <Flex justify='spaceBetween' align='center' wrap gap='lg'>
        <Flex direction='column' align='start' gap='xxxsm'>
          <Text variant='h3'>Projects</Text>
          <Text variant='paragraph' color='neutral700'>Track what the team is shipping this quarter.</Text>
        </Flex>
        <Flex align='center' gap='lg'>
          <Tooltip content='Create a new project' side='bottom'>
            <span>
              <Button iconComponent={AddIcon} onClick={() => setModalOpen(true)}>
                New project
              </Button>
            </span>
          </Tooltip>
          <Avatar name='Diogo Ribeiro' online />
        </Flex>
      </Flex>

      {/* Stats */}
      <Flex justify='start' wrap gap='lg' css={stack}>
        <StatCard label='Active projects' value={String(projects.filter(p => p.status !== 'Done').length)} hint='+2 since last month' />
        <StatCard label='At risk' value={String(projects.filter(p => p.status === 'At risk').length)} hint='Needs attention' />
        <StatCard label='Completed' value={String(projects.filter(p => p.status === 'Done').length)} hint='This quarter' />
        <StatCard
          label='Avg. progress'
          value={`${Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / projects.length)}%`}
          hint='Across all projects'
        />
      </Flex>

      <Tabs tabs={[{ label: 'Overview' }, { label: 'Team' }, { label: 'Settings' }]}>
        {/* Overview */}
        <Flex direction='column' gap='lg' css={{ ...cardCss, marginTop: '$lg' }}>
          <Flex justify='start' align='end' gap='lg' wrap>
            <Input
              label='Search'
              placeholder='Search projects…'
              iconComponent={SearchIcon}
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1) }}
            />
            <Select
              id='status'
              label='Status'
              placeholder='Filter by status'
              value={status}
              options={statusOptions}
              getLabel={o => o.label}
              getValue={o => o.value}
              onChange={e => { setStatus(e.target.value); setPage(1) }}
            />
          </Flex>
          <Flex justify='start' align='start' css={{ overflowX: 'auto' }}>
            <Table data={pageData} columns={columns} />
          </Flex>
          <Flex justify='spaceBetween' align='center' wrap gap='lg'>
            <Text variant='microCopy' color='neutral700'>
              {`${filtered.length} project${filtered.length === 1 ? '' : 's'}`}
            </Text>
            <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
          </Flex>
        </Flex>

        {/* Team */}
        <Flex direction='column' gap='xxlg' css={{ ...cardCss, marginTop: '$lg' }}>
          <Flex justify='start' wrap gap='xxlg'>
            {team.map(member => (
              <Avatar
                key={member.name}
                name={member.name}
                description={member.role}
                online={member.online}
                displayLabel
              />
            ))}
          </Flex>
          <Flex direction='column' align='start' gap='xsm'>
            <Text variant='h6'>Focus areas</Text>
            <Flex justify='start' wrap gap='xsm'>
              {tags.map(tag => (
                <Tag key={tag} onClose={() => setTags(tags.filter(t => t !== tag))}>{tag}</Tag>
              ))}
              <Tag disabled>archived</Tag>
            </Flex>
          </Flex>
        </Flex>

        {/* Settings */}
        <Flex
          direction='column'
          gap='xxlg'
          css={{
            ...cardCss, alignItems: 'flex-start', marginTop: '$lg', maxWidth: 520
          }}
        >
          <Toggle
            id='notifications'
            label='Push notifications'
            description='Get notified when a project changes status.'
            value={notifications}
            onChange={e => setNotifications(e.target.checked)}
          />
          <Checkbox
            id='digest'
            label='Weekly digest'
            description='A summary email every Monday morning.'
            checked={weeklyDigest}
            onChange={e => setWeeklyDigest(e.target.checked)}
          />
          <DatePicker label='Next report date' value={reportDate} onChange={setReportDate} />
          <Flex gap='lg'>
            <Button onClick={() => alert.success('Settings saved')}>Save changes</Button>
            <Button variant='secondary' onClick={() => alert.info('Changes discarded')}>Cancel</Button>
            <Button variant='danger' onClick={() => alert.error('Not allowed', 'This is just a playground.')}>
              Delete workspace
            </Button>
          </Flex>
        </Flex>
      </Tabs>

      <Modal
        open={modalOpen}
        title='New project'
        description='Give your project a name. You can change it later.'
        closeFn={() => setModalOpen(false)}
      >
        <Flex direction='column' gap='lg' css={{ ...stack, marginTop: '$lg' }}>
          <Input
            label='Project name'
            placeholder='e.g. Marketing site'
            value={newProject}
            onChange={e => setNewProject(e.target.value)}
            fullWidth
          />
          <Flex justify='end' gap='xsm'>
            <Button variant='secondary' onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button onClick={createProject}>Create</Button>
          </Flex>
        </Flex>
      </Modal>

      <ToastContainer />
    </Flex>
  )
}

export default DashboardDemo
