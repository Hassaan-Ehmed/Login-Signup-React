import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import SignUp from "./components/MUI/Signup";
import LogIn from "./components/MUI/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams,
  Navigate,
} from "react-router-dom";
import RouteProtection from "./utils/RouteProtect";
import {
  setCartCount,
  setItemsToStore,
  setUserFullName,
} from "./redux/slices/products";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Pizza from "./pages/Pizza";
import Burgers from "./pages/Burgers";
import Icecream from "./pages/Icecream";
import Burger from "./pages/Burgers";
import AllFoods from "./pages/AllFoods";
import ErrorPage from "./pages/ErrorPage";
import AuthProtection from "./utils/AuthProtection";
import Noodles from "./pages/Noodles";
import Salad from "./pages/Salad";
import Drinks from "./pages/Drinks";
import { Decrypt, Encrypt } from "./utils/Incryption";
import { getDataToLocalStorage, saveDataToLocalStorage } from "./utils/localstorage";

function App() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const storeState: any = useAppSelector((state) => state.products);

const navigate = (pathname:string) => <Navigate to={pathname} replace />;

  useEffect(() => {
    

let userInfoBox = getDataToLocalStorage("userInfoBox");
let cartProducts:any = getDataToLocalStorage("cartProducts");
let isToken = getDataToLocalStorage("userToken");


if((!userInfoBox) || (!cartProducts) || (!isToken)){


localStorage.clear();

navigate("/login")


}else{
  


  if (isToken === null) {

    saveDataToLocalStorage("userToken","");

  } else {
    if (isToken) {
      let userFullName = isToken?.split("-");
      dispatch(
        setUserFullName(
          `${userFullName[0]?.toLowerCase()}-${userFullName[1]?.toLowerCase()}`
        )
      );
    }
  }

cartProducts =
  getDataToLocalStorage("cartProducts")  ?? [];

  if (cartProducts === null) {
saveDataToLocalStorage("cartProducts",[])
  } else if (cartProducts !== null) {
    dispatch(setItemsToStore(cartProducts));
    let currentQuantity = cartProducts.reduce(
      (a: any, b: any) => a + b.quantity,
      0
    );
    dispatch(setCartCount(currentQuantity));
  }
}
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/signup"
            element={
              <AuthProtection>
                <SignUp />
              </AuthProtection>
            }
          />

          <Route
            path="/login"
            element={
              <AuthProtection>
                <LogIn />
              </AuthProtection>
            }
          />

          <Route
            path="/"
            element={<Navbar cartCount={storeState?.cartCount} />}
          >
            <Route
              index
              element={
                <RouteProtection>
                  <AllFoods />
                </RouteProtection>
              }
            />

            <Route
              path="add-to-cart"
              element={
                <RouteProtection>
                  <Cart />
                </RouteProtection>
              }
            />
            <Route
              path="pizza"
              element={
                <RouteProtection>
                  <Pizza />
                </RouteProtection>
              }
            />
            <Route
              path="burger"
              element={
                <RouteProtection>
                  <Burger />
                </RouteProtection>
              }
            />
            <Route
              path="icecream"
              element={
                <RouteProtection>
                  <Icecream />
                </RouteProtection>
              }
            />
            <Route
              path="noodles"
              element={
                <RouteProtection>
                  <Noodles />
                </RouteProtection>
              }
            />
            <Route
              path="salad"
              element={
                <RouteProtection>
                  <Salad />
                </RouteProtection>
              }
            />
            <Route
              path="drinks"
              element={
                <RouteProtection>
                  <Drinks />
                </RouteProtection>
              }
            />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
