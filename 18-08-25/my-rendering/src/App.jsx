import Admin from './components/Admin'
import Visitor from './components/Visitor'
import Unknown from './components/Unknown'

function App() {
  var userType = "Admin"

  if (userType === 'Admin') {
    return <Admin userType={userType} />
  } else if (userType === 'Visitante') {
    return <Visitor userType={userType} />
  } else {
    return <Unknown userType={userType} />
  }
}

export default App
