import React, { useContext, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { addNewGuy } from "../utilities/useAddNewGuy";

const PokemonForm = () => {
  const { addNewPokemon, pokemons } =
    useContext(PokemonContext);
  const { fetchNewPokemon } = addNewGuy();

  const [pokemonName, setPokemonName] = useState('');

  const handleNameOnChange = (event) => {
    setPokemonName(event.target.value.toLowerCase());
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!pokemonName.trim()) {
      alert("Please enter a Pokemon name");
      return;
    }

    if (pokemons.find((pokemon) => pokemon.name === pokemonName)) {
      alert("Pokemon already exists");
      return;
    }

    const newPokemon = await fetchNewPokemon(pokemonName);

    if (newPokemon) {
      addNewPokemon(newPokemon);
      setPokemonName("");
    } else {
      alert("Pokemon not found");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        className="rounded-lg h-10 w-30 items-center"
        type="text"
        placeholder="Find Encounter"
        value={pokemonName}
        onChange={handleNameOnChange}
      />
      <button type="submit" className="pl-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="size-9"
        >
          <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </form>
  );
};

export default PokemonForm;
