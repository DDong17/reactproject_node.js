import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product:[]
}

export const createSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action) => {
            return {product:[...state.product,{...action.payload,amount:1}]}
        },
        clearCart:(state) =>{
            return{product:[]}
        },
        increamentProductAmout:(state,action)=>{
            return{products:state.products.map(product =>product.id===action.payload.id?{...product,amout:product.amout+1}:product)}
        },
        decrementProductAmount:(state,action)=>{
            return{products:state.products.map(product =>product.id===action.payload.id?{...product,amout:product.amout-1}:product)}
        }

        
    }

})

export const cartProducts = state =>state.cart.products

export const {addToCart,clearCart,increamentProductAmout,decrementProductAmount}=createSlice.actions

export default createSlice.reducer
