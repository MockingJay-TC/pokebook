export interface PokeMon {
  name: string;
  url: string;
  details: PokeMonDetail;
}

export interface PokeMonDetail extends PokeMon {
  id: number;
  base_experience: number;
  height: number;
  order: number;
  abilities: [];
  forms: [];
  moves: [];
  location_area_encounters: string;
  stats: [];
  types: [];
  past_types: [];
  sprites: PokemanSprites;
  species: [];
  weight: number;
}

export interface PokemonState {
  loading: boolean;
  pokemons: PokeMonDetail[];
  error: string | undefined;
  pokemon: PokeMonDetail | null;
}

interface PokemanSprites {
  other: DreamWorld;
}

interface DreamWorld {
  dream_world: FrontDefault;
}

interface FrontDefault {
  front_default: string;
}
