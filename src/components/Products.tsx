import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Card from './MUI/Card';
import { useParams } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Products({foodsArray,forCart}:any) {

  const food:any = foodsArray

  const params = useParams();

  
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>

          <Grid container item spacing={2}>
     {food.map((item:any,index:number)=>(
      <Grid item xs={3}>

       <Card  key={item.id} title={item.title} desc={item.desc} price={item.price} foodPacket={item} forCart={forCart}/>
    
      </Grid>
       ))}
         
      </Grid>
        </Grid>
      </Box>
    );
  }
