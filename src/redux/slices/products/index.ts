import { createSlice } from "@reduxjs/toolkit";
import {
  notificationTypes,
  successNotification,
  warningNotification,
} from "../../../utils/Notifications";
import { Bounce } from "react-toastify";
import { products } from "../../../data/data";


const successNotify = ({
  msg,
  position,
  time,
  transitionName,
}: notificationTypes) =>
  successNotification({
    msg: msg,
    position: position,
    time: time,
    transitionName: transitionName,
  });

const warningNotify = ({
  msg,
  position,
  time,
  transitionName,
}: notificationTypes) =>
  warningNotification({
    msg: msg,
    position: position,
    time: time,
    transitionName: transitionName,
  });

const productSlice: any = createSlice({
  initialState: {
    cartCount: 0,
    cartItems: [],
    userFullName: "",
  },
  name: "productSlice",
  reducers: {


    addToCart: (state: any, action: any) => {
      let cartProducts = JSON.parse(
        localStorage.getItem("cartProducts") as string
      );

      const isItemExsist = cartProducts.find(
        (item: any, i: number) => item?.title === action?.payload?.title
      );

      if (!isItemExsist) {

        
        let newObj = {...action?.payload}


        newObj.quantity = action.payload.quantity + 1;

        successNotify({
          msg: "Item added successfully!",
          position: "bottom-right",
          time: 500,
          transitionName: Bounce,
        });
        
        state.permissionToAdd = true;

        let temp_arr = cartProducts;

        temp_arr.push(newObj);

        state.cartItems = temp_arr;

        state.cartCount = temp_arr.reduce((a:any,b:any)=> a + b.quantity ,0);

        localStorage.setItem("cartProducts", JSON.stringify(temp_arr));
      } else {
        

         let IncreaseExsisting = isItemExsist

         IncreaseExsisting.quantity =  IncreaseExsisting.quantity + 1 

         cartProducts[action.payload] = IncreaseExsisting
        
         state.cartItems = cartProducts;
         state.cartCount = cartProducts.reduce((a:any,b:any)=> a + b.quantity ,0);

         localStorage.setItem("cartProducts", JSON.stringify(cartProducts));


      

      }
    },

  
    removeFromCart: (state: any, action) => {
      let cartProducts = JSON.parse(
        localStorage.getItem("cartProducts") as string
      );

      const filteredArr = cartProducts.filter((item: any) => {
        if (
          action.payload.title !== item.title &&
          action.payload.id !== item.id
        ) {
          return true;
        } else {
          return false;
        }
      });

      state.cartItems = filteredArr;
      state.cartCount = filteredArr.length;

      localStorage.setItem("cartProducts", JSON.stringify(filteredArr));
    },

  
  decreaseItemQuantity : (state:any,action:any)=>{
    let cartProducts = JSON.parse(
      localStorage.getItem("cartProducts") as string
    );

    const isItemExsist = cartProducts.find(
      (item: any, i: number) => item?.title === action?.payload?.title
    );

    if(isItemExsist){

 
    let IncreaseExsisting = isItemExsist

    IncreaseExsisting.quantity =  IncreaseExsisting.quantity - 1 

    cartProducts[action.payload] = IncreaseExsisting
   
    state.cartItems = cartProducts;

    state.cartCount = cartProducts.reduce((a:any,b:any)=> a + b.quantity ,0);

    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

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
  },
});

export default productSlice.reducer;

export const {
  addToCart,
  setItemsToStore,
  setUserFullName,
  setCartCount,
  removeFromCart,
  decreaseItemQuantity
} = productSlice.actions;
