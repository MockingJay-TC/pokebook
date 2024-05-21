import axios from "axios";
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
};
