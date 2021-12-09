// Pokemon list
let pokemonList = [
    {name: 'Bulbasaur', height: 7, types: ['grass', 'poison']},
    {name: 'Beedrill', height: 1, types: ['bug', 'poison']},
    {name: 'Charizard', height: 1.7, types: ['fire', 'flying']}
];

// lists the pokemon in the array with their height next to their name, and a comment about their relative size
for (let i = 0; i < pokemonList.length; i++) {
    if (pokemonList[i].height <= 1){
        document.write(pokemonList[i].name + " (height:" + pokemonList[i].height + ") " + "- Just a little Pokemon." + "\n");
    }else if (pokemonList[i].height  > 1 && pokemonList[i].height < 3){
        document.write(pokemonList[i].name + " (height:" + pokemonList[i].height + ") " + "- Your average size Pokemon." + "\n");
    }else {
        document.write(pokemonList[i].name + " (height:" + pokemonList[i].height + ") " + "- Wow, that's a big Pokemon!" + "\n");
    }
}
