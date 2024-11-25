import { useNavigate } from "react-router-dom";
import "./Home.css";
import { useState } from "react";
import { useFavorite } from "../Contexts/FavoriteContext";

function Home() {
  const { favorites, setFavorites, shows } = useFavorite();

  const navigate = useNavigate();

  const cardClick = (id: number): void => {
    navigate(`/movie/${id}`);
  };

  const toggleLike = (id: number) => {
    if (favorites.includes(id) === true) {
      setFavorites(favorites.filter((AlreadyId) => AlreadyId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const handleSearchTerm = (search: { target: { value: any } }) => {
    const value = search.target.value;
    value.length > 2 && setSearchTerm(value);
  };

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="searchBar">
        <input
          type="text"
          name="searchBar"
          placeholder="Recherche"
          onChange={handleSearchTerm}
        />
      </div>
      <section className="card">
        {shows
          .filter((val) => {
            return val.name.toLowerCase().includes(searchTerm.toLowerCase());
          })
          .slice(0, 12)
          .map((movie) => (
            <figure key={movie.id} className="item">
              <div className="centerImage">
                <img
                  className="imagefilm"
                  src={movie.image.original}
                  alt={movie.name}
                  onClick={() => cardClick(movie.id)}
                  onKeyDown={() => cardClick(movie.id)}
                />
              </div>
              <section className="titleButton">
                <h2
                  onClick={() => cardClick(movie.id)}
                  onKeyDown={() => cardClick(movie.id)}
                  className="titlefilm"
                >
                  {movie.name}
                </h2>
                <button
                  type="button"
                  className="star"
                  onClick={() => toggleLike(movie.id)}
                >
                  {favorites.includes(movie.id) === true ? "⭐" : "☆"}
                </button>
              </section>
            </figure>
          ))}
      </section>
    </>
  );
}

export default Home;
