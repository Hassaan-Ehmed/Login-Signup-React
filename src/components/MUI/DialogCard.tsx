import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import pizzaImage from "../../images/productImages/4meat-351x200-min.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button, ButtonGroup, Divider, Grid } from "@mui/material";
import MiniPacket from "./MiniPacket";
import MiniSlider from "./MiniSlider";
import MUIAccordion from "./MUIAccordion";
import { addToCart, decreaseItemQuantity, removeFromCart } from "../../redux/slices/products";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Bounce } from "react-toastify";
import { successNotification } from "../../utils/Notifications";
import { getDataToLocalStorage } from "../../utils/localstorage";

export default function DialogCard({selectedItem}:any) {
  const theme = useTheme();


  const storeState: any = useAppSelector((state) => state?.products);

  const [currentQuantity, setQuantity] = useState(0);
  const [itemPresent, setItemPresent] = useState(false);

  useEffect(() => {
    let cartProducts: any = getDataToLocalStorage("cartProducts") ?? [];

    const isPresent = cartProducts?.filter(
      (i: any) => i?.id === selectedItem?.id
    );
    if (isPresent?.length > 0) {
      setItemPresent(true);
    }
    setQuantity(isPresent[0]?.quantity ?? 0);
  }, [storeState?.cartItems]);





const dispatch = useAppDispatch()

  const handleItemAdded = (selectedItem: any) => {
    dispatch(addToCart(selectedItem));

    // this success/warning msg have some conditons so i moved it to store in  addToCart  go store and check it
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


  const handleDecreaseQuanitity = (selectedItem: any) => {
    if (currentQuantity > 0) {
      if (currentQuantity === 1) {
        dispatch(decreaseItemQuantity(selectedItem));
        dispatch(removeFromCart(selectedItem));
        successNotification({
          msg: "Item removed successfully !",
          position: "bottom-right",
          time: 500,
          transitionName: Bounce,
        });
      } else {
        dispatch(decreaseItemQuantity(selectedItem));
      }
    }
  };

  return (
    <Grid container columns={12} sx={{width:"100%",height:"100%"}}>

      <Grid item xl={5} sx={{width:"100%",height:"100%",display:"flex",justifyContent:"flex-start", alignItems:"center",overflow:"hidden" ,boxShadow:"1px 0px 4px -3px"}}>
        {/* <CardMedia
          
          component="img"
          sx={{width:"100%", rotate:"270deg",bgcolor:"green"}}
          image={pizzImage}
          
          alt="Pizza Image"
          /> */}

        <img
          src={pizzaImage}
          alt=""
          style={{
            width: "32vw",
            height: "100%",
            rotate: "270deg",
            objectFit: "contain",
          }}
        />



      <Divider orientation="vertical" variant="fullWidth"  />

      </Grid>


      <Grid item container xl={7} sx={{width:"100%",height:"100%",display:"flex", flexDirection:"column" , justifyContent:"flex-start", alignItems:"center",gap:"2vh",position:'relative'}}>
     


<div className="fixedDiv" style={{position:"absolute",top:0}}>

        {/* 1st row */}
        <Grid item container style={{ display:"flex",justifyContent:"space-between",alignItems:'center'}}>
        <Grid item sx={{fontSize:"4vh",fontWeight:"bold"}}>{selectedItem.title}</Grid>
        {/* <Grid item><FavoriteIcon sx={{color:'lightgray',fontSize:"5vh"}}/></Grid> */}
        <span style={{fontSize:'2vh',color:"gray",paddingLeft:"10px"}}>{selectedItem.desc}</span>
        
        </Grid>
   

      {/* 2nd row */}

      {/* gap:"7.5vh", */}

<Grid item container spacing={3}>
        <Grid item  xl={4} lg={4} md={6} sm={12} xs={12}  sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            
            <ButtonGroup variant="outlined" aria-label="Basic button group">

<Button

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
 
     onClick={() => handleDecreaseQuanitity(selectedItem)}

>–</Button>

<Button variant="outlined"  

sx={{
  color: "black",
  ":hover ": { border:"0.5px solid #c9c9c9" },
  border:"0.5px solid #c9c9c9",
  outline: "none",
}}
>
{currentQuantity}
</Button>
<Button sx={{
       backgroundColor: "#FD001C",
       border:"none",
       marginLeft:"30px",
       color:"white",
       ": hover": { backgroundColor: "#FD001C",border:"none" },
     }}
     
     

     onClick={() => handleItemAdded(selectedItem)}
>+</Button>
            </ButtonGroup>

        </Grid>

        <Grid item xl={4} lg={4} md={6} sm={12} xs={12} sx={{fontSize:'4vh',color:"#3b78ad",paddingLeft:"10px",display:"flex",justifyContent:"center",alignItems:'center'}}>${selectedItem.price}</Grid>
        

        <Grid item xl={4} lg={4} md={6} sm={12} xs={12} sx={{display:"flex",justifyContent:"center",alignItems:'center'}}>

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
              onClick={() => handleItemAdded(selectedItem)}
            >
              Add To Cart
            </Button>


        </Grid>


</Grid>


</div>

<div className="scrolledDiv" style={{overflow:'auto',marginTop:"20vh"}}>
{/* 3rd row */}

<Grid item container>

<MiniPacket cater={'SLICE'} isEdge={false} />

<MiniPacket  cater={'SIZE'}  isEdge={false} />




 <MiniSlider cater={'EDGE'} isEdge={true}/>
 <MiniSlider cater={'EDGE'} isEdge={false}/>

<MUIAccordion/>
</Grid>
</div>


    </Grid>

    </Grid>
  );
}
{/* <Divider/> */}
  {/* <MiniSlider cater={'SIZE'}/> */}
{/* <Divider/> */}
  {/* <MiniSlider cater={'SLICE'}/> */}
{/* <Divider/> */}
  {/* <MiniSlider cater={'CRUST'}/> */}
