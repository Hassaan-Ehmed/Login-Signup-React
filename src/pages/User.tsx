import React from 'react'
import Table from '../components/MUI/Table'
import { useNavigate, useParams } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';
import Products from '../components/Products';
import Navbar from '../components/Navbar';
import { products } from '../data/data';
export default function User() {
  
  const params = useParams();
   const navigate = useNavigate();
    
  let namePacket:any = params.name?.split("-");

  
const fName = `${namePacket[0]?.at(0)?.toUpperCase().concat(namePacket[0].slice(1))}`
const lName = `${namePacket[1]?.at(0)?.toUpperCase().concat(namePacket[1].slice(1))}`

const handleLogOut=()=>{
    localStorage.removeItem("userToken");


    alert("Logout!");

    setTimeout(()=>{

        navigate('/login');
    },1000)

}

  return (
    <>
    
<Navbar title={"Foods"}/>  
    <div style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>

<h1 style={{marginLeft:"20px"}}>Welcome {fName} {lName} !</h1>

<LogoutIcon sx={{fontSize:"2.5vw",fontWeight:"bold",marginRight:"20px",cursor:"pointer"}}

onClick={handleLogOut}
/>
    </div>

<Products foodsArray={products}/>
  
</>
  )
}
