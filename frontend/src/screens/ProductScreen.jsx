import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, List, ListItemText } from '@mui/material';
import Rating from '../components/RatingBar';
import products from '../products';

const ProductScreen = ({ match }) => {
  const product = products.find((p) => p._id === match.param.id);

  const addToCartBtnDisabled = product.countInStock === 0;

  return (
    <div sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={12} lg={12}>
          <Link color="inherit" to="/">
            <Button variant="outlined">Go back</Button>
          </Link>
        </Grid>

        <Grid item xs={12} md={5}>
          <img src={product.image} alt={product.name} style={{ width: '100%' }}></img>
        </Grid>

        <Grid item xs={12} md={7}>
          <List>
            <ListItemText>
              <h2>{product.name}</h2>
            </ListItemText>
            <Grid container direction="row">
              <Grid item xs={12} md={4}>
                Price:
                <span>
                  <strong> {product.price} €</strong>{' '}
                </span>
              </Grid>
              <Grid item xs={12} md={4}>
                Status: <span>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</span>
              </Grid>
              <Grid item xs={12} md={4} justify="flex-end">
                <Button p={4} variant="outlined" disabled={addToCartBtnDisabled}>
                  Add To Cart
                </Button>
              </Grid>
            </Grid>
            <ListItemText>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListItemText>
            <ListItemText>{product.description}</ListItemText>
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductScreen;
