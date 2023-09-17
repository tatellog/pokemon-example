import { useCallback, useEffect, useState } from "react";
import {SearchResults, PokemonData} from "./type"

const usePokemonSearch = (apiUrl: string): SearchResults => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState<PokemonData[]>([]);

  const searchPokemon = useCallback(async (query: string) => {
    try {
      console.log('entra try')
      setLoading(true)
      setError(null)

      console.log('entra', query)

      const resp = await fetch(`${apiUrl}/pokemon/${query.toLowerCase()}`)
      console.log({resp})
      if(!resp.ok){
        throw new Error('Pokemon not found')
      }
      const pokemonData = await resp.json()
      setSearchResults([pokemonData])
      
    } catch (e) {
     console.log(e)
      
    } finally {
      setLoading(false)
    }

  }, [apiUrl]);

  return {searchResults, loading, error, searchPokemon}
  

}

export default usePokemonSearch;