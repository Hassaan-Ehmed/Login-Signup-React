import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './components/MUI/Signup';
import LogIn from './components/MUI/Login';
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import User from './pages/User';
import RouteProtection from './utils/RouteProtect';
import { setItemsToStore } from './redux/slices/products';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import Cart from './pages/Cart';

function App() {
  
  const dispatch = useAppDispatch();
const storeState = useAppSelector( state => state.products);

  useEffect(()=>{



let isToken  = JSON.parse(localStorage.getItem("userToken") as string);


if(isToken === null){

  localStorage.setItem("userToken",JSON.stringify(""));
}


let cartProducts = JSON.parse( localStorage.getItem("cartProducts") as string);

if(cartProducts === null){

    localStorage.setItem("cartProducts",JSON.stringify([]))

}else if (cartProducts !== null){

dispatch(setItemsToStore(cartProducts))
}
  },[])
  
  console.log(storeState.cartCount)
  
  return (
  <>
  
  <Router>


<Routes>

<Route path='/signup' element={<SignUp/>} /> 

<Route path='/login' element={<LogIn/>} />
<Route path='/' element={<SignUp/>} />

<Route path='/add-to-cart' element={<Cart/>} />

<Route path='/user/:name' element={<RouteProtection><User/></RouteProtection>}/>

</Routes>
  
  </Router>
  </>
  );
}

export default App;
