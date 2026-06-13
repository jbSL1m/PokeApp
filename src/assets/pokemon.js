const pokemon = [
  {
    pokedexNumber: 1,
    name: "Bulbasaur",
    type: ["Grass", "Poison"],
    description:
      "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon."
  },
  {
    pokedexNumber: 2,
    name: "Ivysaur",
    type: ["Grass", "Poison"],
    description:
      "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs."
  },
  {
    pokedexNumber: 3,
    name: "Venusaur",
    type: ["Grass", "Poison"],
    description:
      "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight."
  },
  {
    pokedexNumber: 4,
    name: "Charmander",
    type: ["Fire"],
    description:
      "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail."
  },
  {
    pokedexNumber: 5,
    name: "Charmeleon",
    type: ["Fire"],
    description:
      "When it swings its burning tail, it elevates the temperature to unbearably high levels."
  },
  {
    pokedexNumber: 6,
    name: "Charizard",
    type: ["Fire", "Flying"],
    description:
      "Spits fire that is hot enough to melt boulders. Known to accidentally cause forest fires."
  },
  {
    pokedexNumber: 7,
    name: "Squirtle",
    type: ["Water"],
    description:
      "After birth, its back swells and hardens into a shell. It sprays foam from its mouth."
  },
  {
    pokedexNumber: 8,
    name: "Wartortle",
    type: ["Water"],
    description:
      "Often hides in water to stalk unwary prey. For swimming fast, it moves its ears to maintain balance."
  },
  {
    pokedexNumber: 9,
    name: "Blastoise",
    type: ["Water"],
    description:
      "A brutal Pokémon with pressurized water jets on its shell. They are used for high-speed tackles."
  },
  {
    pokedexNumber: 10,
    name: "Caterpie",
    type: ["Bug"],
    description:
      "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls."
  }
];

// Example usage:
console.log(pokemon[0].name); // Bulbasaur
console.log(pokemon[3].type); // ["Fire"]

export default pokemon;