import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { ShoppingCart, Person } from '@mui/icons-material';
import { Link, NavLink } from 'react-router-dom';

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
          <Link color="inherit" to="/cart">
            <Button color="inherit" sx={{ color: 'white' }} startIcon={<ShoppingCart />}>
              Cart
            </Button>
          </Link>
          <Link color="inherit" to="/login">
            <Button color="inherit" sx={{ color: 'white' }} startIcon={<Person />}>
              Sign In
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
