import Product from "./Product";

const Products = ({ products, onAdd }) => {
  return (
    <main className="block">
      <h1>Our products</h1>
      <div className="row">
        {products.map((product) => {
          return <Product key={product.id} product={product} onAdd={onAdd} />;
        })}
      </div>
    </main>
  );
};

export default Products;
