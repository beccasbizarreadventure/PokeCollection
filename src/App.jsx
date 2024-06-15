import React from "react";
import "./App.scss";

import { PokemonProvider } from "./context/PokemonContext";
import PokemonList from "./components/PokemonList";
import CustomPokemonList from "./components/CustomPokemonList";


const App = () => {
  return (
    <PokemonProvider>
      <div className="App">
        <PokemonList />
        <CustomPokemonList />
      </div>
    </PokemonProvider>
  );
};

export default App;
