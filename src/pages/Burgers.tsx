import React, { useEffect, useState } from 'react'
import { products } from '../data/data'
import Header from '../components/Header';
import Products from '../components/Products';
import burgerImage from '../images/burger3.jpg'
import { useAppSelector } from '../redux/hooks';

export default function Burger() {



  const storeState:any = useAppSelector( state => state.products );

  const burgers:any = storeState?.productData.filter((item:any)=> item.category === "Burger");


  // const [burgersArr,setBurgersArr] = useState(burgers);

//   useEffect(()=>{
    

//     setBurgersArr(burgers);

// } ,[storeState.cartItems,storeState.productData]);
  


  return (
    <>
      
      <Header heading={"Burger Items"} img ={burgerImage} />


{<Products foodsArray={burgers ?? []} />}
    </>
  )
}
