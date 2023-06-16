import React from "react";
import Navigation from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form'
import ItemProvider from "./components/Context/Item-Context-Provider";
import ItemList from "./components/ItemList/ItemList";
import CartContextProvider from "./components/Context/CartContextProvider";
import Cart from "./components/Cart/Cart";
import ItemContext from "./components/Context/Item-Context";
import { useEffect,useContext } from "react";

const App= ()=>{
  const itemCtx = useContext(ItemContext)
  useEffect(()=>{
   
    itemCtx.itemSync()
    console.log("item synced")
  },[])

  return (
    
    <>
    <CartContextProvider>
    <Navigation></Navigation>
    <Form></Form>
    <ItemList/>
    <Cart/>
    </CartContextProvider>
    </>
  )
}

export default App