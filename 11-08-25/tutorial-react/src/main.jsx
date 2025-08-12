import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Saudacao from './Saudacao.jsx'
import SaudacaoClasse from './SaudacaoClasse.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Saudacao name="André" idade = '22 Anos'/>
    <SaudacaoClasse name="André" age = '22 Years' isLogado = {true} />
  </StrictMode>,
)
