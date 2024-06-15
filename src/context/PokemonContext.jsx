import React, { useState, createContext } from 'react';

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
  const [pokemonList, setPokemonList] = useState([
    { id: 1, name: 'Bulbasaur', img: './pokeImages/HOME001-Bulbasaur.webp'  },
    { id: 2, name: 'Charmander', img: './pokeImages/HOME004-Charmander.webp' },
    { id: 3, name: 'Squirtle', img: './pokeImages/HOME007-Squirtle.webp' }
  ]);

  const [customPokemonList, setCustomPokemonList] = useState([]);

  const providerValue = {
    pokemonList,
    setPokemonList,
    customPokemonList,
    setCustomPokemonList
  };

  return (
    <PokemonContext.Provider value={providerValue}>
      {props.children}
    </PokemonContext.Provider>
  )
};