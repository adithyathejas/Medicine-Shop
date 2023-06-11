import React, { useContext } from "react";
import { Button } from "react-bootstrap";

const Item = (props)=>{
    const item=props.item
    return (
        <tr>{console.log(Item)}
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>{item.price}</td>
          <td>{item.quantity}</td>
          <td>
            <Button onClick={() => console.log("addedTOCart")}>Add to Cart</Button>
          </td>
        </tr>
      );
    };



export default Item