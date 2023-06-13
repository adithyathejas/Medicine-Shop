import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../Context/Cart-Context";

const Item = (props)=>{
    const cartCtx=useContext(CartContext)
    const item=props.item
    const addToCart=()=>{cartCtx.addToCart(item)}
    return (
        <tr>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>{item.price}</td>
          <td>{item.quantity}</td>
          <td>
            <Button onClick={addToCart}>Add to Cart</Button>
          </td>
        </tr>
      );
    };



export default Item