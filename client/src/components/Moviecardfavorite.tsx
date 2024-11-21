import "../pages/Home.css";
import { useEffect, useState } from "react";
import { type Movie, useFavorite } from "../contexts/FavoriteContext";

function Moviecardfavorite() {
  const { favorites, shows } = useFavorite();

  const [showFavorite, setShowFavorite] = useState<Movie[]>([]);

  useEffect(() => {
    const favoriteShows: Movie[] = shows.filter((show) =>
      favorites.includes(show.id),
    );
    setShowFavorite(favoriteShows);
  }, [favorites, shows]);

  return (
    <>
      <section className="card">
        {showFavorite.map((movie, index) => (
          <figure key={movie.id} className={`item-${index}`}>
            <div className="centerImage">
              <img
                className="imagefilm"
                src={movie.image.medium}
                alt={movie.name}
              />
            </div>
            <section className="titleButton">
              <h2 className="titlefilm">{movie.name}</h2>
              <button type="button" className="star">
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
