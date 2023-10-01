import React from 'react';
import { AppBar, Toolbar, Typography, Button, Link } from '@mui/material';
// import { ShoppingCart, Person } from '@mui/icons-material';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SendIcon from '@mui/icons-material/Send';

const Header = () => {
  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Ecommerce Application</Typography>
          <Link color="inherit" to="/cart">
            <Button color="inherit">Cart</Button>
          </Link>
          <Link color="inherit" to="/login">
            <Button color="inherit">Sign In</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
