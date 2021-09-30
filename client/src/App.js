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
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const onAdd = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...exists, amount: exists.amount + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { id: product.id, price: product.price, amount: 1 }]);
    }
  };

  const onRemove = (id) => {
    const exists = cart.find((item) => item.id === id);
    if (exists.amount === 1) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...exists, amount: exists.amount - 1 } : item
        )
      );
    }
  };

  const onChangeAmt = (id, direction) => {
    if (cart.find((item) => item.id === id).amount === 1) {
      return setCart(cart.filter((item) => item.id !== id));
    }
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount:
              direction === "inc" ? (item.amount += 1) : (item.amount -= 1),
          };
        }
      })
    );
    // remove from cart if decrease from 1 to 0
  };

  // getProducts, useEffect

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
        <Route exact path="/cart">
          <Cart cart={cart} onRemove={onRemove} onChangeAmt={onChangeAmt} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
