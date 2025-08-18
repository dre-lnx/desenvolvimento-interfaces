import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MultiElementos from './componentes/MultiElementos'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MultiElementos />
  </StrictMode>,
)
