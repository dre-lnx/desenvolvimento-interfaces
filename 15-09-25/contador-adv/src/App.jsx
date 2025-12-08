import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Counter from "./components/Counter";
function App() {
  return (
    <div>
      <h1>Exemplo de Contador com useReducer</h1>
      <Counter />
    </div>
  );
}
export default App;
