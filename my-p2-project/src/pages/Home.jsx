import axios from "axios"
import { useState, useEffect } from "react"
import CountryCard from "../components/CountryCard"
import Loading from "../components/Loading"

function Home() {
    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchCountries = async () => {
            setLoading(true)
            try {
                const response = await axios.get(
                    "https://restcountries.com/v3.1/all?fields=name,region,flags,cca3"
                )
                setCountries(response.data)
            } catch (error) {
                console.log(error)
                alert("Failed to fetch countries")
            } finally {
                setLoading(false)
            }
        }

        fetchCountries()
    }, [])

    return (
        <>
            <div className="country-header">
                <h1>Consulta de países</h1>
            </div>

            <div className="country-search">
                <input type="text" placeholder="Procure um país" />
                <button type="submit">Buscar</button>
            </div>

            {loading ? (
                <Loading />
            ) : (
                <div className="countries-container">
                    {countries.map(country => (
                        <CountryCard
                            key={country.cca3}
                            image={country.flags.png}
                            name={country.name.common}
                            continent={country.region}
                        />
                    ))}
                </div>
            )}
        </>
    )
}

export default Home
