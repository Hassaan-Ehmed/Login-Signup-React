import * as React from 'react';
import Box from '@mui/material/Box';
import {Card as MUICard} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from '../../redux/hooks';
import { addToCart } from '../../redux/slices/products';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Card({key,title,desc,price,foodPacket}:any) {

  const dispatch = useAppDispatch()

  return (
    <MUICard sx={{ backgroundColor:"gold"}} key={key}>
      <CardContent>

        <Typography variant="h5" component="div">
          {title}
        </Typography>
      
        <Typography variant="body2" sx={{width:"100%",textOverflow:"ellipsis"}}>
        {desc}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions >
        
        
        <Button size="small" variant='contained'
        
        onClick={()=>dispatch(addToCart(foodPacket))}
        
        >Add To Cart</Button>



        <Typography variant="h6" component="div">
<strong>${price}</strong>
        </Typography>
      
      </CardActions>
    </MUICard>
  );
}