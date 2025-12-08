import { useParams, Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import Loading from "../components/Loading"

function Detalhes() {
    const { codigo } = useParams()
    const [country, setCountry] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchCountry = async () => {
            setLoading(true)
            setError("")

            try {
                const response = await axios.get(
                    `https://restcountries.com/v3.1/alpha/${codigo}`
                )
                setCountry(response.data[0])
            } catch (err) {
                setError("Erro ao carregar detalhes do país.")
            } finally {
                setLoading(false)
            }
        }

        fetchCountry()
    }, [codigo])

    if (loading) return <Loading />
    if (error) return <p style={{ color: "red" }}>{error}</p>
    if (!country) return null

    return (
        <div className="country-card">
            <img src={country.flags.png} alt={country.name.common} />

            <h1>{country.name.common}</h1>
            <p><strong>Capital:</strong> {country.capital?.[0]}</p>
            <p><strong>Região:</strong> {country.region}</p>
            <p><strong>Código FIFA:</strong> {country.fifa}</p>

            <Link to="/" className="btn-back">Voltar</Link>
        </div>
    )
}

export default Detalhes
