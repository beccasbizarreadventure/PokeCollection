import React from "react";

import { PokemonProvider } from "./Pokemon/context/PokemonContext.jsx";
import PokemonsList from "./Pokemon/components/PokemonsList.jsx";
import Pokedex from "./Pokemon/components/Pokedex.jsx";
import Navigation from "./Navigation/NavBar.jsx";

const App = () => (
  <PokemonProvider>
    <Navigation />
    <div className="grid grid-cols-2 bg-zinc-100">
      <PokemonsList />
      <Pokedex />
    </div>
  </PokemonProvider>
);

export default App;
