import React from 'react';
import { Box, Container, Button } from '@material-ui/core';

const Header: React.FC = () => {
  return (
    <Box component="header">
      <Container maxWidth="lg">
        <Button color="primary" variant="contained" size="large">
          Header
        </Button>
      </Container>
    </Box>
  );
};

export default Header;
