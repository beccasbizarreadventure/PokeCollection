import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const PokemonList = () => {
  const {
    pokemonList,
    addPokemon
  } = useContext(PokemonContext);

  // const removeFromMainList = (removedPokemon) => {
  //   const updatedList = pokemonList.filter(pokemon => pokemon !== removedPokemon);
  //   setPokemonList(updatedList);
  // }

  // const addToCustomList = (pokemon) => () => {
  //   setCustomPokemonList([...customPokemonList, pokemon]);
  //   removeFromMainList(pokemon);
  // };


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