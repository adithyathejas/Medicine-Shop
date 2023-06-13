import React, { useContext } from "react";
import ItemContext from "../Context/Item-Context";
import Item from "./Item";
import { Table } from "react-bootstrap";
import Box from "../UI/Box";

const ItemList= ()=>{
    const ItemCtx = useContext(ItemContext)
    const Items=ItemCtx.items
    const Itemlist=Items.map(item=><Item key={item.name} item={item}/>)
    return(
        <Box>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{Itemlist}</tbody>
      </Table>
      </Box>
    )
}

export default ItemList