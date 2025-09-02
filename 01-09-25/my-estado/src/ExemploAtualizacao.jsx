import { useState, useEffect } from "react";
function ExemploAtualizacao() {
  const [contador, setContador] = useState(0);
  useEffect(() => {
    console.log("O contador foi atualizado! Valor atual:", contador);
  }, [contador]); // O efeito é executado toda vez que o contador muda
  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}
export default ExemploAtualizacao;
