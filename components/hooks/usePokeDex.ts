import React from "react";
import { getPokeDexes, getPokeDex } from '../apis/pokeApi';
import { Pointer } from '../interfaces/Pointer';

const usePokeDex = () => {
	const [list, updateList] = React.useState<Array<Pointer>>([]);
  const [dex, updateDex] = React.useState<any>({});

  const load = async () => {
    const { data } = await getPokeDexes();
    updateList(data.results);
  }

  const fetchPokeDex = async (name: string) => {
    const { data } = await getPokeDex(name);
    updateDex(data);
  }

  return {
    list,
    dex,
    load,
    fetchPokeDex
  }
};

export default usePokeDex;


