import React from 'react';
import { Container, Typography } from '@material-ui/core';

import { Header } from '../components';

const Home: React.FC = () => {
  return (
    <>
      <Header />

      <Container>
        <Typography variant="h2" component="h2">
          Veja todos os nossos pokémons
        </Typography>
      </Container>
    </>
  );
};

export default Home;
