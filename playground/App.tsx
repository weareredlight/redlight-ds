// Scratch area for testing components locally.
import { useState } from 'react'

import type { CSSProperties } from 'react'

import { Flex, GroupButtons, Text } from '../src'

import DashboardDemo from './DashboardDemo'
import { applyTheme, getSavedThemeId, themes } from './themes'

const themeButtons = themes.map(t => ({ label: t.label, value: t.id }))

const navbarStyle: CSSProperties = {
  position: 'sticky',
  top: 'var(--space-lg)',
  zIndex: 10,
  width: 'calc(100% - 4rem)',
  maxWidth: 'calc(1200px - 4rem)',
  margin: 'var(--space-lg) auto 0',
  padding: 'var(--space-xsm) var(--space-xxlg)',
  backgroundColor: 'var(--colors-white)',
  border: '1px solid var(--colors-neutral200)',
  borderRadius: 'var(--radii-lg)',
  boxShadow: 'var(--shadows-mainShadow)',
}

const App = () => {
  const [themeId, setThemeId] = useState(getSavedThemeId)

  const selectTheme = (id: string) => {
    applyTheme(id)
    setThemeId(id)
  }

  return (
    <>
      <Flex as='nav' justify='spaceBetween' align='center' wrap gap='lg' style={navbarStyle}>
        <Text variant='h5'>RedLight DS Playground</Text>
        <GroupButtons
          buttons={themeButtons}
          selectedButton={themeId}
          onButtonSelect={selectTheme}
        />
      </Flex>
      <DashboardDemo />
    </>
  )
}

export default App
