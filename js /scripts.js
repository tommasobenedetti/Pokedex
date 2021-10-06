let pokemonRepository = (function () {
  //  Create an array within a pokemonRepository called pokemonList,
  //    and add the pokemon using objects.
const pokemonList = [];//create an empty array for pokemonList
 let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=20"; //url to fetch the data

 function add(pokemon) {
     if (
       typeof pokemon === "object" &&
       "name" in pokemon
     ) {
       pokemonList.push(pokemon);
     } else {
       console.log("pokemon is not correct");
     }

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
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

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

// forEach function to printout the list
pokemonRepository.loadList().then(function(){
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
  //for (let i=0; i < pokemonList.length; i++) {
  //if
        //(pokemonList[i].height >= 7)
        //{document.write('<br>' + pokemonList[i].name + " is " + pokemonList[i].height + " points tall " + "- Wow, that's big!" + '<br>')
    // different output for pokemon that are smaller than 7 points
    //} else
    //{document.write('<br>' + pokemonList[i].name + " is " + pokemonList[i].height + " points tall." + '<br>')};
//};
