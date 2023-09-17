export interface Pokemon {
  name: string;
  imageUrl: string;

}

export interface ApiResponse {
  results: Pokemon[]
}

export interface PokemonData {
  name: string;
}

export interface SearchResults {
  searchResults: PokemonData[];
  loading: boolean;
  error: Error | null;
  searchPokemon: (query: string) => void; // Declare the type of searchPokemon
}