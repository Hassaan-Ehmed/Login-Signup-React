import React from 'react'
import { products } from '../data/data'
import Header from '../components/Header';
import Products from '../components/Products';
import icecreamImage from '../images/icecream3.jpg'

export default function Icecream() {


  const icecreams:any = products.filter((item:any)=> item.category === "Icecream");
  
  return (
    <>
      <Header heading={"Icecream Items"} img ={icecreamImage} />

<Products foodsArray={icecreams ?? []}/>
    </>
  )
}
