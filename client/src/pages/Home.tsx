import { useNavigate } from "react-router-dom";
import "./Home.css";
import { useEffect, useState } from "react";

interface Movie {
  image: { medium: string };
  name: string;
  description: string;
  id: number;
}

function Home() {
  const navigate = useNavigate();

  const cardClick = (Lien: string): undefined => {
    navigate(Lien);
  };

  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleLike = (id: number) => {
    if (favorites.includes(id) === true) {
      setFavorites(favorites.filter((AlreadyId) => AlreadyId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const [shows, setShows] = useState<Movie[]>([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
      });
  }, []);

  const link = "link";

  return (
    <>
      <section className="card">
        {shows.slice(0, 12).map((movie, index) => (
          <figure key={movie.id} className={`item-${index}`}>
            <div className="centerImage">
              <img
                className="imagefilm"
                src={movie.image.medium}
                alt={movie.name}
                onClick={() => {
                  cardClick(link);
                }}
                onKeyDown={() => {
                  cardClick(link);
                }}
              />
            </div>
            <section className="titleButton">
              <h2
                onClick={() => {
                  cardClick(link);
                }}
                onKeyDown={() => {
                  cardClick(link);
                }}
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
