import "./Moviecard.css";
import { useState } from "react";

interface MoviecardfavoriteProps {
  movies: Movies[];
}

interface Movies {
  image: string;
  title: string;
  description: string;
}

function Moviecardfavorite({ movies }: MoviecardfavoriteProps) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <>
      <section>
        <figure>
          <div className="centerImage">
            <img className="imagefilm" src={movies.image} alt={movies.title} />
          </div>
          <section className="titleButton">
            <h2 className="titlefilm">{movies.title} </h2>
            <p> {movies.resume}</p>
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
