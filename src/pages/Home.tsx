import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container, Typography, Grid, Paper, Button } from '@material-ui/core';

import { Header } from '../components';
import api from '../services/api';

interface PokemonsURL {
  data: {
    results: [{
      name: string;
      url: string;
    }]
  }
}

interface Pokemon {
  name: string;
  sprites: {
    [key: string]: string;
  }
}

const StyledContainer = styled(Container)`
  padding: 3rem 2.4rem;
`;

const Pokemon = styled(Paper)`
  padding: 1.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled(Typography)`
  margin-bottom: 2rem;
`;

const PokemonImage = styled.img`

`;

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    (async () => {
      const { data }: PokemonsURL = await api.get('/pokemon?limit=100&offset=100');

      const pokemonsURLs = data.results;

      const pokemonsRequests = pokemonsURLs.map((pokemon) => api.get<Pokemon>(pokemon.url));

      const responses = await Promise.all(pokemonsRequests);

      const pokemons = responses.map(({ data }) => data);

      setPokemons(pokemons);
    })();
  }, []);

  console.log(pokemons);

  return (
    <>
      <Header />

      <StyledContainer maxWidth="lg">
        <SectionTitle variant="h3">
          Veja todos os nossos pokémons
        </SectionTitle>

        <Grid container spacing={2}>
          {pokemons.map(pokemon => (
            <Grid item xs={2}>
              <Pokemon>
                <Typography variant="h5" component="h5" color="textPrimary" style={{ textTransform: 'uppercase' }}>
                  {pokemon.name}
                </Typography>

                <PokemonImage src={pokemon.sprites.front_default}/>

                <Button href="/" variant="contained" color="primary" component="a">
                  Ver detalhes
                </Button>
              </Pokemon>
            </Grid>
          ))}
        </Grid>
      </StyledContainer>
    </>
  );
};

export default Home;
