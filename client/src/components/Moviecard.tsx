import { useNavigate } from "react-router-dom";
import "./Moviecard.css";
import { useState } from "react";
import MovieDetails from "./MovieDetails";

interface MoviecardProps {
  movies: Movie[];
  link: string;
}

interface Movie {
  image: string;
  title: string;
  year: number;
  director: string;
  country: string;
  summary: string;
  id: number;
}

function Moviecard({ movies, link }: MoviecardProps) {
  const navigate = useNavigate();

  const cardClick = (Lien: string): undefined => {
    navigate(Lien);
  };

  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <>
      <section className="card">
        {movies.map((movie, index) => (
          <figure key={movie.id} className={`item-${index}`}>
            <div className="centerImage">
              <img
                className="imagefilm"
                src={movie.image}
                alt={movie.title}
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
                {movie.title}{" "}
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

export default Moviecard;
