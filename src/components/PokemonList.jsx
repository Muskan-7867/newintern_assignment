import { useState, useEffect } from "react";
import PokemonCard from "./Pokemon";
import PropTypes from "prop-types";

const PokemonList = ({ pokemons }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (pokemons.length > 0) {
      // Simulate a delay for loading effect
      setTimeout(() => {
        setLoading(false);
      }, 1000); // Adjust time as needed
    }
  }, [pokemons]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {loading ? (
        <p className="text-center col-span-full text-gray-500">Loading Pokémons...</p>
      ) : (
        pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))
      )}
    </div>
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PokemonList;
