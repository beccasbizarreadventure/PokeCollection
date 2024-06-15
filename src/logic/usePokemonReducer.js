export const ADD_TO_CUSTOM_LIST = 'ADD_TO_CUSTOM_LIST';
export const REMOVE_FROM_CUSTOM_LIST = 'REMOVE_FROM_CUSTOM_LIST';

const getMainPokemonList = (pokemonList, removedPokemon) => {
  return pokemonList.filter(pokemon => pokemon !== removedPokemon)
};

const addToCustomList = (pokemonToAdd, state) => {
  return {
    pokemonList: getMainPokemonList(state.pokemonList, pokemonToAdd),
    customPokemonList: [...state.customPokemonList, pokemonToAdd]
  };
};

const getCustomPokemonList = (customPokemonList, removedCustomPokemon) => {
  return customPokemonList.filter(pokemon => pokemon !== removedCustomPokemon);
};

const removeFromCustomList = (pokemonToRemove, state) => {
return { 
  pokemonList: [...state.pokemonList, pokemonToRemove],
  customPokemonList: getCustomPokemonList(state.customPokemonList, pokemonToRemove)
  };
};

export const pokeReducer = (state, action) => {

  switch(action.type) {
    case ADD_TO_CUSTOM_LIST:
      return addToCustomList(action.pokemon, state);
    case REMOVE_FROM_CUSTOM_LIST:
      return removeFromCustomList(action.pokemon, state);
    default:
      return state;
  }
};