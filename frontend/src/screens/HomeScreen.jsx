import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import Product from '../components/Product';
// import products from '../products';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('./api/products').then((res) => res.json());
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <Grid container direction="row">
      <Typography variant="h5" style={{ marginTop: '25px' }} color="primary">
        Latest Products
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} lg={3} key={product._id}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default HomeScreen;
