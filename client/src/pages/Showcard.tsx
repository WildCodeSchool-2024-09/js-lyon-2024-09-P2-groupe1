import "../pages/Home.css";
import Star from "../components/Star";

interface Show {
  id: number;
  name: string;
  image: {
    original: string;
  };
}

interface ShowCardProps {
  shows: Show[];
  favorites: number[];
  searchTerm: string;
  indexDebut: number;
  indexFin: number;
  cardClick: (id: number) => void;
  toggleLike: (id: number) => void;
}

function ShowCard({
  // Composant permettant d'afficher les infos relatives aux séries
  shows,
  favorites,
  searchTerm,
  indexDebut,
  indexFin,
  cardClick,
  toggleLike,
}: ShowCardProps) {
  return (
    <section className="card">
      {shows
        .filter(
          (val) => val.name.toLowerCase().includes(searchTerm.toLowerCase()), // permet de rechercher parmis les films
        )
        .slice(indexDebut, indexFin) // permet d'afficher les cartes de film en fonction de la page sur laquelle on se situe
        .map(
          (
            show, //
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
                  onClick={() => cardClick(show.id)}
                  onKeyDown={() => cardClick(show.id)}
                  className="titleShow"
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
  );
}

export default ShowCard;
