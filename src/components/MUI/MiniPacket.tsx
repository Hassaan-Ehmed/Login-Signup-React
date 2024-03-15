import React, { useRef, useState } from 'react'
import { Divider, Grid } from '@mui/material'

import pizzaOverlayBlue from '../../images/blue-pizza-overlay.webp'
import pizzaOverlayBlack from '../../images/black-pizza-overlay.webp'


const MiniPacket = ({cater,updatePrice,dataPacket,setSize,size}:any) => {

const [data,setData] = useState(dataPacket);

  
const handlePacket=(indexNum:number,price:number,title:string)=>{


  setData((prevData:any) => {
    const updatedData = prevData.map((item:any, index:any) => ({
      ...item,
    selected: index === indexNum
    }));
    return updatedData;

  });

if(typeof updatePrice === "function"){
  updatePrice(price,title);


}

}



const Slide = ({packet,indexNum}:any)=>{

  console.log('packet',packet);


    return (
    <Grid item container style={{backgroundColor:"#F8F8F8", border: `${packet.selected && "1.5px solid #0276AE"}`,maxWidth:"30%",maxHeight:"4vw",padding:"0 0 0 10px",borderRadius:"10px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"flex-start"}}
     
     onClick={()=>handlePacket(indexNum,packet.text,packet.title)}
     >
      
  
      <img src={`${packet.selected  ? pizzaOverlayBlue : pizzaOverlayBlack }`} style={{width:"5vh",height:'5vh'}} />



      <p style={{marginLeft:"5px",fontWeight:"bold",fontSize:"1.5vh",color:`${packet.selected  ?  "#0276AE" : "black"}`,maxWidth: `${cater == "SIZE" ? "40%" : "50%"}`}}>
        {packet.title} <span style={{fontWeight:"normal",fontSize:"1.3vh",color:`${packet.selected  ? "white" : "#585858"}`,backgroundColor:`${packet.selected ? "#0276AE" : ""} `}}>{cater === "SIZE" && "$"}{packet.text}</span> 
        </p>


    
    </Grid>
    )    
}



  return (


    <>
    

      <Grid item sx={{fontSize:"1vw",fontWeight:"bold",color:"#585858",paddingLeft:"1.5vh"}}>SELECT {cater ?? "Category"}</Grid>

<Grid item container 
    
    sx={{width:"100%",height:"100px", display:"flex",justifyContent:"center",gap:"10px", alignItems:"center",overflow:"hidden"}}
    
>
{data.map((packet:any,indexNum:number)=><Slide packet={packet}  indexNum={indexNum}/>)}
</Grid>

    </>

  )
}

export default MiniPacket
