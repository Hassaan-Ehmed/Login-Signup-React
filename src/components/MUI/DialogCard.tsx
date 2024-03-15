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
import pizzaImage from "../../images/productImages/pizza1.webp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button, ButtonGroup, Divider, Grid, } from "@mui/material";
import MiniPacket from "./MiniPacket";
import MiniSlider from "./MiniSlider";
import MUIAccordion from "./MUIAccordion";
import { addToCart, decreaseItemQuantity, handleClose, handleModalItemAdd, removeFromCart } from "../../redux/slices/products";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { successNotification } from "../../utils/Notifications";
import { getDataToLocalStorage } from "../../utils/localstorage";
import '../../App.css'
import { Bounce } from "react-toastify";
import { SafetyDivider } from "@mui/icons-material";
import pizzaImage1 from "../../images/productImages/pizza1.webp";
import pizzaImage2 from "../../images/productImages/pizza2.webp";
import pizzaImage3 from "../../images/productImages/pizza3.png";
import pizzaImage4 from "../../images/productImages/pizza4.png";
import pizzaImage5 from "../../images/productImages/pizza5.png";
import pizzaImage6 from "../../images/productImages/pizza6.png";
import pizzaImage7 from "../../images/productImages/pizza7.png";
import pizzaImage8 from "../../images/productImages/pizza8.png";
import pizzaImage9 from "../../images/productImages/pizza9.webp";
import pizzaImage10 from "../../images/productImages/pizza10.png";
import pizzaImage11 from "../../images/productImages/pizza11.png";
import pizzaImage12 from "../../images/productImages/pizza12.png";
import pizzaImage13 from "../../images/productImages/pizza13.png";
import pizzaImage14 from "../../images/productImages/pizza14.png";
import pizzaImage15 from "../../images/productImages/pizza15.png";
import '../../App.css'

