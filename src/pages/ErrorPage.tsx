import React from 'react'
import errorImg1 from '../images/pageError1.png'
export default function ErrorPage() {
  return (
    <div style={{width:"100%",height:"95vh",display:"flex",justifyContent:"center", alignItems:"center"}}>
     <img src={errorImg1} alt="" style={{width:"50%",objectFit:"contain"}}/>
    </div>
  )
}
