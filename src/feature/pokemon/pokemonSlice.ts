import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { PokeMonDetail, PokemonState } from "../../Interfaces/interfaces";

const initialState: PokemonState = {
  loading: false,
  pokemons: [],
  error: "",
  pokemon: null,
};

// export const fetchAllPokemons = createAsyncThunk(
//   "pokemon/fetchPokemons",
//   async () => {
//     const response = await axios.get(`${import.meta.env.VITE_POKEAPI}/pokemon`);
//     return response.data.results;
//   }
// );



export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async (pokemons: PokeMonDetail[], { rejectWithValue }) => {
    try {
      const objects = await Promise.all(
        pokemons?.map((pokemon) =>
          axios.get(`${pokemon.url}`).then((response) => response.data)
        )
      );
      return objects;
    } catch (error: unknown) {
      return rejectWithValue(error);
    }
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(fetchAllPokemons.pending, (state) => {
    //   state.loading = true;
    // });
    // builder.addCase(fetchAllPokemons.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.pokemons = action.payload;
    //   state.error = "";
    // });
    // builder.addCase(fetchAllPokemons.rejected, (state, action) => {
    //   state.loading = false;
    //   state.pokemons = [];
    //   state.error = action.error.message;
    // });
    builder.addCase(fetchPokemon.fulfilled, (state, action) => {
      state.loading = false;
      state.pokemons = action.payload;
      state.error = "";
    });
  },
});

export default pokemonSlice.reducer;
