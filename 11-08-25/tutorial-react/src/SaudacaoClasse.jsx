import { Component } from 'react';
class SaudacaoClasse extends Component {
render() {
            <h1>
                {this.props.isLogado &&
                Hello, {this.props.name} - {this.props.age}}
            </h1>
    }
}
export default SaudacaoClasse