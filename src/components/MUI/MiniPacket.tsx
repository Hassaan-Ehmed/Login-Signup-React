import React, { useRef, useState } from 'react'
import pizzaOverlayBlue from '../../images/blue-pizza-overlay.webp'
import { Divider, Grid } from '@mui/material'
const MiniPacket = ({cater,isEdge}:any) => {


const Slide = ()=>{

   
    return (
    <Grid item container style={{backgroundColor:"#F8F8F8",border:"1.5px solid #0276AE",width:"30%",height:"auto",
     borderRadius:"10px",cursor:"pointer",display:"flex",justifyContent:"space-around"}}>
    

    <Grid item xl={5} lg={5} md={6} sm={12} xs={12} sx={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
      
      <img src={pizzaOverlayBlue} style={{width:"5vh",height:'5vh'}} />
    
    
    </Grid>

    <Grid item xl={5} lg={5} md={6} sm={12} xs={12} sx={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:'center'}}>
    
    <p style={{fontSize:"1.5vh",color:"#585858"}}><span style={{fontWeight:"bold",fontSize:"2vh",color:'black'}}>Small</span> 14.40$</p>
    
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

{[...Array(3)].map(() => ( <Slide/> ))}

</Grid>

    </>

  )
}

export default MiniPacket
