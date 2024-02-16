import { createSlice } from "@reduxjs/toolkit";



const productSlice = createSlice({

initialState:{

    cartCount:0,
    cartItems:[],
},
name:"productSlice",
reducers:{


    addToCart:(state:any,action:any)=>{

let cartProducts = JSON.parse(localStorage.getItem("cartProducts") as string);


const isItemExsist = cartProducts.find((item:any,i:number)=>  item?.title === action?.payload?.title );

if(!isItemExsist){
    
    let temp_arr = cartProducts

    console.log(temp_arr)
    
    temp_arr.push(action?.payload);
    
    state.cartItems = temp_arr;


localStorage.setItem("cartProducts",JSON.stringify(temp_arr));


let cartProductsForLength = JSON.parse(localStorage.getItem("cartProducts") as string);


state.cartCount++;


}
    }
,
    setItemsToStore:(state:any,action:any)=>{

        state.cartItems = action.payload;
    }
}


});

 export default productSlice.reducer;

 export const {addToCart,setItemsToStore}  = productSlice.actions