import React, { useState } from 'react';

const CustomPokemonList = () => {
  const [pokemonList] = useState([]);

  return (
    <div className="pokedex">
      <h2>My Pokemon</h2>

      {pokemonList.map((pokemon) =>
        <div key={`${pokemon.id}`}>
          <p>{pokemon.id}</p>
          <p>{pokemon.name}</p>
          <p>{pokemon.img}</p>
        </div>)}
    </div>
  )
}

export default CustomPokemonList;