import products from "../Dataset/products.json";
import Product from "./Product";

const Products = () => {
  return (
    <main>
      <h2>Products</h2>
      <div>
        {products.map((product) => {
          const { id, title, price, description, image } = product;
          return (
            <Product
              key={id}
              title={title}
              price={price}
              desc={description}
              img={image}
            ></Product>
          );
        })}
      </div>
    </main>
  );
};

export default Products;
