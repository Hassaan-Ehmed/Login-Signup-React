import React from 'react'
import { products } from '../data/data'
import Header from '../components/Header';
import Products from '../components/Products';
import pizzaImage from '../images/pizza1.jpg'
import { useAppSelector } from '../redux/hooks';
import { useScrollRest } from '../utils/Hooks';

export default function Pizza() {
useScrollRest()
const storeState:any = useAppSelector( state => state.products );

  const pizzas:any = storeState?.productData.filter((item:any)=> item.category === "Pizza");
  
  return (
    <>
      <Header heading={"Pizza Items"} img ={pizzaImage} />

<Products foodsArray={pizzas ?? []} />
    </>
  )
}
