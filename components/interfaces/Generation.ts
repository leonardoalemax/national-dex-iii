import { PokemonSpecies } from "./PokemonSpecies";
import { PokemonTypes } from "./PokemonTypes";

export interface Generation {
  id?: number;
  name?: string;
  abilities?: Array<string>;
  main_region?: {
    name: string;
    url: string;
  },
  pokemon_species?: Array<PokemonSpecies>;
  types?: Array<PokemonTypes>;
  version_groups?: Array<{
    name: string;
    url: string;
  }>;
}

