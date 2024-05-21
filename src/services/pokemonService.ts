import axios from 'axios'
export const pokemonService = {
    getPokemons: async () => {
        const response = await axios.get(`${import.meta.env.VITE_POKEAPI}/pokemon`);
        return response.data;
    }
}