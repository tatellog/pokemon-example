import styled from "styled-components";

export const PokemonListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export const PokemonCard = styled.div`
  background-color: #e1d3e2;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.5rem;
    margin-bottom: 8px;
    color: #333;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  p {
    font-size: 1rem;
    color: #777;
  }
`;