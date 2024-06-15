import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';

const CustomPokemonList = () => {
  const {
    pokemonList,
    setPokemonList,
    customPokemonList,
    setCustomPokemonList
  } = useContext(PokemonContext);

  return (
    <div className="pokedex">
      <h2>Best Pokemon</h2>

      {customPokemonList.map((pokemon) =>
        <div key={`${pokemon.id}`}>
          <p>{pokemon.id}</p>
          <p>{pokemon.name}</p>
          <img alt={pokemon.name} src={pokemon.img} />
        </div>)}
    </div>
  )
}

export default CustomPokemonList;