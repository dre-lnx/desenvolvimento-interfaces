import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Perfil from './perfil.jsx'
import Contador from './Contador3.jsx'
import PerfilUsuario from './PerfilUsuario.jsx'
import ListaTarefas from './ListaTarefas.jsx'
import ExemploMontagem from './ExemploMontagem.jsx'
import ExemploAtualizacao from './ExemploAtualizacao.jsx'
import Temporizador from './Temporizador.jsx'
import Botao from './Botao.jsx'
import ListaDeTarefas from './ListaDeTarefas.jsx'
import FormularioComEnvio from './FormularioComEnvio.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
