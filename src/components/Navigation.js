import { useContext } from 'react';
import CartContext from './Context/Cart-Context';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import Badge  from 'react-bootstrap/Badge';




function Navigation() {
  const cartCtx=useContext(CartContext)
  return (
    
    <>
     <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Medicine Shop</Navbar.Brand>
          <Button onClick={cartCtx.cartToggleHandle}>Cart <Badge>{cartCtx.totalItem}</Badge></Button>
        </Container>
      </Navbar>
      <br />
       
    </>
  );
}

export default Navigation;