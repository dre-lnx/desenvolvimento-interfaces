import './App.css'

function App() {
  var pessoas = ['Alan', 'Agnaldo', 'Roberto', 'Cleiton', 'Pedro', 'Guilherme', 'Arlindo']
  var pessoasFiltradas = pessoas.filter(nome => nome.startsWith('A'))

  return (
    <div>
      <ul>
        {
          pessoas.filter(nome => nome.startsWith('A'))
          .map(nome => <li>{ nome }</li>)
        }
      </ul>
    </div>
  )
}

export default App
