import "../pages/Home.css";

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
        .filter((val) =>
          val.name.toLowerCase().includes(searchTerm.toLowerCase()),
        )
        .slice(indexDebut, indexFin)
        .map((show) => (
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
              <button
                type="button"
                className="star"
                onClick={() => toggleLike(show.id)}
              >
                {favorites.includes(show.id) === true ? "⭐" : "☆"}
              </button>
            </section>
          </figure>
        ))}
    </section>
  );
}

export default ShowCard;
