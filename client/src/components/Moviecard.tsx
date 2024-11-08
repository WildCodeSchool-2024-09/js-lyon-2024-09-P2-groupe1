import { useNavigate } from "react-router-dom";
import "./Moviecard.css";
import { useState } from "react";

interface MoviecardProps {
  movies: Movie[];
  link: string;
}

interface Movie {
  image: string;
  title: string;
  description: string;
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
      <section>
        {movies.map((movie, index) => (
          <figure key={movie.id} className={`item-${index}`}>
            <div className="centerImage">
              <img
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
            <h2
              onClick={() => {
                cardClick(link);
              }}
              onKeyDown={() => {
                cardClick(link);
              }}
            >
              {movie.title}{" "}
            </h2>
            <div className="paraButton">
              <p
                onClick={() => {
                  cardClick(link);
                }}
                onKeyDown={() => {
                  cardClick(link);
                }}
              >
                {movie.description}
              </p>
              <button type="button" className="star" onClick={toggleLike}>
                {isLiked === true ? "⭐" : "☆"}
              </button>
            </div>
          </figure>
        ))}
      </section>
    </>
  );
}

export default Moviecard;
