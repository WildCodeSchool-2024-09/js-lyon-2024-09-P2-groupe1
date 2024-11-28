import { useNavigate } from "react-router-dom";
import "./Home.css";
import { useState } from "react";
import { useFavorite } from "../Contexts/FavoriteContext";
import Pagination from "../components/Pagination";
import SearchBar from "../components/searchBar";
import ShowCard from "./Showcard";

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
      <ShowCard
        shows={shows}
        favorites={favorites}
        searchTerm={searchTerm}
        indexDebut={indexDebut}
        indexFin={indexFin}
        cardClick={cardClick}
        toggleLike={toggleLike}
      />
      <Pagination
        pageActuelle={pageActuelle}
        totalPages={Math.ceil(shows.length / showsParPage)}
        onPageChange={setPageActuelle}
      />
    </>
  );
}

export default Home;