export default function DialogCard({selectedItem}:any) {

  
  const theme = useTheme();
  
  
  // Only for Pizza!
  const image = [
    pizzaImage1,
    pizzaImage2,
    pizzaImage3,
    pizzaImage4,
    pizzaImage5,
    pizzaImage6,
    pizzaImage7,
    pizzaImage8,
    pizzaImage9,
    pizzaImage10,
    pizzaImage11,
    pizzaImage12,
    pizzaImage13,
    pizzaImage14,
    pizzaImage15
  ]
  
  const storeState: any = useAppSelector((state) => state?.products);
  
  const [currentQuantity, setQuantity] = useState(0);
  const [counter, setCounter] = useState(1);
  const [itemPresent, setItemPresent] = useState(false);
  const [price,setPrice] = useState(selectedItem.price);
  const [size,setSize] = useState('Medium')
  
  useEffect(() => {


    console.log("Size",size);


    let cartProducts: any = getDataToLocalStorage("cartProducts") ?? [];

    const isPresent = cartProducts?.filter(
      (i: any) => i?.id === selectedItem?.id
    );
    if (isPresent?.length > 0) {
      setItemPresent(true);
    }
    setQuantity(isPresent[0]?.quantity ?? 0);
  }, [storeState?.cartItems]);



useEffect(()=>{




    
    if(size === "Medium"){
      
  
      setPrice((selectedItem.price * counter).toFixed(2));
  
      }else if (size  === "Small"){
        
        setPrice(((selectedItem.price - (selectedItem.price / 3)) * counter).toFixed(2)); 
  
    }
      else if (size  === "Large"){
        
        // setPrice( selectedItem.price * counter).toFixed(2);
        setPrice(((selectedItem.price + (selectedItem.price / 3)) * counter).toFixed(2)); 
  
    }
  
  
  
  


},[counter])


const dispatch = useAppDispatch()



const handleItemAdded = (selectedItem: any) => {


  // const priceBySize = (price * counter ) / counter

  // const priceUpdated = {
    
  //   ...selectedItem,
  //   price:priceBySize
  // } 

const readyObj = {
    counter:counter,
    foodPacket:selectedItem
}
    dispatch(handleModalItemAdd(readyObj));
    

    successNotification({

    msg:"Item added Successfully!",
    position:"bottom-right",
    time:600,
    transitionName:Bounce
    })


    setTimeout(()=>{

        dispatch(handleClose());

    },800);

    // this success/warning msg have some conditons so i moved it to store in  addToCart  go store and check it
  };




  const sizePacket = [
    {
        title:"Small",
        text: (selectedItem.price - (selectedItem.price / 3)).toFixed(2) ,
        selected:false,

    },
    {
        title:"Medium",
        text: selectedItem.price,
        selected:true,
    },
    {
        title:"Large",
        text: (selectedItem.price + (selectedItem.price / 3)).toFixed(2),
        selected:false, 
     }
  ]

  const slicePacket = [
    {
        title:"Regular Cut",
        text:`${6} Slices`,
        selected:true
    },
    {
        title:"Double Cut",
        text:`${12} Slices`,
        selected:false
    },
    {
        title:"Square Cut",
        text:`${16} Slices`,
        selected:false
    }
  ]

const pizzaCrustPacket = [
    {
        type:"Classical Crust",
        check:true
    },
    {
        type:"Thin Crust",
        check:false
    },
    {
        type:"Thinnest Crust",
        check:false
    },
    {
        type:"Duplex Crust",
        check:false
    },
]
const pizzaEdgePacket = [
    
    {
        type:"Mozzarella Edge",
        check:false
    },
    {
        type:"Sausage Edge",
        check:false
    },
    {
        type:"Parmesan Edge",
        check:false
    },
    {
        type:"Garlic Sauce Edge",
        check:false
    },
];

const handleCounter=(action:string,selectedItem:any)=>{


  if(action === 'plus'){

    setCounter( counter + 1  );
  }else{
    if(counter > 1)    setCounter( counter  - 1);
}

}

const updatePrice = (selectedPrice:number,title:string)=>{

  if(title === "Medium"){


    
    setPrice((selectedItem.price * counter).toFixed(2));
    
  }else if (title === "Small"){
    
    setSize(title)
    setPrice((((selectedItem.price - (selectedItem.price / 3))) * counter).toFixed(2) )
    
  }else if (title === "Large"){
    setSize(title)
    
    setPrice((((selectedItem.price + (selectedItem.price / 3))) * counter).toFixed(2) )
  }
  

}



return (
    <Grid container columns={12}  sx={{width:"100%",height:"100%"}}>

      <Grid item xl={5} sx={{width:"100%",height:"100%",display:"flex",justifyContent:"flex-start", alignItems:"center",overflow:"hidden" ,boxShadow:"1px 0px 4px -3px"}}>
       

        <img
          src={image[selectedItem.source]}
          alt=""
          style={{
            width: "30vw",
            height: "100%",
            // rotate: "270deg",
            objectFit: "contain",
            marginLeft:"40px"
          }}
        />



      <Divider orientation="vertical" variant="fullWidth"  />

      </Grid>

{/* <div style={{margin:'0 5px'}}></div> */}

      <Grid item container xl={7} sx={{width:"100%",height:"100%",display:"flex", flexDirection:"column" , justifyContent:"flex-start", alignItems:"center",gap:"2vh",position:'relative'}}>
     


<div className="fixedDiv" style={{position:"absolute",top:0,right:0}}>

        {/* 1st row */}
        <Grid item container style={{ display:"flex",justifyContent:"space-between",alignItems:'center'}}>
        <Grid item sx={{fontSize:"4vh",fontWeight:"bold",paddingLeft:"10px"}}>{selectedItem.title}</Grid>
        <Grid item>
          <FavoriteIcon sx={{color:"#D3D3D3",fontSize:"4vh",marginRight:"10px",cursor:"pointer"}}
        
          // onClick={()=>setIsFilled(!isFilled)}

        /></Grid>
        <span style={{fontSize:'2vh',color:"gray",paddingLeft:"10px"}}>{selectedItem.desc}</span>
        
        </Grid>
   

      {/* 2nd row */}

      {/* gap:"7.5vh", */}

<Grid item container >
      
        <Grid item  xl={4} lg={4} md={6} sm={12} xs={12}  sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            
            <ButtonGroup variant="outlined" aria-label="Basic button group"  sx={{marginLeft:"-30px"}}>

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
 
     onClick={() => handleCounter("minus",selectedItem)}

disabled={counter === 1}
>–</Button>

<Button variant="outlined"  

sx={{
  color: "black",
  ":hover ": { border:"0.5px solid #c9c9c9" },
  border:"0.5px solid #c9c9c9",
  outline: "none",
}}
>
{counter}
</Button>
<Button
 sx={{
       backgroundColor: "#FD001C",
       border:"none",
       marginLeft:"30px",
       color:"white",
       ": hover": { backgroundColor: "#FD001C",border:"none" },
     }}
     
     

     onClick={() => handleCounter("plus",selectedItem)}

>+</Button>
            </ButtonGroup>

        </Grid>

        <Grid item xl={4} lg={4} md={6} sm={12} xs={12} sx={{fontSize:'4vh',fontWeight:"bold",color:"#0078AC",paddingLeft:"10px",display:"flex",justifyContent:"center",alignItems:'center'}}>${price}</Grid>
        

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

<div className="scrolledDiv" style={{width:'100%',marginTop:"20vh",overflow:"auto"}} >
{/* 3rd row */}

<Grid item container>



<MiniPacket  cater={'SIZE'}  isEdge={false} dataPacket={sizePacket} updatePrice={updatePrice} setSize={setSize} size={size}/>

 <MiniPacket cater={'SLICE'} isEdge={false} dataPacket={slicePacket}/>


 <MiniSlider cater={'CRUST'} isEdge={false} dataPacket={pizzaCrustPacket}/>
 <MiniSlider cater={'EDGE'} isEdge={true} dataPacket={pizzaEdgePacket}/>

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
