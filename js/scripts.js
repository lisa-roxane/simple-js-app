/* Create IIFE - wrap previous global variables (pokemonList) to make them local variables, 
protecting them from changes */
let pokemonRepository = (function () {
// Pokemon list - an array of Pokémon objects used throughout the web app
let pokemonList = [
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

// Function to return all array items in pokemonList
function getAll() {
    return pokemonList;
}

//Function to add new pokemon objects to array pokemonList
function add(newPokemon) {
    pokemonList.push(newPokemon);
}

// IIFE returns the object below
return {
    add: add,
    getAll: getAll
};
})();

// forEach function instead of for loop to iterate over the Pokémon in the pokemonList array in order to print details of each one
pokemonList.forEach(function(pokemon) {
    if (pokemonList[i].height <= 1){
        document.write("<p>" + pokemonList[i].name + " (height:" + pokemonList[i].height + ") " + "- Just a little Pokemon." + "</p>");
    } else if (pokemonList[i].height  > 1 && pokemonList[i].height < 3){
        document.write("<p>" + pokemonList[i].name + " (height:" + pokemonList[i].height + ") " + "- Your average size Pokemon." + "</p>" );
    }else {
        document.write("<p>" + pokemonList[i].name + " (height:" + pokemonList[i].height + ") " + "- Wow, that\'s a big Pokemon!" + "</p>");
    }
});