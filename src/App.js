import React from "react";
import Navigation from "./components/Navigation";
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from './components/Form'
import ItemProvider from "./components/Context/Item-Context-Provider";
import ItemList from "./components/ItemList/ItemList";

const App= ()=>{

  return (
    <>
    <Navigation></Navigation>
    <ItemProvider>
    <Form></Form>
    <ItemList/>
    </ItemProvider>
    </>
  )
}

export default App