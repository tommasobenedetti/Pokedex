let pokemonRepository = (function () {
  //  Create an array within a pokemonRepository called pokemonList,
  //    and add the pokemon using objects.
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
function getAll() {
    return pokemonList;
  }
  function add(pokemon) {
    return pokemonList.push(pokemon);
  }

  return {
    getAll: getAll,
    add: add
  };
})();
// Create a loop using the forEach predifined function to iterate through the array list within the pokemon repository created above. Only rechable by calling the function getAll(); within the line of code.
pokemonRepository.getAll().forEach(function (pokemon) {
  let pokemonName = pokemon.name;
  let pokemonHeight = pokemon.height;

  if (pokemonHeight >= 7) {
    document.write('<br>' + pokemonName + " is " + pokemonHeight + " points tall " + "- Wow, that's big!" + '<br>');
    console.log('<br>' + pokemonName + " is " + pokemonHeight + " points tall " + "- Wow, that's big!" + '<br>');
  } else {
    document.write(
      '<br>' + pokemonName + ' is ' + pokemonHeight + ' points tall ' + '<br>'
    );
    console.log(
      '<br>' + pokemonName + ' is ' + pokemonHeight + ' points tall ' + '<br>'
    );
  }
  });
  //for (let i=0; i < pokemonList.length; i++) {
  //if
        //(pokemonList[i].height >= 7)
        //{document.write('<br>' + pokemonList[i].name + " is " + pokemonList[i].height + " points tall " + "- Wow, that's big!" + '<br>')
    // different output for pokemon that are smaller than 7 points
    //} else
    //{document.write('<br>' + pokemonList[i].name + " is " + pokemonList[i].height + " points tall." + '<br>')};
//};
