import { createContext } from "react";

const CartContext=createContext({
    CartItems:[],
    addToCart:()=>{},
    cartShow:[],
    cartToggleHandle:()=>{},
    totalItem:0,
    updateItems:()=>{}
})

export default CartContext