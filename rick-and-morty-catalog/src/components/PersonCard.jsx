import { Link } from "react-router-dom";

const getStatusColor = (status) => {
  if (status === "Alive") return "green";
  if (status === "Dead") return "red";
  return "gray";
};

function PersonCard({ character }) {
  return (
    <Link
      to={`/personagem/${character.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="card">
        <img src={character.image} alt={character.name} className="card-image" />
        <h3 className="card-title">{character.name}</h3>
        <p className="card-species">{character.species}</p>
        <p className="card-status" style={{ color: getStatusColor(character.status) }}>
          {character.status}
        </p>
      </div>
    </Link>
  );
}

export default PersonCard;
