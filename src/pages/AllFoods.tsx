import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Products from "../components/Products";
import { products } from "../data/data";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setUserFullName } from "../redux/slices/products";
import fastFoodImage from "../images/fastFood3.jpg";
import { useScrollRest } from "../utils/Hooks";
export default function AllFoods() {
  useScrollRest()
  const params = useParams();
  const dispatch = useAppDispatch();
  const storeState = useAppSelector((state: any) => state.products);


  return (
    <>
      <Header heading={"Fast Food Items"} img={fastFoodImage} />

      <Products
        foodsArray={storeState?.productData}
        forCart={false}
        key={storeState.productData}
      />
    </>
  );
}
