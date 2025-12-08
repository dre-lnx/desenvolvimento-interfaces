import Link from "react-router-dom"

function CountryCard(props) {
    return (
    <Link to={`/pais/${props.name}`}>
        <div className="country-card">
            <img src={props.image} alt={props.name} />
            <h3>{props.name}</h3>
            <p>{props.continent}</p>
        </div>
    </Link>
    )
}

export default CountryCard