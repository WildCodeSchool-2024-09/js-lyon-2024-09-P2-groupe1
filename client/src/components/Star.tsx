import "../pages/Home.css";

interface StarProps {
  toggleLike: (id: number) => void;
  favorites: number[];
  showID: number;
}

function Star({ toggleLike, favorites, showID }: StarProps) {
  return (
    <button type="button" className="star" onClick={() => toggleLike(showID)}>
      {favorites.includes(showID) === true ? "⭐" : "☆"}
    </button>
  );
}

export default Star;
