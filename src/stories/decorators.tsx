/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react'

export const RestrictedWidth = (Story: any, context: any) => {
  const firstRender = useRef(true)

  const maxWidth = firstRender.current ? context.parameters.width : context.globals.containerSize
  firstRender.current = false
  return (
    <div style={{ maxWidth }}>
      <Story />
    </div>
  )
}

export const CenterOnCanvas = (Story: any) => {
  const firstRender = useRef(true)

  firstRender.current = false
  return (
    <div
      style={{
        padding: '6rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Story />
    </div>
  )
}

export const darkBackgroundCanvas = (Story: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const firstRender = useRef(true)

  firstRender.current = false
  return (
    <div
      style={{
        background: '#101010',
        width: 'fit-content',
        padding: '1rem'
      }}
    >
      <Story />
    </div>
  )
}
