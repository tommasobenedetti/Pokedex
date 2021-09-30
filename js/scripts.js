let pokemonRepository = (function () {
  //  Create an array within a pokemonRepository called pokemonList,
  //    and add the pokemon using objects.
const pokemonList = [
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

  function addListItem(pokemon) {
    let unOrderedList = document.querySelector('ul');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;

    button.classList.add('button');
    listItem.appendChild(button);
    unOrderedList.appendChild(listItem);

    addEventListener(button, pokemon);
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  function addEventListener(button, pokemon) {
    button.addEventListener('click', function () {
      showDetails(pokemon.name);
    });
  }
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
  };
})();

  pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
  //for (let i=0; i < pokemonList.length; i++) {
  //if
        //(pokemonList[i].height >= 7)
        //{document.write('<br>' + pokemonList[i].name + " is " + pokemonList[i].height + " points tall " + "- Wow, that's big!" + '<br>')
    // different output for pokemon that are smaller than 7 points
    //} else
    //{document.write('<br>' + pokemonList[i].name + " is " + pokemonList[i].height + " points tall." + '<br>')};
//};
