// Scratch area for testing components locally.
import { useState } from 'react'

import { Flex, GroupButtons, Text } from '../src'

import DashboardDemo from './DashboardDemo'
import { applyTheme, getSavedThemeId, themes } from './themes'

const themeButtons = themes.map(t => ({ label: t.label, value: t.id }))

const navbarCss = {
  position: 'sticky',
  top: '$lg',
  zIndex: 10,
  width: 'calc(100% - 4rem)',
  maxWidth: 'calc(1200px - 4rem)',
  margin: '$lg auto 0',
  padding: '$xsm $xxlg',
  backgroundColor: '$white',
  border: '1px solid $neutral200',
  borderRadius: '$lg',
  boxShadow: '$mainShadow',
}

const App = () => {
  const [themeId, setThemeId] = useState(getSavedThemeId)

  const selectTheme = (id: string) => {
    applyTheme(id)
    setThemeId(id)
  }

  return (
    <>
      <Flex as='nav' justify='spaceBetween' align='center' wrap gap='lg' css={navbarCss}>
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
