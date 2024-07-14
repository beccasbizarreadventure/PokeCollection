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
              } w-300px h-300px rounded-t-lg rounded-b-lg m-5 py-5 px-10`}
              key={pokemon.id}
            >
              <td>
                <img
                  className="-z-0"
                  src={pokemon.imageUrl}
                  alt={pokemon.name}
                  style={{ width: "100px", height: "100px" }}
                />
              </td>
              <td>{capitalizePokemonName(`${pokemon.name}`)}</td>
              <td>
                <button onClick={() => handleCapture(pokemon)}>capture</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PokemonsList;
