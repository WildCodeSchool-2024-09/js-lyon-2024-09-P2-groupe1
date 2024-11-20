import "../pages/Home.css";
import { useFavorite } from "../Contexts/FavoriteContext";

function Moviecardfavorite() {
  const { favorites, toggleLike, shows } = useFavorite();

  const showFavorite = [];

  for (let i = 0; i < shows.length; i++) {
    if (favorites.includes(shows[i].id) === true) {
      showFavorite.push(shows[i]);
    }
  }
  return (
    <>
      <section className="card">
        {showFavorite.slice(0, 12).map((movie, index) => (
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
