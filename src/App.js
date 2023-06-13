import React from "react";
import Navigation from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form'
import ItemProvider from "./components/Context/Item-Context-Provider";
import ItemList from "./components/ItemList/ItemList";
import CartContextProvider from "./components/Context/CartContextProvider";
import Cart from "./components/Cart/Cart";

const App= ()=>{

  return (
    <>
    <CartContextProvider>
    <Navigation></Navigation>
    <ItemProvider>
    <Form></Form>
    <ItemList/>
    <Cart/>
    </ItemProvider>
    </CartContextProvider>
    </>
  )
}

export default App