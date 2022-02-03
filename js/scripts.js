/* variable pokemonRepository to hold what the IIFE will return 
and IIFE assigned to this variable */
let pokemonRepository = (function () {
    // Pokemon list - an array of Pokémon objects used throughout the web app
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

     // Function to add new object to array pokemonList   
     function add(pokemon) {
        if (
            typeof pokemon === 'object' &&
            'name' in pokemon //&&
         //   'detailsUrl' in pokemon
        ) {
            pokemonList.push(pokemon);
        } else {
            console.log("Pokémon is not correct");
        }
    }

    // Function to return all array items in pokemonList
    function getAll() {
        return pokemonList;
    }

    // Add function addListItem()
    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listPokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        listPokemon.appendChild(button);
        pokemonList.appendChild(listPokemon);
        button.addEventListener('click', function (event) {
            showDetails(pokemon);
        })
    }
    
    })
    // Add loadList() function 
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

    // Add loadDetails() function
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

    // Add function showDetails()
    function showDetails(item) {
        loadDetails(item).then (function () {
            console.log(item);
        });
    }

    // Return value of this IIFE, pokemonList
    return {
        // key-value pair that represents the add function as its value
        add: add,
        // key-value pair that represents the getAll function as its value
        getAll: getAll,
        // key-value pair that represents the addListItem function as its value
        addListItem: addListItem,
        // key-value pair that represents the loadList function as its value
        loadList: loadList,
        // key-value pair that represents the loadDetails function as its value
        loadDetails: loadDetails,
        // key-value pair that represents the showDetails function as its value
        showDetails: showDetails
    };
})();

// New pokemon
 /* pokemonRepository.add({
    name: 'Pikachu',
    height: 0.3,
    types: ['Electric']
});
*/

//console.log(pokemonRepository.getAll());


//for loop to display the name and height of each pokemon in the array to the DOM
//add remark to highlight big pokemon
/* for (let i=0; i < repository.length; i++) {
    if (repository[i].height < 1.5) {
        document.write("<p>" + repository[i].name + " (height: " + repository[i].height + ") "  + "</p>")
    } else {
      document.write("<p>" + repository[i].name + " (height: " + repository[i].height + ") " + "-Wow, that's a big Pokemon!" + "</p>")
    }
} */

//replace above for() loop with forEach() loop
/* Commenting out to use new forEach() loop below
pokemonRepository.getAll().forEach(function(pokemon) {
    if (pokemon.height < 1.5) {
        document.write("<p>" + pokemon.name + " (height: " + pokemon.height + ") " + "</p>")
    } else {
        document.write("<p>" + pokemon.name + " (height: " + pokemon.height + ") " + "-Wow, that's a big Pokémon!" + "</p>")
    }
}); */

pokemonRepository.loadList().then(function() {
    // New forEach() loop
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon)
    });
});