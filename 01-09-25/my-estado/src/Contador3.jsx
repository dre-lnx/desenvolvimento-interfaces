import { Component } from "react";
class Contador extends Component {
  constructor(props) {
    super(props);
    // Estado inicial com o valor do contador
    this.state = {
      contador: 0,
    };
  }
  // Executado uma vez após o componente ser montado no DOM
  componentDidMount() {
    console.log("Componente montado! Contador inicial:", this.state.contador);
  }
  // Executado sempre que o componente é atualizado (por exemplo, quando o estado muda)
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contador !== this.state.contador) {
      console.log(
        "Componente atualizado! Novo valor do contador:",
        this.state.contador
      );
    }
  }
  // Executado imediatamente antes de o componente ser desmontado do DOM
  componentWillUnmount() {
    console.log("Componente será desmontado!");
  }
  // Método para incrementar o valor do contador
  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };
  render() {
    return (
      <div>
        <h1>Contador: {this.state.contador}</h1>
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}
export default Contador;
