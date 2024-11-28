import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LeftArrow from "../assets/images/left-arrow.png";
import "./ShowDetails.css";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import { useFavorite } from "../Contexts/FavoriteContext";

interface ShowDetailsData {
  name: string;
  image: { original: string };
  premiered: string;
  summary: string;
  network: { country: { name: string } };
  genres: string[];
}

function ShowDetails() {
  const { id } = useParams<{ id: string }>(); // On récupère l'id depuis l'URL avec "useParams"
  const [show, setMovie] = useState<ShowDetailsData | null>(null);
  // Le type `ShowDetailsData | null` indique que `show` peut être soit un objet contenant
  // les détails du show, soit `null` si les données ne sont pas encore chargées.
  const { favorites, setFavorites } = useFavorite();
  const MovieSummary = ({ summary }: { summary: string }) => {
    // On déclare un composant enfant `MovieSummary`et on lui donne la propriéte "summary" de type "string"
    return <div>{parse(summary)}</div>;
  };

  useEffect(() => {
    if (id) {
      // Vérifie si un paramètre `id` est présent dans la route dynamique, sinon pas de requête
      fetch(`https://api.tvmaze.com/shows/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setMovie(data);
        });
    }
  }, [id]);

  if (!show) {
    return <p>Loading...</p>; // message "d'attente" au chargement de l'API
  }

  const toggleFavorite = (showId: number) => {
    // Vérifie si le show est déjà dans la liste des favoris.
    if (favorites.includes(showId)) {
      // Si le show est déjà dans les favoris, on le retire en filtrant la liste
      setFavorites(favorites.filter((id) => id !== showId));
    } else {
      // Sinon, on l'ajoute à la liste des favoris en créant un nouveau tableau.
      setFavorites([...favorites, showId]);
    }
  };
  const showId = id ? Number(id) : null;
  // Vérification si id a une valeur. Si oui l'expression avant les deux-points (:)
  // est exécutée, sinon, l'expression après les deux-points est exécutée.

  const isFavorite = showId !== null && favorites.includes(showId);
  return (
    <section className="show-details">
      <section className="show-card">
        <img
          src={show.image.original}
          alt={show.name}
          className="show-poster"
        />
        <div className="show-info">
          <div id="title-favorite">
            <h1>{show.name}</h1>
            <button
              type="button"
              id="star-button"
              onClick={() => toggleFavorite(Number(id))}
            >
              {isFavorite ? "⭐" : "☆"}
            </button>
          </div>
          <p>
            <strong>Release date :</strong>{" "}
            {new Date(show.premiered).getFullYear()}
          </p>
          <p>
            <strong>Country :</strong> {show.network?.country.name}
          </p>
          <p>
            <strong>Genres :</strong> {show.genres.join(", ")}
          </p>
          <div id="star-position">
            <p id="summary">
              <MovieSummary summary={show.summary} />
            </p>
          </div>
        </div>
      </section>
      <section id="back-button-section">
        <Link to="/" style={{ textDecoration: "none" }}>
          <button type="button">
            <img src={LeftArrow} alt="Retour en arrière" id="back-button" />
          </button>
        </Link>
      </section>
    </section>
  );
}

export default ShowDetails;
