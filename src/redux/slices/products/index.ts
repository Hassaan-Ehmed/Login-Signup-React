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
import {
  getDataToLocalStorage,
  saveDataToLocalStorage,
} from "../../../utils/localstorage";

const productSlice: any = createSlice({
  initialState: {
    cartCount: 0,
    cartItems: [],
    userFullName: "",
    productData: products,
    dataError: false,
    isOpen: false,
    selected_item: null,
  },
  name: "productSlice",
  reducers: {
    addToCart: (state: any, action: any) => {
      let cartProducts: any = getDataToLocalStorage("cartProducts") ?? [];

      state.dataError = false;
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

        saveDataToLocalStorage("cartProducts", temp_arr);
      } else {
        let IncreaseExsisting = isItemExsist;

        IncreaseExsisting.quantity = IncreaseExsisting?.quantity + 1;

        cartProducts[action.payload] = IncreaseExsisting;

        state.cartItems = cartProducts ?? [];
        state.cartCount = cartProducts?.reduce(
          (a: any, b: any) => a + b.quantity ?? 0,
          0
        );

        saveDataToLocalStorage("cartProducts", cartProducts);
      }
    },

    removeFromCart: (state: any, action) => {
      let cartProducts: any = getDataToLocalStorage("cartProducts") ?? [];

      if (cartProducts !== null) {
        state.dataError = false;

        const filteredArr =
          cartProducts?.filter((item: any) => action.payload.id !== item.id) ??
          [];

        state.cartItems = filteredArr ?? [];
        state.cartCount = filteredArr?.reduce(
          (a: any, b: any) => a + b?.quantity,
          0
        );
        // state.cartCount = filteredArr.length;

        if (cartProducts.length < 2) {
          localStorage.removeItem("cartProducts");
        } else {
          saveDataToLocalStorage("cartProducts", filteredArr);
        }
      } else {
        state.dataError = true;
      }
    },

    decreaseItemQuantity: (state: any, action: any) => {
      let cartProducts: any = getDataToLocalStorage("cartProducts") ?? [];

      if (cartProducts !== null) {
        state.dataError = false;

        const isItemExsist =
          cartProducts?.find(
            (item: any, i: number) => item?.id === action?.payload?.id
          ) ?? {};

        let DecreaseExsisting = isItemExsist ?? {};

        DecreaseExsisting.quantity = DecreaseExsisting?.quantity - 1 ?? 0;

        cartProducts[action.payload] = DecreaseExsisting ?? {};

        state.cartItems = cartProducts ?? [];

        state.cartCount = cartProducts?.reduce(
          (a: any, b: any) => a + b?.quantity,
          0
        );

        saveDataToLocalStorage("cartProducts", cartProducts);
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

    clearAllItems: (state: any, action: any) => {
      state.cartItems = [];
      state.cartCount = 0;

      let cartProducts: any = getDataToLocalStorage("cartProducts") ?? [];

      if (cartProducts !== null) {
        localStorage.removeItem("cartProducts");

        setTimeout(() => {
          successNotification({
            msg: "All items removed successfully!",
            position: "bottom-right",
            time: 750,
            transitionName: Flip,
          });
        }, 500);
      }
    },

    handleClickOpen: (state: any, action: any) => {

      state.selected_item = action.payload;
      // state.isOpen = true;
    },

    handleModalItemAdd  : (state:any,action:any)=>{


      let cartProducts: any = getDataToLocalStorage("cartProducts") ?? [];

      state.dataError = false;

      const isItemExsist = cartProducts?.find(
        (item: any) => item?.id === action?.payload?.foodPacket?.id
      );

      if (!isItemExsist) {
        let newObj = { ...action?.payload?.foodPacket };

        newObj.quantity = action?.payload?.foodPacket?.quantity + action?.payload?.counter;

        let temp_arr = cartProducts;

        temp_arr.push(newObj);

        state.cartItems = temp_arr;

        state.cartCount = temp_arr?.reduce(
          (a: any, b: any) => a + b.quantity,
          0
        );

        saveDataToLocalStorage("cartProducts", temp_arr);
      } else {


        let IncreaseExsisting = isItemExsist;

        IncreaseExsisting.quantity = IncreaseExsisting?.quantity + action?.payload?.counter;

        cartProducts[action?.payload?.foodPacket] = IncreaseExsisting;

        state.cartItems = cartProducts ?? [];
        state.cartCount = cartProducts?.reduce(
          (a: any, b: any) => a + b.quantity ?? 0,
          0
        );

        saveDataToLocalStorage("cartProducts", cartProducts);
      }


    },

    handleClose: (state: any, action: any) => {
      
    state.selected_item = null    },
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
  clearAllItems,
  handleClickOpen,
  handleClose,
  handleModalItemAdd
} = productSlice.actions;
