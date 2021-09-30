import React, { useState } from "react";
import Products from "./components/Products";
import products from "./Dataset/products.json";

function App() {
  return (
    <div>
      <Products products={products} />
    </div>
  );
}

export default App;
