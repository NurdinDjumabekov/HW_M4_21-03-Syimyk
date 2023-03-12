import axios from "axios";

// const baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=10";
const baseUrl = "https://pokeapi.co/api/v2/pokemon?";

export const fetchPokemons = async (setNewlist, page) => {
  // console.log(page, "page");

  try {
    const { data } = await axios.get(baseUrl, {
      params: {
        limit: 10,
        offset: page,
      },
    });
    setNewlist(data.results);
  } catch {
    console.error("error");
  }
};

const baseUrl_new = "https://pokeapi.co/api/v2/";

export const fetchPokemonsSort = async (from, till) => {
  let list = [];
  for (let i = from; i < till; i++) {
    const data = await axios.get(baseUrl_new + `pokemon/` + i);
    list.push(data.data);
    console.log(list, "list");
    return list;
  }
};

export const fetchPokemonsInfo = async (id) => {
  try {
    const { data } = await axios.get(baseUrl_new + `pokemon/${id}`);
    return data;
  } catch {
    console.error("error");
  }
};
