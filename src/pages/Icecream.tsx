import React, { useEffect, useState } from "react";
import { products } from "../data/data";
import Header from "../components/Header";
import Products from "../components/Products";
import icecreamImage from "../images/icecream3.jpg";
import { useAppSelector } from "../redux/hooks";
import { useScrollRest } from "../utils/Hooks";

export default function Icecream() {


  useScrollRest()

  const storeState: any = useAppSelector((state) => state.products);

  let icecreams: any = storeState?.productData.filter(
    (item: any) => item.category === "Icecream"
  );

  return (
    <>
      <Header heading={"Icecream Items"} img={icecreamImage} />
      <Products foodsArray={icecreams ?? []} />
    </>
  );
}
