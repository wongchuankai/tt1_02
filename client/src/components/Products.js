import products from "../Dataset/products.json";
import Product from "./Product";

const Products = () => {
  return (
    <main className="block">
      <h1>Our products</h1>
      <div className="row">
        {products.map((product) => {
          const { id, title, price, description, image, qty } = product;
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
