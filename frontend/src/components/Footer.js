import React from 'react';
import { Container, Grid } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="sm" align="center">
        <Grid container spacing={12}>
          <Grid item xs={12}>
            Copyright &copy; Ecommerce-Hans
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
