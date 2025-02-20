import  { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import PokemonList from "./components/PokemonList";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=50");
        const results = response.data.results;

        const detailedPokemons = await Promise.all(
          results.map(async (pokemon) => {
            const res = await axios.get(pokemon.url);
            return {
              id: res.data.id,
              name: res.data.name,
              image: res.data.sprites.front_default,
            };
          })
        );

        setPokemons(detailedPokemons);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPokemons();
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-5 bg-gray-100 min-h-screen text-center">
      <h1 className="text-3xl font-bold mb-4">Pokémon Search</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <PokemonList pokemons={filteredPokemons} />
    </div>
  );
};

export default App;
