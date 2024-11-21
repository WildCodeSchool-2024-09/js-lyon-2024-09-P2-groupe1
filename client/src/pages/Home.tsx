import { useNavigate } from "react-router-dom";
import "./Home.css";
import { useFavorite } from "../Contexts/FavoriteContext";
import { Link } from "react-router-dom";

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

  return (
    <>
      <section className="card">
        {shows.slice(0, 12).map((movie) => (
          <figure key={movie.id} className="item">
            <div className="centerImage">
              <img
                className="imagefilm"
                src={movie.image.medium}
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
