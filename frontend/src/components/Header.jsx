import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { ShoppingCart, Person } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <AppBar position="static">
        <Toolbar sx={{ background: '#673ab7' }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="">
              Ecommerce Application
            </NavLink>
          </Typography>
          <Button
            sx={{ color: 'white', '&.active': { color: 'yellow' }, '&:hover': { color: 'red' } }}
            component={NavLink}
            to="/cart"
            startIcon={<ShoppingCart />}
          >
            Cart
          </Button>
          <Button
            sx={{ color: 'white', '&.active': { color: 'yellow' }, '&:hover': { color: 'red' } }}
            component={NavLink}
            to="/login"
            startIcon={<Person />}
          >
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
