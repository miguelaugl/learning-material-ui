import React from 'react';
import styled from 'styled-components';
import { Box, Container, AppBar, Typography } from '@material-ui/core';

const StyledAppBar = styled(AppBar)`
  padding: 2rem;
`;

const Header: React.FC = () => {
  return (
    <Box component="nav">
        <StyledAppBar position="static">
          <Container maxWidth="lg" component="nav">
            <Typography variant="h2" component="p">
                Listagem de pokémons
            </Typography>
          </Container>
        </StyledAppBar>
    </Box>
  );
};

export default Header;
