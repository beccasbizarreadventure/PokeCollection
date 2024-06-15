import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

const PokemonList = () => {
  const {
    pokemonList,
    setPokemonList,
    customPokemonList,
    setCustomPokemonList
  } = useContext(PokemonContext);

  const addToCustomList = (pokemon) => () => {
    setCustomPokemonList([...customPokemonList, pokemon]);
    console.log(pokemon)
    console.log(customPokemonList);
  };


  return (
    <div className="pokemon-list">
      <h2>All Pokemon List</h2>
      
      {pokemonList.map((pokemon) =>
        <div key={`${pokemon.id}`}>
          <p>{pokemon.id}</p>
          <p>{pokemon.name}</p>
          <img alt={pokemon.name} src={pokemon.img} />
          <button onClick={addToCustomList(pokemon)}>+</button>
        </div>)}
    </div>
  )
}

export default PokemonList;