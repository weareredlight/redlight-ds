import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import { setupThemes } from './themes'

// The theme must load before any component renders.
setupThemes()

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
