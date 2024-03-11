import React, { useRef, useState } from 'react'
import pizzaOverlayBlue from '../../images/blue-pizza-overlay.webp'
const MiniSlider = () => {

//     const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);
//   const sliderRef = useRef<any>(null);


//   const handleMouseDown = (e:any) => {
//     setIsDragging(true);
//     setStartX(e.pageX - sliderRef.current.offsetLeft);
//     setScrollLeft(sliderRef.current.scrollLeft);
//   };

//   const handleMouseMove = (e:any) => {
//     if (!isDragging) return;
//     const x = e.pageX - sliderRef.current.offsetLeft;
//     const walk = x - startX;
//     sliderRef.current.scrollLeft = scrollLeft - walk;
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };



  return (
    <div>
      
      <h3>SELECT SIZE</h3>



<div style={{width:"100%",height:"110px", display:"flex",justifyContent:"center", alignItems:"center",overflow:"hidden",position: "relative"}}

// ref={sliderRef}
// onMouseDown={handleMouseDown}
// onMouseMove={handleMouseMove}
// onMouseUp={handleMouseUp}
// onMouseLeave={handleMouseUp}

>


<div style={{border:"1.5px solid #0276AE",width:"60%",height:"70%",display:"flex",justifyContent:"space-around",
alignItems:'center', borderRadius:"20px",cursor:"pointer"}}>


<div style={{width:"40%",height:"85%"}}>
  

  <img src={pizzaOverlayBlue} style={{width:"100%",height:'100%'}} />


</div>
<div style={{width:'40%',height:"90%",display:"flex",justifyContent:"center",
alignItems:'center'}}>

<p style={{fontSize:"15px"}}><span style={{fontWeight:"bold",fontSize:"20px"}}>Small</span> 14.40$</p>

</div>


</div>
{/* <div style={{backgroundColor:"orange",width:"60%",height:"70%",borderRadius:"20px",cursor:"grab"}}></div>
<div style={{backgroundColor:"orange",width:"60%",height:"70%",borderRadius:"20px",cursor:"grab"}}></div>
<div style={{backgroundColor:"orange",width:"60%",height:"70%",borderRadius:"20px",cursor:"grab"}}></div> */}

</div>


    </div>
  )
}

export default MiniSlider
