import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [jogador, setJogador] = useState({
    nome: 'Carlos',
    nivel: 0,
    pontuacao: 0
  });

  const aumentarPontuacao = () => {
    setJogador({
      ...jogador,
      pontuacao: jogador.pontuacao += 10
    })
  }

  const subirNivel = () => {
    setJogador({
      ...jogador,
      nivel: jogador.nivel += 1
    })
  }

  useEffect(() => {console.log(jogador)}, [jogador])

  return (
    <div>
      <h1>Perfil do Jogador</h1>
      <p>Nome: {jogador.nome}</p>
      <p>Nível: {jogador.nivel}</p>
      <p>Pontuação: {jogador.pontuacao}</p>
    <button onClick={aumentarPontuacao}>Aumentar Pontuação</button>
    <button onClick={subirNivel}>Subir de Nível</button>
    </div>
  )
}

export default App
