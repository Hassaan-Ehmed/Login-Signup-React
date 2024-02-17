import React from 'react'
import { products } from '../data/data'
import Header from '../components/Header';
import Products from '../components/Products';
import fastFood from '../images/fastFood3.jpg'

export default function Burger() {


  const burgers:any = products.filter((item:any)=> item.category === "Burger");
  
  return (
    <>
      
      <Header heading={"Burger Items"} img ={fastFood} />

<Products foodsArray={burgers ?? []}/>
    </>
  )
}
