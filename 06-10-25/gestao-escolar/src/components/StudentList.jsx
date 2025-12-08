import { useEffect, useState } from "react";

const StudentList = () => {
  const data = [
    { nome: "João", nota: 8 },
    { nome: "Maria", nota: 9 },
    { nome: "Carlos", nota: 7 },
    { nome: "Ana", nota: 10 },
  ];
  const [estudantes, setEstudantes] = useState([]);

  useEffect(() => {
    setEstudantes(data);
  }, []);

  const adicionarEstudante = () => {
    setEstudantes([...estudantes, { nome: "Pedro", nota: 9 }]);
  };

  return (
    <div>
      <h1>Lista de Estudantes</h1>
      <div>
        {estudantes.map((aluno) => {
          return (
            <ul>
              <li>
                {aluno.nome} - Nota: {aluno.nota}
              </li>
            </ul>
          );
        })}
      </div>
      <button onClick={adicionarEstudante}>Adicionar Estudante Pedro</button>
    </div>
  );
};
export default StudentList;
