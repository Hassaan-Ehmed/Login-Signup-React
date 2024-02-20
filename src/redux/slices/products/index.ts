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
    productData: products,
  },
  name: "productSlice",
  reducers: {


    
    addToCart: (state: any, action: any) => {
      let cartProducts = JSON.parse(
        localStorage.getItem("cartProducts") as string
      );

      const isItemExsist = cartProducts.find(
        (item: any) => item?.id === action?.payload?.id
      );

      if (!isItemExsist) {
        let newObj = { ...action?.payload };

        newObj.quantity = action.payload.quantity + 1;

        successNotify({
          msg: "Item added successfully!",
          position: "bottom-right",
          time: 500,
          transitionName: Bounce,
        });

        let temp_arr = cartProducts;

        temp_arr.push(newObj);

        state.cartItems = temp_arr;

        state.cartCount = temp_arr.reduce(
          (a: any, b: any) => a + b.quantity,
          0
        );

        localStorage.setItem("cartProducts", JSON.stringify(temp_arr));

        // let findIndex = state.productData.findIndex(
        //   (item: any) => item.id === action.payload.id
        // );

        // let copyProductData = [...state.productData];

        // copyProductData[findIndex] = newObj;

        // console.log(copyProductData[findIndex]);

        // state.productData = copyProductData;

        // console.log("AFTER SET");
      } else {
        let IncreaseExsisting = isItemExsist;

        IncreaseExsisting.quantity = IncreaseExsisting.quantity + 1;

        cartProducts[action.payload] = IncreaseExsisting;

        state.cartItems = cartProducts;
        state.cartCount = cartProducts.reduce(
          (a: any, b: any) => a + b.quantity ?? 0,
          0
        );

        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

        // let findIndex = state.productData.findIndex(
        //   (item: any) => item.id === action.payload.id
        // );

        // let copyProductData = [...state.productData];

        // copyProductData[findIndex] = IncreaseExsisting;

        // state.productData = copyProductData;
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
      state.cartCount = filteredArr.reduce(
        (a: any, b: any) => a + b.quantity,
        0
      );
      // state.cartCount = filteredArr.length;

      localStorage.setItem("cartProducts", JSON.stringify(filteredArr));


      // -- END REMOVE CODE -- //
      // let filteredRemovedItem = cartProducts.filter(
      //   (item: any) => item.id === action.payload.id
      // );

      // let targetedItem = state.productData.find(
      //   (item: any) => item.id === filteredRemovedItem.id
      // );

      // let resetItem = {
      //   ...targetedItem,
      //   quantity: 0,
      // };

      // let copyProductData = [...state.productData];

      // let indexOfItem = state.productData.findIndex(
      //   (item: any) => item.id === filteredRemovedItem.id
      // );

      // copyProductData[indexOfItem] = resetItem;

      // state.productData = copyProductData;

      // let copyProductData = filteredArr.reduce((a:any,b:any)=> a + b.quantity ,0);

      //   copyProductData[findRemovedItem] = {

      //     ...copyProductData[findRemovedItem],

      //     quantity:findRemovedItem.quantity

      //  state.productData = copyProductData
    },

    decreaseItemQuantity: (state: any, action: any) => {
      let cartProducts = JSON.parse(
        localStorage.getItem("cartProducts") as string
      );

      const isItemExsist = cartProducts.find(
        (item: any, i: number) => item?.id === action?.payload?.id
      );

      let IncreaseExsisting = isItemExsist;

      IncreaseExsisting.quantity = IncreaseExsisting.quantity - 1;

      cartProducts[action.payload] = IncreaseExsisting;

      state.cartItems = cartProducts;

      state.cartCount = cartProducts.reduce(
        (a: any, b: any) => a + b.quantity,
        0
      );

      localStorage.setItem("cartProducts", JSON.stringify(cartProducts));

      // let findIndex = state.productData.findIndex(
      //   (item: any) => item.id === action.payload.id
      // );

      // console.log("inProductDec", findIndex);

      // let copyProductData = [...state.productData];

      // copyProductData[findIndex] = IncreaseExsisting;

      // console.log("DECREASE...", copyProductData[findIndex]);

      // state.productData = copyProductData;
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
  decreaseItemQuantity,
} = productSlice.actions;