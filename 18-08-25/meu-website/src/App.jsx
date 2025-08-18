import Header from './components/Header'
import Menu from './components/Menu'
import News from './components/News'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Menu />
      <News 
        news1="Gremio contrata Suárez"
        news2="Dedé do Vasco vai jogar no Chelsea?"
      />
      <Sidebar 
        artigo1="Os impactos da guerra do Vietnã"
        artigo2="Uso de IA no poder judiciário"
        artigo3="O crescimento exponencial da China"
      />
      <Footer />
    </>
  )
}

export default App
