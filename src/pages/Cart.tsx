import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Card from '../components/MUI/Card';
import { useAppSelector } from '../redux/hooks';
import emptyCartImage from '../images/empty-cart.png'
import { useState } from 'react';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export const TotalDiv = ({text,numbers}:any)=>{

 return  (<div style={{ width:"100%",height:"15%",backgroundColor:"#FFB000",display:"flex",justifyContent:"center",alignItems:"center"}}>
  <h2 style={{fontSize:'1.5vw'}}>{text} {text == "Total Price:" && "$"}{numbers}</h2>
</div>)

}

export default function Cart() {

const [totalPrice,setTotalPrice] = useState([]);

const storeState:any = useAppSelector(state => state.products);

const url = window.location.pathname; 

const total:any = storeState?.cartItems?.reduce((acc:any,currentVal:any)=>  acc + currentVal?.price ?? 0 ,0);



    return (
    <div style={{width:"100%",display:'flex',flexDirection:"column",justifyContent:"center"}}>

 <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#FFCD9B",marginBottom:"10px"}}>
<h1 style={{textAlign:"center",fontSize:"2.7vw"}}>{storeState.cartItems.length < 1 ?("Empty Cart"):("Cart Items")}</h1>

    </div>

{storeState.cartItems.length < 1 ? (


<div style={{width:"100%",height:"auto",backgroundColor:"#F5F5DC",display:"flex",justifyContent:"center",alignItems:'center'}}>

<img src={emptyCartImage} style={{width:'50%'}}/>


</div>
) 

: (

<div style={{width:"100%",display:'flex',justifyContent:"space-between",backgroundColor:"#F5F5DC"}}>


<div style={{width:'60%',height:"72vh",backgroundColor:"#F5F5DC",display:"flex",justifyContent:"flex-end",overflowY:"hidden",boxShadow:"black -2px 7px 12px -7px; "}} >

<div style={{width:"35%",height:"100%",backgroundColor:"white",padding:"20px",overflow:"auto",boxShadow:"#000000 0px 1px 20px -16px"}}>

<Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>

          <Grid container item spacing={2}>
     {storeState?.cartItems?.map((item:any,index:number)=>(
      <Grid item xs={12}>

       <Card forCart={true} key={item.id} title={item.title} desc={item.desc} price={item.price} foodPacket={item}/>
    
      </Grid>
       ))}
         
      </Grid>
        </Grid>
      </Box>
 

</div>


</div>


<div style={{width:'15%',height:"72vh",backgroundColor:"#004328",display:"flex",
flexDirection:"column",justifyContent:"space-between",alignItems:"center",overflowY:"hidden",boxShadow:"black -2px 7px 12px -7px; "}} >



<TotalDiv text={"Total Items:"} numbers={storeState?.cartItems.length}/>
<TotalDiv text={"Total Price:"} numbers={total}/>


</div>


</div>

)}
    </div>
  )
}
