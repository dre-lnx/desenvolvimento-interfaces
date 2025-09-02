import { useState } from "react";
// Componente irmão 1 - Entrada
function Entrada({ onTextChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Digite algo"
        onChange={(e) => onTextChange(e.target.value)}
      />
    </div>
  );
}
// Componente irmão 2 - Exibir
function Exibir({ texto }) {
  return (
    <div>
      <h2>Você digitou: {texto}</h2>
    </div>
  );
}
// Componente Pai - App
function App() {
  const [texto, setTexto] = useState(""); // Estado compartilhado
  return (
    <div>
      <h1>Comunicação entre Componentes Irmãos</h1>
      {/* Componente irmão 1 - Envia função para atualizar o texto */}
      <Entrada onTextChange={setTexto} />
      {/* Componente irmão 2 - Exibe o texto */}
      <Exibir texto={texto} />
    </div>
  );
}
export default App;
