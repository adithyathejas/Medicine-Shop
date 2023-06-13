import { createContext } from "react";

const CartContext=createContext({
    CartItems:[],
    addToCart:()=>{},
    cartShow:[],
    cartToggleHandle:()=>{}
})

export default CartContext