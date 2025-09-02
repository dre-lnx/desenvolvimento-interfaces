import { useState, useEffect } from "react";
function Temporizador() {
  const [segundos, setSegundos] = useState(0);
  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos((s) => s + 1);
    }, 1000);
    // Função de limpeza para desmontar o intervalo
    return () => {
      console.log("Componente desmontado! Limpando intervalo.");
      clearInterval(intervalo);
    };
  }, []); // O intervalo é configurado apenas na montagem
  return (
    <div>
      <h1>Segundos: {segundos}</h1>
    </div>
  );
}
export default Temporizador;
