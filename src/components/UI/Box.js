import React from 'react';
import { Container } from 'react-bootstrap';

const Box = (props) => {
  return (
    <Container style={{ backgroundColor: 'grey', height: '200px', padding: '20px',color:'white' }} fluid>
      {props.children}
    </Container>
  );
};

export default Box;