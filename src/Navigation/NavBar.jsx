import React from 'react';
import PokemonForm from '../Pokemon/components/PokemonForm';

const Navigation = () => {
  return (
    <nav className='bg-red-700 w-full h-30 p-2 flex flex-row items-center drop-shadow-lg'>
    <img src='/icons8-pokeball-64.png' alt='pokeball' className='pl-2 pr-4'/> 
      <PokemonForm />
    </nav>
  );  

}

export default Navigation;