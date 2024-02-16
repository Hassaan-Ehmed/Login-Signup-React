import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from './MUI/Card';
import { products } from '../data/data';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Products({foodsArray}:any) {

  const food:any = foodsArray
  
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>

          <Grid container item spacing={2}>
     {food.map((item:any,index:number)=>(
      <Grid item xs={4}>

       <Card key={item.id} title={item.title} desc={item.desc} price={item.price} foodPacket={item}/>
    
      </Grid>
       ))}
         
      </Grid>
        </Grid>
      </Box>
    );
  }
