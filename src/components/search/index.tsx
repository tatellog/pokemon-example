import React, { useCallback, useState } from 'react'
import { SearchInput, SearchWrapper } from './styles'
import usePokemonSearch from '../../hooks/usePokemonSerach';

interface SearchProps {
  onSearch: (searchQuery: string) => void;
 }
export const SearchComponent = ({onSearch}: SearchProps) => {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = useCallback(() => {
    console.log({searchQuery})
    onSearch(searchQuery)

  }, [onSearch, searchQuery])

  return (
    <SearchWrapper>
      <SearchInput
        type='text'
        placeholder='Serach by name'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      />
    </SearchWrapper>
  )
}
