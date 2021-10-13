let pokemonRepository = (function () {
  //  Create an array within a pokemonRepository called pokemonList,
  //    and add the pokemon using objects.
  const pokemonList = []//create an empty array for pokemonList
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=20'

let modalContainer = document.querySelector('#modal-container');

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
    showModal(pokemon);
  });
}

function showModal(pokemon) {
    modalContainer.innerHTML = '';
    let modal = document.createElement('div');
    modal.classList.add('modal');

    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.classList.add('pokemon-name');
    titleElement.innerText = pokemon.name;

    let contentElement = document.createElement('p');
    contentElement.innerText = 'Height: ' + pokemon.height;

    let container = document.querySelector('#image-container');
    let contentImage = document.createElement('img');
    contentImage.classList.add('content-image');
    contentImage.src = pokemon.imageUrl;


    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(contentImage);
    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });
  modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal
    // We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

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
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Add the details to the item
      item.imageUrl = details.sprites.front_default;;
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
    showDetails: showDetails,
    showModal: showModal,
  };
})();
pokemonRepository.loadList().then(function () {
pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});
