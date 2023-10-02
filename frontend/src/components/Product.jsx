import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

const Product = ({ product }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardActionArea href={`/product/${product._id}`}>
        <CardMedia
          sx={{ height: '150px' }}
          image={product.image}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle2">
            {product.name}
          </Typography>
          <Typography variant="caption" color="textSecondary" component="p">
            {product.rating} from {product.numReviews} reviews
          </Typography>
          <Typography variant="subtitle1" color="textPrimary" component="p">
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Product;
