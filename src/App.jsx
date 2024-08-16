import React from "react";

import { PokemonProvider } from "./Pokemon/context/PokemonContext.jsx";
import PokemonsList from "./Pokemon/components/PokemonsList.jsx";
import Pokedex from "./Pokemon/components/Pokedex.jsx";
import Navigation from "./Navigation/NavBar.jsx";

const App = () => (
  <PokemonProvider>
    <Navigation />
    <div className="flex bg-zinc-100 h-screen">
      <div className="flex-1">
        <PokemonsList />
      </div>
      <div className="w-20">
      </div>
      <div className="flex-1">
        <Pokedex />
      </div>
    </div>
  </PokemonProvider>
);

export default App;
