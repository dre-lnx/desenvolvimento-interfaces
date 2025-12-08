import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const getStatusColor = (status) => {
  if (status === "Alive") return "green";
  if (status === "Dead") return "red";
  return "gray";
};

function PersonDetail() {
  const { id } = useParams();
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPerson = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      if (!response.ok) {
        throw new Error("Erro ao carregar personagem");
      }
      const data = await response.json();
      setChar(data);
    } catch (err) {
      setError("Erro ao carregar personagem.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPerson();
  }, [id]);

  if (loading) {
    return (
      <div className="container">
        <p className="alert alert-loading">Carregando personagem...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <p className="alert alert-error">{error}</p>
        <Link to="/">Voltar</Link>
      </div>
    );
  }

  if (!char) {
    return (
      <div className="container">
        <p>Nenhum dado encontrado.</p>
        <Link to="/">Voltar</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <Link to="/" className="back-link">← Voltar</Link>
      <div className="detail">
        <img src={char.image} alt={char.name} className="detail-image" />
        <div className="detail-info">
          <h2>{char.name}</h2>
          <p>
            <strong>Status:</strong>{" "}
            <span style={{ color: getStatusColor(char.status) }}>
              {char.status}
            </span>
          </p>
          <p><strong>Espécie:</strong> {char.species}</p>
          <p><strong>Gênero:</strong> {char.gender}</p>
          <p><strong>Origem:</strong> {char.origin?.name}</p>
          <p><strong>Episódios:</strong> {char.episode?.length}</p>
        </div>
      </div>
    </div>
  );
}

export default PersonDetail;
