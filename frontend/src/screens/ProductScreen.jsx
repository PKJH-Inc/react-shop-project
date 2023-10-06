import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Grid, List, ListItemText } from '@mui/material';
import Rating from '../components/RatingBar';
import _ from 'lodash';

const ProductScreen = () => {
  const [product, setProduct] = useState([]);
  const productId = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await fetch(`/api/products/${productId.id}`).then((res) => res.json());
      setProduct(data);
      console.log(data);
    };
    fetchProduct();
  }, [productId]);

  const addToCartBtnDisabled = product.countInStock === 0;

  return !_.isEmpty(product) ? (
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
  ) : (
    <div>Loading...</div>
  );
};

export default ProductScreen;
