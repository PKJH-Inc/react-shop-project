import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Rating from './RatingBar';

const Product = ({ product }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardActionArea component={Link} to={`/products/${product._id}`}>
        <CardMedia sx={{ height: '150px' }} image={product.image} title={product.name} />
        <CardContent>
          <Typography gutterBottom variant="subtitle2">
            {product.name}
          </Typography>
          <Rating value={product.rating} text={`${product.numReviews} reviews`} />
          <Typography variant="button" color="textPrimary" component="p">
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Product;
