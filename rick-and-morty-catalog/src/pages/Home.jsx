import { useEffect, useState } from "react";
import PersonCard from "../components/PersonCard.jsx";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const fetchCharacters = async (name = "") => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${name}`
      );
      if (!response.ok) {
        throw new Error("Erro ao buscar personagens");
      }
      const data = await response.json();
      setCharacters(data.results || []);
    } catch (err) {
      setError("Nenhum personagem encontrado ou erro na busca.");
      setCharacters([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchCharacters(search);
  };

  return (
    <div className="container">
      <h1>Catálogo de Personagens</h1>

      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Buscar por nome..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      {loading && <p className="alert alert-loading">Carregando informações, aguarde...</p>}
      {error && <p className="alert alert-error">{error}</p>}

      <div className="grid">
        {characters.map((c) => (
          <PersonCard key={c.id} character={c} />
        ))}
      </div>

      {!loading && !error && characters.length === 0 && (
        <p>Nenhum personagem encontrado.</p>
      )}
    </div>
  );
}

export default Home;
