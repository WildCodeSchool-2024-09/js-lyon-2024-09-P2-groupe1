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

function Moviecard({ movies }: MoviecardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const closeMovieDetails = () => {
    setSelectedMovie(null);
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
                onClick={() => handleMovieClick(movie)}
                onKeyUp={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleMovieClick(movie);
                  }
                }}
              />
            </div>
            <h2
              onClick={() => handleMovieClick(movie)}
              onKeyUp={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleMovieClick(movie);
                }
              }}
            >
              {movie.title}
            </h2>
            <div className="paraButton">
              <button
                type="button"
                className="star"
                onClick={toggleLike}
                onKeyUp={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    toggleLike();
                  }
                }}
                aria-pressed={isLiked}
              >
                {isLiked ? "⭐" : "☆"}
              </button>
            </div>
          </figure>
        ))}
      </section>

      {selectedMovie && (
        <MovieDetails
          image={selectedMovie.image}
          title={selectedMovie.title}
          year={selectedMovie.year}
          director={selectedMovie.director}
          country={selectedMovie.country}
          summary={selectedMovie.summary}
          onClose={closeMovieDetails}
        />
      )}
    </>
  );
}

export default Moviecard;
