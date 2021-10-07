let pokemonRepository = (function () {
  //  Create an array within a pokemonRepository called pokemonList,
  //    and add the pokemon using objects.
  const pokemonList = []//create an empty array for pokemonList
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20'

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function addListItem(pokemon){

  let unOrderedList = document.querySelector('ul');
  let listItem = document.createElement('li');
  let button = document.createElement('button')
  button.innerText = pokemon.name;

  button.classList.add('button');
    listItem.appendChild(button);
    unOrderedList.appendChild(listItem);

    addEventListener(button, pokemon);
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
    console.log(pokemon);
  });
}

// create load function to fetch data fron API
function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
        console.log(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

    //create load detals function
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

  function addEventListener(button, pokemon) {
     button.addEventListener('click', function () {
       showDetails(pokemon.name);
     });
   }

  function getAll() {
    return pokemonList;
  }

  //return values
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();
pokemonRepository.loadList().then(function () {
pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});
