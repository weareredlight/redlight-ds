import { SymbolIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'

import { alert } from 'components/Alert'
import Button from 'components/Button'
import Select from 'components/Select'

const mockdata = [
  {
    id: '0',
    name: 'test1',
    label: 'test1',
    value: 'test1'
  },
  {
    id: '1',
    name: 'test2',
    label: 'test2',
    value: 'test2'
  }
]

const ExampleIcon = () => <SymbolIcon />

const App = () => {
  const [selectedVal, setSelectedVal] = useState('')

  const showAlert = () => {
    // toast.success('hello', { position: 'top-left' })
    alert.info('Alert title', 'hello world')
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        gap: '4rem'
      }}
    >
      <Button
        iconComponent={ExampleIcon}
        onClick={() => console.log('test')}
        size='large'
      />
      <Select
        id='test'
        placeholder='test'
        onChange={e => setSelectedVal(e.target.value)}
        value={selectedVal}
        getLabel={o => o.name}
        getValue={o => o.id}
        options={mockdata}
      />
      <button type='button' onClick={showAlert}>Notify !</button>
    </div>
  )
}

export default App
