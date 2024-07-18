import React, {useContext} from 'react';
import PokemonForm from '../Pokemon/components/PokemonForm';
import { PokemonContext } from '../Pokemon/context/PokemonContext';

const Navigation = () => {
  const { updateSprite } =
  useContext(PokemonContext);

  return (
    <nav className='bg-red-700 w-full h-30 p-2 flex flex-row items-center drop-shadow-lg'>
    <img src='/icons8-pokeball-64.png' alt='pokeball' className='pl-2 pr-4'/> 
      <PokemonForm />
      <button onClick={updateSprite}>Change Sprite!</button>
    </nav>
  );  

}

export default Navigation;