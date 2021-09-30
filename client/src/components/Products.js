import React, { useState } from "react";
import Product from "./Product";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

const Products = ({ products, onAdd, categories }) => {
  const [currentCategory, setCurrentCategory] = useState(1);

  return (
    <main className="block">
      <div>
        <h1>Categories</h1>
        <div className="category-container">
          {categories.map((category, index) => {
            return (
              <Card style={{ width: '23rem' }}>
                <Card.Img variant="top" src={category.image} style = {{height: '100%'}} />
                <Card.Body>
                  <Card.Title>{category.title}</Card.Title>
                  <Card.Text>
                    {category.description}
                  </Card.Text>
                  <Button onClick={() => setCurrentCategory(category.id)}
                  key={index}
                  type="botton">{category.name}</Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="row">
        <h1>Our products</h1>
        {products.map((product) => {
          if (product.category_id === currentCategory) {
            return <Product key={product.id} product={product} onAdd={onAdd} />;
          }
        })}
      </div>
    </main>
  );
};

export default Products;
