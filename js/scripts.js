// Pokemon list
let pokemonList = [
    {name: 'Bulbasaur', height: 7, types: ['grass', 'poison']},
    {name: 'Beedrill', height: 1, types: ['bug', 'poison']},
    {name: 'Charizard', height: 1.7, types: ['fire', 'flying']}
];

for (let i = 0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name + " (height:" + pokemonList[i].height + ") " );
  }