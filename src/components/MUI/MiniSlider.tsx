import React, { useRef, useState } from 'react'
import miniSliderPizza from '../../images/mini-slider-pizza.png'
import pizzaBG from '../../images/pizzaBG.jpeg'
import { Divider, Grid } from '@mui/material'
import '../../App.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const MiniSlider = ({cater,isEdge,dataPacket}:any) => {

  const [data,setData] = useState(dataPacket)
  


const Slide = ({packet,indexNum}:any)=>{

  if(isEdge){
    
 return (

      <div  style={{width:"500px",height:"6vh",
       borderRadius:"10px",cursor:"pointer",display:"flex",justifyContent:"space-around",position:"relative",overflow:"hidden",backgroundColor:"white"}}

       onClick={()=>handleCheck(indexNum)}
       >
      
  
        <img src={pizzaBG} style={{width:"100%",height:'100%',objectFit:"cover",position:'absolute'}} />
      
        <p style={{fontSize:"1.6vh",color:"white", fontWeight:"bold",position:"absolute",top:-15,left:10}}>{packet.type}
        
        {packet.check &&  <CheckCircleIcon  sx={{fontSize:"1.8vh",color:"green",zIndex:2,position:"absolute",top:6,left:90}}/> }
        </p>
      
  
      
      </div>
        )

  }else{
return (
  <Grid item container style={{border:"1.2px solid #d1d1d1",width:"30%",height:"6vh",
  borderRadius:"10px",cursor:"pointer",display:"flex",justifyContent:"space-around",position:"relative",paddingTop:'12px',overflow:"hidden"}}

  onClick={()=>handleCheck(indexNum)}
  >
  
      <img src={miniSliderPizza} style={{width:"100%",height:'100%',objectFit:"contain",}} />
    
      <p style={{fontSize:"1.5vh",color:"black",position:"absolute",top:-15,left:10,paddingTop:"5px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>{packet.type}
      
        {packet.check &&  <CheckCircleIcon  sx={{fontSize:"1.8vh",color:"green",zIndex:2,position:"absolute",top:6,left:90}}/> }

      </p>
      
    </Grid>
    )    
  }
   
        
}


const handleCheck=(indexNum:number)=>{


setData((prevData:any) => {
  const updatedData = prevData.map((item:any, index:any) => ({
    ...item,
    check: index === indexNum
  }));
  return updatedData;
});

}
  return (

   <>
    
<Divider variant="fullWidth" />

      <Grid item sx={{fontSize:"0.8vw",fontWeight:"bold",color:"#585858",paddingLeft:"1.5vh",fontFamily:"sans-serif"}}>SELECT {cater ?? "Category"}</Grid>


<div 
    style={{width:"100%",height:"100px", display:"flex",justifyContent:"center",gap:"10px", alignItems:"center"}}
    
>

{data.map((packet:any,indexNum:number) => ( <Slide key={indexNum} packet={packet} indexNum={indexNum} /> ))}


</div>

    </>

  )
}

export default MiniSlider
