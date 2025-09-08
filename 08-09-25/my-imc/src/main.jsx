import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ImcForm from './components/Imc.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ImcForm/>
  </StrictMode>,
)
