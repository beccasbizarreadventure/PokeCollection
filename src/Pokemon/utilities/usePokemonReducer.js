import { useReducer } from 'react';
import { CAPTURE, RELEASE, ADD_NEW_POKEMON, ADD_POKEMONS } from './actions';
import { capturedPokemonsKey, pokemonsKey, capturedPokemonsExists, pokemonExists, getCapturedPokemons, getPokemonsList } from './stateHelpersConstants';

const pokemonReducer = (state, action) => {
  const { type, pokemon, pokemons } = action;

  switch (type) {
    case CAPTURE:
      const newCapturedPokemons = [...state.capturedPokemons, pokemon];
      localStorage.setItem(capturedPokemonsKey, JSON.stringify(newCapturedPokemons));
      return {
        ...state,
        pokemons: getPokemonsList(state.pokemons, pokemon),
        capturedPokemons: newCapturedPokemons,
      };

    case RELEASE:
      const updatedCapturedPokemons = getCapturedPokemons(state.capturedPokemons, pokemon);
      return {
        ...state,
        pokemons: [...state.pokemons, pokemon],
        capturedPokemons: updatedCapturedPokemons,
      };

    case ADD_NEW_POKEMON:
      const updatedWithNewPokemon = [...state.pokemons, pokemon];
      localStorage.setItem(pokemonsKey, JSON.stringify(updatedWithNewPokemon));
      return {
        ...state,
        pokemons: updatedWithNewPokemon,
      };

      case ADD_POKEMONS:
        // Filter out captured pokemons and existing pokemon from the new data
        const filteredPokemons = pokemons.filter(newPokemon =>
          !capturedPokemonsExists(state.capturedPokemons, newPokemon) &&
          !pokemonExists(state.pokemons, newPokemon)
        );
        
        // Combine filtered pokemons with existing pokemons in state
        const updatedPokemons = [...state.pokemons, ...filteredPokemons];
        
        return {
          ...state,
          pokemons: updatedPokemons,
        };

    default:
      return state;
  }
};

export const usePokemonReducer = () => {
  const initialState = {
    pokemons: JSON.parse(localStorage.getItem(pokemonsKey)) || [],
    capturedPokemons: JSON.parse(localStorage.getItem(capturedPokemonsKey)) || [],
  };

  const [state, dispatch] = useReducer(pokemonReducer, initialState);
  return [state, dispatch];
};