import "./Pagination.css";
import LeftArrow from "../assets/images/left-arrow.png";
import RightArrow from "../assets/images/right-arrow.png";

interface PaginationProps {
  pageActuelle: number;
  totalPages: number;
  onPageChange: (page: number) => void;
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
        onClick={() => onPageChange(pageActuelle - 1)}
      >
        <img src={LeftArrow} alt="Previous" className="buttonpagination" />
        <h4>PREVIOUS</h4>
      </button>
      <button
        type="button"
        disabled={pageActuelle === totalPages}
        onClick={() => onPageChange(pageActuelle + 1)}
      >
        <img src={RightArrow} alt="Next" className="buttonpagination" />
        <h4>NEXT</h4>
      </button>
    </div>
  );
}

export default Pagination;
