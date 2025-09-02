function Botao() {
  const handleClick = () => {
    alert("Botão clicado!");
  };
  return <button onClick={handleClick}>Clique aqui</button>;
}
export default Botao;
