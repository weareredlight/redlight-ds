// Mock data for the playground dashboard.

export type ProjectStatus = 'On track' | 'At risk' | 'Done'

export type Project = {
  id: number
  name: string
  owner: string
  status: ProjectStatus
  progress: number
  due: string
}

export const projects: Project[] = [
  {
    id: 1, name: 'Website redesign', owner: 'Ana Costa', status: 'On track', progress: 72, due: '2026-11-14'
  },
  {
    id: 2, name: 'Mobile app v2', owner: 'Rui Silva', status: 'At risk', progress: 41, due: '2026-10-30'
  },
  {
    id: 3, name: 'Design tokens audit', owner: 'Marta Lopes', status: 'Done', progress: 100, due: '2026-09-20'
  },
  {
    id: 4, name: 'Billing migration', owner: 'João Pereira', status: 'On track', progress: 58, due: '2026-12-01'
  },
  {
    id: 5, name: 'Onboarding flow', owner: 'Inês Ferreira', status: 'At risk', progress: 23, due: '2026-10-22'
  },
  {
    id: 6, name: 'Analytics dashboard', owner: 'Tiago Santos', status: 'On track', progress: 64, due: '2026-11-28'
  },
  {
    id: 7, name: 'Accessibility pass', owner: 'Sofia Martins', status: 'Done', progress: 100, due: '2026-09-12'
  },
  {
    id: 8, name: 'Search improvements', owner: 'Pedro Alves', status: 'On track', progress: 35, due: '2026-12-15'
  },
  {
    id: 9, name: 'Email templates', owner: 'Beatriz Rocha', status: 'Done', progress: 100, due: '2026-09-05'
  },
  {
    id: 10, name: 'API rate limiting', owner: 'Miguel Sousa', status: 'At risk', progress: 12, due: '2026-10-18'
  },
  {
    id: 11, name: 'Dark mode', owner: 'Ana Costa', status: 'On track', progress: 49, due: '2026-11-07'
  },
  {
    id: 12, name: 'Docs site', owner: 'Rui Silva', status: 'On track', progress: 80, due: '2026-10-25'
  },
]

export const statusOptions: { label: string, value: string }[] = [
  { label: 'All statuses', value: 'all' },
  { label: 'On track', value: 'On track' },
  { label: 'At risk', value: 'At risk' },
  { label: 'Done', value: 'Done' },
]

export const team = [
  { name: 'Ana Costa', role: 'Product designer', online: true },
  { name: 'Rui Silva', role: 'Frontend engineer', online: true },
  { name: 'Marta Lopes', role: 'Design lead', online: false },
  { name: 'João Pereira', role: 'Backend engineer', online: true },
]
