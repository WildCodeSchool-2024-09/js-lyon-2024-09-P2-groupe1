import "./MovieDetails.css";
import { useState } from "react";
import BackArrow from "../assets/images/back-arrow.png";
import Moviecard from "./Moviecard";

interface MovieDetailsProps {
  image: string;
  title: string;
  year: number;
  director: string;
  country: string;
  summary: string;
  onClose: () => void;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({
  image,
  title,
  year,
  director,
  country,
  summary,
  onClose,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <div className="movie-details">
        <div className="MoviePoster">
          <img src={image} alt={`${title} poster`} />
        </div>
        <h2 className="CardTitle">{title}</h2>
        <div className="MovieInfos">
          <h3 className="CardYear">{year}</h3>
          <h3 className="CardCountry">{country}</h3>
          <h3 className="CardDirector">{director}</h3>
        </div>
        <div className="SummaryFavorite">
          <p className="CardSummary">{summary}</p>
          <button
            type="button"
            onClick={toggleFavorite}
            className="favorite-button"
          >
            {isFavorite ? "⭐" : "☆"}
          </button>
        </div>
      </div>
      <div className="ButtonBack">
        <button type="button" onClick={onClose}>
          <img src={BackArrow} alt="Icône retour en arrière" />
        </button>
      </div>
    </>
  );
};

export default MovieDetails;
