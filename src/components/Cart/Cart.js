import { Modal,Button,Table } from "react-bootstrap";
import { useState,useContext } from "react";
import CartContext from "../Context/Cart-Context";
import CartItem from "./CartItem";


const Cart=()=>{
    
    const cartCtx=useContext(CartContext)
    const cartItems=cartCtx.CartItems.map(item=><CartItem key={item.name} item={item}/>)
    const cartToggleHandle=()=>{cartCtx.cartToggleHandle()}

    return(
        <>
        <Modal show={cartCtx.show} onHide={cartToggleHandle}>
            <Modal.Header closeButton>
                <Modal.Title>Medicine Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body><Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>{cartItems}</tbody>
      </Table></Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={cartToggleHandle}>Close</Button>
            </Modal.Footer>
        </Modal>
        </>

    )

}

export default Cart