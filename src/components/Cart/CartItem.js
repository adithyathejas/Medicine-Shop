const CartItem=(props)=>{
    const item=props.item
    return (
        <tr>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>{item.price}</td>
          <td>{item.quantity}</td>
        </tr>
      );

}

export default CartItem