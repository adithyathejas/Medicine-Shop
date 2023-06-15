import React, { useContext,useRef } from "react";
import { Button,Form } from "react-bootstrap";
import CartContext from "../Context/Cart-Context";
import ItemContext from "../Context/Item-Context";


const Item = (props)=>{
    const cartCtx=useContext(CartContext)
    const itemCtx=useContext(ItemContext)
    const amountRef=useRef(null)
    const item=props.item
    
    const addToCart=(e)=>{
      e.preventDefault()
      const Amount = amountRef.current.value
      let  quantity=Amount
      if(Number(item.quantity)>=Number(quantity)){
        cartCtx.addToCart(item)
        itemCtx.updateItems(item,quantity)
        
       
      }
      else{
        alert('no suffient medicine in inventary')
      }
      amountRef.current.value=''
    }

    
    return (
        <tr>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>{item.price}</td>
          <td>{item.quantity}</td>
          
          <td>
          </td>
          <td>
          <Form onSubmit={addToCart}style={{ display: 'flex', alignItems: 'center' }}>
          <Form.Control size="md" type="number" placeholder="quantity" style={{width:'100px',marginRight: '10px'}} ref={amountRef} required/>
          
          <Button type='submit'>Add to Cart</Button>
          </Form>
          </td>
        </tr>
      );
    };



export default Item