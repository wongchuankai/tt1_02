import React from "react";

const Product = ({ product, onAdd }) => {
  return (
    <div>
      <img src={product.image} alt={product.title} className="small" />
      <h3>{product.title}</h3>
      <div>${product.price}</div>
      <p>{product.description}</p>
      <p>
        In stock: <span>{product.qty}</span>
      </p>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
