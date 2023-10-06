import React from 'react';
import { Rating, Grid, Typography } from '@mui/material';

const RatingBar = ({ value, text }) => {
  return (
    <Grid container sx={{ flexGrow: 1, flexDirection: 'row' }}>
      <Rating name="read-only" value={value || ''} readOnly size="small" />
      <Typography sx={{ marginLeft: '10px' }} variant="caption" color="textSecondary" component="p">
        {text}
      </Typography>
    </Grid>
  );
};

export default RatingBar;
