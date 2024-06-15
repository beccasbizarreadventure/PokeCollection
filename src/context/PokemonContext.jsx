import React, { useReducer, createContext } from 'react';
import { pokeReducer, ADD_TO_CUSTOM_LIST, REMOVE_FROM_CUSTOM_LIST, ADD_NEW_POKEMON } from '../logic/usePokemonReducer';

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {

  const defaultState = {
    pokemonList: [
    { id: 1, name:'Bulbasaur', img: './pokeImages/HOME001-Bulbasaur.webp'  },
    { id: 2, name: 'Charmander', img: './pokeImages/HOME004-Charmander.webp' },
    { id: 3, name: 'Squirtle', img: './pokeImages/HOME007-Squirtle.webp' }
    ],
    customPokemonList: []
  };

  const [state, dispatch] = useReducer(pokeReducer, defaultState);

  const addPokemon = (pokemon) => () => {
    dispatch({type: ADD_TO_CUSTOM_LIST, pokemon})
  };

  const removePokemon = (pokemon) => () => {
    dispatch({type: REMOVE_FROM_CUSTOM_LIST, pokemon})
  };

  const addNewPokemon = (pokemon) => () => {
    dispatch({type: ADD_NEW_POKEMON, pokemon})
  };


  const providerValue = {
    pokemonList: state.pokemonList,
    customPokemonList: state.customPokemonList,
    addPokemon,
    removePokemon,
    addNewPokemon,
  };

  return (
    <PokemonContext.Provider value={providerValue}>
      {props.children}
    </PokemonContext.Provider>
  )
};