import React from 'react';
import PokemonForm from '../Pokemon/components/PokemonForm';

const Navigation = () => {
  return (
    <nav className='bg-red-700 p-4 shadow-lg flex flex-row items-center'>
    <img src='/icons8-pokeball-64.png' alt='pokeball' /> 
      <PokemonForm />
    </nav>
  );  

}

export default Navigation;