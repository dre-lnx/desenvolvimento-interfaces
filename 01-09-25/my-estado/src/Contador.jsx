import { Component } from "react";
class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Definindo o estado inicial no construtor
      contador: 0,
    };
  }
  render() {
    return (
      <div>
        <p>Contador: {this.state.contador}</p>
        <button onClick={() => this.incrementar()}>Incrementar</button>
      </div>
    );
  }
  // Método para atualizar o estado
  incrementar = () => {
    // Atualiza o estado com setState
    this.setState({ contador: this.state.contador + 1 }, () => {
        console.log("Estado atualizado:", this.state.contador)
    })
  };
}
export default Contador;
