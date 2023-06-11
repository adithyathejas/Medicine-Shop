import React, { useContext } from "react";
import ItemContext from "../Context/Item-Context";
import Item from "./Item";
import { Table } from "react-bootstrap";
import Box from "../UI/Box";

const ItemList= ()=>{
    const ItemCtx = useContext(ItemContext)
    const Items=ItemCtx.items
    const Itemlist=Items.map(item=><Item key={item.title} item={item}/>)
    return(
        <Box>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Discription</th>
          <th>Price</th>
          <th>quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>{Itemlist}</tbody>
      </Table>
      </Box>
    )
}

export default ItemList