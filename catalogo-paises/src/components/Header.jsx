import { useState } from "react"

function Header({ onSearch }) {
    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        onSearch(inputValue)
    }

    return (
        <div className="container-header">
            <div className="country-header">
                <h1>Consulta de países</h1>
            </div>

            <form className="country-search" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Procure um país"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">Buscar</button>
            </form>
        </div>
    )
}

export default Header
