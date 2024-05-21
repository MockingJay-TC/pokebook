import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { PokeMonDetail, PokemonState } from "../../Interfaces/interfaces";

const initialState: PokemonState = {
  loading: false,
  pokemons: [],
  error: "",
  pokemon: null,
};

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
    builder.addCase(fetchPokemon.fulfilled, (state, action) => {
      state.loading = false;
      state.pokemons = action.payload;
      state.error = "";
    });
  },
});

export default pokemonSlice.reducer;
