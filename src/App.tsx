import React, { useState } from "react";
import  PokemonList  from "./components/pokemonList/PokemonList";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.styles";
import GlobalStyles from "./styles/GlobalStyles";
import { Pagination } from "./components/pagination/Pagination";
import { SearchComponent } from "./components/search";
import usePokemonSearch from "./hooks/usePokemonSerach";

function App() {
  const apiUrl = "https://pokeapi.co/api/v2"
  const [currentPage, setCurrentPage] = useState(1);
  const { searchResults, loading, searchPokemon } = usePokemonSearch(apiUrl);


  const onPageChange = (page: number) => {
    console.log({page})
    setCurrentPage(page)
  }

  const handleOnSearch = (query: string) => {
    if(query !== '') {
      searchPokemon(query)
    }
  }

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SearchComponent onSearch={handleOnSearch}/>
        <PokemonList page={Number(currentPage)}/>
        <Pagination currentPage={currentPage} totalPages={10} onPageChange={onPageChange} />
      </ThemeProvider>
  );
}

export default App;
