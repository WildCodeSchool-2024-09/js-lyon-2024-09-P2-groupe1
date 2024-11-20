import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LeftArrow from "../assets/images/left-arrow.png";
import "./MovieDetails.css";
import { Link } from "react-router-dom";

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

  return (
    <section className="movie-details">
      <img
        src={movie.image.original}
        alt={movie.name}
        className="movie-poster"
      />
      <div className="movie-info">
        <h1>{movie.name}</h1>
        <p>
          <strong>Année de sortie :</strong>{" "}
          {new Date(movie.premiered).getFullYear()}
        </p>
        <p>
          <strong>Pays :</strong> {movie.network?.country.name}
        </p>
        <p>
          <strong>Genres :</strong> {movie.genres.join(", ")}
        </p>
        {/* <p>
          <strong>Résumé :</strong>{" "}
          <span dangerouslySetInnerHTML={{ __html: movie.summary }} />
        </p> */}
      </div>

      <Link to="/" style={{ textDecoration: "none" }}>
        <button type="button">
          <img src={LeftArrow} alt="Retour en arrière" />
        </button>
      </Link>
    </section>
  );
}

export default MovieDetails;
