import React from "react";

function Teacher({ nome, disciplina }) {
  console.log(`Renderizando o professor: ${nome} - ${disciplina}`);

  return (
    <div>
      <h3>Informações do Professor</h3>
      <p>
        <strong>Nome:</strong> {nome}
      </p>
      <p>
        <strong>Disciplina:</strong> {disciplina}
      </p>
    </div>
  );
}

export default React.memo(Teacher);
