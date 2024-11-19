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

  const cardClick = (id: number): void => {
    navigate(`/movie/${id}`);
  };

  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const [shows, setShows] = useState<Movie[]>([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => {
        setShows(data);
      });
  }, []);

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
                onClick={() => cardClick(movie.id)}
                onKeyDown={() => cardClick(movie.id)}
              />
              <h2
                onClick={() => cardClick(movie.id)}
                onKeyDown={() => cardClick(movie.id)}
                className="titlefilm"
              >
                {movie.name}
              </h2>
            </div>
            <section className="titleButton">
              <h2
                onClick={() => cardClick(movie.id)}
                onKeyDown={() => cardClick(movie.id)}
                className="titlefilm"
              >
                {movie.name}
              </h2>
              <button type="button" className="star" onClick={toggleLike}>
                {isLiked === true ? "⭐" : "☆"}
              </button>
            </section>
          </figure>
        ))}
      </section>
    </>
  );
}

export default Home;
