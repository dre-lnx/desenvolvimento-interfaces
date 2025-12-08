import { Link } from "react-router-dom"

function CountryCard({ image, name, continent, code }) {
    return (
        <Link to={`/pais/${code}`}>
            <div className="country-card">
                <img src={image} alt={name} />
                <h3>{name}</h3>
                <p>{continent}</p>
            </div>
        </Link>
    )
}

export default CountryCard
