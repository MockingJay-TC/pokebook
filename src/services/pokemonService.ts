import axios from "axios";
import { PokeMon } from "../Interfaces/interfaces";
export const pokemonService = {
  getPokemons: async (query: any) => {
    const response = await axios.get(
      `${import.meta.env.VITE_POKEAPI}/pokemon`,
      {
        params: query,
      }
    );
    return response.data;
  },

  getPokemon: async (data: PokeMon[]) => {
    const response = await Promise.all(
      data.map((pokemon: PokeMon) =>
        axios.get(`${pokemon.url}`).then((response) => response.data)
      )
    );
    return response;
  },
};
