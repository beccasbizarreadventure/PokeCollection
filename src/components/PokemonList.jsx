import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const PokemonList = () => {
  const {
    pokemonList,
    addPokemon
  } = useContext(PokemonContext);

  return (
    <div className="pokemon-list">
      <h2>All Pokemon List</h2>
      
      {pokemonList.map((pokemon) =>
        <div key={`${pokemon.id}`}>
          <p>{pokemon.id}</p>
          <p>{pokemon.name}</p>
          <img alt={pokemon.name} src={pokemon.img} onClick={addPokemon(pokemon)}/>

        </div>)}
    </div>
  )
}

export default PokemonList;