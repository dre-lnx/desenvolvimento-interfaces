import { useState } from "react";
function FormularioComEnvio() {
  const [nome, setNome] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    alert(`Formulário enviado com o nome: ${nome}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}
export default FormularioComEnvio;
