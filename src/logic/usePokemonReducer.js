export const ACTIONS = {
  ADD_TO_CUSTOM_LIST:'ADD_TO_CUSTOM_LIST',
  REMOVE_FROM_CUSTOM_LIST:'REMOVE_FROM_CUSTOM_LIST',
  ADD_NEW_POKEMON:'ADD_NEW_POKEMON',
};


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

const addANewPokemon = (newPokemon, state) => {
  return {
    pokemonList: [...state.pokemonList, newPokemon],
    customPokemonList: state.customPokemonList
  };
};

export const pokeReducer = (state, action) => {

  switch(action.type) {

    case ACTIONS.ADD_TO_CUSTOM_LIST:
      return addToCustomList(action.pokemon, state);

    case ACTIONS.REMOVE_FROM_CUSTOM_LIST:
      return removeFromCustomList(action.pokemon, state);
    
    case ACTIONS.ADD_NEW_POKEMON:
      return addANewPokemon(action.pokemon, state);
    
    default:
      return state;
  }
};