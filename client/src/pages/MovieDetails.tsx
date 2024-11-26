import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LeftArrow from "../assets/images/left-arrow.png";
import "./MovieDetails.css";
import { Link } from "react-router-dom";
import { useFavorite } from "../Contexts/FavoriteContext";

interface MovieDetailsData {
  name: string;
  image: { original: string };
  premiered: string;
  summary: string;
  network: { country: { name: string } };
  genres: string[];
}

function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetailsData | null>(null);
  const { favorites, setFavorites } = useFavorite();

  useEffect(() => {
    if (id) {
      fetch(`https://api.tvmaze.com/shows/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setMovie(data);
        });
    }
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  const toggleFavorite = (movieId: number) => {
    if (favorites.includes(movieId)) {
      setFavorites(favorites.filter((id) => id !== movieId));
    } else {
      setFavorites([...favorites, movieId]);
    }
  };
  const movieId = id ? Number(id) : null;

  const isFavorite = movieId !== null && favorites.includes(movieId);
  return (
    <section className="movie-details">
      <section className="movie-card">
        <img
          src={movie.image.original}
          alt={movie.name}
          className="movie-poster"
        />
        <div className="movie-info">
          <h1>{movie.name}</h1>
          <p>
            <strong>Release date :</strong>{" "}
            {new Date(movie.premiered).getFullYear()}
          </p>
          <p>
            <strong>Country :</strong> {movie.network?.country.name}
          </p>
          <p>
            <strong>Genres :</strong> {movie.genres.join(", ")}
          </p>
          <div id="star-position">
            {/* <p id="summary">
              <span dangerouslySetInnerHTML={{ __html: movie.summary }} />
            </p> */}
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
            <button id="star-button" onClick={() => toggleFavorite(Number(id))}>
              {isFavorite ? "⭐" : "☆"}
            </button>
          </div>
        </div>
      </section>
      <section id="ButtonBackSection">
        <Link to="/" style={{ textDecoration: "none" }}>
          <button type="button">
            <img src={LeftArrow} alt="Retour en arrière" id="BackButton" />
          </button>
        </Link>
      </section>
    </section>
  );
}

export default MovieDetails;
