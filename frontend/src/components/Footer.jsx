import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

const Copyright = (props) => {
  return (
    <Typography align="center" {...props}>
      {'Copyright ©'}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const Footer = () => {
  return (
    <footer>
      <Container maxWidth="sm" align="center">
        <Grid container>
          <Grid item xs={12}>
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
