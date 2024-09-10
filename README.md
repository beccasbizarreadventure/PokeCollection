# PokéCollection

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)\
Based off of the <a href="https://github.com/imteekay/pokehooks-labs">repo</a> and <a href="https://www.freecodecamp.org/news/building-a-simple-pokemon-web-app-with-react-hooks-and-context-api/">tutorial</a> by <a href= "https://github.com/imteekay">imteekay</a>\
Utilizing the <a href="https://pokeapi.co/">PokeApi</a> to populate the pokemon data, you can add pokemon from the 'Wild Encounters' list to the 'Pokedex' list\
Each pokemon is also given a custom background color based on their type\
The app uses local storage to track the pokemon in you lists as well as any you add with the search bar and sprite color (normal or shiny)

## Available Scripts

In the project directory, you can run:

### `npm start`

This runs the app in the development mode\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## How to Use the App
Click the header buttons above the list to toggle down the lists\
![Demo image of list toggle](<public/Screenshot 1.png>)<br /><br />
Click the '+' icon underneath a Pokemon from the 'Wild Encounters' to add them to the 'Pokedex' list\
![Demo image adding to Pokedex list](<public/Screenshot 2.png>)<br /><br />
Click the '-' to put them back into 'Wild Encounters'\
![Demo image remove pokemon from pokedex](<public/Screenshot 3.png>)<br /><br />
Add a new pokemon to the 'Wild Encounters' using the search bar in the nav\
![Demo image add a new encounter](<public/Screenshot 4.png>)<br /><br />
Use the toggle on the top right to change between normal and shiny sprites
![Demo image change sprites to shiny image](<public/Screenshot 5.png>)<br /><br />
Extra Note: this app looks best at 50% zoom on smaller screens

## Dependancies 
- Framer Motion v 11.3.31
- React v 18.3.1
- Tailwind CSS v 3.4.4
- Axios v 1.7.2

## Credits

Project base/tutorial by <a href="https://www.freecodecamp.org/news/building-a-simple-pokemon-web-app-with-react-hooks-and-context-api/">imteekay</a>\
Pokeball icons from <a href="https://www.freepik.com/">Freepik</a>\
<a href="https://codesandbox.io/p/sandbox/framer-motion-accordion-yhixfe?file=%2Fsrc%2FApp.jsx">Accordion animation</a>\
Pokemon data from <a href="https://pokeapi.co/">PokeAPI</a>\
Other icons from <a href="https://heroicons.com/">Heroicons</a>
