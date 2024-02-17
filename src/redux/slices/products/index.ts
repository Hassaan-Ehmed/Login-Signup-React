import { createSlice } from "@reduxjs/toolkit";



const productSlice:any = createSlice({

initialState:{
    cartCount:0,
    cartItems:[],
    userFullName:""

},
name:"productSlice",
reducers:{


    addToCart:(state:any,action:any)=>{

let cartProducts = JSON.parse(localStorage.getItem("cartProducts") as string);

const isItemExsist = cartProducts.find((item:any,i:number)=>  item?.title === action?.payload?.title );

if(!isItemExsist){
    
    let temp_arr = cartProducts

    
    temp_arr.push(action?.payload);
    
    state.cartItems = temp_arr;

    state.cartCount =  temp_arr?.length

localStorage.setItem("cartProducts",JSON.stringify(temp_arr));

}
    },

    removeFromCart:(state:any,action)=>{

        let cartProducts = JSON.parse(localStorage.getItem("cartProducts") as string);

        const filteredArr = cartProducts.filter((item:any)=>{
            
            if((action.payload.title !== item.title ) && ( action.payload.id  !== item.id) ){

                return true
            }else{
                 return false
            } 
        });


        state.cartItems = filteredArr;
        state.cartCount = filteredArr.length;

        localStorage.setItem("cartProducts",JSON.stringify(filteredArr));

    },

    setItemsToStore:(state:any,action:any)=>{

        state.cartItems = action?.payload;
        state.cartCount = action?.payload?.length
    },

    setUserFullName:(state:any,action:any)=>{
        state.userFullName = action.payload;
        
    },


    setCartCount:(state:any,action:any)=>{

        state.cartCount = action.payload 

    }

}


});

 export default productSlice.reducer;

 export const {addToCart,setItemsToStore,setUserFullName,setCartCount,removeFromCart}  = productSlice.actions