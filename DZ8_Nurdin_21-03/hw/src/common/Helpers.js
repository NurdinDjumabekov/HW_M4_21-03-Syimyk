export const sortItem = (pokemonList) => {
  return pokemonList.sort((a, b) => b.weight - a.weight);
};
