import React, { useContext, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { colors } from "../utilities/colors";
import { motion, AnimatePresence } from "framer-motion";

const Pokedex = () => {
  const { capturedPokemons, release, shinyToggle } = useContext(PokemonContext);

  const hideCaughtKey = "hideCaught"; 
  const [hideCaught, setHideCaught] = useState(() => {
    const storedValue = localStorage.getItem(hideCaughtKey);
    return storedValue !== null ? JSON.parse(storedValue) : true;
  });
  
  const handleShowCaught = () => {
    setHideCaught((prev) => {
      const newHideCaught = !prev;
      localStorage.setItem(hideCaughtKey, JSON.stringify(newHideCaught));
      return newHideCaught;
    });
  };

  const handleRelease = (pokemon) => {
    release(pokemon);
  };

  return (
    <div>
      <div className="flex justify-center drop-shadow-lg">
        <button
          onClick={handleShowCaught}
          className="items-center bg-red-700 hover:bg-cyan-500 text-white w-1/2 h-12 text-xl font-bold rounded-full mt-10 mb-2"
        >
          Pokedex
        </button>
      </div>
      <AnimatePresence initial={false}>
        {!hideCaught && (
          <motion.ul
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
            className="grid grid-flow-row grid-cols-5 overflow-hidden"
          >
            {capturedPokemons.map((pokemon) => (
              <li
                className={`flex flex-col justify-center items-center ${
                  colors[`${pokemon.type}`]
                } rounded-lg shadow-lg m-5 py-10 px-5`}
                key={pokemon.id}
                style={{
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundColor: colors[`${pokemon.type}`],
                    zIndex: 0,
                  }}
                />
                <div
                  className="absolute inset-0 bg-no-repeat bg-center bg-cover"
                  style={{
                    backgroundImage: `url("/icons8-pokeball-100.png")`,
                    zIndex: 1,
                    opacity: 0.3,
                  }}
                />

                <div className="relative z-10 flex flex-col items-center justify-center space-y-2">
                  <img
                    src={shinyToggle ? pokemon.shinyImageUrl : pokemon.imageUrl}
                    alt={pokemon.name}
                    style={{ width: "6rem", height: "6rem" }}
                  />
                  <div className="font-bold text-zinc-50 text-xl mb-2 mt-2 capitalize">
                    {pokemon.name}
                  </div>
                  <button onClick={() => handleRelease(pokemon)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#fafafa"
                      className="size-8"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Pokedex;
