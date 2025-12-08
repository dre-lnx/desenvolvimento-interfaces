import axios from "axios"
import { useState, useEffect } from "react"
import CountryCard from "../components/CountryCard"
import Loading from "../components/Loading"
import Header from "../components/Header"
import Error from "../components/Error"

function Home() {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        fetchAllCountries()
    }, [])

    const fetchAllCountries = async () => {
        setLoading(true)
        setError("")

        try {
            const response = await axios.get(
                "https://restcountries.com/v3.1/all?fields=name,region,flags,cca3"
            )
            setCountries(response.data)
        } catch (err) {
            setError("Erro ao carregar os países.")
        } finally {
            setLoading(false)
        }
    }

    const handleSearch = async (name) => {
        if (!name.trim()) {
            return fetchAllCountries()
        }
        setLoading(true)
        setError("")

        try {
            const response = await axios.get(
                `https://restcountries.com/v3.1/name/${name}?fields=name,region,flags,cca3`
            )
            setCountries(response.data)
        } catch (err) {
            setCountries([])
            setError("Nenhum país encontrado")
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Header onSearch={handleSearch} />
            {loading && <Loading />}
            {error && <Error error={error}/>}
            {!loading && countries.length === 0 && !error && (
                <Error error={"Nenhum país encontrado."}/>
            )}

            <div className="countries-container">
                {countries.map(country => (
                    <CountryCard
                        key={country.cca3}
                        code={country.cca3}
                        image={country.flags.png}
                        name={country.name.common}
                        continent={country.region}
                    />
                ))}
            </div>
        </>
    )
}

export default Home
