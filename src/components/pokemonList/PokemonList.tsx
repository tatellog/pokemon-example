// src/components/PokemonList.tsx

import React from "react";
import styled from "styled-components";
import usePokemons from '../../hooks/usePokemon'
import { PokemonListWrapper, PokemonCard } from "./styles";

interface PokemonListProps {
  page: number;

}



const PokemonList = ({page} : PokemonListProps) => {
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon' || "";
  const { data, loading, error } = usePokemons(apiUrl, page);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <PokemonListWrapper >
      {data.map((pokemon) => (
        <PokemonCard key={pokemon.name}>
          <img
            src={pokemon.imageUrl}
            alt={pokemon.name}
          />
          <h2>{pokemon.name}</h2>
          <p>Description: Lorem ipsum dolor sit amet.</p>
        </PokemonCard>
      ))}
    </PokemonListWrapper>
  );
};

export default PokemonList;
