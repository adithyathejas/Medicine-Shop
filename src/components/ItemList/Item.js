import React, { useContext,useRef } from "react";
import { Button,Form } from "react-bootstrap";
import CartContext from "../Context/Cart-Context";


const Item = (props)=>{
    const cartCtx=useContext(CartContext)
    const item=props.item
    const addToCart=()=>{
      const Amount = amountRef.current.value
      item.quantity=Amount
      cartCtx.addToCart(item)
      amountRef.current.value=''
    }
    const amountRef=useRef(null)
    return (
        <tr>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>{item.price}</td>
          <td>{item.quantity}</td>
          <td>
          <Form.Control size="md" type="number" placeholder="quantity" style={{width:'100px'}} ref={amountRef}/>
          </td>
          <td><Button onClick={addToCart}>Add to Cart</Button></td>
        </tr>
      );
    };



export default Item