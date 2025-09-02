import { useEffect } from "react";
function ExemploMontagem() {
  useEffect(() => {
    console.log("O componente foi montado!");
    // Aqui você poderia fazer uma chamada de API ou configurar algo
  }, []); // O array vazio garante que o efeito seja executado apenas uma vez
  return (
    <div>
      <h1>Exemplo de Montagem</h1>
    </div>
  );
}
export default ExemploMontagem;
