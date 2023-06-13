import CartContext from "./Cart-Context"
import { useState } from "react"

const CartContextProvider = (props)=>{
    const [cartItems,setCartItems]=useState([])
    const [show,setShow]=useState(false);
    
    const cartToggleHandle=()=>{
        console.log(show)
        setShow(prevState=>!prevState)
    }

    const addToCart=(Item)=>{
        const items=[...cartItems,Item]
        setCartItems(items)
    }

    

    const cartContext={
        CartItems:cartItems,
        addToCart:addToCart,
        show:show,
        cartToggleHandle:cartToggleHandle

    }
    return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
    )

}

export default CartContextProvider