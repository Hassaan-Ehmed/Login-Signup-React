import React from 'react'
import { products } from '../data/data'
import Header from '../components/Header';
import Products from '../components/Products';
import drinkImage from '../images/drink2.jpg'
import { useAppSelector } from '../redux/hooks';
import { useScrollRest } from '../utils/Hooks';

export default function Drinks() {
  useScrollRest()
const storeState:any = useAppSelector( state => state.products );

  const drinks:any = storeState?.productData.filter((item:any)=> item.category === "Drinks");
  
  return (
    <>
      <Header heading={"Drinks"} img ={drinkImage} />

<Products foodsArray={drinks ?? []} />
    </>
  )
}
