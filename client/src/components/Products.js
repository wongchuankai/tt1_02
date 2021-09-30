import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
  return (
    <main className="block col-2">
      <h1>Our products</h1>
      <div className="row">
        {products.map((product) => {
          const { id, title, price, description, image } = product;
          return (
            <Product
              key={id}
              title={title}
              price={price}
              desc={description}
              img={image}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Products;
