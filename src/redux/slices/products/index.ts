import { createSlice } from "@reduxjs/toolkit";
import {
  notificationTypes,
  successNotification,
  warningNotification,
} from "../../../utils/Notifications";
import { Bounce, Flip } from "react-toastify";
import { products } from "../../../data/data";
import { useAppDispatch } from "../../hooks";
import { Decrypt, Encrypt } from "../../../utils/Incryption";




const productSlice: any = createSlice({
  initialState: {
    cartCount: 0,
    cartItems: [],
    userFullName: "",
    productData: products,
    dataError: false
  },
  name: "productSlice",
  reducers: {


    addToCart: (state: any, action: any) => {
      let cartProducts = JSON.parse(localStorage.getItem("cartProducts") as string ) ?? [];

      state.dataError = false
      const isItemExsist = cartProducts?.find(
        (item: any) => item?.id === action?.payload?.id
      );

      if (!isItemExsist) {
        let newObj = { ...action?.payload };

        newObj.quantity = action?.payload?.quantity + 1;

        successNotification({
          msg: "Item added successfully!",
          position: "bottom-right",
          time: 500,
          transitionName: Bounce,
        });

        let temp_arr = cartProducts;

        temp_arr.push(newObj);

        state.cartItems = temp_arr;

        state.cartCount = temp_arr?.reduce(
          (a: any, b: any) => a + b.quantity,
          0
        );

        localStorage.setItem("cartProducts",  JSON.stringify(temp_arr) );

      } else {
        let IncreaseExsisting = isItemExsist;

        IncreaseExsisting.quantity = IncreaseExsisting?.quantity + 1;

        cartProducts[action.payload] = IncreaseExsisting;

        state.cartItems = cartProducts ?? [];
        state.cartCount = cartProducts?.reduce(
          (a: any, b: any) => a + b.quantity ?? 0,
          0
        );

        localStorage.setItem("cartProducts", JSON.stringify(cartProducts) );


      }
    },

    removeFromCart: (state: any, action) => {

      let cartProducts = JSON.parse( localStorage.getItem("cartProducts") as string ) ?? []

      if (cartProducts !== null) {

        state.dataError = false;

        const filteredArr = cartProducts?.filter((item: any) => action.payload.id !== item.id) ?? []

        state.cartItems = filteredArr ?? []
        state.cartCount = filteredArr?.reduce(
          (a: any, b: any) => a + b?.quantity,
          0
        );
        // state.cartCount = filteredArr.length;

        localStorage.setItem("cartProducts", JSON.stringify(filteredArr) );


      } else {
        state.dataError = true;
      }


    },

    decreaseItemQuantity: (state: any, action: any) => {
      let cartProducts = JSON.parse( localStorage.getItem("cartProducts") as string ) ?? [];


      if (cartProducts !== null) {
        state.dataError = false;

        const isItemExsist = cartProducts?.find(
          (item: any, i: number) => item?.id === action?.payload?.id
        ) ?? {}

        let IncreaseExsisting = isItemExsist ?? {}

        IncreaseExsisting.quantity = IncreaseExsisting?.quantity - 1 ?? 0

        cartProducts[action.payload] = IncreaseExsisting ?? {}

        state.cartItems = cartProducts ?? [];

        state.cartCount = cartProducts?.reduce(
          (a: any, b: any) => a + b?.quantity,
          0
        );

        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

      } else {

        state.dataError = true;
      }

    },

    setItemsToStore: (state: any, action: any) => {
      state.cartItems = action?.payload;
      state.cartCount = action?.payload?.length;
    },

    setUserFullName: (state: any, action: any) => {
      state.userFullName = action.payload;
    },

    setCartCount: (state: any, action: any) => {
      state.cartCount = action.payload;
    },

    clearAllItems:(state:any,action:any)=>{
      
      state.cartItems = [];
      state.cartCount = 0;
      
      let cartProducts = JSON.parse( localStorage.getItem("cartProducts") as string) ?? []

      if(cartProducts!== null){

        localStorage.removeItem("cartProducts");
        
        setTimeout(() => {
          
        successNotification({
          msg:"All items removed successfully!",
          position:"bottom-right",
          time:750,
          transitionName:Flip
        });

      }, 500);
      }


    }
  },
});

export default productSlice.reducer;

export const {
  addToCart,
  setItemsToStore,
  setUserFullName,
  setCartCount,
  removeFromCart,
  decreaseItemQuantity,
  clearAllItems
} = productSlice.actions;