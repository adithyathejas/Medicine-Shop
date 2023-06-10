import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'

function Navigation() {
  return (
    <>
     <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Medicine Shop</Navbar.Brand>
          <Button>Cart</Button>
        </Container>
      </Navbar>
      <br />
       
    </>
  );
}

export default Navigation;