import { useState, useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { generateID } from "../helpers/generateID"

const NewPokemonForm = () => {

const { addNewPokemon } = useContext(PokemonContext);

const [pokemonName, setPokemonName] = useState("");

const handleNameOnChange = (event) => {
  return setPokemonName(event.target.value);
}

const handleFormSubmit = (event) => {
  event.preventDefault();
  return addNewPokemon({
    id: generateID(),
    name: pokemonName
  });
  setPokemonName("");
};

console.log(pokemonName);

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="pokemon name"
        onChange={handleNameOnChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default NewPokemonForm;