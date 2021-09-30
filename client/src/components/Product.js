import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

const Product = ({ product, onAdd }) => {
  

  return (
    <Card style={{ width: '23rem' }}>
  <Card.Img variant="top" src={product.image} style = {{height: '100%'}} />
  <Card.Body>
    <Card.Title>{product.title}</Card.Title>
    <Card.Text>
      {product.description}
    </Card.Text>
    <Card.Text>
     In stock: <span>{product.qty}</span>
    </Card.Text>
    <Button onClick={() => onAdd(product)}>Add To Cart</Button>
  </Card.Body>
</Card>
  );
};

export default Product;
