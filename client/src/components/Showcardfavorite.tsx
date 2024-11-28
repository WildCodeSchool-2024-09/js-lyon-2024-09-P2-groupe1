import "../pages/Home.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { type Show, useFavorite } from "../Contexts/FavoriteContext";
import Star from "./Star";

function ShowCardFavorite() {
  //permet d'afficher les infos liées aux pages ajoutées en favoris
  const { favorites, shows, toggleLike } = useFavorite();

  const [ShowFavorite, setShowFavorite] = useState<Show[]>([]);

  useEffect(() => {
    // permet de filtrer les pages à ajouter en favoris au chargement de la page
    const favoriteShows: Show[] = shows.filter((show) =>
      favorites.includes(show.id),
    );
    setShowFavorite(favoriteShows);
  }, [favorites, shows]);

  const navigate = useNavigate();

  const cardClick = (id: number): void => {
    //fonction qui permet au clique sur les Showcard de renvoyer à la page Showdetails
    navigate(`/show/${id}`);
  };

  return (
    <>
      {ShowFavorite.length === 0 ? ( // affichage conditionnel en fonction de s'il y a des séries ajoutées aux favoris ou non
        <h1 className="favorites-title">NO FAV🍅RITES</h1>
      ) : (
        <>
          <h1 className="favorites-title">YOUR FAV🍅RITES</h1>
          <section className="card">
            {ShowFavorite.map(
              (
                show, //permet l'affichage des cartes pour les séries ajoutées en favoris
              ) => (
                <figure key={show.id} className="item">
                  <div className="centerImage">
                    <img
                      className="imageShow"
                      src={show.image.original}
                      alt={show.name}
                      onClick={() => cardClick(show.id)}
                      onKeyDown={() => cardClick(show.id)}
                    />
                  </div>
                  <section className="titleButton">
                    <h2
                      className="titleShow"
                      onClick={() => cardClick(show.id)}
                      onKeyDown={() => cardClick(show.id)}
                    >
                      {show.name}
                    </h2>
                    <Star // composant bouton favori pour ajouter une série à la liste de favori
                      toggleLike={toggleLike}
                      favorites={favorites}
                      showID={show.id}
                    />
                  </section>
                </figure>
              ),
            )}
          </section>
        </>
      )}
    </>
  );
}

export default ShowCardFavorite;
