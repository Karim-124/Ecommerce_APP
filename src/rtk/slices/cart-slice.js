import { createSlice } from "@reduxjs/toolkit";

export const cartSlice= createSlice({
    initialState:[],
    name:"cartSlice",
    reducers:{
        addToCart:(state,action)=>{
           const findProduct=state.find((pro)=>pro.id==action.payload.id)
           if(findProduct){
            findProduct.quantity+=1
           }
           else{
            const productClone={...action.payload,quantity:1}
            state.push(productClone)
           }
        },
        removeFromCart:(state,action)=>{
            return state.filter((pro)=>pro.id!=action.payload.id)
        },
        clear:(state,action)=>{
            return []
        }
    },
})

export const {addToCart,removeFromCart,clear}=cartSlice.actions;
export default cartSlice.reducer;