import { useState } from "react";
// Lista de produtos
const produtos = [
  "Notebook",
  "Celular",
  "Tablet",
  "Teclado",
  "Mouse",
  "Monitor",
  "Impressora",
];
// Componente que exibe a lista filtrada de produtos
function App() {
  const [busca, setBusca] = useState("");
  // Função de filtragem é recalculada em toda renderização
  const produtosFiltrados = produtos.filter((produto) => {
    console.log("Filtrando produtos...");
    return produto.toLowerCase().includes(busca.toLowerCase());
  });
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar produtos"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <ul>
        {produtosFiltrados.map((produto, index) => (
          <li key={index}>{produto}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
