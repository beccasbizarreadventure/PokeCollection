import React from "react";
import "./App.scss";

import { PokemonProvider } from "./context/PokemonContext";
import PokemonList from "./components/PokemonList";
import CustomPokemonList from "./components/CustomPokemonList";
import NewPokemonForm from "./components/NewPokemonForm";


const App = () => {
  return (
    <PokemonProvider>
      <div className="App">
        <PokemonList />
        <NewPokemonForm />
        <CustomPokemonList />
      </div>
    </PokemonProvider>
  );
};

export default App;
