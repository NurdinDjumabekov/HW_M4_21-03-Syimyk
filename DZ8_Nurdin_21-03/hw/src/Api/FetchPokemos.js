import axios from "axios";
import { sortItem } from "../common/Helpers";
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

export const fetchPokemonsSort = async (from, till, type) => {
  let list = [];
  for (let i = from; i < till; i++) {
    const { data } = await axios.get(baseUrl_new + `pokemon/` + i);
    list.push(data);
  }
  return sortItem(list, type);
  // console.log(sortItem(list, "weight"), "sortItem");
};

export const fetchPokemonsInfo = async (id) => {
  try {
    const { data } = await axios.get(baseUrl_new + `pokemon/${id}`);
    return data;
  } catch {
    console.error("error");
  }
};
