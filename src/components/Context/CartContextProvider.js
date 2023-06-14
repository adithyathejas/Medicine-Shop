import CartContext from "./Cart-Context"
import { useState } from "react"

const CartContextProvider = (props)=>{
    const [cartItems,setCartItems]=useState([])
    const [show,setShow]=useState(false);
    const [totalItem,setTotalItem]=useState(0)
    
    const cartToggleHandle=()=>{
        console.log(show)
        setShow(prevState=>!prevState)
    }

    const addToCart=(Item)=>{
        const items=[...cartItems,Item]
        setCartItems(items)
        setTotalItem(prevState=>prevState+1)
        console.log(totalItem)

    }

    

    const cartContext={
        CartItems:cartItems,
        addToCart:addToCart,
        show:show,
        cartToggleHandle:cartToggleHandle,
        totalItem:totalItem

    }
    return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
    )

}

export default CartContextProvider