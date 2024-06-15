import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

const CustomPokemonList = () => {
  const {
    customPokemonList,
    removePokemon
  } = useContext(PokemonContext);

  // const removeFromCustomList = (removedPokemon) => {
  //   const updatedList = customPokemonList.filter((pokemon) => pokemon !== removedPokemon);
  //   setCustomPokemonList(updatedList);
  // };

  // const removePokemon = (pokemon) => () => {
  //   removeFromCustomList(pokemon);
  //   setPokemonList([...pokemonList, pokemon]);
  // };

  return (
    <div className="pokedex">
      <h2>Best Pokemon</h2>

      {customPokemonList.map((pokemon) =>
        <div key={`${pokemon.id}`}>
          <p>{pokemon.id}</p>
          <p>{pokemon.name}</p>
          <img alt={pokemon.name} src={pokemon.img} onClick={removePokemon(pokemon)} />
        </div>)}
    </div>
  )
}

export default CustomPokemonList;