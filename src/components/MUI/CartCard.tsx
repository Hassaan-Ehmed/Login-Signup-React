import CloseIcon from '@mui/icons-material/Close';
import { Card as MUICard } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Bounce } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart, decreaseItemQuantity, removeFromCart } from "../../redux/slices/products";



import {
  successNotification
} from "../../utils/Notifications";




export default function CartCard({
  key,
  indexNum,
  foodPacket,
  forCart,
}: any) {




  const dispatch = useAppDispatch();
  const storeState: any = useAppSelector((state) => state?.products);

    const handleItemAdded = (foodPacket: any) => {
 
      dispatch(addToCart(foodPacket));
  
      // this success/warning msg have some conditons so i moved it to store in  addToCart  go store and check it
    };


    const handleDecreaseQuanitity = (foodPacket: any) => {  
  
      if(foodPacket.quantity > 1){
  
        dispatch(decreaseItemQuantity(foodPacket))
      }
    
    };
  function handleItemRemoved(foodPacket: any) {
    dispatch(removeFromCart(foodPacket));

    successNotification({
      msg: "Item removed successfully !",
      position: "bottom-right",
      time: 500,
      transitionName: Bounce,
    });
  }

  let formatedQuantity = new Intl.NumberFormat("en-US").format(foodPacket.quantity);
  return (
    <MUICard sx={{ backgroundColor: "#F5F5DC",cursor:"pointer" }} key={key}>
      <CardContent sx={{ maxWidth:'30vw'}}>
      
       {forCart ? (<Typography variant="h5" component="div" 
        
        sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          {foodPacket.title}
        
        <CloseIcon onClick={() => handleItemRemoved(foodPacket)} sx={{cursor:"pointer"}}/>
        </Typography>) : (<Typography variant="h5" component="div"> 
{foodPacket.title}
</Typography>)}
       
        
        <Typography
          variant="body2"
          sx={{ 
            textOverflow: "ellipsis",
            overflow:"hidden",
            whiteSpace:"nowrap",
            wordWrap:"normal",
            ":hover ":{
              textOverflow: "",
              overflow:"visible",
              whiteSpace:"normal",
              wordWrap:"break-word",
              
            }

          }}
        >
          {foodPacket.desc}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>

          <>

          <Box
            sx={{
              display: 'flex',
              justifyContent:"flex-start",
              alignItems:"center",
            
            }}
          >
          <ButtonGroup variant="outlined" aria-label="Basic button group">
    <Button
    
    disabled = {foodPacket.quantity < 2 ? true : false}
    
    sx={{
           backgroundColor: "#FD001C",
           border:"none",
           color:"white",
           ": hover": { backgroundColor: "#FD001C",border:"none" },
            ":disabled ":{
               backgroundColor: 'rgba(163,163,163,0.5)',
               color:"white" ,
               cursor:"not-allowed"
               
            }
         }}
         
         
         onClick={() => handleDecreaseQuanitity(foodPacket)}
         
         >–</Button>

    <Button variant="outlined"  
    
    sx={{
      color: "black",
      ":hover ": { border:"0.5px solid #c9c9c9" },
      border:"0.5px solid #c9c9c9",
      outline: "none",
    }}
    >

{formatedQuantity ?? 0}

    </Button>
    <Button sx={{
           backgroundColor: "#FD001C",
           border:"none",
           marginLeft:"30px",
           color:"white",
           ": hover": { backgroundColor: "#FD001C",border:"none" },
         }}
         
         
         onClick={() => handleItemAdded(foodPacket)}
         
         >+</Button>
  </ButtonGroup>
  </Box>

          </>
       


        <Typography variant="h6" component="div" sx={{ color: "#316FF6" }}>
          <strong>${foodPacket.price}</strong>
        </Typography>
      </CardActions>
    </MUICard>
  );
}
