
import PropTypes from "prop-types";

const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search Pokémon..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="p-2 w-80 border border-gray-300 rounded-md mb-4"
    />
  );
};

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default SearchBar;
