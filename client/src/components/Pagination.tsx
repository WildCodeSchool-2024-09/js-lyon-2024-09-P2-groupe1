import "./Pagination.css";
import LeftArrow from "../assets/images/left-arrow.png";
import RightArrow from "../assets/images/right-arrow.png";

interface PaginationProps {
  pageActuelle: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  // Fonction callback appelée lorsqu'une page est changée,
  // Permet au composant de communiquer un changement de page à son parent.
}

function Pagination({
  pageActuelle,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="pagination">
      <button
        type="button"
        disabled={pageActuelle === 1}
        // rend inactif le button si la page actuelle est la 1ère, et empêche un passage en dessous de 1.
        onClick={() => onPageChange(pageActuelle - 1)}
        // Appel au callback `onPageChange` avec le numéro de la page précédente (pageActuelle - 1).
      >
        <img src={LeftArrow} alt="Previous" className="buttonpagination" />
        <h4>PREVIOUS</h4>
      </button>
      <button
        type="button"
        disabled={pageActuelle === totalPages}
        // rend inactif le button si la page actuelle est la dernière page.
        onClick={() => onPageChange(pageActuelle + 1)}
      >
        <img src={RightArrow} alt="Next" className="buttonpagination" />
        <h4>NEXT</h4>
      </button>
    </div>
  );
}

export default Pagination;
