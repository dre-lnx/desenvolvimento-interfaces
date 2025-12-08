import { useState } from "react";
import styled from "styled-components";
// Definindo um botão estilizado com base em props
const Botao = styled.button`
  background-color: ${(props) => (props.ativo ? "green" : "gray")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.ativo ? "darkgreen" : "darkgray")};
  }
`;

function App() {
  const [ativo, setAtivo] = useState(false);
  return (
    <div>
      <Botao ativo={ativo} onClick={() => setAtivo(!ativo)}>
        {ativo ? "Ativo" : "Inativo"}
      </Botao>
    </div>
  );
}
export default App;
