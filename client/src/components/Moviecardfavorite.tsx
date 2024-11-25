import "../pages/Home.css";
import { useEffect, useState } from "react";
import { type Movie, useFavorite } from "../Contexts/FavoriteContext";

function Moviecardfavorite() {
  const { favorites, setFavorites, shows } = useFavorite();

  const [showFavorite, setShowFavorite] = useState<Movie[]>([]);

  useEffect(() => {
    const favoriteShows: Movie[] = shows.filter((show) =>
      favorites.includes(show.id),
    );
    setShowFavorite(favoriteShows);
  }, [favorites, shows]);

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
        {showFavorite.map((movie, index) => (
          <figure key={movie.id} className={`item-${index}`}>
            <div className="centerImage">
              <img
                className="imagefilm"
                src={movie.image.original}
                alt={movie.name}
              />
            </div>
            <section className="titleButton">
              <h2 className="titlefilm">{movie.name}</h2>
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

export default Moviecardfavorite;
