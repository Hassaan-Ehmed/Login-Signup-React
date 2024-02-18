import React from 'react'
import { products } from '../data/data'
import Header from '../components/Header';
import Products from '../components/Products';
import burgerImage from '../images/burger3.jpg'

export default function Burger() {


  const burgers:any = products.filter((item:any)=> item.category === "Burger");
  
  return (
    <>
      
      <Header heading={"Burger Items"} img ={burgerImage} />

<Products foodsArray={burgers ?? []}/>
    </>
  )
}
