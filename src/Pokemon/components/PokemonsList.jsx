import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { colors } from "../utilities/colors";

const PokemonsList = () => {
  const { pokemons, capture, capitalizePokemonName } =
    useContext(PokemonContext);

  const handleCapture = (pokemon) => {
    capture(pokemon);
  };

  return (
    <div>
      <h1 className="flex justify-center">Pokemons List</h1>

      <table>
        <tbody className="grid grid-flow-row grid-cols-5 grid-rows-3">
          {pokemons.map((pokemon) => (
            <tr
              className={`flex flex-col justify-center items-center ${
                colors[`${pokemon.type}`]
              } rounded shadow-lg m-5 py-5 px-10`}
              key={pokemon.id}
            >
              <td>
                <img
                  src={pokemon.imageUrl}
                  alt={pokemon.name}
                  style={{ width: "100px", height: "100px" }}
                />
              </td>
              <td className="font-bold text-zinc-50 text-xl mb-2 mt-2">
                {capitalizePokemonName(`${pokemon.name}`)}
              </td>
              <td>
                <button onClick={() => handleCapture(pokemon)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#fafafa"
                    class="size-8"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PokemonsList;
