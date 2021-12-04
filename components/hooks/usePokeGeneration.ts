import React from "react";
import { getGeneration } from '../apis/pokeApi';
import { Generation } from '../interfaces/Generation';

const usePokeGeneration = () => {
	const [generation, updateGeneration] = React.useState<Generation>({});

 
  React.useEffect(() => {

    const load = async (id: string) => {
      const { data } = await getGeneration(id);
      updateGeneration(data);
    }
  
		load('1');
	}, []);

  return {
    generation
  }
};

export default usePokeGeneration;


