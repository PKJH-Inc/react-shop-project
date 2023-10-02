import React from 'react';
import { AppBar, Toolbar, Typography, Button, Link } from '@mui/material';
import { ShoppingCart, Person } from '@mui/icons-material';

const Header = () => {
  return (
    <header>
      <AppBar position="static">
        <Toolbar sx={{ background: '#673ab7' }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Ecommerce Application
          </Typography>
          <Link color="inherit" to="/cart">
            <Button color="inherit" startIcon={<ShoppingCart />}>
              Cart
            </Button>
          </Link>
          <Link color="inherit" to="/login">
            <Button color="inherit" startIcon={<Person />}>
              Sign In
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
