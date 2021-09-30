import React, { useState } from "react";
import Products from "./components/Products";
import Topnavbar from "./components/Topnavbar";
import Checkout from "./components/Checkout";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import products from "./Dataset/products.json";

function App() {
  const [cart, setCart] = useState([]);
  const onAdd = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === item.id ? { ...exists, qty: exists.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  return (
    <Router>
      <Topnavbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products products={products} onAdd={onAdd} />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
