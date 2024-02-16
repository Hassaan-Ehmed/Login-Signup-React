import React from 'react'
import Products from '../components/Products'
import { useAppSelector } from '../redux/hooks'
import Navbar from '../components/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Cart() {

const storeState = useAppSelector(state => state.products);


const params = useParams();
   const navigate = useNavigate();
    


const handleLogOut=()=>{

    localStorage.removeItem("userToken");

    alert("Logout!");

    setTimeout(()=>{

        navigate('/login');
    },1000)

}

    return (
    <>
        <Navbar title={"Cart Page"}/>  
    <div style={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>



<LogoutIcon sx={{fontSize:"2.5vw",fontWeight:"bold",marginRight:"20px",cursor:"pointer"}}

onClick={handleLogOut}
/>
    </div>
 
      <Products foodsArray={storeState.cartItems}/>
    </>
  )
}
