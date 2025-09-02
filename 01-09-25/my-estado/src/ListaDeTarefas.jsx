function ListaDeTarefas() {
  const handleRemover = (id) => {
    alert(`Remover tarefa com id: ${id}`);
  };
  return (
    <ul>
      <li>
        Tarefa 1 <button onClick={() => handleRemover(1)}>Remover</button>
      </li>
      <li>
        Tarefa 2 <button onClick={() => handleRemover(2)}>Remover</button>
      </li>
    </ul>
  );
}
export default ListaDeTarefas;
