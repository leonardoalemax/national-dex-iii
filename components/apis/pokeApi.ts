import axios, { AxiosPromise } from 'axios';
import { Generation } from '../interfaces/Generation';
import { Pokemon } from '../interfaces/Pokemon';
import { PokemonSpecies } from '../interfaces/PokemonSpecies';

const base = 'https://pokeapi.co/api/v2';

export const getPokemon = (pokemon: Pokemon): AxiosPromise<Pokemon> =>
	axios.get(`${base}/pokemon/${pokemon.name}`);

export const getSpecies = (url: string): AxiosPromise<PokemonSpecies> =>
	axios.get(url);

export const allRequest = () => axios.get(`${base}/pokemon/?limit=151`);

export const getGeneration = (id: string): AxiosPromise<Generation> =>
	axios.get(`${base}/generation/${id}`);

export const getPokeDexes = (): AxiosPromise<any> =>
	axios.get(`${base}/pokedex?limit=35`);

export const getPokeDex = (name:string): AxiosPromise<any> =>
	axios.get(`${base}/pokedex/${name}`);