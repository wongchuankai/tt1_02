import React from "react";

const Product = ({ title, price, desc, img, qty }) => {
  return (
    <div>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <div>${price}</div>
      <p>{desc}</p>
      <p>In stock: {qty}</p>
      <div>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
