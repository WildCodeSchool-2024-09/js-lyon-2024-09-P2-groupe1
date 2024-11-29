import { useNavigate } from "react-router-dom";
import "./Home.css";
import { useState } from "react";
import { useFavorite } from "../Contexts/FavoriteContext";
import Pagination from "../components/Pagination";
import SearchBar from "../components/searchBar";
import ShowCard from "./Showcard";

function Home() {
  const { favorites, shows, toggleLike } = useFavorite(); // states et fonctions importées depuis le contexte liés à l'ajout de favoris

  const [pageActuelle, setPageActuelle] = useState(1);
  const showsParPage = 12;

  const indexDebut = (pageActuelle - 1) * showsParPage;
  const indexFin = indexDebut + showsParPage;

  const navigate = useNavigate();

  const cardClick = (id: number): void => {
    //fonction qui permet au clique sur les Showcard de renvoyer à la page Showdetails
    navigate(`/show/${id}`);
  };

  const [searchTerm, setSearchTerm] = useState(""); //state utilisé pour la barre de recherche

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
