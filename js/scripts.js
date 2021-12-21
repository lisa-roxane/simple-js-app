/* Create IIFE - wrap previous global variables (pokemonList) to make them local variables, 
protecting them from changes */
var pokemonRepository = (function () {
// Pokemon list - an array of Pokémon objects used throughout the web app
let repository = [
    {
        name: 'Bulbasaur', 
        height: 7, 
        types: ['grass', 'poison']
    },
    {
        name: 'Beedrill', 
        height: 1, 
        types: ['bug', 'poison']
    },
    {
        name: 'Charizard', 
        height: 1.7, 
        types: ['fire', 'flying']}
];

// This for loop is being replaced with forEach loop
/* lists the pokemon in the array with their height next to their name, and a comment about their relative size
for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height <= 1){
        document.write("<p>" + pokemonList[i].name + " (height:" + pokemonList[i].height + ") " + "- Just a little Pokemon." + "</p>");
    } else if (pokemonList[i].height  > 1 && pokemonList[i].height < 3){
        document.write("<p>" + pokemonList[i].name + " (height:" + pokemonList[i].height + ") " + "- Your average size Pokemon." + "</p>" );
    }else {
        document.write("<p>" + pokemonList[i].name + " (height:" + pokemonList[i].height + ") " + "- Wow, that\'s a big Pokemon!" + "</p>");
    }
} */

//Function to add new pokemon objects to array pokemonList
/* function add(newPokemon) {
    pokemonList.push(newPokemon);
} */
// Use the add function as displayed in exercise 1.6
function add(pokemon) {
    if (
        typeof pokemon === "object" &&
        "name" in pokemon &&
        "height" in pokemon &&
        "types" in pokemon
    ) {
        repository.push(pokemon);
    } else {
        console.log("pokemon is not correct");
    }
}

// Function to return all array items in pokemonList
function getAll() {
    return repository;
}

function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = "pokemon.name";
    button.classList.add("button-class");
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
}

// IIFE returns the object below
return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
};
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"]});

console.log(pokemonRepository.getAll());

// forEach function instead of for loop to iterate over the Pokémon in the pokemonList array in order to print details of each one
// Create function to print name, height and comment of Pokémon in array

/*function printArrayDetails(pokemonList) {
    pokemonList.forEach(function(pokemon, i) {
        if (pokemonList[i].height <= 1){
            document.write("<p>" + pokemonList[i].name + " (height:" + pokemonList[i].height + ") " + "- Just a little Pokemon." + "</p>");
        } else if (pokemonList[i].height  > 1 && pokemonList[i].height < 3){
            document.write("<p>" + pokemonList[i].name + " (height:" + pokemonList[i].height + ") " + "- Your average size Pokemon." + "</p>" );
        }else {
            document.write("<p>" + pokemonList[i].name + " (height:" + pokemonList[i].height + ") " + "- Wow, that\'s a big Pokemon!" + "</p>");
        }
    });
} */

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});
    
/*
// New pokemon
const ZenPokemon = {
    name: 'Lisa',
    height: 5.4,
    types: ['water', 'poison']
}

pokemonRepository.add(ZenPokemon);

// calls the printArrayDetails function for the pokemonList array inside the IIFE
printArrayDetails(pokemonRepository.getAll()); */
