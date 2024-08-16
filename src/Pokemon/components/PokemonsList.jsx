import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { colors } from "../utilities/colors";

const PokemonsList = () => {
  const { pokemons, capture, shinyToggle } =
    useContext(PokemonContext);

  const handleCapture = (pokemon) => {
    capture(pokemon);
  };

  return (
    <div>
      <h1 className="flex justify-center">Wild Encounters</h1>
      <ul className="grid grid-flow-row grid-cols-5">
        {pokemons.map((pokemon) => (
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
              <button onClick={() => handleCapture(pokemon)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#fafafa"
                  className="w-8 h-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-11.25a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonsList;
