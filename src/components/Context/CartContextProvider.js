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
        
        let updatedItems=cartItems
        let CartItemIndex=cartItems.findIndex(x=>x.name===Item.name)
        if(CartItemIndex===-1){
            let newItem={...Item}
            updatedItems=[...cartItems,newItem]
        }
        else{
            let existingItem=cartItems[CartItemIndex]
            let newItem={...existingItem,quantity:Number(existingItem.quantity)+Number(Item.quantity)}
            updatedItems=[...cartItems.slice(0,CartItemIndex),newItem,...cartItems.slice(CartItemIndex+1)]
        }
        
        setCartItems(updatedItems)
        setTotalItem(prevState=>prevState+1)
        
       
        

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