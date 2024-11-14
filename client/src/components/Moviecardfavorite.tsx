import "./Moviecard.css";
import { useState } from "react";

interface MoviecardfavoriteProps {
  movies: Movies[];
  index: number;
}

interface Movies {
  image: string;
  title: string;
  description: string;
  resume: string;
  id: number;
}

function Moviecardfavorite({ movies, index }: MoviecardfavoriteProps) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <>
      <section>
        <figure key={movies[0].id} className={`item-${index}`}>
          {/* enlever les 0 dès que j'aurai trouvé comment transférer les infos d'une page à une autre */}
          <div className="centerImage">
            <img
              className="imagefilm"
              src={movies[0].image}
              alt={movies[0].title}
            />
          </div>
          <section className="titleButton">
            <h2 className="titlefilm">{movies[0].title} </h2>
            <p> {movies[0].resume}</p>
            <button type="button" className="star" onClick={toggleLike}>
              {isLiked === true ? "⭐" : "☆"}
            </button>
          </section>
        </figure>
      </section>
    </>
  );
}

export default Moviecardfavorite;
