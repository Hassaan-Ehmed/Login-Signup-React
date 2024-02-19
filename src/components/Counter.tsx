import { Button, ButtonGroup } from '@mui/material'
import React from 'react'
import { addToCart, decreaseItemQuantity } from '../redux/slices/products';
import { useAppDispatch } from '../redux/hooks';

export default function Counter({quantity,foodPacket,indexNum}:any) {

const dispatch = useAppDispatch();


    const handleItemAdded = (foodPacket: any,id:number) => {
 
        dispatch(addToCart(foodPacket));
    
        // this success/warning msg have some conditons so i moved it to store in  addToCart  go store and check it
      };
      const handleDecreaseQuanitity = (foodPacket: any) => {
        
    
        if(foodPacket.quantity > 1){
    
          dispatch(decreaseItemQuantity(foodPacket))
        }
      
      };

  return (
    <ButtonGroup variant="contained" aria-label="Basic button group">
    <Button
    
    // disabled = {quantity < 2 ? true : false}
    
    sx={{
           backgroundColor: "#FD001C",
           border:"none",
           ": hover": { backgroundColor: "#FD001C",border:"none" }
         }}
         
         
         onClick={() => handleDecreaseQuanitity(foodPacket)}
         
         >–</Button>

    <Button variant="outlined"  sx={{color:"black",border:"none",":hover ":{border:"none"} , background:"transparent",outline:"none"}}
    
    >

{quantity}
    </Button>
    <Button sx={{
           backgroundColor: "#FD001C",
           border:"none",
           ": hover": { backgroundColor: "#FD001C",border:"none" },
         }}
         
         
         onClick={() => handleItemAdded(foodPacket,indexNum)}
         
         >+</Button>
  </ButtonGroup>

  )
}
