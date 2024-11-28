import "../pages/Home.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { type Show, useFavorite } from "../Contexts/FavoriteContext";
import Star from "./Star";

function ShowCardFavorite() {
  const { favorites, setFavorites, shows } = useFavorite();

  const [ShowFavorite, setShowFavorite] = useState<Show[]>([]);

  useEffect(() => {
    const favoriteShows: Show[] = shows.filter((show) =>
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

  const navigate = useNavigate();

  const cardClick = (id: number): void => {
    navigate(`/show/${id}`);
  };

  return (
    <>
      {ShowFavorite.length === 0 ? (
        <h1 className="favorites-title">NO FAV🍅RITES</h1>
      ) : (
        <>
          <h1 className="favorites-title">YOUR FAV🍅RITES</h1>
          <section className="card">
            {ShowFavorite.map((show) => (
              <figure key={show.id} className="item">
                <div className="centerImage">
                  <img
                    className="imageShow"
                    src={show.image.original}
                    alt={show.name}
                    onClick={() => cardClick(show.id)}
                    onKeyDown={() => cardClick(show.id)}
                  />
                </div>
                <section className="titleButton">
                  <h2
                    className="titleShow"
                    onClick={() => cardClick(show.id)}
                    onKeyDown={() => cardClick(show.id)}
                  >
                    {show.name}
                  </h2>
                  <Star
                    toggleLike={toggleLike}
                    favorites={favorites}
                    showID={show.id}
                  />
                </section>
              </figure>
            ))}
          </section>
        </>
      )}
    </>
  );
}

export default ShowCardFavorite;
