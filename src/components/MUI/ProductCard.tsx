import { Grid, Card as MUICard } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  addToCart,
  decreaseItemQuantity,
  removeFromCart,
} from "../../redux/slices/products";
import { Bounce, toast, Zoom } from "react-toastify";
import { store } from "../../redux/store";
import ButtonGroup from "@mui/material/ButtonGroup";
import Badge from "@mui/material/Badge";
import CloseIcon from "@mui/icons-material/Close";

import {
  errorNotification,
  notificationTypes,
  successNotification,
  warningNotification,
} from "../../utils/Notifications";
import { useEffect, useMemo, useState } from "react";
import { Decrypt } from "../../utils/Incryption";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function ProductCard({
  key,
  indexNum,
  quantity,
  foodPacket,
  forCart,
}: any) {
  const dispatch = useAppDispatch();
  const storeState: any = useAppSelector((state) => state?.products);

  const [currentQuantity, setQuantity] = useState(0);
  const [itemPresent, setItemPresent] = useState(false);

  useEffect(() => {
    let cartProducts = JSON.parse( localStorage.getItem("cartProducts") as string )


    const isPresent = cartProducts.filter((i: any) => i?.id === foodPacket?.id);
    if (isPresent?.length > 0) {
      setItemPresent(true);
    }
    setQuantity(isPresent[0]?.quantity ?? 0);


}, [storeState?.cartItems]);


  // console.log("PRODUCT QUANTITY::::",foodPacket.quantity);


  const handleItemAdded = (foodPacket: any) => {


    dispatch(addToCart(foodPacket));

    // this success/warning msg have some conditons so i moved it to store in  addToCart  go store and check it

  };

  const handleDecreaseQuanitity = (foodPacket: any) => {

    if (currentQuantity > 0) {

      if(currentQuantity === 1 ){
        dispatch(decreaseItemQuantity(foodPacket));
        dispatch(removeFromCart(foodPacket));
        successNotification({
          msg: "Item removed successfully !",
          position: "bottom-right",
          time: 500,
          transitionName: Bounce,
        });
        
      }else{
        
        dispatch(decreaseItemQuantity(foodPacket));
      }
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

  console.log("foodPacket", foodPacket ?? {});
  console.log("Current Quantity", currentQuantity ?? 0);




  let formatedQuantity  = new Intl.NumberFormat("en-US").format(currentQuantity) ?? 0
  return (

    <MUICard sx={{ backgroundColor: "#F5F5DC",cursor:"pointer"}} key={key}>
      <CardContent sx={{ maxWidth:'30vw'}}>
        {forCart ? (
          <Typography
            variant="h5"
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {foodPacket.title ?? ''}

            <CloseIcon
              onClick={() => handleItemRemoved(foodPacket)}
              sx={{ cursor: "pointer" }}
            />
          </Typography>
        ) : (
          <Typography variant="h5" component="div" sx={{backgroundColor:""}}>
            {foodPacket.title ?? ''}
          </Typography>
        )}

        <Typography
          variant="body2"
          sx={{ 
            // backgroundColor:"red",
            textOverflow: "ellipsis",
            overflow:"hidden",
            whiteSpace:"nowrap",
            wordWrap:"normal",
            ":hover ":{
              textOverflow: "",
              overflow:"visible",
              whiteSpace:"normal",
              wordWrap:"break-word"


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
          {((!itemPresent) || (currentQuantity < 1)) ? (
            <Button
              size={'small'}
              variant="contained"
              sx={{
                backgroundColor: "#FD001C",
                padding:"7px 10px",
                ": hover": { backgroundColor: "#FD001C" },
                " .MuiButtonBase-root":{
                  
                }
              }}
              onClick={() => handleItemAdded(foodPacket)}
            >
              Add To Cart
            </Button>
          ) : (
            <Box
            sx={{
              display: 'flex',
              justifyContent:"flex-start",
              alignItems:"center",
            
            }}
          >
            <ButtonGroup variant="outlined"  >
              <Button
                sx={{
                  
                  backgroundColor: "#FD001C",
                  border: "none",
                  color:"white",
                  ":hover ": { backgroundColor: "#FD001C", border: "none" ,},
                }}
                onClick={() => handleDecreaseQuanitity(foodPacket)}
              >
                -
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: "black",
                  ":hover ": { border:"0.5px solid #c9c9c9" },
                  border:"0.5px solid #c9c9c9",
                  outline: "none",
                }}
              >
                {formatedQuantity ?? 0}
              </Button>
              <Button
                sx={{
                  backgroundColor: "#FD001C",
                  border: "none",
                  marginLeft:"30px",
                  color:"white",
                  

                  ":hover ": { backgroundColor: "#FD001C", border: "none" },
                }}
                onClick={() => handleItemAdded(foodPacket)}
              >
                +
              </Button>
            </ButtonGroup>
          
            </Box>
          )}
        </>

        <Typography variant="h6" component="div" sx={{ color: "#316FF6" }}>
          <strong>${foodPacket.price ?? 0}</strong>
        </Typography>
      </CardActions>
    </MUICard> 
    

);
}
