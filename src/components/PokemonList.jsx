import { useState } from "react";

const PokemonList = () => {
  const [pokemonList] = useState([
    { id: 1, name: 'Bulbasaur', img: './pokeImages/HOME001-Bulbasaur.webp'  },
    { id: 2, name: 'Charmander', img: './pokeImages/HOME004-Charmander.webp' },
    { id: 3, name: 'Squirtle', img: './pokeImages/HOME007-Squirtle.webp' }
  ]);

  return (
    <div className="pokemon-list">
      <h2>All Pokemon List</h2>
      
      {pokemonList.map((pokemon) =>
        <div key={`${pokemon.id}`}>
          <p>{pokemon.id}</p>
          <p>{pokemon.name}</p>
          <img src={pokemon.img} />
        </div>)}
    </div>
  )
}

export default PokemonList;