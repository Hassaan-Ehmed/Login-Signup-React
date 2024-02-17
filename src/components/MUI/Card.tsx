import { Card as MUICard } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from '../../redux/hooks';
import { addToCart, removeFromCart } from '../../redux/slices/products';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Card({key,title,desc,price,foodPacket,forCart}:any) {

  const dispatch = useAppDispatch()

  return (
    <MUICard sx={{ backgroundColor:"#F5F5DC"}} key={key}>
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
        

        {forCart 
        
        
        ? ( <Button size="small" variant='contained' 
        sx={{backgroundColor:"#FD001C",": hover":{ backgroundColor:"gray" }}}
        
        onClick={()=>dispatch(removeFromCart(foodPacket))}
        
        >Remove Item</Button>) 
  
        
        : ( <Button size="small" variant='contained' 
        sx={{backgroundColor:"#FD001C",": hover":{ backgroundColor:"#FD001C" }}}
        
        onClick={()=>dispatch(addToCart(foodPacket))}
        
        >Add To Cart</Button>)}
        
       

 


        <Typography variant="h6" component="div" sx={{color:"#316FF6"}}>
<strong>${price}</strong>
        </Typography>
      
      </CardActions>
    </MUICard>
  );
}