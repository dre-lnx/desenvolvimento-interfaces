import { useCallback, useState } from "react";
import Teacher from "./Teacher";

const School = () => {
  const [teacher, setTeacher] = useState({
    nome: "Rogerio",
    disciplina: "Matemática",
  });
  const [schoolName, setSchoolName] = useState("Escola ABC");

  const alterarDisciplinaProf = useCallback(() => {
        setTeacher(prevState => ({...prevState, disciplina: prevState.disciplina === "Matemática" ? "Física" : "Matemática"}))
  }, [])

  const alteraNomeEscola = useCallback(() => {
        setSchoolName(prevState => (prevState === "Escola ABC" ? "Escola XYZ" : "Escola ABC"))
  }, [])

  return (
    <div>
      <h1>{schoolName}</h1>
      <Teacher nome={teacher.nome} disciplina={teacher.disciplina} />
      <button onClick={alterarDisciplinaProf}>
        Alterar Disciplina do Professor
      </button>
      <button onClick={alteraNomeEscola}>Alterar Nome da Escola</button>
    </div>
  );
};
export default School;
