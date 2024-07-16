import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { colors } from "../utilities/colors";

const Pokedex = () => {
  const { capturedPokemons, release } =
    useContext(PokemonContext);

  const handleRelease = (pokemon) => {
    release(pokemon);
  };

  return (
    <div>
      <h1 className="flex justify-center">Pokedex</h1>
      <ul className="grid grid-flow-row grid-cols-5">
        {capturedPokemons.map((pokemon) => (
          <li
            className={`flex flex-col justify-center items-center ${
              colors[`${pokemon.type}`]
            } rounded-[10px] shadow-lg m-5 py-10 px-5`}
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
                src={pokemon.imageUrl}
                alt={pokemon.name}
                style={{ width: "100px", height: "100px" }}
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
      </ul>
    </div>
  );
};

export default Pokedex;
