import React, { useRef, useState } from 'react'
import miniSliderPizza from '../../images/mini-slider-pizza.png'
import pizzaBG from '../../images/pizzaBG.jpeg'
import { Divider, Grid } from '@mui/material'
import '../../App.css'


const MiniSlider = ({cater,isEdge}:any) => {

  
const Slide = ()=>{

  if(isEdge){
    
    return (
      <Grid item container style={{width:"30%",height:"6vh",
       borderRadius:"10px",cursor:"pointer",display:"flex",justifyContent:"space-around",position:"relative",overflow:"hidden",backgroundColor:"white"}}
      
       >
      
  
        <img src={pizzaBG} style={{width:"100%",height:'100%',objectFit:"cover",position:'absolute',opacity:0.56}} />
      
        <p style={{fontSize:"1.6vh",color:"black", fontWeight:"bold",position:"absolute",top:-15,left:10}}>Classical Crust</p>
      
  
      
      </Grid>
      )

  }else{
return (
    <Grid item container style={{border:"1.5px solid #0276AE",width:"30%",height:"6vh",
     borderRadius:"10px",cursor:"pointer",display:"flex",justifyContent:"space-around",position:"relative",paddingTop:'12px'}}
     >
  
      <img src={miniSliderPizza} style={{width:"100%",height:'100%',objectFit:"contain",}} />
    
      <p style={{fontSize:"1.5vh",color:"black",position:"absolute",top:-15,left:10}}>Classical Crust</p>
      
    </Grid>
    )    
  }
   
        
}

// ref={sliderRef}
// onMouseDown={handleMouseDown}
// onMouseMove={handleMouseMove}
// onMouseUp={handleMouseUp}
// onMouseLeave={handleMouseUp}

  return (


    <>
    
<Divider variant="fullWidth" />

      <Grid item sx={{fontSize:"1vw",fontWeight:"bold",color:"#585858",paddingLeft:"1.5vh"}}>SELECT {cater ?? "Category"}</Grid>


<Grid item container 
    // 
    sx={{width:"100%",height:"100px", display:"flex",justifyContent:"center",gap:"10px", alignItems:"center",overflowX:"scroll"}}
    


>

{[...Array(4)].map(() => ( <Slide/> ))}

</Grid>

    </>

  )
}

export default MiniSlider
