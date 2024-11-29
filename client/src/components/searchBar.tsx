import type React from "react";
import "../pages/Home.css";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="searchBarContainer">
      <input
        type="text"
        className="searchBar"
        id="searchBar"
        placeholder="Search"
        onChange={handleSearchTerm}
      />
    </div>
  );
};
export default SearchBar;
