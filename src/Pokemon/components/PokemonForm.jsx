import React, { useContext, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { addNewGuy } from "../utilities/useAddNewGuy";
import { motion, AnimatePresence } from "framer-motion";

const PokemonForm = () => {
  const { addNewPokemon, pokemons } = useContext(PokemonContext);
  const { fetchNewPokemon } = addNewGuy();
  const [pokemonName, setPokemonName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorMessage, setshowErrorMessage] = useState(false);

  const handleNameOnChange = (event) => {
    setPokemonName(event.target.value);
  };

  const triggerError = (message) => {
    setErrorMessage(message);
    setshowErrorMessage(true);
    setTimeout(() => {
      setshowErrorMessage(false); // Hide tooltip after 3 seconds
    }, 3000);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (!pokemonName.trim()) {
      triggerError("Please enter a name");
      return;
    }
    if (pokemons.find((pokemon) => pokemon.name === pokemonName)) {
      triggerError("Pokemon already exists");
      return;
    }
    const newPokemon = await fetchNewPokemon(pokemonName);
    if (newPokemon) {
      addNewPokemon(newPokemon);
      setPokemonName("");
    } else {
      triggerError("Pokemon not found");
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleFormSubmit} className="flex items-center space-x-2">
        <input
          className="rounded-lg h-10 flex-grow pl-5 pr-20 focus:outline-neutral-300 text-neutral-400"
          type="text"
          placeholder="New Encounter"
          value={pokemonName}
          onChange={handleNameOnChange}
        />
        <button
          type="submit"
          className="h-10 flex items-center justify-center px-3 text-white rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10"
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
      <AnimatePresence initial={false} mode="popLayout">
        {showErrorMessage && (
          <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          >
            <div
              className="absolute left-1/2 transform -translate-x-1/2 w-3 h-5 bg-cyan-500 rotate-45"
              data-popper-arrow
            ></div>
            <div
              className="absolute left-1/2 transform -translate-x-1/2 mt-2 px-4 py-2 text-base font-medium text-white bg-cyan-500 rounded-xl shadow-sm whitespace-nowrap"
            >
              {errorMessage}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PokemonForm;
