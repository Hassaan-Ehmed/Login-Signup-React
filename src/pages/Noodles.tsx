import React from 'react'
import { products } from '../data/data'
import Header from '../components/Header';
import Products from '../components/Products';
import noodleImage from '../images/noodle3.jpg'
import { useAppSelector } from '../redux/hooks';
import { useScrollRest } from '../utils/Hooks';

export default function Noodles() {
useScrollRest();
const storeState:any = useAppSelector( state => state.products );

  const noodles:any = storeState?.productData.filter((item:any)=> item.category === "Noodles");
  
  return (
    <>
      <Header heading={"Noodles"} img ={noodleImage} />

<Products foodsArray={noodles ?? []} />
    </>
  )
}
