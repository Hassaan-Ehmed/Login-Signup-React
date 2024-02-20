import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Products from "../components/Products";
import { products } from "../data/data";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setUserFullName } from "../redux/slices/products";
import fastFoodImage from "../images/fastFood3.jpg";
export default function AllFoods() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const storeState = useAppSelector((state: any) => state.products);

  // let namePacket: any = params.name?.split("-");

  // const fName = `${namePacket[0]
  //   ?.at(0)
  //   ?.toUpperCase()
  //   .concat(namePacket[0].slice(1))}`;
  // const lName = `${namePacket[1]
  //   ?.at(0)
  //   ?.toUpperCase()
  //   .concat(namePacket[1].slice(1))}`;

  // dispatch(setUserFullName(params?.name as any));

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
