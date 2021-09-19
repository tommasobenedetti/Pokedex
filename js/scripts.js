// List of pokemon name + height + types
let pokemonList = [
  {
    name: 'Bulbasaur',
    height: 7,
    types: ['grass', 'poison']
  },
  {
    name: 'Squirtle',
    height: 6,
    types: ['water']
  },
  {
    name: 'Charmander',
    height: 5,
    types: ['fire']
  },
];
  // for loop that iterates over each item in pokemonList
for (let i=0; i < pokemonList.length; i++) {
  if
    // if-statement for taller pokemon
        (pokemonList[i].height >= 7)
        {document.write('<br>' + pokemonList[i].name + " is " + pokemonList[i].height + " points tall " + "- Wow, that's big!" + '<br>')
    // different output for pokemon that are smaller than 7 points
    } else
    {document.write('<br>' + pokemonList[i].name + " is " + pokemonList[i].height + " points tall." + '<br>')};
};
