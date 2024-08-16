import React, { useContext } from "react";
import PokemonForm from "../Pokemon/components/PokemonForm";
import { PokemonContext } from "../Pokemon/context/PokemonContext";

const Navigation = () => {
  const { updateSprite, shinyToggle } = useContext(PokemonContext);

  return (
    <nav className="bg-red-700 w-full h-30 p-2 flex flex-row justify-between items-center drop-shadow-lg">
      <div className="flex flex-row">
        <img
          src="/icons8-pokeball-64.png"
          alt="pokeball"
          className="pl-2 pr-4"
        />
        <PokemonForm />
      </div>
      <div>
        <label className="inline-flex items-center cursor-pointer ">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={shinyToggle}
            onChange={updateSprite}
          />
          <div className="relative w-11 h-6 bg-neutral-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-400/80 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
          <span className="ms-3 text-base font-medium text-white pr-4">
            Change Sprite
          </span>
        </label>
      </div>
    </nav>
  );
};

export default Navigation;
