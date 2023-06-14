import React, { useContext, useRef } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Box from './UI/Box'
import ItemContext from './Context/Item-Context';

const ProductForm = () => {
  const ItemCtx = useContext(ItemContext)
  const nameRef = useRef(null);
  const descriptionRef = useRef(null);
  const priceRef = useRef(null);
  const quantityRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Access form field values using refs
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const price = priceRef.current.value;
    const quantity = quantityRef.current.value;

    // Handle form submission logic here
   let item ={
    name: name,
    description: description,
    price:price,
    quantity:quantity
   }
   ItemCtx.addItem(item)

    // Reset form fields
    nameRef.current.value = '';
    descriptionRef.current.value = '';
    priceRef.current.value = '';
    quantityRef.current.value = '';
  };

  return (
    <Box>
    <Form onSubmit={handleSubmit} >
      <Row>
        <Col xs={12} sm={3}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              ref={nameRef}
              required
            />
          </Form.Group>
        </Col>
        <Col xs={12} sm={3}>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter description"
              ref={descriptionRef}
              required
            />
          </Form.Group>
        </Col>
        <Col xs={12} sm={2}>
          <Form.Group controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter price"
              ref={priceRef}
              required
            />
          </Form.Group>
        </Col>
        <Col xs={12} sm={2}>
          <Form.Group controlId="formQuantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter quantity"
              ref={quantityRef}
              required
            />
          </Form.Group>
        </Col>
        <Col xs={12} sm={2} className='d-flex justify-content-center'>
        <Button variant="primary" type="submit" >
        Add Item
      </Button>
        </Col>
      </Row>

     
    </Form>
    </Box>
  );
};

export default ProductForm;
