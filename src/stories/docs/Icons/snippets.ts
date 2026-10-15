// Code snippets shown on the Icons docs page

export const IconsInstall = `yarn add lucide-react
# or
npm install --save lucide-react`

export const IconsUse = `import { BellIcon, SettingsIcon } from 'lucide-react'
import { theme } from '@weareredlight/design-system'

<BellIcon />                                   // 24px, current text color
<SettingsIcon size={16} />
<BellIcon size={20} strokeWidth={1.5} />
<BellIcon style={{ color: theme.colors.primary }} />`

export const IconsInComponents = `import { PlusIcon, SearchIcon } from 'lucide-react'
import { Button, Input } from '@weareredlight/design-system'

// Outside the render, so it isn't a new component on every render
const AddIcon = () => <PlusIcon />
const SearchFieldIcon = () => <SearchIcon />

<Button iconComponent={AddIcon} iconPosition='left'>New project</Button>
<Input iconComponent={SearchFieldIcon} iconPosition='left' placeholder='Search...' onChange={onSearch} />`
