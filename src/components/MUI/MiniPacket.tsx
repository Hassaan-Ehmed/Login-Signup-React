import React, { useRef, useState } from 'react'
import { Divider, Grid } from '@mui/material'

import pizzaOverlayBlue from '../../images/blue-pizza-overlay.webp'
import pizzaOverlayBlack from '../../images/black-pizza-overlay.webp'



const MiniPacket = ({cater,isEdge,dataPacket}:any) => {

const [data,setData] = useState(dataPacket);

  
const handlePacket=(indexNum:number)=>{

  console.log('index',indexNum);



  setData((prevData:any) => {
    const updatedData = prevData.map((item:any, index:any) => ({
      ...item,
    selected: index === indexNum
    }));
    return updatedData;
  });
}



const Slide = ({packet,indexNum}:any)=>{



  console.log('packet',packet);


    return (
    <Grid item container style={{backgroundColor:"#F8F8F8", border: `${packet.selected && "1.5px solid #0276AE"}`,width:"30%",height:"auto",
     borderRadius:"10px",cursor:"pointer",display:"flex",justifyContent:"space-around"}}
     
     onClick={()=>handlePacket(indexNum)}
     >
    

    <Grid item xl={5} lg={5} md={6} sm={12} xs={12} sx={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
      
      <img src={`${packet.selected  ? pizzaOverlayBlue : pizzaOverlayBlack }`} style={{width:"5vh",height:'5vh'}} />
    
    
    </Grid>

    <Grid item xl={5} lg={5} md={6} sm={12} xs={12} sx={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:'center'}}>
    
    <p style={{fontSize:"1.5vh",color:"#585858"}}><span style={{fontWeight:"bold",fontSize:"1.5vh",color:'black'}}>{packet.title}</span> 14.40$</p>
    
    </Grid>
    
    
    </Grid>
    )    
}



  return (


    <>
    
<Divider variant="fullWidth" />

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
