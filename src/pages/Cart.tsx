import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import CartCard from '../components/MUI/CartCard';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import emptyCartImage from '../images/empty-cart.png'
import { useState } from 'react';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { clearAllItems } from '../redux/slices/products';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export const TotalDiv = ({text,numbers}:any)=>{

 return  (<div style={{ width:"100%",height:"15%",backgroundColor:"#FFB000",display:"flex",justifyContent:"center",alignItems:"center"}}>
  <Typography sx={{
    fontSize:'1.5em',
    textOverflow:"ellipsis",
    overflow:"hidden",
    whiteSpace:"nowrap",
    wordWrap:"normal",
    ":hover ":{
      textOverflow:"",
      overflow:"visible",
      whiteSpace:"normal",
      wordWrap:"break-word",
    }
    
}}>{text} {text == "Total Price:" && "$"}{numbers}</Typography>
</div>)

}

export default function Cart() {

// const [totalPrice,setTotalPrice] = useState([]);

const storeState:any = useAppSelector(state => state.products);
const dispatch = useAppDispatch(); 


const url = window.location.pathname; 

let total:any = storeState?.cartItems?.reduce((acc:any,currentVal:any)=> acc + (currentVal.price * currentVal.quantity) ?? 0 ,0);
let totalQuantity:any = storeState?.cartItems?.reduce((acc:any,currentVal:any)=> acc + currentVal.quantity ?? 0 ,0);
  
total = new Intl.NumberFormat("en-US").format(total);
totalQuantity = new Intl.NumberFormat("en-US").format(totalQuantity);




const handleRemoveAllItems=()=>{

  dispatch(clearAllItems());
}
return (
    <div style={{width:"100%",display:'flex',flexDirection:"column",justifyContent:"center"}}>

 <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#FFCD9B",marginBottom:"10px"}}>
<h1 style={{textAlign:"center",fontSize:"2.7vw"}}>{storeState.cartItems.length < 1 ?("Empty Cart"):("Cart Items")}</h1>

    </div>

{storeState.cartItems.length < 1 ? (


<div style={{width:"100%",height:"auto",display:"flex",justifyContent:"center",alignItems:'center'}}>

<img src={emptyCartImage} style={{width:'50%'}}/>


</div>
) 

: (

<div style={{width:"100%",display:'flex',justifyContent:"center",backgroundColor:"#F5F5DC",position:'relative'}}>


<div style={{width:'60%',height:"100vh",display:"flex",justifyContent:"center",gap:10,boxShadow:"black -2px 7px 12px -7px; "}} >


<div style={{width:"35%",height:"100%",backgroundColor:"white",padding:"20px",overflow:"auto",boxShadow:"#000000 0px 1px 20px -16px"}}>

<Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>

          <Grid container item spacing={2}>
     {storeState?.cartItems?.map((item:any,index:number)=>       item.quantity  > 0  ? 
       (
       <Grid item xs={12}>

       <CartCard  forCart={true} key={item.id} indexNum={index}  foodPacket={item}/>
    
      </Grid>) : ("")
)}
         
      </Grid>
        </Grid>
      </Box>
 

</div>

<div>

<Button 
variant="outlined" 
startIcon={<DeleteIcon />}
color="error" 

onClick={handleRemoveAllItems}

>
        Clear Items
      </Button>

</div>


</div>


<div style={{maxWidth:'15%',height:"72vh",backgroundColor:"blue",display:"flex",
flexDirection:"column",justifyContent:"space-between",alignItems:"center",overflowY:"hidden",boxShadow:"black -2px 7px 12px -7px; ",position:'fixed',right:0}} >



<TotalDiv text={"Total Items:"} numbers={totalQuantity}/>


<TotalDiv text={"Total Price:"} numbers={total}/>


</div>



</div>

)}
    </div>
  )
}
