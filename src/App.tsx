import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './components/MUI/Signup';
import LogIn from './components/MUI/Login';
import {BrowserRouter as Router, Routes, Route, useNavigate, useParams}  from 'react-router-dom'
import User from './pages/User';
import RouteProtection from './utils/RouteProtect';
import { setCartCount, setItemsToStore, setUserFullName } from './redux/slices/products';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Pizza from './pages/Pizza';
import Burgers from './pages/Burgers';
import Icecream from './pages/Icecream';

function App() {

  const params = useParams();
  const dispatch = useAppDispatch();
  const storeState:any = useAppSelector( state => state.products);

  

  useEffect(()=>{



let isToken  = JSON.parse(localStorage.getItem("userToken") as string);


if(isToken === null){

  localStorage.setItem("userToken",JSON.stringify(""));
}


let cartProducts = JSON.parse( localStorage.getItem("cartProducts") as string);

if(cartProducts === null){

    localStorage.setItem("cartProducts",JSON.stringify([]))

}else if (cartProducts !== null){

dispatch(setItemsToStore(cartProducts));
dispatch(setCartCount(cartProducts?.length));


}
  },[])
  

  
  return (
  <>
  
  <Router>

<Navbar  cartCount={storeState?.cartCount} />

<Routes>

<Route path='/signup' element={<SignUp/>} /> 

<Route path='/login' element={<LogIn/>} />
<Route path='/' element={<SignUp/>} />

<Route path='/add-to-cart' element={<Cart/>} />
<Route path='/pizza' element={<Pizza/>} />
<Route path='/burger' element={<Burgers/>} />
<Route path='/icecream' element={<Icecream/>} />



<Route path='/user/:name' element={<RouteProtection><User/></RouteProtection>}/>

</Routes>
  
  </Router>
  </>
  );
}

export default App;
