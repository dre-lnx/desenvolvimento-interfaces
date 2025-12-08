import SchoolHomePage from "./components/SchoolHomePage";
import ClassRoom from "./components/ClassRoom";
import StudentList from "./components/StudentList";
import School from "./components/School";
import "./App.css";

function App() {

  // Dados da Turma
  const turma = {
    nomeDaTurma: "Turma A",
    estudantes: [
      { nome: "João", nota: 8 },
      { nome: "Maria", nota: 9 },
      { nome: "Carlos", nota: 7 },
    ],
  };

  return (
    <School />
  )
  
}

export default App;
