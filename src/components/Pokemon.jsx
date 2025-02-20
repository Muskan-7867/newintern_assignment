
import PropTypes from "prop-types";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center">
      <img src={pokemon.image} alt={pokemon.name} className="w-24 h-24 mx-auto" />
      <h3 className="text-lg font-semibold mt-2 capitalize">{pokemon.name}</h3>
    </div>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonCard;
