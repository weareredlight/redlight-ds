declare module '*.svg' {
  import React from 'react'

  const content: React.FC
  export default content
}

declare module '*.module.scss' {
  const classes: Readonly<Record<string, string>>
  export default classes
}

declare module 'virtual:rl-tokens.css'
