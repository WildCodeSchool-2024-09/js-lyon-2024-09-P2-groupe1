import { useNavigate } from "react-router-dom";
import "./Home.css";
import { useState } from "react";
import { useFavorite } from "../Contexts/FavoriteContext";
import Pagination from "../components/Pagination";
import SearchBar from "../components/searchBar";

function Home() {
  const { favorites, setFavorites, shows } = useFavorite();

  const [pageActuelle, setPageActuelle] = useState(1);
  const showsParPage = 12;

  const indexDebut = (pageActuelle - 1) * showsParPage;
  const indexFin = indexDebut + showsParPage;

  const navigate = useNavigate();

  const cardClick = (id: number): void => {
    navigate(`/show/${id}`);
  };

  const toggleLike = (id: number) => {
    if (favorites.includes(id) === true) {
      setFavorites(favorites.filter((AlreadyId) => AlreadyId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <SearchBar onSearch={setSearchTerm} />
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
      <Pagination
        pageActuelle={pageActuelle}
        totalPages={Math.ceil(shows.length / showsParPage)}
        onPageChange={setPageActuelle}
      />
    </>
  );
}

export default Home;
