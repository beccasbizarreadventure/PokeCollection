import React, { createContext, useEffect, useRef, useState} from "react";
import { usePokemonReducer } from "../utilities/usePokemonReducer";
import {
  CAPTURE,
  RELEASE,
  ADD_NEW_POKEMON,
  ADD_POKEMONS
} from "../utilities/actions";
import axios from "axios";

const PokemonContext = createContext();

const PokemonProvider = (props) => {

  const [state, dispatch] = usePokemonReducer();
  const { pokemons, capturedPokemons } = state;
  const [shinyToggle, setShinyToggle] = useState(false);
  const initialLoad = useRef(true);

  const updateSprite = () => {
    setShinyToggle(shinyToggle => !shinyToggle);
  };

  const capture = (pokemon) => dispatch({ type: CAPTURE, pokemon });
  const release = (pokemon) => dispatch({ type: RELEASE, pokemon });
  const addNewPokemon = (pokemon) => dispatch({ type: ADD_NEW_POKEMON, pokemon });

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=25&offset=0"
        );
        const allPKMdata = response.data.results;
        // Create an array of promises where each promise fetches a Pokemon's data (imgData) and constructs an object { ...pokemon, imageUrl }
        const pokemonPromises = allPKMdata.map(async (pokemon) => {
          const pokemonResponse = await axios.get(pokemon.url);
          const { id, name, sprites, types } = pokemonResponse.data;
          const imageUrl = sprites.other.showdown.front_default;
          const shinyImageUrl = sprites.other.showdown.front_shiny;
          const type = types[0].type.name;
          return {
            id: id,
            name: name,
            url: pokemon.url,
            imageUrl: imageUrl,
            type: type,
            shinyImageUrl: shinyImageUrl
          };
        });

        const pokemonData = await Promise.all(pokemonPromises);

        dispatch({ type: ADD_POKEMONS, pokemons: pokemonData });
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };
    if (initialLoad) {
      initialLoad.current = false;
      fetchPokemon();
    }
  }, [dispatch]);

  const providerValue = {
    pokemons,
    capturedPokemons,
    shinyToggle,
    updateSprite,
    capture,
    release,
    addNewPokemon,
  };

  return (
    <PokemonContext.Provider value={providerValue}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };