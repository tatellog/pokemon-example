import React, { useEffect, useMemo, useState } from 'react'
import { Pokemon, ApiResponse } from './type';

const usePokemons = (apiUrl: string, page: number) => {
  const [data, setData] = useState<Pokemon[]>([])
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null)
  const pageSize = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const offset = (page -1) * pageSize
        const response = await fetch(`${apiUrl}?offset=${offset}&limit=${pageSize}`);
        const result: ApiResponse = await response.json();

        const pokemonsWithImages = await Promise.all(
          result.results.map(async (pokemon: any) => {
            const pokemonResponse = await fetch(pokemon.url);
            const pokemonData = await pokemonResponse.json();
            const imageUrl = pokemonData.sprites.front_default || null; 
            console.log({pokemonResponse})
            console.log({imageUrl})
            return {
              name: pokemonData.name,
              imageUrl,
            };
          })
        );
        console.log({pokemonsWithImages})
        setData(pokemonsWithImages);
        setLoading(false);
      } catch (err) {
        console.log({err})
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl, page]);
  

  // Memoize the paginated data
 
  const paginatedData = useMemo(() => {
    return data.slice(0, pageSize);
  }, [data]);

  return { data: paginatedData, loading, error };
}

export default usePokemons
