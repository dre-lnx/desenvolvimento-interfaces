import { useState } from "react";

const ImcForm = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setImc] = useState(0);

    const handleImc = (e) => {
        if (peso > 0 && altura > 0) {
            setImc((peso / (altura * altura)).toFixed(2))
        } else {
            alert("Os campos precisam estar preenchidos!")
        }
    }

    const classificarImc = () => {
        console.log(imc);

        if (imc < 18.5) {
            return "Abaixo do peso"
        } else if (imc >= 18.5 && imc <= 24.9) {
            return "Peso normal"
        } else if (imc >= 25 && imc <= 29.9) {
            return "Sobrepeso"
        } else if (imc >= 30) {
            return "Obesidade"
        }
    }

    return (
        <>
        <label>
          Peso (kg):
        </label>
          <input
            type="number"
            value={peso}
            className="imcField"
            onChange={(e) => setPeso(e.target.value)}
          />
        <br/>
        <label>
          Altura (cm):
        </label>
          <input
            type="number"
            value={altura}
            className="imcField"
            onChange={(e) => setAltura(e.target.value)}
          />
          <br/>
        <button onClick={handleImc}>Calcular IMC</button>
        
        {imc &&(
        <>
            <h2>Seu IMC: {imc}</h2>
            <br/>
            <p>{classificarImc(imc)}</p>
        </>
        )}
        </>
    )
}

export default ImcForm