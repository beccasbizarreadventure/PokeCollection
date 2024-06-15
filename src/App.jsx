import React from 'react';
import './App.scss';
import PokemonList from './components/PokemonList';
import CustomPokemonList from './components/CustomPokemonList';
function App() {

  return (
    <div className="App">
    <PokemonList />
    <CustomPokemonList />
  </div>
);
}

export default App;