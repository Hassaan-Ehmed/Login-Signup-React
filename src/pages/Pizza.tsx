import React from 'react'
import { products } from '../data/data'
import Header from '../components/Header';
import Products from '../components/Products';
import fastFood from '../images/fastFood3.jpg'

export default function Pizza() {


  const pizzas:any = products.filter((item:any)=> item.category === "Pizza");
  
  return (
    <>
      <Header heading={"Pizza Items"} img ={fastFood} />

<Products foodsArray={pizzas ?? []}/>
    </>
  )
}
