import React, { useState } from "react";
import Product from "./Product";

const Products = ({ products, onAdd, categories }) => {
  const [currentCategory, setCurrentCategory] = useState(1);

  return (
    <main className="block">
      <div>
        <h1>Categories</h1>
        <div className="category-container">
          {categories.map((category, index) => {
            return (
              <div>
                <img
                  src={category.image}
                  alt={category.name}
                  className="small"
                />
                <p>{category.description}</p>
                <button
                  onClick={() => setCurrentCategory(category.id)}
                  key={index}
                  type="botton"
                >
                  {category.name}
                </button>
              </div>
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
